// Plan du site pour Google : toutes les pages publiques de Zunrel.
import type { APIRoute } from "astro";
import { activeFormats, guides, themes, tools } from "../lib/guides";

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? "https://zunrel.com/").replace(/\/$/, "");
  const lastGuide = guides.map((guide) => guide.updatedOn).sort().at(-1);

  const pages: { path: string; lastmod?: string }[] = [
    { path: "/", lastmod: lastGuide },
    { path: "/guides/", lastmod: lastGuide },
    { path: "/outils/" },
    { path: "/a-propos/" },
    { path: "/kit-media/" },
    { path: "/conditions/" },
    ...guides.map((guide) => ({ path: `/guides/${guide.slug}/`, lastmod: guide.updatedOn })),
    ...activeFormats().map((item) => ({ path: `/formats/${item.slug}/`, lastmod: lastGuide })),
    ...themes.map((theme) => ({ path: `/themes/${theme.slug}/` })),
    ...tools.map((tool) => ({ path: `/outils/${tool.slug}/` })),
  ];

  const urls = pages
    .map(
      (page) =>
        `  <url><loc>${base}${page.path}</loc>${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ""}</url>`,
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
