# Zunrel · Passagem para a próxima sessão do Claude

> **Como usar:** abre uma sessão nova do Claude Code no projeto `techonni/zunrel` e escreve:
> « Lê `docs/growth/PROXIMA-SESSAO.md` e começa pelo passo 2. Faz um passo de cada vez, publica tudo (merge para `main`) e confirma no zunrel.com. »

Data: 28/09/2026 (atualizado depois do passo 1). Responde ao Techonni em **português**, com palavras simples. Os textos do site e dos emails são em **francês**.

---

## Regras que não mudam

1. **Publicar sempre.** Só o que está em `main` fica online (a Vercel publica `main`). No fim de cada tarefa: push → pull request → merge → confirmar que a produção na Vercel está `READY` → ver a página no zunrel.com com `web_fetch_vercel_url` (esta máquina não consegue abrir o zunrel.com diretamente).
2. **Newsletter com visual bloqueado.** Ver `docs/newsletter/MODELE-FIGE.md`. Criar só com `scripts/mailchimp.mjs newsletter`. **Nunca enviar aos assinantes sem o « oui » do Techonni** para essa campanha. Os testes vão para `--to diaspinheiro5@icloud.com`.
3. **A morada no rodapé dos emails fica como está** (decisão do Techonni).
4. Só Leadpages, HTML Pub e Shopify. Site anónimo. Liens affiliés sempre assinalados. Nunca inventar preços nem links de afiliação.
5. Antes de apagar algo, mostrar o id e o título.

## O que já está feito

- **Passo 1 (links afiliados):** verificado; as fiches outil passam a dizer ao GA4 qual ferramenta foi clicada (`data-affiliate`). Nota: esta máquina não consegue abrir leadpages.com, shopify.com nem os links afiliados — para isso é preciso o Techonni.

- **Mailchimp pela API:** chave `MAILCHIMP_API_KEY` (datacenter us9, expira por volta de 09/2027). Plano Free: 250 contactos, 500 envios por mês, sem agendamento.
  - Lista `893c08eb5d` « Zunrel », língua `fr`, double opt-in ativo, remetente `Zunrel <contact@zunrel.com>`, domínio autenticado.
  - Tags: `shopify` 11404677 · `leadpages` 11404678 · `htmlpub` 11404679.
  - 4 rascunhos com o modelo aprovado, **ainda não enviados**:
    - `ff4c739dc9` Ouvrez votre boutique Shopify de A à Z (aconselhado para o 1.º envio)
    - `42198dabdc` 4 nouveaux guides pour préparer votre boutique Shopify
    - `4cdfb81660` Créez votre landing page de A à Z
    - `8fd430e3d8` Attirez plus de clients avec une landing page
- **Script** `scripts/mailchimp.mjs`: `status`, `newsletter`, `report <id>`, `cleanup [--apply]`, `export`. Correr com `node --experimental-strip-types`.
- **Site:** 38 guias; `/newsletter/` com escolha de tema (Shopify / Leadpages & HTML Pub / Tout → tags); brinde `/newsletter/checklist-shopify/`; `/newsletter/confirmee/`; FAQ; fil d'Ariane; pesquisa Pagefind; GA4 com eventos (`affiliate_click`, `sign_up`, `share`, `pdf_download`).
- **Vercel:** equipa `team_wgtfY6T8u2diPfxnznOnKn6t`, projeto `prj_FcUDt9LY9iVD0NlgcC3HPK110WqH`.
- **Plano anterior:** `docs/growth/plano-growth.md` (calendário de guias e textos para as redes).

## Pendentes do lado do Techonni

- [ ] Desligar o reCAPTCHA no Mailchimp (Audience → Settings → « Enable reCAPTCHA »).
- [ ] Acrescentar o DMARC na Vercel, se ainda não existir: `_dmarc` · TXT · `v=DMARC1; p=none; rua=mailto:contact@zunrel.com`.
- [ ] No iCloud: marcar os testes como « Não é lixo » e guardar contact@zunrel.com nos contactos.
- [ ] Dizer qual newsletter enviar primeiro, e se vai para todos ou só para uma tag.
- [ ] **Links afiliados** (ver `docs/growth/verificacao-links-afiliados.md`): mandar um link PartnerStack que leve ao **HTML Pub** (hoje o botão HTML Pub abre a Leadpages); abrir os 2 links numa janela privada e dizer onde chegam; ver se PartnerStack e Impact têm « deep links » para as páginas de preços; confirmar os preços dos botões (Shopify 3 dias + 1 €/mês durante 3 meses, Leadpages 7 dias); ver se os cliques aparecem nos painéis.

---

## 20 passos de growth marketing

### Dinheiro primeiro (afiliação)
1. ✅ *Feito em 28/09/2026 (relatório em `docs/growth/verificacao-links-afiliados.md`; falta a parte do Techonni acima). Próxima sessão: começar pelo passo 2.* **Verificar todos os links de afiliação.** Em `src/lib/guides.ts`: `affiliateLink` (Leadpages/HTML Pub, PartnerStack) e `shopifyLink` (Shopify, Impact), e todos os `affiliateUrl`. Confirmar que cada botão « Essayer » dos guias, das fiches outil e da página inicial usa o link afiliado certo, com `rel="sponsored"`. Seguir os redirecionamentos para ver se chegam ao sítio certo (Leadpages vs HTML Pub). Listar os links diretos (não afiliados) que deviam ser afiliados. Confirmar com o Techonni no painel PartnerStack/Impact que os cliques estão a ser contados.
2. **Pôr os botões afiliados no sítio certo.** Um botão claro no topo de cada guia (logo depois da intro) e outro no fim. Medir no GA4 (`affiliate_click` por guia) quais convertem.
3. **Páginas de comparação e de preços** (as pesquisas que mais vendem): « Leadpages prix 2026 », « Shopify prix et frais », « HTML Pub vs Leadpages : lequel choisir ». Preços verificados no próprio dia.
4. **Página « Meilleures offres du moment »** com os testes grátis e as promoções atuais (ex.: Shopify a 1 €/mês), atualizada todos os meses.

### SEO (tráfego grátis)
5. **Google Search Console:** ver as pesquisas com muitas impressões e poucos cliques, e reescrever o título e a descrição dessas páginas.
6. **Um guia novo por semana** a partir do calendário em `plano-growth.md`, sempre com capturas de ecrã.
7. **Atualizar os guias antigos** (preços, capturas, data) todos os meses. O Google favorece conteúdo recente.
8. **Links internos:** cada guia novo recebe pelo menos 2 links de guias antigos. Verificar que não fica nenhum guia órfão.
9. **Versões PT e EN** dos 10 guias mais visitados (Brasil/Portugal e mercado inglês).

### Email (Mailchimp)
10. **Enviar a 1.ª newsletter** com o « oui » do Techonni, e ler o relatório (`report`) 48 horas depois.
11. **Ritmo quinzenal fixo**, segmentado por tag quando houver 50+ assinantes.
12. **Mais brindes por tema:** checklist Leadpages (« Lancer sa première landing page ») e modelos de textos para landing pages. Um brinde por tema aumenta as inscrições.
13. **Pop-up discreto de saída** ou barra no fim do guia, só em telemóvel e computador, sem incomodar a leitura.

### Redes sociais e conteúdo
14. **Pinterest:** publicar 3 pins por semana (os pins já estão em `public/pins/`), com links UTM.
15. **Vídeos curtos sem rosto** (artifact « Zunrel — 5 vidéos courtes sans visage »): publicar no TikTok, YouTube Shorts e Instagram Reels, cada um a apontar para um guia.
16. **Artigos no X/LinkedIn** (artifact « Articles X — Tutos Shopify et Leadpages »): 1 por semana, com link UTM.
17. **Responder a perguntas reais** em fóruns e grupos francófonos (Reddit, grupos Facebook de lojistas), com a resposta completa e o guia como « pour aller plus loin ».

### Medir e melhorar
18. **Painel semanal:** visitas (GA4), cliques afiliados, inscrições, comissões (PartnerStack/Impact). O Claude pode montá-lo como artifact.
19. **Velocidade e Core Web Vitals:** ver os dados `web_vital` no GA4 e corrigir as páginas lentas (imagens, fontes).
20. **Backlinks:** propor guias como convidado a blogs francófonos de e-commerce e marketing, e inscrever o Zunrel em diretórios de recursos Shopify e Leadpages. Pedir links a partir do kit média (`/kit-media/`).
