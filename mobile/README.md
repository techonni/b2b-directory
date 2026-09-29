# zunrel — app Expo (iPhone + Android)

Mesma app do design `Zunrel App.dc.html`, em **React Native + Expo**. Um só código para iPhone e Android. **Não precisa de Xcode.**

## Ver no telemóvel (10 min, grátis)
1. No iPhone: instalar **Expo Go** (App Store). No Android: Expo Go na Play Store.
2. No Mac: instalar **Node.js** (https://nodejs.org, versão LTS) se ainda não tiver.
3. No Terminal do Mac:
   ```
   cd zunrel
   git pull
   cd mobile
   npm run setup
   npm start
   ```
4. Aparece um **QR code**. No iPhone, abrir a **Câmara** e apontar para o QR → abre no Expo Go.
   - Se o telemóvel não estiver na mesma rede Wi-Fi que o Mac: `npm run tunnel` em vez de `npm start`.

Mais simples: na app Claude do Mac, abrir o projeto e escrever « corre a app Expo no meu telemóvel ».

## Publicar nas lojas (sem Xcode)
1. Conta Apple Developer (99 USD/ano) e/ou Google Play Console (25 USD uma vez).
2. `npx eas-cli login` (conta grátis em expo.dev).
3. `npx eas-cli build -p ios` (ou `-p android`): compila na nuvem.
4. `npx eas-cli submit -p ios`: envia para a App Store / TestFlight.

Atenção: casino com dinheiro real exige licença de jogo e conta de empresa na Apple.

## Estrutura
- `App.js` — fontes, cabeçalho, barra de separadores, toast.
- `src/state.js` — estado e lógica (navegação, login, chat).
- `src/theme.js` — cores, fontes, `oklch`, números em francês.
- `src/data.js` — jogos, categorias, salas, mensagens.
- `src/ui.js` — componentes (riscas, botões, logótipo).
- `src/screens/` — um ficheiro por ecrã + `AuthSheet`.
- `assets/` — ícone e fontes Sora / JetBrains Mono.
