import type { Tool } from "./directory-head";

export const tools4: Tool[] = [
  {
    slug: "linear",
    name: "Linear",
    summary: "Planning and building products.",
    categories: ["project-management"],
    website: "https://linear.app",
    pricingUrl: "https://linear.app/pricing",
    review: {
      checkedOn: "2026-09-18",
      pricing:
        "Linear publishes a free plan for small teams and paid plans billed per active user. The pricing page lists the current seat prices.",
      whatItDoes:
        "Linear is a project tool for issues, projects, and cycles. The site presents it as the place software teams plan and build products.",
      whoItsFor:
        "Product and engineering teams that want a fast issue tracker, not a general work suite.",
      strengths:
        "The product surface is narrow: issues, projects, and cycles. Seat prices are published, so a team can estimate the cost before a sales call.",
      weaknesses:
        "Teams that need docs, goals, and chat in the same product still keep other tools. Heavier controls sit on the higher plans.",
      verdict:
        "Linear is a focused planning tool with a public seat price. Budget the per-user plan if the team is past the free tier.",
      alternatives: ["asana", "jira", "clickup"],
    },
  },
  {
    slug: "clickup",
    name: "ClickUp",
    summary: "Tasks, docs, goals, and chat in one app.",
    categories: ["project-management"],
    website: "https://clickup.com",
    pricingUrl: "https://clickup.com/pricing",
    review: {
      checkedOn: "2026-07-09",
      pricing:
        "ClickUp publishes a free plan and paid plans per member. The pricing page is the source for the current seat price.",
      whatItDoes:
        "ClickUp combines tasks, docs, goals, and chat so a team can keep work in one app.",
      whoItsFor:
        "Teams that would rather configure one tool than stitch a tracker, a wiki, and a chat app.",
      strengths:
        "A free plan exists, and the paid ladder is public.",
      weaknesses:
        "The product is broad. The useful setup takes time, and some views are plan-gated.",
      verdict:
        "ClickUp trades focus for coverage. Price the plan that unlocks the views the team will actually use.",
      alternatives: ["notion", "asana", "jira"],
    },
  },
  {
    slug: "jira",
    name: "Jira",
    summary: "Issues, boards, and delivery for software teams.",
    categories: ["project-management"],
    website: "https://www.atlassian.com/software/jira",
    pricingUrl: "https://www.atlassian.com/software/jira/pricing",
  },
  {
    slug: "trello",
    name: "Trello",
    summary: "Boards, lists, and cards for straightforward work.",
    categories: ["project-management"],
    website: "https://trello.com",
    pricingUrl: "https://trello.com/pricing",
  },
  {
    slug: "basecamp",
    name: "Basecamp",
    summary: "Projects, message boards, and a flat team price.",
    categories: ["project-management"],
    website: "https://basecamp.com",
    pricingUrl: "https://basecamp.com/pricing",
  }
];
