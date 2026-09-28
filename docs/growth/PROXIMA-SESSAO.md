# Zunrel · Passagem para a próxima sessão do Claude

> **Como usar:** abre uma sessão nova do Claude Code no projeto `techonni/zunrel` e escreve só: **« continua »**.
> O CLAUDE.md manda ler este ficheiro e fazer **todos** os passos da lista « Próxima sessão », um a seguir ao outro, publicando cada um.
> Claude no Chrome (Co-work): o Techonni também diz só « continua ». O trabalho dele está em `docs/growth/CHROME-PROXIMO.md` (máx. 3 tarefas e 2 sites) e os resultados em `docs/growth/RESULTADOS-CHROME.md`. Nunca os dois ao mesmo tempo.

Data: 28/09/2026 (6.ª sessão do dia: resultados do lote 3, lote 2 de novo para o Chrome, 2 traduções, guia da semana 7). Responde ao Techonni em **português**, com palavras simples. Os textos do site e dos emails são em **francês**.

---

## Regras que não mudam

0. **Newsletter em pausa até haver um inscrito real** (decisão do Techonni a 28/09/2026). Inscrito real = email que **não** contém « dario » nem « zunrel ». Até lá: não planear, não criar rascunhos, não agendar, não testar, e **nunca perguntar ao Techonni pelo « oui » nem por permissões** para a newsletter. A rotina diária `trig_017qJ8Bu58TjQ9LJzu8SXaSA` avisa-o quando chegar o primeiro inscrito real.
1. **Publicar sempre.** Só o que está em `main` fica online (a Vercel publica `main`). Em cada passo: push → a pré-visualização da branch fica `READY` → pull request → merge → produção `READY` → ver a página com `web_fetch_vercel_url` (esta máquina não abre o zunrel.com nem sites externos diretamente).
2. **Fazer todos os passos de uma lista na mesma sessão** (regra no CLAUDE.md). O que precisar do Techonni fica « pronto, falta o Techonni » e passa-se ao seguinte.
3. **Newsletter com visual bloqueado.** Ver `docs/newsletter/MODELE-FIGE.md`. Criar só com `scripts/mailchimp.mjs newsletter`. **Nunca enviar aos assinantes sem o « oui » do Techonni** para essa campanha.
4. **A morada no rodapé dos emails fica como está.**
5. Só Leadpages, HTML Pub e Shopify. Site anónimo. Links afiliados sempre assinalados. **Nunca inventar preços nem links de afiliação**: preços só com data e fonte (capturas das páginas oficiais).
6. Antes de apagar algo, mostrar o id e o título.
7. **Chrome e Claude Code nunca ao mesmo tempo.** O Chrome só lê painéis, tira capturas e publica nas redes; o código e o site são só do Claude Code.
8. **Bloqueios de segurança do Claude Code:** mudar o CLAUDE.md e correr o script da newsletter (envia um email de teste) podem ser bloqueados. Não insistir por outro caminho: pedir ao Techonni para aprovar o pedido de permissão.

## Três línguas (decisão do Techonni a 28/09/2026)

- **Francês** (principal), **inglês para os EUA** (dólares, inglês americano, leis americanas) e **português neutro** (serve Brasil e Portugal: sem « telemóvel », « ecrã », « equipa », « registo »…).
- Botão **FR · US · PT** no topo de todas as páginas: leva à mesma página na outra língua quando existe.
- **Cada guia novo sai nas 3 línguas no mesmo dia** (traduções em `src/lib/translations/pt.ts` e `en.ts`, mesmo número de etapas que o guia francês). Os guias antigos traduzem-se aos poucos, começando pelos mais visitados.
- Preços: nunca pôr euros no inglês. O guia inglês de preços da Shopify está escondido (`hidden: true`) até termos os preços americanos (lote 1 do Chrome).
- **Os 3 assinantes atuais são emails de teste do Techonni.** Uma rotina diária (« Zunrel: aviso de novos inscritos na newsletter », `trig_017qJ8Bu58TjQ9LJzu8SXaSA`, 07:52 UTC) avisa-o quando houver inscritos reais. Não pagar o Mailchimp antes de haver inscritos.
- Email de confirmação em 3 línguas (grátis): texto em `docs/newsletter/confirmacao-3-linguas.md`, a pôr pelo Chrome no lote 4.
- Newsletter: cada inscrito recebe a tag da língua da página (`lang-fr` 11404680, `lang-pt` 11404681, `lang-en` 11404682). Enviar uma campanha por língua só quando houver inscritos nessa língua, e só com o « oui » do Techonni (os textos do rodapé do modelo em PT/EN precisam da aprovação dele). O email de confirmação passa a ter as 3 línguas no mesmo email (lote 4 do Chrome).

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
| 3 | Páginas de preços e comparação | ✅ `combien-coute-leadpages` (todos os planos, incl. Starter e Scale, confirmados pelo Chrome a 28/09; agora também em PT e EN) e `combien-coute-shopify` (preços em euros confirmados a 28/09). ⚠️ Preços Shopify em **dólares** ainda por obter: a Shopify mostra sempre euros ao Chrome (geolocalização). O guia EN de preços da Shopify continua escondido |
| 4 | Página « Meilleures offres du moment » | ✅ `/offres/`, ligada na página inicial e no rodapé. Atualizar todos os meses (`verifiedOn` em `src/pages/offres.astro`) |
| 5 | Search Console: títulos e descrições | 🟡 Descrições mais longas em todos os guias (resumo + intro, até 160 caracteres). Campos `seoTitle` / `seoDescription` prontos. Falta: dados do Search Console (tarefa D do Chrome) para reescrever as páginas com muitas impressões e poucos cliques |
| 6 | Um guia novo por semana | ✅ Semanas 1 a 7 feitas (5: `suivre-ses-commandes-et-expedier-shopify`; 6: `ajouter-google-analytics-a-une-page-leadpages`; 7: `creer-une-page-de-remerciement-leadpages`; FR + PT + EN, 2 pins cada). Próxima: semana 8 de `plano-growth.md` (« vendre sur Instagram avec Shopify »), depois escrever as semanas 9 a 12 no calendário. Capturas pedidas nos lotes 5 e 5b do Chrome |
| 7 | Atualizar guias antigos todos os meses | ✅ Rotina pronta: `check-guides.mjs` lista os guias com mais de 30 dias. Nenhum está desatualizado hoje. Próxima revisão: **28/10/2026** (preços Shopify e Leadpages, `/offres/`) |
| 8 | Links internos | ✅ Todos os 41 guias têm pelo menos 2 links internos |
| 9 | Versões PT e EN | ✅ 19 guias em PT e EN (a 28/09). Primeiros: 12 guias em `/pt/` e `/en/`, com hreflang e ligações a partir dos guias franceses e da página inicial. Traduções em `src/lib/translations/` |
| 10 | 1.ª newsletter | ⏸️ Em pausa até haver um inscrito real (rascunho `ff4c739dc9` guardado) |
| 11 | Ritmo quinzenal | ⏸️ Em pausa até haver um inscrito real |
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

- [x] **Impact:** sessão iniciada no Chrome (confirmado pelo Chrome a 28/09).

- [ ] Pinterest: pinterest.com → menu do perfil → Configurações → **Criar Pins em massa** → carregar `pinterest-agendar.csv` (descarregar em https://github.com/techonni/zunrel/blob/main/docs/growth/pinterest-agendar.csv, botão « Download raw file »). Só depois da mensagem do Claude Code a 29/09 (« já podes carregar »): antes disso as imagens novas ainda não estão online. Se um painel não existir, o Pinterest cria-o sozinho.
- [x] Frase do Co-work: não é preciso mudar nada. A correção está no ficheiro que o Co-work lê (`CHROME-PROXIMO.md`).
- [ ] Link PartnerStack que leve ao **HTML Pub**.
- [ ] Se ainda vir « b2b-directory » na app do Claude no Mac: é uma pasta antiga no computador. No Finder, apagar (ou renomear para `zunrel`) a pasta `b2b-directory`, e na app do Claude escolher sempre o repositório `techonni/zunrel`. No GitHub e na Vercel já não existe nada com esse nome.
- [ ] No iCloud: marcar os testes como « Não é lixo » e guardar contact@zunrel.com nos contactos.

## Sessão de 28/09 (2.ª): o que foi feito

| Passo | Estado |
|---|---|
| « b2b » | ✅ Explicado: não há segundo repositório. O `package.json` ainda tinha o nome do modelo inicial, `b2b-directory`; o Co-work lia esse nome. Mudado para `zunrel`. Na Vercel também só existe o projeto `zunrel` para este site. Novo endereço `zunrel-com.vercel.app` (redireciona para zunrel.com; `zunrel.vercel.app` já é de outra pessoa). **Falta o Techonni:** apagar `b2b-directory-eight.vercel.app` em Vercel → projeto zunrel → Settings → Domains (as ferramentas do Claude Code não conseguem remover domínios). |
| 1. Resultados do Chrome | ⏳ Ainda nenhum lote em `RESULTADOS-CHROME.md`. O lote 1 (preços) continua como « Lote atual ». **Falta o Techonni** dizer « continua » no Chrome. |
| 2. Preços, link HTML Pub | ⏳ Bloqueado: espera o lote 1 (preços) e o lote 2 (PartnerStack) do Chrome. |
| 3. Search Console | ⏳ Bloqueado: espera o lote 3 do Chrome. |
| 4. GA4 e Painel | ⏳ Bloqueado: espera o lote 3 do Chrome. |
| 5. Guia da semana 2 | ✅ `ajouter-un-formulaire-de-contact-shopify` em FR + PT (`formulario-de-contato-shopify`) + EN (`add-contact-form-shopify`), pin, ligado a partir de `creer-un-menu-shopify` e `rediger-les-politiques-shopify`. Post e pin no dia 10 de `fila-redes.md`. |
| 6. Newsletter 12/10 | ⏸️ Cancelado: newsletter em pausa até haver um inscrito real (regra 0). |
| 5b. Guia da semana 3 (adiantado) | ✅ `creer-une-page-lien-en-bio-avec-html-pub` em FR + PT (`pagina-link-na-bio-html-pub`) + EN (`link-in-bio-page-html-pub`), pin, post e pin no dia 11 de `fila-redes.md`. |
| Chrome em pausa | ⏸️ O Techonni atingiu o limite de uso do Co-work a 28/09. **Não pedir nada ao Chrome** até ele dizer que voltou. O lote 1 fica à espera em `CHROME-PROXIMO.md`. |
| 7. Traduções | ✅ `ajouter-des-variantes-shopify` também em PT e EN. Sem dados de visitas ainda (lote 3) para escolher os seguintes. |

## Sessão de 28/09 (3.ª): o que foi feito

| Passo | Estado |
|---|---|
| Limpeza « b2b » | ✅ Verificado: o Claude só tem acesso a **um** repositório, `techonni/zunrel`. Na Vercel, o projeto `zunrel` só tem `zunrel.com`, `www.zunrel.com` e `zunrel-com.vercel.app` (o endereço `b2b-directory-eight.vercel.app` já foi apagado). O código não tem mais « b2b ». A conversa antiga « Dois repos e B2B » foi renomeada. Se ainda aparecer « b2b-directory » na app do Claude no Mac, é só uma pasta/lista antiga guardada na app (ver « Pendentes do lado do Techonni »). |
| 1. Resultados do Chrome | ⏸️ Nenhum lote novo (o Chrome está em pausa: limite de uso). Acrescentado à fila o **lote 5b** (capturas do pop-up Leadpages). |
| 2 a 4. Preços, Search Console, GA4 | ⏳ Bloqueados: esperam os lotes 1 a 3 do Chrome. |
| 5. Guia da semana 4 | ✅ `ajouter-un-pop-up-d-inscription-leadpages` em FR + PT (`pop-up-de-inscricao-leadpages`) + EN (`add-signup-pop-up-leadpages`), pin, ligado a partir de `recolter-des-e-mails-avant-un-lancement` e `connecter-leadpages-a-son-outil-e-mail`. Fonte: artigos de ajuda oficiais da Leadpages (« Create a pop-up », « Publish your pop-up »). Post e pin no dia 12 de `fila-redes.md`. Falta a captura (lote 5b). |
| 6. Newsletter | ⏸️ Nada (regra 0). |
| 7. Traduções | ⏳ Espera os dados de visitas (lote 3). |
| Pinterest de uma vez | ✅ `docs/growth/pinterest-agendar.csv` (pedido do Techonni: todos os pins, 10 por dia): **88 pins** = a imagem normal + a imagem « erreurs » de cada um dos 44 guias, de 30/09 a 08/10, das 06:00 às 19:30 UTC. Tudo em **francês**: cada pin leva ao guia francês (`/guides/<slug>/`), nunca a `/pt/` ou `/en/` (as imagens são em francês). UTM `utm_campaign=pin-csv`. Não há conector do Claude para o Pinterest, por isso o carregamento é um clique do Techonni. Próximo CSV antes de 08/10 (guias novos + imagens novas). Os pins das tabelas de `fila-redes.md` ficam todos dentro deste CSV: o Chrome não publica pins. |
| Vercel: limite diário | ⚠️ A 28/09 às 05:30 UTC a Vercel recusou a publicação: « Deployment rate limited — retry in 24 hours » (plano Hobby: máx. 100 publicações por dia). O merge foi feito; o site só é atualizado com a próxima publicação. **Próxima sessão:** ver se a produção ficou `READY` com o commit de `main`; se não, relançar com `create_deployment` em `main`. Publicar menos vezes por dia (juntar os passos num só PR). |
| Co-work: perguntas fora do « continua » | ✅ Corrigido em `CHROME-PROXIMO.md` (« Regra n.º 1 »: « continua » = fazer o Lote atual, sem outras perguntas; a rotina diária só depois, com uma única pergunta) e em `CHROME-DIARIO.md`. A causa: o passo 0 mandava o Co-work propor a rotina diária antes de tudo. Nada a fazer do lado do Techonni. |
| Alojamento: decisão | ✅ O Techonni **fica na Vercel** (preferiu-a ao Cloudflare Pages grátis). Passa ao **Pro** (~21-22 €/mês com IVA, sem teste, sem reembolso) quando o cartão Wise novo tiver ~30 € de folga: ele diz « sim, compra o Pro » → `get_purchase_quote` + `buy_pro`. Até lá, plano grátis: **máx. 100 publicações por 24 h**, por isso juntar o trabalho em poucos pushes (um PR por passo, não um push por pequena alteração). |
| 8. Pins dos dias 10+ | ✅ 2.ª imagem para cada um dos 44 guias (« Les erreurs à éviter », fundo escuro) em `public/pins/erreurs/`, criada com `make-pins.mjs --variant erreurs`. Na fila: 4 por dia, dias 10 a 20. |

## Sessão de 28/09 (4.ª): o que foi feito

| Passo | Estado |
|---|---|
| 1. Resultados do Chrome | ✅ Lote 1 (preços) lido e usado. **Lote 2 (afiliação: PartnerStack + Impact)** passou para « Lote atual » em `CHROME-PROXIMO.md`. **Falta o Techonni** dizer « continua » no Chrome. |
| 2. Preços | ✅ Leadpages/HTML Pub: Starter 5,58 $ (7 $), Pro 16 $ (20 $), Business 26,42 $ (33 $), Grow 53,58 $ (67 $), Optimize 108 $ (135 $), Scale 216,83 $ (271 $), anual (mensal); teste 7 dias. Tirada a frase « à partir de 99 $ ». Shopify: mesmos preços em euros (19/56/289 € anual, Basic 27 € mensal, Plus 2100 €, 3 dias + 1 €/mês 3 meses), data passada a 28/09. `/offres/` sem mudanças (nada mudou). ⏳ Link HTML Pub: espera o lote 2. 🚫 Preços Shopify em dólares: bloqueado (a Shopify redireciona o Chrome para a versão em euros). |
| 3-4. Search Console, GA4 | ⏳ Esperam o lote 3 do Chrome. |
| 5. Guia da semana 5 | ✅ `suivre-ses-commandes-et-expedier-shopify` em FR + PT (`pedidos-e-envios-shopify`) + EN (`track-orders-and-ship-shopify`), pin normal + pin « erreurs », ligado a partir de `regler-l-expedition-shopify` e `ouvrir-sa-boutique-shopify-au-public`. Fonte: ajuda oficial Shopify. Pins acrescentados ao `pinterest-agendar.csv` (08/10, 18:00 e 19:30). Falta a captura `shopify-commandes.webp` (lote 5): quando chegar, pô-la no passo 1 e refazer os 2 pins com `--force`. |
| 6. Newsletter | ⏸️ Nada (regra 0). |
| 7. Traduções | ✅ `combien-coute-leadpages` em PT (`quanto-custa-leadpages`) e EN (`how-much-does-leadpages-cost`): preços em dólares, servem os EUA. Os outros esperam os dados de visitas (lote 3). |
| 8. Redes | ✅ Posts X/LinkedIn dos dias 13 a 19 em `fila-redes.md` (pins até ao dia 20). |

## Sessão de 28/09 (5.ª): o que foi feito

| Passo | Estado |
|---|---|
| 1. Resultados do Chrome | ✅ O Chrome fez a **rotina diária** (dia 1: post no X e no LinkedIn; PartnerStack) em vez do lote 2. Números: PartnerStack, programa Leadpages ativo, **85 cliques no total, 14 nos últimos 90 dias, 0 inscrições, 0 € de comissões**; candidatura à rede PartnerStack continua recusada (os programas já aprovados continuam ativos); nenhum link novo. **Impact bloqueado: o Chrome não tem sessão iniciada.** O resto do lote 2 passou para a fila como « Lote 2b » (só depois do login no Impact). **Lote atual = Lote 3 (Search Console + GA4).** |
| 2. Link HTML Pub | ⏳ O PartnerStack não mostrou nenhum link novo; a pergunta exata (existe link para o HTML Pub?) está no lote 2b. |
| 3-4. Search Console, GA4 | ⏳ Lote 3 pronto para o Chrome. |
| 5. Guia da semana 6 | ✅ `ajouter-google-analytics-a-une-page-leadpages` em FR + PT (`google-analytics-leadpages`) + EN (`add-google-analytics-leadpages`), 2 pins, ligado a partir de `faire-un-test-ab-leadpages` e `ameliorer-le-taux-de-conversion-de-ses-pages-de-a-a-z`. ⚠️ Esta máquina não consegue abrir a ajuda da Leadpages: os nomes dos menus da Leadpages (« Settings », « Head Section Tracking Code ») vêm do guia do pop-up e ficam por confirmar com a captura `leadpages-tracking.webp` (acrescentada ao lote 5b). Pins no CSV a 09/10; post no dia 20 de `fila-redes.md`. |
| 6. Newsletter | ⏸️ Nada (regra 0). |
| 7. Traduções | ⏳ Esperam o lote 3. |
| 8. Redes | ✅ Posts até ao dia 20. |

## Sessão de 28/09 (6.ª): o que foi feito

| Passo | Estado |
|---|---|
| 1. Resultados do Chrome | ✅ Lote 3 lido. **Search Console: bloqueado** (« a processar os dados, tentar daqui a um dia »): novo **lote 3b** na fila, a partir de 30/09. **GA4 (31/08-27/09): 32 visualizações, 2 utilizadores, 7 sessões** (Direct 4, Organic Social 3; zero Google e zero referências). Páginas mais vistas: `/` 12, depois 2 visitas cada: `/a-propos/`, `/guides/`, `choisir-entre-html-pub-et-leadpages`, `creer-un-code-de-reduction-shopify`, `/kit-media/`, `/recherche/`. Eventos: `web_vital` 108, `sign_up` 1, `share` 1, `pdf_download` 1, **`affiliate_click` 0**. O Techonni disse que o lote 2 ainda não foi feito: o **lote 2 (PartnerStack + Impact) voltou a ser o « Lote atual »** (o Impact já tem sessão iniciada). |
| 2. Link HTML Pub | ⏳ Espera o lote 2. |
| 3. Search Console | ⏳ Espera o lote 3b (30/09 ou depois). |
| 4. GA4 | ✅ Lido (acima). Quase todo o tráfego ainda é do Techonni: nada a corrigir ainda (os `web_vital` não trazem a página nos totais; ver por página quando houver visitas reais). O Painel não foi atualizado por mim (é a tarefa J do Chrome às segundas-feiras). |
| 5. Guia da semana 7 | ✅ `creer-une-page-de-remerciement-leadpages` em FR + PT (`pagina-de-agradecimento-leadpages`) + EN (`thank-you-page-leadpages`), 2 pins (CSV 09/10), ligado a partir de `recolter-des-e-mails-avant-un-lancement` e `connecter-leadpages-a-son-outil-e-mail`. ⚠️ Nomes dos menus Leadpages por confirmar: capturas pedidas no novo **lote 5c**. |
| 6. Newsletter | ⏸️ Nada (regra 0). |
| 7. Traduções | ✅ Com os poucos dados do GA4: `creer-un-code-de-reduction-shopify` (PT `codigo-de-desconto-shopify`, EN `create-discount-code-shopify`) e `regler-l-expedition-shopify` (PT `custos-de-envio-shopify`, EN `set-up-shipping-rates-shopify`, em dólares e zonas dos EUA). Fontes oficiais traduzidas também para os guias das encomendas, dos descontos e do envio. |
| 8. Redes | ✅ Posts até ao dia 21. |

## Próxima sessão (fazer tudo, por esta ordem)

0. Ver se a produção da Vercel está `READY` com o último commit de `main` (a 28/09 houve um « rate limit »).
1. Ler `docs/growth/RESULTADOS-CHROME.md`. Usar os lotes novos (esperado: lote 2), passar o lote seguinte da fila para « Lote atual » em `CHROME-PROXIMO.md` (máx. 3 tarefas, 2 sites) e publicar. Se não houver resultados novos, seguir para o ponto 5.
2. Lote 2 (quando feito): pôr o link HTML Pub em `affiliateUrl` da ferramenta `html-pub` e o deep link Shopify se existir; registar cliques/comissões no Painel.
3. Search Console (lote 3b, a partir de 30/09): `seoTitle` / `seoDescription` nas 5 páginas com mais impressões e CTR mais baixo.
4. GA4: próxima leitura na semana de 05/10 (pedir num lote com o Search Console): `affiliate_click` por `placement` e `guide`; `web_vital` por página.
5. Guia da semana 8 (« vendre sur Instagram avec Shopify », ver `plano-growth.md`) em FR, PT e EN, pin normal + pin `--variant erreurs`, 2 links internos, pins no CSV. Capturas quando chegarem: `shopify-page-contact.webp` (lote 5, passo 1 do guia do formulário), `shopify-commandes.webp` (lote 5, passo 1 do guia das encomendas + refazer os pins), `leadpages-popup.webp` e `leadpages-popup-publish.webp` (lote 5b, passos 1 e 4 do guia do pop-up), `leadpages-tracking.webp` (lote 5b, passo 3 do guia Google Analytics), `leadpages-merci.webp` e `leadpages-form-apres-envoi.webp` (lote 5c, passos 1 e 5 do guia da página de agradecimento). Corrigir os nomes dos menus se forem outros.
6. Newsletter: **nada** enquanto não houver inscrito real (regra 0). Não perguntar ao Techonni.
7. Traduzir para PT e EN mais 2 guias (os mais visitados quando houver dados; senão `ajouter-un-produit-shopify` e `creer-sa-boutique-shopify-de-a-a-z`).
8. `fila-redes.md` tem posts até ao dia 21 e pins até ao dia 20: manter 7 dias de avanço. Antes de 08/10: novo `pinterest-agendar.csv` (a partir de 09/10) com imagens novas.
9. Atualizar este ficheiro, publicar e enviar ao Techonni.

---

## Claude no Chrome

**Rotina diária** (`CHROME-DIARIO.md`): A) X + LinkedIn, B) Impact + PartnerStack. Só depois do Lote atual, e a única pergunta é « Posso começar? ». **Pinterest:** já não é diário: `pinterest-agendar.csv` agenda os pins de uma vez (Configurações → Criar Pins em massa). O conteúdo está em `fila-redes.md` (9 dias preparados a 28/09): manter sempre 7 dias de avanço.

Frase a guardar **uma vez** nas instruções do projeto do Co-work (ou a colar uma única vez):

> Quando eu disser « continua », abre https://github.com/techonni/zunrel/blob/main/docs/growth/CHROME-PROXIMO.md e faz exatamente o que lá está (no máximo 3 tarefas e 2 sites), sem me fazer outras perguntas. Responde-me em português.

Os prompts de `prompts-chrome/` e o `PROMPT-COWORK-CHROME.md` ficam só como arquivo.

## Referência

- **Mailchimp:** chave `MAILCHIMP_API_KEY` (us9, expira ~09/2027). Plano Free: 250 contactos, 500 envios/mês, sem agendamento. Lista `893c08eb5d`, double opt-in, remetente `Zunrel <contact@zunrel.com>`. Tags: `shopify` 11404677 · `leadpages` 11404678 · `htmlpub` 11404679. Rascunhos: `ff4c739dc9`, `42198dabdc`, `4cdfb81660`, `8fd430e3d8`.
- **Vercel:** equipa `team_wgtfY6T8u2diPfxnznOnKn6t`, projeto `prj_FcUDt9LY9iVD0NlgcC3HPK110WqH`.
- **Site:** 47 guias FR + 20 PT + 20 EN (o EN de preços Shopify escondido); `/offres/`; 3 brindes; FAQ; pesquisa Pagefind; GA4 (`affiliate_click` com `placement`, `sign_up`, `share`, `pdf_download`, `newsletter_bar_click`, `web_vital`).
- **Documentos:** `plano-growth.md` (calendário de guias), `calendario-redes.md`, `newsletter-plano.md`, `backlinks.md`, `verificacao-links-afiliados.md`, `PROMPT-COWORK-CHROME.md`.
