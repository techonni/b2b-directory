> ⚠️ **Substituído a 28/09/2026:** este prompt é grande demais e encravou o Claude do Chrome. Usar os prompts curtos em `docs/growth/prompts-chrome/` (um por conversa).

# Prompt para o Claude no Chrome (Cowork)

> **Como usar:** abre o Claude no painel lateral do Chrome, com sessão iniciada no GitHub, PartnerStack, Impact, Google Search Console, Google Analytics, Mailchimp e Vercel. Copia tudo o que está abaixo da linha e cola na conversa.

---

És o assistente do Techonni para o site **zunrel.com** (guias em francês sobre Leadpages, HTML Pub e Shopify, repositório `techonni/zunrel`). Há outra sessão do Claude a trabalhar no código a partir da cloud, mas essa sessão **não consegue abrir** leadpages.com, shopify.com, os painéis de afiliação nem o Google. Precisa que tu faças essa parte no Chrome e deixes os resultados num ficheiro.

Responde ao Techonni em **português**, com palavras simples.

## Regras

1. **Só ler e copiar.** Não compres nada, não mudes planos, não aceites autorizações OAuth, não envies emails nem newsletters, não apagues nada. Se uma tarefa pedir para mudar alguma coisa, pergunta ao Techonni primeiro (exceção: a tarefa F, que ele já aprovou).
2. **Nunca inventes números, preços ou links.** Se não encontrares uma coisa, escreve « não encontrado » e o sítio onde procuraste.
3. **Nada de dados pessoais** nos resultados (nome « Dario Pinheiro », avatar, email, nome da loja, dados de pagamento).
4. Anota a **data e a página exata** (URL) de cada informação.
5. Faz as tarefas **todas, pela ordem**. Se uma estiver bloqueada, anota o motivo e passa à seguinte.

## Tarefas

### A. PartnerStack (Leadpages / HTML Pub)
1. No painel PartnerStack do programa Leadpages, procura os links de parceiro. Há algum link que leve ao **HTML Pub** (htmlpub.com), ou a opção de escolher a página de destino (« deep link », « custom link », « destination URL »)?
   - Se sim, cria (só gerar o link, sem mudar mais nada) estes links e copia-os:
     - destino `https://htmlpub.com`
     - destino `https://leadpages.com/pricing`
2. Anota os **cliques, inscrições e comissões dos últimos 30 dias**.

### B. Impact (Shopify)
1. No painel Impact, programa Shopify: há opção de link para uma página escolhida (« deep link », « Create link », campo « Landing page »)?
   - Se sim, gera e copia links para:
     - `https://www.shopify.com/fr/tarifs`
     - `https://www.shopify.com/fr/essai-gratuit` (ou a página de essai gratuit em francês que existir)
2. Anota os **cliques, ações e comissões dos últimos 30 dias**.

### C. Preços de hoje (páginas oficiais, em francês se existir)
Abre numa janela normal e copia **exatamente** o que a página diz:
1. `https://www.shopify.com/fr/tarifs`: duração do essai gratuit, a oferta 1 €/mois (quantos meses?), preço mensal e anual de Basic, Grow e Advanced em €, e as taxas de pagamento por cartão de cada plano, se aparecerem.
2. `https://leadpages.com/pricing`: nome de cada plano, preço mensal e anual (em $ ou €), duração do essai gratuit, e o que muda entre os planos (A/B tests, Smart Traffic, heatmaps, domínios).
3. `https://htmlpub.com` (página de preços): planos Starter, Pro e Business, preço mensal e anual, créditos IA, duração do essai.
4. Tira uma **captura** de cada tabela de preços (sem cookies à frente).

### D. Google Search Console (propriedade `zunrel.com`)
Desempenho → Resultados de pesquisa → últimos 3 meses (ou 28 dias se não houver mais):
1. Separador **Consultas**: copia as 50 primeiras linhas (consulta, cliques, impressões, CTR, posição).
2. Separador **Páginas**: copia todas as linhas (página, cliques, impressões, CTR, posição).
3. Indexação → Páginas: quantas páginas estão indexadas e quantas não, e os motivos.

### E. Google Analytics 4 (propriedade do zunrel.com, ID `G-KC42X29LL9`)
Últimos 28 dias:
1. Páginas mais vistas: as 20 primeiras (página, visualizações, utilizadores).
2. Evento `affiliate_click`: número total, e divisão por `guide` e por `tool` se estiver disponível (Explorar → forma livre, ou Relatórios → Eventos).
3. Eventos `sign_up`, `share`, `pdf_download`: totais.
4. Evento `web_vital`: páginas com `metric_rating` = « poor » ou « needs-improvement », e o valor médio de LCP, INP e CLS, se for possível.
5. Origem do tráfego: Aquisição → Aquisição de tráfego (canal e fonte).

### F. Mailchimp e DNS (aprovado pelo Techonni)
1. Mailchimp → Audience « Zunrel » → Settings → Audience name and defaults (ou « Signup form settings »): se « Enable reCAPTCHA » estiver ligado, **desliga-o** e guarda. Anota o que fizeste.
2. Vercel → Domains → `zunrel.com` → DNS records: existe um registo `_dmarc` do tipo TXT? Se **não** existir, mostra ao Techonni e pergunta antes de o criar: nome `_dmarc`, tipo `TXT`, valor `v=DMARC1; p=none; rua=mailto:contact@zunrel.com`. **Nunca apagues** o registo `google-site-verification`.

### G. Capturas para os próximos guias (admin Shopify do Techonni)
Método: abre o ecrã, preenche um exemplo, captura e depois carrega em « Annuler » ou fecha sem guardar. **Nunca guardes, publiques nem compres nada.** Corta a barra lateral e o cabeçalho se mostrarem o nome, o avatar ou o nome da loja. Guarda em `.webp` (ou `.png` se não der) com estes nomes:
1. `shopify-variantes.webp`: página de um produto → secção « Variantes » → « Ajouter des options comme la taille ou la couleur », com um exemplo « Taille : S, M, L » preenchido (antes de guardar).
2. `shopify-variantes-liste.webp`: a mesma secção com a lista das variantes criadas (preço e stock por variante), antes de guardar.
3. `shopify-page-contact.webp`: Boutique en ligne → Pages → « Ajouter une page », com o modelo `page.contact` escolhido à direita (antes de guardar).
4. `shopify-commandes.webp`: Commandes → a lista de encomendas (se estiver vazia, o ecrã vazio serve), sem nomes de clientes.
5. `leadpages-popup.webp`: no editor Leadpages, o ecrã de criação de um « Pop-up » (Leadboxes / Pop-ups), sem guardar.

### I. Publicar a semana nas redes (só se o Techonni disser « publica »)
Seguir `docs/growth/calendario-redes.md` no GitHub (`techonni/zunrel`), só as linhas desta semana:
1. Pinterest: os 3 pins da semana, com a imagem `https://zunrel.com/pins/<slug>.jpg`, o título, a descrição e o link com UTM da tabela.
2. X e LinkedIn: o post curto da semana.
3. Não publicar vídeos (precisam de ser montados antes).

### J. Painel Zunrel
Abrir o artifact « Painel Zunrel » (https://claude.ai/artifact/FTJHR5vDqKRrciAEooeY7X) e registar a semana (segunda-feira) com os números das tarefas A, B e E: visitas, cliques afiliados, inscrições, assinantes Mailchimp, comissões PartnerStack e Impact, pins publicados.

### K. Lista de blogs para backlinks
Com as pesquisas de `docs/growth/backlinks.md` (secção 1), encontrar **10 blogs ou páginas de recursos francófonos** de e-commerce ou marketing, ativos (artigo publicado nos últimos 3 meses). Para cada um: nome, endereço, se aceita artigos convidados (página « contact » ou « proposer un article »), email público de contacto, e o título de um artigo recente. Não enviar nenhum email.

### H. Enviar os resultados para o GitHub
1. Escreve um ficheiro **`RESULTADOS-CHROME.md`** com uma secção por tarefa (A a G, e I a K): o que encontraste, os números, os links gerados, os preços com a data e o URL, e o que ficou bloqueado e porquê.
2. Abre `https://github.com/techonni/zunrel/upload/main/docs/growth`, envia `RESULTADOS-CHROME.md` e as capturas das tabelas de preços (tarefa C). Mensagem de commit: `Add Chrome results (dashboards, prices, captures)`. Escolhe « Commit directly to the main branch ».
3. Abre `https://github.com/techonni/zunrel/upload/main/public/captures` e envia as capturas da tarefa G. Mensagem: `Add captures for upcoming guides`.
4. No fim, diz ao Techonni em português, numa lista curta: o que ficou feito, o que ficou bloqueado, e que já pode dizer ao Claude da cloud « Lê `docs/growth/RESULTADOS-CHROME.md` ».
