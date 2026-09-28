# Zunrel · Plano de growth marketing (setembro de 2026)

Documento de trabalho entre o Techonni e o Claude. Os textos para publicar estão em **francês**, porque o público do site é francófono.

## Os 10 passos e o seu estado

| # | Passo | Estado |
|---|---|---|
| 1 | Terminar a configuração do Mailchimp (língua `fr`, newsletter limpa, teste) | ✅ Feito a 28/09/2026. Newsletter `42198dabdc` pronta, à espera do « sim » |
| 2 | Formulário de inscrição com tags (`shopify`, `leadpages`, `htmlpub`) + página `/newsletter/` | ✅ No site |
| 3 | Brinde para quem se inscreve: `/newsletter/checklist-shopify/` (imprimível em PDF) | ✅ No site |
| 4 | Boas-vindas: a página `/newsletter/confirmee/` mostra o brinde e os últimos guias | ✅ No site (ver nota abaixo) |
| 5 | Auditoria SEO: 5 guias sem nenhum link interno passaram a ter 2 links cada; 2 descrições alongadas | ✅ No site |
| 6 | Um guia novo por semana (calendário abaixo) | 🔜 Precisa de capturas de ecrã no Chrome do Techonni |
| 7 | Newsletter quinzenal com modelo fixo (`scripts/mailchimp.mjs newsletter`) | ✅ Ferramenta pronta |
| 8 | Reaproveitar cada guia nas redes (textos prontos abaixo) | ✅ Textos prontos, publicação manual |
| 9 | Relatório 48 h depois de cada envio (`scripts/mailchimp.mjs report <id>`) + Google Analytics (links com UTM) | ✅ Ferramenta pronta |
| 10 | Vigiar os limites do plano Free (`status`, `cleanup`, `export`) | ✅ Ferramenta pronta |

**Nota sobre o passo 4:** a API do Mailchimp não permite alterar o texto do « Final welcome email ». Por isso, as boas-vindas estão na página de confirmação do site, que tem o brinde e os últimos guias. Se um dia quiseres também um email de boas-vindas, são 2 minutos no Mailchimp: Audience → Signup forms → Form builder → « Final welcome email ».

## Comandos do Claude (Mailchimp)

```bash
node --experimental-strip-types scripts/mailchimp.mjs status                  # contactos, envios do mês, ritmo aconselhado
node --experimental-strip-types scripts/mailchimp.mjs newsletter <slug> <slug> --subject "…" [--intro "…"] [--tag shopify]
node --experimental-strip-types scripts/mailchimp.mjs report <campaign_id>    # 48 h depois do envio
node --experimental-strip-types scripts/mailchimp.mjs cleanup [--apply]       # arquivar desinscritos (só com o « sim »)
node --experimental-strip-types scripts/mailchimp.mjs export                  # CSV em exports/ (fora do git)
```

O script **nunca envia para os assinantes**. Cria o rascunho, envia um teste para o email da conta e para aí.

## Ritmo da newsletter (plano Free: 500 envios/mês, 250 contactos)

- Até cerca de 110 assinantes: pode ser semanal.
- De 110 a 230: quinzenal.
- Acima de 200 contactos: `cleanup`, depois `export`, e comparar outras ferramentas gratuitas **nessa altura**.

## Calendário de guias (passo 6)

Uma pergunta por guia, só sobre Leadpages, HTML Pub e Shopify. Antes de escrever: confirmar preços e textos da interface no próprio dia e tirar pelo menos uma captura de ecrã.

| Semana | Pergunta (FR) | Tema | Porquê |
|---|---|---|---|
| 1 ✅ | Comment ajouter des variantes (taille, couleur) à un produit Shopify ? | boutique | Publicado a 28/09/2026 (`ajouter-des-variantes-shopify`) |
| 2 | Comment ajouter un formulaire de contact sur Shopify ? | boutique | Página obrigatória para inspirar confiança |
| 3 | Comment créer une page « lien en bio » avec HTML Pub ? | creer | Muito procurado por quem vende no Instagram e TikTok |
| 4 | Comment ajouter un pop-up d'inscription sur Leadpages ? | contacts | Liga-se diretamente à recolha de emails |
| 5 | Comment suivre ses commandes et expédier sur Shopify ? | boutique | Passo seguinte depois da primeira venda |
| 6 | Comment ajouter Google Analytics à une page Leadpages ? | optimiser | Medir antes de otimizar |
| 7 | Comment créer une page de remerciement après un formulaire Leadpages ? | contacts | Melhora as conversões e a entrega de brindes |
| 8 | Comment vendre sur Instagram avec Shopify ? | boutique | Tráfego grátis para as boutiques novas |

## Textos para as redes (passo 8)

Cada guia já tem uma imagem Pinterest em `public/pins/<slug>.jpg`. Coloca sempre o link com UTM para ver os resultados no Google Analytics:
`https://zunrel.com/guides/<slug>/?utm_source=<pinterest|linkedin|reddit>&utm_medium=social`

### Pinterest (título · descrição)

1. **Ouvrir sa boutique Shopify de A à Z** · Toutes les étapes pour créer votre boutique Shopify, dans l'ordre : compte, thème, produits, paiements et domaine. Guide gratuit, pas à pas. → `creer-sa-boutique-shopify-de-a-a-z`
2. **Essayer Shopify gratuitement** · Comment démarrer l'essai Shopify sans vous tromper, et ce qu'il faut préparer avant de payer. → `essayer-shopify-gratuitement`
3. **Créer une landing page avec l'IA** · Une page prête en quelques minutes avec l'assistant IA de HTML Pub ou Leadpages. Étapes et erreurs à éviter. → `creer-une-landing-page-avec-l-ia`
4. **Récolter des e-mails avant un lancement** · Page d'attente, formulaire et premier e-mail : la méthode simple pour lancer avec une liste de contacts. → `recolter-des-e-mails-avant-un-lancement`
5. **Checklist de lancement Shopify** · Les 10 étapes à cocher avant d'ouvrir votre boutique. À imprimer ou enregistrer en PDF. → `/newsletter/checklist-shopify/`

### LinkedIn (um por semana)

> Vous ouvrez une boutique Shopify ? Avant de partager votre lien, vérifiez ces 4 points :
> 1. Les politiques (retours, livraison, mentions légales) sont affichées au paiement.
> 2. Les frais de livraison sont réglés par zone.
> 3. Le menu mène aux pages importantes.
> 4. Le mot de passe de la boutique est retiré.
> La checklist complète en 10 étapes, gratuite : https://zunrel.com/newsletter/checklist-shopify/?utm_source=linkedin&utm_medium=social

> Leadpages ou HTML Pub ? Même éditeur, même assistant IA. La différence : les tests A/B, Smart Traffic et les cartes de chaleur. Si vous débutez, commencez simple.
> Le comparatif : https://zunrel.com/guides/choisir-entre-html-pub-et-leadpages/?utm_source=linkedin&utm_medium=social

### Reddit e fóruns francófonos

Regra: responder primeiro à pergunta da pessoa no próprio post, e só depois pôr o link do guia como « pour aller plus loin ». Nunca publicar só um link. Antes de publicar, confirmar que o grupo existe, está ativo e aceita links (ex.: grupos Facebook de lojistas Shopify em francês, subreddits de empreendedores francófonos).
