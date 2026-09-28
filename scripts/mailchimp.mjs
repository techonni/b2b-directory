// Outil Mailchimp de Zunrel, utilisé par Claude en ligne de commande.
// La clé est lue dans la variable d'environnement MAILCHIMP_API_KEY (jamais écrite dans un fichier).
//
//   node --experimental-strip-types scripts/mailchimp.mjs status
//   node --experimental-strip-types scripts/mailchimp.mjs newsletter <slug> <slug>… --subject "…" [--intro "…"] [--campaign <id>] [--tag shopify]
//   node --experimental-strip-types scripts/mailchimp.mjs report <campaign_id>
//   node --experimental-strip-types scripts/mailchimp.mjs cleanup [--apply]
//   node --experimental-strip-types scripts/mailchimp.mjs export
//
// Règles : ce script n'envoie JAMAIS une campagne aux abonnés. Il crée ou met à jour un brouillon
// et envoie un e-mail de test à l'adresse du compte. L'envoi réel se fait seulement après un « oui » de Techonni.

import fs from "node:fs";
import crypto from "node:crypto";
import { guides } from "../src/lib/guides.ts";

const SITE = "https://zunrel.com";
const FREE_CONTACTS = 250;
const FREE_SENDS_MONTH = 500;
const FROM_NAME = "Zunrel";
const REPLY_TO = "contact@zunrel.com";
const TAG_IDS = { shopify: 11404677, leadpages: 11404678, htmlpub: 11404679 };

const key = process.env.MAILCHIMP_API_KEY;
if (!key) {
  console.error("MAILCHIMP_API_KEY manquante.");
  process.exit(1);
}
const API = `https://${key.split("-").pop()}.api.mailchimp.com/3.0`;
const auth = "Basic " + Buffer.from(`zunrel:${key}`).toString("base64");

async function mc(path, { method = "GET", body } = {}) {
  const res = await fetch(API + path, {
    method,
    headers: { Authorization: auth, "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (res.status === 204) return {};
  const data = await res.json();
  if (!res.ok) throw new Error(`${method} ${path} → ${res.status} ${data.title}: ${data.detail}`);
  return data;
}

function args() {
  const out = { _: [] };
  const list = process.argv.slice(3);
  for (let i = 0; i < list.length; i++) {
    if (list[i].startsWith("--")) {
      const name = list[i].slice(2);
      const next = list[i + 1];
      if (next === undefined || next.startsWith("--")) out[name] = true;
      else out[name] = list[++i];
    } else out._.push(list[i]);
  }
  return out;
}

async function mainList() {
  const { lists } = await mc("/lists?count=1");
  return lists[0];
}

// Nombre d'e-mails envoyés depuis le 1er du mois (campagnes envoyées × destinataires).
async function sentThisMonth() {
  const now = new Date();
  const start = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)).toISOString();
  const { campaigns } = await mc(
    `/campaigns?status=sent&since_send_time=${start}&count=100&fields=campaigns.id,campaigns.emails_sent,campaigns.settings.title,campaigns.send_time`,
  );
  return { total: campaigns.reduce((sum, c) => sum + (c.emails_sent || 0), 0), campaigns };
}

async function status() {
  const account = await mc("/?fields=account_name,pricing_plan_type");
  const list = await mainList();
  const s = list.stats;
  const counted = s.member_count + s.unsubscribe_count + s.cleaned_count;
  const sent = await sentThisMonth();
  const left = FREE_SENDS_MONTH - sent.total;
  const perMonth = s.member_count ? Math.floor(left / s.member_count) : Infinity;
  console.log(`Compte : ${account.account_name} (${account.pricing_plan_type})`);
  console.log(`Liste : ${list.name} (${list.id}), double opt-in : ${list.double_optin ? "oui" : "non"}`);
  console.log(`Abonnés : ${s.member_count} · désinscrits : ${s.unsubscribe_count} · nettoyés : ${s.cleaned_count}`);
  console.log(`Contacts comptés par Mailchimp : ${counted} / ${FREE_CONTACTS}`);
  console.log(`E-mails envoyés ce mois-ci : ${sent.total} / ${FREE_SENDS_MONTH} (reste ${left})`);
  console.log(`Newsletters encore possibles ce mois-ci : ${perMonth === Infinity ? "illimité (0 abonné)" : perMonth}`);
  const rhythm = s.member_count <= 110 ? "hebdomadaire possible" : s.member_count <= 230 ? "passer en quinzaine" : "limite proche : exporter et comparer d'autres outils";
  console.log(`Rythme conseillé : ${rhythm}`);
  if (counted >= 200) console.log("⚠️  Plus de 200 contacts : lancer `cleanup` puis `export`.");
}

const esc = (text) =>
  String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function utm(url, campaign) {
  const u = new URL(url, SITE);
  u.searchParams.set("utm_source", "newsletter");
  u.searchParams.set("utm_medium", "email");
  u.searchParams.set("utm_campaign", campaign);
  return u.toString();
}

// Modèle fixe : texte seul (pas d'image = rien de bloqué par les messageries), liens suivis avec UTM.
export function renderNewsletter({ subject, intro, items, campaign }) {
  const rows = items
    .map(
      (guide, index) => `
        <tr><td style="padding:0 0 28px 0;">
          <p style="margin:0 0 6px 0;font-size:13px;line-height:20px;color:#737373;">${index + 1}.</p>
          <a href="${esc(utm(`/guides/${guide.slug}/`, campaign))}" style="font-size:17px;line-height:24px;font-weight:600;color:#171717;text-decoration:none;">${esc(guide.question)}</a>
          <p style="margin:6px 0 10px 0;font-size:15px;line-height:23px;color:#555555;">${esc(guide.summary)}</p>
          <a href="${esc(utm(`/guides/${guide.slug}/`, campaign))}" style="font-size:14px;line-height:20px;color:#171717;text-decoration:underline;">Lire le guide →</a>
        </td></tr>`,
    )
    .join("");
  return `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(subject)}</title></head>
<body style="margin:0;padding:0;background:#fbfbfb;">
<span style="display:none;max-height:0;overflow:hidden;">*|MC_PREVIEW_TEXT|*</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fbfbfb;"><tr><td align="center" style="padding:32px 16px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
    <tr><td style="padding:0 0 28px 0;">
      <a href="${esc(utm("/", campaign))}" style="font-size:15px;font-weight:600;color:#171717;text-decoration:none;">Zunrel</a>
    </td></tr>
    <tr><td style="padding:0 0 12px 0;"><h1 style="margin:0;font-size:22px;line-height:28px;color:#171717;">${esc(subject)}</h1></td></tr>
    <tr><td style="padding:0 0 32px 0;"><p style="margin:0;font-size:15px;line-height:23px;color:#555555;">${esc(intro)}</p></td></tr>
    ${rows}
    <tr><td style="padding:4px 0 32px 0;">
      <p style="margin:0;font-size:15px;line-height:23px;color:#555555;">Tous les guides, classés par thème :
        <a href="${esc(utm("/guides/", campaign))}" style="color:#171717;">zunrel.com/guides</a></p>
    </td></tr>
    <tr><td style="border-top:1px solid #e5e5e5;padding:20px 0 0 0;font-size:12px;line-height:18px;color:#a0a0a0;">
      <p style="margin:0;">Certains liens vers Leadpages, HTML Pub et Shopify présents dans les guides sont des liens affiliés : ils ne changent pas le prix pour vous. Zunrel est un site indépendant.</p>
      <!-- Désinscription et adresse postale : pied de page ajouté automatiquement par Mailchimp. -->
    </td></tr>
  </table>
</td></tr></table>
</body></html>`;
}

async function newsletter() {
  const a = args();
  if (!a._.length || !a.subject) throw new Error('Usage : newsletter <slug>… --subject "…" [--intro "…"] [--campaign id] [--tag shopify]');
  const items = a._.map((slug) => {
    const guide = guides.find((g) => g.slug === slug);
    if (!guide) throw new Error(`Guide inconnu : ${slug}`);
    return guide;
  });
  const date = new Date().toISOString().slice(0, 10);
  const campaignKey = `nl-${date}`;
  const intro =
    a.intro ||
    `${items.length} guides pratiques, étape par étape. Chacun répond à une seule question, dans l'ordre où les choses se font.`;
  const html = renderNewsletter({ subject: a.subject, intro, items, campaign: campaignKey });
  const list = await mainList();

  const recipients = { list_id: list.id };
  if (a.tag) {
    if (!TAG_IDS[a.tag]) throw new Error(`Tag inconnu : ${a.tag}`);
    recipients.segment_opts = { saved_segment_id: TAG_IDS[a.tag] };
  }
  const settings = {
    subject_line: a.subject,
    preview_text: a.preview || intro.slice(0, 140),
    title: `Newsletter ${date} · ${a.subject}`,
    from_name: FROM_NAME,
    reply_to: REPLY_TO,
    auto_footer: false,
  };

  let id = a.campaign;
  if (id) {
    // Les campagnes créées dans l'éditeur visuel de Mailchimp ne peuvent pas recevoir du HTML par l'API.
    const current = await mc(`/campaigns/${id}?fields=content_type,status`);
    if (current.content_type !== "html" && current.content_type !== "template")
      throw new Error(`Campagne ${id} créée dans l'éditeur visuel (${current.content_type}) : lancer sans --campaign pour en créer une nouvelle.`);
    if (current.status !== "save") throw new Error(`Campagne ${id} déjà envoyée ou programmée (${current.status}).`);
    await mc(`/campaigns/${id}`, { method: "PATCH", body: { recipients, settings } });
    console.log(`Brouillon mis à jour : ${id}`);
  } else {
    const created = await mc("/campaigns", { method: "POST", body: { type: "regular", recipients, settings } });
    id = created.id;
    console.log(`Brouillon créé : ${id}`);
  }
  await mc(`/campaigns/${id}/content`, { method: "PUT", body: { html } });
  fs.mkdirSync("newsletters", { recursive: true });
  fs.writeFileSync(`newsletters/${date}.html`, html);
  console.log(`Copie du HTML : newsletters/${date}.html`);

  const checklist = await mc(`/campaigns/${id}/send-checklist`);
  console.log(`Prête à l'envoi : ${checklist.is_ready ? "oui" : "non"}`);
  for (const item of checklist.items) if (item.type !== "success") console.log(`  - ${item.type} : ${item.heading} · ${item.details}`);

  if (!a["no-test"]) {
    const { email } = await mc("/?fields=email");
    await mc(`/campaigns/${id}/actions/test`, { method: "POST", body: { test_emails: [email], send_type: "html" } });
    console.log("E-mail de test envoyé à l'adresse du compte (vérifier aussi les spams).");
  }
  console.log("Rien n'a été envoyé aux abonnés. Envoi réel seulement après le « oui » de Techonni.");
}

async function report() {
  const id = args()._[0];
  if (!id) throw new Error("Usage : report <campaign_id>");
  const r = await mc(`/reports/${id}`);
  const links = await mc(`/reports/${id}/click-details?count=10&fields=urls_clicked.url,urls_clicked.total_clicks,urls_clicked.unique_clicks`);
  const pct = (v) => `${Math.round((v || 0) * 1000) / 10} %`;
  console.log(`${r.campaign_title}`);
  console.log(`Envoyés : ${r.emails_sent} · ouvertures : ${pct(r.opens.open_rate)} · clics : ${pct(r.clicks.click_rate)}`);
  console.log(`Désinscriptions : ${r.unsubscribed} · rebonds : ${r.bounces.hard_bounces} durs, ${r.bounces.soft_bounces} légers`);
  const top = links.urls_clicked.sort((x, y) => y.total_clicks - x.total_clicks);
  console.log("Liens les plus cliqués :");
  for (const link of top) console.log(`  ${link.total_clicks} clics (${link.unique_clicks} uniques) · ${link.url.split("?")[0]}`);
  const best = top.find((link) => link.total_clicks > 0);
  const worst = [...top].reverse().find((link) => link.url.includes("/guides/") && link.total_clicks === 0);
  console.log("Conclusion :");
  console.log(`  - À répéter : ${best ? best.url.split("?")[0].replace(SITE, "") : "pas encore de clic"}`);
  console.log(`  - À laisser de côté : ${worst ? worst.url.split("?")[0].replace(SITE, "") : "aucun lien sans clic"}`);
  console.log(`  - Désinscriptions : ${r.unsubscribed > 1 ? "à surveiller, espacer les envois" : "normal"}`);
}

async function cleanup() {
  const a = args();
  const list = await mainList();
  const gone = [];
  for (const state of ["unsubscribed", "cleaned"]) {
    const { members } = await mc(`/lists/${list.id}/members?status=${state}&count=1000&fields=members.email_address,members.status`);
    gone.push(...members);
  }
  if (!gone.length) return console.log("Aucun contact désinscrit ou nettoyé : rien à archiver.");
  for (const m of gone) console.log(`  ${m.status} · ${m.email_address}`);
  if (!a.apply) return console.log(`${gone.length} contact(s) à archiver. Relancer avec --apply après le « oui » de Techonni.`);
  for (const m of gone) {
    const hash = crypto.createHash("md5").update(m.email_address.toLowerCase()).digest("hex");
    await mc(`/lists/${list.id}/members/${hash}`, { method: "DELETE" });
  }
  console.log(`${gone.length} contact(s) archivé(s). Ils ne comptent plus dans la limite.`);
}

async function exportCsv() {
  const list = await mainList();
  const rows = ["email,status,tags,inscrit_le"];
  for (let offset = 0; ; offset += 1000) {
    const { members, total_items } = await mc(
      `/lists/${list.id}/members?count=1000&offset=${offset}&fields=total_items,members.email_address,members.status,members.tags,members.timestamp_opt`,
    );
    for (const m of members)
      rows.push([m.email_address, m.status, m.tags.map((t) => t.name).join(" "), m.timestamp_opt || ""].join(","));
    if (offset + 1000 >= total_items) break;
  }
  // Données personnelles : le dossier exports/ est ignoré par git.
  fs.mkdirSync("exports", { recursive: true });
  const file = `exports/contacts-${new Date().toISOString().slice(0, 10)}.csv`;
  fs.writeFileSync(file, rows.join("\n") + "\n");
  console.log(`${rows.length - 1} contact(s) exporté(s) dans ${file}`);
}

const commands = { status, newsletter, report, cleanup, export: exportCsv };
const command = commands[process.argv[2]];
if (!command) {
  console.error(`Commandes : ${Object.keys(commands).join(", ")}`);
  process.exit(1);
}
command().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
