# Ponto Alto — game.zunrel.com

Jogo de demonstração da Zunrel (multiplicador que sobe até parar), em ecrã inteiro. Moedas virtuais, sem dinheiro real.
Feito com PixiJS v8 + GSAP + TypeScript + Howler.js. Visual com as cores e fontes da zunrel.com (Geist / Geist Mono, via `@fontsource`),
anel de 12 pontos da marca à volta do multiplicador. Sons sintetizados em código (`src/core/audio`), sem ficheiros áudio.

- Local: `cd jogo && npm install && npm run dev`
- Build: `npm run build` (inclui o typecheck) → `jogo/dist`

## Publicação (Cloudflare Pages, projeto à parte)

Workers & Pages → Create → Pages → Connect to Git → `techonni/zunrel`:

- Production branch: `main`
- Root directory: `jogo`
- Build command: `npm run build`
- Build output directory: `dist`

Depois: Custom domains → `game.zunrel.com` (o DNS do zunrel.com já está na Cloudflare, o registo é criado sozinho).
