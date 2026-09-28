# Próximo trabalho do Claude no Chrome (Co-work)

> **Para o Claude no Chrome, quando o Techonni disser « continua »:**
> **Regra n.º 1: « continua » quer dizer « faz o Lote atual abaixo ». Não fazes nenhuma outra pergunta** (nem sobre a rotina diária, nem sobre outros projetos, nem « queres que eu… ? »). As únicas palavras do Techonni são « continua », « sim » e « oui ». Só perguntas quando uma regra deste ficheiro ou de `CHROME-DIARIO.md` exige o « oui » dele (enviar uma mensagem, mudar um perfil). Na dúvida: não perguntes, anota a dúvida em RESULTADOS-CHROME.md e o Claude Code resolve.
> 1. Se o Lote atual ainda não está feito em RESULTADOS-CHROME.md: faz só esse lote (no máximo 3 tarefas e 2 sites; o GitHub, usado só para guardar o resultado, não conta). Sem perguntas.
> 1b. Se o Lote atual já está feito mas o « Lote seguinte » ainda não: faz o Lote seguinte, da mesma maneira (sem perguntas).
> 2. Se o Lote atual e o Lote seguinte já estão feitos: faz a rotina do dia de `docs/growth/CHROME-DIARIO.md`. Aí, e só aí, dizes numa frase o plano do dia e esperas o « sim ».
> 3. Regras: só ler e copiar; não comprar, não mudar planos, não apagar, não enviar emails; nunca inventar números; sem dados pessoais (nome, email, nome da loja).
> 4. Guarda o resultado: abre https://github.com/techonni/zunrel/edit/main/docs/growth/RESULTADOS-CHROME.md, acrescenta **no topo** uma secção `## Lote N · data` com o que encontraste (números, textos exatos, URL de cada informação, e o que ficou bloqueado e porquê). Mensagem de commit « Chrome: lote N », « Commit directly to the main branch ».
> 5. No fim, diz ao Techonni só esta frase: « Lote N feito. Diz "continua" ao Claude Code. » (Depois do Lote atual, se ainda houver Lote seguinte por fazer: « Lote N feito. Diz "continua" outra vez para o lote seguinte. »)
> 6. Se não houver lote nem rotina por fazer: « Não há trabalho novo para mim. Diz "continua" ao Claude Code. »
>
> Este ficheiro é escrito só pelo Claude Code. O Claude do Chrome nunca o altera e nunca mexe no código do site.

---

## Lote atual: Lote 2 · afiliação (PartnerStack + Impact)

Sites: partnerstack.com e impact.com (a sessão no Impact já está iniciada neste Chrome).

1. **PartnerStack**, programa Leadpages: existe um link ou uma opção « custom link / deep link » que leve ao **HTML Pub** (htmlpub.com)? Se sim, copia o link completo e a página de destino. Se não, copia o texto exato que o painel mostra sobre links.
2. **Impact**, programa Shopify: cliques, vendas e comissões dos **últimos 30 dias** (só números, sem nomes nem emails de clientes).
3. **Impact**: é possível criar um link para https://www.shopify.com/fr/tarifs (deep link)? Se sim, cria-o e copia-o. Não mudes nada no perfil.

Guarda o resultado como explicado acima (passo 4).

---

## Lote seguinte: Lote P · Pinterest (carregar o CSV)

Site: pinterest.com (o GitHub serve só para descarregar o ficheiro e guardar o resultado).

1. Abre https://github.com/techonni/zunrel/blob/main/docs/growth/pinterest-agendar.csv e clica no botão « Download raw file » (seta para baixo, em cima à direita do ficheiro). O ficheiro `pinterest-agendar.csv` fica nas Transferências.
2. No Pinterest (conta Zunrel): menu do perfil → « Configurações » → « Criar Pins em massa » (em inglês: « Bulk create Pins »). Carrega o ficheiro `pinterest-agendar.csv`. O Pinterest deve anunciar **94 Pins** agendados de 30/09 a 09/10. Se um painel não existir, o Pinterest cria-o sozinho. Não mudes mais nada.
3. Anota em RESULTADOS-CHROME.md: quantos pins o Pinterest aceitou, e as mensagens de erro exatas (se houver). **Se não conseguires escolher o ficheiro** (a janela do computador para escolher ficheiros não abre para ti), escreve « bloqueado: não consigo escolher o ficheiro »: nesse caso é o Techonni que o carrega.

Guarda o resultado como explicado acima (passo 4), com o título `## Lote P · data`.

---

## Fila (o Claude Code passa o próximo para « Lote atual » depois de ler o resultado)

- Lote 3b · Search Console (a partir de 30/09: a 28/09 ainda estava « a processar os dados »): Desempenho → Resultados da pesquisa, últimos 3 meses, 30 consultas e 30 páginas (cliques, impressões, CTR, posição). Se ainda estiver a processar: Indexação → Páginas (quantas indexadas e não indexadas, e os motivos) e Sitemaps (estado de sitemap.xml).
- Lote 4 · Mailchimp e Vercel: (1) desligar o reCAPTCHA (aprovado pelo Techonni); (2) mudar o email de confirmação da inscrição para o texto em 3 línguas de `docs/newsletter/confirmacao-3-linguas.md` — **perguntar ao Techonni « posso mudar? » antes de guardar**; (3) ver se existe o registo DNS `_dmarc` na Vercel (sem criar nem apagar).
- Lote 5 · capturas Shopify (só o admin Shopify): `shopify-variantes.webp`, `shopify-page-contact.webp`, `shopify-commandes.webp`, enviadas para `public/captures/` no GitHub.
- Lote 5b · capturas Leadpages (só o painel Leadpages): `leadpages-popup.webp` (« Conversion Tools » → « Pop-Ups » → « Create New Pop-Up » → editor do pop-up, **sem guardar nem publicar**) `leadpages-popup-publish.webp` (o painel « Publish » com as opções de abertura, sem publicar) e `leadpages-tracking.webp` (editor de uma página → « Settings » → a parte « Analytics » / « Tracking Codes » com o campo « Head Section Tracking Code », sem colar nada nem guardar), enviadas para `public/captures/` no GitHub. Anotar em `RESULTADOS-CHROME.md` se os nomes dos menus forem diferentes.
- Lote 5c · capturas Leadpages (só o painel Leadpages): `leadpages-merci.webp` (galeria de modelos filtrada em « Thank You », sem criar nada) e `leadpages-form-apres-envoi.webp` (numa página com formulário: clicar no formulário e mostrar as opções do que acontece depois do envio, sem guardar), enviadas para `public/captures/` no GitHub. Anotar os nomes exatos das opções em `RESULTADOS-CHROME.md`.
- Lote 6 · blogs: 10 blogs francófonos de e-commerce para backlinks (Google + os sites dos blogs; só ler).
