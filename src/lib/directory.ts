export type Review = {
  checkedOn: string;
  pricing: string;
  whatItDoes: string;
  whoItsFor: string;
  strengths: string;
  weaknesses: string;
  verdict: string;
  alternatives: string[];
};

export type Tool = {
  slug: string;
  name: string;
  summary: string;
  categories: string[];
  website: string;
  pricingUrl?: string;
  review?: Review;
};

export type Category = {
  slug: string;
  name: string;
  blurb: string;
  description: string;
  featured: boolean;
};

export const curator = "Zunrel";

export const categories: Category[] = [
  {
    slug: "crm",
    name: "CRM",
    blurb: "Contacts, deals, and the pipeline around them.",
    description:
      "Customer relationship tools for keeping contacts, leads, and deals in one place.",
    featured: true,
  },
  {
    slug: "marketing-automation",
    name: "Marketing automation",
    blurb: "Sequences and journeys triggered by customer data.",
    description:
      "Sequences and journeys that send themselves when customer data changes.",
    featured: true,
  },
  {
    slug: "email-marketing",
    name: "Email marketing",
    blurb: "Newsletters and campaigns sent to a list.",
    description: "Newsletters and campaigns for a list you already have.",
    featured: true,
  },
  {
    slug: "customer-support",
    name: "Customer support",
    blurb: "Shared inboxes, tickets, and help centers.",
    description:
      "Shared inboxes, tickets, and help centers for customer conversations.",
    featured: true,
  },
  {
    slug: "finance-accounting",
    name: "Finance & accounting",
    blurb: "Invoices, books, expenses, and payments.",
    description: "Invoices, books, expenses, and the payments around them.",
    featured: true,
  },
  {
    slug: "hr-payroll",
    name: "HR & payroll",
    blurb: "Employee records, payroll, and HR workflows.",
    description: "Employee records, payroll, and the HR workflows beside them.",
    featured: true,
  },
  {
    slug: "project-management",
    name: "Project management",
    blurb: "Tasks, boards, and project tracking.",
    description: "Tasks, boards, and project tracking for a team.",
    featured: true,
  },
  {
    slug: "analytics",
    name: "Analytics",
    blurb: "Measurement of product and customer behavior.",
    description: "Measurement of product and customer behavior.",
    featured: true,
  },
  {
    slug: "developer-tools",
    name: "Developer tools",
    blurb: "Code hosting, deploys, errors, and infrastructure.",
    description: "Code hosting, deploys, errors, and infrastructure.",
    featured: true,
  },
  {
    slug: "communication",
    name: "Communication",
    blurb: "Chat, meetings, docs, and video updates.",
    description: "Chat, meetings, docs, and video updates.",
    featured: true,
  },
  {
    slug: "design",
    name: "Design",
    blurb: "Interfaces, diagrams, and shared design files.",
    description: "Interfaces, diagrams, and the files a product team shares.",
    featured: false,
  },
  {
    slug: "security",
    name: "Security & identity",
    blurb: "Passwords, sign-in, and company access.",
    description: "Passwords, sign-in, and access for a company.",
    featured: false,
  },
];

export const tools: Tool[] = [
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
  {
    slug: "auth0",
    name: "Auth0",
    summary: "Login and customer identity for an application.",
    categories: ["security"],
    website: "https://auth0.com",
    pricingUrl: "https://auth0.com/pricing",
  },
];

const categoryBySlug = new Map(categories.map((category) => [category.slug, category]));
const toolBySlug = new Map(tools.map((tool) => [tool.slug, tool]));

export function getCategory(slug: string) {
  return categoryBySlug.get(slug);
}

export function getTool(slug: string) {
  return toolBySlug.get(slug);
}

export function toolsInCategory(slug: string) {
  return tools.filter((tool) => tool.categories.includes(slug));
}

export function toolCount(slug: string) {
  return toolsInCategory(slug).length;
}

export function featuredCategories() {
  return categories.filter((category) => category.featured);
}

export function reviewedTools() {
  return tools
    .filter((tool) => tool.review)
    .sort((a, b) => (a.review!.checkedOn < b.review!.checkedOn ? 1 : -1));
}

export function popularTools() {
  const order = [
    "hubspot",
    "salesforce",
    "slack",
    "notion",
    "github",
    "zendesk",
    "asana",
    "stripe",
  ];
  return order.map((slug) => getTool(slug)!);
}

export function searchTools(query: string) {
  const needle = query.trim().toLowerCase();
  if (!needle) return [];
  return tools.filter((tool) => {
    const categoryNames = tool.categories
      .map((slug) => getCategory(slug)?.name ?? "")
      .join(" ");
    return `${tool.name} ${tool.summary} ${categoryNames}`
      .toLowerCase()
      .includes(needle);
  });
}

export function formatChecked(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

export function categoryNames(slugs: string[]) {
  return slugs
    .map((slug) => getCategory(slug))
    .filter((category): category is Category => Boolean(category));
}
