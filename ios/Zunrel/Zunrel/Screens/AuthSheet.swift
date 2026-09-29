import SwiftUI

struct AuthSheet: View {
    @Environment(AppState.self) private var app

    var body: some View {
        @Bindable var app = app
        let p = app.p
        let signup = app.auth == .signup

        ZStack(alignment: .bottom) {
            Color.black.opacity(0.55)
                .ignoresSafeArea()
                .onTapGesture { app.auth = nil }

            VStack(spacing: 16) {
                Capsule().fill(p.bd).frame(width: 40, height: 5)

                HStack {
                    Wordmark(size: 24)
                    Spacer()
                    Button { app.auth = nil } label: {
                        Text("×").font(.sora(26)).foregroundStyle(p.mu)
                    }
                    .buttonStyle(.plain)
                }

                HStack(spacing: 0) {
                    segment("Connexion", active: !signup) { app.openAuth(.login) }
                    segment("Inscription", active: signup) { app.openAuth(.signup) }
                }
                .padding(4)
                .background(p.input, in: RoundedRectangle(cornerRadius: 12))

                if signup {
                    field("Pseudo", text: $app.fUser, prompt: "ex. LuckyNova")
                        .textContentType(.username)
                }
                field("E-mail", text: $app.fEmail, prompt: "toi@exemple.fr")
                    .keyboardType(.emailAddress)
                    .textContentType(.emailAddress)
                field("Mot de passe", text: $app.fPass, prompt: "8 caractères minimum", secure: true)
                    .textContentType(signup ? .newPassword : .password)

                if !app.authError.isEmpty {
                    Text(app.authError)
                        .font(.sora(13, .medium))
                        .foregroundStyle(Palette.error)
                        .frame(maxWidth: .infinity, alignment: .leading)
                }

                Button { app.submitAuth() } label: {
                    Text(signup ? "Créer mon compte" : "Se connecter")
                        .font(.sora(16, .bold))
                        .foregroundStyle(Palette.onAccent)
                        .frame(maxWidth: .infinity).frame(height: 52)
                        .background(Palette.accent, in: RoundedRectangle(cornerRadius: 12))
                }
                .buttonStyle(PressableStyle(scale: 0.98))

                Text("Réservé aux 18 ans et plus. Joue de manière responsable.")
                    .font(.sora(11)).lineSpacing(3)
                    .foregroundStyle(p.mu)
                    .multilineTextAlignment(.center)
            }
            .padding(.horizontal, 20).padding(.top, 10).padding(.bottom, 20)
            .background(
                UnevenRoundedRectangle(cornerRadii: .init(topLeading: 24, topTrailing: 24))
                    .fill(p.hd)
                    .ignoresSafeArea(edges: .bottom)
            )
            .transition(.move(edge: .bottom))
        }
    }

    private func segment(_ title: String, active: Bool, action: @escaping () -> Void) -> some View {
        Button(action: action) {
            Text(title)
                .font(.sora(14, .semibold))
                .foregroundStyle(app.p.tx)
                .frame(maxWidth: .infinity).frame(height: 38)
                .background(active ? app.p.sf2 : .clear, in: RoundedRectangle(cornerRadius: 9))
        }
        .buttonStyle(.plain)
    }

    private func field(_ label: String, text: Binding<String>, prompt: String, secure: Bool = false) -> some View {
        let p = app.p
        return VStack(alignment: .leading, spacing: 6) {
            Text(label).font(.sora(13, .medium)).foregroundStyle(p.mu)
            Group {
                if secure {
                    SecureField("", text: text, prompt: Text(prompt).foregroundStyle(p.mu))
                } else {
                    TextField("", text: text, prompt: Text(prompt).foregroundStyle(p.mu))
                        .textInputAutocapitalization(.never)
                        .autocorrectionDisabled()
                }
            }
            .font(.sora(15))
            .foregroundStyle(p.tx)
            .padding(.horizontal, 14).frame(height: 48)
            .background(p.input, in: RoundedRectangle(cornerRadius: 11))
            .overlay(RoundedRectangle(cornerRadius: 11).stroke(p.bd))
        }
    }
}
