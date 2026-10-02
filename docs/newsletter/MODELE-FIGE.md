# Modèle de newsletter Zunrel : FIGÉ

Validé par Techonni le 28/09/2026. **Ne pas modifier l'apparence** sans son accord explicite dans la conversation.
Seul le contenu change d'un envoi à l'autre (objet, introduction, guides).

- Code : `renderNewsletter()` dans `scripts/mailchimp.mjs`
- Aperçu de référence : `newsletters/apercu-2026-09-28.png`
- Charte : artifact « Zunrel Design System » (noir et blanc, texte `#171717`, boutons `#262626`, fond `#fbfbfb`, rayon 8px, Geist)

## Ce qui est figé

| Élément | Choix validé |
|---|---|
| En-tête | Logo texte ◌ (`&#9676;`) + « Zunrel ». Pas d'image : il s'affiche même quand la messagerie bloque les images |
| Titre | Objet de l'e-mail, 26px, 600 |
| Introduction | 1 à 2 phrases, 16px, `#666666` |
| Guides | 4 cartes blanches bordées `#e5e5e5`, rayon 8px : « Guide N », question du guide, résumé, bouton charbon « Lire le guide » |
| Après les cartes | « Tous les guides Leadpages, HTML Pub et Shopify : zunrel.com/guides → » |
| Pied de page | Mention d'indépendance et d'affiliation ; « Vous recevez cet e-mail car vous vous êtes inscrit sur zunrel.com. Une question ? contact@zunrel.com » ; « Se désinscrire · Changer mes préférences » ; adresse postale ; badge Mailchimp (obligatoire en forfait gratuit) |
| Interdit | Afficher l'adresse e-mail du destinataire, le pied de page anglais par défaut de Mailchimp, les modèles de l'éditeur visuel Mailchimp, les images décoratives |
| Liens | Toujours avec `utm_source=newsletter&utm_medium=email` |

## Créer une newsletter

```bash
node --experimental-strip-types scripts/mailchimp.mjs newsletter <slug> <slug> <slug> <slug> \
  --subject "…" --intro "…" [--tag shopify] [--to <e-mail de test>]
```

Le script crée un brouillon et envoie seulement un test. L'envoi aux abonnés demande le « oui » de Techonni.
