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

## Lote atual: Lote 5 · capturas Shopify

Site: admin.shopify.com (a loja de teste do Techonni). O GitHub serve só para enviar as imagens.

Regras das capturas: painel da Shopify **em francês** (como as capturas que já estão no site), formato .webp (ou .png se não der), largura ~1200 px, **sem dados pessoais** (esconder nome da loja, emails, moradas). Não guardar nem mudar nada na loja.

1. `shopify-variantes.webp`: « Produits » → abrir um produto → a secção « Variantes » (com pelo menos uma opção, por exemplo Tamanho).
2. `shopify-page-contact.webp`: « Boutique en ligne » → « Pages » → « Ajouter une page », com o painel « Modèle de thème » aberto mostrando « contact » (sem guardar).
3. `shopify-commandes.webp`: « Commandes » (a lista, mesmo vazia, com os separadores ou filtros visíveis). Anotar o nome exato do botão para expedir, se houver uma encomenda de teste (por exemplo « Traiter les articles »).

Envia as 3 imagens para https://github.com/techonni/zunrel/upload/main/public/captures (« Commit directly to the main branch », mensagem « Chrome: capturas lote 5 ») e anota o resultado em RESULTADOS-CHROME.md (passo 4).

---

## Lote seguinte: Lote 5b · capturas Leadpages

(só o painel Leadpages): `leadpages-popup.webp` (« Conversion Tools » → « Pop-Ups » → « Create New Pop-Up » → editor do pop-up, **sem guardar nem publicar**) `leadpages-popup-publish.webp` (o painel « Publish » com as opções de abertura, sem publicar) e `leadpages-tracking.webp` (editor de uma página → « Settings » → a parte « Analytics » / « Tracking Codes » com o campo « Head Section Tracking Code », sem colar nada nem guardar), enviadas para `public/captures/` no GitHub. Anotar em `RESULTADOS-CHROME.md` se os nomes dos menus forem diferentes.

Envia as imagens para https://github.com/techonni/zunrel/upload/main/public/captures (« Commit directly to the main branch ») e anota em RESULTADOS-CHROME.md (passo 4), com o título `## Lote 5b · data`.

---

## Fila (o Claude Code passa o próximo para « Lote atual » depois de ler o resultado)

- Lote 3b · Search Console (a partir de 30/09: a 28/09 ainda estava « a processar os dados »): Desempenho → Resultados da pesquisa, últimos 3 meses, 30 consultas e 30 páginas (cliques, impressões, CTR, posição). Se ainda estiver a processar: Indexação → Páginas (quantas indexadas e não indexadas, e os motivos) e Sitemaps (estado de sitemap.xml).
- Lote 5c · capturas Leadpages (só o painel Leadpages): `leadpages-merci.webp` (galeria de modelos filtrada em « Thank You », sem criar nada) e `leadpages-form-apres-envoi.webp` (numa página com formulário: clicar no formulário e mostrar as opções do que acontece depois do envio, sem guardar), enviadas para `public/captures/` no GitHub. Anotar os nomes exatos das opções em `RESULTADOS-CHROME.md`.
- Lote 6 · blogs: 10 blogs francófonos de e-commerce para backlinks (Google + os sites dos blogs; só ler).
