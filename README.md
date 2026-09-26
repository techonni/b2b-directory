# B2B software directory

A small directory of B2B software, laid out as a narrow editorial page: categories, tool notes, and a search that stays in the browser.

Built with Astro. The subscribe field does not send anything. It only confirms on the page.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:4321/b2b-directory/](http://localhost:4321/b2b-directory/).

## Pages

- `/` home, with categories, popular tools, and the latest reviews
- `/categories` and `/categories/[slug]`
- `/reviews`
- `/tools/[slug]`
- `/about`
- `/search?q=`

## Publish

`npm run build` writes a static site to `dist/`. The site is configured for GitHub Pages at `https://techonni.github.io/b2b-directory/`.

GitHub Actions in `.github/workflows/pages.yml` builds that folder and deploys it when the workflow is allowed to run.
