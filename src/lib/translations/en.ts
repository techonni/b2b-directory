// English versions of the most-read guides. Captures, sources and tools come from the French guide
// (same `slug`); only the text lives here. Each step matches, in order, a step of the French guide.
import type { TranslatedGuide } from "../i18n";

export const enGuides: TranslatedGuide[] = [
  {
    slug: "essayer-shopify-gratuitement",
    localSlug: "try-shopify-free",
    question: "How to try Shopify for free?",
    summary: "The 3-day trial, then €1 a month for 3 months: how to make the most of it.",
    intro:
      "Shopify can be tried for free for 3 days. Then the launch offer lets you continue for €1 a month for 3 months (offer seen in Europe on 27 September 2026), enough to build your store without big costs.",
    steps: [
      {
        title: "Open the pricing page",
        text: "On shopify.com, the pricing page shows the current offer: 3 days free, then €1 a month for 3 months. The offer can change and depends on your country: check it on the day.",
        alt: "Shopify pricing page: 3-day trial, then €1/month for 3 months",
      },
      {
        title: "Click the button to start for free",
        text: "Enter your email address and create your account. Shopify asks a few questions about your project to prepare your store.",
      },
      {
        title: "Set up the essentials during the 3 days",
        text: "Add one or two products, pick a theme and look at the payment settings. You will quickly see whether the tool suits you.",
      },
      {
        title: "Choose a plan to continue",
        text: "To keep your store after the trial, choose a plan. The €1 offer then applies for 3 months, followed by the plan's normal price.",
      },
      {
        title: "Write down the end date",
        text: "Set a reminder before the end of the 3 months at €1: that is when the normal price starts.",
      },
    ],
    pitfalls: [
      "Forgetting that after 3 months at €1, the plan goes back to its normal price.",
      "Spending the trial on settings without adding a single product: you never see how the store really works.",
    ],
  },
  {
    slug: "choisir-entre-leadpages-et-shopify",
    localSlug: "leadpages-or-shopify",
    question: "Leadpages or Shopify: which one to choose?",
    summary: "Pages that convert, a full online store, or both together.",
    intro:
      "Leadpages (and HTML Pub) is for building pages that turn visitors into leads or customers. Shopify is for running a store: products, stock, payments and shipping.",
    steps: [
      {
        title: "Selling several products? Choose Shopify",
        text: "Catalogue, stock, variants, shipping rates, taxes, orders and returns: Shopify handles all of it. Leadpages is not built to run a store.",
        alt: "Shopify plans Basic, Grow, Advanced and Plus",
      },
      {
        title: "Want to collect leads? Choose Leadpages or HTML Pub",
        text: "Sign-up page, waiting page before a launch, webinar, free guide: a landing page with a form is enough, no store needed.",
        alt: "HTML Pub and Leadpages plans side by side",
      },
      {
        title: "One product or a service? Start simple",
        text: "An HTML Pub page with a payment button can be enough for a single product, a course or a service. Move to Shopify when your catalogue grows.",
      },
      {
        title: "Running ads? Use both",
        text: "Send visitors to a Leadpages landing page focused on one offer, then to the product in your Shopify store. With Leadpages, you can test two versions of the page.",
      },
      {
        title: "Try before you pay",
        text: "Leadpages and HTML Pub have a 7-day trial; Shopify has a trial followed by a launch offer. Check the current terms on the pricing pages.",
      },
    ],
    pitfalls: [
      "Building a whole store in Leadpages: managing orders and stock quickly becomes impossible.",
      "Sending an ad to the store's home page instead of a page focused on a single offer.",
    ],
  },
  {
    slug: "choisir-entre-html-pub-et-leadpages",
    localSlug: "html-pub-or-leadpages",
    question: "How to choose between HTML Pub and Leadpages?",
    summary: "Publish simply or optimise your conversions: the right plan for your needs.",
    intro:
      "HTML Pub and Leadpages come from the same company and run on the same engine. HTML Pub is for publishing. Leadpages adds everything that helps convert more visitors.",
    steps: [
      {
        title: "Ask yourself what you want to do",
        text: "Do you just want to put a page, a small website or a blog online with your own domain? HTML Pub is enough. Do you want to test two versions of a page to see which one sells better? You need Leadpages.",
      },
      {
        title: "Look at the three HTML Pub plans",
        text: "Starter: 5 pages and 1 domain. Pro: 25 pages, 1 blog and API access, for a solo creator. Business: 50 pages, 2 domains and 2 blogs, for a small team or an agency. Publishing from Claude is included in every plan.",
        alt: "Pricing page: HTML Pub (Publish) and Leadpages (Optimize) plans side by side",
      },
      {
        title: "Look at the three Leadpages plans",
        text: "Grow adds manual A/B tests, dynamic text replacement and lead enrichment. Optimize adds Smart Traffic, heatmaps and automatic personalisation. Scale adds full automatic optimisation and dedicated support.",
      },
      {
        title: "Start small",
        text: "Your pages and domains stay with you if you change plans. So you can start with HTML Pub and move to Leadpages once you have enough visitors to test.",
      },
      {
        title: "Check the price on the day",
        text: "Prices change with promotions and with monthly or annual billing (about 20 % less when paying yearly). Look at the pricing page before choosing.",
      },
    ],
    pitfalls: [
      "Taking Leadpages Optimize from day one without traffic: tests and heatmaps need visitors to be useful.",
      "Thinking HTML Pub runs A/B tests: it does not, tests start with Leadpages Grow.",
    ],
  },
  {
    slug: "essayer-leadpages-gratuitement",
    localSlug: "try-leadpages-free",
    question: "How to try Leadpages for free?",
    summary: "The 7-day trial, what it includes and how to avoid being charged.",
    intro:
      "Every HTML Pub and Leadpages plan can be tried for 7 days with all its features. A bank card is required, but nothing is charged before day 7.",
    steps: [
      {
        title: "Choose the plan to test",
        text: "On the pricing page, choose monthly or annual billing, then the plan you are interested in. Test the one you really intend to keep: the trial gives access to all its features.",
      },
      {
        title: "Click « Start 7-Day Free Trial »",
        text: "Create your account with your email address, then enter a bank card. It is only used to continue after the trial.",
        alt: "« Start 7-Day Free Trial » buttons on each plan",
      },
      {
        title: "Write down the end date",
        text: "Put a reminder in your calendar one or two days before the 7 days end. That is when you decide whether to keep the plan.",
      },
      {
        title: "Use the trial for real",
        text: "Build a real page, connect your domain and your email tool. You will quickly see whether the tool suits you.",
      },
      {
        title: "Keep it or cancel",
        text: "If you like it, do nothing: the subscription starts. Otherwise, cancel before day 7 from your account settings. Your pages stay saved.",
      },
    ],
    pitfalls: [
      "Forgetting the end date and being charged by mistake.",
      "Spending the trial browsing templates without publishing: you never find the tool's real limits.",
    ],
  },
  {
    slug: "creer-une-landing-page-avec-l-ia",
    localSlug: "create-landing-page-with-ai",
    question: "How to create a landing page with Leadpages AI?",
    summary: "Describe your page, let the AI build it, then improve it by chatting.",
    intro:
      "The creation assistant (Piper, the « Page Agent ») builds a page from a simple description. You then fix it by talking to it, like in a chat.",
    steps: [
      {
        title: "Open the creation screen",
        text: "In the left menu, click « Create ». Piper, the assistant, asks « What are you making? »: choose « Landing page ».",
        alt: "Create screen: Piper asks « What are you making? »",
      },
      {
        title: "Describe your page precisely",
        text: "In the bottom field, say who the page is for, what you offer, the tone, the colours and the sections you want (headline, benefits, reviews, form). The more precise you are, the better the result. Click « Send ».",
        alt: "Landing page description typed in the input bar",
      },
      {
        title: "Choose the images",
        text: "Piper asks what to use for images: your own, AI-generated images (more credits) or none for now. The estimated credit cost is shown at the top right. « Skip images for now » is the cheapest choice.",
        alt: "Image choice with the credit estimate",
      },
      {
        title: "Pick a style",
        text: "Three visual directions are offered. Click the one you like, adjust « How far should I push it? » if you wish, then click « Build it ».",
        alt: "Three style directions offered by Piper",
      },
      {
        title: "Let Piper build",
        text: "The build runs in six steps, in about a minute: reading the request, sections, copy, images, assembly and checks.",
        alt: "Page being built, step by step",
      },
      {
        title: "Fix it by chatting",
        text: "Click « Open in editor ». In the « Ask Piper to edit this page… » field, ask for one change at a time. Piper lists what it changed and how many credits it used.",
        alt: "Editor: Piper applies a requested change",
      },
      {
        title: "Check on mobile, then publish",
        text: "The icons at the bottom right of the editor show the page on desktop, tablet and mobile. To put it online, keep the free pubhtml.com address or connect your domain (« Where should this live? »). After that, « Update » publishes your changes.",
        alt: "Choosing where to publish: free address or your own domain",
      },
    ],
    pitfalls: [
      "Writing a vague description (« a nice page »): you spend credits on corrections.",
      "Forgetting the form or the call-to-action button: a landing page without a goal is useless.",
    ],
  },
  {
    slug: "creer-sa-boutique-shopify",
    localSlug: "create-shopify-store",
    question: "How to create a Shopify store?",
    summary: "From sign-up to a live store: account, theme, products and payments, in order.",
    intro:
      "A first version of a Shopify store takes about an hour. The admin guides you, and the Sidekick AI assistant answers your questions.",
    steps: [
      {
        title: "Create your account",
        text: "On shopify.com, click the button to start for free, enter your email and answer the questions about your project.",
      },
      {
        title: "Get to know the admin",
        text: "The left menu holds everything: Orders, Products, Customers, Discounts, Online Store and Settings. The home page shows the state of your store and a bar to ask Sidekick for help.",
        alt: "Shopify admin home page with the menu and Sidekick (French interface)",
      },
      {
        title: "Add your first products",
        text: "In « Products », add at least one product with a photo, a description and a price.",
      },
      {
        title: "Pick a theme",
        text: "In « Online Store », choose a theme and customise the colours, the logo and the home page.",
      },
      {
        title: "Set up payments and shipping",
        text: "In « Settings », set up payments, shipping and taxes for your country.",
      },
      {
        title: "Put your store online",
        text: "Choose a plan, connect your domain name, then remove the store password to open it to the public.",
      },
    ],
    pitfalls: [
      "Opening the store without testing an order from start to finish.",
      "Forgetting the legal pages (terms of sale, refunds, privacy).",
    ],
  },
  {
    slug: "combien-coute-shopify",
    localSlug: "how-much-does-shopify-cost",
    question: "How much does Shopify cost in 2026: plans and fees?",
    summary: "Shopify plan prices, the €1 offer, fees on each sale and the costs people forget.",
    intro:
      "Shopify's price is the plan, plus fees on each sale, plus the apps you add. These figures were read on the pricing page on 27 September 2026, as shown in Belgium: prices in your country may differ.",
    steps: [
      {
        title: "The starting offer: 3 days free, then €1 a month",
        text: "On 27 September 2026, Shopify showed a 3-day free trial, then €1 a month for 3 months. After those 3 months, the normal price of the chosen plan starts.",
        alt: "Shopify pricing page: 3-day free trial, then €1/month for 3 months",
      },
      {
        title: "The price of the four plans",
        text: "Paid yearly: Basic €19 a month, Grow €56 a month, Advanced €289 a month, and Plus from €2,100 a month. Paid monthly, Basic costs €27 a month.\n\nFor one person getting started, Basic is almost always enough.",
        alt: "Shopify plans paid yearly: Basic €19/month, Grow €56/month, Advanced €289/month, Plus from €2,100/month",
      },
      {
        title: "Fees on each sale",
        text: "With Shopify Payments, each card payment has a fee: on Basic, from 1.8 % + €0.30 per sale (rate shown in Belgium on 27 September 2026). These fees go down as the plan goes up.\n\nIf you use another payment provider instead of Shopify Payments, Shopify adds transaction fees, up to 2 % on Basic.",
        alt: "Payment settings: Shopify Payments active and PayPal as an extra provider (French interface)",
      },
      {
        title: "The costs people forget",
        text: "Paid apps come on top of the plan, often monthly. A domain name is paid separately, every year. A paid theme is paid once. Add it all up before choosing.",
      },
      {
        title: "Monthly or yearly?",
        text: "Paying yearly is cheaper per month, but commits you for a year. Start monthly during the €1 offer, then switch to yearly once the store sells.",
      },
    ],
    pitfalls: [
      "Forgetting when the 3 months at €1 end: the normal price starts without warning.",
      "Turning off Shopify Payments without knowing that Shopify then adds transaction fees.",
      "Counting only the plan and forgetting paid apps.",
    ],
  },
  {
    slug: "attirer-des-clients-avec-une-landing-page",
    localSlug: "get-customers-with-landing-page",
    question: "How to bring customers to your Shopify store with a landing page?",
    summary: "A simple page, a clear offer, a form, then a link to your store.",
    intro:
      "A landing page presents one offer to one audience. It turns visitors from social media or ads into leads, then into customers of your store.",
    steps: [
      {
        title: "Pick a single offer",
        text: "A hero product or a welcome discount. Create the code in Shopify first, for example 10 % off the first order: it is the reason to leave an email.",
        alt: "Welcome code BIENVENUE10 created in Shopify (French interface)",
      },
      {
        title: "Create the page with AI",
        text: "In HTML Pub or Leadpages, click « Create » and describe the page: the product, the audience, the offer and the button you want. Keep a short headline, three benefits and a product photo.",
        alt: "Create screen: the assistant asks « What are you making? »",
      },
      {
        title: "Add a form and a button",
        text: "A form to collect the email in exchange for the code, and a button that leads to the product or to your Shopify store.",
      },
      {
        title: "Connect the page to your tools",
        text: "In « Connectors », send leads to your email tool and connect Shopify to find your customers in one place.",
        alt: "Shopify connector in HTML Pub",
      },
      {
        title: "Send traffic and measure",
        text: "Share the page address in your posts, your bio and your ads. Watch the page's conversion rate; with Leadpages, test two headlines with an A/B test.",
      },
    ],
    pitfalls: [
      "Putting the whole store on the page: one landing page = one offer, one button.",
      "Sending traffic to the store's home page instead of the featured product page.",
      "Promising a discount code that does not exist in Shopify yet.",
    ],
  },
  {
    slug: "recolter-des-e-mails-avant-un-lancement",
    localSlug: "collect-emails-before-launch",
    question: "How to collect emails before a launch?",
    summary: "A waiting page, an email form, a good reason to sign up, and your leads in your email tool.",
    intro:
      "Before launching a product, a waiting page lets you gather interested people. On launch day, you email them: they are your first customers.",
    steps: [
      {
        title: "Give people a reason to sign up",
        text: "A launch discount, early access or a gift. Write it clearly in the headline or just above the form.",
      },
      {
        title: "Create the waiting page with AI",
        text: "In HTML Pub or Leadpages, describe the page: the upcoming product, the date, what subscribers get and a form with a single email field.",
        alt: "Description of a waiting page with an email form in the HTML Pub AI assistant",
      },
      {
        title: "Add consent",
        text: "To send marketing emails to individuals you need their consent. Add an unticked checkbox and a sentence saying what the email is for and how to unsubscribe.",
      },
      {
        title: "Find your subscribers",
        text: "Each sign-up lands in « Submissions ». You can view them and export them as CSV.",
        alt: "Submissions page with the form responses",
      },
      {
        title: "Send them to your email tool",
        text: "In « Connectors », connect Mailchimp, Brevo or another tool so each subscriber arrives there automatically. Prepare a welcome email and the launch-day email.",
        alt: "Connectors page with email apps to connect",
      },
    ],
    pitfalls: [
      "Asking for name, phone and city: every extra field lowers sign-ups.",
      "A pre-ticked consent box: it is not valid.",
      "Sending nothing before the launch: write at least a welcome email so people remember you.",
    ],
  },
  {
    slug: "connecter-son-nom-de-domaine-leadpages",
    localSlug: "connect-domain-leadpages",
    question: "How to connect your domain name to Leadpages?",
    summary: "Show your pages on your own address, with free HTTPS.",
    intro:
      "By default, your pages have an HTML Pub address. With your own domain they look more trustworthy. The security certificate (HTTPS) is free.",
    steps: [
      {
        title: "Open « Domains »",
        text: "In the left menu, click « Domains », then « Connect Domain ». No domain yet? Depending on your plan, « Claim Free Domain » gives you one.",
        alt: "Domains page with « Connect Domain » and « Claim Free Domain »",
      },
      {
        title: "Type your domain",
        text: "Either the main domain (mysite.com) or a subdomain (www.mysite.com, offer.mysite.com). A subdomain is the simplest.",
      },
      {
        title: "Choose what it shows",
        text: "In « Homepage », choose « Page », « Site » or « Blog », then the item to show. You can also pick an error page (« Custom 404 page »). Click « Add & Configure Domain ».",
        alt: "Connect Your Domain form",
      },
      {
        title: "Let the automatic setup work",
        text: "A window (Entri) offers to configure your domain for you. Click « Continue », check the changes, then « Authorize ». The message « is now configured! » confirms it.",
      },
      {
        title: "Otherwise, set the DNS by hand",
        text: "At your domain provider, add the records shown by Leadpages: a CNAME for www (or your subdomain), a TXT for security and, for the main domain, two A records. Copy the values shown in your account.",
      },
      {
        title: "Wait for activation",
        text: "The status goes through several stages until « Active ». HTTPS can take up to 48 hours.",
      },
    ],
    pitfalls: [
      "Forgetting the TXT record: without it, HTTPS does not turn on.",
      "Changing the main domain while another website already uses it: use a subdomain instead.",
    ],
  },
];
