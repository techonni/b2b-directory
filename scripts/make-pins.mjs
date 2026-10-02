// Crée les épingles Pinterest (1000 × 1500, JPEG) des guides qui n'en ont pas encore,
// dans public/pins/<slug>.jpg, avec le même style que les épingles existantes.
// Rendu avec Chromium (pas de dépendance npm) : le titre et la liste des étapes.
//
// Lancer :
//   node --experimental-strip-types scripts/make-pins.mjs [--fonts <dossier Lato>] [--chrome <chemin>] [--force] [--variant erreurs] [slug…]
// --variant erreurs : deuxième épingle par guide (fond sombre, les erreurs à éviter au lieu des étapes),
// dans public/pins/erreurs/<slug>.jpg, pour varier les épingles d'un même guide sur Pinterest.
// Le dossier des polices doit contenir Lato-Black.ttf, Lato-Bold.ttf et Lato-Regular.ttf
// (dépôt google/fonts, dossier ofl/lato).
import { spawn } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const args = process.argv.slice(2);
const option = (name, fallback) => {
  const index = args.indexOf(name);
  if (index === -1) return fallback;
  const [value] = args.splice(index, 2).slice(1);
  return value;
};
const fonts = option("--fonts", join(root, "fonts"));
const chrome = option("--chrome", "/opt/pw-browsers/chromium");
const variant = option("--variant", "");
const force = args.includes("--force");
const outDir = join(root, "public/pins", variant);
mkdirSync(outDir, { recursive: true });
const only = args.filter((arg) => !arg.startsWith("--"));

const work = mkdtempSync(join(tmpdir(), "zunrel-pins-"));
copyFileSync(join(root, "src/lib/guides.ts"), join(work, "guides.mts"));
const { guides } = await import(join(work, "guides.mts"));

// Titres courts et accrocheurs pour l'épingle (sinon : la question du guide).
// Le mot entre [crochets] est mis en couleur.
const titles = {
  "combien-coute-leadpages": "Combien coûte [Leadpages] en 2026 ?",
  "combien-coute-shopify": "Combien coûte [Shopify] en 2026 ?",
  "ameliorer-le-taux-de-conversion-de-ses-pages-de-a-a-z": "Plus de [contacts] avec les mêmes visiteurs",
  "regler-l-expedition-shopify": "Régler ses frais de [livraison] Shopify",
  "rediger-les-politiques-shopify": "Les [politiques] de votre boutique Shopify",
  "creer-un-menu-shopify": "Un [menu] clair pour votre boutique",
  "ouvrir-sa-boutique-shopify-au-public": "Ouvrir sa boutique au [public]",
  "creer-un-tunnel-de-vente-avec-leadpages-et-shopify-de-a-a-z": "Un [tunnel de vente] Leadpages + Shopify",
  "ajouter-des-variantes-shopify": "Tailles et couleurs : les [variantes] Shopify",
  "ajouter-un-formulaire-de-contact-shopify": "Une page [Contact] pour votre boutique",
  "suivre-ses-commandes-et-expedier-shopify": "Expédier vos [commandes] Shopify",
  "ajouter-google-analytics-a-une-page-leadpages": "[Google Analytics] sur Leadpages",
  "creer-une-page-de-remerciement-leadpages": "Une page [Merci] qui convertit",
  "vendre-sur-instagram-avec-shopify": "Vendre sur [Instagram] avec Shopify",
  "relancer-les-paniers-abandonnes-shopify": "Relancer les [paniers abandonnés] sur Shopify",
  "creer-une-page-lien-en-bio-avec-html-pub": "Votre page [lien en bio] Instagram et TikTok",
};

const escape = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const title = (guide) => {
  const raw = titles[guide.slug] ?? guide.question.replace(/^Comment /, "").replace(/^./, (c) => c.toUpperCase());
  return escape(raw).replace(/\[([^\]]+)\]/g, '<span class="hl">$1</span>');
};

function html(guide) {
  const shop = guide.theme === "boutique";
  const badge = shop ? "Shopify" : guide.slug.includes("html-pub") ? "HTML Pub" : "Leadpages";
  const errors = variant === "erreurs";
  const shorten = (text) => {
    const head = text.split(/ : |: | \(|, alors que /)[0].replace(/\.$/, "");
    return head.length > 125 ? `${head.slice(0, 122).replace(/[\s,]+\S*$/, "")}…` : head;
  };
  // Au plus 3 erreurs, et moins si elles sont longues, pour tenir dans la carte.
  const pitfalls = guide.pitfalls.slice(0, 3).map(shorten);
  while (pitfalls.length > 1 && pitfalls.join("").length > 190) pitfalls.pop();
  const steps = errors ? pitfalls.map(escape) : guide.steps.slice(0, 5).map((step) => escape(step.title));
  const colors = errors
    ? { bg: shop ? "#0b2e24" : "#1e1446", text: "#ffffff", hl: shop ? "#0b2e24" : "#1e1446", hlBg: "#ffd166", badgeBg: "#ffd166", badgeText: "#171717", card: "#ffffff", cardText: "#171717", dot: "#e5484d", foot: "#666666" }
    : shop
    ? { bg: "#0f5c46", text: "#ffffff", hl: "#86e3b5", badgeBg: "#ffffff", badgeText: "#0f5c46", card: "#ffffff", cardText: "#171717", dot: "#0f5c46", foot: "#666666" }
    : { bg: "#efeafd", text: "#1e1446", hl: "#ffffff", hlBg: "#5b3df5", badgeBg: "#5b3df5", badgeText: "#ffffff", card: "#ffffff", cardText: "#1e1446", dot: "#5b3df5", foot: "#666666" };
  const dots = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * 2 * Math.PI;
    return `<circle cx="${12 + 8.1 * Math.sin(a)}" cy="${12 - 8.1 * Math.cos(a)}" r="1.25" fill="${colors.text}"/>`;
  }).join("");
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Lato;font-weight:900;src:url("file://${fonts}/Lato-Black.ttf")}
@font-face{font-family:Lato;font-weight:700;src:url("file://${fonts}/Lato-Bold.ttf")}
@font-face{font-family:Lato;font-weight:400;src:url("file://${fonts}/Lato-Regular.ttf")}
*{box-sizing:border-box;margin:0}
body{width:1000px;height:1500px;background:${colors.bg};color:${colors.text};font-family:Lato,sans-serif;position:relative;overflow:hidden}
.top{position:absolute;top:60px;left:70px;right:70px;display:flex;justify-content:space-between;align-items:center}
.brand{display:flex;align-items:center;gap:14px;font-weight:700;font-size:34px}
.badge{background:${colors.badgeBg};color:${colors.badgeText};font-weight:900;font-size:24px;padding:12px 24px;border-radius:26px}
h1{position:absolute;top:160px;left:70px;right:70px;font-weight:900;font-size:${guide.question.length > 60 ? 70 : 78}px;line-height:1.1;letter-spacing:-1px}
.hl{color:${colors.hl};${colors.hlBg ? `background:${colors.hlBg};padding:0 14px;border-radius:12px;` : ""}}
.shot{position:absolute;top:470px;left:60px;right:60px;height:470px;border-radius:18px;border:8px solid #fff;overflow:hidden;background:#fff;box-shadow:0 30px 60px rgba(0,0,0,.25);transform:rotate(${shop ? -2 : 0}deg)}
.shot img{width:100%;height:100%;object-fit:cover;object-position:top left}
.card{position:absolute;left:60px;right:60px;bottom:0;height:470px;background:${colors.card};color:${colors.cardText};border-radius:24px 24px 0 0;padding:44px 50px}
.card ol{list-style:none;padding:0;margin:0}
.card li{display:flex;align-items:center;gap:20px;font-weight:700;font-size:31px;line-height:1.2;margin-bottom:22px}
.card li span{flex:none;width:48px;height:48px;border-radius:50%;background:${colors.dot};color:#fff;font-size:22px;display:flex;align-items:center;justify-content:center}
.kicker{font-weight:900;font-size:26px;letter-spacing:1px;text-transform:uppercase;color:${colors.dot};margin-bottom:24px}
${errors ? ".card li{font-size:27px;margin-bottom:18px}" : ""}
.foot{position:absolute;left:50px;right:50px;bottom:40px;border-top:1px solid #e5e5e5;padding-top:24px;display:flex;justify-content:space-between;align-items:center}
.foot small{font-size:26px;color:${colors.foot}}
.foot b{font-weight:900;font-size:34px}
</style></head><body>
<div class="top"><div class="brand"><svg width="44" height="44" viewBox="0 0 24 24">${dots}</svg>Zunrel</div><div class="badge">${badge}</div></div>
<h1>${title(guide)}</h1>
<div class="card">${errors ? '<p class="kicker">Les erreurs à éviter</p>' : ""}<ol>${steps.slice(0, 4).map((step, i) => `<li><span>${errors ? "✕" : i + 1}</span>${step}</li>`).join("")}</ol>
<div class="foot"><small>Guide gratuit, étape par étape</small><b>zunrel.com</b></div></div>
</body></html>`;
}

const targets = guides.filter(
  (guide) => (only.length ? only.includes(guide.slug) : true) && (force || !existsSync(join(outDir, `${guide.slug}.jpg`))),
);
if (!targets.length) {
  console.log("Toutes les épingles existent déjà.");
  process.exit(0);
}

const port = 9300 + Math.floor(Math.random() * 500);
const browser = spawn(chrome, ["--headless=new", "--no-sandbox", "--disable-gpu", "--allow-file-access-from-files", `--remote-debugging-port=${port}`, "about:blank"], { stdio: "ignore" });
let version;
for (let i = 0; i < 50 && !version; i++) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  version = await fetch(`http://127.0.0.1:${port}/json/version`).then((r) => r.json()).catch(() => undefined);
}
const socket = new WebSocket(version.webSocketDebuggerUrl);
await new Promise((resolve) => socket.addEventListener("open", resolve, { once: true }));
let id = 0;
const pending = new Map();
socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    pending.get(message.id)(message);
    pending.delete(message.id);
  }
});
const send = (method, params = {}, sessionId) =>
  new Promise((resolve, reject) => {
    const messageId = ++id;
    pending.set(messageId, (message) => (message.error ? reject(new Error(message.error.message)) : resolve(message.result)));
    socket.send(JSON.stringify({ id: messageId, method, params, sessionId }));
  });

const { targetId } = await send("Target.createTarget", { url: "about:blank" });
const { sessionId } = await send("Target.attachToTarget", { targetId, flatten: true });
await send("Emulation.setDeviceMetricsOverride", { width: 1000, height: 1500, deviceScaleFactor: 1, mobile: false }, sessionId);

for (const guide of targets) {
  const file = join(work, `${guide.slug}.html`);
  writeFileSync(file, html(guide));
  await send("Page.navigate", { url: `file://${file}` }, sessionId);
  await send(
    "Runtime.evaluate",
    { expression: "new Promise(r=>{const go=()=>document.fonts.ready.then(()=>setTimeout(r,300));document.readyState==='complete'?go():addEventListener('load',go)})", awaitPromise: true },
    sessionId,
  );
  const { data } = await send("Page.captureScreenshot", { format: "jpeg", quality: 85, clip: { x: 0, y: 0, width: 1000, height: 1500, scale: 1 } }, sessionId);
  writeFileSync(join(outDir, `${guide.slug}.jpg`), Buffer.from(data, "base64"));
  console.log(`épingle créée : ${join("public/pins", variant, `${guide.slug}.jpg`)}`);
}

socket.close();
browser.kill();
