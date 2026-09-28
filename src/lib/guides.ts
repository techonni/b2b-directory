// Contenu du site : thèmes, guides « comment faire » Leadpages et HTML Pub, et outils.
// Le lien d'affiliation est défini une seule fois dans `affiliateLink`.

export type Theme = {
  slug: string;
  name: string;
  blurb: string;
};

export type Step = {
  title: string;
  text: string;
  // Capture d'écran facultative, placée dans /public/captures/.
  image?: { src: string; alt: string };
};

export type Source = {
  label: string;
  url: string;
};

export type Guide = {
  slug: string;
  question: string;
  summary: string;
  theme: string;
  publishedOn: string;
  updatedOn: string;
  intro: string;
  steps: Step[];
  pitfalls: string[];
  tools: { slug: string; why: string }[];
  sources: Source[];
  related: string[];
  popular?: boolean;
  // « express » (par défaut) : une question, l'essentiel en 30 secondes.
  // « complet » : un projet de A à Z, long et riche en captures.
  format?: GuideFormat;
  // Facultatif, pour Google : titre et description propres à la recherche (Search Console).
  // Sans eux, le titre est la question et la description est construite par `seoDescription`.
  seoTitle?: string;
  seoDescription?: string;
};

export type GuideFormat = "express" | "complet";

export type Tool = {
  slug: string;
  name: string;
  summary: string;
  website: string;
  affiliateUrl?: string;
  freePlan: boolean;
  themes: string[];
  goodFor: string;
  watchOut: string;
  // Icône officielle de la marque, servie via /logos/<slug> (voir vercel.json).
  // `direct: true` : l'image est chargée depuis le site de la marque (quand le proxy est refusé).
  logo?: { src: string; fit?: "cover" | "contain"; zoom?: number; direct?: boolean };
};

export const siteName = "Zunrel";
export const tagline = "Leadpages, HTML Pub et Shopify : comment faire, étape par étape.";

// Lien d'affiliation Leadpages (PartnerStack). Il mène à leadpages.com.
export const affiliateLink = "https://try.leadpages.com/94z9pcfn1hu5";
// Lien d'affiliation Shopify (Impact).
export const shopifyLink = "https://shopify.pxf.io/6kMJxr";
// Formulaire Mailchimp « embedded » (Audience → Signup forms → Embedded forms → attribut action du <form>).
// Vide = le bloc newsletter n'est pas affiché.
export const newsletterFormUrl =
  "https://gmail.us9.list-manage.com/subscribe/post?u=13aa96838d6074fef23022e3e&id=893c08eb5d&f_id=0073d9e1f0";
// Champ anti-robots du même formulaire Mailchimp (nom donné dans le code « embedded »).
export const newsletterHoneypot = "b_13aa96838d6074fef23022e3e_893c08eb5d";
// Tags Mailchimp par centre d'intérêt (Audience → Tags). Envoyés avec l'inscription pour
// pouvoir écrire plus tard seulement aux personnes intéressées par un outil.
export const newsletterTags = {
  shopify: "11404677",
  leadpages: "11404678",
  htmlpub: "11404679",
} as const;
export type NewsletterTag = keyof typeof newsletterTags;

const help = "https://support.leadpages.com/hc/en-us/articles/";
const pricing = { label: "Leadpages : offres et tarifs", url: "https://leadpages.com/pricing" };

export const themes: Theme[] = [
  { slug: "choisir", name: "Choisir son offre", blurb: "HTML Pub ou Leadpages, essai gratuit, changer d'offre." },
  { slug: "creer", name: "Créer une page", blurb: "Landing page, site ou blog, avec l'IA ou un modèle." },
  { slug: "publier", name: "Publier", blurb: "Nom de domaine, adresse de page, accès protégé." },
  { slug: "contacts", name: "Récolter des contacts", blurb: "Formulaires, export et connexion à vos outils." },
  { slug: "optimiser", name: "Optimiser", blurb: "Tests A/B, cartes de chaleur et Smart Traffic." },
  { slug: "ia", name: "IA et vidéo", blurb: "Publier depuis Claude, créer des pubs vidéo." },
  { slug: "boutique", name: "Vendre avec Shopify", blurb: "Ouvrir sa boutique, ajouter ses produits, se faire payer." },
];

export const guides: Guide[] = [
  // ——— Choisir son offre ———
  {
    slug: "choisir-entre-html-pub-et-leadpages",
    question: "Comment choisir entre HTML Pub et Leadpages ?",
    summary: "Publier simplement ou optimiser ses conversions : la bonne offre selon votre besoin.",
    theme: "choisir",
    publishedOn: "2026-09-27",
    updatedOn: "2026-09-27",
    popular: true,
    intro:
      "HTML Pub et Leadpages viennent de la même entreprise et utilisent le même moteur. HTML Pub sert à publier. Leadpages ajoute tout ce qui aide à convertir plus de visiteurs.",
    steps: [
      {
        title: "Demandez-vous ce que vous voulez faire",
        text: "Vous voulez seulement mettre en ligne une page, un petit site ou un blog avec votre nom de domaine ? HTML Pub suffit. Vous voulez tester deux versions d'une page pour savoir laquelle vend le mieux ? Il vous faut Leadpages.",
      },
      {
        title: "Regardez les trois offres HTML Pub",
        text: "Starter : 5 pages et 1 domaine. Pro : 25 pages, 1 blog et l'accès API, pour un créateur seul. Business : 50 pages, 2 domaines et 2 blogs, pour une petite équipe ou une agence. La publication depuis Claude est incluse dans toutes les offres.",
        image: { src: "/captures/choisir-offre.webp", alt: "Page des tarifs : les offres HTML Pub (Publish) et Leadpages (Optimize) côte à côte" },
      },
      {
        title: "Regardez les trois offres Leadpages",
        text: "Grow ajoute les tests A/B manuels, le remplacement dynamique du texte et l'enrichissement des contacts. Optimize ajoute Smart Traffic, les cartes de chaleur et la personnalisation automatique. Scale ajoute l'optimisation automatique complète et un support dédié.",
      },
      {
        title: "Commencez petit",
        text: "Vos pages et vos domaines vous suivent si vous changez d'offre. Vous pouvez donc démarrer avec HTML Pub et passer à Leadpages le jour où vous avez assez de visiteurs pour tester.",
      },
      {
        title: "Vérifiez le prix affiché le jour même",
        text: "Les prix changent selon les promotions et la facturation mensuelle ou annuelle (environ 20 % de moins à l'année). Consultez la page des tarifs avant de choisir.",
      },
    ],
    pitfalls: [
      "Prendre Leadpages Optimize dès le départ alors qu'on n'a pas encore de trafic : les tests et les cartes de chaleur ont besoin de visiteurs pour être utiles.",
      "Croire que HTML Pub fait des tests A/B : ce n'est pas le cas, les tests commencent avec Leadpages Grow.",
    ],
    tools: [
      { slug: "html-pub", why: "Pour publier des pages, un site ou un blog." },
      { slug: "leadpages", why: "Pour tester et améliorer vos conversions." },
    ],
    sources: [pricing],
    related: ["combien-coute-leadpages", "choisir-entre-leadpages-et-shopify", "essayer-leadpages-gratuitement", "changer-ou-annuler-son-offre-leadpages"],
  },
  {
    slug: "essayer-leadpages-gratuitement",
    question: "Comment essayer Leadpages gratuitement ?",
    summary: "L'essai de 7 jours, ce qu'il contient et comment ne pas être débité.",
    theme: "choisir",
    publishedOn: "2026-09-26",
    updatedOn: "2026-09-26",
    popular: true,
    intro:
      "Chaque offre HTML Pub et Leadpages s'essaie pendant 7 jours avec toutes ses fonctions. Une carte bancaire est demandée, mais rien n'est prélevé avant le 7e jour.",
    steps: [
      {
        title: "Choisissez l'offre à tester",
        text: "Sur la page des tarifs, choisissez la facturation mensuelle ou annuelle, puis l'offre qui vous intéresse. Testez celle que vous comptez vraiment garder : l'essai donne accès à toutes ses fonctions.",
      },
      {
        title: "Cliquez sur « Start 7-Day Free Trial »",
        text: "Créez votre compte avec votre adresse e-mail, puis indiquez une carte bancaire. Elle sert seulement à continuer après l'essai.",
        image: { src: "/captures/essai-gratuit.webp", alt: "Boutons « Start 7-Day Free Trial » sur chaque offre" },
      },
      {
        title: "Notez la date de fin",
        text: "Mettez un rappel dans votre agenda un ou deux jours avant la fin des 7 jours. C'est le moment de décider si vous gardez l'offre.",
      },
      {
        title: "Utilisez l'essai pour de vrai",
        text: "Créez une vraie page, connectez votre domaine et votre outil d'e-mails. Vous saurez vite si l'outil vous convient.",
      },
      {
        title: "Gardez ou annulez",
        text: "Si l'outil vous plaît, ne faites rien : l'abonnement démarre. Sinon, annulez avant le 7e jour depuis les réglages de votre compte. Vos pages restent enregistrées.",
      },
    ],
    pitfalls: [
      "Oublier la date de fin et être prélevé sans l'avoir voulu.",
      "Passer l'essai à regarder les modèles sans publier : on ne découvre pas les vraies limites de l'outil.",
    ],
    tools: [
      { slug: "leadpages", why: "Essai de 7 jours, toutes fonctions incluses." },
      { slug: "html-pub", why: "Essai de 7 jours aussi, pour l'offre la moins chère." },
    ],
    sources: [pricing],
    related: ["combien-coute-leadpages", "choisir-entre-html-pub-et-leadpages", "creer-une-landing-page-avec-l-ia"],
  },
  {
    slug: "changer-ou-annuler-son-offre-leadpages",
    question: "Comment changer d'offre ou annuler son abonnement Leadpages ?",
    summary: "Monter ou descendre d'offre, arrêter l'abonnement, et ce que deviennent vos pages.",
    theme: "choisir",
    publishedOn: "2026-09-26",
    updatedOn: "2026-09-26",
    intro:
      "Vous pouvez changer d'offre ou annuler à tout moment, sans pénalité. Seul le propriétaire du compte peut gérer la facturation.",
    steps: [
      {
        title: "Ouvrez la facturation",
        text: "En bas du menu de gauche, cliquez sur le nom de votre espace, puis sur « Billing ». Connectez-vous avec le compte propriétaire si le lien n'apparaît pas.",
      },
      {
        title: "Changez d'offre",
        text: "La page affiche toutes les offres, avec « Current Plan » sur la vôtre. Choisissez l'offre supérieure ou inférieure. Le changement prend effet au prochain cycle de facturation.",
        image: { src: "/captures/facturation.webp", alt: "Page Billing : offres, « Current Plan », « Manage Subscription » et « Cancel »" },
      },
      {
        title: "Ou annulez",
        text: "Toujours dans « Billing », utilisez « Manage Subscription » ou « Cancel ». Pendant un essai, la date de fin est indiquée sous votre offre : annulez avant pour ne pas être prélevé.",
      },
      {
        title: "Sachez ce que deviennent vos pages",
        text: "Si l'abonnement s'arrête, les pages publiées repassent en brouillon. Elles ne sont pas perdues : vous pourrez les republier en réactivant un abonnement.",
      },
    ],
    pitfalls: [
      "Descendre d'offre sans vérifier les limites : nombre de pages, de domaines ou de blogs inclus.",
      "Annuler alors que des publicités envoient encore du trafic vers vos pages.",
    ],
    tools: [{ slug: "leadpages", why: "Changement d'offre sans pénalité." }],
    sources: [
      { label: "HTML Pub : offres et facturation", url: `${help}43968293046413--HTMLPub-Plans-and-Billing` },
      pricing,
    ],
    related: ["choisir-entre-html-pub-et-leadpages"],
  },

  {
    slug: "choisir-entre-leadpages-et-shopify",
    question: "Leadpages ou Shopify : lequel choisir ?",
    summary: "Des pages qui convertissent, une boutique complète, ou les deux ensemble.",
    theme: "choisir",
    publishedOn: "2026-09-27",
    updatedOn: "2026-09-27",
    popular: true,
    intro:
      "Leadpages (et HTML Pub) sert à créer des pages qui transforment les visiteurs en contacts ou en clients. Shopify sert à gérer une boutique : produits, stock, paiements et livraisons.",
    steps: [
      {
        title: "Vous vendez plusieurs produits ? Prenez Shopify",
        text: "Catalogue, stock, variantes, frais de livraison, taxes, commandes et retours : Shopify gère tout cela. Leadpages n'est pas fait pour tenir une boutique.",
        image: { src: "/captures/shopify-offres.webp", alt: "Les forfaits Shopify Basic, Grow, Advanced et Plus" },
      },
      {
        title: "Vous voulez récolter des contacts ? Prenez Leadpages ou HTML Pub",
        text: "Page d'inscription, page d'attente avant un lancement, webinaire, guide gratuit : une landing page avec un formulaire suffit, sans boutique.",
        image: { src: "/captures/choisir-offre.webp", alt: "Les offres HTML Pub et Leadpages côte à côte" },
      },
      {
        title: "Vous avez un seul produit ou un service ? Commencez simple",
        text: "Une page HTML Pub avec un bouton de paiement peut suffire pour un produit unique, une formation ou une prestation. Passez à Shopify quand le catalogue grandit.",
      },
      {
        title: "Vous faites de la publicité ? Utilisez les deux",
        text: "Envoyez vos visiteurs vers une landing page Leadpages centrée sur une offre, puis vers le produit dans votre boutique Shopify. Avec Leadpages, vous pouvez tester deux versions de la page.",
      },
      {
        title: "Essayez avant de payer",
        text: "Leadpages et HTML Pub s'essaient 7 jours, Shopify propose un essai puis une offre de lancement. Vérifiez les conditions du jour sur les pages de tarifs.",
      },
    ],
    pitfalls: [
      "Construire une boutique entière dans Leadpages : la gestion des commandes et du stock devient vite impossible.",
      "Envoyer une publicité vers la page d'accueil de la boutique au lieu d'une page centrée sur une seule offre.",
    ],
    tools: [
      { slug: "leadpages", why: "Landing pages, tests A/B et optimisation." },
      { slug: "shopify", why: "Boutique en ligne complète avec paiements intégrés." },
      { slug: "html-pub", why: "La version simple pour publier vite." },
    ],
    sources: [pricing, { label: "Shopify : tarifs", url: "https://www.shopify.com/fr/tarifs" }],
    related: ["choisir-entre-html-pub-et-leadpages", "attirer-des-clients-avec-une-landing-page", "creer-sa-boutique-shopify"],
  },

  {
    slug: "combien-coute-leadpages",
    question: "Combien coûte Leadpages (et HTML Pub) en 2026 ?",
    summary: "Les prix des offres HTML Pub et Leadpages, mensuels et annuels, et celle à choisir selon votre besoin.",
    theme: "choisir",
    publishedOn: "2026-09-28",
    updatedOn: "2026-09-28",
    intro:
      "HTML Pub et Leadpages sont vendus sur la même page de tarifs, en dollars. Voici les prix relevés sur cette page le 28 septembre 2026, et comment payer le moins cher possible.",
    steps: [
      {
        title: "Les offres HTML Pub, pour publier",
        text: "Au 28 septembre 2026, en paiement annuel : Starter coûte 5,58 $ par mois (7 $ en paiement mensuel), Pro 16 $ par mois (20 $ en mensuel) et Business 26,42 $ par mois (33 $ en mensuel).\n\nHTML Pub sert à publier des landing pages, des sites et des blogs sur votre domaine, avec l'assistant IA. Il n'a pas de tests A/B.",
        image: { src: "/captures/choisir-offre.webp", alt: "Page des tarifs : HTML Pub Pro à 16 $/mois et Business à 26,42 $/mois, Leadpages Grow à 53,58 $/mois et Optimize à 108 $/mois, en paiement annuel" },
      },
      {
        title: "Les offres Leadpages, pour convertir plus",
        text: "Au 28 septembre 2026, en paiement annuel : Grow coûte 53,58 $ par mois (67 $ en mensuel), Optimize 108 $ par mois (135 $ en mensuel) et Scale, la plus complète, 216,83 $ par mois (271 $ en mensuel).\n\nGrow ajoute les tests A/B. Optimize ajoute Smart Traffic et les cartes de chaleur. Les prix changent parfois : lisez toujours la page des tarifs le jour même.",
      },
      {
        title: "Payez à l'année pour économiser 20 %",
        text: "Le bouton « Monthly / Annual » en haut de la page des tarifs change tous les prix. Le paiement annuel revient environ 20 % moins cher, mais vous payez l'année d'un coup. Commencez en mensuel si vous n'êtes pas sûr de garder l'outil.",
      },
      {
        title: "Essayez 7 jours avant de payer",
        text: "Chaque offre s'essaie gratuitement pendant 7 jours, avec toutes ses fonctions. Une carte est demandée, mais rien n'est prélevé avant la fin de l'essai. Notez la date de fin dans votre agenda.",
        image: { src: "/captures/essai-gratuit.webp", alt: "Boutons « Start 7-Day Free Trial » sur chaque offre" },
      },
      {
        title: "Choisissez selon votre trafic",
        text: "Vous démarrez, sans beaucoup de visiteurs ? HTML Pub Pro suffit. Vous faites déjà de la publicité et voulez comparer deux versions d'une page ? Leadpages Grow. Vous avez beaucoup de trafic et voulez que l'outil optimise tout seul ? Optimize.",
      },
    ],
    pitfalls: [
      "Comparer un prix annuel avec un prix mensuel : vérifiez la position du bouton « Monthly / Annual ».",
      "Payer Optimize sans avoir assez de visiteurs pour que les tests et les cartes de chaleur servent à quelque chose.",
      "Oublier que les prix sont en dollars : votre banque ajoute parfois des frais de change.",
    ],
    tools: [
      { slug: "html-pub", why: "L'offre la moins chère, pour publier." },
      { slug: "leadpages", why: "Tests A/B, Smart Traffic et cartes de chaleur." },
    ],
    sources: [pricing],
    related: ["choisir-entre-html-pub-et-leadpages", "essayer-leadpages-gratuitement", "changer-ou-annuler-son-offre-leadpages"],
  },

  // ——— Créer une page ———
  {
    slug: "creer-sa-landing-page-leadpages-de-a-a-z",
    question: "Comment créer sa première landing page Leadpages de A à Z ?",
    summary: "Le guide complet : de l'essai gratuit à une page en ligne qui récolte des contacts, avec chaque écran.",
    theme: "creer",
    format: "complet",
    publishedOn: "2026-09-27",
    updatedOn: "2026-09-27",
    popular: true,
    intro:
      "Ce guide suit l'ordre réel d'une première landing page : préparer l'offre, créer la page avec l'IA, la relire, la publier sur votre domaine, puis récolter et suivre les contacts. Comptez une demi-journée, pendant les 7 jours d'essai gratuit.",
    steps: [
      {
        title: "Préparez votre offre avant de commencer",
        text: "Une landing page n'a qu'un seul objectif. Décidez-le avant d'ouvrir l'outil : récolter des e-mails, vendre un produit, prendre des rendez-vous.\n\nÉcrivez sur une feuille : à qui s'adresse la page, le problème que vous réglez, ce que le visiteur reçoit, et l'action unique que vous attendez de lui (par exemple « Recevoir le guide gratuit »).\n\nRassemblez aussi votre logo, 2 ou 3 photos, vos couleurs et, si vous en avez, quelques avis de clients réels. Vous gagnerez du temps et des crédits IA.\n\nPrévoyez enfin le plan de la page. Celui qui marche le mieux pour une première page tient en six blocs, dans cet ordre : un titre qui dit le résultat obtenu, une phrase qui précise pour qui c'est, trois avantages concrets, une preuve (avis, chiffre réel, logo d'un client), le formulaire ou le bouton, puis deux ou trois questions fréquentes pour lever les derniers doutes.\n\nPour le titre, partez du résultat que le visiteur veut, pas de votre produit. « Recevez 10 idées de repas prêtes en 20 minutes » parle plus que « Découvrez mon guide de cuisine ». Écrivez trois versions et gardez la plus claire : vous pourrez tester les autres plus tard.",
      },
      {
        title: "Choisissez l'offre et démarrez l'essai",
        text: "Sur la page des tarifs, deux familles d'offres existent. HTML Pub sert à publier des pages, des sites et des blogs. Leadpages ajoute les outils pour améliorer les résultats : tests A/B à partir de l'offre Grow, puis Smart Traffic et cartes de chaleur à partir d'Optimize.\n\nPour une première page, HTML Pub suffit souvent. Si vous voulez tester deux versions de votre page, prenez Leadpages Grow.\n\nCliquez sur « Start 7-Day Free Trial ». Une carte bancaire est demandée, mais rien n'est prélevé avant le 7e jour. Notez la date de fin dans votre agenda. Les prix changent souvent : lisez ceux du jour sur la page officielle.",
        image: { src: "/captures/essai-gratuit.webp", alt: "Boutons « Start 7-Day Free Trial » sur chaque offre" },
      },
      {
        title: "Ouvrez l'écran de création",
        text: "Dans le menu de gauche, cliquez sur « Create ». L'assistant IA, Piper, vous demande « What are you making? » : choisissez « Landing page ».\n\nVous préférez partir d'une base existante ? Cliquez sur « Templates » pour choisir un modèle, puis sur « Use ». La suite du guide reste la même.",
        image: { src: "/captures/creer-page-ia.webp", alt: "Écran Create : Piper demande « What are you making? »" },
      },
      {
        title: "Décrivez votre page en détail",
        text: "Dans le champ du bas, reprenez vos notes de l'étape 1 : le public, l'offre, le ton, les couleurs et les sections voulues. Par exemple : un titre, trois avantages, un avis client, une question fréquente et un formulaire avec un seul champ e-mail.\n\nPlus la description est précise, moins vous dépenserez de crédits en corrections. Cliquez sur « Send ».\n\nExemple de description complète : « Landing page en français pour un guide PDF gratuit destiné aux coachs sportifs indépendants qui veulent trouver leurs premiers clients en ligne. Ton simple et motivant. Couleurs : bleu nuit et orange. Sections : titre avec le résultat promis, trois avantages, un court texte sur l'auteur, deux questions fréquentes, un formulaire avec un seul champ e-mail et une case de consentement non cochée. Bouton : Recevoir le guide. »\n\nVous pouvez aussi coller l'adresse d'une page existante ou du code HTML : Piper s'en sert comme point de départ.",
        image: { src: "/captures/ia-description.webp", alt: "Description d'une landing page tapée dans la barre de saisie" },
      },
      {
        title: "Choisissez les images et le style",
        text: "Piper demande quelles images utiliser : les vôtres, des images générées par IA (qui coûtent plus de crédits) ou aucune pour l'instant. Le coût estimé est affiché en haut à droite.\n\nIl propose ensuite trois directions visuelles. Cliquez sur celle qui vous plaît, puis sur « Build it ». La page se construit en une minute environ.",
        image: { src: "/captures/ia-style.webp", alt: "Trois directions de style proposées par Piper" },
      },
      {
        title: "Corrigez la page en discutant",
        text: "Cliquez sur « Open in editor ». Dans le champ « Ask Piper to edit this page… », demandez un seul changement à la fois : « Remplace le titre par… », « Mets le bouton en vert », « Supprime la section tarifs ».\n\nPiper liste ce qu'il a modifié et les crédits utilisés. Relisez chaque texte vous-même : l'IA peut inventer des chiffres ou des avis. Remplacez-les par les vrais, ou supprimez-les.\n\nQuelques demandes utiles pour une première page : « Raccourcis tous les paragraphes à deux phrases maximum », « Ajoute le bouton aussi en haut de la page », « Mets mon logo en haut à gauche » (après l'avoir envoyé dans « Assets »), « Utilise les couleurs de mon Brand Kit ».\n\nPour un petit changement de texte, cliquer directement dans la page est souvent plus rapide que de passer par l'IA. Gardez Piper pour les changements de mise en page ou de style.",
        image: { src: "/captures/ia-modification.webp", alt: "Éditeur : Piper applique une modification demandée" },
      },
      {
        title: "Vérifiez le formulaire et le consentement",
        text: "Le formulaire est le cœur de la page. Demandez le moins d'informations possible : souvent, l'e-mail seul suffit.\n\nSi vous comptez envoyer des e-mails commerciaux, ajoutez une case à cocher non cochée d'avance et une phrase qui explique à quoi servira l'adresse et comment se désinscrire.\n\nVérifiez enfin le texte du bouton : il doit dire ce que la personne obtient (« Recevoir le guide »), pas seulement « Envoyer ».\n\nPensez à ce qui se passe après l'envoi : un message de remerciement qui dit quoi faire ensuite (« Vérifiez votre boîte mail, le guide arrive dans 2 minutes »), ou une page de remerciement dédiée. C'est le bon endroit pour proposer l'étape suivante, par exemple un lien vers votre boutique ou votre prise de rendez-vous.\n\nSi vous promettez un fichier (guide PDF, liste, modèle), préparez-le maintenant et envoyez-le dans l'e-mail de bienvenue de votre outil e-mail (étape 11).",
      },
      {
        title: "Contrôlez l'affichage sur mobile",
        text: "La plupart des visiteurs arrivent sur téléphone. En bas à droite de l'éditeur, cliquez sur l'icône mobile. Vérifiez que le titre se lit sans zoomer, que le bouton se voit sans descendre trop bas et que le formulaire est facile à remplir avec le pouce.\n\nRegardez aussi la vitesse : des images trop lourdes ralentissent la page sur un réseau mobile, et chaque seconde d'attente fait partir des visiteurs. Utilisez des photos de taille raisonnable et évitez les vidéos en lecture automatique en haut de page.\n\nEnfin, relisez tout à voix haute une dernière fois. Les fautes et les phrases trop longues se repèrent beaucoup mieux ainsi.",
        image: { src: "/captures/apercu-mobile.webp", alt: "Aperçu mobile de la page dans l'éditeur" },
      },
      {
        title: "Réglez l'adresse et le référencement",
        text: "Dans l'éditeur, le menu « … » en haut à droite affiche l'adresse de la page (le slug). Choisissez-la courte et lisible, par exemple guide-gratuit.\n\nDans « SEO & Social », indiquez le titre et la description qui s'affichent sur Google et lors d'un partage, et l'icône de l'onglet. Si la page sert seulement à une publicité, vous pouvez demander à Google de ne pas l'indexer.",
        image: { src: "/captures/seo-social.webp", alt: "Fenêtre SEO & Social" },
      },
      {
        title: "Publiez sur votre propre domaine",
        text: "Au moment de publier, la question « Where should this live? » s'affiche. Vous pouvez garder l'adresse gratuite fournie, ou relier votre domaine pour inspirer plus confiance.\n\nPour relier un domaine, ouvrez « Domains » dans le menu de gauche, puis « Connect Domain ». Un sous-domaine comme offre.monsite.com est le plus simple. La configuration automatique règle le domaine pour vous. Le HTTPS est offert et peut prendre jusqu'à 48 heures.\n\nSi la configuration automatique n'est pas possible chez votre hébergeur de domaine, ajoutez à la main les enregistrements affichés par Leadpages : un CNAME pour le sous-domaine et un TXT pour la sécurité. Copiez les valeurs exactes depuis votre compte.\n\nAprès chaque modification, cliquez sur « Update » pour mettre la page en ligne.",
        image: { src: "/captures/ia-publier.webp", alt: "Choix de l'adresse de publication : gratuite ou votre domaine" },
      },
      {
        title: "Envoyez les contacts vers votre outil e-mail",
        text: "Dans le menu de gauche, ouvrez « Connectors ». Cherchez votre outil (Mailchimp, Brevo, MailerLite, HubSpot…) et cliquez sur « Connect ».\n\nDans l'onglet « Automations », cliquez sur « Create automation », choisissez le déclencheur « Form submitted », puis l'outil qui recevra les contacts. Chaque nouvel inscrit y arrivera tout seul. Préparez-y un e-mail de bienvenue.",
        image: { src: "/captures/integrations.webp", alt: "Page Connectors avec les applications à connecter" },
      },
      {
        title: "Faites un test complet vous-même",
        text: "Ouvrez la page publiée sur votre téléphone, remplissez le formulaire avec votre propre adresse, puis vérifiez trois choses.\n\nLa réponse apparaît dans « Submissions », d'où vous pouvez aussi l'exporter en CSV. Le contact arrive dans votre outil e-mail. L'e-mail de bienvenue part bien. Si un point bloque, « View execution logs » dans « Connectors » indique la raison.",
        image: { src: "/captures/formulaires.webp", alt: "Page Submissions avec les réponses du formulaire" },
      },
      {
        title: "Faites venir vos premiers visiteurs",
        text: "Une page en ligne ne reçoit pas de visites toute seule. Commencez par les personnes qui vous connaissent déjà : envoyez le lien à vos contacts, mettez-le dans votre signature e-mail et dans la bio de vos réseaux sociaux.\n\nPubliez ensuite régulièrement là où votre public cherche des idées. Sur Pinterest, une épingle verticale avec le résultat promis et le lien de la page peut apporter des visites pendant des mois. Sur Instagram, LinkedIn ou Facebook, un court conseil utile suivi du lien fonctionne mieux qu'une simple publicité pour votre page.\n\nPour savoir quel canal marche, ajoutez un repère à la fin du lien selon l'endroit où vous le partagez, par exemple ?utm_source=pinterest ou ?utm_source=instagram. L'onglet « Acquisition » de l'étape suivante vous montrera alors d'où viennent les inscrits.\n\nSi vous passez à la publicité payante, commencez petit, avec un budget par jour que vous pouvez perdre sans regret, et n'augmentez que lorsque le taux de conversion de la page est bon.",
      },
      {
        title: "Suivez les résultats",
        text: "Ouvrez « Analytics ». Les chiffres clés sont en haut : « Sessions » (les visites), « Form submissions » (les formulaires envoyés), « Conversions » et « Conv. rate » (le taux de conversion).\n\nChoisissez la période (7, 14 ou 30 jours) et une page précise avec « All Pages ». L'onglet « Acquisition » montre d'où viennent vos visiteurs. Attendez au moins une centaine de visites avant de tirer des conclusions.\n\nSi beaucoup de personnes viennent mais peu s'inscrivent, le problème est souvent le titre ou l'offre : la promesse n'est pas assez claire ou pas assez utile. Si presque personne ne vient, c'est la diffusion qu'il faut travailler : partagez le lien dans vos e-mails, sur vos réseaux, dans votre bio Instagram ou sur une épingle Pinterest.\n\nPour suivre les publicités, « Scripts & Pixels », dans le menu « … » de l'éditeur, permet d'ajouter le pixel de Meta ou de Google Ads.",
        image: { src: "/captures/statistiques.webp", alt: "Page Analytics : conversions, taux de conversion, formulaires envoyés et sessions" },
      },
      {
        title: "Améliorez la page avec un test A/B",
        text: "Avec Leadpages Grow ou plus, dupliquez la page pour créer une version B et changez une seule chose : le titre, le bouton ou l'offre.\n\nChoisissez votre objectif (formulaire envoyé, clic, achat), répartissez le trafic à 50/50 et attendez le résultat « gagnant clair ». Gardez ensuite la meilleure version et lancez un nouveau test. Sur l'offre Optimize, Smart Traffic peut envoyer chaque visiteur vers la version qui a le plus de chances de lui plaire.\n\nPar quoi commencer ? Le titre, presque toujours : c'est ce que tout le monde lit. Ensuite, le texte du bouton, puis l'offre elle-même (un guide ou une liste, une réduction ou un cadeau). Notez chaque test et son résultat dans un simple tableau : au bout de quelques mois, vous saurez précisément ce qui fait réagir votre public.\n\nVous êtes sur HTML Pub ? Vous pouvez passer à Leadpages Grow depuis les réglages de votre compte quand vous serez prêt : vos pages et vos domaines sont conservés.",
        image: { src: "/captures/test-ab.webp", alt: "Création d'une variante B et bascule entre A et B" },
      },
    ],
    pitfalls: [
      "Mettre plusieurs objectifs sur la même page (s'inscrire, acheter, suivre sur Instagram) : le visiteur hésite et ne fait rien.",
      "Laisser en ligne des chiffres, avis ou témoignages inventés par l'IA.",
      "Publier sans tester le formulaire soi-même : on découvre trop tard que les contacts n'arrivaient pas.",
      "Oublier la fin de l'essai de 7 jours et être prélevé sans l'avoir décidé.",
    ],
    tools: [
      { slug: "html-pub", why: "Assistant IA, formulaires, domaine et connecteurs pour publier sa première page." },
      { slug: "leadpages", why: "Ajoute les tests A/B (dès Grow), Smart Traffic et les cartes de chaleur (dès Optimize)." },
    ],
    sources: [
      pricing,
      { label: "HTML Pub : utiliser le créateur de pages IA", url: `${help}43967499549965--HTMLPub-Using-the-AI-Page-Builder` },
      { label: "Connecter votre domaine (nouveau Leadpages)", url: `${help}44792783022989--New-Leadpages-Connect-your-Domain` },
      { label: "HTML Pub : connecter des intégrations", url: `${help}43967898431757--HTMLPub-Connecting-Integrations` },
      { label: "CNIL : la prospection commerciale par courrier électronique", url: "https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique" },
    ],
    related: ["creer-une-landing-page-avec-l-ia", "recolter-des-e-mails-avant-un-lancement", "faire-un-test-ab-leadpages", "partir-d-un-modele-leadpages", "modifier-l-adresse-d-une-page-leadpages"],
  },
  {
    slug: "creer-une-landing-page-avec-l-ia",
    question: "Comment créer une landing page avec l'IA de Leadpages ?",
    summary: "Décrire sa page, laisser l'IA la construire, puis l'améliorer en discutant.",
    theme: "creer",
    publishedOn: "2026-09-26",
    updatedOn: "2026-09-26",
    popular: true,
    intro:
      "L'assistant de création (Piper, le « Page Agent ») construit une page à partir d'une simple description. Vous la corrigez ensuite en lui parlant, comme dans une discussion.",
    steps: [
      {
        title: "Ouvrez l'écran de création",
        text: "Dans le menu de gauche, cliquez sur « Create ». Piper, l'assistant, vous demande « What are you making? » : choisissez « Landing page ».",
        image: { src: "/captures/creer-page-ia.webp", alt: "Écran Create : Piper demande « What are you making? »" },
      },
      {
        title: "Décrivez votre page précisément",
        text: "Dans le champ du bas, indiquez à qui s'adresse la page, ce que vous proposez, le ton, les couleurs et les sections voulues (titre, avantages, avis, formulaire). Plus c'est précis, meilleur est le résultat. Cliquez sur « Send ».",
        image: { src: "/captures/ia-description.webp", alt: "Description d'une landing page tapée dans la barre de saisie" },
      },
      {
        title: "Choisissez les images",
        text: "Piper demande quoi utiliser pour les images : les vôtres, des images générées par IA (plus de crédits) ou aucune pour l'instant. Le coût estimé en crédits est affiché en haut à droite. « Skip images for now » est le choix le plus économique.",
        image: { src: "/captures/ia-images.webp", alt: "Choix des images avec l'estimation en crédits" },
      },
      {
        title: "Choisissez un style",
        text: "Trois directions visuelles sont proposées. Cliquez sur celle qui vous plaît, réglez « How far should I push it? » si vous voulez, puis cliquez sur « Build it ».",
        image: { src: "/captures/ia-style.webp", alt: "Trois directions de style proposées par Piper" },
      },
      {
        title: "Laissez Piper construire",
        text: "La construction se fait en six étapes, en une minute environ : lecture de la demande, sections, textes, images, assemblage et vérification.",
        image: { src: "/captures/ia-construction.webp", alt: "Construction de la page, étape par étape" },
      },
      {
        title: "Corrigez en discutant",
        text: "Cliquez sur « Open in editor ». Dans le champ « Ask Piper to edit this page… », demandez un changement à la fois. Piper liste ce qu'il a modifié et le nombre de crédits utilisés.",
        image: { src: "/captures/ia-modification.webp", alt: "Éditeur : Piper applique une modification demandée" },
      },
      {
        title: "Vérifiez sur mobile, puis publiez",
        text: "Les icônes en bas à droite de l'éditeur montrent la page sur ordinateur, tablette et mobile. Pour la mettre en ligne, gardez l'adresse gratuite en pubhtml.com ou reliez votre domaine (« Where should this live? »). Ensuite, « Update » publie vos changements.",
        image: { src: "/captures/ia-publier.webp", alt: "Choix de l'adresse de publication : gratuite ou votre domaine" },
      },
    ],
    pitfalls: [
      "Écrire une description trop vague (« une belle page ») : on dépense des crédits en corrections.",
      "Oublier le formulaire ou le bouton d'action : une landing page sans objectif ne sert à rien.",
    ],
    tools: [
      { slug: "html-pub", why: "L'assistant IA est inclus, avec des crédits chaque mois." },
      { slug: "leadpages", why: "Même assistant, avec plus de crédits." },
    ],
    sources: [{ label: "HTML Pub : utiliser le créateur de pages IA", url: `${help}43967499549965--HTMLPub-Using-the-AI-Page-Builder` }],
    related: ["creer-sa-landing-page-leadpages-de-a-a-z", "partir-d-un-modele-leadpages", "recuperer-les-formulaires-html-pub", "publier-une-page-depuis-claude"],
  },
  {
    slug: "partir-d-un-modele-leadpages",
    question: "Comment partir d'un modèle dans Leadpages ?",
    summary: "Choisir un modèle prêt à l'emploi et l'adapter à votre activité.",
    theme: "creer",
    publishedOn: "2026-09-26",
    updatedOn: "2026-09-26",
    intro:
      "Un modèle vous évite de partir d'une page blanche. Vous gardez la structure qui fonctionne et vous remplacez les textes, les images et les couleurs.",
    steps: [
      {
        title: "Ouvrez les modèles",
        text: "Sur l'écran « Create », cliquez sur « Templates » au-dessus de la barre de saisie, ou sur « Browse all templates » pour tout voir.",
        image: { src: "/captures/modele.webp", alt: "Panneau Templates avec « Preview », « Use » et « Browse all templates »" },
      },
      {
        title: "Prévisualisez avant de choisir",
        text: "Cliquez sur « Preview » pour voir le modèle en grand. Choisissez celui dont la structure ressemble à ce que vous voulez vendre, pas seulement celui dont les couleurs vous plaisent.",
      },
      {
        title: "Utilisez-le",
        text: "Cliquez sur « Use ». Une copie du modèle s'ouvre, vous pouvez la modifier sans rien casser.",
      },
      {
        title: "Adaptez le contenu",
        text: "Demandez à l'assistant de remplacer les textes par les vôtres, ou modifiez-les directement. Mettez votre logo, vos photos et vos couleurs.",
      },
      {
        title: "Relisez sur mobile, puis publiez",
        text: "La plupart des visiteurs arrivent sur téléphone. Dans l'éditeur, cliquez sur l'icône mobile en bas à droite pour vérifier, puis publiez.",
        image: { src: "/captures/apercu-mobile.webp", alt: "Aperçu mobile de la page dans l'éditeur" },
      },
    ],
    pitfalls: [
      "Laisser des textes d'exemple du modèle en ligne.",
      "Garder toutes les sections du modèle alors que certaines ne servent pas votre offre.",
    ],
    tools: [{ slug: "html-pub", why: "Modèles de landing pages, portfolios et pages « lien en bio »." }],
    sources: [{ label: "HTML Pub : créer et modifier des pages", url: `${help}43966022984461--HTMLPub-Creating-and-Editing-Pages` }],
    related: ["creer-sa-landing-page-leadpages-de-a-a-z", "creer-une-landing-page-avec-l-ia", "creer-une-page-lien-en-bio-avec-html-pub", "creer-un-site-web-avec-html-pub"],
  },
  {
    slug: "creer-une-page-lien-en-bio-avec-html-pub",
    question: "Comment créer une page « lien en bio » avec HTML Pub ?",
    summary: "Une seule adresse dans votre bio Instagram ou TikTok, qui mène à tous vos liens, sur une page à vous.",
    theme: "creer",
    publishedOn: "2026-09-28",
    updatedOn: "2026-09-28",
    intro:
      "Instagram et TikTok n'acceptent qu'un lien dans la bio. Une page « lien en bio » les regroupe tous : boutique, vidéo, inscription, contact. Avec HTML Pub, elle est à votre nom, à vos couleurs, et peut recueillir des e-mails.",
    steps: [
      {
        title: "Partez d'un modèle « lien en bio »",
        text: "Sur l'écran « Create », cliquez sur « Templates », puis « Browse all templates ». Choisissez un modèle de page « lien en bio », regardez-le avec « Preview », puis cliquez sur « Use ».",
        image: { src: "/captures/modele.webp", alt: "Panneau Templates avec « Preview », « Use » et « Browse all templates »" },
      },
      {
        title: "Mettez votre photo et une phrase",
        text: "En haut : votre photo ou votre logo, votre nom, et une phrase qui dit ce que vous proposez. Vous pouvez demander à l'assistant de le faire : « Remplace la photo par mon logo et écris : bijoux faits main à Lyon ».",
      },
      {
        title: "Ajoutez 3 à 5 boutons",
        text: "Un bouton par lien important : votre boutique, votre dernière vidéo, votre page d'inscription, votre contact. Mettez le plus important en premier, avec un texte d'action : « Voir la boutique », pas « Lien 1 ».",
      },
      {
        title: "Ajoutez un formulaire d'inscription",
        text: "Demandez à l'assistant d'ajouter un champ e-mail sous les boutons. Les réponses sont enregistrées dans HTML Pub : vos abonnés deviennent des contacts que vous pouvez retrouver.",
      },
      {
        title: "Vérifiez sur téléphone et publiez",
        text: "Presque tous les visiteurs viennent de leur téléphone. Cliquez sur l'icône mobile en bas à droite de l'éditeur, vérifiez que chaque bouton est facile à toucher, puis publiez.",
        image: { src: "/captures/apercu-mobile.webp", alt: "Aperçu mobile de la page dans l'éditeur" },
      },
      {
        title: "Collez l'adresse dans votre bio",
        text: "Choisissez une adresse courte (par exemple votre nom), copiez-la, puis collez-la dans le champ « Site web » ou « Lien » de votre profil Instagram ou TikTok. Ouvrez-la depuis l'application pour vérifier.",
      },
    ],
    pitfalls: [
      "Mettre dix boutons : le visiteur ne sait plus où cliquer. Gardez l'essentiel.",
      "Oublier de mettre la page à jour : un bouton vers une promotion terminée fait perdre confiance.",
      "Une adresse longue et compliquée : elle est coupée ou mal recopiée.",
    ],
    tools: [{ slug: "html-pub", why: "Modèles « lien en bio », formulaires et domaine personnalisé." }],
    sources: [{ label: "HTML Pub : créer et modifier des pages", url: `${help}43966022984461--HTMLPub-Creating-and-Editing-Pages` }],
    related: ["partir-d-un-modele-leadpages", "recuperer-les-formulaires-html-pub", "modifier-l-adresse-d-une-page-leadpages"],
  },
  {
    slug: "publier-du-html-sur-html-pub",
    question: "Comment publier une page HTML déjà prête sur HTML Pub ?",
    summary: "Coller du code ou déposer un fichier .html, sans dépenser de crédits IA.",
    theme: "creer",
    publishedOn: "2026-09-26",
    updatedOn: "2026-09-26",
    intro:
      "Vous avez déjà une page en HTML, faite par vous ou par une IA ? HTML Pub la met en ligne en quelques secondes. Cette méthode ne consomme pas de crédits.",
    steps: [
      {
        title: "Ouvrez l'écran de création",
        text: "Cliquez sur « Create » dans le menu de gauche, ou sur « Create Page » depuis la liste de vos pages.",
      },
      {
        title: "Ajoutez votre code",
        text: "Collez votre HTML dans le champ « Describe the page you want, or paste a URL or HTML… », ou utilisez l'icône d'envoi de fichier de la barre pour déposer un fichier .html.",
        image: { src: "/captures/publier-html.webp", alt: "Barre de saisie où coller du HTML, avec l'icône d'envoi de fichier" },
      },
      {
        title: "Vérifiez l'aperçu",
        text: "Assurez-vous que les images s'affichent. Si elles sont sur votre ordinateur, ajoutez-les d'abord dans les fichiers (« Assets ») de la page.",
      },
      {
        title: "Publiez",
        text: "Envoyez, vérifiez, puis publiez. La page est en ligne sur l'adresse gratuite de votre espace, ou sur votre domaine si vous l'avez connecté.",
      },
    ],
    pitfalls: [
      "Coller une page qui appelle des images ou des fichiers restés sur votre ordinateur.",
      "Envoyer un formulaire vers un autre service : HTML Pub ne récupère alors pas les réponses.",
    ],
    tools: [{ slug: "html-pub", why: "Publication de HTML sans crédits IA." }],
    sources: [{ label: "HTML Pub : bien démarrer", url: `${help}43965947894413--HTMLPub-Getting-Started-with-HTMLPub` }],
    related: ["connecter-son-nom-de-domaine-leadpages", "recuperer-les-formulaires-html-pub", "creer-un-blog-avec-html-pub", "publier-une-page-depuis-claude"],
  },
  {
    slug: "creer-un-site-web-avec-html-pub",
    question: "Comment créer un site de plusieurs pages avec HTML Pub ?",
    summary: "Une page d'accueil, puis les autres pages qui reprennent le même menu et le même style.",
    theme: "creer",
    publishedOn: "2026-09-26",
    updatedOn: "2026-09-26",
    intro:
      "Un site regroupe plusieurs pages sous un même domaine, avec un menu commun. L'IA crée d'abord la page d'accueil, puis chaque page quand vous le demandez.",
    steps: [
      {
        title: "Choisissez « Website »",
        text: "Dans le menu de gauche, ouvrez la flèche à côté de « Create » et choisissez « Site ». Ou, sur l'écran « Create », sélectionnez « Website ».",
        image: { src: "/captures/site-web.webp", alt: "Menu « What are you creating? » avec l'option « New website »" },
      },
      {
        title: "Décrivez votre site",
        text: "Expliquez votre activité, votre public, le style voulu et les pages souhaitées, puis cliquez sur « Send ». Tapez tout sur une seule ligne : chaque retour à la ligne envoie un message séparé.",
        image: { src: "/captures/site-description.webp", alt: "Description d'un site tapée avec « New website »" },
      },
      {
        title: "Validez la liste des pages",
        text: "Piper propose les pages du menu. Renommez, retirez (« Remove ») ou ajoutez-en (« Add a page »), puis cliquez sur « These pages ».",
        image: { src: "/captures/site-pages.webp", alt: "Liste des pages proposées pour le site" },
      },
      {
        title: "Choisissez images et style, puis construisez l'accueil",
        text: "Comme pour une landing page, choisissez les images et une direction de style, puis cliquez sur « Build it ». Seule la page d'accueil est construite à ce stade.",
      },
      {
        title: "Construisez les autres pages",
        text: "La carte « The rest of the site » liste les pages restantes avec une estimation en crédits. « Build 3 pages » les construit une par une, avec l'en-tête et le style de l'accueil. « Skip for now » permet de le faire plus tard.",
        image: { src: "/captures/site-reste.webp", alt: "Carte « The rest of the site » avec le bouton pour construire les pages" },
      },
    ],
    pitfalls: [
      "Construire toutes les pages d'un coup sans relire l'accueil : les erreurs de style se répètent partout.",
      "Dépasser le nombre de pages inclus dans votre offre.",
    ],
    tools: [{ slug: "html-pub", why: "Sites multipages inclus dans toutes les offres payantes." }],
    sources: [{ label: "HTML Pub : utiliser les sites", url: `${help}43969561553549--HTMLPub-Using-Sites` }],
    related: ["publier-du-html-sur-html-pub", "creer-un-blog-avec-html-pub", "connecter-son-nom-de-domaine-leadpages"],
  },
  {
    slug: "creer-un-blog-avec-html-pub",
    question: "Comment créer un blog avec HTML Pub ?",
    summary: "Créer le blog sur HTML Pub, écrire un premier article et le publier sur votre site, étape par étape.",
    theme: "creer",
    publishedOn: "2026-09-26",
    updatedOn: "2026-09-26",
    intro:
      "Un blog attire des visiteurs depuis Google et les réseaux. Avec HTML Pub, il se crée en une minute et les articles sont en ligne dès que vous les publiez.",
    steps: [
      {
        title: "Créez le blog",
        text: "Dans le menu de gauche, ouvrez « Blog » puis cliquez sur « New Blog ». Donnez un titre ; l'adresse (slug) se remplit toute seule. La description et le nom d'auteur sont facultatifs. Cliquez sur « Create Blog ».",
        image: { src: "/captures/blog-creer.webp", alt: "Fenêtre New Blog avec titre, slug et description" },
      },
      {
        title: "Découvrez le tableau du blog",
        text: "La page du blog montre le design de la page d'accueil du blog (« Feed layout ») et des articles (« Post layout »), puis vos articles publiés, en brouillon ou programmés.",
        image: { src: "/captures/blog-tableau.webp", alt: "Tableau de bord d'un blog" },
      },
      {
        title: "Écrivez un article",
        text: "Cliquez sur « New post ». L'éditeur s'ouvre avec Penn, l'assistant d'écriture : choisissez une suggestion (« Write a how-to guide »…) ou écrivez vous-même.",
        image: { src: "/captures/blog-article.webp", alt: "Éditeur d'article avec l'assistant Penn" },
      },
      {
        title: "Remplissez les réglages de l'article",
        text: "L'icône de document en bas ouvre « Post Settings » : titre, contenu, auteur, image de couverture et SEO. Cliquez sur « Save changes ».",
        image: { src: "/captures/blog-reglages.webp", alt: "Panneau Post Settings d'un article" },
      },
      {
        title: "Publiez",
        text: "Cliquez sur « Publish » en haut à droite. L'article est en ligne immédiatement.",
      },
      {
        title: "Rattachez-le à votre site",
        text: "Si vous avez un site HTML Pub, vous pouvez afficher le blog à l'adresse /blog de votre domaine.",
      },
    ],
    pitfalls: [
      "Publier des articles sans image de couverture : ils sont moins cliqués sur les réseaux.",
      "Choisir une offre sans blog : vérifiez que la vôtre en inclut au moins un.",
    ],
    tools: [{ slug: "html-pub", why: "Blog inclus à partir de l'offre Pro." }],
    sources: [{ label: "HTML Pub : utiliser les blogs", url: `${help}43969067296653--HTMLPub-Using-Blogs` }, pricing],
    related: ["creer-un-site-web-avec-html-pub"],
  },

  // ——— Publier ———
  {
    slug: "connecter-son-nom-de-domaine-leadpages",
    question: "Comment connecter son nom de domaine à Leadpages ?",
    summary: "Afficher vos pages sur votre propre adresse, avec le HTTPS offert.",
    theme: "publier",
    publishedOn: "2026-09-26",
    updatedOn: "2026-09-26",
    popular: true,
    intro:
      "Par défaut, vos pages ont une adresse HTML Pub. Avec votre propre domaine, elles inspirent plus confiance. Le certificat de sécurité (HTTPS) est fourni gratuitement.",
    steps: [
      {
        title: "Ouvrez « Domains »",
        text: "Dans le menu de gauche, cliquez sur « Domains », puis sur « Connect Domain ». Pas encore de domaine ? Selon votre offre, « Claim Free Domain » vous en offre un.",
        image: { src: "/captures/domaine.webp", alt: "Page Domains avec « Connect Domain » et « Claim Free Domain »" },
      },
      {
        title: "Tapez votre domaine",
        text: "Soit le domaine principal (monsite.com), soit un sous-domaine (www.monsite.com, offre.monsite.com). Un sous-domaine est le plus simple.",
      },
      {
        title: "Choisissez ce qu'il affiche",
        text: "Dans « Homepage », choisissez « Page », « Site » ou « Blog », puis l'élément à afficher. Vous pouvez aussi choisir une page d'erreur (« Custom 404 page »). Cliquez sur « Add & Configure Domain ».",
        image: { src: "/captures/domaine-formulaire.webp", alt: "Formulaire Connect Your Domain" },
      },
      {
        title: "Laissez faire la configuration automatique",
        text: "Une fenêtre (Entri) propose de régler votre domaine pour vous. Cliquez sur « Continue », vérifiez les changements, puis « Authorize ». Le message « is now configured! » confirme.",
      },
      {
        title: "Sinon, réglez les DNS à la main",
        text: "Chez votre hébergeur de domaine, ajoutez les enregistrements indiqués par Leadpages : un CNAME pour www (ou votre sous-domaine), un TXT pour la sécurité et, pour le domaine principal, deux enregistrements A. Copiez les valeurs affichées dans votre compte.",
      },
      {
        title: "Attendez l'activation",
        text: "Le statut passe par plusieurs étapes jusqu'à « Active ». Le HTTPS peut prendre jusqu'à 48 heures.",
      },
    ],
    pitfalls: [
      "Oublier l'enregistrement TXT : sans lui, le HTTPS ne s'active pas.",
      "Modifier le domaine principal alors qu'un autre site l'utilise déjà : utilisez plutôt un sous-domaine.",
    ],
    tools: [
      { slug: "html-pub", why: "Domaine personnalisé et HTTPS inclus." },
      { slug: "leadpages", why: "Plusieurs domaines selon l'offre." },
    ],
    sources: [
      { label: "Connecter votre domaine (nouveau Leadpages)", url: `${help}44792783022989--New-Leadpages-Connect-your-Domain` },
      { label: "HTML Pub : connecter un domaine", url: `${help}43967609314829--HTMLPub-Connecting-a-Custom-Domain` },
    ],
    related: ["modifier-l-adresse-d-une-page-leadpages", "creer-un-site-web-avec-html-pub"],
  },
  {
    slug: "modifier-l-adresse-d-une-page-leadpages",
    question: "Comment modifier l'adresse ou protéger une page par mot de passe ?",
    summary: "Le titre, l'adresse (slug), le mot de passe et les étiquettes d'une page.",
    theme: "publier",
    publishedOn: "2026-09-26",
    updatedOn: "2026-09-26",
    intro:
      "Chaque page a quelques réglages simples, dans le menu « … » de sa carte, dans « Pages ». Ils servent à avoir une adresse lisible, à cacher une page en préparation ou à ranger vos pages.",
    steps: [
      {
        title: "Ouvrez le menu de la page",
        text: "Dans « Pages », cliquez sur « … » en bas de la carte de la page. Le menu regroupe les statistiques, les réponses, le partage et les réglages.",
        image: { src: "/captures/reglages-page.webp", alt: "Menu « … » d'une page : Settings, Set Password, Tags" },
      },
      {
        title: "Changez le titre et l'adresse",
        text: "Choisissez « Settings ». Pour l'adresse (slug), utilisez des minuscules, des chiffres et des tirets, par exemple offre-coaching-septembre.",
      },
      {
        title: "Ou passez par l'éditeur",
        text: "Dans l'éditeur de la page, le menu « … » en haut à droite affiche l'adresse (slug, modifiable avec le crayon), l'adresse publiée, et les options « SEO & Social » et « Scripts & Pixels ».",
        image: { src: "/captures/editeur-options.webp", alt: "Menu « … » de l'éditeur : slug, SEO & Social, Scripts & Pixels" },
      },
      {
        title: "Protégez par mot de passe",
        text: "Choisissez « Set Password ». Les visiteurs devront entrer le mot de passe pour voir la page. Pratique pour une page client ou une page pas encore prête.",
      },
      {
        title: "Rangez avec des étiquettes",
        text: "Choisissez « Tags », ou cliquez sur « + tag » sur la carte, pour retrouver vos pages par campagne ou par client.",
      },
      {
        title: "Soignez le référencement",
        text: "« SEO & Social » règle l'icône de l'onglet (favicon), l'indexation par Google, le titre et la description qui s'affichent dans les résultats de recherche.",
        image: { src: "/captures/seo-social.webp", alt: "Fenêtre SEO & Social" },
      },
    ],
    pitfalls: [
      "Changer l'adresse d'une page déjà partagée ou utilisée dans une publicité : l'ancien lien ne marche plus.",
      "Oublier de retirer le mot de passe le jour du lancement.",
    ],
    tools: [{ slug: "html-pub", why: "Réglages de page inclus dans toutes les offres." }],
    sources: [{ label: "HTML Pub : réglages de page", url: `${help}43967365239053--HTMLPub-Understanding-Page-Settings` }],
    related: ["connecter-son-nom-de-domaine-leadpages"],
  },

  // ——— Récolter des contacts ———
  {
    slug: "recuperer-les-formulaires-html-pub",
    question: "Comment récupérer les contacts de ses formulaires ?",
    summary: "Voir les réponses, les exporter en CSV et les supprimer si besoin.",
    theme: "contacts",
    publishedOn: "2026-09-26",
    updatedOn: "2026-09-26",
    popular: true,
    intro:
      "HTML Pub détecte tout seul les formulaires de vos pages et enregistre les réponses. Vous n'avez rien à régler.",
    steps: [
      {
        title: "Ajoutez un formulaire à votre page",
        text: "Demandez à l'assistant « ajoute un formulaire avec prénom et e-mail », ou utilisez un modèle qui en contient un.",
      },
      {
        title: "Ouvrez « Submissions »",
        text: "Dans le menu de gauche, cliquez sur « Submissions ». La page « Leads » regroupe toutes les réponses : nom, e-mail, page d'origine et date.",
        image: { src: "/captures/formulaires.webp", alt: "Page Submissions (Leads) avec les réponses des formulaires" },
      },
      {
        title: "Consultez les réponses",
        text: "Pour une seule page, ouvrez son menu « … » dans « Pages » et choisissez « Submissions ». Dépliez une ligne pour voir tous les champs remplis.",
      },
      {
        title: "Exportez en CSV",
        text: "Exportez les réponses en CSV pour les ouvrir dans Excel ou Google Sheets.",
      },
      {
        title: "Supprimez si on vous le demande",
        text: "L'icône de corbeille supprime une réponse définitivement. Utile si une personne demande l'effacement de ses données.",
      },
    ],
    pitfalls: [
      "Envoyer le formulaire vers un service extérieur : HTML Pub ne voit alors plus les réponses.",
      "Ne jamais exporter ses contacts : gardez une copie régulière.",
    ],
    tools: [{ slug: "html-pub", why: "Réponses de formulaires enregistrées automatiquement." }],
    sources: [{ label: "HTML Pub : récupérer les réponses de formulaires", url: `${help}43967816644493--HTMLPub-Collecting-Form-Submissions` }],
    related: ["connecter-leadpages-a-son-outil-e-mail", "creer-une-landing-page-avec-l-ia", "recolter-des-e-mails-avant-un-lancement", "creer-une-page-lien-en-bio-avec-html-pub"],
  },
  {
    slug: "connecter-leadpages-a-son-outil-e-mail",
    question: "Comment envoyer ses contacts vers Mailchimp, Brevo ou son CRM ?",
    summary: "Connecter une intégration pour que chaque nouveau contact arrive au bon endroit.",
    theme: "contacts",
    publishedOn: "2026-09-26",
    updatedOn: "2026-09-26",
    intro:
      "Un connecteur envoie chaque réponse de formulaire vers un autre outil, sans copier-coller. HTML Pub en propose plus de 20 : Mailchimp, Brevo, MailerLite, Kit, ActiveCampaign, HubSpot, Pipedrive, Slack, Zapier, Stripe…",
    steps: [
      {
        title: "Ouvrez « Connectors »",
        text: "Dans le menu de gauche, cliquez sur « Connectors ». Cherchez votre outil par nom ou par catégorie (e-mail, CRM, publicité…) et cliquez sur « Connect ».",
        image: { src: "/captures/integrations.webp", alt: "Page Connectors avec les applications à connecter" },
      },
      {
        title: "Autorisez la connexion",
        text: "Connectez-vous à l'outil ou collez sa clé API, selon ce qui est demandé. Le statut passe à « Connected ».",
      },
      {
        title: "Réglez l'automatisation",
        text: "Dans l'onglet « Automations », cliquez sur « Create automation ». Choisissez le déclencheur (« Form submitted », « Checkout completed » ou « Visitor identified »), puis l'application connectée qui reçoit les contacts.",
        image: { src: "/captures/automation-declencheur.webp", alt: "Création d'une automatisation : choix du déclencheur" },
      },
      {
        title: "Testez avec votre propre e-mail",
        text: "Remplissez le formulaire vous-même, puis vérifiez que le contact arrive dans l'outil.",
      },
      {
        title: "Surveillez les erreurs",
        text: "« View execution logs » montre chaque envoi : réussi, en attente ou échoué, avec la raison.",
      },
    ],
    pitfalls: [
      "Ne pas tester : on découvre des semaines plus tard que les contacts n'arrivaient pas.",
      "Dépasser le nombre d'intégrations actives de son offre.",
    ],
    tools: [
      { slug: "html-pub", why: "Intégrations incluses selon l'offre." },
      { slug: "leadpages", why: "Plus d'intégrations et des webhooks." },
    ],
    sources: [{ label: "HTML Pub : connecter des intégrations", url: `${help}43967898431757--HTMLPub-Connecting-Integrations` }],
    related: ["recuperer-les-formulaires-html-pub", "recolter-des-e-mails-avant-un-lancement", "ajouter-un-pop-up-d-inscription-leadpages"],
  },

  {
    slug: "recolter-des-e-mails-avant-un-lancement",
    question: "Comment récolter des e-mails avant un lancement ?",
    summary: "Une page d'attente, un formulaire e-mail, une bonne raison de s'inscrire, et vos contacts dans votre outil e-mail.",
    theme: "contacts",
    publishedOn: "2026-09-27",
    updatedOn: "2026-09-27",
    popular: true,
    intro:
      "Avant de lancer un produit, une page d'attente vous permet de réunir des personnes intéressées. Le jour du lancement, vous leur écrivez : ce sont vos premiers clients.",
    steps: [
      {
        title: "Donnez une raison de s'inscrire",
        text: "Une réduction de lancement, un accès avant tout le monde ou un cadeau. Écrivez-la clairement dans le titre ou juste au-dessus du formulaire.",
      },
      {
        title: "Créez la page d'attente avec l'IA",
        text: "Dans HTML Pub ou Leadpages, décrivez la page : le produit à venir, la date, ce que reçoivent les inscrits et un formulaire avec un seul champ e-mail.",
        image: { src: "/captures/htmlpub-page-attente.webp", alt: "Description d'une page d'attente avec un formulaire e-mail dans l'assistant IA de HTML Pub" },
      },
      {
        title: "Ajoutez le consentement",
        text: "Pour envoyer des e-mails commerciaux à des particuliers, il faut leur accord. Ajoutez une case à cocher non cochée d'avance et une phrase qui dit à quoi servira l'e-mail et comment se désinscrire.",
      },
      {
        title: "Retrouvez les inscrits",
        text: "Chaque inscription arrive dans « Submissions ». Vous pouvez les consulter et les exporter en CSV.",
        image: { src: "/captures/formulaires.webp", alt: "Page Submissions avec les réponses du formulaire" },
      },
      {
        title: "Envoyez-les vers votre outil e-mail",
        text: "Dans « Connectors », reliez Mailchimp, Brevo ou un autre outil pour que chaque inscrit y arrive automatiquement. Préparez un e-mail de bienvenue et l'e-mail du jour du lancement.",
        image: { src: "/captures/integrations.webp", alt: "Page Connectors avec les applications e-mail à connecter" },
      },
    ],
    pitfalls: [
      "Demander le nom, le téléphone et la ville : chaque champ en plus fait baisser les inscriptions.",
      "Une case de consentement déjà cochée : elle n'est pas valable.",
      "Ne rien envoyer avant le lancement : écrivez au moins un e-mail de bienvenue pour qu'on se souvienne de vous.",
    ],
    tools: [
      { slug: "html-pub", why: "Page d'attente, formulaire et connecteurs e-mail inclus." },
      { slug: "leadpages", why: "Pour tester deux versions de la page et inscrire plus de monde." },
    ],
    sources: [
      { label: "CNIL : la prospection commerciale par courrier électronique", url: "https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique" },
    ],
    related: ["recuperer-les-formulaires-html-pub", "connecter-leadpages-a-son-outil-e-mail", "creer-une-landing-page-avec-l-ia", "ajouter-un-pop-up-d-inscription-leadpages"],
  },

  {
    slug: "ajouter-un-pop-up-d-inscription-leadpages",
    question: "Comment ajouter un pop-up d'inscription sur Leadpages ?",
    summary: "Une fenêtre qui s'ouvre au bon moment pour proposer votre cadeau ou votre newsletter, sans cacher toute la page.",
    theme: "contacts",
    publishedOn: "2026-09-28",
    updatedOn: "2026-09-28",
    intro:
      "Un pop-up est un petit formulaire qui s'ouvre par-dessus la page : au clic sur un bouton, après quelques secondes ou quand le visiteur s'apprête à partir. Dans Leadpages, il se crée à part, puis se publie sur vos pages ou sur votre site.",
    steps: [
      {
        title: "Créez le pop-up",
        text: "Dans le menu, ouvrez « Conversion Tools », puis « Pop-Ups », et cliquez sur « Create New Pop-Up ». Donnez-lui un nom clair (par exemple « Checklist – guide gratuit »), puis cliquez sur « Start Building ».",
      },
      {
        title: "Écrivez une offre en une phrase",
        text: "Un titre qui dit ce que la personne reçoit (« Recevez la checklist gratuite »), une phrase de précision, un seul champ e-mail et un bouton d'action. Pas de nom, pas de téléphone : chaque champ en plus fait perdre des inscrits.",
      },
      {
        title: "Réglez où vont les inscrits",
        text: "Cliquez sur le formulaire du pop-up : choisissez l'outil e-mail qui reçoit les contacts (Mailchimp, Brevo…) et ce qui se passe après l'envoi (message de remerciement ou page de remerciement). Ajoutez une case de consentement non cochée d'avance.",
      },
      {
        title: "Choisissez quand il s'ouvre",
        text: "Cliquez sur « Publish » en haut à droite. Trois façons de l'ouvrir : au clic sur un bouton, un lien ou une image ; après un délai (« timed ») ; ou quand la souris part vers le haut de la fenêtre (« exit »). Le plus respectueux est le clic : le visiteur l'a demandé.",
      },
      {
        title: "Reliez-le à votre landing page",
        text: "Dans votre page Leadpages, sélectionnez le bouton voulu et, dans ses réglages de lien, choisissez d'ouvrir le pop-up. Pour un pop-up à délai ou de sortie, copiez le code donné par « Publish » et collez-le dans les réglages de la page, partie suivi / « Head Section Tracking Code ». Mettez la page à jour.",
      },
      {
        title: "Testez sur ordinateur et sur téléphone",
        text: "Ouvrez la page publiée, déclenchez le pop-up et inscrivez-vous avec votre propre e-mail. Vérifiez que le contact arrive dans votre outil e-mail. Sur téléphone, les pop-ups à délai et de sortie ne s'ouvrent pas : gardez toujours un bouton visible.",
      },
    ],
    pitfalls: [
      "Un pop-up qui s'ouvre dès l'arrivée sur la page : le visiteur le ferme sans lire, et Google n'aime pas les fenêtres qui cachent le contenu sur mobile.",
      "Compter uniquement sur le pop-up de sortie : il ne fonctionne pas sur téléphone, où arrivent la plupart des visiteurs.",
      "Oublier le test : un pop-up relié au mauvais outil e-mail perd tous les inscrits.",
    ],
    tools: [{ slug: "leadpages", why: "Pop-ups au clic, à délai et de sortie, reliés à vos outils e-mail." }],
    sources: [
      { label: "Leadpages : créer un pop-up", url: `${help}115000438247-Create-a-pop-up` },
      { label: "Leadpages : publier un pop-up", url: `${help}115000463348-Publish-your-pop-up` },
    ],
    related: ["recolter-des-e-mails-avant-un-lancement", "connecter-leadpages-a-son-outil-e-mail", "creer-sa-landing-page-leadpages-de-a-a-z"],
  },

  // ——— Optimiser ———
  {
    slug: "faire-un-test-ab-leadpages",
    question: "Comment faire un test A/B avec Leadpages ?",
    summary: "Comparer deux versions d'une page et garder celle qui convertit le mieux.",
    theme: "optimiser",
    publishedOn: "2026-09-26",
    updatedOn: "2026-09-26",
    popular: true,
    intro:
      "Un test A/B montre deux versions d'une page à vos visiteurs et mesure laquelle obtient le plus de résultats. Il est inclus à partir de l'offre Leadpages Grow.",
    steps: [
      {
        title: "Créez une variante",
        text: "Dupliquez votre page en un clic, ou laissez l'IA proposer une variante. Changez une seule chose importante : le titre, le bouton ou l'offre.",
        image: { src: "/captures/test-ab.webp", alt: "Création d'une variante B et bascule entre A et B" },
      },
      {
        title: "Choisissez votre objectif",
        text: "Indiquez ce qui compte comme réussite : envoi du formulaire, clic sur un bouton, achat ou conversion sur un autre site.",
      },
      {
        title: "Répartissez le trafic",
        text: "50/50 est le plus simple. Vous pouvez aussi choisir 70/30 ou toute répartition entre 10 et 90 %. Puis publiez.",
      },
      {
        title: "Attendez un résultat clair",
        text: "Les résultats s'affichent en direct avec trois niveaux : tendance, probable, gagnant clair. Attendez « gagnant clair » avant de décider.",
      },
      {
        title: "Gardez la gagnante",
        text: "Envoyez 100 % du trafic vers la meilleure version en un clic, puis lancez un nouveau test.",
      },
    ],
    pitfalls: [
      "Changer plusieurs choses à la fois : on ne sait plus ce qui a fait la différence.",
      "Arrêter le test après quelques visites : le résultat est souvent dû au hasard.",
    ],
    tools: [{ slug: "leadpages", why: "Tests A/B dès Grow, sans limite de trafic." }],
    sources: [{ label: "Leadpages : tests A/B", url: "https://leadpages.com/product/ab-testing" }, pricing],
    related: ["utiliser-smart-traffic-leadpages", "lire-une-carte-de-chaleur-leadpages", "ameliorer-le-taux-de-conversion-de-ses-pages-de-a-a-z"],
  },
  {
    slug: "lire-une-carte-de-chaleur-leadpages",
    question: "Comment lire une carte de chaleur (heatmap) dans Leadpages ?",
    summary: "Voir où vos visiteurs cliquent, jusqu'où ils descendent et ce qu'ils lisent.",
    theme: "optimiser",
    publishedOn: "2026-09-26",
    updatedOn: "2026-09-26",
    intro:
      "Une carte de chaleur colore votre page selon l'activité des visiteurs. Elle est incluse dans les offres Leadpages Optimize et Scale, sans code à installer.",
    steps: [
      {
        title: "Attendez assez de visites",
        text: "En dessous d'environ 30 visites, les données sont trop maigres pour conclure.",
      },
      {
        title: "Activez le mode carte de chaleur",
        text: "Dans l'éditeur de la page, cliquez sur l'icône en forme de flamme dans la barre d'outils.",
        image: { src: "/captures/heatmap.webp", alt: "Carte de chaleur des clics, avec les onglets Clicks, Scroll et Attention" },
      },
      {
        title: "Lisez les clics",
        text: "Rouge : beaucoup de clics. Bleu : zones ignorées. Si les gens cliquent sur une image qui n'est pas un lien, faites-en un lien.",
      },
      {
        title: "Lisez le défilement",
        text: "La carte de défilement montre la part des visiteurs qui atteint 25, 50, 75 et 100 % de la page. Si peu arrivent au formulaire, remontez-le.",
      },
      {
        title: "Corrigez tout de suite",
        text: "Modifiez la page ou lancez un test A/B depuis le même écran.",
      },
    ],
    pitfalls: [
      "Conclure avec trop peu de visites.",
      "Chercher la carte d'attention sur mobile : elle n'existe que sur ordinateur (le mobile a les clics et le défilement).",
    ],
    tools: [{ slug: "leadpages", why: "Cartes de chaleur dès l'offre Optimize." }],
    sources: [{ label: "Leadpages : cartes de chaleur", url: "https://leadpages.com/product/heatmaps" }],
    related: ["faire-un-test-ab-leadpages", "utiliser-smart-traffic-leadpages", "ameliorer-le-taux-de-conversion-de-ses-pages-de-a-a-z"],
  },
  {
    slug: "utiliser-smart-traffic-leadpages",
    question: "Comment fonctionne Smart Traffic dans Leadpages ?",
    summary: "L'IA envoie chaque visiteur vers la version de page qui a le plus de chances de lui plaire.",
    theme: "optimiser",
    publishedOn: "2026-09-26",
    updatedOn: "2026-09-26",
    intro:
      "Un test A/B classique partage le trafic à égalité. Smart Traffic, lui, choisit pour chaque visiteur la variante la plus susceptible de le convertir. Il est inclus à partir de Leadpages Optimize.",
    steps: [
      {
        title: "Préparez au moins deux variantes",
        text: "Créez des versions vraiment différentes : une offre, un angle ou un public différent.",
      },
      {
        title: "Fixez l'objectif",
        text: "Formulaire, clic ou achat : Smart Traffic apprend à partir de cet objectif.",
      },
      {
        title: "Activez Smart Traffic",
        text: "Cliquez sur « Let AI optimize this for me ». Au lieu d'une répartition fixe, l'IA dirige chaque visiteur et s'améliore au fil des visites.",
        image: { src: "/captures/smart-traffic.webp", alt: "Panneau Optimize : répartition automatique du trafic entre l'original et la variante" },
      },
      {
        title: "Suivez les résultats",
        text: "Comparez le taux de conversion global avant et après. Ajoutez une nouvelle variante quand une autre s'essouffle.",
      },
    ],
    pitfalls: [
      "L'utiliser avec des variantes presque identiques : l'IA n'a rien à choisir.",
      "S'attendre à un résultat en quelques jours avec peu de trafic.",
    ],
    tools: [{ slug: "leadpages", why: "Smart Traffic dès Optimize, optimisation automatique complète avec Scale." }],
    sources: [{ label: "Leadpages : tests A/B et Smart Traffic", url: "https://leadpages.com/product/ab-testing" }, pricing],
    related: ["faire-un-test-ab-leadpages", "lire-une-carte-de-chaleur-leadpages"],
  },
  {
    slug: "ameliorer-le-taux-de-conversion-de-ses-pages-de-a-a-z",
    question: "Comment améliorer le taux de conversion de ses landing pages de A à Z ?",
    summary:
      "Guide complet pour analyser, optimiser et augmenter le taux de conversion de vos landing pages Leadpages et HTML Pub, étape par étape.",
    theme: "optimiser",
    updatedOn: "2026-09-28",
    popular: true,
    format: "complet",
    intro:
      "Votre page est en ligne, mais le taux de conversion reste bas. Avant de créer une nouvelle page ou de changer d'outil, il y a un parcours logique : comprendre d'où vient le problème, corriger les blocages un par un et mesurer chaque amélioration. Ce guide suit ce parcours du début à la fin, avec les fonctions de Leadpages et HTML Pub.",
    steps: [
      {
        title: "Comprenez ce qu'est le taux de conversion",
        text: "Le taux de conversion, c'est le pourcentage de visiteurs qui font l'action attendue : remplir un formulaire, cliquer sur un bouton ou acheter. Si 100 personnes visitent votre page et que 3 remplissent le formulaire, le taux est de 3 %. Un bon taux dépend du secteur, mais la moyenne des landing pages tourne autour de 3 à 5 %. L'objectif est de passer au-dessus en travaillant chaque élément de la page.",
      },
      {
        title: "Lisez vos statistiques actuelles",
        text: "Avant de changer quoi que ce soit, notez le taux de conversion actuel. Dans Leadpages, ouvrez le tableau de bord de la page : vous voyez les visiteurs uniques, les conversions et le taux. C'est votre point de départ.\n\nSi vous venez de lancer la page et que le trafic est faible, attendez au moins 200 visiteurs avant de tirer des conclusions. En dessous, les chiffres ne sont pas fiables.",
        image: { src: "/captures/statistiques.webp", alt: "Tableau de bord Leadpages : visiteurs uniques, conversions et taux de conversion" },
      },
      {
        title: "Utilisez les cartes de chaleur pour trouver les blocages",
        text: "Les cartes de chaleur montrent où les visiteurs cliquent et jusqu'où ils défilent. Si personne ne descend jusqu'au formulaire, le problème est au-dessus. Si tout le monde clique sur un élément qui n'est pas un lien, c'est une opportunité manquée.\n\nDans Leadpages, les cartes de chaleur sont disponibles dès l'offre Optimize. Activez-les dans les réglages de la page et laissez-les tourner quelques jours avant de les lire.",
        image: { src: "/captures/heatmap.webp", alt: "Carte de chaleur Leadpages : zones de clics et profondeur de défilement" },
      },
      {
        title: "Réécrivez le titre principal",
        text: "Le titre est la première chose que le visiteur lit. Il doit répondre à une question simple : « Qu'est-ce que j'y gagne ? ». Un bon titre parle du résultat, pas de votre produit.\n\nMauvais : « Notre solution innovante de marketing digital ». Bon : « Doublez vos inscriptions en 30 jours sans augmenter votre budget pub ». Testez un titre centré sur le bénéfice principal de votre offre.",
      },
      {
        title: "Simplifiez le formulaire",
        text: "Chaque champ supplémentaire dans un formulaire fait baisser le taux de conversion. Si vous demandez le nom, le prénom, l'email, le téléphone et l'entreprise, réduisez à l'email seul pour commencer. Vous pourrez demander le reste plus tard, une fois le contact acquis.\n\nDans Leadpages, ouvrez le formulaire dans l'éditeur et supprimez les champs inutiles. Gardez un seul bouton d'action avec un texte clair : « Recevoir le guide », pas « Soumettre ».",
        image: { src: "/captures/formulaires.webp", alt: "Éditeur de formulaire Leadpages : champs et bouton d'appel à l'action" },
      },
      {
        title: "Ajoutez de la preuve sociale",
        text: "Les visiteurs font confiance aux autres visiteurs. Ajoutez des témoignages clients, des logos de partenaires, le nombre d'utilisateurs ou des notes. La preuve sociale rassure et lève les doutes.\n\nPlacez les témoignages près du formulaire ou du bouton d'achat, là où le visiteur hésite. Un témoignage avec un nom, une photo et un résultat chiffré vaut plus qu'une citation anonyme.",
      },
      {
        title: "Alignez votre publicité et votre page",
        text: "Si votre publicité promet un ebook gratuit et que la page parle d'un webinaire, le visiteur part. Le message de la publicité, le titre de la page et l'offre doivent raconter la même histoire.\n\nVérifiez chaque source de trafic : le texte de la pub Facebook, le titre de l'email, le lien dans la bio Instagram. Chacun doit correspondre exactement à ce que la page propose.",
      },
      {
        title: "Optimisez l'affichage mobile",
        text: "Plus de la moitié du trafic vient du téléphone. Si votre page est difficile à lire ou que le bouton est trop petit sur mobile, vous perdez des conversions.\n\nDans Leadpages, utilisez l'aperçu mobile de l'éditeur. Vérifiez que le titre est lisible sans zoomer, que le formulaire est facile à remplir au pouce et que le bouton est assez grand pour être tapé facilement.",
        image: { src: "/captures/apercu-mobile.webp", alt: "Aperçu mobile dans l'éditeur Leadpages : vérification de la mise en page sur téléphone" },
      },
      {
        title: "Créez une page de remerciement efficace",
        text: "La page de remerciement est la page la plus sous-estimée. Le visiteur vient de convertir : il est engagé. Profitez-en pour proposer une action suivante : partager sur les réseaux, s'inscrire à un webinaire, découvrir un produit.\n\nDans Leadpages, configurez la page de remerciement dans les réglages du formulaire. Créez une vraie page avec une offre suivante plutôt qu'un simple message « Merci ».",
      },
      {
        title: "Ajoutez un sentiment d'urgence réel",
        text: "L'urgence fonctionne quand elle est vraie. Un compte à rebours pour une offre qui ne se termine jamais détruit la confiance. Utilisez de vraies limites : un nombre de places, une date de fin de promotion, un stock limité.\n\nSi vous n'avez pas de limite naturelle, créez-en une : « Les 50 premiers inscrits reçoivent un bonus ». L'important est que ce soit vérifiable et honnête.",
      },
      {
        title: "Lancez un test A/B",
        text: "Ne changez pas tout d'un coup. Créez une variante avec un seul changement : un titre différent, un bouton d'une autre couleur, un formulaire plus court. Laissez le test tourner jusqu'à avoir au moins 100 conversions par variante pour un résultat fiable.\n\nDans Leadpages, dupliquez votre page, modifiez un élément et lancez le test depuis l'onglet Optimize. Leadpages répartit le trafic automatiquement.",
        image: { src: "/captures/test-ab.webp", alt: "Interface de test A/B Leadpages : variante originale et variante de test avec répartition du trafic" },
      },
      {
        title: "Activez Smart Traffic pour automatiser",
        text: "Une fois que vous avez plusieurs variantes qui fonctionnent, Smart Traffic prend le relais. Au lieu de répartir le trafic à parts égales, l'IA envoie chaque visiteur vers la variante la plus susceptible de le convertir, en fonction de son appareil, sa localisation et son comportement.\n\nSmart Traffic est disponible dès Leadpages Optimize. Activez-le dans l'onglet Optimize de votre page après avoir créé au moins deux variantes.",
        image: { src: "/captures/smart-traffic.webp", alt: "Panneau Optimize : activation de Smart Traffic pour une répartition intelligente du trafic" },
      },
      {
        title: "Optimisez le référencement de la page",
        text: "Une page bien référencée reçoit du trafic gratuit et qualifié. Remplissez le titre SEO, la méta-description et l'URL avec vos mots-clés principaux. Ajoutez un texte alt à chaque image.\n\nDans Leadpages, ouvrez les réglages SEO de la page. Le titre doit contenir votre mot-clé principal et faire moins de 60 caractères. La description doit donner envie de cliquer en moins de 155 caractères.",
        image: { src: "/captures/seo-social.webp", alt: "Réglages SEO et réseaux sociaux dans Leadpages : titre, description et image de partage" },
      },
      {
        title: "Mettez en place un suivi hebdomadaire",
        text: "L'optimisation du taux de conversion n'est pas un projet ponctuel, c'est un processus continu. Chaque semaine, notez le taux de conversion, le nombre de visiteurs et les résultats des tests en cours.\n\nCréez un tableau simple avec la date, le taux, le changement testé et le résultat. Après quelques semaines, vous verrez quels types de changements ont le plus d'impact sur vos pages.",
      },
    ],
    pitfalls: [
      "Changer plusieurs éléments à la fois : impossible de savoir lequel a eu un effet.",
      "Tirer des conclusions avec moins de 200 visiteurs par variante.",
      "Copier la page d'un concurrent sans comprendre pourquoi elle fonctionne pour son audience.",
      "Ignorer le mobile : plus de la moitié du trafic y passe.",
      "Ajouter un compte à rebours factice qui recommence à chaque visite.",
    ],
    tools: [
      { slug: "leadpages", why: "Tests A/B, cartes de chaleur et Smart Traffic dès l'offre Optimize." },
      { slug: "html-pub", why: "Création rapide de pages optimisées avec l'IA, idéal pour tester des variantes." },
    ],
    sources: [
      { label: "Leadpages : tests A/B et Smart Traffic", url: "https://leadpages.com/product/ab-testing" },
      { label: "Leadpages : conversion analytics", url: "https://leadpages.com/product/conversion-tools" },
      pricing,
    ],
    related: ["faire-un-test-ab-leadpages", "utiliser-smart-traffic-leadpages", "creer-sa-landing-page-leadpages-de-a-a-z"],
  },

  // ——— IA et vidéo ———
  {
    slug: "publier-une-page-depuis-claude",
    question: "Comment publier une page HTML Pub directement depuis Claude ?",
    summary: "Connecter HTML Pub à Claude pour créer et modifier vos pages en discutant.",
    theme: "ia",
    publishedOn: "2026-09-27",
    updatedOn: "2026-09-27",
    intro:
      "HTML Pub a un connecteur pour Claude (MCP). Une fois connecté, vous demandez une page à Claude et il la publie dans votre compte.",
    steps: [
      {
        title: "Vérifiez votre offre",
        text: "Le connecteur MCP est inclus dans toutes les offres HTML Pub et Leadpages, dès Starter.",
      },
      {
        title: "Ajoutez le connecteur dans Claude",
        text: "Sur claude.ai, ouvrez Réglages puis Connecteurs, choisissez « Ajouter un connecteur personnalisé » et collez l'adresse https://mcp.htmlpub.com/mcp.",
      },
      {
        title: "Autorisez l'accès",
        text: "Connectez-vous à votre compte HTML Pub quand Claude le demande. Aucune clé API n'est nécessaire. Claude apparaît ensuite dans « Connected Apps », dans le menu de votre espace.",
        image: { src: "/captures/claude-connecteur.webp", alt: "Page Connected Apps, où apparaît Claude une fois connecté" },
      },
      {
        title: "Demandez votre page",
        text: "Par exemple : « Crée et publie sur HTML Pub une landing page pour mon atelier photo, avec un formulaire d'inscription. » Claude vous donne l'adresse de la page.",
      },
      {
        title: "Modifiez en discutant",
        text: "Demandez des corrections à Claude : il modifie la page existante sans tout refaire.",
      },
    ],
    pitfalls: [
      "Ajouter une mauvaise adresse de connecteur : copiez-la depuis l'aide officielle.",
      "Publier sans relire : vérifiez toujours la page en ligne.",
    ],
    tools: [{ slug: "html-pub", why: "Connecteur Claude inclus dans toutes les offres." }],
    sources: [{ label: "HTML Pub : connecteur MCP pour Claude", url: `${help}43969915496845--HTMLPub-Using-the-Claude-MCP-Connector` }, pricing],
    related: ["publier-du-html-sur-html-pub", "creer-une-landing-page-avec-l-ia", "creer-une-pub-video-avec-ad-studio"],
  },
  {
    slug: "creer-une-pub-video-avec-ad-studio",
    question: "Comment créer une publicité vidéo avec Ad Studio ?",
    summary: "Une image de départ, un storyboard, puis la vidéo finale, en validant chaque étape.",
    theme: "ia",
    publishedOn: "2026-09-26",
    updatedOn: "2026-09-26",
    intro:
      "Ad Studio transforme une courte description en publicité. Il propose des pubs centrées sur le produit ou au style UGC, avec un créateur généré par IA. Il est réservé aux offres Leadpages Optimize et Scale.",
    steps: [
      {
        title: "Ouvrez « Ads »",
        text: "Dans le menu de gauche, cliquez sur « Ads ». Décrivez votre produit, votre public et le style voulu : pub produit ou vidéo façon UGC.",
        image: { src: "/captures/adstudio.webp", alt: "Page Ads (Ad Studio) : « Ad Studio is available on Optimize and above »" },
      },
      {
        title: "Validez l'image de départ",
        text: "Ad Studio crée une image qui fixe le décor, le produit et le créateur. Demandez des retouches : cette étape ne consomme pas de crédits vidéo.",
      },
      {
        title: "Validez le storyboard",
        text: "Relisez les plans, les légendes et les mouvements de caméra qui racontent l'histoire.",
      },
      {
        title: "Lancez le tournage",
        text: "Avant le rendu, un devis indique le nombre de crédits selon le nombre de plans et la résolution. Validez pour obtenir la vidéo finale.",
      },
    ],
    pitfalls: [
      "Lancer le rendu sans avoir bien relu le storyboard : c'est cette étape qui coûte des crédits.",
      "S'étonner d'une vidéo sans musique : si la musique n'est pas libre de droits, elle est retirée.",
      "Chercher Ad Studio avec une offre HTML Pub : il faut passer à Leadpages Optimize.",
    ],
    tools: [{ slug: "leadpages", why: "Ad Studio est inclus dès l'offre Optimize." }],
    sources: [{ label: "HTML Pub : créer des pubs vidéo dans Ad Studio", url: `${help}48970038606349--HTMLPub-Generating-Video-Ads-in-Ad-Studio` }, pricing],
    related: ["publier-une-page-depuis-claude", "creer-une-landing-page-avec-l-ia"],
  },

  // ——— Vendre avec Shopify ———
  {
    slug: "essayer-shopify-gratuitement",
    question: "Comment essayer Shopify gratuitement ?",
    summary: "L'essai de 3 jours, puis 1 € par mois pendant 3 mois : comment en profiter.",
    theme: "boutique",
    publishedOn: "2026-09-27",
    updatedOn: "2026-09-27",
    popular: true,
    intro:
      "Shopify s'essaie gratuitement pendant 3 jours. Ensuite, l'offre de lancement permet de continuer pour 1 € par mois pendant 3 mois, de quoi construire sa boutique sans gros frais.",
    steps: [
      {
        title: "Ouvrez la page des tarifs",
        text: "Sur shopify.com, la page Tarification affiche l'offre du moment : 3 jours gratuits, puis 1 € par mois pendant 3 mois. L'offre peut changer : lisez-la le jour même.",
        image: { src: "/captures/shopify-essai.webp", alt: "Page Tarification de Shopify : 3 jours d'essai, puis 1 €/mois pendant 3 mois" },
      },
      {
        title: "Cliquez sur « Démarrer gratuitement »",
        text: "Entrez votre adresse e-mail et créez votre compte. Shopify pose quelques questions sur votre projet pour préparer la boutique.",
      },
      {
        title: "Préparez l'essentiel pendant les 3 jours",
        text: "Ajoutez un ou deux produits, choisissez un thème et regardez les réglages de paiement. Vous saurez vite si l'outil vous convient.",
      },
      {
        title: "Choisissez un forfait pour continuer",
        text: "Pour garder la boutique après l'essai, choisissez un forfait. L'offre à 1 € s'applique alors pendant 3 mois, puis le prix normal du forfait.",
      },
      {
        title: "Notez la date de fin",
        text: "Mettez un rappel avant la fin des 3 mois à 1 € : c'est là que le prix normal commence.",
      },
    ],
    pitfalls: ["Oublier qu'après 3 mois à 1 €, le forfait passe au prix normal.", "Passer l'essai à tout configurer sans ajouter un seul produit : on ne voit pas le vrai fonctionnement."],
    tools: [{ slug: "shopify", why: "3 jours gratuits, puis 1 €/mois pendant 3 mois." }],
    sources: [{ label: "Shopify : tarifs", url: "https://www.shopify.com/fr/tarifs" }],
    related: ["combien-coute-shopify", "choisir-entre-leadpages-et-shopify", "choisir-son-forfait-shopify", "creer-sa-boutique-shopify"],
  },
  {
    slug: "choisir-son-forfait-shopify",
    question: "Comment choisir son forfait Shopify ?",
    summary: "Basic, Grow, Advanced ou Plus : lequel prendre selon votre activité.",
    theme: "boutique",
    publishedOn: "2026-09-27",
    updatedOn: "2026-09-27",
    intro:
      "Shopify propose quatre forfaits. Pour démarrer seul, Basic suffit presque toujours. Les forfaits plus chers servent surtout aux équipes et aux gros volumes.",
    steps: [
      {
        title: "Comparez les quatre forfaits",
        text: "Basic pour les entrepreneurs seuls, Grow pour les petites équipes (jusqu'à 5 comptes d'employés), Advanced pour vendre à l'international avec plus d'outils (jusqu'à 15 comptes), Plus pour les grandes entreprises.",
        image: { src: "/captures/shopify-offres.webp", alt: "Les forfaits Basic, Grow, Advanced et Plus sur la page des tarifs" },
      },
      {
        title: "Choisissez le paiement annuel ou mensuel",
        text: "Le paiement annuel coûte moins cher chaque mois. Le paiement mensuel laisse plus de liberté pour arrêter. Vérifiez les deux prix affichés.",
      },
      {
        title: "Regardez les frais par vente",
        text: "Avec Shopify Payments, les frais de carte baissent quand le forfait monte. Si vous utilisez un autre prestataire de paiement, Shopify ajoute des frais de transaction, plus élevés sur Basic.",
      },
      {
        title: "Commencez petit",
        text: "Démarrez sur Basic. Vous pourrez changer de forfait plus tard, quand vos ventes le justifient.",
      },
    ],
    pitfalls: ["Prendre Advanced dès le départ sans en avoir besoin.", "Oublier le coût des applications payantes, qui s'ajoute au forfait."],
    tools: [{ slug: "shopify", why: "Quatre forfaits, de l'indépendant à la grande entreprise." }],
    sources: [{ label: "Shopify : tarifs", url: "https://www.shopify.com/fr/tarifs" }],
    related: ["combien-coute-shopify", "essayer-shopify-gratuitement", "accepter-les-paiements-shopify"],
  },
  {
    slug: "combien-coute-shopify",
    question: "Combien coûte Shopify en 2026 : forfaits et frais ?",
    summary: "Le prix des forfaits Shopify, l'offre à 1 €, les frais par vente et les coûts qu'on oublie.",
    theme: "boutique",
    publishedOn: "2026-09-28",
    updatedOn: "2026-09-28",
    intro:
      "Le prix de Shopify, c'est le forfait, plus des frais sur chaque vente, plus les applications que vous ajoutez. Voici les chiffres relevés sur la page des tarifs le 28 septembre 2026 (mêmes prix affichés en Belgique et au Portugal).",
    steps: [
      {
        title: "L'offre de départ : 3 jours gratuits, puis 1 € par mois",
        text: "Au 28 septembre 2026, Shopify affiche 3 jours d'essai gratuit, puis 1 € par mois pendant 3 mois. Après ces 3 mois, le prix normal du forfait choisi commence.",
        image: { src: "/captures/shopify-essai.webp", alt: "Page Tarification de Shopify : 3 jours d'essai gratuit, puis 1 €/mois pendant 3 mois" },
      },
      {
        title: "Le prix des quatre forfaits",
        text: "En paiement annuel : Basic 19 € par mois, Grow 56 € par mois, Advanced 289 € par mois, et Plus à partir de 2 100 € par mois. En paiement mensuel, Basic coûte 27 € par mois.\n\nPour une personne seule qui démarre, Basic suffit presque toujours.",
        image: { src: "/captures/shopify-offres.webp", alt: "Forfaits Shopify en paiement annuel : Basic 19 €/mois, Grow 56 €/mois, Advanced 289 €/mois, Plus à partir de 2 100 €/mois" },
      },
      {
        title: "Les frais sur chaque vente",
        text: "Avec Shopify Payments, chaque paiement par carte coûte des frais : sur Basic, à partir de 1,8 % + 0,30 € par vente (tarif affiché en Belgique le 27 septembre 2026). Ces frais baissent quand le forfait monte.\n\nSi vous utilisez un autre prestataire de paiement à la place de Shopify Payments, Shopify ajoute des frais de transaction, jusqu'à 2 % sur Basic.",
        image: { src: "/captures/shopify-paiements.webp", alt: "Réglages Paiements : Shopify Payments activé et PayPal en fournisseur supplémentaire" },
      },
      {
        title: "Les coûts qu'on oublie",
        text: "Les applications payantes s'ajoutent au forfait, souvent par mois. Un nom de domaine se paie à part, chaque année. Un thème payant se paie une fois. Faites la somme avant de choisir.",
      },
      {
        title: "Mensuel ou annuel ?",
        text: "Le paiement annuel revient moins cher chaque mois, mais vous engage pour un an. Commencez en mensuel pendant l'offre à 1 €, puis passez à l'annuel quand la boutique vend.",
      },
    ],
    pitfalls: [
      "Oublier la date de fin des 3 mois à 1 € : le prix normal commence sans prévenir.",
      "Désactiver Shopify Payments sans savoir que Shopify ajoute alors des frais de transaction.",
      "Compter seulement le forfait et oublier les applications payantes.",
    ],
    tools: [{ slug: "shopify", why: "Quatre forfaits, de l'indépendant à la grande entreprise." }],
    sources: [
      { label: "Shopify : tarifs", url: "https://www.shopify.com/fr/tarifs" },
      { label: "Shopify Payments (aide)", url: "https://help.shopify.com/fr/manual/payments/shopify-payments" },
    ],
    related: ["choisir-son-forfait-shopify", "essayer-shopify-gratuitement", "accepter-les-paiements-shopify"],
  },
  {
    slug: "creer-sa-boutique-shopify-de-a-a-z",
    question: "Comment créer sa boutique Shopify de A à Z ?",
    summary: "Le guide complet : de l'inscription à la première vente, avec chaque écran de l'administration.",
    theme: "boutique",
    format: "complet",
    publishedOn: "2026-09-27",
    updatedOn: "2026-09-27",
    popular: true,
    intro:
      "Ce guide suit l'ordre réel d'une première boutique : préparer, s'inscrire, remplir la boutique, régler la vente, tester, puis ouvrir au public. Comptez une journée de travail, étalée sur les 3 jours d'essai gratuit.",
    steps: [
      {
        title: "Préparez tout avant de vous inscrire",
        text: "L'essai gratuit ne dure que 3 jours : préparez le contenu avant de créer le compte, pour passer ce temps à construire et non à chercher.\n\nRassemblez : le nom de la boutique, un logo (même simple), 3 à 5 produits avec leurs photos, un prix et une description pour chacun, le poids et la taille des colis si vous envoyez des objets, et votre numéro d'entreprise si vous en avez un.\n\nPréparez aussi le compte bancaire qui recevra les ventes : Shopify vous le demandera pour activer les paiements. Enfin, notez ce que vous voulez écrire dans vos conditions de retour : 14 jours, remboursement, frais de retour à la charge de qui.",
      },
      {
        title: "Démarrez l'essai gratuit",
        text: "Sur shopify.com, ouvrez la page Tarification. Au 27 septembre 2026, l'offre affichée en Belgique est : 3 jours d'essai gratuit, puis 1 € par mois pendant 3 mois. Les offres changent souvent : lisez celle du jour avant de commencer.\n\nCliquez sur « Démarrer gratuitement », entrez votre adresse e-mail et répondez aux questions sur votre projet. Ces réponses servent seulement à préparer l'administration : vous pourrez tout modifier ensuite.\n\nNotez tout de suite deux dates dans votre agenda : la fin des 3 jours d'essai, et la fin des 3 mois à 1 €, quand le prix normal du forfait commence.",
        image: {
          src: "/captures/shopify-essai.webp",
          alt: "Page Tarification de Shopify : 3 jours d'essai gratuit, puis 1 € par mois pendant 3 mois",
        },
      },
      {
        title: "Prenez vos repères dans l'administration",
        text: "Tout se passe dans l'administration Shopify. Le menu de gauche regroupe les rubriques que vous utiliserez chaque jour : « Commandes », « Produits », « Clients », « Réductions », « Contenu » et « Boutique en ligne ». Les réglages de la boutique sont tous dans « Paramètres », en bas à gauche.\n\nAu centre de l'accueil, une barre permet de poser une question à Sidekick, l'assistant IA de Shopify. Il connaît votre boutique : demandez-lui par exemple « Comment proposer la livraison gratuite dès 50 € ? ». Vérifiez tout de même ses réponses dans l'aide officielle avant de changer un réglage important.",
        image: {
          src: "/captures/shopify-accueil.webp",
          alt: "Accueil de l'administration Shopify avec le menu de gauche et la barre Sidekick",
        },
      },
      {
        title: "Ajoutez votre premier produit",
        text: "Cliquez sur « Produits », puis sur « Ajouter un produit ». Écrivez un titre clair, comme le client le chercherait sur Google : « Affiche Bauhaus A3 » plutôt que « Modèle 12 ».\n\nLa description répond aux questions que l'acheteur se pose : ce que c'est, la matière, la taille, l'usage, le délai d'envoi. Des phrases courtes et une liste de points se lisent mieux sur téléphone.\n\nDans « Supports multimédias », cliquez sur « Importer » et ajoutez plusieurs photos : le produit seul sur fond clair, puis en situation. Gardez le même format pour toutes les photos de la boutique : c'est ce qui donne un aspect professionnel.",
        image: {
          src: "/captures/shopify-produit.webp",
          alt: "Formulaire « Ajouter un produit » : titre, description et supports multimédias",
        },
      },
      {
        title: "Fixez le prix, le stock, le poids et les variantes",
        text: "Dans « Prix », indiquez le prix de vente. Le champ « Prix avant réduction » affiche un prix barré : ne l'utilisez que pour une vraie promotion.\n\nDans « Stock », entrez la quantité disponible pour que Shopify arrête la vente quand il n'y a plus rien. Pour un objet à envoyer, indiquez le poids avec l'emballage : c'est lui qui calcule les frais de livraison. Pour un fichier à télécharger, désactivez « Produit physique ».\n\nSi le produit existe en plusieurs tailles ou couleurs, ajoutez des variantes : chacune peut avoir son prix, son stock et sa photo. Réglez enfin le statut sur « Actif » et cliquez sur « Enregistrer ». Répétez l'opération pour vos autres produits.",
        image: {
          src: "/captures/shopify-prix.webp",
          alt: "Sections Prix et Stock de la fiche produit Shopify",
        },
      },
      {
        title: "Choisissez et personnalisez votre thème",
        text: "Le thème décide de l'apparence de toute la boutique. Dans « Boutique en ligne », puis « Thèmes », ou sur themes.shopify.com, filtrez sur les thèmes gratuits : ils sont conçus et mis à jour par Shopify et suffisent largement pour commencer.\n\nChoisissez un thème pour la façon dont il présente les produits, pas pour ses photos de démonstration. Cliquez sur « Ajouter » : le thème arrive dans votre bibliothèque sans remplacer celui qui est en ligne.\n\nCliquez sur « Personnaliser » pour ajouter votre logo, vos couleurs, vos polices et organiser la page d'accueil : une grande image, vos produits phares, une phrase qui dit ce que vous vendez. Regardez toujours l'aperçu sur mobile, puis cliquez sur « Publier ».",
        image: {
          src: "/captures/shopify-themes.webp",
          alt: "Theme Store de Shopify filtrée sur les thèmes gratuits",
        },
      },
      {
        title: "Organisez les menus de la boutique",
        text: "Les menus relient les pages entre elles. Ouvrez « Contenu », puis « Menus ». Deux menus existent déjà : le menu principal, en haut de la boutique, et le menu du pied de page.\n\nDans le menu principal, gardez peu d'entrées : l'accueil, le catalogue ou vos collections, et une page de contact. Dans le pied de page, mettez les pages pratiques : livraison, retours, conditions de vente, mentions légales.\n\nCliquez sur un menu pour ajouter, renommer ou déplacer un élément par glisser-déposer, puis enregistrez.",
        image: {
          src: "/captures/shopify-menus.webp",
          alt: "Contenu > Menus : menu principal, menu de pied de page et menu du compte client",
        },
      },
      {
        title: "Réglez l'expédition et la livraison",
        text: "Cliquez sur « Paramètres », puis sur « Expédition et livraison ». Le « Profil général » s'applique à tous vos produits : ouvrez-le pour voir les zones de livraison (par exemple la Belgique, puis le reste de l'Union européenne) et les tarifs de chaque zone.\n\nPour chaque zone, créez des tarifs simples : un prix fixe, ou un prix selon le poids de la commande. Un tarif « Livraison gratuite » à partir d'un certain montant pousse souvent les clients à ajouter un article.\n\nDans « Emballages », indiquez les dimensions de votre colis habituel : Shopify s'en sert pour estimer les frais. Si vous ne vendez que des produits numériques, vous n'avez pas besoin de tarif d'expédition.",
        image: {
          src: "/captures/shopify-expedition.webp",
          alt: "Paramètres > Expédition et livraison : profil général, dates de livraison estimées et emballages",
        },
      },
      {
        title: "Vérifiez les taxes et la TVA",
        text: "Dans « Paramètres », ouvrez « Taxes et droits de douane ». Le service fiscal de Shopify calcule automatiquement la TVA selon le pays du client, dans les « Régions fiscales » où vous livrez, comme l'Union européenne.\n\nVérifiez que vos régions de livraison apparaissent bien dans la liste. Vos obligations dépendent de votre statut : un indépendant en franchise de TVA ne facture pas la TVA comme une société assujettie.\n\nShopify le dit lui-même sur cet écran : en cas de doute sur vos obligations fiscales, consultez un comptable ou un fiscaliste avant d'ouvrir la boutique.",
        image: {
          src: "/captures/shopify-taxes.webp",
          alt: "Paramètres > Taxes et frais de douane : services fiscaux Shopify actifs et régions fiscales",
        },
      },
      {
        title: "Activez les paiements",
        text: "Dans « Paramètres », puis « Paiements », activez Shopify Payments. Shopify demande des informations sur votre activité et le compte bancaire qui recevra les versements. L'authentification en deux étapes est obligatoire.\n\nAvec Shopify Payments, vous acceptez les cartes et les moyens de paiement locaux sans prestataire externe. Sur le forfait Basic, les frais de carte commencent à 1,8 % + 0,30 € par vente (tarifs affichés en Belgique le 27 septembre 2026). Si vous utilisez un autre prestataire à la place, Shopify ajoute des frais de transaction.\n\nPayPal peut s'ajouter dans « Fournisseurs de services de paiement supplémentaires ».",
        image: {
          src: "/captures/shopify-paiements.webp",
          alt: "Paramètres > Paiements : Shopify Payments, moyens de paiement, versements et PayPal",
        },
      },
      {
        title: "Choisissez les moyens de paiement de vos clients",
        text: "Toujours dans « Paiements », cliquez sur « Moyens de paiement ». Activez ceux que vos clients utilisent vraiment : cartes Visa et Mastercard, Apple Pay, Shop Pay, et Bancontact si vous vendez en Belgique.\n\nLe bouton « Voir les tarifs de paiement » affiche les frais de chaque moyen : certains coûtent plus cher que d'autres. Inutile de tout activer ; trop de logos peut même embrouiller l'acheteur au moment de payer.",
        image: {
          src: "/captures/shopify-moyens-paiement.webp",
          alt: "Liste des moyens de paiement en ligne : Shop Pay, Visa, Mastercard, American Express, Apple Pay",
        },
      },
      {
        title: "Rédigez vos politiques et vos mentions légales",
        text: "Dans « Paramètres », ouvrez « Politiques ». Les politiques écrites s'affichent dans le pied de page du paiement : le client les voit avant d'acheter.\n\nRemplissez au minimum la politique de retour et de remboursement, les conditions de service, la politique d'expédition et la mention légale. Les « Coordonnées » sont marquées « Obligatoire » : ce sont les informations qui permettent au client de vous contacter.\n\nSi Shopify vous propose un modèle de texte, partez de là, mais adaptez-le à votre vraie façon de travailler. En Europe, le client a en général 14 jours pour se rétracter après un achat en ligne. Ajoutez ensuite ces pages au menu du pied de page.",
        image: {
          src: "/captures/shopify-politiques.webp",
          alt: "Paramètres > Politiques : règles de retour et politiques écrites (retour, confidentialité, conditions de service, expédition, coordonnées, mention légale)",
        },
      },
      {
        title: "Créez un code de bienvenue",
        text: "Une petite réduction aide à déclencher la première commande. Cliquez sur « Réductions », puis « Créer une réduction » et choisissez « Montant sur la commande ».\n\nTapez un code facile à retenir, comme BIENVENUE10, puis la valeur : 10 % par exemple. Dans « Utilisations maximales », cochez la limite d'une utilisation par client, sinon le code sert à chaque commande. Enregistrez : le code fonctionne tout de suite au paiement.\n\nCe code servira aussi sur vos pages de promotion et sur vos réseaux sociaux.",
        image: {
          src: "/captures/shopify-reduction.webp",
          alt: "Formulaire « Créer une réduction » avec le code BIENVENUE10 à 10 % sur la commande",
        },
      },
      {
        title: "Passez une commande test",
        text: "Avant d'ouvrir, achetez vous-même dans votre boutique, comme un vrai client : sur téléphone, en passant par la page d'accueil, un produit, le panier et le paiement, avec votre code de réduction.\n\nVérifiez à chaque étape : les frais de livraison sont-ils justes ? La TVA s'affiche-t-elle correctement ? L'e-mail de confirmation arrive-t-il, et donne-t-il envie de revenir ? Vous pouvez passer une vraie commande avec votre carte, puis l'annuler et la rembourser depuis « Commandes ».\n\nCorrigez tout ce qui vous a fait hésiter : si vous avez hésité, vos clients aussi.",
      },
      {
        title: "Choisissez un forfait",
        text: "Pour garder la boutique après l'essai, choisissez un forfait dans « Paramètres », puis « Forfait ». Pour une personne seule, Basic suffit presque toujours : au 27 septembre 2026, il coûte 27 € par mois en paiement mensuel, ou l'équivalent de 19 € par mois en paiement annuel.\n\nL'offre de lancement à 1 € par mois s'applique alors pendant 3 mois, puis le prix normal commence. Grow et Advanced servent surtout aux équipes et aux gros volumes : vous pourrez changer de forfait plus tard, quand vos ventes le justifient.\n\nN'oubliez pas que les applications payantes s'ajoutent au prix du forfait.",
        image: {
          src: "/captures/shopify-offres.webp",
          alt: "Les forfaits Shopify Basic, Grow, Advanced et Plus sur la page des tarifs",
        },
      },
      {
        title: "Connectez votre nom de domaine",
        text: "Votre boutique a déjà une adresse gratuite en .myshopify.com, mais votre propre domaine inspire plus confiance. Dans « Paramètres », puis « Domaines », choisissez « Connecter un domaine existant », « Transférer un domaine » ou « Acheter un nouveau domaine ».\n\nPour beaucoup d'hébergeurs de domaine, Shopify fait la connexion automatiquement. Sinon, il vous indique les enregistrements DNS à modifier chez votre hébergeur. La connexion prend souvent moins de deux heures, parfois jusqu'à deux jours. Le certificat HTTPS est gratuit.\n\nSi plusieurs domaines sont reliés, choisissez celui que les clients verront comme « Principal ».",
        image: {
          src: "/captures/shopify-domaines.webp",
          alt: "Paramètres > Domaines avec les domaines connectés",
        },
      },
      {
        title: "Ouvrez la boutique au public",
        text: "Tant que la boutique est en préparation, elle est protégée par un mot de passe. Pour l'ouvrir, allez dans « Boutique en ligne », puis « Préférences ». Dans « Accès à la boutique », désactivez « Mode privé » : la boutique devient visible pour tout le monde.\n\nSur la même page, remplissez le titre et la méta-description de la page d'accueil : c'est ce que Google et les réseaux sociaux affichent quand quelqu'un partage votre boutique.\n\nL'accueil de l'administration affiche alors « La boutique est en ligne », avec le nombre de visites et de visiteurs en direct.",
        image: {
          src: "/captures/shopify-acces-boutique.webp",
          alt: "Boutique en ligne > Préférences : section Accès à la boutique avec l'option Mode privé",
        },
      },
      {
        title: "Attirez vos premiers clients",
        text: "Une boutique en ligne ne reçoit pas de visites toute seule. Choisissez un produit phare et une offre (votre code de bienvenue), puis créez une landing page qui ne parle que de cette offre, avec HTML Pub ou Leadpages.\n\nPartagez l'adresse de cette page sur vos réseaux, dans votre bio, sur Pinterest ou dans vos publicités. Le bouton de la page mène directement à la fiche produit Shopify, pas à l'accueil de la boutique.\n\nRegardez chaque semaine combien de visiteurs arrivent et combien achètent, et améliorez la page qui convertit le moins. Le guide express « attirer des clients avec une landing page » détaille cette étape.",
        image: {
          src: "/captures/creer-page-ia.webp",
          alt: "Création d'une landing page avec l'IA : l'assistant demande « What are you making? »",
        },
      },
    ],
    pitfalls: [
      "Passer les 3 jours d'essai à régler des détails sans avoir ajouté un seul produit.",
      "Ouvrir la boutique sans commande test : c'est le client qui découvre les frais de livraison faux.",
      "Laisser les politiques vides : retours, conditions de vente et coordonnées rassurent l'acheteur au moment de payer.",
      "Oublier que le prix normal du forfait commence après les 3 mois à 1 €.",
      "Remplir le menu principal de dizaines de liens : le visiteur ne sait plus où cliquer.",
    ],
    tools: [
      { slug: "shopify", why: "La boutique, les paiements et les commandes au même endroit." },
      { slug: "html-pub", why: "Des pages de promotion créées avec l'IA, qui envoient vers vos produits Shopify." },
      { slug: "leadpages", why: "Des landing pages avec formulaires et tests A/B pour attirer les premiers clients." },
    ],
    sources: [
      { label: "Shopify : tarifs", url: "https://www.shopify.com/fr/tarifs" },
      { label: "Aide Shopify : ajouter des produits", url: "https://help.shopify.com/fr/manual/products/add-update-products" },
      { label: "Aide Shopify : Shopify Payments", url: "https://help.shopify.com/fr/manual/payments/shopify-payments" },
      { label: "Aide Shopify : connecter un domaine", url: "https://help.shopify.com/fr/manual/domains/add-a-domain/connecting-domains" },
      { label: "Aide Shopify (accueil)", url: "https://help.shopify.com/fr" },
    ],
    related: [
      "creer-sa-boutique-shopify",
      "essayer-shopify-gratuitement",
      "ajouter-un-produit-shopify",
      "ajouter-des-variantes-shopify",
      "accepter-les-paiements-shopify",
      "attirer-des-clients-avec-une-landing-page",
    ],
  },
  {
    slug: "creer-sa-boutique-shopify",
    question: "Comment créer sa boutique Shopify ?",
    summary: "De l'inscription à la boutique en ligne : compte, thème, produits et paiements, dans l'ordre.",
    theme: "boutique",
    publishedOn: "2026-09-27",
    updatedOn: "2026-09-27",
    popular: true,
    intro:
      "Créer une boutique Shopify prend une heure pour une première version. L'administration vous guide, et l'assistant IA Sidekick répond à vos questions.",
    steps: [
      {
        title: "Créez votre compte",
        text: "Sur shopify.com, cliquez sur « Démarrer gratuitement », entrez votre e-mail et répondez aux questions sur votre projet.",
      },
      {
        title: "Découvrez l'administration",
        text: "Le menu de gauche regroupe tout : Commandes, Produits, Clients, Réductions, Boutique en ligne et Paramètres. L'accueil affiche l'état de la boutique et une barre pour demander de l'aide à Sidekick.",
        image: { src: "/captures/shopify-accueil.webp", alt: "Accueil de l'administration Shopify avec le menu et Sidekick" },
      },
      {
        title: "Ajoutez vos premiers produits",
        text: "Dans « Produits », ajoutez au moins un produit avec photo, description et prix.",
      },
      {
        title: "Choisissez un thème",
        text: "Dans « Boutique en ligne », choisissez un thème et personnalisez les couleurs, le logo et la page d'accueil.",
      },
      {
        title: "Réglez paiements et livraison",
        text: "Dans « Paramètres », configurez les paiements, l'expédition et les taxes pour votre pays.",
      },
      {
        title: "Mettez la boutique en ligne",
        text: "Choisissez un forfait, reliez votre nom de domaine, puis retirez le mot de passe de la boutique pour l'ouvrir au public.",
      },
    ],
    pitfalls: ["Ouvrir la boutique sans avoir testé une commande de bout en bout.", "Oublier les pages légales (conditions de vente, remboursement, confidentialité)."],
    tools: [{ slug: "shopify", why: "Boutique en ligne complète, avec assistant IA intégré." }],
    sources: [{ label: "Centre d'aide Shopify", url: "https://help.shopify.com/fr" }, { label: "Shopify : tarifs", url: "https://www.shopify.com/fr/tarifs" }],
    related: ["creer-sa-boutique-shopify-de-a-a-z", "ajouter-un-produit-shopify", "creer-un-tunnel-de-vente-avec-leadpages-et-shopify-de-a-a-z", "connecter-son-domaine-shopify", "choisir-un-theme-shopify"],
  },
  {
    slug: "ajouter-un-produit-shopify",
    question: "Comment ajouter un produit sur Shopify ?",
    summary: "Titre, photos, prix, stock et expédition : la fiche produit remplie correctement.",
    theme: "boutique",
    publishedOn: "2026-09-27",
    updatedOn: "2026-09-27",
    intro:
      "Une bonne fiche produit fait vendre. Shopify vous guide champ par champ ; les changements enregistrés s'affichent tout de suite dans la boutique.",
    steps: [
      {
        title: "Ouvrez « Ajouter un produit »",
        text: "Dans le menu de gauche, cliquez sur « Produits », puis sur « Ajouter un produit ».",
        image: { src: "/captures/shopify-produit.webp", alt: "Formulaire « Ajouter un produit » : titre, description, supports multimédias" },
      },
      {
        title: "Écrivez le titre et la description",
        text: "Un titre clair, puis une description qui répond aux questions de l'acheteur : matière, taille, usage, délai.",
      },
      {
        title: "Ajoutez les photos",
        text: "Dans « Supports multimédias », cliquez sur « Importer ». Les images, vidéos et modèles 3D sont acceptés.",
      },
      {
        title: "Fixez le prix et le stock",
        text: "Indiquez le prix, et si vous voulez un « Prix avant réduction ». Dans « Stock », entrez la quantité disponible.",
        image: { src: "/captures/shopify-prix.webp", alt: "Sections Prix et Stock de la fiche produit" },
      },
      {
        title: "Réglez l'expédition et les variantes",
        text: "Pour un produit physique, indiquez le poids. Ajoutez des variantes (taille, couleur) si besoin. Pour un fichier numérique, désactivez « Produit physique ».",
      },
      {
        title: "Choisissez le statut et enregistrez",
        text: "Le statut « Actif » rend le produit visible. Cliquez sur « Enregistrer ».",
      },
    ],
    pitfalls: ["Laisser le poids à 0 : les frais de livraison seront faux.", "Des photos de tailles différentes : la boutique paraît moins professionnelle."],
    tools: [{ slug: "shopify", why: "Produits illimités sur tous les forfaits." }],
    sources: [{ label: "Shopify : ajouter et mettre à jour des produits", url: "https://help.shopify.com/fr/manual/products/add-update-products" }],
    related: ["creer-une-page-de-vente-pour-un-produit-shopify", "creer-sa-boutique-shopify", "creer-un-code-de-reduction-shopify", "regler-l-expedition-shopify", "ajouter-des-variantes-shopify"],
  },
  {
    slug: "ajouter-des-variantes-shopify",
    question: "Comment ajouter des variantes (taille, couleur) à un produit Shopify ?",
    summary: "Un seul produit, plusieurs tailles ou couleurs, chacune avec son prix, son stock et sa photo.",
    theme: "boutique",
    publishedOn: "2026-09-28",
    updatedOn: "2026-09-28",
    intro:
      "Un t-shirt en trois tailles et deux couleurs, c'est un seul produit avec six variantes. Le client choisit sur la fiche produit, et vous suivez le stock de chaque variante.",
    steps: [
      {
        title: "Ouvrez le produit",
        text: "Dans le menu de gauche, cliquez sur « Produits », puis sur le produit à modifier, ou sur « Ajouter un produit » pour en créer un. Remplissez d'abord le titre, la description et les photos.",
        image: { src: "/captures/shopify-produit.webp", alt: "Fiche « Ajouter un produit » dans l'administration Shopify" },
      },
      {
        title: "Ajoutez une option",
        text: "Descendez jusqu'à la section « Variantes » et cliquez sur « Ajouter des options comme la taille ou la couleur ». Dans « Nom de l'option », tapez par exemple « Taille ».",
      },
      {
        title: "Entrez les valeurs",
        text: "Dans « Valeurs de l'option », tapez une valeur par ligne : S, puis M, puis L. Cliquez sur « Terminé ». Ajoutez une deuxième option, comme « Couleur », de la même façon : Shopify crée toutes les combinaisons.\n\nUn produit peut avoir jusqu'à 3 options (par exemple taille, couleur et matière).",
      },
      {
        title: "Réglez le prix et le stock de chaque variante",
        text: "Shopify affiche la liste des variantes. Cliquez sur une variante pour changer son prix (un XL peut coûter plus cher), sa référence (SKU) et sa quantité en stock. Utilisez « Grouper par » pour modifier toutes les variantes d'une couleur d'un coup.",
        image: { src: "/captures/shopify-prix.webp", alt: "Sections Prix et Stock, à remplir pour chaque variante" },
      },
      {
        title: "Associez une photo à chaque couleur",
        text: "Dans la liste des variantes, cliquez sur le carré d'image d'une variante et choisissez la photo qui correspond. Quand le client choisit « Bleu », la photo bleue s'affiche.",
      },
      {
        title: "Enregistrez et vérifiez dans la boutique",
        text: "Cliquez sur « Enregistrer », puis ouvrez le produit dans votre boutique : les sélecteurs de taille et de couleur apparaissent sur la fiche. Testez une variante en rupture de stock pour voir ce que voit le client.",
      },
    ],
    pitfalls: [
      "Créer un produit séparé pour chaque taille : le client ne voit plus les autres tailles et vos statistiques sont éparpillées.",
      "Oublier le stock d'une variante : elle s'affiche disponible alors qu'elle ne l'est pas, ou reste bloquée à 0.",
      "Laisser la même photo pour toutes les couleurs : le client ne voit pas ce qu'il achète.",
    ],
    tools: [{ slug: "shopify", why: "Jusqu'à 3 options par produit, sur tous les forfaits." }],
    sources: [
      { label: "Shopify : variantes de produit (aide)", url: "https://help.shopify.com/fr/manual/products/variants" },
      { label: "Shopify : ajouter et mettre à jour des produits", url: "https://help.shopify.com/fr/manual/products/add-update-products" },
    ],
    related: ["ajouter-un-produit-shopify", "regler-l-expedition-shopify", "creer-un-code-de-reduction-shopify"],
  },
  {
    slug: "ajouter-un-formulaire-de-contact-shopify",
    question: "Comment ajouter un formulaire de contact sur Shopify ?",
    summary: "Une page « Contact » avec formulaire, reliée au menu, et des messages qui arrivent bien dans votre boîte.",
    theme: "boutique",
    publishedOn: "2026-09-28",
    updatedOn: "2026-09-28",
    intro:
      "Avant d'acheter, beaucoup de clients veulent savoir qu'ils peuvent vous écrire. Shopify a un modèle de page « contact » tout prêt : il suffit de créer la page, de choisir ce modèle et de l'ajouter au menu. Aucun code, aucune application.",
    steps: [
      {
        title: "Créez une page",
        text: "Dans l'administration, cliquez sur « Boutique en ligne », puis sur « Pages » (selon la version, « Pages » peut se trouver dans « Contenu »). Cliquez sur « Ajouter une page » et donnez-lui le titre « Contact ».",
      },
      {
        title: "Écrivez un court texte",
        text: "Dans le contenu, dites en deux phrases quand vous répondez (par exemple « sous 24 heures, du lundi au vendredi ») et pour quoi écrire : commande, retour, question sur un produit.",
      },
      {
        title: "Choisissez le modèle « contact »",
        text: "À droite, dans « Modèle de thème », choisissez « contact ». C'est ce modèle qui ajoute le formulaire (nom, e-mail, téléphone, message) sous votre texte. Vérifiez que la visibilité est sur « Visible », puis cliquez sur « Enregistrer ».",
      },
      {
        title: "Ajoutez la page au menu",
        text: "Dans « Contenu », puis « Menus », ouvrez le menu principal ou celui du pied de page. Cliquez sur « Ajouter un élément de menu », écrivez « Contact » et choisissez la page « Contact » comme destination. Enregistrez.",
        image: {
          src: "/captures/shopify-menus.webp",
          alt: "Contenu > Menus : menu principal et menu du pied de page, où ajouter le lien « Contact »",
        },
      },
      {
        title: "Vérifiez où arrivent les messages",
        text: "Les messages du formulaire partent vers l'adresse e-mail de la boutique, indiquée dans « Paramètres ». Vérifiez qu'elle est juste, puis envoyez-vous un message de test depuis la page : il doit arriver dans votre boîte (regardez aussi les indésirables).",
      },
      {
        title: "Gardez la protection contre le spam",
        text: "Dans « Boutique en ligne », puis « Préférences », la section « Protection contre le spam » active hCaptcha sur le formulaire de contact. Laissez-la activée : elle bloque les messages automatiques sans gêner les vrais clients.",
      },
    ],
    pitfalls: [
      "Créer la page sans choisir le modèle « contact » : la page s'affiche, mais sans formulaire.",
      "Ne jamais tester le formulaire : si l'adresse e-mail de la boutique est fausse, les messages des clients se perdent.",
      "Cacher la page : sans lien dans le menu ou le pied de page, personne ne la trouve.",
    ],
    tools: [{ slug: "shopify", why: "Page de contact avec formulaire incluse dans tous les thèmes gratuits." }],
    sources: [
      { label: "Aide Shopify : ajouter une page de contact", url: "https://help.shopify.com/fr/manual/online-store/themes/customizing-themes/add-contact-page" },
      { label: "Aide Shopify : modifier les menus", url: "https://help.shopify.com/fr/manual/online-store/menus-and-links/editing-menus" },
    ],
    related: ["creer-un-menu-shopify", "rediger-les-politiques-shopify", "ouvrir-sa-boutique-shopify-au-public"],
  },
  {
    slug: "connecter-son-domaine-shopify",
    question: "Comment connecter son nom de domaine à Shopify ?",
    summary: "Utiliser votre propre adresse au lieu de l'adresse en myshopify.com.",
    theme: "boutique",
    publishedOn: "2026-09-27",
    updatedOn: "2026-09-27",
    intro:
      "Chaque boutique a une adresse gratuite en .myshopify.com. Avec votre propre domaine, elle inspire plus confiance. Le certificat SSL (HTTPS) est gratuit.",
    steps: [
      {
        title: "Ouvrez « Domaines »",
        text: "Cliquez sur « Paramètres » en bas à gauche, puis sur « Domaines ». Trois choix : « Connecter un domaine existant », « Transférer un domaine » ou « Acheter un nouveau domaine ».",
        image: { src: "/captures/shopify-domaines.webp", alt: "Paramètres > Domaines avec les domaines connectés" },
      },
      {
        title: "Connectez un domaine existant",
        text: "Cliquez sur « Connecter un domaine existant » et entrez votre domaine. Pour de nombreux hébergeurs de domaine, Shopify propose une connexion automatique.",
      },
      {
        title: "Sinon, modifiez les DNS à la main",
        text: "Chez votre hébergeur de domaine, mettez à jour les enregistrements indiqués par Shopify (enregistrement A et CNAME pour www).",
      },
      {
        title: "Attendez la vérification",
        text: "La connexion fonctionne souvent en moins de deux heures, mais peut prendre jusqu'à deux jours. Le statut passe à « Connecté ».",
      },
      {
        title: "Choisissez le domaine principal",
        text: "Si plusieurs domaines sont reliés, marquez celui que les clients verront comme « Principal ».",
      },
    ],
    pitfalls: ["Supprimer d'anciens enregistrements DNS utilisés par vos e-mails.", "Oublier que le renouvellement du domaine se fait chez votre hébergeur, pas chez Shopify."],
    tools: [{ slug: "shopify", why: "Domaine personnalisé et SSL gratuit inclus." }],
    sources: [{ label: "Shopify : connecter un domaine tiers", url: "https://help.shopify.com/fr/manual/domains/add-a-domain/connecting-domains" }],
    related: ["ouvrir-sa-boutique-shopify-au-public", "creer-sa-boutique-shopify", "connecter-son-nom-de-domaine-leadpages"],
  },
  {
    slug: "accepter-les-paiements-shopify",
    question: "Comment accepter les paiements sur Shopify ?",
    summary: "Shopify Payments, Bancontact, PayPal : les réglages et les frais à connaître.",
    theme: "boutique",
    publishedOn: "2026-09-27",
    updatedOn: "2026-09-27",
    intro:
      "Shopify Payments permet d'accepter les cartes, Bancontact, Apple Pay et d'autres moyens de paiement sans prestataire externe. C'est aussi ce qui évite les frais de transaction supplémentaires.",
    steps: [
      {
        title: "Ouvrez « Paiements »",
        text: "Cliquez sur « Paramètres », puis sur « Paiements ». Vous y voyez l'état de Shopify Payments, vos moyens de paiement, vos versements et les prestataires supplémentaires comme PayPal.",
        image: { src: "/captures/shopify-paiements.webp", alt: "Paramètres > Paiements : Shopify Payments, moyens de paiement, versements et PayPal" },
      },
      {
        title: "Activez Shopify Payments",
        text: "Suivez la configuration : informations sur votre activité et compte bancaire pour recevoir les versements. L'authentification en deux étapes est demandée.",
      },
      {
        title: "Choisissez les moyens de paiement",
        text: "Cliquez sur « Moyens de paiement » et activez ceux que vos clients utilisent : cartes, Shop Pay, Apple Pay, Bancontact en Belgique, Klarna, etc. Le bouton « Voir les tarifs de paiement » affiche les frais de chaque moyen.",
        image: { src: "/captures/shopify-moyens-paiement.webp", alt: "Liste des moyens de paiement en ligne : Shop Pay, Visa, Mastercard, American Express, Apple Pay" },
      },
      {
        title: "Ajoutez PayPal si besoin",
        text: "Dans « Fournisseurs de services de paiement supplémentaires », vous pouvez ajouter PayPal ou d'autres prestataires.",
      },
      {
        title: "Passez une commande test",
        text: "Avant d'ouvrir la boutique, faites un achat test pour vérifier que tout fonctionne.",
      },
    ],
    pitfalls: ["Utiliser un autre prestataire à la place de Shopify Payments sans savoir que Shopify ajoute des frais de transaction (jusqu'à 2 % sur Basic).", "Ne pas activer Bancontact alors que vos clients sont en Belgique."],
    tools: [{ slug: "shopify", why: "Shopify Payments inclus, frais dégressifs selon le forfait." }],
    sources: [{ label: "Shopify Payments (aide)", url: "https://help.shopify.com/fr/manual/payments/shopify-payments" }, { label: "Shopify : tarifs", url: "https://www.shopify.com/fr/tarifs" }],
    related: ["ouvrir-sa-boutique-shopify-au-public", "choisir-son-forfait-shopify", "ajouter-un-produit-shopify"],
  },  {
    slug: "choisir-un-theme-shopify",
    question: "Comment choisir et installer un thème gratuit sur Shopify ?",
    summary: "Trouver un thème gratuit dans la Theme Store, l'essayer, puis le publier.",
    theme: "boutique",
    publishedOn: "2026-09-27",
    updatedOn: "2026-09-27",
    intro:
      "Le thème décide de l'apparence de votre boutique. Shopify propose des thèmes gratuits, conçus et maintenus par Shopify : c'est le meilleur point de départ.",
    steps: [
      {
        title: "Ouvrez la Theme Store",
        text: "Allez sur themes.shopify.com ou, dans l'administration, sur « Boutique en ligne » puis « Thèmes ». Dans le filtre « Price », cochez « Free » pour ne voir que les thèmes gratuits.",
        image: { src: "/captures/shopify-themes.webp", alt: "Theme Store de Shopify filtrée sur les thèmes gratuits : Horizon, Colorblock, Tinker" },
      },
      {
        title: "Filtrez selon votre activité",
        text: "Utilisez le filtre « Industry » (vêtements, beauté, maison, alimentation…) et regardez surtout comment le thème présente les produits, pas les photos de démonstration.",
      },
      {
        title: "Ajoutez le thème à votre boutique",
        text: "Ouvrez la fiche du thème et cliquez sur « Ajouter ». Il arrive dans votre bibliothèque de thèmes, sans remplacer celui qui est en ligne.",
      },
      {
        title: "Prévisualisez et personnalisez",
        text: "Cliquez sur « Personnaliser » : ajoutez votre logo, vos couleurs, vos polices et les sections de la page d'accueil. Vérifiez aussi l'aperçu sur mobile.",
      },
      {
        title: "Publiez-le",
        text: "Quand tout vous convient, cliquez sur « Publier ». Un seul thème est en ligne à la fois ; l'ancien reste dans la bibliothèque et vous pouvez revenir en arrière.",
      },
    ],
    pitfalls: [
      "Acheter un thème payant dès le départ : les thèmes gratuits suffisent pour une première boutique.",
      "Publier sans avoir vérifié l'affichage sur téléphone, alors que la majorité des visites viennent du mobile.",
    ],
    tools: [{ slug: "shopify", why: "Thèmes gratuits conçus et mis à jour par Shopify." }],
    sources: [
      { label: "Shopify : ajouter et prévisualiser des thèmes", url: "https://help.shopify.com/fr/manual/online-store/themes/adding-themes" },
      { label: "Shopify : publier un thème", url: "https://help.shopify.com/fr/manual/online-store/themes/managing-themes/publishing-themes" },
      { label: "Shopify Theme Store", url: "https://themes.shopify.com/themes?price%5B%5D=free" },
    ],
    related: ["creer-sa-boutique-shopify", "ajouter-un-produit-shopify", "creer-un-menu-shopify"],
  },
  {
    slug: "creer-un-code-de-reduction-shopify",
    question: "Comment créer un code de réduction sur Shopify ?",
    summary: "Un code promo en pourcentage ou en montant fixe, avec ses conditions et ses limites.",
    theme: "boutique",
    publishedOn: "2026-09-27",
    updatedOn: "2026-09-27",
    intro:
      "Un code de réduction aide à déclencher une première commande. Sur Shopify, il se crée en quelques minutes et s'applique au moment du paiement.",
    steps: [
      {
        title: "Ouvrez « Réductions »",
        text: "Dans le menu de gauche, cliquez sur « Réductions », puis sur « Créer une réduction ».",
      },
      {
        title: "Choisissez le type de réduction",
        text: "Quatre choix : « Montant sur les produits », « Achetez X, obtenez Y », « Montant sur la commande » ou « Expédition gratuite ». Pour un code de bienvenue, prenez « Montant sur la commande ».",
      },
      {
        title: "Écrivez le code et sa valeur",
        text: "Gardez la méthode « Code de réduction », tapez un code facile à retenir (par exemple BIENVENUE10), puis choisissez « Pourcentage » ou « Montant fixe » et la valeur. Le résumé à droite se met à jour tout de suite.",
        image: { src: "/captures/shopify-reduction.webp", alt: "Formulaire « Créer une réduction » avec le code BIENVENUE10 et 10 % de réduction sur la commande" },
      },
      {
        title: "Fixez les conditions",
        text: "« Admissibilité » : tous les clients ou certains seulement. « Exigences minimales d'achat » : un montant ou un nombre d'articles minimum. « Utilisations maximales » : limitez le nombre total d'utilisations ou une seule utilisation par client.",
      },
      {
        title: "Choisissez les dates et enregistrez",
        text: "Indiquez une date de début et, si vous voulez, une date de fin. Cliquez sur « Enregistrer » : le code apparaît dans la liste des réductions.",
      },
    ],
    pitfalls: [
      "Oublier « Limiter à une utilisation par client » pour un code de bienvenue : il peut alors être utilisé à chaque commande.",
      "Diffuser le code sans l'avoir testé dans une commande test.",
    ],
    tools: [{ slug: "shopify", why: "Codes de réduction et réductions automatiques inclus dans tous les forfaits." }],
    sources: [
      { label: "Shopify : réductions en pourcentage ou montant fixe", url: "https://help.shopify.com/fr/manual/discounts/discount-types/percentage-fixed-amount" },
    ],
    related: ["attirer-des-clients-avec-une-landing-page", "accepter-les-paiements-shopify"],
  },
  {
    slug: "connecter-html-pub-a-shopify",
    question: "Comment relier HTML Pub ou Leadpages à Shopify ?",
    summary: "Le connecteur Shopify de HTML Pub, et les boutons qui envoient vers votre boutique.",
    theme: "boutique",
    publishedOn: "2026-09-27",
    updatedOn: "2026-09-27",
    intro:
      "Vos pages HTML Pub ou Leadpages attirent les visiteurs, Shopify encaisse les ventes. Deux liens sont possibles : le connecteur Shopify, et des boutons qui mènent au paiement Shopify.",
    steps: [
      {
        title: "Ouvrez « Connectors »",
        text: "Dans le menu de votre espace HTML Pub, cliquez sur « Connectors » et tapez « Shopify » dans la recherche. La carte Shopify sert à envoyer les données clients de votre checkout HTML Pub vers Shopify.",
      },
      {
        title: "Indiquez l'adresse de votre boutique",
        text: "Cliquez sur « Connect », entrez l'adresse en .myshopify.com de votre boutique, puis sur « Connect Shopify ». Validez ensuite l'autorisation dans Shopify.",
        image: { src: "/captures/htmlpub-shopify.webp", alt: "Connectors HTML Pub : carte Shopify avec le champ « Your Shopify store domain »" },
      },
      {
        title: "Ajoutez un bouton vers Shopify",
        text: "Pour vendre un produit depuis une page, ajoutez un bouton et, dans son action de clic, choisissez un lien externe : collez l'adresse du produit ou un lien de paiement Shopify.",
      },
      {
        title: "Ou collez un Buy Button Shopify",
        text: "Dans Shopify, ajoutez le canal de vente « Buy Button », créez un bouton pour un produit, copiez son code HTML et collez-le dans un bloc HTML de votre page.",
      },
      {
        title: "Testez le parcours complet",
        text: "Publiez la page, cliquez sur le bouton et allez jusqu'au paiement pour vérifier que le bon produit s'ouvre.",
      },
    ],
    pitfalls: [
      "Croire que Leadpages compte les ventes Shopify : ses statistiques s'arrêtent au clic sur le bouton.",
      "Entrer votre propre nom de domaine au lieu de l'adresse en .myshopify.com dans le connecteur.",
    ],
    tools: [
      { slug: "html-pub", why: "Connecteur Shopify dans « Connectors »." },
      { slug: "shopify", why: "Encaisse les commandes venues de vos pages." },
    ],
    sources: [
      { label: "Leadpages : accepter des achats Shopify", url: `${help}4407720741517-Accept-Shopify-purchases-with-Leadpages` },
      { label: "Leadpages : intégration Shopify", url: "https://leadpages.com/integrations/shopify" },
    ],
    related: ["creer-une-page-de-vente-pour-un-produit-shopify", "attirer-des-clients-avec-une-landing-page", "connecter-leadpages-a-son-outil-e-mail", "creer-un-tunnel-de-vente-avec-leadpages-et-shopify-de-a-a-z"],
  },
  {
    slug: "attirer-des-clients-avec-une-landing-page",
    question: "Comment attirer des clients vers sa boutique Shopify avec une landing page ?",
    summary: "Une page simple, une offre claire, un formulaire, puis un lien vers votre boutique.",
    theme: "boutique",
    publishedOn: "2026-09-27",
    updatedOn: "2026-09-27",
    popular: true,
    intro:
      "Une landing page présente une seule offre à un seul public. Elle transforme les visiteurs venus des réseaux ou d'une publicité en contacts, puis en clients de votre boutique.",
    steps: [
      {
        title: "Choisissez une seule offre",
        text: "Un produit phare ou une réduction de bienvenue. Créez d'abord le code dans Shopify, par exemple 10 % sur la première commande : c'est la raison de laisser son e-mail.",
        image: { src: "/captures/shopify-reduction.webp", alt: "Code de bienvenue BIENVENUE10 créé dans Shopify" },
      },
      {
        title: "Créez la page avec l'IA",
        text: "Dans HTML Pub ou Leadpages, cliquez sur « Create » et décrivez la page : le produit, le public, l'offre et le bouton attendu. Gardez un titre court, trois avantages et une photo du produit.",
        image: { src: "/captures/creer-page-ia.webp", alt: "Écran Create : l'assistant demande « What are you making? »" },
      },
      {
        title: "Ajoutez un formulaire et un bouton",
        text: "Un formulaire pour récolter l'e-mail en échange du code, et un bouton qui mène au produit ou à la boutique Shopify.",
      },
      {
        title: "Reliez la page à vos outils",
        text: "Dans « Connectors », envoyez les contacts vers votre outil e-mail et reliez Shopify pour retrouver vos clients au même endroit.",
        image: { src: "/captures/htmlpub-shopify.webp", alt: "Connecteur Shopify dans HTML Pub" },
      },
      {
        title: "Envoyez du trafic et mesurez",
        text: "Partagez l'adresse de la page dans vos publications, votre bio et vos publicités. Regardez le taux de conversion de la page ; avec Leadpages, testez deux titres avec un test A/B.",
      },
    ],
    pitfalls: [
      "Mettre toute la boutique sur la page : une landing page = une offre, un bouton.",
      "Envoyer le trafic vers la page d'accueil de la boutique au lieu de la page du produit mis en avant.",
      "Promettre un code de réduction qui n'existe pas encore dans Shopify.",
    ],
    tools: [
      { slug: "html-pub", why: "Pour créer et publier la landing page rapidement." },
      { slug: "leadpages", why: "Pour tester vos titres et améliorer la conversion." },
      { slug: "shopify", why: "Pour encaisser les commandes." },
    ],
    sources: [
      { label: "Leadpages : accepter des achats Shopify", url: `${help}4407720741517-Accept-Shopify-purchases-with-Leadpages` },
      { label: "Shopify : codes de réduction", url: "https://help.shopify.com/fr/manual/discounts/discount-types/percentage-fixed-amount" },
    ],
    related: ["creer-un-code-de-reduction-shopify", "connecter-html-pub-a-shopify", "creer-une-landing-page-avec-l-ia", "creer-une-pub-video-avec-ad-studio", "creer-un-tunnel-de-vente-avec-leadpages-et-shopify-de-a-a-z"],
  },
  {
    slug: "creer-une-page-de-vente-pour-un-produit-shopify",
    question: "Comment créer une page de vente pour un produit Shopify ?",
    summary: "Une page d'une seule offre, créée avec l'IA de HTML Pub, qui envoie vers votre produit Shopify.",
    theme: "boutique",
    publishedOn: "2026-09-27",
    updatedOn: "2026-09-27",
    intro:
      "Une fiche produit Shopify montre le produit ; une page de vente le raconte. Elle sert surtout quand vous faites de la publicité ou des vidéos pour un produit précis.",
    steps: [
      {
        title: "Préparez le produit dans Shopify",
        text: "Le produit doit être actif, avec ses photos, son prix et son stock. Ouvrez-le dans votre boutique en ligne et copiez l'adresse de la page : c'est là que mènera le bouton.",
      },
      {
        title: "Décrivez la page à l'IA",
        text: "Dans HTML Pub ou Leadpages, créez une page avec l'IA et décrivez-la précisément : le produit, pour qui il est fait, 3 avantages, des avis clients, des questions fréquentes et un bouton « Acheter maintenant ».",
        image: { src: "/captures/htmlpub-page-de-vente.webp", alt: "Description d'une page de vente pour un produit Shopify dans l'assistant IA de HTML Pub" },
      },
      {
        title: "Reliez le bouton au produit",
        text: "Dans l'éditeur, choisissez l'action du bouton « lien externe » et collez l'adresse du produit Shopify. Vous pouvez aussi coller un Buy Button Shopify dans un bloc HTML.",
      },
      {
        title: "Ajoutez une raison d'acheter maintenant",
        text: "Un code de réduction limité dans le temps, la livraison offerte ou un bonus. Créez-le d'abord dans Shopify pour qu'il fonctionne au paiement.",
        image: { src: "/captures/shopify-reduction.webp", alt: "Création du code de réduction BIENVENUE10 dans Shopify" },
      },
      {
        title: "Publiez et testez sur téléphone",
        text: "Publiez la page, ouvrez-la sur votre téléphone, cliquez sur le bouton et allez jusqu'au paiement. Partagez ensuite l'adresse de la page dans vos publicités et vos vidéos.",
      },
    ],
    pitfalls: [
      "Plusieurs produits et plusieurs boutons sur la même page : le visiteur hésite et ne clique pas.",
      "Un bouton qui mène à la page d'accueil de la boutique au lieu du produit.",
      "Des avis clients inventés : n'utilisez que de vrais avis.",
    ],
    tools: [
      { slug: "html-pub", why: "Créer la page de vente avec l'IA en quelques minutes." },
      { slug: "shopify", why: "Encaisser la commande et gérer la livraison." },
    ],
    sources: [
      { label: "Leadpages : accepter des achats Shopify", url: `${help}4407720741517-Accept-Shopify-purchases-with-Leadpages` },
      { label: "Shopify : ajouter des produits", url: "https://help.shopify.com/fr/manual/products/add-update-products" },
    ],
    related: ["connecter-html-pub-a-shopify", "attirer-des-clients-avec-une-landing-page", "creer-un-code-de-reduction-shopify"],
  },
  {
    slug: "regler-l-expedition-shopify",
    question: "Comment régler les frais de livraison sur Shopify ?",
    summary: "Zones de livraison, tarifs fixes ou selon le poids, et livraison gratuite dès un montant.",
    theme: "boutique",
    publishedOn: "2026-09-27",
    updatedOn: "2026-09-27",
    intro:
      "Les frais de livraison se règlent une seule fois, par zone de livraison. Des tarifs simples et justes évitent les paniers abandonnés au moment de payer.",
    steps: [
      {
        title: "Ouvrez « Expédition et livraison »",
        text: "Dans l'administration, cliquez sur « Paramètres », en bas à gauche, puis sur « Expédition et livraison ». Le « Profil général » s'applique à tous vos produits : c'est lui que vous allez régler.",
        image: {
          src: "/captures/shopify-expedition.webp",
          alt: "Paramètres > Expédition et livraison : profil général, dates de livraison estimées et emballages",
        },
      },
      {
        title: "Créez vos zones de livraison",
        text: "Une zone regroupe les pays qui ont les mêmes tarifs. Commencez simple : une zone pour votre pays, puis une zone pour le reste de l'Union européenne si vous livrez à l'étranger. Un client d'un pays sans zone ne pourra pas commander.",
      },
      {
        title: "Ajoutez un tarif à chaque zone",
        text: "Dans une zone, cliquez sur « Ajouter un tarif ». Donnez-lui un nom clair que le client verra au paiement, comme « Livraison à domicile (3 à 5 jours) », puis un prix. Un tarif fixe est le plus facile à comprendre.",
      },
      {
        title: "Ajoutez des conditions si besoin",
        text: "Cliquez sur « Ajouter des conditions » pour qu'un tarif dépende du poids des articles ou du prix de la commande. Exemple : un tarif « Livraison gratuite » à 0 €, seulement pour les commandes à partir de 50 €. C'est souvent ce qui pousse à ajouter un article au panier.",
      },
      {
        title: "Indiquez votre emballage habituel",
        text: "Dans « Emballages », entrez les dimensions et le poids de votre colis le plus courant. Avec le poids de chaque produit, Shopify calcule ainsi le poids réel des commandes.",
      },
      {
        title: "Testez au paiement",
        text: "Passez une commande test avec une adresse de chaque zone et regardez les frais proposés. Vérifiez aussi le seuil de livraison gratuite, juste en dessous puis juste au-dessus du montant.",
      },
    ],
    pitfalls: [
      "Laisser le poids des produits à 0 : les tarifs basés sur le poids deviennent faux.",
      "Oublier un pays où vous voulez vendre : ses clients sont bloqués au paiement.",
      "Proposer trop de tarifs différents : le client hésite au lieu de payer.",
    ],
    tools: [{ slug: "shopify", why: "Zones, tarifs et conditions de livraison inclus dans tous les forfaits." }],
    sources: [
      { label: "Aide Shopify : zones et tarifs d'expédition", url: "https://help.shopify.com/fr/manual/fulfillment/setup/shipping-rates/setting-up-shipping-rates" },
      { label: "Aide Shopify : tarifs d'expédition", url: "https://help.shopify.com/fr/manual/fulfillment/setup/shipping-rates" },
    ],
    related: ["ajouter-un-produit-shopify", "suivre-ses-commandes-et-expedier-shopify", "creer-sa-boutique-shopify-de-a-a-z", "rediger-les-politiques-shopify"],
  },
  {
    slug: "suivre-ses-commandes-et-expedier-shopify",
    question: "Comment suivre ses commandes et expédier sur Shopify ?",
    summary: "De la nouvelle commande au colis livré : vérifier, préparer, expédier avec un numéro de suivi et prévenir le client.",
    theme: "boutique",
    publishedOn: "2026-09-28",
    updatedOn: "2026-09-28",
    intro:
      "Votre première vente est arrivée : bravo ! Il reste à expédier le colis et à dire au client où il en est. Dans Shopify, tout se passe dans « Commandes » : chaque commande passe de « Non traitée » à « Traitée » quand vous l'expédiez, et le client reçoit son numéro de suivi par e-mail.",
    steps: [
      {
        title: "Ouvrez la liste des commandes",
        text: "Dans l'administration, cliquez sur « Commandes ». Chaque ligne montre le client, le total, l'état du paiement (par exemple « Payée ») et l'état du traitement (« Non traitée » tant que rien n'est expédié). Utilisez l'onglet ou le filtre « Non traitées » pour voir seulement les commandes à préparer.",
      },
      {
        title: "Vérifiez la commande avant de préparer",
        text: "Cliquez sur la commande. Vérifiez les articles et leurs variantes (taille, couleur), le mode de livraison choisi par le client et son adresse. Si l'adresse semble incomplète, écrivez au client avant d'expédier : un colis renvoyé coûte deux fois la livraison.",
      },
      {
        title: "Préparez et envoyez le colis",
        text: "Emballez les articles et déposez le colis chez votre transporteur (La Poste, Colissimo, Mondial Relay…). Gardez le numéro de suivi qu'il vous donne. Selon votre pays et votre forfait, Shopify permet aussi d'acheter l'étiquette directement dans la commande.",
      },
      {
        title: "Marquez la commande comme traitée",
        text: "Dans la commande, cliquez sur « Traiter les articles ». Collez le numéro de suivi : Shopify reconnaît souvent le transporteur tout seul, sinon choisissez-le dans la liste. Laissez cochée la case qui envoie la notification d'expédition au client, puis validez. La commande passe à « Traitée ».",
      },
      {
        title: "Laissez le client suivre son colis",
        text: "Le client reçoit un e-mail de confirmation d'expédition avec le lien de suivi. Le numéro reste visible dans la commande : en cas de question, ouvrez la commande et regardez le suivi avant de répondre. Les modèles de ces e-mails se trouvent dans « Paramètres », puis « Notifications ».",
      },
      {
        title: "Gérez un retour ou un remboursement",
        text: "Si le client renvoie un article, ouvrez la commande et utilisez « Retour » ou « Rembourser » selon le cas. Remboursez sur le même moyen de paiement que l'achat, et suivez les règles écrites dans votre politique de retour.",
      },
    ],
    pitfalls: [
      "Expédier sans marquer la commande comme traitée : le client ne reçoit ni e-mail ni numéro de suivi, et vous perdez le fil de ce qui est parti.",
      "Oublier de vérifier l'adresse : un colis renvoyé coûte deux fois la livraison.",
      "Promettre un délai de livraison qu'on ne tient pas : écrivez des délais réalistes dans vos réglages d'expédition et vos politiques.",
    ],
    tools: [{ slug: "shopify", why: "Commandes, numéros de suivi et e-mails d'expédition inclus dans tous les forfaits." }],
    sources: [
      { label: "Aide Shopify : traiter les commandes", url: "https://help.shopify.com/fr/manual/fulfillment/fulfilling-orders" },
      { label: "Aide Shopify : commandes", url: "https://help.shopify.com/fr/manual/orders" },
    ],
    related: ["regler-l-expedition-shopify", "rediger-les-politiques-shopify", "ouvrir-sa-boutique-shopify-au-public"],
  },
  {
    slug: "rediger-les-politiques-shopify",
    question: "Comment ajouter ses conditions de vente et politiques sur Shopify ?",
    summary: "Retours, conditions de service, expédition, coordonnées et mentions légales, affichées au paiement.",
    theme: "boutique",
    publishedOn: "2026-09-27",
    updatedOn: "2026-09-27",
    intro:
      "Les politiques rassurent l'acheteur et sont exigées par la loi pour vendre en ligne. Shopify les affiche au paiement ; il reste à les écrire et à les mettre dans le menu.",
    steps: [
      {
        title: "Ouvrez « Politiques »",
        text: "Dans l'administration, cliquez sur « Paramètres », puis sur « Politiques ». Vous y trouvez les règles de retour et la liste des politiques écrites.",
        image: {
          src: "/captures/shopify-politiques.webp",
          alt: "Paramètres > Politiques : règles de retour et politiques écrites (retour, confidentialité, conditions de service, expédition, coordonnées, mention légale)",
        },
      },
      {
        title: "Réglez vos règles de retour",
        text: "Indiquez le délai de retour, qui paie le renvoi et comment vous remboursez. En Europe, le client a en général 14 jours pour se rétracter après un achat en ligne : ne proposez pas moins.",
      },
      {
        title: "Remplissez les coordonnées",
        text: "Les « Coordonnées » sont marquées « Obligatoire ». Entrez le nom de l'entreprise, l'adresse, l'e-mail et le numéro d'entreprise : c'est ce qui permet au client de vous joindre.",
      },
      {
        title: "Écrivez les autres politiques",
        text: "Ouvrez chaque politique : retour et remboursement, confidentialité, conditions de service, expédition et mention légale. Si Shopify propose un modèle, partez de là, puis adaptez chaque phrase à votre vraie façon de travailler. Enregistrez.",
      },
      {
        title: "Ajoutez-les au pied de page",
        text: "Les politiques apparaissent au paiement, mais pas forcément dans la boutique. Dans « Contenu », puis « Menus », ouvrez le menu du pied de page et ajoutez un lien vers chacune.",
      },
    ],
    pitfalls: [
      "Garder le modèle tel quel : il peut promettre des choses que vous ne faites pas.",
      "Des politiques qui ne correspondent pas aux réglages réels (délai de retour, frais de livraison).",
      "Oublier le lien dans le pied de page : le client ne trouve pas vos conditions avant d'acheter.",
    ],
    tools: [{ slug: "shopify", why: "Modèles de politiques et affichage automatique au paiement." }],
    sources: [
      { label: "Aide Shopify : ajouter les politiques de la boutique", url: "https://help.shopify.com/fr/manual/checkout-settings/refund-privacy-tos" },
      { label: "Commission européenne : droit de rétractation", url: "https://europa.eu/youreurope/citizens/consumers/shopping/guarantees-returns/index_fr.htm" },
    ],
    related: ["creer-un-menu-shopify", "ajouter-un-formulaire-de-contact-shopify", "regler-l-expedition-shopify", "creer-sa-boutique-shopify-de-a-a-z"],
  },
  {
    slug: "creer-un-menu-shopify",
    question: "Comment modifier le menu de sa boutique Shopify ?",
    summary: "Ajouter, renommer, déplacer des liens et créer un menu déroulant.",
    theme: "boutique",
    publishedOn: "2026-09-27",
    updatedOn: "2026-09-27",
    intro:
      "Le menu aide le visiteur à trouver vos produits en un clic. Shopify en crée deux au départ : le menu principal, en haut, et le menu du pied de page.",
    steps: [
      {
        title: "Ouvrez « Menus »",
        text: "Dans l'administration, cliquez sur « Contenu », puis sur « Menus ». Cliquez sur le menu à modifier, par exemple le menu principal.",
        image: {
          src: "/captures/shopify-menus.webp",
          alt: "Contenu > Menus : menu principal, menu de pied de page et menu du compte client",
        },
      },
      {
        title: "Ajoutez un lien",
        text: "Cliquez sur « Ajouter un élément de menu ». Écrivez le nom affiché, puis choisissez la destination : une collection, un produit, une page ou une politique. Cliquez sur « Enregistrer ».",
      },
      {
        title: "Déplacez ou créez un menu déroulant",
        text: "Faites glisser un élément pour changer l'ordre. Pour un menu déroulant, glissez un élément sous un autre et légèrement vers la droite : il devient un sous-menu.",
      },
      {
        title: "Renommez ou supprimez",
        text: "Cliquez sur un élément pour changer son nom ou sa destination. L'icône de corbeille le retire du menu, sans supprimer la page elle-même.",
      },
      {
        title: "Vérifiez sur téléphone",
        text: "Enregistrez, puis ouvrez la boutique sur votre téléphone. Le menu principal s'y affiche souvent derrière une icône : gardez des noms courts et peu d'entrées.",
      },
    ],
    pitfalls: [
      "Un menu principal de dix liens ou plus : le visiteur ne sait plus où cliquer.",
      "Des pages pratiques (livraison, retours) dans le menu du haut au lieu du pied de page.",
    ],
    tools: [{ slug: "shopify", why: "Menus et sous-menus modifiables sans code." }],
    sources: [{ label: "Aide Shopify : modifier les menus", url: "https://help.shopify.com/fr/manual/online-store/menus-and-links/editing-menus" }],
    related: ["choisir-un-theme-shopify", "rediger-les-politiques-shopify", "ajouter-un-formulaire-de-contact-shopify", "creer-sa-boutique-shopify"],
  },
  {
    slug: "ouvrir-sa-boutique-shopify-au-public",
    question: "Comment retirer le mot de passe de sa boutique Shopify ?",
    summary: "Ouvrir la boutique au public en désactivant le mode privé, et ce qu'il faut vérifier avant.",
    theme: "boutique",
    publishedOn: "2026-09-27",
    updatedOn: "2026-09-27",
    intro:
      "Une nouvelle boutique Shopify est protégée par un mot de passe : personne ne peut acheter. Pour l'ouvrir, il faut d'abord choisir un forfait, puis désactiver le mode privé.",
    steps: [
      {
        title: "Choisissez un forfait",
        text: "Le mot de passe ne peut être retiré qu'après le choix d'un forfait. Dans « Paramètres », puis « Forfait », choisissez-en un. Pendant l'essai gratuit, l'abonnement ne commence qu'à la fin de l'essai.",
        image: {
          src: "/captures/shopify-offres.webp",
          alt: "Les forfaits Shopify Basic, Grow, Advanced et Plus sur la page des tarifs",
        },
      },
      {
        title: "Ouvrez les préférences de la boutique",
        text: "Dans le menu de gauche, cliquez sur « Boutique en ligne », puis sur « Préférences ». Descendez jusqu'à la section « Accès à la boutique ».",
      },
      {
        title: "Désactivez le mode privé",
        text: "Désactivez « Mode privé », puis enregistrez. La boutique est visible pour tout le monde, sans mot de passe.",
        image: {
          src: "/captures/shopify-acces-boutique.webp",
          alt: "Boutique en ligne > Préférences : section Accès à la boutique avec l'option Mode privé",
        },
      },
      {
        title: "Remplissez le titre et la description pour Google",
        text: "Sur la même page, écrivez le titre et la méta-description de la page d'accueil. C'est ce que Google et les réseaux sociaux affichent quand on partage la boutique.",
      },
      {
        title: "Vérifiez depuis un autre appareil",
        text: "Ouvrez l'adresse de la boutique sur un téléphone où vous n'êtes pas connecté : la page d'accueil doit s'afficher directement, sans demande de mot de passe.",
      },
    ],
    pitfalls: [
      "Ouvrir la boutique sans commande test : c'est le premier client qui découvre les erreurs.",
      "Ouvrir avec des politiques vides ou des produits de démonstration encore actifs.",
    ],
    tools: [{ slug: "shopify", why: "La boutique s'ouvre en un clic une fois le forfait choisi." }],
    sources: [
      { label: "Aide Shopify : protection par mot de passe", url: "https://help.shopify.com/fr/manual/online-store/themes/os/customize/password-page" },
      { label: "Aide Shopify : préférences de la boutique en ligne", url: "https://help.shopify.com/fr/manual/online-store/setting-up/preferences" },
    ],
    related: ["choisir-son-forfait-shopify", "connecter-son-domaine-shopify", "suivre-ses-commandes-et-expedier-shopify", "creer-sa-boutique-shopify-de-a-a-z"],
  },
  {
    slug: "creer-un-tunnel-de-vente-avec-leadpages-et-shopify-de-a-a-z",
    question: "Comment créer un tunnel de vente avec Leadpages et Shopify de A à Z ?",
    summary:
      "Guide complet pour construire un tunnel de vente qui capture des contacts avec Leadpages et les transforme en clients sur Shopify, étape par étape.",
    theme: "boutique",
    updatedOn: "2026-09-28",
    popular: true,
    format: "complet",
    intro:
      "Un tunnel de vente, c'est le chemin que suit un visiteur entre la découverte de votre offre et l'achat. Au lieu d'envoyer tout le monde directement sur votre boutique Shopify, vous commencez par capturer leur email avec une landing page Leadpages, vous les convainquez par email, puis vous les envoyez vers Shopify pour acheter. Ce guide monte le tunnel complet, de la première page au premier paiement.",
    steps: [
      {
        title: "Comprenez la structure d'un tunnel de vente",
        text: "Un tunnel de vente suit quatre étapes : attirer l'attention, capturer le contact, nourrir la relation par email, puis proposer l'achat. Chaque étape a un outil adapté.\n\nLeadpages gère les deux premières étapes : la landing page qui attire et le formulaire qui capture l'email. Votre service d'emailing gère la troisième. Shopify gère la dernière : le paiement et la livraison. L'ensemble forme un système automatisé qui vend pendant que vous dormez.",
      },
      {
        title: "Préparez votre offre dans Shopify",
        text: "Avant de construire le tunnel, votre produit doit être prêt dans Shopify. Créez le produit avec ses photos, son prix, sa description et ses variantes. Vérifiez que le paiement fonctionne en passant une commande test.\n\nCopiez le lien direct vers le produit ou la collection : vous en aurez besoin pour le bouton d'achat dans vos emails et sur votre page de vente.",
        image: { src: "/captures/shopify-produit.webp", alt: "Page produit Shopify : titre, description, prix et images du produit" },
      },
      {
        title: "Créez un lead magnet irrésistible",
        text: "Le lead magnet, c'est ce que vous offrez en échange de l'email. Un guide PDF, une checklist, un code de réduction, un accès anticipé. Il doit résoudre un problème concret de votre client idéal et être directement lié à votre produit payant.\n\nExemple : vous vendez des accessoires de cuisine sur Shopify. Votre lead magnet peut être « 10 recettes rapides pour la semaine » en PDF. Le visiteur donne son email, reçoit les recettes, puis vos emails lui présentent vos accessoires.",
      },
      {
        title: "Construisez la landing page de capture",
        text: "Dans Leadpages, créez une nouvelle page à partir d'un modèle ou avec l'IA. La page a un seul objectif : convaincre le visiteur de laisser son email en échange du lead magnet.\n\nLe titre doit annoncer le bénéfice du lead magnet. Le formulaire ne demande que l'email. Le bouton dit exactement ce que le visiteur reçoit : « Recevoir les 10 recettes » plutôt que « S'inscrire ». Supprimez tout ce qui distrait : pas de menu, pas de liens vers d'autres pages.",
        image: { src: "/captures/creer-page-ia.webp", alt: "Création d'une landing page avec l'assistant IA dans Leadpages" },
      },
      {
        title: "Connectez votre service d'emailing",
        text: "Dans Leadpages, ouvrez les intégrations de votre page et connectez votre service d'emailing : Mailchimp, ConvertKit, ActiveCampaign ou un autre. Chaque nouvel inscrit est automatiquement ajouté à une liste ou un tag spécifique.\n\nCréez une liste ou un tag dédié à ce tunnel pour que vos emails de vente n'arrivent qu'aux personnes qui ont demandé ce lead magnet précis.",
        image: { src: "/captures/integrations.webp", alt: "Panneau d'intégrations Leadpages : connexion avec les services d'emailing" },
      },
      {
        title: "Écrivez la séquence d'emails",
        text: "Préparez 4 à 6 emails automatiques envoyés sur 7 à 10 jours. Le premier email livre le lead magnet. Les suivants apportent de la valeur et présentent progressivement votre produit Shopify.\n\nEmail 1 : livraison du lead magnet + présentation rapide de vous. Email 2 : un conseil lié au sujet du lead magnet. Email 3 : l'histoire d'un client qui a résolu son problème avec votre produit. Email 4 : présentation du produit avec le lien vers Shopify. Email 5 : rappel avec un code de réduction à durée limitée.",
      },
      {
        title: "Créez un code de réduction dans Shopify",
        text: "Dans Shopify, allez dans Réductions et créez un code promotionnel réservé aux abonnés de votre tunnel. Un code comme BIENVENUE15 pour 15 % de réduction sur la première commande donne une raison d'acheter maintenant plutôt que plus tard.\n\nLimitez le code à une utilisation par client et fixez une date d'expiration pour créer un sentiment d'urgence réel.",
        image: { src: "/captures/shopify-reduction.webp", alt: "Création d'un code de réduction dans Shopify : pourcentage, conditions et limites" },
      },
      {
        title: "Construisez la page de vente",
        text: "Créez une deuxième page dans Leadpages : la page de vente. C'est la page vers laquelle vos emails envoient les contacts prêts à acheter. Elle présente votre produit en détail avec un bouton qui renvoie vers Shopify.\n\nCette page est plus longue que la page de capture : témoignages, détails du produit, garantie, FAQ. Le bouton d'achat utilise le lien direct vers votre produit Shopify.",
        image: { src: "/captures/htmlpub-shopify.webp", alt: "Page de vente HTML Pub avec bouton d'achat lié à Shopify" },
      },
      {
        title: "Configurez la page de remerciement",
        text: "Après l'inscription sur la page de capture, le visiteur arrive sur une page de remerciement. Utilisez-la pour renforcer l'engagement : rappelez de vérifier les spams, proposez de suivre vos réseaux sociaux, ou montrez un aperçu de votre produit Shopify.\n\nDans Leadpages, configurez la redirection post-formulaire vers votre page de remerciement. Vous pouvez aussi y placer directement votre offre avec le code de réduction pour les plus pressés.",
      },
      {
        title: "Testez le tunnel complet",
        text: "Avant d'envoyer du trafic, parcourez vous-même chaque étape. Inscrivez-vous avec une adresse test, vérifiez que l'email de bienvenue arrive, cliquez sur chaque lien de la séquence, et passez une commande test sur Shopify avec le code de réduction.\n\nVérifiez sur mobile aussi : la majorité du trafic viendra de là. Si un email ne s'affiche pas bien ou qu'un bouton est trop petit, corrigez avant de lancer.",
      },
      {
        title: "Envoyez du trafic vers la page de capture",
        text: "Le tunnel est prêt : il faut maintenant y envoyer des visiteurs. Les sources les plus courantes : une publicité Facebook ou Instagram qui cible votre audience, un post sur les réseaux sociaux avec le lien vers la page, un article de blog qui renvoie vers le lead magnet, ou un partenariat avec un créateur de contenu dans votre niche.\n\nCommencez avec un petit budget publicitaire pour valider que le tunnel convertit avant d'augmenter les dépenses.",
      },
      {
        title: "Suivez les résultats à chaque étape",
        text: "Un tunnel de vente se mesure étape par étape. Notez le taux de conversion de la landing page, le taux d'ouverture des emails, le taux de clic vers Shopify et le taux d'achat final.\n\nDans Leadpages, le tableau de bord donne le taux de conversion de la page. Dans votre service d'emailing, vous voyez les ouvertures et les clics. Dans Shopify, les ventes avec le code de réduction vous montrent combien de ventes viennent du tunnel.",
        image: { src: "/captures/statistiques.webp", alt: "Tableau de bord Leadpages : suivi des conversions et du trafic" },
      },
      {
        title: "Optimisez avec les tests A/B",
        text: "Une fois que le tunnel tourne et génère des données, améliorez chaque étape. Testez deux titres différents sur la page de capture. Testez deux objets d'email. Testez deux prix ou deux offres sur la page de vente.\n\nDans Leadpages, utilisez les tests A/B pour la page de capture et la page de vente. Changez un seul élément à la fois et attendez au moins 100 conversions par variante avant de choisir un gagnant.",
        image: { src: "/captures/test-ab.webp", alt: "Interface de test A/B Leadpages : comparaison entre deux variantes de page" },
      },
    ],
    pitfalls: [
      "Envoyer le trafic directement sur Shopify sans capturer l'email d'abord : les visiteurs qui partent sont perdus pour toujours.",
      "Écrire une séquence d'emails 100 % promotionnelle : les contacts se désabonnent avant d'acheter.",
      "Ne pas tester le tunnel sur mobile avant de lancer la publicité.",
      "Utiliser un code de réduction sans date d'expiration : il n'y a aucune urgence à acheter.",
      "Lancer de la publicité payante avant d'avoir vérifié que chaque étape du tunnel fonctionne.",
    ],
    tools: [
      { slug: "leadpages", why: "Landing pages de capture et de vente avec intégrations emailing et tests A/B." },
      { slug: "html-pub", why: "Alternative rapide pour créer des pages de capture et de vente avec l'IA." },
      { slug: "shopify", why: "Boutique en ligne pour gérer les produits, les paiements et les livraisons." },
    ],
    sources: [
      { label: "Leadpages : intégrations", url: "https://leadpages.com/integrations" },
      { label: "Aide Shopify : codes de réduction", url: "https://help.shopify.com/fr/manual/discounts" },
      pricing,
    ],
    related: ["creer-sa-boutique-shopify-de-a-a-z", "creer-sa-landing-page-leadpages-de-a-a-z", "ameliorer-le-taux-de-conversion-de-ses-pages-de-a-a-z"],
  },
];

export const tools: Tool[] = [
  {
    slug: "html-pub",
    name: "HTML Pub",
    summary: "Publier des landing pages, des sites et des blogs avec l'IA, par Leadpages.",
    website: "https://htmlpub.com",
    affiliateUrl: affiliateLink,
    freePlan: false,
    themes: ["creer", "publier", "contacts", "ia"],
    goodFor:
      "Les créateurs seuls et les petites équipes qui veulent mettre en ligne vite une page, un site ou un blog sur leur domaine, avec un assistant IA. Trois offres : Starter, Pro et Business, avec 7 jours d'essai.",
    watchOut:
      "Pas de tests A/B, de cartes de chaleur ni de Smart Traffic : il faut passer à Leadpages pour ça. Les crédits IA sont limités chaque mois.",
    logo: { src: "https://htmlpub.com/apple-icon.png", fit: "cover", direct: true },
  },
  {
    slug: "leadpages",
    name: "Leadpages",
    summary: "Landing pages avec tests A/B, cartes de chaleur et optimisation par IA.",
    website: "https://leadpages.com",
    affiliateUrl: affiliateLink,
    freePlan: false,
    themes: ["optimiser", "choisir", "contacts"],
    goodFor:
      "Ceux qui envoient déjà du trafic (publicité, réseaux) et veulent convertir plus. Tout HTML Pub, plus les tests A/B (Grow), Smart Traffic et les cartes de chaleur (Optimize), l'optimisation automatique (Scale). Trafic illimité, 7 jours d'essai.",
    watchOut:
      "Plus cher que HTML Pub : inutile tant que vous avez peu de visiteurs. Une carte bancaire est demandée pour l'essai.",
    logo: { src: "https://leadpages.com/apple-icon.png", fit: "cover", direct: true },
  },
  {
    slug: "shopify",
    name: "Shopify",
    summary: "Créer sa boutique en ligne et vendre partout, avec paiements intégrés.",
    website: "https://www.shopify.com/fr",
    affiliateUrl: shopifyLink,
    freePlan: false,
    themes: ["boutique"],
    goodFor:
      "Ceux qui veulent vendre des produits physiques ou numériques en ligne, seuls ou en petite équipe. Quatre forfaits (Basic, Grow, Advanced, Plus), 3 jours d'essai puis une offre de lancement à 1 €/mois pendant 3 mois.",
    watchOut:
      "Les applications payantes s'ajoutent au forfait. Sans Shopify Payments, des frais de transaction supplémentaires s'appliquent.",
    logo: { src: "https://cdn.shopify.com/b/shopify-brochure2-assets/c97c60ca19c64a8b5378d9f9e971f7bd.png", fit: "cover", direct: true },
  },
];

const themeBySlug = new Map(themes.map((theme) => [theme.slug, theme]));
const guideBySlug = new Map(guides.map((guide) => [guide.slug, guide]));
const toolBySlug = new Map(tools.map((tool) => [tool.slug, tool]));

export function getTheme(slug: string) {
  return themeBySlug.get(slug);
}

export function getGuide(slug: string) {
  return guideBySlug.get(slug);
}

export function getTool(slug: string) {
  return toolBySlug.get(slug);
}

export function guidesInTheme(slug: string) {
  return guides.filter((guide) => guide.theme === slug);
}

export function popularGuides() {
  return guides.filter((guide) => guide.popular);
}

export function guidesUsingTool(slug: string) {
  return guides.filter((guide) => guide.tools.some((item) => item.slug === slug));
}

export function toolLink(tool: Tool) {
  return tool.affiliateUrl ?? tool.website;
}

// Guides à lire ensuite : d'abord la liste `related`, puis d'autres guides du même thème
// (populaires d'abord, puis les plus récents).
export function getRelatedGuides(guide: Guide, limit = 4): Guide[] {
  const result: Guide[] = [];
  const seen = new Set<string>([guide.slug]);
  for (const slug of guide.related) {
    const item = getGuide(slug);
    if (item && !seen.has(item.slug)) {
      result.push(item);
      seen.add(item.slug);
    }
  }
  const sameTheme = guides
    .filter((item) => item.theme === guide.theme && !seen.has(item.slug))
    .sort((a, b) => Number(Boolean(b.popular)) - Number(Boolean(a.popular)) || b.updatedOn.localeCompare(a.updatedOn));
  return [...result, ...sameTheme].slice(0, limit);
}

// Les deux formats de guides. Une rubrique n'apparaît sur le site que si elle contient au moins un guide.
export const formats: { slug: string; format: GuideFormat; name: string; label: string; blurb: string }[] = [
  {
    slug: "express",
    format: "express",
    name: "Guides express",
    label: "Aller à l'essentiel",
    blurb: "Une question, une réponse : l'essentiel se lit en 30 secondes, le détail en 1 à 2 minutes.",
  },
  {
    slug: "complets",
    format: "complet",
    name: "Guides complets",
    label: "Tout comprendre",
    blurb: "Un projet de A à Z, avec beaucoup de captures d'écran : plus de 10 minutes de lecture.",
  },
];

export function guideFormat(guide: Guide): GuideFormat {
  return guide.format ?? "express";
}

export function guidesInFormat(format: GuideFormat) {
  return guides.filter((guide) => guideFormat(guide) === format);
}

export function activeFormats() {
  return formats.filter((item) => guidesInFormat(item.format).length > 0);
}

// Temps de lecture estimé (200 mots par minute, 1 minute minimum).
export function readingMinutes(guide: Guide) {
  const text = [
    guide.question,
    guide.intro,
    ...guide.steps.flatMap((step) => [step.title, step.text]),
    ...guide.pitfalls,
    ...guide.tools.map((item) => item.why),
  ].join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

// Chemin public du logo (proxy Vercel défini dans vercel.json).
export function logoPath(tool: Tool) {
  if (!tool.logo) return undefined;
  if (tool.logo.direct) return tool.logo.src;
  const ext = tool.logo.src.split("?")[0].split(".").pop() ?? "png";
  return `/logos/${tool.slug}.${ext}`;
}

// Description pour Google (idéalement 120 à 160 caractères) : le résumé, complété par les
// premières phrases de l'intro tant que l'ensemble reste sous 160 caractères.
export function seoDescription(guide: Guide) {
  if (guide.seoDescription) return guide.seoDescription;
  let text = guide.summary;
  const sentences = guide.intro.match(/[^.!?]+[.!?]+/g) ?? [];
  for (const sentence of sentences) {
    const next = `${text} ${sentence.trim()}`;
    if (next.length > 160) break;
    text = next;
  }
  return text;
}
