import type { Tool } from "./directory-head";

export const tools5: Tool[] = [
  {
    slug: "airtable",
    name: "Airtable",
    summary: "Spreadsheets that behave like a shared database.",
    categories: ["project-management"],
    website: "https://www.airtable.com",
    pricingUrl: "https://www.airtable.com/pricing",
  },
  {
    slug: "shortcut",
    name: "Shortcut",
    summary: "Stories, iterations, and docs for product teams.",
    categories: ["project-management"],
    website: "https://www.shortcut.com",
    pricingUrl: "https://www.shortcut.com/pricing",
  },
  {
    slug: "mixpanel",
    name: "Mixpanel",
    summary: "Product analytics on events people actually take.",
    categories: ["analytics"],
    website: "https://mixpanel.com",
    pricingUrl: "https://mixpanel.com/pricing/",
  },
  {
    slug: "posthog",
    name: "PostHog",
    summary: "Product analytics, session replay, and feature flags.",
    categories: ["analytics"],
    website: "https://posthog.com",
    pricingUrl: "https://posthog.com/pricing",
  },
  {
    slug: "plausible",
    name: "Plausible",
    summary: "Simple website analytics without a cookie banner.",
    categories: ["analytics"],
    website: "https://plausible.io",
    pricingUrl: "https://plausible.io/pricing",
  },
  {
    slug: "hotjar",
    name: "Hotjar",
    summary: "Heatmaps and recordings of how people use a page.",
    categories: ["analytics"],
    website: "https://www.hotjar.com",
    pricingUrl: "https://www.hotjar.com/pricing/",
  },
  {
    slug: "matomo",
    name: "Matomo",
    summary: "Web analytics you can host yourself.",
    categories: ["analytics"],
    website: "https://matomo.org",
    pricingUrl: "https://matomo.org/pricing/",
  },
  {
    slug: "github",
    name: "GitHub",
    summary: "Repositories, pull requests, and CI/CD for software teams.",
    categories: ["developer-tools"],
    website: "https://github.com",
    pricingUrl: "https://github.com/pricing",
    review: {
      checkedOn: "2026-08-14",
      pricing:
        "GitHub publishes a free plan, a Team plan per user, and Enterprise. Actions minutes and storage have their own included amounts.",
      whatItDoes:
        "GitHub hosts repositories, pull requests, and CI. The pricing page separates the seat from Actions and packages.",
      whoItsFor:
        "Software teams that already keep code in git and want review and automation next to it.",
      strengths:
        "The free plan is usable, and the Team price is a public per-user number.",
      weaknesses:
        "CI minutes, storage, and larger runners are metered after the included amount. The seat is not the whole bill.",
      verdict:
        "GitHub's seat price is the easy part. Budget Actions if the team builds on every push.",
      alternatives: ["gitlab", "bitbucket", "sentry"],
    },
  },
  {
    slug: "gitlab",
    name: "GitLab",
    summary: "Git hosting with CI and a self-managed option.",
    categories: ["developer-tools"],
    website: "https://about.gitlab.com",
    pricingUrl: "https://about.gitlab.com/pricing/",
  }
];
