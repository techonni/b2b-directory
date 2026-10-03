# Ponto Alto — game.zunrel.com

Jogo de curva (tipo crash) em ecrã inteiro, com o visual claro do Zunrel (Geist, anel de 12 pontos, azul #0f4bf1). Moedas virtuais, sem dinheiro real.
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
