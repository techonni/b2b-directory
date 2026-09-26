import type { Tool } from "./directory-head";

export const tools0: Tool[] = [
{
    slug: "hubspot",
    name: "HubSpot",
    summary: "Free CRM tools for support, sales, and marketing.",
    categories: ["crm"],
    website: "https://www.hubspot.com",
    pricingUrl: "https://www.hubspot.com/pricing",
    review: {
      checkedOn: "2026-09-04",
      pricing:
        "HubSpot publishes a free CRM and paid hubs for marketing, sales, and service. Seat prices and hub tiers are listed on the pricing page.",
      whatItDoes:
        "HubSpot's site describes one customer platform for contacts, deals, email, and support. The free tools are the top of a paid hub ladder.",
      whoItsFor:
        "Teams that want a CRM without starting on a sales-led contract, and that may add marketing or service later.",
      strengths:
        "A free CRM is published, with the paid hubs and seat prices on the same pricing page.",
      weaknesses:
        "The cost jumps once a team needs more than one hub. Contact and email limits are easy to outgrow.",
      verdict:
        "HubSpot is a real free CRM with a public upgrade path. Price the hubs you will actually turn on, not only the free tools.",
      alternatives: ["salesforce", "zoho-crm", "zendesk"],
    },
  },
  {
    slug: "salesforce",
    name: "Salesforce",
    summary: "Sales software for automation, data, and intelligence.",
    categories: ["crm"],
    website: "https://www.salesforce.com",
    pricingUrl: "https://www.salesforce.com/editions-pricing/sales-cloud/",
    review: {
      checkedOn: "2026-08-28",
      pricing:
        "Salesforce lists Sales Cloud editions on a public pricing page. Several editions show a per-user price, and higher editions ask you to talk to sales.",
      whatItDoes:
        "Salesforce sells CRM for pipeline, forecasting, and automation. The product is a platform: the edition decides which of that is included.",
      whoItsFor:
        "Sales teams that already expect a CRM administrator, or companies standardizing every revenue team on one system.",
      strengths:
        "Edition names and some per-user prices are published, so the shape of the ladder is visible.",
      weaknesses:
        "The price you pay depends on edition, add-ons, and contract length. The interesting automation often sits above the starter edition.",
      verdict:
        "Salesforce is the default large CRM. Read the edition grid before a demo, and budget add-ons separately from the seat.",
      alternatives: ["hubspot", "zoho-crm", "asana"],
    },
  },
  {
    slug: "zoho-crm",
    name: "Zoho CRM",
    summary: "Contact management, follow-ups, and workflow automation.",
    categories: ["crm"],
    website: "https://www.zoho.com/crm/",
    pricingUrl: "https://www.zoho.com/crm/zohocrm-pricing.html",
    review: {
      checkedOn: "2026-07-23",
      pricing:
        "Zoho CRM publishes a free tier and paid editions billed per user per month. Annual billing is discounted against the monthly price.",
      whatItDoes:
        "Zoho CRM covers contacts, follow-ups, and workflow rules, and it connects to the rest of Zoho's suite.",
      whoItsFor:
        "Smaller teams that want a full CRM with a published per-user price and do not need a large implementation partner.",
      strengths:
        "The edition grid is public, including user minimums and what automation each edition unlocks.",
      weaknesses:
        "The interface is dense, and some features assume you will adopt other Zoho apps.",
      verdict:
        "Zoho CRM is a straightforward per-user CRM. Compare an edition's automation, not only the seat price.",
      alternatives: ["hubspot", "salesforce", "asana"],
    },
  }
];
