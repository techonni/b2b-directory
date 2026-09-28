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

## Working with Claude in Chrome (Co-work)

Claude in Chrome freezes on long jobs (it did on 2026-09-28 with an 11-task prompt). Techonni wants to say only « continua » on both sides, never paste prompts.

- **Never give Claude in Chrome more than 3 tasks and 2 websites at a time** (GitHub, used only to save its results, does not count). Split bigger jobs into several batches.
- The only channel is two files: `docs/growth/CHROME-PROXIMO.md` (the current batch, written only by Claude Code, with a queue of next batches) and `docs/growth/RESULTADOS-CHROME.md` (results, written by Claude in Chrome at the top of the file).
- At the start of every session (on « continua »), read `RESULTADOS-CHROME.md`, use the new results, then move the next batch from the queue into « Lote atual » in `CHROME-PROXIMO.md` (max 3 tasks, 2 sites) and publish it, so Chrome always has its next batch ready.
- Claude in Chrome only reads dashboards, takes captures and posts on social media. It never edits the site's code, never merges, and never edits files written by Claude Code. The two never work at the same time.
- Do not ask Techonni to paste `.md` files or prompts: everything goes through these two files.
- **Daily routine** (asked by Techonni on 2026-09-28): `docs/growth/CHROME-DIARIO.md` — A) one post a day on X and LinkedIn, B) check Impact and PartnerStack (profile, new affiliate links, unanswered messages answered only with Techonni's « oui »), C) 5 Pinterest pins a day for existing guides. Each part is a separate batch, and Chrome must announce the day's plan and wait for his « sim » before using any cloud time.
- Claude Code keeps `docs/growth/fila-redes.md` stocked at least 7 days ahead (posts and pins; new pin images with `scripts/make-pins.mjs` when the queue runs out), and adds any new affiliate links Chrome finds to the site.

