import type { Tool } from "./directory-head";

export const tools6: Tool[] = [
  {
    slug: "sentry",
    name: "Sentry",
    summary: "Error tracking for applications in production.",
    categories: ["developer-tools"],
    website: "https://sentry.io",
    pricingUrl: "https://sentry.io/pricing/",
  },
  {
    slug: "vercel",
    name: "Vercel",
    summary: "Hosting and previews for frontend deploys.",
    categories: ["developer-tools"],
    website: "https://vercel.com",
    pricingUrl: "https://vercel.com/pricing",
  },
  {
    slug: "datadog",
    name: "Datadog",
    summary: "Infrastructure, logs, and application monitoring.",
    categories: ["developer-tools"],
    website: "https://www.datadoghq.com",
    pricingUrl: "https://www.datadoghq.com/pricing/",
  },
  {
    slug: "cloudflare",
    name: "Cloudflare",
    summary: "DNS, CDN, and application security at the edge.",
    categories: ["developer-tools"],
    website: "https://www.cloudflare.com",
    pricingUrl: "https://www.cloudflare.com/plans/",
  },
  {
    slug: "circleci",
    name: "CircleCI",
    summary: "Continuous integration for build and test pipelines.",
    categories: ["developer-tools"],
    website: "https://circleci.com",
    pricingUrl: "https://circleci.com/pricing/",
  },
  {
    slug: "pagerduty",
    name: "PagerDuty",
    summary: "On-call, incidents, and alerting for production.",
    categories: ["developer-tools"],
    website: "https://www.pagerduty.com",
    pricingUrl: "https://www.pagerduty.com/pricing/",
  },
  {
    slug: "bitbucket",
    name: "Bitbucket",
    summary: "Git repositories and pull requests next to Jira.",
    categories: ["developer-tools"],
    website: "https://bitbucket.org",
    pricingUrl: "https://www.atlassian.com/software/bitbucket/pricing",
  },
  {
    slug: "slack",
    name: "Slack",
    summary: "Chat and collaboration for teams.",
    categories: ["communication"],
    website: "https://slack.com",
    pricingUrl: "https://slack.com/pricing",
    review: {
      checkedOn: "2026-08-21",
      pricing:
        "Slack publishes a free plan and paid plans per active user. The pricing page lists Pro and Business+ beside the free tier.",
      whatItDoes:
        "Slack is team chat: channels, threads, and apps. It is the place a company talks, not the system of record.",
      whoItsFor:
        "Teams that already live in channels and want history, huddles, and app notifications in one client.",
      strengths:
        "The free plan is public, and paid plans show a per-user price.",
      weaknesses:
        "Message history on the free plan is limited. A company pays for every active user, including light ones.",
      verdict:
        "Slack is a per-user chat seat. Check the history limit on the free plan before assuming the archive is kept.",
      alternatives: ["zoom", "notion", "webex"],
    },
  },
  {
    slug: "zoom",
    name: "Zoom",
    summary: "Video meetings for a company.",
    categories: ["communication"],
    website: "https://zoom.us",
    pricingUrl: "https://zoom.us/pricing",
  }
];
