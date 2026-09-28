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

## Step lists: do them all in one session

When the handoff file (or Techonni) gives a list of steps, **carry out every step in the same session**, one after the other, without stopping after the first one to ask whether to continue. Do not read « un passo de cada vez » as « one step per session »: it means finish, publish and check each step before starting the next one.

- Publish as you go (merge into `main`, production `READY`, check zunrel.com) so nothing is lost if the session stops.
- For a step that needs Techonni (his dashboards, social accounts, his « oui », screenshots from his Chrome), do everything that can be done from here (texts, files, pages, instructions), mark it « prêt, falta o Techonni », and move on to the next step.
- Only stop early if a step is truly blocked by a decision that is his to make; even then, do the other steps first.
- At the end, the handoff file lists every step with its status (feito / pronto, falta o Techonni / bloqueado e porquê).
