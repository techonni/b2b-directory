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
  logo?: { src: string; fit?: "cover" | "contain"; zoom?: number };
};

export const siteName = "Zunrel";
export const tagline = "Leadpages et HTML Pub : comment faire, étape par étape.";

// Lien d'affiliation Leadpages (PartnerStack). Il mène à leadpages.com.
export const affiliateLink = "https://try.leadpages.com/94z9pcfn1hu5";

const help = "https://support.leadpages.com/hc/en-us/articles/";
const pricing = { label: "Leadpages : offres et tarifs", url: "https://leadpages.com/pricing" };

export const themes: Theme[] = [
  { slug: "choisir", name: "Choisir son offre", blurb: "HTML Pub ou Leadpages, essai gratuit, changer d'offre." },
  { slug: "creer", name: "Créer une page", blurb: "Landing page, site ou blog, avec l'IA ou un modèle." },
  { slug: "publier", name: "Publier", blurb: "Nom de domaine, adresse de page, accès protégé." },
  { slug: "contacts", name: "Récolter des contacts", blurb: "Formulaires, export et connexion à vos outils." },
  { slug: "optimiser", name: "Optimiser", blurb: "Tests A/B, cartes de chaleur et Smart Traffic." },
  { slug: "ia", name: "IA et vidéo", blurb: "Publier depuis Claude, créer des pubs vidéo." },
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
        text: "Dans le menu de gauche de votre tableau de bord, cliquez sur « Billing ». Connectez-vous avec le compte propriétaire si le menu n'apparaît pas.",
      },
      {
        title: "Changez d'offre",
        text: "Choisissez l'offre supérieure ou inférieure. Le changement prend effet au prochain cycle de facturation.",
      },
      {
        title: "Ou annulez",
        text: "Annulez depuis les réglages de votre compte. Pendant un essai, faites-le avant le 7e jour pour ne pas être prélevé.",
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
        text: "Dans votre tableau de bord, cliquez sur « Publish New Page ». Dans le choix « What are you making? », sélectionnez « Landing page ».",
      },
      {
        title: "Décrivez votre page précisément",
        text: "Dans le champ « Describe the page you want », indiquez à qui s'adresse la page, ce que vous proposez, le ton, les couleurs et les sections voulues (titre, avantages, avis, formulaire). Plus c'est précis, meilleur est le résultat.",
      },
      {
        title: "Ajoutez une image de référence",
        text: "Avec l'icône image de la barre de saisie, joignez votre logo, une photo du produit ou une page que vous aimez. L'IA s'en sert pour le style.",
      },
      {
        title: "Corrigez section par section",
        text: "Regardez l'aperçu à droite, puis demandez des changements un par un : « rends le titre plus court », « ajoute un formulaire e-mail en bas ». Chaque message consomme des crédits IA.",
      },
      {
        title: "Publiez",
        text: "Quand la page vous convient, cliquez sur « Done » puis publiez-la. « Open page » ouvre l'adresse en ligne.",
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
        text: "Sur l'écran de création, regardez la zone « Start from a template », ou cliquez sur « Browse all templates » pour tout voir.",
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
        text: "La plupart des visiteurs arrivent sur téléphone. Vérifiez l'aperçu mobile, puis publiez.",
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
        title: "Cliquez sur « Publish New Page »",
        text: "Le bouton se trouve en haut à droite du tableau de bord.",
      },
      {
        title: "Ajoutez votre code",
        text: "Trois façons : coller le HTML dans le champ, déposer directement un fichier .html, ou écrire le code vous-même.",
      },
      {
        title: "Vérifiez l'aperçu",
        text: "Assurez-vous que les images s'affichent. Si elles sont sur votre ordinateur, ajoutez-les d'abord dans les fichiers (« Assets ») de la page.",
      },
      {
        title: "Publiez",
        text: "Cliquez sur « Publish ». La page est en ligne sur une adresse HTML Pub, ou sur votre domaine si vous l'avez connecté.",
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
        text: "Sur l'écran de création, sélectionnez « Website » au lieu de « Landing page ».",
      },
      {
        title: "Décrivez la page d'accueil",
        text: "Expliquez votre activité, votre public et le style voulu, puis cliquez sur « Create ».",
      },
      {
        title: "Validez la liste des pages",
        text: "L'assistant propose les autres pages du site (services, tarifs, contact…). Renommez, supprimez ou ajoutez-en avant de lancer.",
      },
      {
        title: "Construisez les pages une par une",
        text: "Cliquez sur « Build » sur chaque page. Rien n'est généré tant que vous ne cliquez pas. Les pages reprennent l'en-tête, le pied de page et le style de l'accueil.",
      },
      {
        title: "Ajoutez une page plus tard",
        text: "Sur l'écran de création, ouvrez le choix de destination, sélectionnez votre site, décrivez la nouvelle page et cliquez sur « Create ».",
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
        text: "Dans le menu, ouvrez « Blog » puis cliquez sur « + Create Blog ». Donnez un titre, et si vous voulez une description et un nom d'auteur.",
      },
      {
        title: "Écrivez un article",
        text: "Ouvrez le blog et cliquez sur « New Post ». Écrivez avec l'éditeur visuel ou en Markdown.",
      },
      {
        title: "Remplissez les champs utiles",
        text: "Titre, adresse (slug), résumé, image de couverture et mots-clés (tags). Le résumé et l'image apparaissent quand on partage l'article.",
      },
      {
        title: "Publiez",
        text: "Passez le statut de « Drafts » à « Published ». L'article est en ligne immédiatement, et un flux RSS est créé automatiquement.",
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
        title: "Ouvrez « Custom Domains »",
        text: "Dans le tableau de bord, rubrique « Manage », cliquez sur « Custom Domains », puis sur « Connect Domain ».",
      },
      {
        title: "Tapez votre domaine",
        text: "Soit le domaine principal (monsite.com), soit un sous-domaine (www.monsite.com, offre.monsite.com). Un sous-domaine est le plus simple.",
      },
      {
        title: "Choisissez ce qu'il affiche",
        text: "Dans « Points To », choisissez une page, un site ou un blog. Vous pourrez le changer plus tard. Cliquez sur « Add & Configure Domain ».",
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
      "Chaque page a quelques réglages simples dans la liste des pages. Ils servent à avoir une adresse lisible, à cacher une page en préparation ou à ranger vos pages.",
    steps: [
      {
        title: "Changez le titre",
        text: "Dans la liste des pages, cliquez sur le titre pour le modifier. C'est le nom affiché dans l'onglet du navigateur.",
      },
      {
        title: "Changez l'adresse (slug)",
        text: "Cliquez sur l'adresse grisée sous le titre. Utilisez des minuscules, des chiffres et des tirets, entre 10 et 64 caractères, par exemple offre-coaching-septembre.",
      },
      {
        title: "Protégez par mot de passe",
        text: "Cliquez sur l'icône de cadenas de la page. Les visiteurs devront entrer le mot de passe pour la voir. Pratique pour une page client ou une page pas encore prête.",
      },
      {
        title: "Rangez avec des étiquettes",
        text: "Ajoutez des étiquettes (« Tags ») pour retrouver vos pages par campagne ou par client.",
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
        title: "Ouvrez « Forms »",
        text: "Dans le menu de gauche, la rubrique « Forms » liste vos pages avec le nombre de réponses et la date de la dernière.",
      },
      {
        title: "Consultez les réponses",
        text: "Cliquez sur le nom d'une page, puis dépliez une ligne pour voir tous les champs remplis.",
      },
      {
        title: "Exportez en CSV",
        text: "Cliquez sur « Export CSV » pour obtenir un fichier à ouvrir dans Excel ou Google Sheets.",
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
    question: "Comment envoyer ses contacts vers Mailchimp, Google Sheets ou son CRM ?",
    summary: "Connecter une intégration pour que chaque nouveau contact arrive au bon endroit.",
    theme: "contacts",
    updatedOn: "2026-09-26",
    intro:
      "Une intégration envoie chaque réponse de formulaire vers un autre outil, sans copier-coller. HTML Pub se connecte notamment à Mailchimp, Google Sheets, HubSpot, Slack, Pipedrive et GetResponse.",
    steps: [
      {
        title: "Ouvrez « Integrations »",
        text: "Dans le menu de gauche, trouvez l'outil voulu et cliquez sur « Connect ».",
      },
      {
        title: "Autorisez la connexion",
        text: "Connectez-vous à l'outil ou collez sa clé API, selon ce qui est demandé. Le statut passe à « Connected ».",
      },
      {
        title: "Réglez l'automatisation",
        text: "Dans la partie « Automations », indiquez où envoyer les contacts (la liste Mailchimp, le tableau Google Sheets…) et choisissez toutes les pages ou seulement certaines.",
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
        text: "Au lieu d'une répartition fixe, laissez l'IA diriger les visiteurs. Elle s'améliore au fil des visites.",
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
        text: "Le connecteur MCP est inclus à partir de HTML Pub Pro et dans toutes les offres Leadpages.",
      },
      {
        title: "Ajoutez le connecteur dans Claude",
        text: "Sur claude.ai, ouvrez Réglages puis Connecteurs, choisissez « Ajouter un connecteur personnalisé » et collez l'adresse https://mcp.htmlpub.com/mcp.",
      },
      {
        title: "Autorisez l'accès",
        text: "Connectez-vous à votre compte HTML Pub quand Claude le demande. Aucune clé API n'est nécessaire.",
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
    tools: [{ slug: "html-pub", why: "Connecteur Claude inclus dès l'offre Pro." }],
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
      "Ad Studio transforme une courte description en publicité vidéo. Il propose des pubs centrées sur le produit ou au style UGC, avec un créateur généré par IA.",
    steps: [
      {
        title: "Décrivez votre pub",
        text: "Votre produit, votre public et le style voulu : pub produit ou vidéo façon UGC.",
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
    ],
    tools: [{ slug: "html-pub", why: "Ad Studio fait partie des outils IA de HTML Pub." }],
    sources: [{ label: "HTML Pub : créer des pubs vidéo dans Ad Studio", url: `${help}48970038606349--HTMLPub-Generating-Video-Ads-in-Ad-Studio` }],
    related: ["publier-une-page-depuis-claude", "creer-une-landing-page-avec-l-ia"],
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
    logo: { src: "https://htmlpub.com/apple-icon.png", fit: "cover" },
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
    logo: { src: "https://leadpages.com/apple-icon.png", fit: "cover" },
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
  const ext = tool.logo.src.split("?")[0].split(".").pop() ?? "png";
  return `/logos/${tool.slug}.${ext}`;
}
