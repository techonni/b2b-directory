# Zunrel

Guides « comment faire » pour Leadpages, HTML Pub et Shopify, étape par étape : https://zunrel.com

Site statique Astro + Tailwind, publié sur Cloudflare Pages (projet `zunrel`) à chaque push sur `main`. Le Worker `zunrel` ne fait que renvoyer vers `zunrel.pages.dev` : ne pas lancer `wrangler deploy`.

- Contenu (thèmes, guides, outils) : `src/lib/guides.ts`
- Plan du site : `src/pages/sitemap.xml.ts` → https://zunrel.com/sitemap.xml

## Lancer en local

```
npm install
npm run dev
```

Puis ouvrir http://localhost:4321/.
