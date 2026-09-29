import SwiftUI

struct HomeView: View {
    @Environment(AppState.self) private var app

    var body: some View {
        let p = app.p
        let games = Game.all
        ScrollView {
            VStack(alignment: .leading, spacing: 26) {
                Button { app.go(.search) } label: {
                    SearchFieldLabel(text: "Rechercher un jeu, un studio…", active: false)
                }
                .buttonStyle(.plain)

                promo

                HStack(spacing: 10) {
                    tile("Jeux", count: "21 402") { app.browse(.all) }
                    tile("Live", count: "8 190") { app.browse(.live) }
                }

                VStack(alignment: .leading, spacing: 14) {
                    HStack(alignment: .firstTextBaseline) {
                        Text("Tendances").sectionTitle(p)
                        Spacer()
                        Button("Tout voir") { app.browse(.all) }
                            .font(.sora(13, .semibold))
                            .foregroundStyle(Palette.accent)
                    }
                    ScrollView(.horizontal, showsIndicators: false) {
                        HStack(spacing: 10) {
                            ForEach(games.prefix(7)) { g in TrendingCard(game: g) }
                        }
                        .padding(.horizontal, 16)
                    }
                    .padding(.horizontal, -16)
                }

                VStack(alignment: .leading, spacing: 14) {
                    Text("Originaux zunrel").sectionTitle(p)
                    VStack(spacing: 8) {
                        ForEach(games.filter { $0.cat == .originals }) { g in OriginalRow(game: g) }
                    }
                }
            }
            .padding(.horizontal, 16)
            .padding(.top, 18).padding(.bottom, 28)
        }
        .scrollIndicators(.hidden)
    }

    private var promo: some View {
        ZStack(alignment: .bottomLeading) {
            Stripes(a: .oklch(0.42, 0.12, 40), b: .oklch(0.38, 0.11, 40), width: 12)
            Text("visuel promo")
                .font(.mono(10, .medium))
                .foregroundStyle(.white.opacity(0.7))
                .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topTrailing)
                .padding(14)
            VStack(alignment: .leading, spacing: 8) {
                Text("OFFRE DE BIENVENUE")
                    .font(.mono(11, .medium)).tracking(1)
                    .foregroundStyle(.white)
                Text("200 % sur ton premier dépôt")
                    .font(.sora(24, .heavy)).tracking(-0.5)
                    .foregroundStyle(.white)
                    .frame(maxWidth: 250, alignment: .leading)
                Button { app.openAuth(.signup) } label: {
                    Text("Je m'inscris")
                        .font(.sora(13, .bold))
                        .foregroundStyle(Color(hex: 0x1a1622))
                        .padding(.horizontal, 16).frame(height: 36)
                        .background(.white, in: RoundedRectangle(cornerRadius: 9))
                }
                .buttonStyle(PressableStyle())
            }
            .padding(18)
        }
        .frame(height: 170)
        .clipShape(RoundedRectangle(cornerRadius: 16))
    }

    private func tile(_ title: String, count: String, action: @escaping () -> Void) -> some View {
        Button(action: action) {
            HStack {
                Text(title).font(.sora(16, .semibold)).foregroundStyle(app.p.tx)
                Spacer()
                HStack(spacing: 6) {
                    Dot()
                    Text(count).font(.mono(13, .medium)).foregroundStyle(app.p.mu)
                }
            }
            .padding(.horizontal, 16)
            .frame(maxWidth: .infinity).frame(height: 64)
            .background(app.p.sf, in: RoundedRectangle(cornerRadius: 12))
        }
        .buttonStyle(PressableStyle())
    }
}

struct SearchFieldLabel: View {
    let text: String
    let active: Bool
    @Environment(AppState.self) private var app

    var body: some View {
        HStack(spacing: 12) {
            SearchGlyph()
            Text(text).font(.sora(15)).foregroundStyle(app.p.mu)
            Spacer()
        }
        .padding(.horizontal, 16).frame(height: 50)
        .background(app.p.input, in: RoundedRectangle(cornerRadius: 12))
        .overlay(RoundedRectangle(cornerRadius: 12).stroke(active ? Palette.accent : app.p.bd))
    }
}

struct SearchGlyph: View {
    @Environment(AppState.self) private var app
    var body: some View {
        Circle().strokeBorder(app.p.mu, lineWidth: 2).frame(width: 16, height: 16)
    }
}

struct TrendingCard: View {
    let game: Game
    @Environment(AppState.self) private var app

    var body: some View {
        Button { app.open(game) } label: {
            VStack(alignment: .leading, spacing: 8) {
                ZStack(alignment: .bottomLeading) {
                    game.stripes(light: !app.darkTheme)
                    Text("visuel du jeu")
                        .font(.mono(9, .medium))
                        .foregroundStyle(.white.opacity(0.65))
                        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
                        .padding(.top, 8).padding(.leading, 10)
                    VStack(alignment: .leading, spacing: 4) {
                        Text(game.name.uppercased())
                            .font(.sora(15, .heavy))
                            .foregroundStyle(.white)
                            .lineSpacing(-2)
                        Text(game.studio)
                            .font(.mono(9, .medium))
                            .foregroundStyle(.white.opacity(0.75))
                    }
                    .padding(10)
                }
                .aspectRatio(3 / 4, contentMode: .fit)
                .clipShape(RoundedRectangle(cornerRadius: 12))

                HStack(spacing: 6) {
                    Dot(size: 6)
                    Text("\(FR.number(game.players)) en jeu").font(.sora(12)).foregroundStyle(app.p.mu)
                }
            }
            .frame(width: 132)
        }
        .buttonStyle(PressableStyle())
    }
}

struct OriginalRow: View {
    let game: Game
    @Environment(AppState.self) private var app

    var body: some View {
        let p = app.p
        Button { app.open(game) } label: {
            HStack(spacing: 12) {
                game.stripes(light: !app.darkTheme)
                    .frame(width: 48, height: 48)
                    .clipShape(RoundedRectangle(cornerRadius: 10))
                VStack(alignment: .leading, spacing: 3) {
                    Text(game.name).font(.sora(15, .semibold)).foregroundStyle(p.tx)
                    Text("\(FR.number(game.players)) joueurs en ligne").font(.sora(12)).foregroundStyle(p.mu)
                }
                Spacer()
                Text("Jouer")
                    .font(.sora(13, .semibold)).foregroundStyle(p.tx)
                    .padding(.horizontal, 14).frame(height: 32)
                    .background(p.sf2, in: RoundedRectangle(cornerRadius: 8))
            }
            .padding(10)
            .background(p.sf, in: RoundedRectangle(cornerRadius: 12))
        }
        .buttonStyle(PressableStyle(scale: 0.99))
    }
}
