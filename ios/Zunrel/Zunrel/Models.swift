import SwiftUI

enum Category: String, CaseIterable, Identifiable {
    case all, originals, slots, live, tables
    var id: String { rawValue }
    var label: String {
        switch self {
        case .all: "Tout"
        case .originals: "Originaux"
        case .slots: "Machines"
        case .live: "Live"
        case .tables: "Tables"
        }
    }
}

struct Game: Identifiable, Hashable {
    let id: Int
    let name: String
    let studio: String
    let cat: Category
    let players: Int
    let hue: Double

    func stripes(light: Bool) -> Stripes {
        let d = light ? 0.02 : 0
        return Stripes(a: .oklch(0.5 + d, 0.13, hue), b: .oklch(0.45 + d, 0.12, hue))
    }

    static let all: [Game] = [
        Game(id: 1, name: "Pharaon Doré", studio: "Nebula Games", cat: .slots, players: 412, hue: 75),
        Game(id: 2, name: "Crash Rocket", studio: "Zunrel Originals", cat: .originals, players: 388, hue: 25),
        Game(id: 3, name: "Neon Fruits", studio: "Pixel Forge", cat: .slots, players: 301, hue: 340),
        Game(id: 4, name: "Blackjack Royal", studio: "LiveStudio", cat: .live, players: 276, hue: 155),
        Game(id: 5, name: "Mines", studio: "Zunrel Originals", cat: .originals, players: 254, hue: 285),
        Game(id: 6, name: "Roulette Lumière", studio: "LiveStudio", cat: .live, players: 231, hue: 10),
        Game(id: 7, name: "Dragon Spin", studio: "Nebula Games", cat: .slots, players: 198, hue: 50),
        Game(id: 8, name: "Plinko", studio: "Zunrel Originals", cat: .originals, players: 187, hue: 205),
        Game(id: 9, name: "Baccarat Privé", studio: "LiveStudio", cat: .live, players: 152, hue: 0),
        Game(id: 10, name: "Poker Hold'em", studio: "CardHouse", cat: .tables, players: 143, hue: 170),
        Game(id: 11, name: "Dés Turbo", studio: "Zunrel Originals", cat: .originals, players: 120, hue: 260),
        Game(id: 12, name: "Océan Mystique", studio: "Pixel Forge", cat: .slots, players: 96, hue: 230),
        Game(id: 13, name: "Vidéo Poker", studio: "CardHouse", cat: .tables, players: 81, hue: 120),
    ]
}

enum Room: String, CaseIterable, Identifiable {
    case general, fr, vip
    var id: String { rawValue }
    var label: String {
        switch self {
        case .general: "Général"
        case .fr: "Français"
        case .vip: "VIP"
        }
    }
}

struct ChatMessage: Identifiable {
    let id = UUID()
    let user: String
    let level: Int
    let text: String
    var mine = false

    static let levelColors: [Color] = ([0x6b6478, 0x5a7d9a, 0x3d9970, 0xb08d2e, 0xc0602f, 0x9b4dca, 0xd63a6a] as [UInt32]).map { Color(hex: $0) }

    static let seed: [Room: [ChatMessage]] = [
        .general: [
            ChatMessage(user: "LuckyNova", level: 3, text: "Quelqu’un a testé le nouveau Plinko ?"),
            ChatMessage(user: "Maxou_77", level: 4, text: "oui x120 hier soir, trop content"),
            ChatMessage(user: "Sabrina.K", level: 2, text: "GG Maxou !"),
            ChatMessage(user: "R3nard", level: 5, text: "le crash monte à combien en moyenne ?"),
            ChatMessage(user: "LuckyNova", level: 3, text: "ça dépend, moi je sors à 2x"),
            ChatMessage(user: "Pixelle", level: 4, text: "bonne soirée à tous"),
            ChatMessage(user: "Tomtom", level: 1, text: "premier jour ici, des conseils ?"),
            ChatMessage(user: "R3nard", level: 5, text: "fixe-toi une limite et amuse-toi"),
        ],
        .fr: [
            ChatMessage(user: "Camille", level: 2, text: "Salut la team FR"),
            ChatMessage(user: "Yanis", level: 3, text: "yo ! le live roulette est calme ce soir"),
        ],
        .vip: [
            ChatMessage(user: "Aurora", level: 6, text: "Nouveau tournoi vendredi 21h"),
            ChatMessage(user: "Kaï", level: 6, text: "inscrit, ça va être serré"),
        ],
    ]
}

enum Screen: String, CaseIterable {
    case home, browse, search, chat, profile

    var label: String {
        switch self {
        case .home: "Accueil"
        case .browse: "Parcourir"
        case .search: "Recherche"
        case .chat: "Chat"
        case .profile: "Profil"
        }
    }
}

enum AuthMode { case login, signup }

enum FR {
    private static let int: NumberFormatter = {
        let f = NumberFormatter()
        f.locale = Locale(identifier: "fr_FR")
        f.numberStyle = .decimal
        return f
    }()

    private static let money: NumberFormatter = {
        let f = NumberFormatter()
        f.locale = Locale(identifier: "fr_FR")
        f.numberStyle = .decimal
        f.minimumFractionDigits = 2
        f.maximumFractionDigits = 2
        return f
    }()

    static func number(_ n: Int) -> String { int.string(from: n as NSNumber) ?? "\(n)" }
    static func amount(_ n: Double) -> String { money.string(from: n as NSNumber) ?? "\(n)" }
}
