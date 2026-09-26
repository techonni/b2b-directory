import type { Tool } from "./directory-head";

export const tools1: Tool[] = [
  {
    slug: "klaviyo",
    name: "Klaviyo",
    summary: "Email and SMS flows driven by customer profiles.",
    categories: ["marketing-automation"],
    website: "https://www.klaviyo.com",
    pricingUrl: "https://www.klaviyo.com/pricing",
  },
  {
    slug: "customerio",
    name: "Customer.io",
    summary: "Messages triggered by what a customer just did.",
    categories: ["marketing-automation"],
    website: "https://customer.io",
    pricingUrl: "https://customer.io/pricing",
  },
  {
    slug: "braze",
    name: "Braze",
    summary: "Cross-channel campaigns for large customer bases.",
    categories: ["marketing-automation"],
    website: "https://www.braze.com",
    pricingUrl: "https://www.braze.com/pricing",
  },
  {
    slug: "activecampaign",
    name: "ActiveCampaign",
    summary: "Email automation with a light CRM attached.",
    categories: ["marketing-automation"],
    website: "https://www.activecampaign.com",
    pricingUrl: "https://www.activecampaign.com/pricing",
  },
  {
    slug: "iterable",
    name: "Iterable",
    summary: "Lifecycle campaigns across email, push, and SMS.",
    categories: ["marketing-automation"],
    website: "https://iterable.com",
    pricingUrl: "https://iterable.com/pricing",
  },
  {
    slug: "mailchimp",
    name: "Mailchimp",
    summary: "Newsletters, audiences, and simple automations.",
    categories: ["email-marketing"],
    website: "https://mailchimp.com",
    pricingUrl: "https://mailchimp.com/pricing/",
  },
  {
    slug: "brevo",
    name: "Brevo",
    summary: "Email campaigns, transactional mail, and SMS.",
    categories: ["email-marketing"],
    website: "https://www.brevo.com",
    pricingUrl: "https://www.brevo.com/pricing/",
  },
  {
    slug: "campaignmonitor",
    name: "Campaign Monitor",
    summary: "Campaigns and automated journeys for a list.",
    categories: ["email-marketing"],
    website: "https://www.campaignmonitor.com",
    pricingUrl: "https://www.campaignmonitor.com/pricing/",
  },
  {
    slug: "kit",
    name: "Kit",
    summary: "Newsletters and automations for creators.",
    categories: ["email-marketing"],
    website: "https://kit.com",
    pricingUrl: "https://kit.com/pricing",
  },
  {
    slug: "substack",
    name: "Substack",
    summary: "A newsletter with subscriptions and a public archive.",
    categories: ["email-marketing"],
    website: "https://substack.com",
    pricingUrl: "https://substack.com/going-paid",
  },
  {
    slug: "mailgun",
    name: "Mailgun",
    summary: "Transactional email for product mail and receipts.",
    categories: ["email-marketing"],
    website: "https://www.mailgun.com",
    pricingUrl: "https://www.mailgun.com/pricing/",
  },
  {
    slug: "zendesk",
    name: "Zendesk",
    summary: "Customer service with ticketing and AI agents.",
    categories: ["customer-support"],
    website: "https://www.zendesk.com",
    pricingUrl: "https://www.zendesk.com/pricing/",
    review: {
      checkedOn: "2026-08-07",
      pricing:
        "Zendesk publishes suite plans billed per agent per month. AI features are called out as their own line on the pricing page.",
      whatItDoes:
        "Zendesk is a ticket system with a help center and, on current plans, AI agents in front of the queue.",
      whoItsFor:
        "Support teams that need a shared queue, SLAs, and a public help center.",
      strengths:
        "Agent prices are published, so a team can multiply seats by the plan before a call.",
      weaknesses:
        "AI resolutions and some channels are metered on top of the agent seat. The invoice is not only the seat price.",
      verdict:
        "Zendesk is still priced per agent. Read the AI line on the pricing page if agents will deflect tickets.",
      alternatives: ["intercom", "helpscout", "freshdesk"],
    },
  }
];
