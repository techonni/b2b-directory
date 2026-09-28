// Versions portugaise (/pt/) et anglaise (/en/) des guides les plus lus.
// Le français reste la langue principale : une traduction reprend les captures, les sources et
// les outils du guide français (même `slug`) et ne contient que le texte.
import { ptGuides } from "./translations/pt";
import { enGuides } from "./translations/en";

export type Lang = "fr" | "pt" | "en";
export type OtherLang = Exclude<Lang, "fr">;

export type TranslatedGuide = {
  slug: string; // slug du guide français
  localSlug: string;
  question: string;
  summary: string;
  intro: string;
  // Même nombre d'étapes, dans le même ordre que le guide français.
  steps: { title: string; text: string; alt?: string }[];
  pitfalls: string[];
  // Pas encore publié (par exemple : prix à vérifier pour ce pays).
  hidden?: boolean;
};

// Anglais : public américain (dollars). Portugais : neutre (Brésil et Portugal).
export const translations: Record<OtherLang, TranslatedGuide[]> = {
  pt: ptGuides.filter((item) => !item.hidden),
  en: enGuides.filter((item) => !item.hidden),
};

export const locales: Record<Lang, string> = { fr: "fr_FR", pt: "pt_BR", en: "en_US" };

// Libellés du sélecteur de langue en haut de chaque page.
export const langLabels: Record<Lang, string> = { fr: "FR", pt: "PT", en: "US" };

// Tags Mailchimp de langue (Audience → Tags) : chaque inscription reçoit celui de la page.
export const langTags: Record<Lang, string> = { fr: "11404680", pt: "11404681", en: "11404682" };

// Sources officielles des guides traduits : même lien dans la langue du lecteur quand il existe,
// ou `null` pour ne pas afficher une source qui ne concerne que la France.
const sourceMap: Record<string, Record<OtherLang, { label: string; url: string } | null>> = {
  "https://www.shopify.com/fr/tarifs": {
    pt: { label: "Shopify: preços", url: "https://www.shopify.com/pricing" },
    en: { label: "Shopify pricing", url: "https://www.shopify.com/pricing" },
  },
  "https://leadpages.com/pricing": {
    pt: { label: "Leadpages: planos e preços", url: "https://leadpages.com/pricing" },
    en: { label: "Leadpages pricing", url: "https://leadpages.com/pricing" },
  },
  "https://help.shopify.com/fr": {
    pt: { label: "Central de Ajuda da Shopify", url: "https://help.shopify.com/pt-BR" },
    en: { label: "Shopify Help Center", url: "https://help.shopify.com/en" },
  },
  "https://support.google.com/analytics/answer/9304153?hl=fr": {
    pt: { label: "Ajuda do Google Analytics: configurar o Analytics para um site", url: "https://support.google.com/analytics/answer/9304153?hl=pt-BR" },
    en: { label: "Google Analytics Help: set up Analytics for a website", url: "https://support.google.com/analytics/answer/9304153?hl=en" },
  },
  "https://support.leadpages.com/hc/en-us": {
    pt: { label: "Central de ajuda da Leadpages", url: "https://support.leadpages.com/hc/en-us" },
    en: { label: "Leadpages Help Center", url: "https://support.leadpages.com/hc/en-us" },
  },
  "https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique": {
    pt: null,
    en: { label: "FTC: CAN-SPAM Act compliance guide", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" },
  },
};

const labelWords: Record<OtherLang, [RegExp, string][]> = {
  pt: [[/ \(aide\)/, " (ajuda)"], [/codes de réduction/, "códigos de desconto"], [/utiliser le créateur de pages IA/, "criador de páginas com IA"],
    [/connecter un domaine/, "conectar um domínio"], [/Connecter votre domaine \(nouveau Leadpages\)/, "Leadpages: conectar o seu domínio"],
    [/accepter des achats Shopify/, "aceitar compras Shopify"], [/^Aide Shopify/, "Ajuda Shopify"],
    [/ajouter une page de contact/, "adicionar uma página de contato"], [/modifier les menus/, "editar os menus"],
    [/variantes de produit/, "variantes de produto"], [/ajouter et mettre à jour des produits/, "adicionar e atualizar produtos"],
    [/créer et modifier des pages/, "criar e editar páginas"]],
  en: [[/ \(aide\)/, " (help)"], [/codes de réduction/, "discount codes"], [/utiliser le créateur de pages IA/, "using the AI page builder"],
    [/connecter un domaine/, "connecting a custom domain"], [/Connecter votre domaine \(nouveau Leadpages\)/, "Leadpages: connect your domain"],
    [/accepter des achats Shopify/, "accept Shopify purchases"], [/^Aide Shopify/, "Shopify Help"],
    [/ajouter une page de contact/, "add a contact page"], [/modifier les menus/, "edit menus"],
    [/variantes de produit/, "product variants"], [/ajouter et mettre à jour des produits/, "add and update products"],
    [/créer et modifier des pages/, "creating and editing pages"]],
};

export function localizeSource(lang: OtherLang, source: { label: string; url: string }) {
  const mapped = sourceMap[source.url];
  if (mapped !== undefined) return mapped[lang];
  let label = source.label.replace(" : ", ": ");
  for (const [pattern, text] of labelWords[lang]) label = label.replace(pattern, text);
  const url = source.url.replace("help.shopify.com/fr/", lang === "pt" ? "help.shopify.com/pt-BR/" : "help.shopify.com/en/");
  return { label, url };
}

export const ui = {
  fr: {
    home: "Accueil",
    guides: "Guides",
    consent: "Nous utilisons Google Analytics pour savoir quels guides sont utiles. Aucune publicité, aucun cookie sans votre accord.",
    accept: "Accepter",
    refuse: "Refuser",
  },
  pt: {
    home: "Início",
    guides: "Guias",
    listTitle: "Guias Zunrel em português",
    listIntro:
      "Os guias mais lidos do Zunrel, traduzidos do francês: Leadpages, HTML Pub e Shopify, passo a passo. Os restantes guias estão em francês.",
    uiNote:
      "As capturas mostram a interface usada no guia original (Shopify em francês, Leadpages em inglês). Na sua conta, os botões aparecem na sua língua.",
    stepByStep: "Passo a passo",
    inShort: "O essencial em 30 segundos",
    avoid: "A evitar:",
    seeDetail: "Ver o detalhe com as capturas ↓",
    pitfalls: "Erros frequentes",
    sources: "Fontes oficiais",
    readNext: "Ler a seguir",
    updated: "Atualizado a",
    reading: "Leitura",
    frenchVersion: "Versão original em francês",
    otherLang: "English version",
    tryYourself: "Experimente",
    affiliate: "Link de afiliado: não muda o preço para si.",
    affiliateShort: "Link de afiliado.",
    ctaShopShort: "Para seguir este guia precisa de uma loja Shopify: a inscrição é grátis e há uma oferta de lançamento (confirme as condições no seu país).",
    ctaShop: "A Shopify começa grátis e depois tem uma oferta de lançamento a preço reduzido. Pode preparar tudo antes de pagar.",
    ctaShopLabel: "Experimentar a Shopify ↗",
    ctaPagesShort: "Para seguir este guia precisa de uma conta Leadpages ou HTML Pub: cada oferta tem 7 dias de teste grátis.",
    ctaPages: "Todas as ofertas HTML Pub e Leadpages têm 7 dias de teste grátis, com todas as funções.",
    ctaPagesLabel: "Experimentar a Leadpages 7 dias ↗",
    footer:
      "Site independente, não editado pela Leadpages nem pela Shopify. Confirme as informações nos sites oficiais antes de decidir. Os links para a Leadpages, o HTML Pub e a Shopify são links de afiliado: não mudam o preço para si.",
    newsletterTitle: "Receber os próximos guias",
    newsletterText: "Os novos guias Leadpages, HTML Pub e Shopify por e-mail, de 15 em 15 dias. Sem spam, cancelamento com um clique.",
    newsletterNote: "Vai receber um e-mail (em francês) para confirmar a inscrição.",
    newsletterTopic: "Quero receber os guias sobre",
    newsletterAll: "Tudo",
    newsletterButton: "Inscrever-me",
    consent: "Usamos o Google Analytics para saber que guias são úteis. Sem publicidade e sem cookies sem o seu acordo.",
    accept: "Aceitar",
    refuse: "Recusar",
  },
  en: {
    home: "Home",
    guides: "Guides",
    listTitle: "Zunrel guides in English",
    listIntro:
      "Zunrel's most-read guides, translated from French: Leadpages, HTML Pub and Shopify, step by step. The other guides are in French.",
    uiNote:
      "Screenshots show the interface used in the original guide (Shopify in French, Leadpages in English). In your account, buttons appear in your language.",
    stepByStep: "Step by step",
    inShort: "The essentials in 30 seconds",
    avoid: "Avoid:",
    seeDetail: "See the details with screenshots ↓",
    pitfalls: "Common mistakes",
    sources: "Official sources",
    readNext: "Read next",
    updated: "Updated on",
    reading: "Reading time",
    frenchVersion: "Original version in French",
    otherLang: "Versão em português",
    tryYourself: "Try it yourself",
    affiliate: "Affiliate link: it does not change the price for you.",
    affiliateShort: "Affiliate link.",
    ctaShopShort: "To follow this guide you need a Shopify store: sign-up is free and there is a launch offer (check the terms in your country).",
    ctaShop: "Shopify starts free, then has a discounted launch offer. You can set everything up before paying.",
    ctaShopLabel: "Try Shopify ↗",
    ctaPagesShort: "To follow this guide you need a Leadpages or HTML Pub account: every plan has a 7-day free trial.",
    ctaPages: "Every HTML Pub and Leadpages plan has a 7-day free trial, with all features.",
    ctaPagesLabel: "Try Leadpages for 7 days ↗",
    footer:
      "Independent website, not published by Leadpages or Shopify. Check the information on the official websites before deciding. Links to Leadpages, HTML Pub and Shopify are affiliate links: they do not change the price for you.",
    newsletterTitle: "Get the next guides",
    newsletterText: "New Leadpages, HTML Pub and Shopify guides by email, every two weeks. No spam, unsubscribe in one click.",
    newsletterNote: "You will get an email (in French) to confirm your subscription.",
    newsletterTopic: "I want guides about",
    newsletterAll: "Everything",
    newsletterButton: "Subscribe",
    consent: "We use Google Analytics to learn which guides are useful. No ads, no cookies without your consent.",
    accept: "Accept",
    refuse: "Decline",
  },
} as const;

export function listPath(lang: OtherLang) {
  return lang === "pt" ? "/pt/" : "/en/";
}

export function translatedPath(lang: OtherLang, localSlug: string) {
  return lang === "pt" ? `/pt/guias/${localSlug}/` : `/en/guides/${localSlug}/`;
}

export function getTranslation(lang: OtherLang, frSlug: string) {
  return translations[lang].find((item) => item.slug === frSlug);
}

// Liens hreflang d'un guide : la version française et ses traductions existantes.
export function guideAlternates(frSlug: string) {
  const list: { lang: Lang; path: string }[] = [{ lang: "fr", path: `/guides/${frSlug}/` }];
  for (const lang of ["pt", "en"] as const) {
    const item = getTranslation(lang, frSlug);
    if (item) list.push({ lang, path: translatedPath(lang, item.localSlug) });
  }
  return list.length > 1 ? list : undefined;
}
