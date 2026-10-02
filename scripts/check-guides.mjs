// Vérifie le contenu des guides sans construire le site (le registre npm est parfois bloqué) :
// syntaxe de src/lib/guides.ts, slugs `related` et `tools`, épingles Pinterest,
// guides qui ont moins de 2 liens internes, et guides à remettre à jour (plus de 30 jours).
// Lancer : node --experimental-strip-types scripts/check-guides.mjs
import { copyFileSync, existsSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const copy = join(mkdtempSync(join(tmpdir(), "zunrel-")), "guides.mts");
copyFileSync(join(root, "src/lib/guides.ts"), copy);
const { guides, tools, themes } = await import(copy);

const slugs = new Set(guides.map((guide) => guide.slug));
const toolSlugs = new Set(tools.map((tool) => tool.slug));
const themeSlugs = new Set(themes.map((theme) => theme.slug));
const inbound = Object.fromEntries(guides.map((guide) => [guide.slug, 0]));
const errors = [];
const warnings = [];

if (slugs.size !== guides.length) errors.push("slug en double");
for (const guide of guides) {
  if (!themeSlugs.has(guide.theme)) errors.push(`${guide.slug} : thème inconnu ${guide.theme}`);
  for (const slug of guide.related) {
    if (!slugs.has(slug)) errors.push(`${guide.slug} : related inconnu ${slug}`);
    else if (slug !== guide.slug) inbound[slug]++;
  }
  for (const tool of guide.tools) if (!toolSlugs.has(tool.slug)) errors.push(`${guide.slug} : outil inconnu ${tool.slug}`);
  if (!existsSync(join(root, "public/pins", `${guide.slug}.jpg`))) warnings.push(`${guide.slug} : pas d'épingle Pinterest`);
}

const orphans = Object.entries(inbound).filter(([, count]) => count < 2);
for (const [slug, count] of orphans) warnings.push(`${slug} : seulement ${count} lien(s) interne(s)`);

const today = new Date();
const stale = guides
  .map((guide) => ({ slug: guide.slug, days: Math.floor((today - new Date(guide.updatedOn)) / 86400000) }))
  .filter((item) => item.days > 30)
  .sort((a, b) => b.days - a.days);
for (const item of stale) warnings.push(`${item.slug} : pas mis à jour depuis ${item.days} jours`);

console.log(`${guides.length} guides · ${errors.length} erreur(s) · ${warnings.length} avertissement(s)`);
for (const line of errors) console.log(`ERREUR  ${line}`);
for (const line of warnings) console.log(`à faire ${line}`);
process.exit(errors.length ? 1 : 0);
