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

## Lote atual: Lote 2 · afiliação

Sites: partnerstack.com (painel da Leadpages / HTML Pub) e impact.com (painel da Shopify).

1. No PartnerStack: procura um link de afiliado que leve ao **HTML Pub** (htmlpub.com ou a página HTML Pub da Leadpages). Se existir, copia o link completo e a página de destino. Se não existir, escreve « não existe » e o texto exato que o painel mostra sobre links personalizados / deep links.
2. No PartnerStack e no Impact: copia os cliques, as inscrições/vendas e as comissões dos **últimos 30 dias** (só os números, sem nomes nem emails de clientes).
3. No Impact: vê se é possível criar um link para https://www.shopify.com/fr/tarifs (deep link). Se sim, copia o link. Não mudes nada no perfil.

Guarda o resultado como explicado acima (passo 4).

---

## Fila (o Claude Code passa o próximo para « Lote atual » depois de ler o resultado)

- Lote 3 · Google: Search Console (30 consultas e 30 páginas, 3 meses) + GA4 (15 páginas mais vistas, totais dos eventos, tráfego por canal, 28 dias).
- Lote 4 · Mailchimp e Vercel: (1) desligar o reCAPTCHA (aprovado pelo Techonni); (2) mudar o email de confirmação da inscrição para o texto em 3 línguas de `docs/newsletter/confirmacao-3-linguas.md` — **perguntar ao Techonni « posso mudar? » antes de guardar**; (3) ver se existe o registo DNS `_dmarc` na Vercel (sem criar nem apagar).
- Lote 5 · capturas Shopify (só o admin Shopify): `shopify-variantes.webp`, `shopify-page-contact.webp`, `shopify-commandes.webp`, enviadas para `public/captures/` no GitHub.
- Lote 5b · capturas Leadpages (só o painel Leadpages): `leadpages-popup.webp` (« Conversion Tools » → « Pop-Ups » → « Create New Pop-Up » → editor do pop-up, **sem guardar nem publicar**) e `leadpages-popup-publish.webp` (o painel « Publish » com as opções de abertura, sem publicar), enviadas para `public/captures/` no GitHub. Anotar em `RESULTADOS-CHROME.md` se os nomes dos menus forem diferentes.
- Lote 6 · blogs: 10 blogs francófonos de e-commerce para backlinks (Google + os sites dos blogs; só ler).
