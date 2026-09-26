# B2B software directory

A small directory of B2B software, laid out as a narrow editorial page: categories, tool notes, and a search that stays in the browser.

The subscribe field does not send anything. It only confirms on the page.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` home, with categories, popular tools, and the latest reviews
- `/categories` and `/categories/[slug]`
- `/reviews`
- `/tools/[slug]`
- `/about`
- `/search?q=`

## Publish

The site is a static Next.js export. GitHub Actions in `.github/workflows/pages.yml` builds it and deploys GitHub Pages for this repository.
