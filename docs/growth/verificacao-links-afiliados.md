# Verificação dos links de afiliação (passo 1)

Data: 28/09/2026.

## Onde estão os links

Só há **2 links de afiliação**, definidos uma vez em `src/lib/guides.ts`:

| Constante | Link | Programa | Usado em |
|---|---|---|---|
| `affiliateLink` | `https://try.leadpages.com/94z9pcfn1hu5` | PartnerStack | fiche HTML Pub, fiche Leadpages, botão « Essayer Leadpages 7 jours » de todos os guias que não são Shopify |
| `shopifyLink` | `https://shopify.pxf.io/6kMJxr` | Impact | fiche Shopify, botão « Essayer Shopify » dos guias do tema `boutique` |

## O que está bem

- **Guias (38):** cada guia tem um botão « Essayer par vous-même » no fim, com o link afiliado certo (Shopify para os guias de loja, Leadpages para os outros), `rel="sponsored noopener"` e a menção « Lien affilié ».
- **Fiches outil (3):** o botão usa o link afiliado, com `rel="sponsored noopener"` e a menção. Confirmado no zunrel.com (`/outils/html-pub/`).
- **Rodapé:** avisa em todas as páginas que os links para Leadpages, HTML Pub e Shopify são afiliados.
- **GA4:** todos os cliques em `rel="sponsored"` enviam o evento `affiliate_click` (ferramenta, guia, página).
- **Página inicial:** não tem botões « Essayer » (só links para guias). Não há links diretos escondidos nos componentes.

## Corrigido hoje

- As fiches outil não diziam ao GA4 qual ferramenta foi clicada: HTML Pub e Leadpages apareciam as duas como `try.leadpages.com`. Agora o botão envia `tool = html-pub`, `leadpages` ou `shopify`.

## Problemas encontrados (precisam do Techonni)

1. **HTML Pub leva para a Leadpages.** O botão « Voir le site de HTML Pub » usa o mesmo link que a Leadpages, que abre leadpages.com. Quem quer HTML Pub cai no sítio errado e pode não converter.
   → No PartnerStack, ver se há um link para o HTML Pub (ou um link com destino htmlpub.com) e mandar-mo. Não invento links.
2. **Não consegui seguir os redirecionamentos.** A rede desta máquina bloqueia `try.leadpages.com`, `shopify.pxf.io`, `leadpages.com` e `shopify.com`. Não sei para onde os dois links levam hoje.
   → Techonni: abrir os 2 links numa janela privada e dizer-me onde chegam (página exata).
3. **Links diretos que podiam ser afiliados.** Nas « Sources » dos guias há links normais (sem afiliação) para páginas comerciais:
   - `https://www.shopify.com/fr/tarifs` (6 guias) e `https://themes.shopify.com/…` (1 guia)
   - `https://leadpages.com/pricing` (vários guias), `/product/ab-testing`, `/product/heatmaps`, `/product/conversion-tools`, `/integrations`, `/integrations/shopify`

   São citações de fontes, por isso estão sem `sponsored`, o que é correto. Só passam a afiliados se o PartnerStack e a Impact tiverem « deep links » (link afiliado com destino escolhido). → Techonni: ver nos painéis se isso existe e mandar os links gerados.
4. **Preços nos botões por confirmar hoje.** O botão Shopify diz « 3 jours gratuits, puis 1 € par mois pendant 3 mois » e o da Leadpages « 7 jours ». Não consegui abrir as páginas oficiais para confirmar.
   → Confirmar em shopify.com/fr/tarifs e leadpages.com/pricing (ou mandar-me uma captura).
5. **Cliques contados?** → No PartnerStack e na Impact, ver se aparecem cliques nos últimos 30 dias e comparar com o evento `affiliate_click` no GA4.
