import SwiftUI

struct BrowseView: View {
    @Environment(AppState.self) private var app

    var body: some View {
        let p = app.p
        let games = Game.all.filter { app.cat == .all || $0.cat == app.cat }
        let players = games.reduce(0) { $0 + $1.players }
        ScrollView {
            VStack(alignment: .leading, spacing: 18) {
                Text("Parcourir").font(.sora(24, .bold)).tracking(-0.6).foregroundStyle(p.tx)

                ScrollView(.horizontal, showsIndicators: false) {
                    HStack(spacing: 8) {
                        ForEach(Category.allCases) { c in
                            ChipButton(title: c.label, active: app.cat == c, height: 38, radius: 19, padding: 16, size: 14) {
                                app.cat = c
                            }
                        }
                    }
                    .padding(.horizontal, 16)
                }
                .padding(.horizontal, -16)

                Text("\(games.count) jeux · \(FR.number(players)) joueurs")
                    .font(.sora(13)).foregroundStyle(p.mu)

                LazyVGrid(columns: Array(repeating: GridItem(.flexible(), spacing: 8), count: 3), spacing: 10) {
                    ForEach(games) { g in
                        Button { app.open(g) } label: {
                            VStack(alignment: .leading, spacing: 6) {
                                ZStack(alignment: .bottomLeading) {
                                    g.stripes(light: !app.darkTheme)
                                    Text(g.name.uppercased())
                                        .font(.sora(12, .heavy))
                                        .foregroundStyle(.white)
                                        .padding(8)
                                }
                                .aspectRatio(3 / 4, contentMode: .fit)
                                .clipShape(RoundedRectangle(cornerRadius: 10))
                                HStack(spacing: 5) {
                                    Dot(size: 6)
                                    Text(FR.number(g.players)).font(.sora(11)).foregroundStyle(p.mu)
                                }
                            }
                        }
                        .buttonStyle(PressableStyle())
                    }
                }
            }
            .padding(.horizontal, 16)
            .padding(.top, 18).padding(.bottom, 28)
        }
        .scrollIndicators(.hidden)
    }
}

struct ChipButton: View {
    let title: String
    let active: Bool
    var height: CGFloat = 32
    var radius: CGFloat = 8
    var padding: CGFloat = 14
    var size: CGFloat = 13
    let action: () -> Void
    @Environment(AppState.self) private var app

    var body: some View {
        Button(action: action) {
            Text(title)
                .font(.sora(size, .semibold))
                .foregroundStyle(active ? Palette.onAccent : app.p.tx)
                .padding(.horizontal, padding).frame(height: height)
                .background(active ? Palette.accent : app.p.sf2, in: RoundedRectangle(cornerRadius: radius))
        }
        .buttonStyle(PressableStyle())
    }
}
