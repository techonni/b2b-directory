// English versions of the most-read guides. Captures, sources and tools come from the French guide
// (same `slug`); only the text lives here. Each step matches, in order, a step of the French guide.
import type { TranslatedGuide } from "../i18n";

export const enGuides: TranslatedGuide[] = [
  {
    slug: "essayer-shopify-gratuitement",
    localSlug: "try-shopify-free",
    question: "How to try Shopify for free?",
    summary: "The free trial, then the low-cost launch offer: how to make the most of it.",
    intro:
      "Shopify can be tried for free for a few days. Then a launch offer lets you keep going at a very low monthly price for the first months, enough to build your store before paying full price.",
    steps: [
      {
        title: "Open the pricing page",
        text: "On shopify.com/pricing, the top of the page shows the current offer in the US: how long the free trial lasts, then the launch price and how many months it applies. Offers change often and differ by country, so read it on the day.",
        alt: "Shopify pricing page (European version shown): free trial, then a launch offer",
      },
      {
        title: "Click the button to start for free",
        text: "Enter your email address and create your account. Shopify asks a few questions about your project to prepare your store.",
      },
      {
        title: "Set up the essentials during the trial",
        text: "Add one or two products, pick a theme and look at the payment settings. You will quickly see whether the tool suits you.",
      },
      {
        title: "Choose a plan to continue",
        text: "To keep your store after the trial, choose a plan. The launch price then applies for the months shown on the pricing page, followed by the plan's regular price.",
      },
      {
        title: "Write down the end date",
        text: "Set a reminder before the launch offer ends: that is when the regular price starts.",
      },
    ],
    pitfalls: [
      "Forgetting that after the launch offer, the plan goes back to its regular price.",
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
        text: "Catalog, stock, variants, shipping rates, taxes, orders and returns: Shopify handles all of it. Leadpages is not built to run a store.",
        alt: "Shopify plans Basic, Grow, Advanced and Plus",
      },
      {
        title: "Want to collect leads? Choose Leadpages or HTML Pub",
        text: "Sign-up page, waiting page before a launch, webinar, free guide: a landing page with a form is enough, no store needed.",
        alt: "HTML Pub and Leadpages plans side by side",
      },
      {
        title: "One product or a service? Start simple",
        text: "An HTML Pub page with a payment button can be enough for a single product, a course or a service. Move to Shopify when your catalog grows.",
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
    summary: "Publish simply or optimize your conversions: the right plan for your needs.",
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
        text: "Grow adds manual A/B tests, dynamic text replacement and lead enrichment. Optimize adds Smart Traffic, heatmaps and automatic personalization. Scale adds full automatic optimization and dedicated support.",
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
        text: "In the bottom field, say who the page is for, what you offer, the tone, the colors and the sections you want (headline, benefits, reviews, form). The more precise you are, the better the result. Click « Send ».",
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
        text: "In « Online Store », choose a theme and customize the colors, the logo and the home page.",
      },
      {
        title: "Set up payments and shipping",
        text: "In « Settings », set up payments, shipping and sales tax for the states where you sell.",
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
    // Masqué : les prix de ce texte sont ceux affichés en Belgique (en euros). À publier quand les prix
    // américains en dollars auront été relevés sur shopify.com/pricing (lot Chrome).
    hidden: true,
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
        title: "Add consent and an easy way out",
        text: "In the US, the CAN-SPAM Act requires every marketing email to include your postal address and a clear way to unsubscribe. Asking for consent up front is also required in many countries (the EU, Canada), so the safe choice is an unchecked checkbox and a sentence saying what the emails are about and how to unsubscribe.",
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
      "A pre-checked consent box: it is not valid in the EU and it annoys everyone else.",
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
  {
    slug: "ajouter-un-formulaire-de-contact-shopify",
    localSlug: "add-contact-form-shopify",
    question: "How do I add a contact form to my Shopify store?",
    summary: "A Contact page with a form, linked from your menu, and messages that actually reach your inbox.",
    intro:
      "Before buying, many shoppers want to know they can reach you. Shopify comes with a ready-made \"contact\" page template: create the page, pick that template and add it to your menu. No code, no app.",
    steps: [
      {
        title: "Create a page",
        text: "In your Shopify admin, click Online Store, then Pages (in some versions, Pages is under Content). Click Add page and title it \"Contact\".",
      },
      {
        title: "Write a short intro",
        text: "In the content box, say in two sentences when you reply (for example \"within 24 hours, Monday to Friday\") and what to write about: orders, returns, product questions.",
      },
      {
        title: "Choose the \"contact\" template",
        text: "On the right, under Theme template, choose \"contact\". This template adds the form (name, email, phone, message) below your text. Make sure the page is Visible, then click Save.",
      },
      {
        title: "Add the page to your menu",
        text: "Go to Content, then Menus, and open your main menu or footer menu. Click Add menu item, type \"Contact\" and pick the Contact page as the link. Save.",
        alt: "Content > Menus: main menu and footer menu, where you add the Contact link",
      },
      {
        title: "Check where messages go",
        text: "Contact form messages go to your store email address, set in Settings. Make sure it is correct, then send yourself a test message from the page: it should land in your inbox (check spam too).",
      },
      {
        title: "Keep spam protection on",
        text: "In Online Store, then Preferences, the Spam protection section turns on hCaptcha for the contact form. Leave it on: it blocks bots without getting in the way of real customers.",
      },
    ],
    pitfalls: [
      "Creating the page without choosing the \"contact\" template: the page shows up, but with no form.",
      "Never testing the form: if your store email is wrong, customer messages get lost.",
      "Hiding the page: with no link in the menu or footer, nobody finds it.",
    ],
  },
  {
    slug: "ajouter-des-variantes-shopify",
    localSlug: "add-product-variants-shopify",
    question: "How do I add variants (size, color) to a Shopify product?",
    summary: "One product, several sizes or colors, each with its own price, inventory and photo.",
    intro:
      "A T-shirt in three sizes and two colors is one product with six variants. Shoppers pick on the product page, and you track inventory for each variant.",
    steps: [
      {
        title: "Open the product",
        text: "In the left menu, click Products, then the product you want to edit, or Add product to create one. Fill in the title, description and photos first.",
        alt: "Add product page in the Shopify admin",
      },
      {
        title: "Add an option",
        text: "Scroll down to the Variants section and click Add options like size or color. Under Option name, type for example \"Size\".",
      },
      {
        title: "Enter the values",
        text: "Under Option values, type one value per line: S, then M, then L. Click Done. Add a second option, such as \"Color\", the same way: Shopify creates every combination.\n\nA product can have up to 3 options (for example size, color and material).",
      },
      {
        title: "Set the price and inventory of each variant",
        text: "Shopify lists the variants. Click a variant to change its price (an XL can cost more), its SKU and its quantity in stock. Use Group by to edit all the variants of one color at once.",
        alt: "Pricing and Inventory sections, filled in for each variant",
      },
      {
        title: "Match a photo to each color",
        text: "In the variant list, click a variant's image square and pick the matching photo. When a shopper selects \"Blue\", the blue photo shows up.",
      },
      {
        title: "Save and check your store",
        text: "Click Save, then open the product in your store: the size and color pickers appear on the page. Try a sold-out variant to see what shoppers see.",
      },
    ],
    pitfalls: [
      "Creating a separate product for each size: shoppers no longer see the other sizes and your stats get scattered.",
      "Forgetting a variant's inventory: it shows as available when it isn't, or stays stuck at 0.",
      "Using the same photo for every color: shoppers can't see what they are buying.",
    ],
  },
  {
    slug: "creer-une-page-lien-en-bio-avec-html-pub",
    localSlug: "link-in-bio-page-html-pub",
    question: "How do I create a link-in-bio page with HTML Pub?",
    summary: "One link in your Instagram or TikTok bio that leads to all your links, on a page you own.",
    intro:
      "Instagram and TikTok allow only one link in your bio. A link-in-bio page gathers them all: store, video, sign-up, contact. With HTML Pub, it carries your name and your colors, and it can collect emails.",
    steps: [
      {
        title: "Start from a link-in-bio template",
        text: "On the Create screen, click Templates, then Browse all templates. Pick a link-in-bio template, look at it with Preview, then click Use.",
        alt: "Templates panel with Preview, Use and Browse all templates",
      },
      {
        title: "Add your photo and one sentence",
        text: "At the top: your photo or logo, your name, and one sentence about what you offer. You can ask the assistant: \"Replace the photo with my logo and write: handmade jewelry from Austin\".",
      },
      {
        title: "Add 3 to 5 buttons",
        text: "One button per important link: your store, your latest video, your sign-up page, your contact page. Put the most important first, with an action label: \"Shop now\", not \"Link 1\".",
      },
      {
        title: "Add a sign-up form",
        text: "Ask the assistant to add an email field below the buttons. Answers are saved in HTML Pub: your followers become contacts you can find later.",
      },
      {
        title: "Check on your phone and publish",
        text: "Almost every visitor comes from a phone. Click the mobile icon at the bottom right of the editor, make sure each button is easy to tap, then publish.",
        alt: "Mobile preview of the page in the editor",
      },
      {
        title: "Paste the link in your bio",
        text: "Pick a short address (your name, for example), copy it, and paste it into the Website or Link field of your Instagram or TikTok profile. Open it from the app to check.",
      },
    ],
    pitfalls: [
      "Adding ten buttons: visitors no longer know where to tap. Keep the essentials.",
      "Forgetting to update the page: a button to an expired sale hurts trust.",
      "A long, complicated address: it gets cut off or mistyped.",
    ],
  },
  {
    slug: "ajouter-un-pop-up-d-inscription-leadpages",
    localSlug: "add-signup-pop-up-leadpages",
    question: "How do I add a signup pop-up in Leadpages?",
    summary: "A window that opens at the right moment to offer your freebie or newsletter, without hiding the whole page.",
    intro:
      "A pop-up is a small form that opens on top of the page: when someone clicks a button, after a few seconds, or when the visitor is about to leave. In Leadpages, you build it separately, then publish it on your pages or your website.",
    steps: [
      {
        title: "Create the pop-up",
        text: "In the menu, open Conversion Tools, then Pop-Ups, and click Create New Pop-Up. Give it a clear name (for example \"Checklist – free guide\"), then click Start Building.",
      },
      {
        title: "Write your offer in one sentence",
        text: "A headline that says what people get (\"Get the free checklist\"), one supporting sentence, a single email field and an action button. No name, no phone number: every extra field costs you signups.",
      },
      {
        title: "Choose where signups go",
        text: "Click the pop-up's form: pick the email tool that receives the contacts (Mailchimp, Brevo…) and what happens after submitting (a thank-you message or a thank-you page). In the US, also say clearly what people will receive and how to unsubscribe.",
      },
      {
        title: "Choose when it opens",
        text: "Click Publish in the top-right corner. Three ways to open it: on click of a button, link or image; after a delay (timed); or when the mouse heads to the top of the window (exit). The most respectful is on click: the visitor asked for it.",
      },
      {
        title: "Connect it to your landing page",
        text: "In your Leadpages page, select the button and, in its link settings, choose to open the pop-up. For a timed or exit pop-up, copy the code from Publish and paste it into the page settings, in the tracking section (Head Section Tracking Code). Update the page.",
      },
      {
        title: "Test on desktop and on mobile",
        text: "Open the live page, trigger the pop-up and sign up with your own email. Check that the contact reaches your email tool. On phones, timed and exit pop-ups do not open: always keep a visible button.",
      },
    ],
    pitfalls: [
      "A pop-up that opens as soon as the page loads: visitors close it without reading, and Google dislikes windows that cover content on mobile.",
      "Relying only on an exit pop-up: it does not work on phones, where most visitors come from.",
      "Skipping the test: a pop-up connected to the wrong email tool loses every signup.",
    ],
  },
  {
    slug: "combien-coute-leadpages",
    localSlug: "how-much-does-leadpages-cost",
    question: "How much does Leadpages (and HTML Pub) cost in 2026?",
    summary: "HTML Pub and Leadpages plan prices, monthly and yearly, and which one to pick for your needs.",
    intro:
      "HTML Pub and Leadpages are sold on the same pricing page, in US dollars. Here are the prices shown on that page on September 28, 2026, and how to pay as little as possible.",
    steps: [
      {
        title: "HTML Pub plans, to publish",
        text: "On September 28, 2026, billed yearly: Starter costs $5.58 a month ($7 billed monthly), Pro $16 a month ($20 monthly) and Business $26.42 a month ($33 monthly).\n\nHTML Pub publishes landing pages, websites and blogs on your own domain, with the AI assistant. It has no A/B testing.",
        alt: "Pricing page: HTML Pub Pro at $16/month and Business at $26.42/month, Leadpages Grow at $53.58/month and Optimize at $108/month, billed yearly",
      },
      {
        title: "Leadpages plans, to convert more",
        text: "On September 28, 2026, billed yearly: Grow costs $53.58 a month ($67 billed monthly), Optimize $108 a month ($135 monthly) and Scale, the most complete, $216.83 a month ($271 monthly).\n\nGrow adds A/B testing. Optimize adds Smart Traffic and heatmaps. Prices change from time to time: always check the pricing page on the day.",
      },
      {
        title: "Pay yearly to save 20 %",
        text: "The « Monthly / Annual » switch at the top of the pricing page changes every price. Paying yearly is about 20 % cheaper, but you pay for the whole year up front. Start monthly if you are not sure you will keep the tool.",
      },
      {
        title: "Try it for 7 days before paying",
        text: "Every plan can be tried free for 7 days, with all its features. A card is required, but nothing is charged before the trial ends. Put the end date in your calendar.",
        alt: "« Start 7-Day Free Trial » buttons on each plan",
      },
      {
        title: "Choose based on your traffic",
        text: "Just starting, without many visitors? HTML Pub Pro is enough. Already running ads and want to compare two versions of a page? Leadpages Grow. Lots of traffic and you want the tool to optimize on its own? Optimize.",
      },
    ],
    pitfalls: [
      "Comparing a yearly price with a monthly one: check where the « Monthly / Annual » switch is set.",
      "Paying for Optimize without enough visitors for tests and heatmaps to be useful.",
      "Forgetting the trial end date: the first payment is charged automatically on day 7.",
    ],
  },
  {
    slug: "suivre-ses-commandes-et-expedier-shopify",
    localSlug: "track-orders-and-ship-shopify",
    question: "How to track orders and ship them on Shopify?",
    summary: "From a new order to a delivered package: check, pack, ship with a tracking number and keep the customer informed.",
    intro:
      "Your first sale came in: congratulations! Now you need to ship the package and tell the customer where it is. In Shopify, it all happens in « Orders »: each order goes from « Unfulfilled » to « Fulfilled » when you ship it, and the customer gets the tracking number by email.",
    steps: [
      {
        title: "Open the order list",
        text: "In the admin, click « Orders ». Each row shows the customer, the total, the payment status (for example « Paid ») and the fulfillment status (« Unfulfilled » until something ships). Use the « Unfulfilled » tab or filter to see only the orders to prepare.",
      },
      {
        title: "Check the order before packing",
        text: "Click the order. Check the items and their variants (size, color), the shipping method the customer chose and the address. If the address looks incomplete, email the customer before shipping: a returned package costs you shipping twice.",
      },
      {
        title: "Pack and send the package",
        text: "Pack the items and drop the package off with your carrier (USPS, UPS, FedEx…). Keep the tracking number it gives you. Depending on your country and plan, Shopify also lets you buy the shipping label right from the order.",
      },
      {
        title: "Mark the order as fulfilled",
        text: "In the order, click « Fulfill items ». Paste the tracking number: Shopify often detects the carrier on its own, otherwise pick it from the list. Leave the box that sends the shipping notification to the customer checked, then confirm. The order moves to « Fulfilled ».",
      },
      {
        title: "Let the customer track the package",
        text: "The customer receives a shipping confirmation email with the tracking link. The number stays visible in the order: if they have a question, open the order and check tracking before replying. The templates for these emails are in « Settings », then « Notifications ».",
      },
      {
        title: "Handle a return or a refund",
        text: "If the customer sends an item back, open the order and use « Return » or « Refund » as needed. Refund to the same payment method used for the purchase, and follow the rules in your return policy.",
      },
    ],
    pitfalls: [
      "Shipping without marking the order as fulfilled: the customer gets no email and no tracking number, and you lose track of what has shipped.",
      "Not checking the address: a returned package costs you shipping twice.",
      "Promising a delivery time you cannot keep: write realistic times in your shipping settings and policies.",
    ],
  },
  {
    slug: "ajouter-google-analytics-a-une-page-leadpages",
    localSlug: "add-google-analytics-leadpages",
    question: "How to add Google Analytics to a Leadpages page?",
    summary: "Connect your page to Google Analytics 4 to see where your visitors come from, before trying to convert them.",
    intro:
      "Leadpages already counts the visits and sign-ups of each page. Google Analytics 4 also tells you where visitors come from (Google, Instagram, ads…) and what they do. All it takes is copying a Google Analytics tag into your Leadpages page settings.",
    steps: [
      {
        title: "Create a Google Analytics 4 property",
        text: "On analytics.google.com, sign in with your Google account. If you do not have an Analytics account yet, follow the setup: an account, then a property (your site's name), then a « Web » data stream with your page's address.",
      },
      {
        title: "Copy the Google tag",
        text: "In « Admin », open « Data streams » and click your Web stream. Click « View tag instructions », then « Install manually ». Copy the whole code shown: it starts with <script> and contains your measurement ID (G-…).",
      },
      {
        title: "Paste it into the page settings",
        text: "In Leadpages, open the page in the editor, then its « Settings » and the tracking section (« Analytics » or « Tracking Codes » depending on the version). Paste the tag into the header code field, « Head Section Tracking Code ».",
      },
      {
        title: "Update the page",
        text: "Save, then click « Update » (or « Publish »): until the page is republished, the tag is not live. Do the same for each page you want to track, with the same tag.",
      },
      {
        title: "Check that visits come in",
        text: "Open your published page in another tab. In Google Analytics, go to « Reports », then « Realtime »: your visit should appear within a minute. If nothing shows, check that the tag is in the header and that the page was updated.",
      },
      {
        title: "Add UTM links",
        text: "To know which post or ad brings in leads, add UTM parameters to your links, for example ?utm_source=instagram&utm_medium=social. In Google Analytics, the « Acquisition » report groups them by source.",
      },
    ],
    pitfalls: [
      "Forgetting to republish the page: the tag stays in the editor and no visit is counted.",
      "Pasting only the measurement ID (G-…) into the header code field: you need the whole tag.",
      "Ignoring privacy rules: tell visitors you use analytics in your privacy policy, and ask for consent where the law requires it.",
    ],
  },
];
