# Jogo Crash — game.zunrel.com

Só o jogo Crash (do antigo site de jogos, commit 0d75e32), em ecrã inteiro. Créditos fictícios, sem dinheiro real.
Feito com PixiJS v8 + GSAP + TypeScript + Howler.js.

- Local: `cd jogo && npm install && npm run dev`
- Build: `npm run build` (inclui o typecheck) → `jogo/dist`

## Publicação (Cloudflare Pages, projeto à parte)

Workers & Pages → Create → Pages → Connect to Git → `techonni/zunrel`:

- Production branch: `main`
- Root directory: `jogo`
- Build command: `npm run build`
- Build output directory: `dist`

Depois: Custom domains → `game.zunrel.com` (o DNS do zunrel.com já está na Cloudflare, o registo é criado sozinho).
