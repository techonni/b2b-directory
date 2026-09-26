// Contenu du site : thèmes, guides « comment faire » et outils.
// Pour ajouter un lien d'affiliation, remplir `affiliateUrl` sur l'outil.

export type Theme = {
  slug: string;
  name: string;
  blurb: string;
};

export type Step = {
  title: string;
  text: string;
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
};

export const siteName = "Zunrel";
export const tagline = "Auto-entrepreneur : comment faire, étape par étape.";

export const themes: Theme[] = [
  { slug: "demarrer", name: "Démarrer", blurb: "Créer sa micro-entreprise et poser les bases." },
  { slug: "facturer", name: "Facturer", blurb: "Devis, factures et mentions obligatoires." },
  { slug: "declarer", name: "Déclarer et payer", blurb: "URSSAF, impôts et TVA sans stress." },
  { slug: "banque", name: "Banque", blurb: "Compte pro, séparation des dépenses." },
  { slug: "etre-paye", name: "Se faire payer", blurb: "Carte, virement, relances." },
  { slug: "visibilite", name: "Être trouvé", blurb: "Site, fiche Google, premiers clients." },
];

export const guides: Guide[] = [
  {
    slug: "creer-sa-micro-entreprise",
    question: "Comment créer sa micro-entreprise ?",
    summary: "La démarche en ligne, gratuite, et ce qu'il faut préparer avant.",
    theme: "demarrer",
    updatedOn: "2026-09-26",
    popular: true,
    intro:
      "Créer une micro-entreprise se fait en ligne et ne coûte rien sur le site officiel. Comptez une vingtaine de minutes si vos documents sont prêts.",
    steps: [
      {
        title: "Préparez vos documents",
        text: "Une pièce d'identité scannée, votre numéro de sécurité sociale, une adresse pour l'entreprise (souvent votre domicile) et une description claire de votre activité.",
      },
      {
        title: "Allez sur le guichet unique",
        text: "La déclaration se fait sur formalites.entreprises.gouv.fr, le site officiel de l'INPI. Créez un compte, puis choisissez « Créer une entreprise » et « Entrepreneur individuel ».",
      },
      {
        title: "Choisissez le régime micro",
        text: "Pendant le formulaire, optez pour le régime micro-social. Vous pouvez aussi demander le versement libératoire de l'impôt si votre revenu fiscal le permet.",
      },
      {
        title: "Attendez votre SIRET",
        text: "L'INSEE vous attribue un numéro SIREN et un SIRET, en général sous une à quatre semaines. Vous en aurez besoin sur chaque facture.",
      },
      {
        title: "Activez votre espace URSSAF",
        text: "Créez votre compte sur autoentrepreneur.urssaf.fr. C'est là que vous déclarerez votre chiffre d'affaires et paierez vos cotisations.",
      },
    ],
    pitfalls: [
      "Payer un site privé pour une démarche gratuite. Beaucoup de sites ressemblent au site officiel et facturent le service.",
      "Oublier d'activer son espace URSSAF, puis rater sa première déclaration.",
    ],
    tools: [
      { slug: "shine", why: "Ouvrir un compte pro pendant l'attente du SIRET." },
      { slug: "henrri", why: "Préparer ses premières factures gratuitement." },
    ],
    sources: [
      { label: "Guichet unique (INPI)", url: "https://formalites.entreprises.gouv.fr" },
      { label: "URSSAF auto-entrepreneur", url: "https://www.autoentrepreneur.urssaf.fr" },
      { label: "Service-Public.fr", url: "https://entreprendre.service-public.fr" },
    ],
    related: ["faut-il-un-compte-pro", "declarer-son-chiffre-d-affaires"],
  },
  {
    slug: "faire-sa-premiere-facture",
    question: "Comment faire sa première facture ?",
    summary: "Les mentions obligatoires, la numérotation et un modèle simple.",
    theme: "facturer",
    updatedOn: "2026-09-26",
    popular: true,
    intro:
      "Une facture d'auto-entrepreneur n'a rien de compliqué, mais certaines mentions sont obligatoires. Une facture incomplète peut valoir une amende.",
    steps: [
      {
        title: "Numérotez sans trou",
        text: "Chaque facture a un numéro unique, qui suit une suite continue. Exemple : 2026-001, 2026-002… Ne supprimez jamais une facture émise : faites un avoir.",
      },
      {
        title: "Indiquez qui vous êtes",
        text: "Votre nom et prénom suivis de « EI » ou « Entrepreneur individuel », votre adresse et votre numéro SIREN ou SIRET.",
      },
      {
        title: "Indiquez le client",
        text: "Son nom ou sa raison sociale et son adresse. Pour une entreprise cliente, ajoutez son SIREN.",
      },
      {
        title: "Détaillez la prestation",
        text: "La date, la description de ce que vous avez vendu, la quantité, le prix unitaire hors taxe et le total.",
      },
      {
        title: "Gérez la mention TVA",
        text: "Si vous êtes en franchise de TVA, écrivez « TVA non applicable, art. 293 B du CGI ». Sinon, indiquez le taux et le montant de TVA.",
      },
      {
        title: "Précisez le paiement",
        text: "La date d'échéance, les pénalités de retard et, pour un client professionnel, l'indemnité forfaitaire de 40 € pour frais de recouvrement.",
      },
    ],
    pitfalls: [
      "Faire ses factures dans Word sans numérotation fiable.",
      "Oublier la mention « EI » après son nom.",
      "Ignorer la facture électronique : les micro-entreprises doivent pouvoir en recevoir depuis septembre 2026.",
    ],
    tools: [
      { slug: "henrri", why: "Gratuit, suffisant pour commencer." },
      { slug: "abby", why: "Factures et suivi URSSAF au même endroit." },
      { slug: "freebe", why: "Pensé pour les freelances en prestation de services." },
    ],
    sources: [
      { label: "Mentions obligatoires (Service-Public)", url: "https://entreprendre.service-public.fr/vosdroits/F31808" },
      { label: "Facturation électronique (impots.gouv)", url: "https://www.impots.gouv.fr/facturation-electronique" },
    ],
    related: ["facturer-sans-tva", "facture-electronique-2026", "relancer-une-facture-impayee"],
  },
  {
    slug: "facture-electronique-2026",
    question: "Comment se préparer à la facture électronique ?",
    summary: "Ce qui change pour les micro-entreprises en 2026 et 2027.",
    theme: "facturer",
    updatedOn: "2026-09-26",
    popular: true,
    intro:
      "La facture électronique devient obligatoire entre entreprises en France. Pour une micro-entreprise, cela se fait en deux temps : d'abord recevoir, ensuite émettre.",
    steps: [
      {
        title: "Depuis septembre 2026 : recevoir",
        text: "Toutes les entreprises, micro-entreprises comprises, doivent pouvoir recevoir des factures électroniques de leurs fournisseurs.",
      },
      {
        title: "À partir de septembre 2027 : émettre",
        text: "Les micro-entreprises devront envoyer leurs factures aux clients professionnels au format électronique. Un PDF envoyé par e-mail ne suffira plus.",
      },
      {
        title: "Choisissez une plateforme agréée",
        text: "Les factures électroniques passent par une plateforme agréée par l'administration. Beaucoup de logiciels de facturation s'y connectent pour vous.",
      },
      {
        title: "Vérifiez votre logiciel",
        text: "Demandez à votre outil de facturation s'il est compatible ou partenaire d'une plateforme agréée. Si vous facturez sur Excel, prévoyez de changer avant 2027.",
      },
    ],
    pitfalls: [
      "Croire qu'un PDF par e-mail est une facture électronique.",
      "Attendre la dernière minute : les calendriers et les outils changent encore.",
      "Oublier que les ventes à des particuliers suivent une autre règle (transmission des données de paiement).",
    ],
    tools: [
      { slug: "abby", why: "Logiciel de facturation qui prépare la réforme." },
      { slug: "tiime", why: "Formule gratuite avec facturation." },
    ],
    sources: [
      { label: "impots.gouv : facturation électronique", url: "https://www.impots.gouv.fr/facturation-electronique" },
      { label: "Economie.gouv : calendrier", url: "https://www.economie.gouv.fr/tout-savoir-sur-la-facturation-electronique-pour-les-entreprises" },
    ],
    related: ["faire-sa-premiere-facture"],
  },
  {
    slug: "facturer-sans-tva",
    question: "Comment facturer sans TVA ?",
    summary: "La franchise en base, la mention à écrire et quand elle s'arrête.",
    theme: "declarer",
    updatedOn: "2026-09-26",
    intro:
      "La plupart des auto-entrepreneurs ne facturent pas de TVA grâce à la franchise en base. C'est simple, tant que vous restez sous le seuil.",
    steps: [
      {
        title: "Vérifiez que vous êtes en franchise",
        text: "Par défaut, une micro-entreprise qui démarre est en franchise en base de TVA. Vous ne facturez pas de TVA et vous ne la récupérez pas sur vos achats.",
      },
      {
        title: "Écrivez la bonne mention",
        text: "Sur chaque facture et chaque devis : « TVA non applicable, art. 293 B du CGI ». Vos prix sont alors des montants hors taxe, sans TVA ajoutée.",
      },
      {
        title: "Surveillez le seuil",
        text: "La franchise s'arrête si votre chiffre d'affaires dépasse un seuil qui dépend de votre activité (vente ou service). Les seuils ont été débattus en 2025 et 2026 : vérifiez le montant actuel sur impots.gouv.fr.",
      },
      {
        title: "Anticipez le dépassement",
        text: "Si vous dépassez le seuil, vous devez facturer la TVA à partir de la date prévue par la loi. Ajustez vos prix et votre logiciel à l'avance.",
      },
    ],
    pitfalls: [
      "Ajouter 20 % de TVA sur une facture alors qu'on est en franchise.",
      "Oublier la mention, ce qui rend la facture incomplète.",
    ],
    tools: [{ slug: "henrri", why: "Ajoute la mention automatiquement." }],
    sources: [
      { label: "Franchise en base de TVA (Service-Public)", url: "https://entreprendre.service-public.fr/vosdroits/F21746" },
      { label: "impots.gouv", url: "https://www.impots.gouv.fr/professionnel" },
    ],
    related: ["faire-sa-premiere-facture", "declarer-son-chiffre-d-affaires"],
  },
  {
    slug: "declarer-son-chiffre-d-affaires",
    question: "Comment déclarer son chiffre d'affaires à l'URSSAF ?",
    summary: "Mensuel ou trimestriel, quoi déclarer et quoi faire si c'est zéro.",
    theme: "declarer",
    updatedOn: "2026-09-26",
    popular: true,
    intro:
      "En micro-entreprise, vous déclarez ce que vous avez encaissé, puis l'URSSAF calcule vos cotisations. Même à zéro, la déclaration est obligatoire.",
    steps: [
      {
        title: "Connaissez votre rythme",
        text: "Vous déclarez chaque mois ou chaque trimestre, selon votre choix à la création. Vous pouvez changer dans votre espace URSSAF.",
      },
      {
        title: "Additionnez vos encaissements",
        text: "Comptez l'argent réellement reçu sur la période, pas les factures envoyées. Séparez ventes de marchandises et prestations de services si vous faites les deux.",
      },
      {
        title: "Déclarez en ligne",
        text: "Sur autoentrepreneur.urssaf.fr ou l'application AutoEntrepreneur de l'URSSAF, saisissez le montant. Les cotisations sont calculées automatiquement.",
      },
      {
        title: "Payez dans la foulée",
        text: "Le paiement se fait en même temps que la déclaration, par prélèvement. Gardez de côté une part de chaque encaissement pour ne pas être surpris.",
      },
    ],
    pitfalls: [
      "Ne rien déclarer quand le chiffre d'affaires est nul : il faut déclarer 0.",
      "Déclarer le montant facturé au lieu du montant encaissé.",
      "Oublier de déclarer aussi ses revenus sur la déclaration d'impôt annuelle.",
    ],
    tools: [
      { slug: "abby", why: "Calcule ce qu'il faut déclarer à partir de vos factures." },
      { slug: "indy", why: "Suivi des encaissements et rappels de déclaration." },
    ],
    sources: [
      { label: "URSSAF auto-entrepreneur", url: "https://www.autoentrepreneur.urssaf.fr" },
    ],
    related: ["facturer-sans-tva", "faut-il-un-compte-pro"],
  },
  {
    slug: "faut-il-un-compte-pro",
    question: "Faut-il ouvrir un compte bancaire pro ?",
    summary: "Ce que dit la loi, et pourquoi c'est pratique même quand ce n'est pas obligatoire.",
    theme: "banque",
    updatedOn: "2026-09-26",
    popular: true,
    intro:
      "Un auto-entrepreneur doit avoir un compte séparé pour son activité quand son chiffre d'affaires dépasse 10 000 € deux années civiles de suite. Beaucoup en ouvrent un dès le départ.",
    steps: [
      {
        title: "Compte dédié ou compte pro",
        text: "La loi demande un compte dédié, pas forcément un « compte pro ». Un second compte personnel utilisé uniquement pour l'activité peut suffire.",
      },
      {
        title: "Comparez les néobanques",
        text: "Les banques en ligne proposent des comptes pro rapides à ouvrir, avec carte, application et parfois facturation incluse. Les frais mensuels varient beaucoup.",
      },
      {
        title: "Vérifiez les frais cachés",
        text: "Regardez les frais de dépôt d'espèces, les plafonds de paiement et le prix des virements instantanés avant de choisir.",
      },
    ],
    pitfalls: [
      "Mélanger dépenses perso et pro, ce qui complique tout en cas de contrôle.",
      "Choisir uniquement sur le prix sans vérifier le dépôt d'espèces si vous en recevez.",
    ],
    tools: [
      { slug: "shine", why: "Compte pro en ligne pensé pour les indépendants." },
      { slug: "qonto", why: "Compte pro complet, plus orienté petites entreprises." },
      { slug: "indy", why: "Compte pro avec comptabilité intégrée." },
    ],
    sources: [
      { label: "Compte bancaire dédié (Service-Public)", url: "https://entreprendre.service-public.fr" },
    ],
    related: ["creer-sa-micro-entreprise", "accepter-la-carte-bancaire"],
  },
  {
    slug: "accepter-la-carte-bancaire",
    question: "Comment accepter les paiements par carte ?",
    summary: "Terminal, lien de paiement ou paiement en ligne : que choisir.",
    theme: "etre-paye",
    updatedOn: "2026-09-26",
    intro:
      "Il existe trois façons simples d'être payé par carte : un petit terminal, un lien de paiement envoyé par message, ou un paiement sur votre site.",
    steps: [
      {
        title: "En face à face : un terminal",
        text: "Un terminal mobile se connecte à votre téléphone. Vous l'achetez une fois, puis vous payez une commission sur chaque paiement.",
      },
      {
        title: "À distance : un lien de paiement",
        text: "Vous créez un lien pour un montant précis et l'envoyez par SMS ou e-mail. Le client paie par carte en quelques secondes.",
      },
      {
        title: "En ligne : un paiement sur votre site",
        text: "Si vous vendez en ligne, un service de paiement s'intègre à votre site ou à votre boutique.",
      },
      {
        title: "Comparez les commissions",
        text: "Le coût réel, c'est la commission par transaction. Faites le calcul sur votre panier moyen, pas sur le prix affiché.",
      },
    ],
    pitfalls: [
      "Oublier que la commission réduit votre marge : intégrez-la dans vos prix.",
      "Déclarer à l'URSSAF le montant net reçu au lieu du montant payé par le client.",
    ],
    tools: [
      { slug: "sumup", why: "Terminal et liens de paiement, sans abonnement." },
      { slug: "stripe", why: "Paiement en ligne, idéal pour un site." },
      { slug: "paypal", why: "Connu des clients, pratique pour l'international." },
    ],
    sources: [],
    related: ["relancer-une-facture-impayee", "faut-il-un-compte-pro"],
  },
  {
    slug: "relancer-une-facture-impayee",
    question: "Comment relancer une facture impayée ?",
    summary: "Les étapes, du rappel poli à la mise en demeure.",
    theme: "etre-paye",
    updatedOn: "2026-09-26",
    intro:
      "La plupart des retards sont des oublis. Une relance claire et rapide règle la majorité des cas, sans abîmer la relation client.",
    steps: [
      {
        title: "Relance amicale",
        text: "Quelques jours après l'échéance, envoyez un e-mail court avec la facture en pièce jointe, son numéro, le montant et un moyen de paiement.",
      },
      {
        title: "Deuxième relance",
        text: "Une à deux semaines plus tard, rappelez les pénalités de retard prévues sur la facture et proposez un appel.",
      },
      {
        title: "Mise en demeure",
        text: "Sans réponse, envoyez une mise en demeure par lettre recommandée avec accusé de réception. Elle fixe un dernier délai.",
      },
      {
        title: "Recours",
        text: "Pour une petite somme, une procédure d'injonction de payer est possible en ligne. Un conciliateur de justice peut aussi aider, gratuitement.",
      },
    ],
    pitfalls: [
      "Attendre des semaines avant la première relance.",
      "Ne pas avoir écrit les pénalités de retard sur la facture.",
      "Continuer à travailler pour un client qui ne paie pas.",
    ],
    tools: [
      { slug: "abby", why: "Relances automatiques par e-mail." },
      { slug: "yousign", why: "Faire signer un devis évite beaucoup de litiges." },
    ],
    sources: [
      { label: "Injonction de payer (Service-Public)", url: "https://www.service-public.fr/particuliers/vosdroits/F1746" },
    ],
    related: ["faire-sa-premiere-facture", "faire-signer-un-devis"],
  },
  {
    slug: "faire-signer-un-devis",
    question: "Comment faire un devis et le faire signer ?",
    summary: "Ce qu'un devis doit contenir et comment obtenir une signature en ligne.",
    theme: "facturer",
    updatedOn: "2026-09-26",
    intro:
      "Un devis signé protège les deux côtés : le client sait ce qu'il paie, vous savez ce que vous devez livrer. La signature peut se faire en ligne.",
    steps: [
      {
        title: "Rédigez le devis",
        text: "Reprenez les informations d'une facture : vos coordonnées, celles du client, le détail de la prestation, les prix et la mention TVA. Ajoutez une durée de validité.",
      },
      {
        title: "Précisez les conditions",
        text: "Délais, acompte éventuel, modalités de paiement. Plus c'est clair, moins il y a de discussions ensuite.",
      },
      {
        title: "Envoyez en signature électronique",
        text: "Un service de signature envoie le devis au client, qui signe depuis son téléphone. Vous recevez une copie signée et horodatée.",
      },
      {
        title: "Transformez en facture",
        text: "Une fois le travail fait, reprenez le devis pour créer la facture. La plupart des logiciels le font en un clic.",
      },
    ],
    pitfalls: [
      "Commencer le travail avant la signature.",
      "Oublier la durée de validité du devis.",
    ],
    tools: [
      { slug: "yousign", why: "Signature électronique française, simple à utiliser." },
      { slug: "freebe", why: "Devis puis facture dans le même outil." },
    ],
    sources: [],
    related: ["faire-sa-premiere-facture", "relancer-une-facture-impayee"],
  },
  {
    slug: "etre-trouve-sur-google",
    question: "Comment être trouvé sur Google quand on démarre ?",
    summary: "La fiche Google gratuite, un site d'une page et les avis clients.",
    theme: "visibilite",
    updatedOn: "2026-09-26",
    intro:
      "Pas besoin d'un gros site pour exister. Pour une activité locale, la fiche d'établissement Google compte souvent plus que le site lui-même.",
    steps: [
      {
        title: "Créez votre fiche Google",
        text: "Avec Google Business Profile, gratuit, vous apparaissez sur Google Maps avec vos horaires, votre téléphone et vos avis.",
      },
      {
        title: "Faites un site d'une page",
        text: "Qui vous êtes, ce que vous proposez, vos prix ou une fourchette, et comment vous contacter. Une seule page claire suffit pour démarrer.",
      },
      {
        title: "Demandez des avis",
        text: "Après chaque mission réussie, envoyez le lien pour laisser un avis. Les premiers avis font une vraie différence.",
      },
      {
        title: "Utilisez les mots de vos clients",
        text: "Écrivez ce que vos clients tapent vraiment : « plombier Lyon 7 », pas « solutions hydrauliques ».",
      },
    ],
    pitfalls: [
      "Payer un site cher avant d'avoir des clients.",
      "Acheter de faux avis : c'est interdit et Google les supprime.",
    ],
    tools: [
      { slug: "google-business-profile", why: "Gratuit, indispensable pour une activité locale." },
      { slug: "carrd", why: "Un site d'une page, simple et peu cher." },
      { slug: "calendly", why: "Laisser les clients réserver un créneau." },
    ],
    sources: [],
    related: ["creer-sa-micro-entreprise"],
  },
];

export const tools: Tool[] = [
  {
    slug: "henrri",
    name: "Henrri",
    summary: "Logiciel de facturation gratuit.",
    website: "https://www.henrri.com",
    freePlan: true,
    themes: ["facturer"],
    goodFor: "Faire des devis et des factures conformes sans payer, quand on démarre.",
    watchOut: "Moins de fonctions de suivi URSSAF que les outils payants.",
  },
  {
    slug: "abby",
    name: "Abby",
    summary: "Facturation et gestion pour auto-entrepreneurs.",
    website: "https://abby.fr",
    freePlan: true,
    themes: ["facturer", "declarer", "etre-paye"],
    goodFor: "Centraliser devis, factures, relances et le suivi du chiffre d'affaires.",
    watchOut: "Les fonctions avancées sont dans les formules payantes.",
  },
  {
    slug: "freebe",
    name: "Freebe",
    summary: "Gestion pour freelances en prestation de services.",
    website: "https://www.freebe.me",
    freePlan: false,
    themes: ["facturer"],
    goodFor: "Les freelances qui font des devis, du suivi de temps et des factures.",
    watchOut: "Payant après la période d'essai.",
  },
  {
    slug: "tiime",
    name: "Tiime",
    summary: "Facturation et notes de frais, avec une formule gratuite.",
    website: "https://www.tiime.fr",
    freePlan: true,
    themes: ["facturer"],
    goodFor: "Facturer gratuitement et garder ses justificatifs au même endroit.",
    watchOut: "Interface pensée aussi pour les sociétés, un peu plus chargée.",
  },
  {
    slug: "indy",
    name: "Indy",
    summary: "Compte pro et comptabilité automatisée.",
    website: "https://www.indy.fr",
    freePlan: true,
    themes: ["banque", "declarer"],
    goodFor: "Avoir banque et suivi comptable dans une seule application.",
    watchOut: "Comparez la formule gratuite et les formules payantes selon vos besoins.",
  },
  {
    slug: "shine",
    name: "Shine",
    summary: "Compte pro en ligne pour indépendants.",
    website: "https://www.shine.fr",
    freePlan: false,
    themes: ["banque"],
    goodFor: "Ouvrir un compte pro rapidement, avec carte et application.",
    watchOut: "Vérifiez les frais de dépôt d'espèces et les plafonds.",
  },
  {
    slug: "qonto",
    name: "Qonto",
    summary: "Compte pro pour indépendants et petites entreprises.",
    website: "https://qonto.com/fr",
    freePlan: false,
    themes: ["banque"],
    goodFor: "Une activité qui grandit et a besoin de plusieurs cartes ou d'outils de gestion.",
    watchOut: "Plus cher que le strict minimum pour une petite activité.",
  },
  {
    slug: "sumup",
    name: "SumUp",
    summary: "Terminal de paiement et liens de paiement.",
    website: "https://www.sumup.com/fr-fr/",
    freePlan: true,
    themes: ["etre-paye"],
    goodFor: "Encaisser par carte en face à face, sans abonnement mensuel.",
    watchOut: "Le terminal s'achète, et une commission s'applique à chaque paiement.",
  },
  {
    slug: "stripe",
    name: "Stripe",
    summary: "Paiement en ligne pour sites et applications.",
    website: "https://stripe.com/fr",
    freePlan: true,
    themes: ["etre-paye"],
    goodFor: "Vendre en ligne ou envoyer des liens de paiement.",
    watchOut: "Plus technique à intégrer qu'un simple terminal.",
  },
  {
    slug: "paypal",
    name: "PayPal",
    summary: "Paiement en ligne connu des clients.",
    website: "https://www.paypal.com/fr/business",
    freePlan: true,
    themes: ["etre-paye"],
    goodFor: "Rassurer des clients, surtout à l'étranger.",
    watchOut: "Les commissions peuvent être plus élevées, surtout avec conversion de devise.",
  },
  {
    slug: "yousign",
    name: "Yousign",
    summary: "Signature électronique française.",
    website: "https://yousign.com/fr-fr",
    freePlan: true,
    themes: ["facturer"],
    goodFor: "Faire signer devis et contrats à distance, en quelques minutes.",
    watchOut: "La formule gratuite est limitée en nombre de signatures.",
  },
  {
    slug: "google-business-profile",
    name: "Google Business Profile",
    summary: "Votre fiche sur Google Maps et la recherche.",
    website: "https://www.google.com/intl/fr_fr/business/",
    freePlan: true,
    themes: ["visibilite"],
    goodFor: "Toute activité locale : artisans, services à domicile, commerces.",
    watchOut: "Google demande de vérifier l'adresse ou l'activité.",
  },
  {
    slug: "carrd",
    name: "Carrd",
    summary: "Créer un site d'une page.",
    website: "https://carrd.co",
    freePlan: true,
    themes: ["visibilite"],
    goodFor: "Une page de présentation propre, en une soirée.",
    watchOut: "Pour un nom de domaine à vous, il faut la formule payante.",
  },
  {
    slug: "calendly",
    name: "Calendly",
    summary: "Prise de rendez-vous en ligne.",
    website: "https://calendly.com/fr",
    freePlan: true,
    themes: ["visibilite"],
    goodFor: "Laisser les clients réserver un appel sans échanges d'e-mails.",
    watchOut: "La formule gratuite limite les types de rendez-vous.",
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
