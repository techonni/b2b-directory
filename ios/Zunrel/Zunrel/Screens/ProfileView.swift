import SwiftUI

struct ProfileView: View {
    @Environment(AppState.self) private var app

    var body: some View {
        let p = app.p
        ScrollView {
            VStack(spacing: 20) {
                if let user = app.user {
                    HStack(spacing: 14) {
                        Text(app.initial)
                            .font(.sora(26, .heavy))
                            .foregroundStyle(Palette.onAccent)
                            .frame(width: 64, height: 64)
                            .background(Palette.accent, in: Circle())
                        VStack(alignment: .leading, spacing: 4) {
                            Text(user).font(.sora(20, .bold)).foregroundStyle(p.tx)
                            Text("Membre depuis sept. 2026").font(.sora(13)).foregroundStyle(p.mu)
                        }
                        Spacer()
                    }

                    VStack(alignment: .leading, spacing: 10) {
                        HStack {
                            Text("Niveau Argent II").font(.sora(14, .semibold)).foregroundStyle(p.tx)
                            Spacer()
                            Text("62 %").font(.mono(14, .medium)).foregroundStyle(p.mu)
                        }
                        GeometryReader { geo in
                            ZStack(alignment: .leading) {
                                Capsule().fill(p.sf2)
                                Capsule().fill(Palette.accent).frame(width: geo.size.width * 0.62)
                            }
                        }
                        .frame(height: 8)
                        Text("Encore 1 900 pts pour Or I").font(.sora(12)).foregroundStyle(p.mu)
                    }
                    .padding(16)
                    .background(p.sf, in: RoundedRectangle(cornerRadius: 14))
                } else {
                    VStack(spacing: 14) {
                        Circle().fill(p.sf2).frame(width: 64, height: 64)
                        Text("Ton espace joueur").font(.sora(20, .bold)).foregroundStyle(p.tx)
                        Text("Connecte-toi pour suivre ton niveau, tes gains et tes favoris.")
                            .font(.sora(14)).lineSpacing(4)
                            .foregroundStyle(p.mu)
                            .multilineTextAlignment(.center)
                            .frame(maxWidth: 260)
                        HStack(spacing: 8) {
                            PillButton(title: "Connexion", primary: false, height: 46, radius: 11, fill: true) { app.openAuth(.login) }
                            PillButton(title: "Inscription", primary: true, height: 46, radius: 11, fill: true) { app.openAuth(.signup) }
                        }
                    }
                    .frame(maxWidth: .infinity)
                    .padding(.horizontal, 20).padding(.vertical, 36)
                    .background(p.sf, in: RoundedRectangle(cornerRadius: 16))
                }

                VStack(spacing: 0) {
                    Button { app.darkTheme.toggle() } label: {
                        row("Thème sombre") {
                            Capsule()
                                .fill(app.darkTheme ? Palette.accent : p.sf2)
                                .frame(width: 46, height: 28)
                                .overlay(alignment: app.darkTheme ? .trailing : .leading) {
                                    Circle().fill(.white).frame(width: 22, height: 22).padding(3)
                                }
                                .animation(.easeInOut(duration: 0.2), value: app.darkTheme)
                        }
                    }
                    .buttonStyle(.plain)
                    divider
                    row("Langue") { Text("Français ›").font(.sora(14)).foregroundStyle(p.mu) }
                    divider
                    row("Jeu responsable") { Text("›").font(.sora(14)).foregroundStyle(p.mu) }
                    divider
                    row("Aide et support") { Text("›").font(.sora(14)).foregroundStyle(p.mu) }
                }
                .background(p.sf, in: RoundedRectangle(cornerRadius: 14))

                if app.loggedIn {
                    Button { app.logout() } label: {
                        Text("Se déconnecter")
                            .font(.sora(14, .semibold)).foregroundStyle(p.tx)
                            .frame(maxWidth: .infinity).frame(height: 48)
                            .overlay(RoundedRectangle(cornerRadius: 12).stroke(p.bd))
                    }
                    .buttonStyle(PressableStyle())
                }
            }
            .padding(.horizontal, 16)
            .padding(.top, 18).padding(.bottom, 28)
        }
        .scrollIndicators(.hidden)
    }

    private var divider: some View { Rectangle().fill(app.p.bd).frame(height: 1) }

    private func row<Trailing: View>(_ title: String, @ViewBuilder trailing: () -> Trailing) -> some View {
        HStack {
            Text(title).font(.sora(15, .medium)).foregroundStyle(app.p.tx)
            Spacer()
            trailing()
        }
        .padding(16)
        .contentShape(Rectangle())
    }
}
