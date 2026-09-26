import type { Tool } from "./directory-head";

export const tools2: Tool[] = [
  {
    slug: "intercom",
    name: "Intercom",
    summary: "Messenger, help center, and support automation.",
    categories: ["customer-support"],
    website: "https://www.intercom.com",
    pricingUrl: "https://www.intercom.com/pricing",
  },
  {
    slug: "helpscout",
    name: "Help Scout",
    summary: "A shared inbox and docs for support teams.",
    categories: ["customer-support"],
    website: "https://www.helpscout.com",
    pricingUrl: "https://www.helpscout.com/pricing/",
  },
  {
    slug: "freshdesk",
    name: "Freshdesk",
    summary: "Ticketing and a help center with a free plan.",
    categories: ["customer-support"],
    website: "https://www.freshworks.com/freshdesk/",
    pricingUrl: "https://www.freshworks.com/freshdesk/pricing/",
  },
  {
    slug: "stripe",
    name: "Stripe",
    summary: "Accept payments, billing, and money movement.",
    categories: ["finance-accounting"],
    website: "https://stripe.com",
    pricingUrl: "https://stripe.com/pricing",
    review: {
      checkedOn: "2026-09-11",
      pricing:
        "Stripe publishes a per-transaction rate that changes by country and payment method, plus separate prices for Billing, Invoicing, and other products.",
      whatItDoes:
        "Stripe's site describes payments, billing, and money movement for internet businesses. Fees are listed by product, not as a seat price.",
      whoItsFor:
        "Companies that take payments online and want the processor, billing, and payouts from one vendor.",
      strengths:
        "Standard card rates are published, so the cost of a charge is visible without a demo.",
      weaknesses:
        "The all-in cost depends on the payment method, the country, and which extra products are turned on. Volume discounts are not a public rate card.",
      verdict:
        "Stripe is priced on activity, not seats. Read the rate for your country before comparing it with a flat subscription.",
      alternatives: ["quickbooks", "xero", "brex"],
    },
  },
  {
    slug: "quickbooks",
    name: "QuickBooks",
    summary: "Bookkeeping, invoices, and tax-ready reports.",
    categories: ["finance-accounting"],
    website: "https://quickbooks.intuit.com",
    pricingUrl: "https://quickbooks.intuit.com/pricing/",
  },
  {
    slug: "xero",
    name: "Xero",
    summary: "Cloud accounting for invoices, bills, and the bank.",
    categories: ["finance-accounting"],
    website: "https://www.xero.com",
    pricingUrl: "https://www.xero.com/pricing/",
  },
  {
    slug: "expensify",
    name: "Expensify",
    summary: "Expense reports, receipts, and company cards.",
    categories: ["finance-accounting"],
    website: "https://www.expensify.com",
    pricingUrl: "https://www.expensify.com/pricing",
  },
  {
    slug: "brex",
    name: "Brex",
    summary: "Corporate cards and spend controls for a company.",
    categories: ["finance-accounting"],
    website: "https://www.brex.com",
    pricingUrl: "https://www.brex.com/pricing",
  }
];
