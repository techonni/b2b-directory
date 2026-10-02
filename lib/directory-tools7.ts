import type { Tool } from "./directory-head";

export const tools7: Tool[] = [
  {
    slug: "loom",
    name: "Loom",
    summary: "Short screen recordings instead of a meeting.",
    categories: ["communication"],
    website: "https://www.loom.com",
    pricingUrl: "https://www.loom.com/pricing",
  },
  {
    slug: "webex",
    name: "Webex",
    summary: "Meetings and calling for larger companies.",
    categories: ["communication"],
    website: "https://www.webex.com",
    pricingUrl: "https://www.webex.com/pricing/index.html",
  },
  {
    slug: "confluence",
    name: "Confluence",
    summary: "A team workspace for creating and sharing knowledge.",
    categories: ["communication"],
    website: "https://www.atlassian.com/software/confluence",
    pricingUrl: "https://www.atlassian.com/software/confluence/pricing",
    review: {
      checkedOn: "2026-07-16",
      pricing:
        "Confluence publishes a free plan and paid plans per user. The pricing page sits next to the rest of Atlassian's seat prices.",
      whatItDoes:
        "Confluence is a team workspace for pages, spaces, and shared knowledge.",
      whoItsFor:
        "Teams that already use Jira and want the writing to live beside the tickets.",
      strengths:
        "A free plan exists, and the paid per-user price is published.",
      weaknesses:
        "Pages get hard to find without someone tending the spaces. The useful permissions sit on paid plans.",
      verdict:
        "Confluence is a knowledge base with a public seat price. Budget a person to keep the spaces usable.",
      alternatives: ["notion", "slack", "clickup"],
    },
  },
  {
    slug: "figma",
    name: "Figma",
    summary: "Interface design and prototypes in the browser.",
    categories: ["design"],
    website: "https://www.figma.com",
    pricingUrl: "https://www.figma.com/pricing/",
  },
  {
    slug: "sketch",
    name: "Sketch",
    summary: "Mac-native design files and shared libraries.",
    categories: ["design"],
    website: "https://www.sketch.com",
    pricingUrl: "https://www.sketch.com/pricing/",
  },
  {
    slug: "framer",
    name: "Framer",
    summary: "Sites designed and published from the canvas.",
    categories: ["design"],
    website: "https://www.framer.com",
    pricingUrl: "https://www.framer.com/pricing",
  },
  {
    slug: "miro",
    name: "Miro",
    summary: "A shared whiteboard for workshops and diagrams.",
    categories: ["design"],
    website: "https://miro.com",
    pricingUrl: "https://miro.com/pricing/",
  },
  {
    slug: "1password",
    name: "1Password",
    summary: "Shared passwords and vaults for a company.",
    categories: ["security"],
    website: "https://1password.com",
    pricingUrl: "https://1password.com/business-pricing",
  },
  {
    slug: "okta",
    name: "Okta",
    summary: "Single sign-on and workforce identity.",
    categories: ["security"],
    website: "https://www.okta.com",
    pricingUrl: "https://www.okta.com/pricing/",
  }
];
