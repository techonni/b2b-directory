# zunrel — app iOS (SwiftUI)

Implementação nativa do design `Zunrel App.dc.html` (Claude Design).

## Abrir e correr
1. Mac com **Xcode 16** ou mais recente (iOS 17+).
2. Abrir `ios/Zunrel/Zunrel.xcodeproj`.
3. (Opcional) pôr as fontes em `Zunrel/Fonts/` — ver `LEIA-ME.md` nessa pasta.
4. Escolher um simulador (ex. iPhone 16) e carregar ▶︎.

Para correr num iPhone real: Xcode → target *Zunrel* → *Signing & Capabilities* → escolher a tua *Team*.

## O que está feito
- Ecrãs: Accueil, Parcourir (filtros por categoria), Recherche (pesquisa ao vivo), Chat (3 salas, envio de mensagens), Profil.
- Login / inscrição em folha inferior, com validação (pseudo ≥ 3, e-mail, palavra-passe ≥ 8).
- Tema escuro / claro, toast, saldo e avatar no cabeçalho.
- Dados de exemplo (jogos, chat) como no design — não há backend.

## Estrutura
- `Zunrel/Theme.swift` — cores, fontes, riscas `oklch` dos visuais.
- `Zunrel/Models.swift` — jogos, categorias, salas, mensagens.
- `Zunrel/AppState.swift` — estado e lógica (navegação, auth, chat).
- `Zunrel/RootView.swift` — cabeçalho, barra de separadores, toast.
- `Zunrel/Screens/` — um ficheiro por ecrã + `AuthSheet`.
