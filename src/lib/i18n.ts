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
};

export const translations: Record<OtherLang, TranslatedGuide[]> = { pt: ptGuides, en: enGuides };

export const locales: Record<Lang, string> = { fr: "fr_FR", pt: "pt_PT", en: "en_GB" };

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
