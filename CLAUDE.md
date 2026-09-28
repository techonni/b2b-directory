## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Newsletter (Mailchimp)

The newsletter design is **frozen** (validated by Techonni on 2026-09-28). Do not change its look without his explicit approval: see `docs/newsletter/MODELE-FIGE.md`. Build newsletters only with `scripts/mailchimp.mjs newsletter`. Never send to subscribers without his explicit « oui » for that campaign.

## Publishing

Work is only live on zunrel.com once it is merged into `main` (Vercel deploys `main`). Every session must finish by merging its branch into `main` and checking the production deployment is `READY`.

## End of session

Techonni prefers a Markdown handoff file. Before ending a session, update `docs/growth/PROXIMA-SESSAO.md` (state, rules, what is pending on his side, next steps), merge it into `main`, and send him the file. Start each new session by reading it.
