import SwiftUI

struct SearchView: View {
    @Environment(AppState.self) private var app
    @FocusState private var focused: Bool

    private let recent = ["Plinko", "Roulette", "Nebula", "Crash"]

    var body: some View {
        @Bindable var app = app
        let p = app.p
        let q = app.query.trimmingCharacters(in: .whitespaces).lowercased()
        let results = q.isEmpty
            ? Array(Game.all.prefix(5))
            : Game.all.filter { "\($0.name) \($0.studio) \($0.cat.label)".lowercased().contains(q) }

        ScrollView {
            VStack(alignment: .leading, spacing: 18) {
                HStack(spacing: 12) {
                    SearchGlyph()
                    TextField("", text: $app.query, prompt: Text("Rechercher un jeu, un studio…").foregroundStyle(p.mu))
                        .font(.sora(15))
                        .foregroundStyle(p.tx)
                        .focused($focused)
                        .submitLabel(.search)
                        .autocorrectionDisabled()
                    if !q.isEmpty {
                        Button("Effacer") { app.query = "" }
                            .font(.sora(13, .semibold)).foregroundStyle(p.mu)
                    }
                }
                .padding(.horizontal, 16).frame(height: 50)
                .background(p.input, in: RoundedRectangle(cornerRadius: 12))
                .overlay(RoundedRectangle(cornerRadius: 12).stroke(Palette.accent))

                if q.isEmpty {
                    VStack(alignment: .leading, spacing: 12) {
                        Text("RECHERCHES RÉCENTES")
                            .font(.sora(13, .semibold)).tracking(0.8)
                            .foregroundStyle(p.mu)
                        FlowRow(spacing: 8) {
                            ForEach(recent, id: \.self) { r in
                                Button { app.query = r } label: {
                                    Text(r)
                                        .font(.sora(13, .medium)).foregroundStyle(p.tx)
                                        .padding(.horizontal, 14).frame(height: 34)
                                        .overlay(Capsule().stroke(p.bd))
                                }
                                .buttonStyle(PressableStyle())
                            }
                        }
                    }
                } else {
                    Text(results.isEmpty
                         ? "Aucun résultat pour « \(app.query) »"
                         : "\(results.count) résultat\(results.count > 1 ? "s" : "")")
                        .font(.sora(13)).foregroundStyle(p.mu)
                }

                VStack(spacing: 8) {
                    ForEach(results) { g in
                        Button { app.open(g) } label: {
                            HStack(spacing: 12) {
                                g.stripes(light: !app.darkTheme)
                                    .frame(width: 44, height: 58)
                                    .clipShape(RoundedRectangle(cornerRadius: 8))
                                VStack(alignment: .leading, spacing: 3) {
                                    Text(g.name).font(.sora(15, .semibold)).foregroundStyle(p.tx)
                                    Text("\(g.studio) · \(g.cat.label)").font(.sora(12)).foregroundStyle(p.mu)
                                }
                                Spacer()
                                Text(FR.number(g.players)).font(.mono(12, .medium)).foregroundStyle(p.mu)
                            }
                            .padding(10)
                            .background(p.sf, in: RoundedRectangle(cornerRadius: 12))
                        }
                        .buttonStyle(PressableStyle(scale: 0.99))
                    }
                }
            }
            .padding(.horizontal, 16)
            .padding(.top, 18).padding(.bottom, 28)
        }
        .scrollIndicators(.hidden)
        .scrollDismissesKeyboard(.interactively)
        .onAppear { focused = true }
    }
}

/// Wrapping row (CSS flex-wrap).
struct FlowRow: Layout {
    var spacing: CGFloat = 8

    func sizeThatFits(proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) -> CGSize {
        let rows = arrange(width: proposal.width ?? .infinity, subviews: subviews)
        return CGSize(width: proposal.width ?? rows.width, height: rows.height)
    }

    func placeSubviews(in bounds: CGRect, proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) {
        let rows = arrange(width: bounds.width, subviews: subviews)
        for (i, pt) in rows.points.enumerated() {
            subviews[i].place(at: CGPoint(x: bounds.minX + pt.x, y: bounds.minY + pt.y), proposal: .unspecified)
        }
    }

    private func arrange(width: CGFloat, subviews: Subviews) -> (points: [CGPoint], width: CGFloat, height: CGFloat) {
        var points: [CGPoint] = []
        var x: CGFloat = 0, y: CGFloat = 0, rowH: CGFloat = 0, maxW: CGFloat = 0
        for s in subviews {
            let size = s.sizeThatFits(.unspecified)
            if x > 0 && x + size.width > width {
                x = 0
                y += rowH + spacing
                rowH = 0
            }
            points.append(CGPoint(x: x, y: y))
            x += size.width + spacing
            rowH = max(rowH, size.height)
            maxW = max(maxW, x - spacing)
        }
        return (points, maxW, y + rowH)
    }
}
