# Próximo trabalho do Claude no Chrome (Co-work)

> **Para o Claude no Chrome, quando o Techonni disser « continua »:**
> **Regra n.º 1: « continua » quer dizer « faz o Lote atual abaixo ». Não fazes nenhuma outra pergunta** (nem sobre a rotina diária, nem sobre outros projetos, nem « queres que eu… ? »). As únicas palavras do Techonni são « continua », « sim » e « oui ». Só perguntas quando uma regra deste ficheiro ou de `CHROME-DIARIO.md` exige o « oui » dele (enviar uma mensagem, mudar um perfil). Na dúvida: não perguntes, anota a dúvida em RESULTADOS-CHROME.md e o Claude Code resolve.
> 1. Se o Lote atual ainda não está feito em RESULTADOS-CHROME.md: faz só esse lote (no máximo 3 tarefas e 2 sites; o GitHub, usado só para guardar o resultado, não conta). Sem perguntas.
> 2. Se o Lote atual já está feito: faz a rotina do dia de `docs/growth/CHROME-DIARIO.md`. Aí, e só aí, dizes numa frase o plano do dia e esperas o « sim ».
> 3. Regras: só ler e copiar; não comprar, não mudar planos, não apagar, não enviar emails; nunca inventar números; sem dados pessoais (nome, email, nome da loja).
> 4. Guarda o resultado: abre https://github.com/techonni/zunrel/edit/main/docs/growth/RESULTADOS-CHROME.md, acrescenta **no topo** uma secção `## Lote N · data` com o que encontraste (números, textos exatos, URL de cada informação, e o que ficou bloqueado e porquê). Mensagem de commit « Chrome: lote N », « Commit directly to the main branch ».
> 5. No fim, diz ao Techonni só esta frase: « Lote N feito. Diz "continua" ao Claude Code. »
> 6. Se não houver lote nem rotina por fazer: « Não há trabalho novo para mim. Diz "continua" ao Claude Code. »
>
> Este ficheiro é escrito só pelo Claude Code. O Claude do Chrome nunca o altera e nunca mexe no código do site.

---

## Lote atual: Lote 3 · Google

Sites: search.google.com/search-console e analytics.google.com (propriedade zunrel.com).

1. Search Console → « Desempenho » → « Resultados da pesquisa », últimos 3 meses: copia as 30 primeiras **consultas** e as 30 primeiras **páginas**, com cliques, impressões, CTR e posição média.
2. GA4 → últimos 28 dias: as 15 páginas mais vistas (visualizações e utilizadores), e o tráfego por canal (« Aquisição de tráfego »: Organic Search, Direct, Organic Social, Referral…).
3. GA4 → « Eventos », últimos 28 dias: o total de `affiliate_click`, `sign_up`, `share`, `pdf_download`, `newsletter_bar_click` e `web_vital`. Se der, abre `affiliate_click` e copia a repartição por `placement` e por `guide`.

Guarda o resultado como explicado acima (passo 4).

---

## Fila (o Claude Code passa o próximo para « Lote atual » depois de ler o resultado)

- Lote 2b · afiliação (só depois de o Techonni iniciar sessão no Impact no Chrome): (1) PartnerStack: existe um link ou « custom link / deep link » que leve ao **HTML Pub** (htmlpub.com)? Copia o link ou o texto exato do painel; (2) Impact: cliques, vendas e comissões dos últimos 30 dias; (3) Impact: é possível criar um link para https://www.shopify.com/fr/tarifs? Copia-o. (O lote 2 ficou meio feito na rotina diária de 28/09: PartnerStack 85 cliques no total, 14 em 90 dias, 0 inscrições, 0 € de comissões; Impact bloqueado sem sessão.)
- Lote 4 · Mailchimp e Vercel: (1) desligar o reCAPTCHA (aprovado pelo Techonni); (2) mudar o email de confirmação da inscrição para o texto em 3 línguas de `docs/newsletter/confirmacao-3-linguas.md` — **perguntar ao Techonni « posso mudar? » antes de guardar**; (3) ver se existe o registo DNS `_dmarc` na Vercel (sem criar nem apagar).
- Lote 5 · capturas Shopify (só o admin Shopify): `shopify-variantes.webp`, `shopify-page-contact.webp`, `shopify-commandes.webp`, enviadas para `public/captures/` no GitHub.
- Lote 5b · capturas Leadpages (só o painel Leadpages): `leadpages-popup.webp` (« Conversion Tools » → « Pop-Ups » → « Create New Pop-Up » → editor do pop-up, **sem guardar nem publicar**) `leadpages-popup-publish.webp` (o painel « Publish » com as opções de abertura, sem publicar) e `leadpages-tracking.webp` (editor de uma página → « Settings » → a parte « Analytics » / « Tracking Codes » com o campo « Head Section Tracking Code », sem colar nada nem guardar), enviadas para `public/captures/` no GitHub. Anotar em `RESULTADOS-CHROME.md` se os nomes dos menus forem diferentes.
- Lote 6 · blogs: 10 blogs francófonos de e-commerce para backlinks (Google + os sites dos blogs; só ler).
