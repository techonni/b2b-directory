import SwiftUI

// Palette from the design (Zunrel App.dc.html, THEMES).
struct Palette {
    let bg, hd, sf, sf2, bd, tx, mu, input: Color

    static let dark = Palette(
        bg: Color(hex: 0x121017), hd: Color(hex: 0x1a1721), sf: Color(hex: 0x1f1c28),
        sf2: Color(hex: 0x2c2839), bd: Color(hex: 0x3a3449), tx: Color(hex: 0xf4f2f8),
        mu: Color(hex: 0xa39db4), input: Color(hex: 0x0d0b12))

    static let light = Palette(
        bg: Color(hex: 0xf5f3f0), hd: Color(hex: 0xffffff), sf: Color(hex: 0xffffff),
        sf2: Color(hex: 0xebe7ef), bd: Color(hex: 0xdcd6e2), tx: Color(hex: 0x1a1622),
        mu: Color(hex: 0x686175), input: Color(hex: 0xffffff))

    static let accent = Color(hex: 0xff6b3d)
    static let onAccent = Color(hex: 0x1c0e08)
    static let ok = Color(hex: 0x3ddc84)
    static let error = Color(hex: 0xff5c6c)
}

extension Color {
    init(hex: UInt32) {
        self.init(.sRGB,
                  red: Double((hex >> 16) & 0xff) / 255,
                  green: Double((hex >> 8) & 0xff) / 255,
                  blue: Double(hex & 0xff) / 255)
    }

    /// CSS oklch(L C h) converted to sRGB.
    static func oklch(_ l: Double, _ c: Double, _ h: Double) -> Color {
        let hr = h * .pi / 180
        let a = c * cos(hr), b = c * sin(hr)
        let l_ = l + 0.3963377774 * a + 0.2158037573 * b
        let m_ = l - 0.1055613458 * a - 0.0638541728 * b
        let s_ = l - 0.0894841775 * a - 1.2914855480 * b
        let L = l_ * l_ * l_, M = m_ * m_ * m_, S = s_ * s_ * s_
        let r = 4.0767416621 * L - 3.3077115913 * M + 0.2309699292 * S
        let g = -1.2684380046 * L + 2.6097574011 * M - 0.3413193965 * S
        let bl = -0.0041960863 * L - 0.7034186147 * M + 1.7076147010 * S
        func enc(_ x: Double) -> Double {
            let v = x <= 0.0031308 ? 12.92 * x : 1.055 * pow(x, 1 / 2.4) - 0.055
            return min(max(v, 0), 1)
        }
        return Color(.sRGB, red: enc(r), green: enc(g), blue: enc(bl))
    }
}

extension Font {
    /// Sora (bundled in Fonts/). Falls back to the system font if the file is missing.
    static func sora(_ size: CGFloat, _ weight: Font.Weight = .regular) -> Font {
        .custom("Sora", size: size).weight(weight)
    }

    static func mono(_ size: CGFloat, _ weight: Font.Weight = .regular) -> Font {
        .custom("JetBrains Mono", size: size).weight(weight)
    }
}

/// CSS repeating-linear-gradient(135deg, a 0 w, b w 2w): diagonal placeholder stripes.
struct Stripes: View {
    let a: Color
    let b: Color
    var width: CGFloat = 10

    var body: some View {
        Canvas { ctx, size in
            ctx.fill(Path(CGRect(origin: .zero, size: size)), with: .color(a))
            ctx.rotate(by: .degrees(45))
            let span = size.width + size.height
            var x: CGFloat = width
            while x < span {
                ctx.fill(Path(CGRect(x: x, y: -span, width: width, height: span * 2)), with: .color(b))
                x += width * 2
            }
        }
    }
}

struct Dot: View {
    var size: CGFloat = 7
    var color: Color = Palette.ok
    var body: some View { Circle().fill(color).frame(width: size, height: size) }
}

struct Wordmark: View {
    var size: CGFloat = 28
    @Environment(AppState.self) private var app

    var body: some View {
        HStack(alignment: .firstTextBaseline, spacing: 2) {
            Text("zunrel")
                .font(.sora(size, .heavy))
                .tracking(-size * 0.054)
                .foregroundStyle(app.p.tx)
            Circle().fill(Palette.accent).frame(width: size * 0.29, height: size * 0.29)
        }
    }
}

struct PressableStyle: ButtonStyle {
    var scale: CGFloat = 0.97
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .scaleEffect(configuration.isPressed ? scale : 1)
            .animation(.easeOut(duration: 0.1), value: configuration.isPressed)
    }
}

extension View {
    func sectionTitle(_ p: Palette) -> some View {
        font(.sora(20, .bold)).tracking(-0.4).foregroundStyle(p.tx)
    }
}
