import SwiftUI

@main
struct ZunrelApp: App {
    @State private var app = AppState()

    var body: some Scene {
        WindowGroup {
            RootView()
                .environment(app)
                .preferredColorScheme(app.darkTheme ? .dark : .light)
        }
    }
}
