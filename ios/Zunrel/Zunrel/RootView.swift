import SwiftUI

struct RootView: View {
    @Environment(AppState.self) private var app

    var body: some View {
        let p = app.p
        VStack(spacing: 0) {
            Header()
            Group {
                switch app.screen {
                case .home: HomeView()
                case .browse: BrowseView()
                case .search: SearchView()
                case .chat: ChatView()
                case .profile: ProfileView()
                }
            }
            .frame(maxWidth: .infinity, maxHeight: .infinity)
            TabBar()
        }
        .background(p.bg)
        .overlay(alignment: .bottom) {
            if !app.toast.isEmpty {
                Text(app.toast)
                    .font(.sora(14, .semibold))
                    .foregroundStyle(p.bg)
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .padding(.horizontal, 16).padding(.vertical, 14)
                    .background(p.tx, in: RoundedRectangle(cornerRadius: 12))
                    .shadow(color: .black.opacity(0.3), radius: 15, y: 8)
                    .padding(.horizontal, 16)
                    .padding(.bottom, 80)
                    .transition(.move(edge: .bottom).combined(with: .opacity))
            }
        }
        .overlay {
            if app.auth != nil {
                AuthSheet().transition(.opacity)
            }
        }
        .animation(.easeOut(duration: 0.2), value: app.toast)
        .animation(.easeOut(duration: 0.25), value: app.auth)
    }
}

struct Header: View {
    @Environment(AppState.self) private var app

    var body: some View {
        let p = app.p
        HStack(spacing: 10) {
            Button { app.go(.home) } label: { Wordmark() }
                .buttonStyle(.plain)
            Spacer()
            if let _ = app.user {
                HStack(spacing: 8) {
                    HStack(spacing: 8) {
                        Text("\(FR.amount(app.balance)) €")
                            .font(.mono(14, .medium))
                            .foregroundStyle(p.tx)
                        Text("Dépôt")
                            .font(.sora(13, .bold))
                            .foregroundStyle(Palette.onAccent)
                            .padding(.horizontal, 10).frame(height: 28)
                            .background(Palette.accent, in: RoundedRectangle(cornerRadius: 7))
                    }
                    .padding(.leading, 14).padding(.trailing, 6)
                    .frame(height: 40)
                    .background(p.input, in: RoundedRectangle(cornerRadius: 10))
                    .overlay(RoundedRectangle(cornerRadius: 10).stroke(p.bd))

                    Button { app.go(.profile) } label: {
                        Text(app.initial)
                            .font(.sora(15, .bold))
                            .foregroundStyle(p.tx)
                            .frame(width: 40, height: 40)
                            .background(p.sf2, in: Circle())
                    }
                    .buttonStyle(.plain)
                }
            } else {
                HStack(spacing: 8) {
                    PillButton(title: "Connexion", primary: false) { app.openAuth(.login) }
                    PillButton(title: "Inscription", primary: true) { app.openAuth(.signup) }
                }
            }
        }
        .padding(.horizontal, 16)
        .padding(.top, 10).padding(.bottom, 14)
        .background(p.hd.ignoresSafeArea(edges: .top))
        .overlay(alignment: .bottom) { Rectangle().fill(p.bd).frame(height: 1) }
    }
}

struct PillButton: View {
    let title: String
    let primary: Bool
    var height: CGFloat = 40
    var radius: CGFloat = 10
    var fill = false
    let action: () -> Void
    @Environment(AppState.self) private var app

    var body: some View {
        Button(action: action) {
            Text(title)
                .font(.sora(14, primary ? .bold : .semibold))
                .foregroundStyle(primary ? Palette.onAccent : app.p.tx)
                .padding(.horizontal, 16)
                .frame(maxWidth: fill ? .infinity : nil)
                .frame(height: height)
                .background(primary ? Palette.accent : app.p.sf2, in: RoundedRectangle(cornerRadius: radius))
        }
        .buttonStyle(PressableStyle())
    }
}

struct TabBar: View {
    @Environment(AppState.self) private var app

    var body: some View {
        let p = app.p
        HStack(spacing: 0) {
            ForEach(Screen.allCases, id: \.self) { s in
                let active = app.screen == s
                Button { app.go(s) } label: {
                    VStack(spacing: 5) {
                        TabIcon(screen: s)
                            .frame(width: 48, height: 30)
                            .background(active ? p.sf2 : .clear, in: Capsule())
                        Text(s.label)
                            .font(.sora(10, .semibold))
                            .tracking(-0.1)
                    }
                    .foregroundStyle(active ? p.tx : p.mu)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 6)
                    .contentShape(Rectangle())
                }
                .buttonStyle(.plain)
            }
        }
        .padding(.horizontal, 2).padding(.top, 8).padding(.bottom, 2)
        .background(p.hd.ignoresSafeArea(edges: .bottom))
        .overlay(alignment: .top) { Rectangle().fill(p.bd).frame(height: 1) }
    }
}

/// Outlined abstract glyphs from the design's tab bar.
struct TabIcon: View {
    let screen: Screen

    var body: some View {
        let (w, h, r): (CGFloat, CGFloat, RectangleCornerRadii) = switch screen {
        case .home: (18, 16, .init(topLeading: 4, bottomLeading: 3, bottomTrailing: 3, topTrailing: 4))
        case .browse: (17, 17, .init(topLeading: 4, bottomLeading: 4, bottomTrailing: 4, topTrailing: 4))
        case .search: (16, 16, .init(topLeading: 8, bottomLeading: 8, bottomTrailing: 8, topTrailing: 8))
        case .chat: (20, 15, .init(topLeading: 6, bottomLeading: 1, bottomTrailing: 6, topTrailing: 6))
        case .profile: (16, 16, .init(topLeading: 8, bottomLeading: 5, bottomTrailing: 5, topTrailing: 8))
        }
        UnevenRoundedRectangle(cornerRadii: r)
            .strokeBorder(.foreground, lineWidth: 2)
            .frame(width: w, height: h)
    }
}
