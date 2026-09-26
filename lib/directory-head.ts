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

export const curator = "Your Name";

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
