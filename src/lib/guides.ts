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
  updatedOn: string;
  intro: string;
  steps: Step[];
  pitfalls: string[];
  tools: { slug: string; why: string }[];
  sources: Source[];
  related: string[];
  popular?: boolean;
};

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
    updatedOn: "2026-09-26",
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
        text: "Starter pour une seule page avec un domaine, Pro pour un créateur seul (plus de pages, un blog, l'accès API et la publication depuis Claude ou ChatGPT), Business pour une petite équipe ou une agence qui publie beaucoup.",
        image: { src: "/captures/choisir-offre.webp", alt: "Page des tarifs : les offres HTML Pub (Publish) et Leadpages (Optimize) côte à côte" },
      },
      {
        title: "Regardez les trois offres Leadpages",
        text: "Grow ajoute les tests A/B manuels, le remplacement dynamique du texte et l'enrichissement des contacts. Optimize ajoute Smart Traffic, les cartes de chaleur et la personnalisation automatique. Scale ajoute l'optimisation automatique complète et les espaces d'équipe.",
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
    related: ["essayer-leadpages-gratuitement", "changer-ou-annuler-son-offre-leadpages"],
  },
  {
    slug: "essayer-leadpages-gratuitement",
    question: "Comment essayer Leadpages gratuitement ?",
    summary: "L'essai de 7 jours, ce qu'il contient et comment ne pas être débité.",
    theme: "choisir",
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
    related: ["choisir-entre-html-pub-et-leadpages", "creer-une-landing-page-avec-l-ia"],
  },
  {
    slug: "changer-ou-annuler-son-offre-leadpages",
    question: "Comment changer d'offre ou annuler son abonnement Leadpages ?",
    summary: "Monter ou descendre d'offre, arrêter l'abonnement, et ce que deviennent vos pages.",
    theme: "choisir",
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

  // ——— Créer une page ———
  {
    slug: "creer-une-landing-page-avec-l-ia",
    question: "Comment créer une landing page avec l'IA de Leadpages ?",
    summary: "Décrire sa page, laisser l'IA la construire, puis l'améliorer en discutant.",
    theme: "creer",
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
    related: ["partir-d-un-modele-leadpages", "recuperer-les-formulaires-html-pub"],
  },
  {
    slug: "partir-d-un-modele-leadpages",
    question: "Comment partir d'un modèle dans Leadpages ?",
    summary: "Choisir un modèle prêt à l'emploi et l'adapter à votre activité.",
    theme: "creer",
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
    related: ["creer-une-landing-page-avec-l-ia", "creer-un-site-web-avec-html-pub"],
  },
  {
    slug: "publier-du-html-sur-html-pub",
    question: "Comment publier une page HTML déjà prête sur HTML Pub ?",
    summary: "Coller du code ou déposer un fichier .html, sans dépenser de crédits IA.",
    theme: "creer",
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
    related: ["connecter-son-nom-de-domaine-leadpages", "recuperer-les-formulaires-html-pub"],
  },
  {
    slug: "creer-un-site-web-avec-html-pub",
    question: "Comment créer un site de plusieurs pages avec HTML Pub ?",
    summary: "Une page d'accueil, puis les autres pages qui reprennent le même menu et le même style.",
    theme: "creer",
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
    related: ["creer-un-blog-avec-html-pub", "connecter-son-nom-de-domaine-leadpages"],
  },
  {
    slug: "creer-un-blog-avec-html-pub",
    question: "Comment créer un blog avec HTML Pub ?",
    summary: "Créer le blog, écrire un article et le publier.",
    theme: "creer",
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
    related: ["connecter-leadpages-a-son-outil-e-mail", "creer-une-landing-page-avec-l-ia"],
  },
  {
    slug: "connecter-leadpages-a-son-outil-e-mail",
    question: "Comment envoyer ses contacts vers Mailchimp, Brevo ou son CRM ?",
    summary: "Connecter une intégration pour que chaque nouveau contact arrive au bon endroit.",
    theme: "contacts",
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
    related: ["recuperer-les-formulaires-html-pub"],
  },

  {
    slug: "recolter-des-e-mails-avant-un-lancement",
    question: "Comment récolter des e-mails avant un lancement ?",
    summary: "Une page d'attente, un formulaire e-mail, une bonne raison de s'inscrire, et vos contacts dans votre outil e-mail.",
    theme: "contacts",
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
    related: ["recuperer-les-formulaires-html-pub", "connecter-leadpages-a-son-outil-e-mail", "creer-une-landing-page-avec-l-ia"],
  },

  // ——— Optimiser ———
  {
    slug: "faire-un-test-ab-leadpages",
    question: "Comment faire un test A/B avec Leadpages ?",
    summary: "Comparer deux versions d'une page et garder celle qui convertit le mieux.",
    theme: "optimiser",
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
    related: ["utiliser-smart-traffic-leadpages", "lire-une-carte-de-chaleur-leadpages"],
  },
  {
    slug: "lire-une-carte-de-chaleur-leadpages",
    question: "Comment lire une carte de chaleur (heatmap) dans Leadpages ?",
    summary: "Voir où vos visiteurs cliquent, jusqu'où ils descendent et ce qu'ils lisent.",
    theme: "optimiser",
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
    related: ["faire-un-test-ab-leadpages", "utiliser-smart-traffic-leadpages"],
  },
  {
    slug: "utiliser-smart-traffic-leadpages",
    question: "Comment fonctionne Smart Traffic dans Leadpages ?",
    summary: "L'IA envoie chaque visiteur vers la version de page qui a le plus de chances de lui plaire.",
    theme: "optimiser",
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
    related: ["faire-un-test-ab-leadpages"],
  },

  // ——— IA et vidéo ———
  {
    slug: "publier-une-page-depuis-claude",
    question: "Comment publier une page HTML Pub directement depuis Claude ?",
    summary: "Connecter HTML Pub à Claude pour créer et modifier vos pages en discutant.",
    theme: "ia",
    updatedOn: "2026-09-26",
    intro:
      "HTML Pub a un connecteur pour Claude (MCP). Une fois connecté, vous demandez une page à Claude et il la publie dans votre compte.",
    steps: [
      {
        title: "Vérifiez votre offre",
        text: "Le connecteur MCP est inclus dans toutes les offres payantes, dès HTML Pub Starter, et dans toutes les offres Leadpages.",
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
    tools: [{ slug: "html-pub", why: "Connecteur Claude inclus dès l'offre Starter." }],
    sources: [{ label: "HTML Pub : connecteur MCP pour Claude", url: `${help}43969915496845--HTMLPub-Using-the-Claude-MCP-Connector` }, pricing],
    related: ["creer-une-landing-page-avec-l-ia", "creer-une-pub-video-avec-ad-studio"],
  },
  {
    slug: "creer-une-pub-video-avec-ad-studio",
    question: "Comment créer une publicité vidéo avec Ad Studio ?",
    summary: "Une image de départ, un storyboard, puis la vidéo finale, en validant chaque étape.",
    theme: "ia",
    updatedOn: "2026-09-26",
    intro:
      "Ad Studio transforme une courte description en publicité. Il propose des pubs centrées sur le produit ou au style UGC, avec un créateur généré par IA. Il est réservé aux offres Leadpages Optimize et Scale.",
    steps: [
      {
        title: "Ouvrez « Ads »",
        text: "Dans le menu de gauche, cliquez sur « Ads ». Décrivez votre produit, votre public et le style voulu : pub produit ou vidéo façon UGC.",
        image: { src: "/captures/adstudio.webp", alt: "Page Ads (Ad Studio), réservée aux offres Optimize et plus" },
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
    sources: [{ label: "HTML Pub : créer des pubs vidéo dans Ad Studio", url: `${help}48970038606349--HTMLPub-Generating-Video-Ads-in-Ad-Studio` }],
    related: ["publier-une-page-depuis-claude", "creer-une-landing-page-avec-l-ia"],
  },

  // ——— Vendre avec Shopify ———
  {
    slug: "essayer-shopify-gratuitement",
    question: "Comment essayer Shopify gratuitement ?",
    summary: "L'essai de 3 jours, puis 1 € par mois pendant 3 mois : comment en profiter.",
    theme: "boutique",
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
    related: ["choisir-son-forfait-shopify", "creer-sa-boutique-shopify"],
  },
  {
    slug: "choisir-son-forfait-shopify",
    question: "Comment choisir son forfait Shopify ?",
    summary: "Basic, Grow, Advanced ou Plus : lequel prendre selon votre activité.",
    theme: "boutique",
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
    related: ["essayer-shopify-gratuitement", "accepter-les-paiements-shopify"],
  },
  {
    slug: "creer-sa-boutique-shopify",
    question: "Comment créer sa boutique Shopify ?",
    summary: "De l'inscription à la boutique en ligne, dans l'ordre.",
    theme: "boutique",
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
    related: ["ajouter-un-produit-shopify", "connecter-son-domaine-shopify"],
  },
  {
    slug: "ajouter-un-produit-shopify",
    question: "Comment ajouter un produit sur Shopify ?",
    summary: "Titre, photos, prix, stock et expédition : la fiche produit remplie correctement.",
    theme: "boutique",
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
    related: ["creer-sa-boutique-shopify", "creer-un-code-de-reduction-shopify"],
  },
  {
    slug: "connecter-son-domaine-shopify",
    question: "Comment connecter son nom de domaine à Shopify ?",
    summary: "Utiliser votre propre adresse au lieu de l'adresse en myshopify.com.",
    theme: "boutique",
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
    related: ["creer-sa-boutique-shopify", "connecter-son-nom-de-domaine-leadpages"],
  },
  {
    slug: "accepter-les-paiements-shopify",
    question: "Comment accepter les paiements sur Shopify ?",
    summary: "Shopify Payments, Bancontact, PayPal : les réglages et les frais à connaître.",
    theme: "boutique",
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
    related: ["choisir-son-forfait-shopify", "ajouter-un-produit-shopify"],
  },  {
    slug: "choisir-un-theme-shopify",
    question: "Comment choisir et installer un thème gratuit sur Shopify ?",
    summary: "Trouver un thème gratuit dans la Theme Store, l'essayer, puis le publier.",
    theme: "boutique",
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
    related: ["creer-sa-boutique-shopify", "ajouter-un-produit-shopify"],
  },
  {
    slug: "creer-un-code-de-reduction-shopify",
    question: "Comment créer un code de réduction sur Shopify ?",
    summary: "Un code promo en pourcentage ou en montant fixe, avec ses conditions et ses limites.",
    theme: "boutique",
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
    related: ["attirer-des-clients-avec-une-landing-page", "connecter-leadpages-a-son-outil-e-mail"],
  },
  {
    slug: "attirer-des-clients-avec-une-landing-page",
    question: "Comment attirer des clients vers sa boutique Shopify avec une landing page ?",
    summary: "Une page simple, une offre claire, un formulaire, puis un lien vers votre boutique.",
    theme: "boutique",
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
    related: ["creer-un-code-de-reduction-shopify", "connecter-html-pub-a-shopify", "creer-une-landing-page-avec-l-ia"],
  },
  {
    slug: "creer-une-page-de-vente-pour-un-produit-shopify",
    question: "Comment créer une page de vente pour un produit Shopify ?",
    summary: "Une page d'une seule offre, créée avec l'IA de HTML Pub, qui envoie vers votre produit Shopify.",
    theme: "boutique",
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
