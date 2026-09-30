# zunrel — jogos originais HTML5

Site do **zunrel.com**: um editor de jogos HTML5 em modo demo (créditos fictícios, sem dinheiro real).

Tudo é desenhado num único canvas, **só com PixiJS + GSAP + TypeScript + Howler.js**. O tema segue o "UI Design Rules – HTML5 Games" (fundo ardósia escuro, botões azuis).

| Rota | Conteúdo |
| --- | --- |
| `#/` | Início: destaque animado, cartões dos jogos, vantagens |
| `#/crash` | **Crash** — o multiplicador sobe até rebentar (RTP 99%, retirada manual ou automática) |
| `#/binary` | **Binary** — Sobe/Desce sobre EUR/USD, GBP/USD e USD/JPY (Binary +85%, Turbo +80%) |
| `#/about` | Sobre a zunrel |

## Desenvolvimento

```bash
npm install
npm run dev        # servidor local
npm run build      # typecheck + build em dist/
npm run preview    # servir o build
```

## Estrutura

```
index.html              canvas único
src/main.ts             site: cabeçalho, rotas, páginas, jogos embutidos
src/site/               cabeçalho, menu lateral, páginas Início e Sobre, miniaturas animadas
src/core/               tema, texto, formatação, som (Howler.js), botões, teclado numérico, scroll
src/games/crash/        jogo Crash (cena GameScene)
src/games/binary/       jogo Binary (cena GameScene)
src/games/trading/      Trading: binary trading desktop com pares forex (cena GameScene)
```

Cada jogo implementa `GameScene` (`src/core/scene.ts`) e desenha-se no espaço abaixo do cabeçalho do site. Os sons são sintetizados em código e tocados com Howler.js (sem ficheiros áudio).

## Publicação

- **Cloudflare:** `wrangler.jsonc` publica `dist/` como Worker "zunrel" (build `npm run build`, deploy `npx wrangler deploy`).
- Qualquer alojamento estático serve: build `npm run build`, pasta `dist`.
