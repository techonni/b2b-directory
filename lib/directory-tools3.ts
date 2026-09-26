import type { Tool } from "./directory-head";

export const tools3: Tool[] = [
  {
    slug: "gusto",
    name: "Gusto",
    summary: "Payroll, benefits, and employee records.",
    categories: ["hr-payroll"],
    website: "https://gusto.com",
    pricingUrl: "https://gusto.com/product/pricing",
  },
  {
    slug: "lattice",
    name: "Lattice",
    summary: "Reviews, goals, and the HR record beside them.",
    categories: ["hr-payroll"],
    website: "https://lattice.com",
    pricingUrl: "https://lattice.com/pricing",
  },
  {
    slug: "asana",
    name: "Asana",
    summary: "Work management for tasks, projects, and workflows.",
    categories: ["project-management"],
    website: "https://asana.com",
    pricingUrl: "https://asana.com/pricing",
    review: {
      checkedOn: "2026-07-30",
      pricing:
        "Asana publishes a free plan and paid plans billed per user. The pricing page lists what each tier adds.",
      whatItDoes:
        "Asana tracks tasks, projects, and workflows. It is a work graph more than a document suite.",
      whoItsFor:
        "Teams that coordinate work across functions and want the plan visible without a developer tool.",
      strengths:
        "The free plan is public, and the per-user paid plans say what they unlock.",
      weaknesses:
        "Portfolios, goals, and heavier automation sit on the upper plans. A growing team feels the seat price.",
      verdict:
        "Asana is a clear per-user work tool. Match the plan to the views you need, not to the longest feature list.",
      alternatives: ["linear", "clickup", "jira"],
    },
  },
  {
    slug: "notion",
    name: "Notion",
    summary: "An AI workspace for notes, docs, and projects.",
    categories: ["communication", "project-management"],
    website: "https://www.notion.com",
    pricingUrl: "https://www.notion.com/pricing",
    review: {
      checkedOn: "2026-09-25",
      pricing:
        "Freemium. Free is $0 per member/month. Plus is $10 per seat/month and Business is $20 per seat/month. Custom agents are free to try, then $10 per 1,000 monthly Notion credits.",
      whatItDoes:
        "Notion's site describes an AI workspace for custom agents, search across apps, and automating busywork. The pricing page lists Free, Plus, and Business seat prices, plus a credit price for custom agents.",
      whoItsFor:
        "Free is priced at $0 per member/month. Plus and Business are per-seat plans for teams that need more than the free plan.",
      strengths:
        "Seat prices are published: $0, $10, and $20 per member or seat each month. Agent usage has its own published rate after the trial: $10 per 1,000 monthly credits.",
      weaknesses:
        "The free plan has a block storage limit; the pricing page has an FAQ about going over it. Agent work is metered in credits on top of the seat price.",
      verdict:
        "Notion publishes a simple seat ladder and a separate credit price for agents. Budget both if the team plans to run custom agents.",
      alternatives: ["confluence", "slack", "clickup"],
    },
  }
];
