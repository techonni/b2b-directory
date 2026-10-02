# Newsletter: plano de envios (passos 10 e 11)

> ⏸️ **Newsletter em pausa até haver um inscrito real** (decisão do Techonni a 28/09/2026). Inscrito real = email que **não** contém « dario » nem « zunrel ». Até lá: não planear, não criar rascunhos, não agendar, não testar, e **nunca perguntar ao Techonni pelo « oui » nem por permissões** para a newsletter. A rotina diária `trig_017qJ8Bu58TjQ9LJzu8SXaSA` avisa-o quando chegar o primeiro inscrito real. O calendário abaixo só volta a valer depois disso.

Atualizado a 28/09/2026. Estado da lista (`scripts/mailchimp.mjs status`): **3 assinantes**, 0 envios este mês (limite 500), plano Free sem agendamento (cada envio é feito à mão, no dia).

Regras: modelo visual fixo (`docs/newsletter/MODELE-FIGE.md`), só com `scripts/mailchimp.mjs newsletter`, e **nunca enviar aos assinantes sem o « oui » do Techonni** para essa campanha.

## Passo 10 · 1.º envio (à espera do « oui »)

- Campanha aconselhada: `ff4c739dc9` « Ouvrez votre boutique Shopify de A à Z », para **todos** (com 3 assinantes não vale a pena segmentar).
- Depois do envio: `node --experimental-strip-types scripts/mailchimp.mjs report ff4c739dc9` 48 horas depois, e anotar aberturas e cliques no Painel Zunrel.

## Passo 11 · Ritmo quinzenal (segunda-feira de manhã)

| Data | Tema | Guias (4 cartões) | Estado |
|---|---|---|---|
| seg. 28/09 ou quando houver « oui » | Ouvrir sa boutique Shopify | rascunho `ff4c739dc9` | pronto |
| seg. 12/10 | Combien coûte vraiment votre boutique en ligne ? | `combien-coute-shopify`, `ajouter-des-variantes-shopify`, `combien-coute-leadpages`, `essayer-shopify-gratuitement` | por criar (comando abaixo) |
| seg. 26/10 | Votre landing page, du texte à la mise en ligne | `creer-une-landing-page-avec-l-ia`, `connecter-son-nom-de-domaine-leadpages`, `recolter-des-e-mails-avant-un-lancement`, `faire-un-test-ab-leadpages` + brindes `/newsletter/checklist-leadpages/` e `/newsletter/modeles-landing-page/` na introdução | por criar |
| seg. 09/11 | Préparer les ventes de fin d'année | guia novo da semana 5 (encomendas) + `creer-un-code-de-reduction-shopify`, `regler-l-expedition-shopify`, `rediger-les-politiques-shopify` | por criar |
| seg. 23/11 | Black Friday : votre boutique est prête ? | guias novos das semanas 6-7 + `ouvrir-sa-boutique-shopify-au-public` | por criar |

Rascunhos já existentes que ainda podem servir: `42198dabdc`, `4cdfb81660`, `8fd430e3d8`.

**Segmentação:** quando a lista passar os **50 assinantes**, enviar os temas Shopify só para a tag `shopify` (11404677) e os temas landing page para `leadpages` + `htmlpub`; quem escolheu « Tout » tem as três tags e recebe tudo. Acima de 110 assinantes, manter quinzenal (limite de 500 envios/mês).

## Comando do envio de 12/10 (precisa da autorização do Techonni nesta sessão)

O sistema de segurança do Claude Code bloqueou este comando a 28/09, porque envia um email de teste. Para o correr, aprovar o pedido de permissão quando aparecer, ou pedir ao Claude « cria o rascunho da newsletter de 12/10 ».

```bash
node --experimental-strip-types scripts/mailchimp.mjs newsletter \
  combien-coute-shopify ajouter-des-variantes-shopify combien-coute-leadpages essayer-shopify-gratuitement \
  --subject "Combien coûte vraiment votre boutique en ligne ?" \
  --intro "Les prix de Shopify et de Leadpages relevés sur les pages officielles, et un nouveau guide pour vendre un produit en plusieurs tailles et couleurs." \
  --to diaspinheiro5@icloud.com
```
