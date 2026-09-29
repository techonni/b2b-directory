import SwiftUI

@Observable
final class AppState {
    var screen: Screen = .home
    var darkTheme = true
    var user: String?
    var balance: Double = 0
    var cat: Category = .all
    var query = ""
    var room: Room = .general
    var draft = ""
    var messages = ChatMessage.seed
    var auth: AuthMode?
    var fUser = "", fEmail = "", fPass = ""
    var authError = ""
    var toast = ""

    private var toastTask: Task<Void, Never>?

    var p: Palette { darkTheme ? .dark : .light }
    var loggedIn: Bool { user != nil }
    var initial: String { String((user ?? "?").prefix(1)).uppercased() }

    func go(_ s: Screen) { screen = s }

    func browse(_ c: Category) {
        cat = c
        screen = .browse
    }

    func openAuth(_ mode: AuthMode) {
        auth = mode
        authError = ""
    }

    func showToast(_ msg: String) {
        toast = msg
        toastTask?.cancel()
        toastTask = Task { @MainActor in
            try? await Task.sleep(for: .seconds(2.2))
            if !Task.isCancelled { self.toast = "" }
        }
    }

    func open(_ g: Game) {
        guard loggedIn else { return openAuth(.login) }
        showToast("Lancement de \(g.name)…")
    }

    func submitAuth() {
        let name = fUser.trimmingCharacters(in: .whitespaces)
        if auth == .signup && name.count < 3 {
            authError = "Le pseudo doit faire au moins 3 caractères."
            return
        }
        if fEmail.range(of: #"^\S+@\S+\.\S+$"#, options: .regularExpression) == nil {
            authError = "Adresse e-mail invalide."
            return
        }
        if fPass.count < 8 {
            authError = "Le mot de passe doit faire au moins 8 caractères."
            return
        }
        let signup = auth == .signup
        let who = signup ? name : String(fEmail.split(separator: "@").first ?? "")
        user = who
        balance = signup ? 0 : 124.5
        auth = nil
        fPass = ""
        authError = ""
        showToast(signup ? "Bienvenue sur zunrel, \(who) !" : "Content de te revoir, \(who)")
    }

    func send() {
        let text = draft.trimmingCharacters(in: .whitespaces)
        guard !text.isEmpty else { return }
        guard let user else { return openAuth(.login) }
        messages[room, default: []].append(ChatMessage(user: user, level: 2, text: text, mine: true))
        draft = ""
    }

    func logout() {
        user = nil
        balance = 0
        showToast("Tu es déconnecté")
    }
}
