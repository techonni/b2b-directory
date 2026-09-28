# Zunrel · Passagem para a próxima sessão do Claude

> **Como usar:** abre uma sessão nova do Claude Code no projeto `techonni/zunrel` e escreve só: **« continua »**.
> O CLAUDE.md manda ler este ficheiro e fazer **todos** os passos da lista « Próxima sessão », um a seguir ao outro, publicando cada um.
> Claude no Chrome (Co-work): o Techonni também diz só « continua ». O trabalho dele está em `docs/growth/CHROME-PROXIMO.md` (máx. 3 tarefas e 2 sites) e os resultados em `docs/growth/RESULTADOS-CHROME.md`. Nunca os dois ao mesmo tempo.

Data: 28/09/2026 (fim da sessão dos 20 passos). Responde ao Techonni em **português**, com palavras simples. Os textos do site e dos emails são em **francês**.

---

## Regras que não mudam

1. **Publicar sempre.** Só o que está em `main` fica online (a Vercel publica `main`). Em cada passo: push → a pré-visualização da branch fica `READY` → pull request → merge → produção `READY` → ver a página com `web_fetch_vercel_url` (esta máquina não abre o zunrel.com nem sites externos diretamente).
2. **Fazer todos os passos de uma lista na mesma sessão** (regra no CLAUDE.md). O que precisar do Techonni fica « pronto, falta o Techonni » e passa-se ao seguinte.
3. **Newsletter com visual bloqueado.** Ver `docs/newsletter/MODELE-FIGE.md`. Criar só com `scripts/mailchimp.mjs newsletter`. **Nunca enviar aos assinantes sem o « oui » do Techonni** para essa campanha.
4. **A morada no rodapé dos emails fica como está.**
5. Só Leadpages, HTML Pub e Shopify. Site anónimo. Links afiliados sempre assinalados. **Nunca inventar preços nem links de afiliação**: preços só com data e fonte (capturas das páginas oficiais).
6. Antes de apagar algo, mostrar o id e o título.
7. **Chrome e Claude Code nunca ao mesmo tempo.** O Chrome só lê painéis, tira capturas e publica nas redes; o código e o site são só do Claude Code.
8. **Bloqueios de segurança do Claude Code:** mudar o CLAUDE.md e correr o script da newsletter (envia um email de teste) podem ser bloqueados. Não insistir por outro caminho: pedir ao Techonni para aprovar o pedido de permissão.

## Ferramentas desta máquina

- `node --experimental-strip-types scripts/check-guides.mjs`: verifica guias (slugs, capturas, pins, guias com menos de 2 links internos, guias com mais de 30 dias). Correr antes de cada publicação.
- `node --experimental-strip-types scripts/make-pins.mjs --fonts <pasta Lato>`: cria as imagens Pinterest que faltam. A fonte Lato obtém-se com `git clone --depth 1 --filter=blob:none --sparse https://github.com/google/fonts && git sparse-checkout set ofl/lato` (a pasta `fonts/` está no `.gitignore`).
- `npm install` não funciona (registo bloqueado): o teste real é a pré-visualização da Vercel.
- `scripts/mailchimp.mjs status | newsletter | report | cleanup | export`.

---

## Os 20 passos: estado a 28/09/2026

| # | Passo | Estado |
|---|---|---|
| 1 | Verificar links afiliados | ✅ Feito. Os 2 links contam os cliques (confirmado pelo Techonni). Falta: link PartnerStack para o **HTML Pub** (hoje o botão HTML Pub abre a Leadpages). Relatório: `verificacao-links-afiliados.md` |
| 2 | Botões afiliados no topo e no fim dos guias | ✅ No site. GA4 `affiliate_click` tem agora `placement` (haut, bas, fiche, offres, haut-pt…) |
| 3 | Páginas de preços e comparação | ✅ `combien-coute-leadpages` e `combien-coute-shopify` (preços das capturas oficiais de 27/09, com data). « HTML Pub vs Leadpages » já existia (`choisir-entre-html-pub-et-leadpages`). ⚠️ A página inicial da Leadpages dizia « Plans start at $99/mo » a 28/09: confirmar a tabela de preços (tarefa C do Chrome) e corrigir se mudou |
| 4 | Página « Meilleures offres du moment » | ✅ `/offres/`, ligada na página inicial e no rodapé. Atualizar todos os meses (`verifiedOn` em `src/pages/offres.astro`) |
| 5 | Search Console: títulos e descrições | 🟡 Descrições mais longas em todos os guias (resumo + intro, até 160 caracteres). Campos `seoTitle` / `seoDescription` prontos. Falta: dados do Search Console (tarefa D do Chrome) para reescrever as páginas com muitas impressões e poucos cliques |
| 6 | Um guia novo por semana | ✅ Semana 1: `ajouter-des-variantes-shopify`. Próximas: calendário em `plano-growth.md` (semanas 2 a 8). Capturas pedidas na tarefa G do Chrome |
| 7 | Atualizar guias antigos todos os meses | ✅ Rotina pronta: `check-guides.mjs` lista os guias com mais de 30 dias. Nenhum está desatualizado hoje. Próxima revisão: **28/10/2026** (preços Shopify e Leadpages, `/offres/`) |
| 8 | Links internos | ✅ Todos os 41 guias têm pelo menos 2 links internos |
| 9 | Versões PT e EN | ✅ 10 guias em `/pt/` e `/en/`, com hreflang e ligações a partir dos guias franceses e da página inicial. Traduções em `src/lib/translations/` |
| 10 | 1.ª newsletter | ⏳ Pronto, **falta o « oui »** do Techonni: `ff4c739dc9` para todos (3 assinantes) |
| 11 | Ritmo quinzenal | 🟡 Calendário em `newsletter-plano.md`. O rascunho de 12/10 foi bloqueado pela segurança (envia um teste): comando pronto no ficheiro, precisa de aprovação |
| 12 | Mais brindes | ✅ `/newsletter/checklist-leadpages/` e `/newsletter/modeles-landing-page/`. O formulário anuncia o brinde do tema do guia |
| 13 | Barra discreta no fim do guia | ✅ Aparece depois de 60 % do guia, leva ao formulário, fecha por 14 dias, não aparece para inscritos |
| 14 | Pinterest 3 pins/semana | 🟡 Todos os 41 guias têm imagem. Calendário até 30/12 em `calendario-redes.md`. **Falta publicar** (Techonni ou Claude no Chrome, tarefa I) |
| 15 | Vídeos curtos | 🟡 Guiões 1-5 (doc) + 6-9 em `calendario-redes.md`, com datas e links UTM. **Falta montar e publicar** |
| 16 | X / LinkedIn | 🟡 4 posts curtos prontos + artigos do doc « Articles X ». **Falta publicar** |
| 17 | Fóruns | 🟡 5 respostas modelo e onde procurar em `calendario-redes.md`. **Falta publicar** (máx. 2 por dia) |
| 18 | Painel semanal | ✅ Artifact « Painel Zunrel »: https://claude.ai/artifact/FTJHR5vDqKRrciAEooeY7X (1.ª semana registada: 3 assinantes). Preencher cada segunda-feira (tarefa J do Chrome) |
| 19 | Velocidade | 🟡 Capturas com largura/altura (sem « saltos » na página); capturas leves (máx. 61 KB). Falta: dados `web_vital` do GA4 (tarefa E) para ver páginas lentas |
| 20 | Backlinks | 🟡 Plano, 4 propostas de artigos e emails modelo em `backlinks.md`. Falta: lista de 10 blogs (tarefa K do Chrome) e envio dos emails pelo Techonni |

## Pendentes do lado do Techonni

- [ ] **« oui »** para enviar `ff4c739dc9` (1.ª newsletter) a todos.
- [ ] Aprovar o pedido de permissão para criar o rascunho da newsletter de 12/10 (comando em `newsletter-plano.md`).
- [ ] Uma só vez: guardar nas instruções do projeto do Co-work a frase de arranque (ver « Claude no Chrome » abaixo). Depois, dizer « continua » no Chrome (lote 1: preços).
- [ ] Link PartnerStack que leve ao **HTML Pub**.
- [ ] No iCloud: marcar os testes como « Não é lixo » e guardar contact@zunrel.com nos contactos.

## Próxima sessão (fazer tudo, por esta ordem)

1. Ler `docs/growth/RESULTADOS-CHROME.md`. Usar os lotes novos, passar o lote seguinte da fila para « Lote atual » em `CHROME-PROXIMO.md` (máx. 3 tarefas, 2 sites) e publicar. Se não houver resultados novos, seguir para o ponto 5.
2. Com os resultados: corrigir preços (`combien-coute-*`, `/offres/`, botões), pôr o link HTML Pub em `affiliateUrl` da ferramenta `html-pub`, pôr deep links se existirem.
3. Search Console: `seoTitle` / `seoDescription` nas 5 páginas com mais impressões e CTR mais baixo.
4. GA4: ver `affiliate_click` por `placement` e `guide`; ver `web_vital` e corrigir páginas lentas. Registar a semana no Painel.
5. Guia da semana 2 (« formulaire de contact Shopify ») com as capturas da tarefa G, pin com `make-pins.mjs`, 2 links internos.
6. Newsletter: criar o rascunho de 12/10 (com aprovação) e enviar só com « oui ».
7. Traduzir para PT e EN os guias novos que tiverem mais visitas.
8. Atualizar este ficheiro, publicar e enviar ao Techonni.

---

## Claude no Chrome

Frase a guardar **uma vez** nas instruções do projeto do Co-work (ou a colar uma única vez):

> Quando eu disser « continua », abre https://github.com/techonni/zunrel/blob/main/docs/growth/CHROME-PROXIMO.md e faz exatamente o que lá está (no máximo 3 tarefas e 2 sites). Responde-me em português.

Os prompts de `prompts-chrome/` e o `PROMPT-COWORK-CHROME.md` ficam só como arquivo.

## Referência

- **Mailchimp:** chave `MAILCHIMP_API_KEY` (us9, expira ~09/2027). Plano Free: 250 contactos, 500 envios/mês, sem agendamento. Lista `893c08eb5d`, double opt-in, remetente `Zunrel <contact@zunrel.com>`. Tags: `shopify` 11404677 · `leadpages` 11404678 · `htmlpub` 11404679. Rascunhos: `ff4c739dc9`, `42198dabdc`, `4cdfb81660`, `8fd430e3d8`.
- **Vercel:** equipa `team_wgtfY6T8u2diPfxnznOnKn6t`, projeto `prj_FcUDt9LY9iVD0NlgcC3HPK110WqH`.
- **Site:** 41 guias FR + 10 PT + 10 EN; `/offres/`; 3 brindes; FAQ; pesquisa Pagefind; GA4 (`affiliate_click` com `placement`, `sign_up`, `share`, `pdf_download`, `newsletter_bar_click`, `web_vital`).
- **Documentos:** `plano-growth.md` (calendário de guias), `calendario-redes.md`, `newsletter-plano.md`, `backlinks.md`, `verificacao-links-afiliados.md`, `PROMPT-COWORK-CHROME.md`.
