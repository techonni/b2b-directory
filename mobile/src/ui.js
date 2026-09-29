import { useId } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Defs, Pattern, Rect } from 'react-native-svg';
import { useApp } from './state';
import { AC, ACI, OK, f, oklch } from './theme';

/** CSS repeating-linear-gradient(135deg, a 0 w, b w 2w). */
export function Stripes({ a, b, w = 10, style }) {
  const id = 'st' + useId().replace(/[^a-zA-Z0-9]/g, '');
  return (
    <View style={[{ overflow: 'hidden' }, style]} pointerEvents="none">
      <Svg width="100%" height="100%" style={{ position: 'absolute' }}>
        <Defs>
          <Pattern id={id} patternUnits="userSpaceOnUse" width={w * 2} height={w * 2} patternTransform="rotate(45)">
            <Rect x={0} y={0} width={w} height={w * 2} fill={a} />
            <Rect x={w} y={0} width={w} height={w * 2} fill={b} />
          </Pattern>
        </Defs>
        <Rect x={0} y={0} width="100%" height="100%" fill={`url(#${id})`} />
      </Svg>
    </View>
  );
}

export function GameArt({ game, style, children }) {
  const { theme } = useApp();
  const d = theme === 'light' ? 0.02 : 0;
  return (
    <View style={[{ overflow: 'hidden' }, style]}>
      <Stripes a={oklch(0.5 + d, 0.13, game.hue)} b={oklch(0.45 + d, 0.12, game.hue)} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
      {children}
    </View>
  );
}

export const Dot = ({ size = 7, color = OK }) => <View style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: color }} />;

export function Wordmark({ size = 28 }) {
  const { p } = useApp();
  const d = size * 0.29;
  return (
    <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 2 }}>
      <Text style={[f(size, '800'), { letterSpacing: -size * 0.054, color: p.tx, lineHeight: size * 1.1 }]}>zunrel</Text>
      <View style={{ width: d, height: d, borderRadius: d / 2, backgroundColor: AC, marginBottom: size * 0.2 }} />
    </View>
  );
}

/** Pill button; primary = accent fill. */
export function Btn({ title, primary, onPress, h = 40, r = 10, flex, px = 16, size = 14 }) {
  const { p } = useApp();
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        { height: h, paddingHorizontal: px, borderRadius: r, alignItems: 'center', justifyContent: 'center', backgroundColor: primary ? AC : p.sf2 },
        flex && { flex: 1 },
        pressed && { transform: [{ scale: 0.97 }] },
      ]}
    >
      <Text style={[f(size, primary ? '700' : '600'), { color: primary ? ACI : p.tx }]}>{title}</Text>
    </Pressable>
  );
}

export function Chip({ title, active, onPress, h = 32, r = 8, px = 14, size = 13 }) {
  const { p } = useApp();
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        { height: h, paddingHorizontal: px, borderRadius: r, justifyContent: 'center', backgroundColor: active ? AC : p.sf2 },
        pressed && { opacity: 0.8 },
      ]}
    >
      <Text style={[f(size, '600'), { color: active ? ACI : p.tx }]}>{title}</Text>
    </Pressable>
  );
}

export const SearchGlyph = () => {
  const { p } = useApp();
  return <View style={{ width: 16, height: 16, borderRadius: 8, borderWidth: 2, borderColor: p.mu }} />;
};
