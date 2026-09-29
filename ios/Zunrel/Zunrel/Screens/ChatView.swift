import SwiftUI

struct ChatView: View {
    @Environment(AppState.self) private var app

    var body: some View {
        @Bindable var app = app
        let p = app.p
        let msgs = app.messages[app.room] ?? []

        VStack(spacing: 0) {
            HStack(spacing: 6) {
                ForEach(Room.allCases) { r in
                    ChipButton(title: r.label, active: app.room == r) { app.room = r }
                }
                Spacer()
            }
            .padding(.horizontal, 16).padding(.vertical, 12)
            .overlay(alignment: .bottom) { Rectangle().fill(p.bd).frame(height: 1) }

            ScrollViewReader { proxy in
                ScrollView {
                    LazyVStack(alignment: .leading, spacing: 8) {
                        ForEach(msgs) { m in MessageBubble(message: m).id(m.id) }
                    }
                    .padding(.horizontal, 16).padding(.vertical, 14)
                }
                .scrollIndicators(.hidden)
                .scrollDismissesKeyboard(.interactively)
                .defaultScrollAnchor(.bottom)
                .onChange(of: msgs.count) { scrollToEnd(proxy, app.messages[app.room] ?? []) }
                .onChange(of: app.room) { scrollToEnd(proxy, app.messages[app.room] ?? []) }
            }

            VStack(spacing: 10) {
                HStack(spacing: 8) {
                    TextField("", text: $app.draft,
                              prompt: Text(app.loggedIn ? "Écris ton message" : "Connecte-toi pour discuter").foregroundStyle(p.mu))
                        .font(.sora(15))
                        .foregroundStyle(p.tx)
                        .submitLabel(.send)
                        .onSubmit { app.send() }
                        .onChange(of: app.draft) { _, v in
                            if v.count > 160 { app.draft = String(v.prefix(160)) }
                        }
                        .padding(.horizontal, 14).frame(height: 46)
                        .background(p.input, in: RoundedRectangle(cornerRadius: 11))
                        .overlay(RoundedRectangle(cornerRadius: 11).stroke(p.bd))
                    PillButton(title: "Envoyer", primary: true, height: 46, radius: 11) { app.send() }
                }
                HStack {
                    HStack(spacing: 6) {
                        Dot()
                        Text("31 205 en ligne")
                    }
                    Spacer()
                    Text("\(160 - app.draft.count)").font(.mono(12))
                }
                .font(.sora(12))
                .foregroundStyle(p.mu)
            }
            .padding(.horizontal, 16).padding(.top, 12).padding(.bottom, 14)
            .background(p.hd)
            .overlay(alignment: .top) { Rectangle().fill(p.bd).frame(height: 1) }
        }
    }

    private func scrollToEnd(_ proxy: ScrollViewProxy, _ msgs: [ChatMessage]) {
        guard let last = msgs.last else { return }
        withAnimation(.easeOut(duration: 0.2)) { proxy.scrollTo(last.id, anchor: .bottom) }
    }
}

struct MessageBubble: View {
    let message: ChatMessage
    @Environment(AppState.self) private var app

    var body: some View {
        let p = app.p
        HStack(alignment: .firstTextBaseline, spacing: 6) {
            Text("N\(message.level)")
                .font(.mono(10, .semibold))
                .foregroundStyle(.white)
                .padding(.horizontal, 5)
                .frame(minWidth: 22).frame(height: 18)
                .background(ChatMessage.levelColors[min(message.level, 6)], in: RoundedRectangle(cornerRadius: 5))
                .alignmentGuide(.firstTextBaseline) { $0[VerticalAlignment.center] + 5 }
            (Text("\(message.user): ").fontWeight(.semibold).foregroundColor(p.mu)
             + Text(message.text).foregroundColor(p.tx))
                .font(.sora(15))
                .lineSpacing(4)
                .frame(maxWidth: .infinity, alignment: .leading)
        }
        .padding(.horizontal, 14).padding(.vertical, 11)
        .background(message.mine ? p.sf2 : p.sf, in: RoundedRectangle(cornerRadius: 12))
    }
}
