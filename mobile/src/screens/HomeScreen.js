import { Pressable, ScrollView, Text, View } from 'react-native';
import { GAMES } from '../data';
import { useApp } from '../state';
import { AC, MONO, f, num, oklch } from '../theme';
import { Dot, GameArt, SearchGlyph, Stripes } from '../ui';

export default function HomeScreen() {
  const { p, go, browse, openAuth, open } = useApp();
  const title = [f(20, '700'), { letterSpacing: -0.4, color: p.tx }];
  return (
    <ScrollView contentContainerStyle={{ padding: 16, paddingTop: 18, paddingBottom: 28, gap: 26 }} showsVerticalScrollIndicator={false}>
      <Pressable onPress={() => go('search')} style={{ height: 50, flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, borderRadius: 12, backgroundColor: p.in, borderWidth: 1, borderColor: p.bd }}>
        <SearchGlyph />
        <Text style={[f(15), { color: p.mu }]}>Rechercher un jeu, un studio…</Text>
      </Pressable>

      <View style={{ height: 170, borderRadius: 16, overflow: 'hidden', justifyContent: 'flex-end', padding: 18, gap: 8 }}>
        <Stripes a={oklch(0.42, 0.12, 40)} b={oklch(0.38, 0.11, 40)} w={12} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
        <Text style={[f(10, '500', MONO), { position: 'absolute', top: 14, right: 14, color: 'rgba(255,255,255,.7)' }]}>visuel promo</Text>
        <Text style={[f(11, '500', MONO), { color: '#fff', letterSpacing: 1 }]}>OFFRE DE BIENVENUE</Text>
        <Text style={[f(24, '800'), { color: '#fff', letterSpacing: -0.5, lineHeight: 26, maxWidth: 250 }]}>200 % sur ton premier dépôt</Text>
        <Pressable onPress={() => openAuth('signup')} style={{ alignSelf: 'flex-start', height: 36, paddingHorizontal: 16, borderRadius: 9, backgroundColor: '#fff', justifyContent: 'center' }}>
          <Text style={[f(13, '700'), { color: '#1a1622' }]}>Je m'inscris</Text>
        </Pressable>
      </View>

      <View style={{ flexDirection: 'row', gap: 10 }}>
        {[['Jeux', '21 402', 'all'], ['Live', '8 190', 'live']].map(([label, count, cat]) => (
          <Pressable key={cat} onPress={() => browse(cat)} style={{ flex: 1, height: 64, borderRadius: 12, backgroundColor: p.sf, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16 }}>
            <Text style={[f(16, '600'), { color: p.tx }]}>{label}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <Dot />
              <Text style={[f(13, '500', MONO), { color: p.mu }]}>{count}</Text>
            </View>
          </Pressable>
        ))}
      </View>

      <View style={{ gap: 14 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <Text style={title}>Tendances</Text>
          <Pressable onPress={() => browse('all')}>
            <Text style={[f(13, '600'), { color: AC }]}>Tout voir</Text>
          </Pressable>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -16 }} contentContainerStyle={{ paddingHorizontal: 16, gap: 10 }}>
          {GAMES.slice(0, 7).map((g) => (
            <Pressable key={g.id} onPress={() => open(g)} style={{ width: 132, gap: 8 }}>
              <GameArt game={g} style={{ aspectRatio: 3 / 4, borderRadius: 12, padding: 10, justifyContent: 'flex-end' }}>
                <Text style={[f(9, '500', MONO), { position: 'absolute', top: 8, left: 10, color: 'rgba(255,255,255,.65)' }]}>visuel du jeu</Text>
                <Text style={[f(15, '800'), { color: '#fff', lineHeight: 17 }]}>{g.name.toUpperCase()}</Text>
                <Text style={[f(9, '500', MONO), { color: 'rgba(255,255,255,.75)', marginTop: 4 }]}>{g.studio}</Text>
              </GameArt>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <Dot size={6} />
                <Text style={[f(12), { color: p.mu }]}>{num(g.players)} en jeu</Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <View style={{ gap: 14 }}>
        <Text style={title}>Originaux zunrel</Text>
        <View style={{ gap: 8 }}>
          {GAMES.filter((g) => g.cat === 'originals').map((g) => (
            <Pressable key={g.id} onPress={() => open(g)} style={({ pressed }) => ({ flexDirection: 'row', alignItems: 'center', gap: 12, padding: 10, borderRadius: 12, backgroundColor: p.sf, opacity: pressed ? 0.8 : 1 })}>
              <GameArt game={g} style={{ width: 48, height: 48, borderRadius: 10 }} />
              <View style={{ flex: 1, gap: 3 }}>
                <Text style={[f(15, '600'), { color: p.tx }]}>{g.name}</Text>
                <Text style={[f(12), { color: p.mu }]}>{num(g.players)} joueurs en ligne</Text>
              </View>
              <View style={{ height: 32, paddingHorizontal: 14, borderRadius: 8, backgroundColor: p.sf2, justifyContent: 'center' }}>
                <Text style={[f(13, '600'), { color: p.tx }]}>Jouer</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
