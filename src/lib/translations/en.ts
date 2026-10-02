// English versions of the most-read guides. Sources and tools come from the French guide
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
      },
      {
        title: "Want to collect leads? Choose Leadpages or HTML Pub",
        text: "Sign-up page, waiting page before a launch, webinar, free guide: a landing page with a form is enough, no store needed.",
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
      },
      {
        title: "Describe your page precisely",
        text: "In the bottom field, say who the page is for, what you offer, the tone, the colors and the sections you want (headline, benefits, reviews, form). The more precise you are, the better the result. Click « Send ».",
      },
      {
        title: "Choose the images",
        text: "Piper asks what to use for images: your own, AI-generated images (more credits) or none for now. The estimated credit cost is shown at the top right. « Skip images for now » is the cheapest choice.",
      },
      {
        title: "Pick a style",
        text: "Three visual directions are offered. Click the one you like, adjust « How far should I push it? » if you wish, then click « Build it ».",
      },
      {
        title: "Let Piper build",
        text: "The build runs in six steps, in about a minute: reading the request, sections, copy, images, assembly and checks.",
      },
      {
        title: "Fix it by chatting",
        text: "Click « Open in editor ». In the « Ask Piper to edit this page… » field, ask for one change at a time. Piper lists what it changed and how many credits it used.",
      },
      {
        title: "Check on mobile, then publish",
        text: "The icons at the bottom right of the editor show the page on desktop, tablet and mobile. To put it online, keep the free pubhtml.com address or connect your domain (« Where should this live? »). After that, « Update » publishes your changes.",
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
      },
      {
        title: "The price of the four plans",
        text: "Paid yearly: Basic €19 a month, Grow €56 a month, Advanced €289 a month, and Plus from €2,100 a month. Paid monthly, Basic costs €27 a month.\n\nFor one person getting started, Basic is almost always enough.",
      },
      {
        title: "Fees on each sale",
        text: "With Shopify Payments, each card payment has a fee: on Basic, from 1.8 % + €0.30 per sale (rate shown in Belgium on 27 September 2026). These fees go down as the plan goes up.\n\nIf you use another payment provider instead of Shopify Payments, Shopify adds transaction fees, up to 2 % on Basic.",
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
      },
      {
        title: "Create the page with AI",
        text: "In HTML Pub or Leadpages, click « Create » and describe the page: the product, the audience, the offer and the button you want. Keep a short headline, three benefits and a product photo.",
      },
      {
        title: "Add a form and a button",
        text: "A form to collect the email in exchange for the code, and a button that leads to the product or to your Shopify store.",
      },
      {
        title: "Connect the page to your tools",
        text: "In « Connectors », send leads to your email tool and connect Shopify to find your customers in one place.",
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
      },
      {
        title: "Add consent and an easy way out",
        text: "In the US, the CAN-SPAM Act requires every marketing email to include your postal address and a clear way to unsubscribe. Asking for consent up front is also required in many countries (the EU, Canada), so the safe choice is an unchecked checkbox and a sentence saying what the emails are about and how to unsubscribe.",
      },
      {
        title: "Find your subscribers",
        text: "Each sign-up lands in « Submissions ». You can view them and export them as CSV.",
      },
      {
        title: "Send them to your email tool",
        text: "In « Connectors », connect Mailchimp, Brevo or another tool so each subscriber arrives there automatically. Prepare a welcome email and the launch-day email.",
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
      },
      {
        title: "Type your domain",
        text: "Either the main domain (mysite.com) or a subdomain (www.mysite.com, offer.mysite.com). A subdomain is the simplest.",
      },
      {
        title: "Choose what it shows",
        text: "In « Homepage », choose « Page », « Site » or « Blog », then the item to show. You can also pick an error page (« Custom 404 page »). Click « Add & Configure Domain ».",
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
  {
    slug: "creer-un-code-de-reduction-shopify",
    localSlug: "create-discount-code-shopify",
    question: "How to create a discount code on Shopify?",
    summary: "A promo code as a percentage or a fixed amount, with its conditions and limits.",
    intro:
      "A discount code helps trigger a first order. On Shopify, it takes a few minutes to create and applies at checkout.",
    steps: [
      {
        title: "Open « Discounts »",
        text: "In the left menu, click « Discounts », then « Create discount ».",
      },
      {
        title: "Choose the discount type",
        text: "Four choices: « Amount off products », « Buy X get Y », « Amount off order » or « Free shipping ». For a welcome code, pick « Amount off order ».",
      },
      {
        title: "Write the code and its value",
        text: "Keep the « Discount code » method, type a code that is easy to remember (for example WELCOME10), then choose « Percentage » or « Fixed amount » and the value. The summary on the right updates right away.",
      },
      {
        title: "Set the conditions",
        text: "« Eligibility »: all customers or only some. « Minimum purchase requirements »: a minimum amount or number of items. « Maximum discount uses »: limit the total number of uses, or one use per customer.",
      },
      {
        title: "Pick the dates and save",
        text: "Set a start date and, if you want, an end date. Click « Save »: the code shows up in the list of discounts.",
      },
    ],
    pitfalls: [
      "Forgetting « Limit to one use per customer » on a welcome code: it can then be used on every order.",
      "Sharing the code without testing it in a test order.",
    ],
  },
  {
    slug: "regler-l-expedition-shopify",
    localSlug: "set-up-shipping-rates-shopify",
    question: "How to set up shipping rates on Shopify?",
    summary: "Shipping zones, flat or weight-based rates, and free shipping over a set amount.",
    intro:
      "Shipping rates are set once, by shipping zone. Simple, fair rates keep customers from abandoning their cart at checkout.",
    steps: [
      {
        title: "Open « Shipping and delivery »",
        text: "In the admin, click « Settings » at the bottom left, then « Shipping and delivery ». The « General » shipping profile applies to all your products: that is the one you will set up.",
      },
      {
        title: "Create your shipping zones",
        text: "A zone groups the places that share the same rates. Start simple: one zone for the United States, then one for Canada or other countries if you ship abroad. A customer from a place with no zone cannot place an order.",
      },
      {
        title: "Add a rate to each zone",
        text: "In a zone, click « Add rate ». Give it a clear name the customer will see at checkout, like « Standard shipping (3 to 5 business days) », then a price. A flat rate is the easiest to understand.",
      },
      {
        title: "Add conditions if needed",
        text: "Click « Add conditions » so a rate depends on the weight of the items or the order price. Example: a « Free shipping » rate at $0, only for orders of $50 or more. That is often what makes customers add one more item to their cart.",
      },
      {
        title: "Enter your usual package",
        text: "In « Packages », enter the dimensions and weight of your most common box. With each product's weight, Shopify can then work out the real weight of each order.",
      },
      {
        title: "Test at checkout",
        text: "Place a test order with an address in each zone and look at the rates offered. Also check the free shipping threshold, just below and just above the amount.",
      },
    ],
    pitfalls: [
      "Leaving product weights at 0: weight-based rates become wrong.",
      "Forgetting a place where you want to sell: its customers are blocked at checkout.",
      "Offering too many different rates: the customer hesitates instead of paying.",
    ],
  },
  {
    slug: "creer-une-page-de-remerciement-leadpages",
    localSlug: "thank-you-page-leadpages",
    question: "How to create a thank-you page after a Leadpages form?",
    summary: "The page shown after sign-up: say thanks, deliver the freebie and offer the next step.",
    intro:
      "After filling in your form, visitors should see right away that their sign-up worked. A thank-you page reassures them, tells them what to do next and lets you count your sign-ups precisely.",
    steps: [
      {
        title: "Create a new page from a template",
        text: "In Leadpages, create a new landing page. In the template gallery, filter on thank-you pages (« Thank You ») and pick a simple template. Give it a clear name, for example « Thanks – checklist ».",
      },
      {
        title: "Write a short, useful message",
        text: "A headline that confirms (« You're in! »), then what happens next: « Open the email we just sent to confirm your address. » Remind them to check their spam folder.",
      },
      {
        title: "Deliver the promised freebie",
        text: "If you promised a guide or a checklist, add a « Download » button that links to the file. Visitors get it right away, without waiting for the email.",
      },
      {
        title: "Offer the next step",
        text: "Make the most of this moment of trust: a link to your Shopify store with a welcome code, an intro video or your social accounts. One main button, not five.",
      },
      {
        title: "Publish it and connect it to the form",
        text: "Publish the thank-you page. Then open the page that holds the form, click the form and look for what happens after submission (« After submitting » or « Form actions », depending on the version). Choose to show a Leadpages page and select your thank-you page. Update the form page.",
      },
      {
        title: "Test and count your sign-ups",
        text: "Sign up with your own address: you should land on the thank-you page and the contact should reach your email tool. Each visit to this page is a sign-up: in Google Analytics, you can make it a key event to track your conversions.",
      },
    ],
    pitfalls: [
      "Keeping the default « Thank you » message: visitors do not know what to do next.",
      "Forgetting to update the form page after choosing the thank-you page: the old setting stays live.",
      "Adding too many links: one main button converts better.",
    ],
  },
  {
    slug: "vendre-sur-instagram-avec-shopify",
    localSlug: "sell-on-instagram-shopify",
    question: "How to sell on Instagram with Shopify?",
    summary: "Connect your store to Instagram, tag your products in posts and keep a link in bio that sells.",
    intro:
      "Instagram is often the first source of visitors for a new store. With Meta's official app for Shopify, your products go into a catalog you can tag in your posts. Until then, a good link in bio is already enough to sell.",
    steps: [
      {
        title: "Switch your Instagram account to a professional account",
        text: "In the Instagram app, open your account settings and switch to a professional account (« Business » or « Creator »). Connect it to a Facebook Page: Meta needs it for the product catalog.",
      },
      {
        title: "Install the Facebook & Instagram app",
        text: "In the Shopify admin, open the Shopify App Store and search for « Facebook & Instagram », published by Meta. Install it: it is added as a free sales channel.",
      },
      {
        title: "Connect your Meta accounts",
        text: "In the Facebook & Instagram channel, follow the setup: your Facebook account, your Meta Business account (Business Manager), your Facebook Page and your Instagram professional account. Accept the terms, then start the catalog sync.",
      },
      {
        title: "Check your product pages",
        text: "Only active products with a photo, a price and a description sync correctly to the catalog. Choose in the app which products to share: start with your best sellers rather than the whole catalog.",
      },
      {
        title: "Tag your products in your posts",
        text: "Once Meta has approved your account (this can take a few days), you can tag your products in posts and stories, just like tagging a person. Tapping the tag shows the price and leads to the product page. Some shopping features depend on your country: the app shows what is available to you.",
      },
      {
        title: "Keep a link in bio that sells",
        text: "While you wait for approval, or on top of it: put a single link in your bio to a page with your store, your current offer and your email sign-up. Add UTM parameters to this link to see in Google Analytics what Instagram brings you.",
      },
    ],
    pitfalls: [
      "Sharing the whole catalog at once with incomplete product pages: products without a photo or a price are rejected.",
      "Relying only on product tags: they depend on Meta's approval and your country. A link in bio works right away.",
      "Sending Instagram visitors to your home page: a direct link to the product or a dedicated page converts better.",
    ],
  },
  {
    slug: "relancer-les-paniers-abandonnes-shopify",
    localSlug: "abandoned-cart-email-shopify",
    question: "How to email customers who abandon their cart on Shopify?",
    summary: "Turn on Shopify's automatic email, pick the right delay and follow up by hand on your biggest carts.",
    intro:
      "Many visitors fill their cart, start checkout, then leave. Shopify keeps these abandoned checkouts and can automatically send an email with a link that brings the customer back to their cart, with no paid app.",
    steps: [
      {
        title: "Open the abandoned checkouts list",
        text: "In your Shopify admin, click « Orders », then « Abandoned checkouts ». You see every customer who entered their email at checkout without completing the order, with what was in their cart.\n\nThe email status column shows whether a reminder has been sent, and the recovery status shows whether the customer bought in the end.",
      },
      {
        title: "Turn on the automatic email",
        text: "Go to « Apps » > « Messaging », then « Automations ». On Shopify's abandoned checkout automation, click « Show actions » > « Edit settings » and select sending abandoned checkout emails automatically.",
      },
      {
        title: "Choose who gets the email and when",
        text: "In « Send to », choose who receives it: only customers subscribed to your marketing emails, or everyone who abandoned checkout. In « Send after », choose the delay (for example 1 hour, 6 hours, 10 hours or 24 hours).\n\nA short delay (a few hours) reaches customers while they are still thinking about the purchase. Save.",
      },
      {
        title: "Customize the message",
        text: "Open the email template to add your logo, your colors and text that sounds like you. Keep one clear button back to the cart: that is what brings the customer back.\n\nTo give a nudge, you can add a discount code to the text, but not every time: otherwise customers learn to abandon on purpose.",
      },
      {
        title: "Follow up by hand on big carts",
        text: "For an important cart, open it in « Abandoned checkouts » and send the recovery email yourself from the checkout page. You can add a personal note or answer a shipping question.",
      },
      {
        title: "Measure what the reminders bring in",
        text: "Check « Abandoned checkouts » every week: the recovery status shows which carts turned into orders. If few customers come back, try another delay or a clearer subject line before adding a discount.",
      },
    ],
    pitfalls: [
      "Emailing everyone without checking the rules where you sell: some countries require consent before a marketing email. If in doubt, keep « subscribed to marketing ».",
      "Putting a discount in every reminder: customers start waiting for the email before they buy.",
      "Not testing: place an order yourself up to checkout with your email, leave, and check that the email arrives and the link reopens the cart.",
    ],
  },
  {
    slug: "ajouter-un-produit-shopify",
    localSlug: "add-product-shopify",
    question: "How to add a product on Shopify?",
    summary: "Title, photos, price, inventory and shipping: a product page filled in the right way.",
    intro:
      "A good product page sells. Shopify guides you field by field, and saved changes show up in your store right away.",
    steps: [
      {
        title: "Open « Add product »",
        text: "In the left menu, click « Products », then « Add product ».",
      },
      {
        title: "Write the title and description",
        text: "A clear title, then a description that answers the buyer's questions: material, size, use, delivery time.",
      },
      {
        title: "Add the photos",
        text: "In « Media », click « Upload new ». Images, videos and 3D models are accepted.",
      },
      {
        title: "Set the price and inventory",
        text: "Enter the price and, if you want, a « Compare-at price ». In « Inventory », enter the quantity available.",
      },
      {
        title: "Set shipping and variants",
        text: "For a physical product, enter the weight. Add variants (size, color) if needed. For a digital file, turn off « Physical product ».",
      },
      {
        title: "Choose the status and save",
        text: "The « Active » status makes the product visible. Click « Save ».",
      },
    ],
    pitfalls: ["Leaving the weight at 0: shipping rates will be wrong.", "Photos of different sizes: the store looks less professional."],
  },
  {
    slug: "choisir-un-theme-shopify",
    localSlug: "choose-free-theme-shopify",
    question: "How to choose and install a free Shopify theme?",
    summary: "Find a free theme in the Theme Store, try it, then publish it.",
    intro:
      "The theme decides how your store looks. Shopify offers free themes, designed and maintained by Shopify: they are the best place to start.",
    steps: [
      {
        title: "Open the Theme Store",
        text: "Go to themes.shopify.com or, in the admin, to « Online Store » then « Themes ». In the « Price » filter, check « Free » to see only free themes.",
      },
      {
        title: "Filter by your business",
        text: "Use the « Industry » filter (clothing, beauty, home, food…) and look mostly at how the theme shows products, not at the demo photos.",
      },
      {
        title: "Add the theme to your store",
        text: "Open the theme page and click « Add ». It goes into your theme library without replacing the one that is live.",
      },
      {
        title: "Preview and customize",
        text: "Click « Customize »: add your logo, colors, fonts and the home page sections. Also check the mobile preview.",
      },
      {
        title: "Publish it",
        text: "When everything looks right, click « Publish ». Only one theme is live at a time; the old one stays in the library and you can switch back.",
      },
    ],
    pitfalls: [
      "Buying a paid theme right away: free themes are enough for a first store.",
      "Publishing without checking the phone view, when most visits come from mobile.",
    ],
  },
  {
    slug: "changer-ou-annuler-son-offre-leadpages",
    localSlug: "change-or-cancel-leadpages-plan",
    question: "How do you change or cancel your Leadpages plan?",
    summary: "Upgrade or downgrade, stop your subscription, and what happens to your pages.",
    intro:
      "You can change plans or cancel at any time, with no penalty. Only the account owner can manage billing.",
    steps: [
      {
        title: "Open billing",
        text: "At the bottom of the left menu, click your workspace name, then « Billing ». Sign in with the owner account if the link doesn't appear.",
      },
      {
        title: "Change your plan",
        text: "The page shows every plan, with « Current Plan » on yours. Pick a higher or lower plan. The change takes effect at the next billing cycle.",
      },
      {
        title: "Or cancel",
        text: "Still in « Billing », use « Manage Subscription » or « Cancel ». During a trial, the end date is shown under your plan: cancel before it so you aren't charged.",
      },
      {
        title: "Know what happens to your pages",
        text: "If your subscription stops, published pages go back to draft. They aren't lost: you can publish them again when you reactivate a subscription.",
      },
    ],
    pitfalls: [
      "Downgrading without checking the limits: number of pages, domains or blogs included.",
      "Canceling while ads are still sending traffic to your pages.",
    ],
  },
  {
    slug: "creer-sa-landing-page-leadpages-de-a-a-z",
    localSlug: "create-leadpages-landing-page-complete-guide",
    question: "How do you create your first Leadpages landing page from start to finish?",
    summary: "The complete guide: from the free trial to a live page that collects leads, step by step.",
    intro:
      "This guide follows the real order of a first landing page: plan the offer, build the page with AI, review it, publish it on your domain, then collect and track leads. Plan on half a day, during the 7-day free trial.",
    steps: [
      {
        title: "Plan your offer before you start",
        text: "A landing page has one goal. Decide it before you open the tool: collect emails, sell a product, book calls.\n\nWrite down: who the page is for, the problem you solve, what the visitor gets, and the one action you want them to take (for example « Get the free guide »).\n\nGather your logo, 2 or 3 photos, your colors and, if you have them, a few real customer reviews. You'll save time and AI credits.\n\nFinally, plan the page layout. The one that works best for a first page fits in six blocks, in this order: a headline that states the result, a line that says who it's for, three concrete benefits, proof (a review, a real number, a client logo), the form or button, then two or three FAQs to clear the last doubts.\n\nFor the headline, start from the result the visitor wants, not your product. « Get 10 dinner ideas ready in 20 minutes » says more than « Discover my cookbook ». Write three versions and keep the clearest: you can test the others later.",
      },
      {
        title: "Pick a plan and start the trial",
        text: "The pricing page has two families of plans. HTML Pub is for publishing pages, sites and blogs. Leadpages adds tools to improve results: A/B testing from the Grow plan, then Smart Traffic and heatmaps from Optimize.\n\nFor a first page, HTML Pub is often enough. If you want to test two versions of your page, choose Leadpages Grow.\n\nClick « Start 7-Day Free Trial ». A credit card is required, but nothing is charged before day 7. Put the end date in your calendar. Prices change often: check today's on the official page.",
      },
      {
        title: "Open the Create screen",
        text: "In the left menu, click « Create ». The AI assistant, Piper, asks « What are you making? »: choose « Landing page ».\n\nPrefer to start from something ready-made? Click « Templates » to pick one, then « Use ». The rest of the guide stays the same.",
      },
      {
        title: "Describe your page in detail",
        text: "In the field at the bottom, use your notes from step 1: the audience, the offer, the tone, the colors and the sections you want. For example: a headline, three benefits, a customer review, an FAQ and a form with a single email field.\n\nThe more precise the description, the fewer credits you'll spend on fixes. Click « Send ».\n\nExample of a complete description: « Landing page in English for a free PDF guide for independent fitness coaches who want to find their first clients online. Simple, motivating tone. Colors: navy and orange. Sections: headline with the promised result, three benefits, a short author bio, two FAQs, a form with a single email field and an unchecked consent box. Button: Get the guide. »\n\nYou can also paste the address of an existing page or some HTML: Piper uses it as a starting point.",
      },
      {
        title: "Choose images and style",
        text: "Piper asks which images to use: yours, AI-generated images (which cost more credits) or none for now. The estimated cost is shown at the top right.\n\nIt then suggests three visual directions. Click the one you like, then « Build it ». The page is built in about a minute.",
      },
      {
        title: "Fix the page by chatting",
        text: "Click « Open in editor ». In the « Ask Piper to edit this page… » field, ask for one change at a time: « Replace the headline with… », « Make the button green », « Remove the pricing section ».\n\nPiper lists what it changed and the credits used. Reread every piece of text yourself: AI can make up numbers or reviews. Replace them with real ones, or delete them.\n\nA few useful requests for a first page: « Shorten every paragraph to two sentences max », « Add the button at the top of the page too », « Put my logo at the top left » (after uploading it in « Assets »), « Use my Brand Kit colors ».\n\nFor a small text change, clicking directly in the page is often faster than going through AI. Keep Piper for layout or style changes.",
      },
      {
        title: "Check the form and consent",
        text: "The form is the heart of the page. Ask for as little as possible: often, the email alone is enough.\n\nIf you plan to send marketing emails, add a checkbox that isn't pre-checked and a sentence explaining what the address will be used for and how to unsubscribe.\n\nFinally, check the button text: it should say what the person gets (« Get the guide »), not just « Submit ».\n\nThink about what happens after submitting: a thank-you message that says what to do next (« Check your inbox, the guide arrives in 2 minutes »), or a dedicated thank-you page. It's the right place to offer the next step, like a link to your store or your booking page.\n\nIf you promise a file (PDF guide, checklist, template), prepare it now and send it in the welcome email of your email tool (step 11).",
      },
      {
        title: "Check the mobile view",
        text: "Most visitors arrive on their phone. At the bottom right of the editor, click the mobile icon. Check that the headline reads without zooming, the button is visible without scrolling too far, and the form is easy to fill in with a thumb.\n\nCheck speed too: heavy images slow the page down on a mobile network, and every second of waiting makes visitors leave. Use reasonably sized photos and avoid autoplay videos at the top of the page.\n\nFinally, read everything out loud one last time. Typos and sentences that run too long are much easier to spot that way.",
      },
      {
        title: "Set the address and SEO",
        text: "In the editor, the « … » menu at the top right shows the page address (the slug). Keep it short and readable, for example free-guide.\n\nIn « SEO & Social », set the title and description shown on Google and when the page is shared, plus the tab icon. If the page is only for an ad, you can ask Google not to index it.",
      },
      {
        title: "Publish on your own domain",
        text: "When you publish, the question « Where should this live? » appears. You can keep the free address provided, or connect your domain to look more trustworthy.\n\nTo connect a domain, open « Domains » in the left menu, then « Connect Domain ». A subdomain like offer.mysite.com is the simplest. Automatic setup configures the domain for you. HTTPS is free and can take up to 48 hours.\n\nIf automatic setup isn't available with your domain provider, add the records Leadpages shows by hand: a CNAME for the subdomain and a TXT for security. Copy the exact values from your account.\n\nAfter each change, click « Update » to put the page live.",
      },
      {
        title: "Send leads to your email tool",
        text: "In the left menu, open « Connectors ». Find your tool (Mailchimp, Brevo, MailerLite, HubSpot…) and click « Connect ».\n\nIn the « Automations » tab, click « Create automation », choose the « Form submitted » trigger, then the tool that will receive the leads. Every new subscriber lands there automatically. Set up a welcome email there.",
      },
      {
        title: "Run a full test yourself",
        text: "Open the published page on your phone, fill in the form with your own address, then check three things.\n\nThe response shows up in « Submissions », where you can also export it as CSV. The contact arrives in your email tool. The welcome email goes out. If something fails, « View execution logs » in « Connectors » shows why.",
      },
      {
        title: "Bring in your first visitors",
        text: "A live page doesn't get visits on its own. Start with people who already know you: send the link to your contacts, add it to your email signature and to your social media bios.\n\nThen post regularly where your audience looks for ideas. On Pinterest, a vertical pin with the promised result and the page link can bring visits for months. On Instagram, LinkedIn or Facebook, a short useful tip followed by the link works better than a plain ad for your page.\n\nTo know which channel works, add a tag at the end of the link depending on where you share it, for example ?utm_source=pinterest or ?utm_source=instagram. The « Acquisition » tab in the next step will then show where your subscribers come from.\n\nIf you move to paid ads, start small, with a daily budget you can afford to lose, and only increase it once the page's conversion rate is good.",
      },
      {
        title: "Track your results",
        text: "Open « Analytics ». The key numbers are at the top: « Sessions » (visits), « Form submissions », « Conversions » and « Conv. rate » (conversion rate).\n\nPick the period (7, 14 or 30 days) and a specific page with « All Pages ». The « Acquisition » tab shows where visitors come from. Wait for at least a hundred visits before drawing conclusions.\n\nIf lots of people come but few sign up, the problem is often the headline or the offer: the promise isn't clear or useful enough. If almost nobody comes, it's distribution that needs work: share the link in your emails, on social media, in your Instagram bio or on a Pinterest pin.\n\nTo track ads, « Scripts & Pixels », in the editor's « … » menu, lets you add the Meta or Google Ads pixel.",
      },
      {
        title: "Improve the page with an A/B test",
        text: "With Leadpages Grow or higher, duplicate the page to create a version B and change one thing only: the headline, the button or the offer.\n\nChoose your goal (form submitted, click, purchase), split traffic 50/50 and wait for the « clear winner » result. Then keep the better version and start a new test. On the Optimize plan, Smart Traffic can send each visitor to the version most likely to appeal to them.\n\nWhere to start? The headline, almost always: it's what everyone reads. Then the button text, then the offer itself (a guide or a checklist, a discount or a freebie). Log each test and its result in a simple table: after a few months, you'll know exactly what your audience responds to.\n\nOn HTML Pub? You can move up to Leadpages Grow from your account settings when you're ready: your pages and domains are kept.",
      },
    ],
    pitfalls: [
      "Putting several goals on the same page (sign up, buy, follow on Instagram): the visitor hesitates and does nothing.",
      "Leaving numbers, reviews or testimonials made up by AI on the live page.",
      "Publishing without testing the form yourself: you find out too late that leads weren't coming through.",
      "Forgetting the end of the 7-day trial and getting charged before you decided.",
    ],
  },
  {
    slug: "partir-d-un-modele-leadpages",
    localSlug: "use-template-leadpages",
    question: "How do you start from a template in Leadpages?",
    summary: "Pick a ready-made template and adapt it to your business.",
    intro:
      "A template saves you from starting with a blank page. You keep a structure that works and replace the text, images and colors.",
    steps: [
      {
        title: "Open the templates",
        text: "On the « Create » screen, click « Templates » above the input bar, or « Browse all templates » to see them all.",
      },
      {
        title: "Preview before choosing",
        text: "Click « Preview » to see the template full size. Choose the one whose structure matches what you want to sell, not just the one with colors you like.",
      },
      {
        title: "Use it",
        text: "Click « Use ». A copy of the template opens, and you can edit it without breaking anything.",
      },
      {
        title: "Adapt the content",
        text: "Ask the assistant to replace the text with yours, or edit it directly. Add your logo, photos and colors.",
      },
      {
        title: "Check on mobile, then publish",
        text: "Most visitors arrive on their phone. In the editor, click the mobile icon at the bottom right to check, then publish.",
      },
    ],
    pitfalls: [
      "Leaving the template's placeholder text on the live page.",
      "Keeping every section of the template when some don't serve your offer.",
    ],
  },
  {
    slug: "publier-du-html-sur-html-pub",
    localSlug: "publish-html-on-html-pub",
    question: "How do you publish a ready-made HTML page on HTML Pub?",
    summary: "Paste code or upload an .html file, without spending AI credits.",
    intro:
      "Already have a page in HTML, made by you or by an AI? HTML Pub puts it online in seconds. This method doesn't use credits.",
    steps: [
      {
        title: "Open the Create screen",
        text: "Click « Create » in the left menu, or « Create Page » from your page list.",
      },
      {
        title: "Add your code",
        text: "Paste your HTML into the « Describe the page you want, or paste a URL or HTML… » field, or use the upload icon in the bar to drop in an .html file.",
      },
      {
        title: "Check the preview",
        text: "Make sure the images show up. If they're on your computer, add them to the page's files (« Assets ») first.",
      },
      {
        title: "Publish",
        text: "Send, check, then publish. The page is live on your workspace's free address, or on your domain if you've connected one.",
      },
    ],
    pitfalls: [
      "Pasting a page that loads images or files still sitting on your computer.",
      "Sending a form to another service: HTML Pub then doesn't collect the responses.",
    ],
  },
  {
    slug: "creer-un-site-web-avec-html-pub",
    localSlug: "create-website-html-pub",
    question: "How do you create a multi-page website with HTML Pub?",
    summary: "A homepage, then the other pages with the same menu and style.",
    intro:
      "A website groups several pages under one domain, with a shared menu. The AI builds the homepage first, then each page when you ask.",
    steps: [
      {
        title: "Choose « Website »",
        text: "In the left menu, open the arrow next to « Create » and choose « Site ». Or, on the « Create » screen, select « Website ».",
      },
      {
        title: "Describe your site",
        text: "Explain your business, your audience, the style you want and the pages you need, then click « Send ». Type everything on a single line: each line break sends a separate message.",
      },
      {
        title: "Approve the page list",
        text: "Piper suggests the menu pages. Rename, remove (« Remove ») or add some (« Add a page »), then click « These pages ».",
      },
      {
        title: "Choose images and style, then build the homepage",
        text: "As with a landing page, choose images and a style direction, then click « Build it ». Only the homepage is built at this stage.",
      },
      {
        title: "Build the other pages",
        text: "The « The rest of the site » card lists the remaining pages with a credit estimate. « Build 3 pages » builds them one by one, with the homepage's header and style. « Skip for now » lets you do it later.",
      },
    ],
    pitfalls: [
      "Building every page at once without reviewing the homepage: style mistakes get repeated everywhere.",
      "Going over the number of pages included in your plan.",
    ],
  },
  {
    slug: "creer-un-blog-avec-html-pub",
    localSlug: "create-blog-html-pub",
    question: "How do you create a blog with HTML Pub?",
    summary: "Create the blog on HTML Pub, write a first post and publish it on your site, step by step.",
    intro:
      "A blog brings visitors from Google and social media. With HTML Pub, it takes a minute to set up, and posts go live as soon as you publish them.",
    steps: [
      {
        title: "Create the blog",
        text: "In the left menu, open « Blog » and click « New Blog ». Give it a title; the address (slug) fills in on its own. The description and author name are optional. Click « Create Blog ».",
      },
      {
        title: "Explore the blog dashboard",
        text: "The blog page shows the design of the blog homepage (« Feed layout ») and of posts (« Post layout »), then your published, draft and scheduled posts.",
      },
      {
        title: "Write a post",
        text: "Click « New post ». The editor opens with Penn, the writing assistant: pick a suggestion (« Write a how-to guide »…) or write it yourself.",
      },
      {
        title: "Fill in the post settings",
        text: "The document icon at the bottom opens « Post Settings »: title, content, author, cover image and SEO. Click « Save changes ».",
      },
      {
        title: "Publish",
        text: "Click « Publish » at the top right. The post is live immediately.",
      },
      {
        title: "Attach it to your site",
        text: "If you have an HTML Pub site, you can show the blog at the /blog address of your domain.",
      },
    ],
    pitfalls: [
      "Publishing posts without a cover image: they get fewer clicks on social media.",
      "Choosing a plan without a blog: check that yours includes at least one.",
    ],
  },
  {
    slug: "modifier-l-adresse-d-une-page-leadpages",
    localSlug: "change-page-url-leadpages",
    question: "How do you change a page's URL or protect it with a password?",
    summary: "A page's title, address (slug), password and tags.",
    intro:
      "Each page has a few simple settings, in the « … » menu on its card in « Pages ». They give you a readable address, hide a page that's not ready, or keep your pages organized.",
    steps: [
      {
        title: "Open the page menu",
        text: "In « Pages », click « … » at the bottom of the page's card. The menu groups stats, responses, sharing and settings.",
      },
      {
        title: "Change the title and address",
        text: "Choose « Settings ». For the address (slug), use lowercase letters, numbers and hyphens, for example coaching-offer-september.",
      },
      {
        title: "Or do it from the editor",
        text: "In the page editor, the « … » menu at the top right shows the address (slug, editable with the pencil), the published address, and the « SEO & Social » and « Scripts & Pixels » options.",
      },
      {
        title: "Protect with a password",
        text: "Choose « Set Password ». Visitors will need to enter the password to see the page. Handy for a client page or a page that isn't ready yet.",
      },
      {
        title: "Organize with tags",
        text: "Choose « Tags », or click « + tag » on the card, to find your pages by campaign or by client.",
      },
      {
        title: "Take care of SEO",
        text: "« SEO & Social » sets the tab icon (favicon), indexing by Google, and the title and description shown in search results.",
      },
    ],
    pitfalls: [
      "Changing the address of a page already shared or used in an ad: the old link stops working.",
      "Forgetting to remove the password on launch day.",
    ],
  },
  {
    slug: "recuperer-les-formulaires-html-pub",
    localSlug: "view-form-submissions-html-pub",
    question: "How do you get the leads from your forms?",
    summary: "See responses, export them to CSV and delete them if needed.",
    intro:
      "HTML Pub detects the forms on your pages automatically and saves the responses. There's nothing to set up.",
    steps: [
      {
        title: "Add a form to your page",
        text: "Ask the assistant to « add a form with first name and email », or use a template that includes one.",
      },
      {
        title: "Open « Submissions »",
        text: "In the left menu, click « Submissions ». The « Leads » page groups every response: name, email, source page and date.",
      },
      {
        title: "Review the responses",
        text: "For a single page, open its « … » menu in « Pages » and choose « Submissions ». Expand a row to see every field filled in.",
      },
      {
        title: "Export to CSV",
        text: "Export the responses to CSV to open them in Excel or Google Sheets.",
      },
      {
        title: "Delete when asked",
        text: "The trash icon deletes a response permanently. Useful if someone asks for their data to be erased.",
      },
    ],
    pitfalls: [
      "Sending the form to an outside service: HTML Pub then no longer sees the responses.",
      "Never exporting your leads: keep a regular copy.",
    ],
  },
  {
    slug: "connecter-leadpages-a-son-outil-e-mail",
    localSlug: "connect-leadpages-email-tool",
    question: "How do you send your leads to Mailchimp, Brevo or your CRM?",
    summary: "Connect an integration so every new lead lands in the right place.",
    intro:
      "A connector sends each form response to another tool, with no copy and paste. HTML Pub offers more than 20: Mailchimp, Brevo, MailerLite, Kit, ActiveCampaign, HubSpot, Pipedrive, Slack, Zapier, Stripe…",
    steps: [
      {
        title: "Open « Connectors »",
        text: "In the left menu, click « Connectors ». Search for your tool by name or category (email, CRM, ads…) and click « Connect ».",
      },
      {
        title: "Authorize the connection",
        text: "Sign in to the tool or paste its API key, depending on what's asked. The status changes to « Connected ».",
      },
      {
        title: "Set up the automation",
        text: "In the « Automations » tab, click « Create automation ». Choose the trigger (« Form submitted », « Checkout completed » or « Visitor identified »), then the connected app that receives the leads.",
      },
      {
        title: "Test with your own email",
        text: "Fill in the form yourself, then check that the contact arrives in the tool.",
      },
      {
        title: "Watch for errors",
        text: "« View execution logs » shows every send: successful, pending or failed, with the reason.",
      },
    ],
    pitfalls: [
      "Not testing: you find out weeks later that leads weren't coming through.",
      "Going over the number of active integrations in your plan.",
    ],
  },
  {
    slug: "faire-un-test-ab-leadpages",
    localSlug: "ab-test-leadpages",
    question: "How do you run an A/B test with Leadpages?",
    summary: "Compare two versions of a page and keep the one that converts best.",
    intro:
      "An A/B test shows two versions of a page to your visitors and measures which one gets more results. It's included from the Leadpages Grow plan.",
    steps: [
      {
        title: "Create a variant",
        text: "Duplicate your page in one click, or let the AI suggest a variant. Change one important thing only: the headline, the button or the offer.",
      },
      {
        title: "Choose your goal",
        text: "Say what counts as success: form submitted, button click, purchase or a conversion on another site.",
      },
      {
        title: "Split the traffic",
        text: "50/50 is the simplest. You can also choose 70/30 or any split between 10 and 90%. Then publish.",
      },
      {
        title: "Wait for a clear result",
        text: "Results show live with three levels: trending, likely, clear winner. Wait for « clear winner » before deciding.",
      },
      {
        title: "Keep the winner",
        text: "Send 100% of traffic to the better version in one click, then start a new test.",
      },
    ],
    pitfalls: [
      "Changing several things at once: you no longer know what made the difference.",
      "Stopping the test after a few visits: the result is often down to chance.",
    ],
  },
  {
    slug: "lire-une-carte-de-chaleur-leadpages",
    localSlug: "read-heatmap-leadpages",
    question: "How do you read a heatmap in Leadpages?",
    summary: "See where visitors click, how far they scroll and what they read.",
    intro:
      "A heatmap colors your page based on visitor activity. It's included in the Leadpages Optimize and Scale plans, with no code to install.",
    steps: [
      {
        title: "Wait for enough visits",
        text: "Below about 30 visits, there's too little data to draw conclusions.",
      },
      {
        title: "Turn on heatmap mode",
        text: "In the page editor, click the flame icon in the toolbar.",
      },
      {
        title: "Read the clicks",
        text: "Red: lots of clicks. Blue: ignored areas. If people click an image that isn't a link, make it one.",
      },
      {
        title: "Read the scrolling",
        text: "The scroll map shows the share of visitors who reach 25, 50, 75 and 100% of the page. If few reach the form, move it up.",
      },
      {
        title: "Fix things right away",
        text: "Edit the page or start an A/B test from the same screen.",
      },
    ],
    pitfalls: [
      "Drawing conclusions from too few visits.",
      "Looking for the attention map on mobile: it only exists on desktop (mobile has clicks and scrolling).",
    ],
  },
  {
    slug: "utiliser-smart-traffic-leadpages",
    localSlug: "smart-traffic-leadpages",
    question: "How does Smart Traffic work in Leadpages?",
    summary: "AI sends each visitor to the page version most likely to appeal to them.",
    intro:
      "A classic A/B test splits traffic evenly. Smart Traffic instead picks, for each visitor, the variant most likely to convert them. It's included from Leadpages Optimize.",
    steps: [
      {
        title: "Prepare at least two variants",
        text: "Create truly different versions: a different offer, angle or audience.",
      },
      {
        title: "Set the goal",
        text: "Form, click or purchase: Smart Traffic learns from this goal.",
      },
      {
        title: "Turn on Smart Traffic",
        text: "Click « Let AI optimize this for me ». Instead of a fixed split, the AI routes each visitor and gets better as visits add up.",
      },
      {
        title: "Track the results",
        text: "Compare the overall conversion rate before and after. Add a new variant when another one runs out of steam.",
      },
    ],
    pitfalls: [
      "Using it with near-identical variants: the AI has nothing to choose between.",
      "Expecting results within a few days with little traffic.",
    ],
  },
  {
    slug: "ameliorer-le-taux-de-conversion-de-ses-pages-de-a-a-z",
    localSlug: "improve-landing-page-conversion-rate-complete-guide",
    question: "How do you improve your landing page conversion rate from start to finish?",
    summary: "A complete guide to analyzing, optimizing and raising the conversion rate of your Leadpages and HTML Pub landing pages, step by step.",
    intro:
      "Your page is live, but the conversion rate stays low. Before building a new page or switching tools, there's a logical path: understand where the problem comes from, fix the blockers one by one and measure each improvement. This guide follows that path from start to finish, with Leadpages and HTML Pub features.",
    steps: [
      {
        title: "Understand what conversion rate means",
        text: "Conversion rate is the percentage of visitors who take the action you want: fill in a form, click a button or buy. If 100 people visit your page and 3 fill in the form, the rate is 3%. A good rate depends on the industry, but the landing page average is around 3 to 5%. The goal is to beat it by working on each part of the page.",
      },
      {
        title: "Read your current stats",
        text: "Before changing anything, write down the current conversion rate. In Leadpages, open the page dashboard: you'll see unique visitors, conversions and the rate. That's your starting point.\n\nIf you just launched the page and traffic is low, wait for at least 200 visitors before drawing conclusions. Below that, the numbers aren't reliable.",
      },
      {
        title: "Use heatmaps to find blockers",
        text: "Heatmaps show where visitors click and how far they scroll. If nobody scrolls down to the form, the problem is above it. If everyone clicks an element that isn't a link, that's a missed opportunity.\n\nIn Leadpages, heatmaps are available from the Optimize plan. Turn them on in the page settings and let them run a few days before reading them.",
      },
      {
        title: "Rewrite the main headline",
        text: "The headline is the first thing visitors read. It has to answer one simple question: « What's in it for me? ». A good headline talks about the result, not your product.\n\nBad: « Our innovative digital marketing solution ». Good: « Double your sign-ups in 30 days without raising your ad budget ». Test a headline built around your offer's main benefit.",
      },
      {
        title: "Simplify the form",
        text: "Every extra field in a form lowers the conversion rate. If you ask for first name, last name, email, phone and company, cut it down to email only to start. You can ask for the rest later, once you have the contact.\n\nIn Leadpages, open the form in the editor and delete the fields you don't need. Keep a single action button with clear text: « Get the guide », not « Submit ».",
      },
      {
        title: "Add social proof",
        text: "Visitors trust other visitors. Add customer testimonials, partner logos, user counts or ratings. Social proof reassures people and clears doubts.\n\nPlace testimonials near the form or the buy button, where visitors hesitate. A testimonial with a name, a photo and a result in numbers is worth more than an anonymous quote.",
      },
      {
        title: "Match your ad and your page",
        text: "If your ad promises a free ebook and the page talks about a webinar, the visitor leaves. The ad message, the page headline and the offer must tell the same story.\n\nCheck every traffic source: the Facebook ad copy, the email subject line, the link in your Instagram bio. Each one must match exactly what the page offers.",
      },
      {
        title: "Optimize for mobile",
        text: "More than half of traffic comes from phones. If your page is hard to read or the button is too small on mobile, you lose conversions.\n\nIn Leadpages, use the editor's mobile preview. Check that the headline reads without zooming, the form is easy to fill in with a thumb, and the button is big enough to tap easily.",
      },
      {
        title: "Build a thank-you page that works",
        text: "The thank-you page is the most underrated page. The visitor just converted: they're engaged. Use it to offer a next step: share on social media, sign up for a webinar, discover a product.\n\nIn Leadpages, set the thank-you page in the form settings. Build a real page with a next offer rather than a plain « Thanks » message.",
      },
      {
        title: "Add real urgency",
        text: "Urgency works when it's real. A countdown for an offer that never ends destroys trust. Use real limits: a number of spots, a promotion end date, limited stock.\n\nIf you have no natural limit, create one: « The first 50 sign-ups get a bonus ». What matters is that it's verifiable and honest.",
      },
      {
        title: "Run an A/B test",
        text: "Don't change everything at once. Create a variant with a single change: a different headline, a different button color, a shorter form. Let the test run until you have at least 100 conversions per variant for a reliable result.\n\nIn Leadpages, duplicate your page, change one element and start the test from the Optimize tab. Leadpages splits the traffic automatically.",
      },
      {
        title: "Turn on Smart Traffic to automate",
        text: "Once you have several variants that work, Smart Traffic takes over. Instead of splitting traffic evenly, the AI sends each visitor to the variant most likely to convert them, based on their device, location and behavior.\n\nSmart Traffic is available from Leadpages Optimize. Turn it on in your page's Optimize tab after creating at least two variants.",
      },
      {
        title: "Optimize the page's SEO",
        text: "A page that ranks well gets free, qualified traffic. Fill in the SEO title, meta description and URL with your main keywords. Add alt text to every image.\n\nIn Leadpages, open the page's SEO settings. The title should include your main keyword and stay under 60 characters. The description should make people want to click, in under 155 characters.",
      },
      {
        title: "Set up weekly tracking",
        text: "Conversion rate optimization isn't a one-off project, it's an ongoing process. Every week, write down the conversion rate, the number of visitors and the results of running tests.\n\nCreate a simple table with the date, the rate, the change tested and the result. After a few weeks, you'll see which kinds of changes have the most impact on your pages.",
      },
    ],
    pitfalls: [
      "Changing several elements at once: impossible to know which one had an effect.",
      "Drawing conclusions with fewer than 200 visitors per variant.",
      "Copying a competitor's page without understanding why it works for their audience.",
      "Ignoring mobile: more than half of traffic comes through it.",
      "Adding a fake countdown that restarts on every visit.",
    ],
  },
  {
    slug: "publier-une-page-depuis-claude",
    localSlug: "publish-page-from-claude",
    question: "How do you publish an HTML Pub page straight from Claude?",
    summary: "Connect HTML Pub to Claude to create and edit your pages by chatting.",
    intro:
      "HTML Pub has a connector for Claude (MCP). Once it's connected, you ask Claude for a page and it publishes it to your account.",
    steps: [
      {
        title: "Check your plan",
        text: "The MCP connector is included in every HTML Pub and Leadpages plan, from Starter up.",
      },
      {
        title: "Add the connector in Claude",
        text: "On claude.ai, open Settings, then Connectors, choose « Add custom connector » and paste the address https://mcp.htmlpub.com/mcp.",
      },
      {
        title: "Authorize access",
        text: "Sign in to your HTML Pub account when Claude asks. No API key is needed. Claude then appears in « Connected Apps », in your workspace menu.",
      },
      {
        title: "Ask for your page",
        text: "For example: « Create and publish on HTML Pub a landing page for my photography workshop, with a sign-up form. » Claude gives you the page address.",
      },
      {
        title: "Edit by chatting",
        text: "Ask Claude for changes: it edits the existing page without starting over.",
      },
    ],
    pitfalls: [
      "Adding the wrong connector address: copy it from the official help center.",
      "Publishing without reviewing: always check the live page.",
    ],
  },
  {
    slug: "creer-une-pub-video-avec-ad-studio",
    localSlug: "create-video-ad-ad-studio",
    question: "How do you create a video ad with Ad Studio?",
    summary: "A starting image, a storyboard, then the final video, approving each step.",
    intro:
      "Ad Studio turns a short description into an ad. It offers product-focused ads or UGC-style ads with an AI-generated creator. It's only available on the Leadpages Optimize and Scale plans.",
    steps: [
      {
        title: "Open « Ads »",
        text: "In the left menu, click « Ads ». Describe your product, your audience and the style you want: product ad or UGC-style video.",
      },
      {
        title: "Approve the starting image",
        text: "Ad Studio creates an image that sets the scene, the product and the creator. Ask for tweaks: this step doesn't use video credits.",
      },
      {
        title: "Approve the storyboard",
        text: "Review the shots, captions and camera moves that tell the story.",
      },
      {
        title: "Start the shoot",
        text: "Before rendering, a quote shows the number of credits based on the number of shots and the resolution. Approve it to get the final video.",
      },
    ],
    pitfalls: [
      "Starting the render without reviewing the storyboard carefully: that's the step that costs credits.",
      "Being surprised by a video with no music: if the music isn't royalty-free, it's removed.",
      "Looking for Ad Studio on an HTML Pub plan: you need to move up to Leadpages Optimize.",
    ],
  },
  {
    slug: "choisir-son-forfait-shopify",
    localSlug: "choose-shopify-plan",
    question: "How do you choose your Shopify plan?",
    summary: "Basic, Grow, Advanced or Plus: which one to pick for your business.",
    intro:
      "Shopify has four plans. If you're starting solo, Basic is almost always enough. The pricier plans are mostly for teams and high volumes.",
    steps: [
      {
        title: "Compare the four plans",
        text: "Basic for solo entrepreneurs, Grow for small teams (up to 5 staff accounts), Advanced for selling internationally with more tools (up to 15 accounts), Plus for large businesses.",
      },
      {
        title: "Choose yearly or monthly billing",
        text: "Paying yearly costs less per month. Paying monthly gives you more freedom to stop. Check both prices shown on shopify.com/pricing.",
      },
      {
        title: "Look at the fees per sale",
        text: "With Shopify Payments, card rates go down as the plan goes up. If you use another payment provider, Shopify adds transaction fees, which are higher on Basic.",
      },
      {
        title: "Start small",
        text: "Start on Basic. You can change plans later, when your sales justify it.",
      },
    ],
    pitfalls: [
      "Picking Advanced from day one without needing it.",
      "Forgetting the cost of paid apps, which comes on top of the plan.",
    ],
  },
  {
    slug: "creer-sa-boutique-shopify-de-a-a-z",
    localSlug: "create-shopify-store-complete-guide",
    question: "How do you create your Shopify store from start to finish?",
    summary: "The complete guide: from sign-up to your first sale, step by step.",
    intro:
      "This guide follows the real order of a first store: prepare, sign up, fill the store, set up selling, test, then open to the public. Plan on a day of work, spread over the free trial.",
    steps: [
      {
        title: "Prepare everything before you sign up",
        text: "The free trial is short: prepare your content before you create the account, so you spend that time building rather than searching.\n\nGather: the store name, a logo (even a simple one), 3 to 5 products with photos, a price and a description for each, package weight and size if you ship physical items, and your business details (EIN if you have one).\n\nHave the bank account that will receive your sales ready too: Shopify asks for it to turn on payments. Finally, write down what you want in your return policy: how many days, refund or exchange, who pays return shipping.",
      },
      {
        title: "Start the free trial",
        text: "On shopify.com, open the Pricing page. It shows the current offer: a free trial, often followed by a discounted launch price for the first months. Offers change often and depend on your country: read today's offer before you start.\n\nClick « Start free trial », enter your email and answer the questions about your project. Your answers only help set up the admin: you can change everything later.\n\nPut two dates in your calendar right away: the end of the free trial, and the end of the launch offer, when the regular plan price starts.",
      },
      {
        title: "Find your way around the admin",
        text: "Everything happens in the Shopify admin. The left menu groups the sections you'll use every day: « Orders », « Products », « Customers », « Discounts », « Content » and « Online Store ». Store settings are all in « Settings », at the bottom left.\n\nIn the middle of the home page, a bar lets you ask Sidekick, Shopify's AI assistant, a question. It knows your store: ask it, for example, « How do I offer free shipping over $50? ». Still, check its answers against the official help center before changing an important setting.",
      },
      {
        title: "Add your first product",
        text: "Click « Products », then « Add product ». Write a clear title, the way a customer would search for it on Google: « Bauhaus Poster 11x17 » rather than « Model 12 ».\n\nThe description answers the buyer's questions: what it is, the material, the size, how to use it, shipping time. Short sentences and a bullet list read better on a phone.\n\nIn « Media », click « Upload » and add several photos: the product alone on a light background, then in use. Keep the same format for every photo in the store: that's what makes it look professional.",
      },
      {
        title: "Set price, inventory, weight and variants",
        text: "In « Pricing », enter the selling price. The « Compare-at price » field shows a crossed-out price: only use it for a real sale.\n\nIn « Inventory », enter the quantity available so Shopify stops selling when you run out. For an item you ship, enter the weight including packaging: it's used to calculate shipping. For a downloadable file, turn off « Physical product ».\n\nIf the product comes in several sizes or colors, add variants: each one can have its own price, inventory and photo. Finally, set the status to « Active » and click « Save ». Repeat for your other products.",
      },
      {
        title: "Choose and customize your theme",
        text: "The theme decides how the whole store looks. In « Online Store », then « Themes », or on themes.shopify.com, filter for free themes: they're built and updated by Shopify and more than enough to start.\n\nChoose a theme for the way it shows products, not for its demo photos. Click « Add »: the theme goes into your library without replacing the one that's live.\n\nClick « Customize » to add your logo, colors and fonts and to arrange the home page: a large image, your featured products, a line that says what you sell. Always check the mobile preview, then click « Publish ».",
      },
      {
        title: "Organize the store menus",
        text: "Menus link your pages together. Open « Content », then « Menus ». Two menus already exist: the main menu, at the top of the store, and the footer menu.\n\nIn the main menu, keep few entries: home, the catalog or your collections, and a contact page. In the footer, put the practical pages: shipping, returns, terms of sale, legal notice.\n\nClick a menu to add, rename or drag and drop an item, then save.",
      },
      {
        title: "Set up shipping and delivery",
        text: "Click « Settings », then « Shipping and delivery ». The « General profile » applies to all your products: open it to see your shipping zones (for example the United States, then the rest of the world) and the rates for each zone.\n\nFor each zone, create simple rates: a flat price, or a price based on order weight. A « Free shipping » rate above a certain amount often nudges customers to add one more item.\n\nIn « Packages », enter the dimensions of your usual box: Shopify uses them to estimate shipping costs. If you only sell digital products, you don't need a shipping rate.",
      },
      {
        title: "Check your taxes",
        text: "In « Settings », open « Taxes and duties ». Shopify Tax calculates sales tax automatically based on where the customer is, in the regions where you're set up to collect.\n\nIn the United States, you generally collect sales tax in states where you have nexus (a physical presence or enough sales there). Check that the right states are listed, and register with each state before collecting.\n\nShopify says it on this screen itself: if you're unsure about your tax obligations, talk to an accountant or tax professional before opening the store.",
      },
      {
        title: "Turn on payments",
        text: "In « Settings », then « Payments », turn on Shopify Payments. Shopify asks for details about your business and the bank account that will receive payouts. Two-step authentication is required.\n\nWith Shopify Payments, you accept cards and local payment methods without an outside provider. Card rates depend on your plan: check them on shopify.com/pricing. If you use another provider instead, Shopify adds transaction fees.\n\nPayPal can be added under « Supported payment methods » or « Additional payment methods ».",
      },
      {
        title: "Choose your customers' payment methods",
        text: "Still in « Payments », open the payment methods. Turn on the ones your customers really use: Visa and Mastercard, American Express, Apple Pay, Google Pay and Shop Pay.\n\nThe button to view payment rates shows the fees for each method: some cost more than others. There's no need to turn everything on; too many logos can even confuse buyers at checkout.",
      },
      {
        title: "Write your policies",
        text: "In « Settings », open « Policies ». Written policies appear in the checkout footer: customers see them before they buy.\n\nAt a minimum, fill in the return and refund policy, terms of service, shipping policy and privacy policy. « Contact information » is marked required: it's what lets customers reach you.\n\nIf Shopify offers a template, start from it, but adapt it to how you really work. US law doesn't set a single return period for online purchases, so state your own window clearly (30 days is common). Then add these pages to the footer menu.",
      },
      {
        title: "Create a welcome code",
        text: "A small discount helps trigger the first order. Click « Discounts », then « Create discount » and choose « Amount off order ».\n\nType an easy-to-remember code, like WELCOME10, then the value: 10% for example. Under « Maximum discount uses », check the one-use-per-customer limit, or the code works on every order. Save: the code works at checkout right away.\n\nYou'll also use this code on your promo pages and social media.",
      },
      {
        title: "Place a test order",
        text: "Before opening, buy from your own store like a real customer: on your phone, going through the home page, a product, the cart and checkout, with your discount code.\n\nCheck at each step: is shipping right? Does sales tax show correctly? Does the confirmation email arrive, and does it make you want to come back? You can place a real order with your card, then cancel and refund it from « Orders ».\n\nFix anything that made you hesitate: if you hesitated, your customers will too.",
      },
      {
        title: "Choose a plan",
        text: "To keep the store after the trial, choose a plan in « Settings », then « Plan ». For a solo seller, Basic is almost always enough. Check the current US prices, monthly and yearly, on shopify.com/pricing.\n\nIf there's a launch offer, it applies for the first months, then the regular price starts. Grow and Advanced are mostly for teams and high volumes: you can change plans later, when your sales justify it.\n\nRemember that paid apps come on top of the plan price.",
      },
      {
        title: "Connect your domain name",
        text: "Your store already has a free .myshopify.com address, but your own domain looks more trustworthy. In « Settings », then « Domains », choose to connect an existing domain, transfer a domain or buy a new one.\n\nWith many domain providers, Shopify connects it automatically. Otherwise, it tells you which DNS records to change at your provider. Connecting often takes less than two hours, sometimes up to two days. The HTTPS certificate is free.\n\nIf several domains are connected, choose the one customers will see as « Primary ».",
      },
      {
        title: "Open the store to the public",
        text: "While the store is being set up, it's password protected. To open it, go to « Online Store », then « Preferences ». Under store access, turn off password protection: the store becomes visible to everyone.\n\nOn the same page, fill in the home page title and meta description: that's what Google and social networks show when someone shares your store.\n\nThe admin home page then shows that the store is live, with live visit and visitor counts.",
      },
      {
        title: "Attract your first customers",
        text: "An online store doesn't get visits on its own. Pick a hero product and an offer (your welcome code), then create a landing page that only talks about that offer, with HTML Pub or Leadpages.\n\nShare that page's address on social media, in your bio, on Pinterest or in your ads. The page button goes straight to the Shopify product page, not the store home page.\n\nEvery week, look at how many visitors arrive and how many buy, and improve the page that converts least. The quick guide « get customers with a landing page » covers this step in detail.",
      },
    ],
    pitfalls: [
      "Spending the free trial tweaking details without adding a single product.",
      "Opening the store without a test order: the customer is the one who finds the wrong shipping rates.",
      "Leaving policies empty: returns, terms and contact details reassure buyers at checkout.",
      "Forgetting that the regular plan price starts after the launch offer.",
      "Filling the main menu with dozens of links: visitors no longer know where to click.",
    ],
  },
  {
    slug: "connecter-son-domaine-shopify",
    localSlug: "connect-domain-shopify",
    question: "How do you connect your domain name to Shopify?",
    summary: "Use your own address instead of the myshopify.com one.",
    intro:
      "Every store has a free .myshopify.com address. With your own domain, it looks more trustworthy. The SSL certificate (HTTPS) is free.",
    steps: [
      {
        title: "Open « Domains »",
        text: "Click « Settings » at the bottom left, then « Domains ». Three choices: connect an existing domain, transfer a domain or buy a new domain.",
      },
      {
        title: "Connect an existing domain",
        text: "Choose to connect an existing domain and enter your domain. For many domain providers, Shopify offers an automatic connection.",
      },
      {
        title: "Otherwise, edit the DNS by hand",
        text: "At your domain provider, update the records Shopify shows (an A record, and a CNAME for www).",
      },
      {
        title: "Wait for verification",
        text: "The connection often works in under two hours, but can take up to two days. The status changes to « Connected ».",
      },
      {
        title: "Choose the primary domain",
        text: "If several domains are connected, mark the one customers will see as « Primary ».",
      },
    ],
    pitfalls: [
      "Deleting old DNS records your email uses.",
      "Forgetting that domain renewal happens at your domain provider, not at Shopify.",
    ],
  },
  {
    slug: "accepter-les-paiements-shopify",
    localSlug: "accept-payments-shopify",
    question: "How do you accept payments on Shopify?",
    summary: "Shopify Payments, wallets and PayPal: the settings and fees to know.",
    intro:
      "Shopify Payments lets you accept cards, Apple Pay, Google Pay and other payment methods without an outside provider. It's also what avoids extra transaction fees.",
    steps: [
      {
        title: "Open « Payments »",
        text: "Click « Settings », then « Payments ». You'll see the status of Shopify Payments, your payment methods, your payouts and additional providers like PayPal.",
      },
      {
        title: "Turn on Shopify Payments",
        text: "Follow the setup: details about your business and the bank account for payouts. Two-step authentication is required.",
      },
      {
        title: "Choose payment methods",
        text: "Open the payment methods and turn on the ones your customers use: cards, Shop Pay, Apple Pay, Google Pay, and buy now, pay later options if you want them. The button to view payment rates shows the fees for each method.",
      },
      {
        title: "Add PayPal if needed",
        text: "In the additional payment methods, you can add PayPal or other providers.",
      },
      {
        title: "Place a test order",
        text: "Before opening the store, place a test order to check that everything works.",
      },
    ],
    pitfalls: [
      "Using another provider instead of Shopify Payments without knowing that Shopify adds transaction fees (up to 2% on Basic).",
      "Skipping the payment methods your customers use most, like Apple Pay or Shop Pay.",
    ],
  },
  {
    slug: "connecter-html-pub-a-shopify",
    localSlug: "connect-html-pub-shopify",
    question: "How do you link HTML Pub or Leadpages to Shopify?",
    summary: "HTML Pub's Shopify connector, and buttons that send visitors to your store.",
    intro:
      "Your HTML Pub or Leadpages pages bring in visitors, Shopify takes the payments. There are two ways to link them: the Shopify connector, and buttons that lead to Shopify checkout.",
    steps: [
      {
        title: "Open « Connectors »",
        text: "In your HTML Pub workspace menu, click « Connectors » and type « Shopify » in the search. The Shopify card sends customer data from your HTML Pub checkout to Shopify.",
      },
      {
        title: "Enter your store address",
        text: "Click « Connect », enter your store's .myshopify.com address, then click « Connect Shopify ». Then approve the authorization in Shopify.",
      },
      {
        title: "Add a button to Shopify",
        text: "To sell a product from a page, add a button and, in its click action, choose an external link: paste the product address or a Shopify checkout link.",
      },
      {
        title: "Or paste a Shopify Buy Button",
        text: "In Shopify, add the « Buy Button » sales channel, create a button for a product, copy its HTML code and paste it into an HTML block on your page.",
      },
      {
        title: "Test the whole path",
        text: "Publish the page, click the button and go all the way to checkout to check that the right product opens.",
      },
    ],
    pitfalls: [
      "Thinking Leadpages counts Shopify sales: its stats stop at the button click.",
      "Entering your own domain name instead of the .myshopify.com address in the connector.",
    ],
  },
  {
    slug: "creer-une-page-de-vente-pour-un-produit-shopify",
    localSlug: "sales-page-shopify-product",
    question: "How do you create a sales page for a Shopify product?",
    summary: "A single-offer page, built with HTML Pub's AI, that sends visitors to your Shopify product.",
    intro:
      "A Shopify product page shows the product; a sales page tells its story. It's most useful when you run ads or make videos for one specific product.",
    steps: [
      {
        title: "Get the product ready in Shopify",
        text: "The product must be active, with its photos, price and inventory. Open it in your online store and copy the page address: that's where the button will lead.",
      },
      {
        title: "Describe the page to the AI",
        text: "In HTML Pub or Leadpages, create a page with AI and describe it precisely: the product, who it's for, 3 benefits, customer reviews, FAQs and a « Buy now » button.",
      },
      {
        title: "Link the button to the product",
        text: "In the editor, set the button action to « external link » and paste the Shopify product address. You can also paste a Shopify Buy Button into an HTML block.",
      },
      {
        title: "Add a reason to buy now",
        text: "A time-limited discount code, free shipping or a bonus. Create it in Shopify first so it works at checkout.",
      },
      {
        title: "Publish and test on your phone",
        text: "Publish the page, open it on your phone, click the button and go all the way to checkout. Then share the page address in your ads and videos.",
      },
    ],
    pitfalls: [
      "Several products and several buttons on the same page: the visitor hesitates and doesn't click.",
      "A button that leads to the store home page instead of the product.",
      "Made-up customer reviews: only use real ones.",
    ],
  },
  {
    slug: "rediger-les-politiques-shopify",
    localSlug: "store-policies-shopify",
    question: "How do you add your terms and policies on Shopify?",
    summary: "Returns, terms of service, shipping, contact details and privacy, shown at checkout.",
    intro:
      "Policies reassure buyers, and some are required by law or by payment providers. Shopify shows them at checkout; you still need to write them and put them in the menu.",
    steps: [
      {
        title: "Open « Policies »",
        text: "In the admin, click « Settings », then « Policies ». You'll find the return rules and the list of written policies.",
      },
      {
        title: "Set your return rules",
        text: "State the return window, who pays return shipping and how you refund. US law doesn't set one general return period for online purchases, so your policy is what counts: make it clear and stick to it (30 days is common).",
      },
      {
        title: "Fill in contact information",
        text: "« Contact information » is marked required. Enter the business name, address, email and phone: that's what lets customers reach you.",
      },
      {
        title: "Write the other policies",
        text: "Open each policy: return and refund, privacy, terms of service and shipping. If Shopify offers a template, start from it, then adapt each sentence to how you really work. Save.",
      },
      {
        title: "Add them to the footer",
        text: "Policies appear at checkout, but not necessarily in the store. In « Content », then « Menus », open the footer menu and add a link to each one.",
      },
    ],
    pitfalls: [
      "Keeping the template as is: it may promise things you don't do.",
      "Policies that don't match your real settings (return window, shipping costs).",
      "Forgetting the footer link: customers can't find your terms before buying.",
    ],
  },
  {
    slug: "creer-un-menu-shopify",
    localSlug: "edit-menu-shopify",
    question: "How do you edit your Shopify store menu?",
    summary: "Add, rename and move links, and create a dropdown menu.",
    intro:
      "The menu helps visitors find your products in one click. Shopify creates two to start: the main menu, at the top, and the footer menu.",
    steps: [
      {
        title: "Open « Menus »",
        text: "In the admin, click « Content », then « Menus ». Click the menu to edit, for example the main menu.",
      },
      {
        title: "Add a link",
        text: "Click « Add menu item ». Type the name shown, then choose the destination: a collection, a product, a page or a policy. Click « Save ».",
      },
      {
        title: "Move items or create a dropdown",
        text: "Drag an item to change the order. For a dropdown, drag an item under another one and slightly to the right: it becomes a submenu.",
      },
      {
        title: "Rename or delete",
        text: "Click an item to change its name or destination. The trash icon removes it from the menu, without deleting the page itself.",
      },
      {
        title: "Check on your phone",
        text: "Save, then open the store on your phone. The main menu often shows behind an icon there: keep names short and entries few.",
      },
    ],
    pitfalls: [
      "A main menu with ten or more links: visitors no longer know where to click.",
      "Practical pages (shipping, returns) in the top menu instead of the footer.",
    ],
  },
  {
    slug: "ouvrir-sa-boutique-shopify-au-public",
    localSlug: "remove-password-shopify-store",
    question: "How do you remove the password from your Shopify store?",
    summary: "Open your store to the public by turning off password protection, and what to check first.",
    intro:
      "A new Shopify store is password protected: nobody can buy. To open it, you first choose a plan, then turn off password protection.",
    steps: [
      {
        title: "Choose a plan",
        text: "The password can only be removed after you choose a plan. In « Settings », then « Plan », pick one. During the free trial, billing only starts when the trial ends.",
      },
      {
        title: "Open the store preferences",
        text: "In the left menu, click « Online Store », then « Preferences ». Scroll down to the store access section.",
      },
      {
        title: "Turn off password protection",
        text: "Turn off password protection, then save. The store is visible to everyone, with no password.",
      },
      {
        title: "Fill in the title and description for Google",
        text: "On the same page, write the home page title and meta description. That's what Google and social networks show when someone shares the store.",
      },
      {
        title: "Check from another device",
        text: "Open the store address on a phone where you're not signed in: the home page should appear directly, with no password prompt.",
      },
    ],
    pitfalls: [
      "Opening the store without a test order: the first customer is the one who finds the mistakes.",
      "Opening with empty policies or demo products still active.",
    ],
  },
  {
    slug: "creer-un-tunnel-de-vente-avec-leadpages-et-shopify-de-a-a-z",
    localSlug: "sales-funnel-leadpages-shopify-complete-guide",
    question: "How do you build a sales funnel with Leadpages and Shopify from start to finish?",
    summary: "A complete guide to building a sales funnel that captures leads with Leadpages and turns them into customers on Shopify, step by step.",
    intro:
      "A sales funnel is the path a visitor takes from discovering your offer to buying. Instead of sending everyone straight to your Shopify store, you first capture their email with a Leadpages landing page, win them over by email, then send them to Shopify to buy. This guide builds the whole funnel, from the first page to the first payment.",
    steps: [
      {
        title: "Understand how a sales funnel is built",
        text: "A sales funnel has four stages: grab attention, capture the lead, nurture the relationship by email, then offer the purchase. Each stage has the right tool.\n\nLeadpages handles the first two: the landing page that attracts and the form that captures the email. Your email marketing service handles the third. Shopify handles the last: payment and delivery. Together they form an automated system that sells while you sleep.",
      },
      {
        title: "Get your offer ready in Shopify",
        text: "Before building the funnel, your product must be ready in Shopify. Create it with photos, price, description and variants. Check that payment works by placing a test order.\n\nCopy the direct link to the product or collection: you'll need it for the buy button in your emails and on your sales page.",
      },
      {
        title: "Create an irresistible lead magnet",
        text: "The lead magnet is what you offer in exchange for the email. A PDF guide, a checklist, a discount code, early access. It must solve a concrete problem for your ideal customer and tie directly to your paid product.\n\nExample: you sell kitchen accessories on Shopify. Your lead magnet could be « 10 quick weeknight recipes » as a PDF. The visitor gives their email, gets the recipes, then your emails introduce your accessories.",
      },
      {
        title: "Build the opt-in landing page",
        text: "In Leadpages, create a new page from a template or with AI. The page has one goal: convince the visitor to leave their email in exchange for the lead magnet.\n\nThe headline announces the lead magnet's benefit. The form asks for email only. The button says exactly what the visitor gets: « Get the 10 recipes » rather than « Sign up ». Remove anything distracting: no menu, no links to other pages.",
      },
      {
        title: "Connect your email service",
        text: "In Leadpages, open your page's integrations and connect your email marketing service: Mailchimp, Kit (formerly ConvertKit), ActiveCampaign or another. Every new subscriber is added automatically to a specific list or tag.\n\nCreate a list or tag just for this funnel so your sales emails only reach people who asked for this particular lead magnet.",
      },
      {
        title: "Write the email sequence",
        text: "Prepare 4 to 6 automated emails sent over 7 to 10 days. The first delivers the lead magnet. The next ones bring value and gradually introduce your Shopify product.\n\nEmail 1: lead magnet delivery + a quick intro to you. Email 2: a tip related to the lead magnet's topic. Email 3: the story of a customer who solved their problem with your product. Email 4: the product pitch with the link to Shopify. Email 5: a reminder with a time-limited discount code.",
      },
      {
        title: "Create a discount code in Shopify",
        text: "In Shopify, go to Discounts and create a promo code just for your funnel subscribers. A code like WELCOME15 for 15% off the first order gives people a reason to buy now rather than later.\n\nLimit the code to one use per customer and set an end date to create real urgency.",
      },
      {
        title: "Build the sales page",
        text: "Create a second page in Leadpages: the sales page. It's where your emails send contacts who are ready to buy. It presents your product in detail with a button that leads to Shopify.\n\nThis page is longer than the opt-in page: testimonials, product details, guarantee, FAQ. The buy button uses the direct link to your Shopify product.",
      },
      {
        title: "Set up the thank-you page",
        text: "After signing up on the opt-in page, the visitor lands on a thank-you page. Use it to build engagement: remind them to check spam, invite them to follow you on social media, or give a preview of your Shopify product.\n\nIn Leadpages, set the post-form redirect to your thank-you page. You can also put your offer with the discount code right there for people in a hurry.",
      },
      {
        title: "Test the whole funnel",
        text: "Before sending traffic, go through every step yourself. Sign up with a test address, check that the welcome email arrives, click every link in the sequence, and place a test order on Shopify with the discount code.\n\nCheck on mobile too: most traffic will come from there. If an email doesn't display well or a button is too small, fix it before launching.",
      },
      {
        title: "Send traffic to the opt-in page",
        text: "The funnel is ready: now it needs visitors. The most common sources: a Facebook or Instagram ad targeting your audience, a social media post with the page link, a blog post that points to the lead magnet, or a partnership with a creator in your niche.\n\nStart with a small ad budget to confirm the funnel converts before spending more.",
      },
      {
        title: "Track results at each stage",
        text: "A sales funnel is measured stage by stage. Write down the landing page conversion rate, the email open rate, the click-through rate to Shopify and the final purchase rate.\n\nIn Leadpages, the dashboard gives the page's conversion rate. In your email service, you see opens and clicks. In Shopify, sales with the discount code show how many sales come from the funnel.",
      },
      {
        title: "Optimize with A/B tests",
        text: "Once the funnel is running and producing data, improve each stage. Test two headlines on the opt-in page. Test two email subject lines. Test two prices or two offers on the sales page.\n\nIn Leadpages, use A/B tests for the opt-in page and the sales page. Change one element at a time and wait for at least 100 conversions per variant before picking a winner.",
      },
    ],
    pitfalls: [
      "Sending traffic straight to Shopify without capturing the email first: visitors who leave are lost for good.",
      "Writing a 100% promotional email sequence: contacts unsubscribe before they buy.",
      "Not testing the funnel on mobile before launching ads.",
      "Using a discount code with no end date: there's no reason to buy now.",
      "Launching paid ads before checking that every stage of the funnel works.",
    ],
  },
];
