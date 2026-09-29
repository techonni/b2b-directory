import { Pressable, ScrollView, Text, View } from 'react-native';
import { CATS, GAMES } from '../data';
import { useApp } from '../state';
import { f, num } from '../theme';
import { Chip, Dot, GameArt } from '../ui';

export default function BrowseScreen() {
  const { p, cat, set, open } = useApp();
  const games = GAMES.filter((g) => cat === 'all' || g.cat === cat);
  const players = games.reduce((a, g) => a + g.players, 0);
  return (
    <ScrollView contentContainerStyle={{ padding: 16, paddingTop: 18, paddingBottom: 28, gap: 18 }} showsVerticalScrollIndicator={false}>
      <Text style={[f(24, '700'), { letterSpacing: -0.6, color: p.tx }]}>Parcourir</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -16 }} contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}>
        {CATS.map(([k, label]) => (
          <Chip key={k} title={label} active={cat === k} onPress={() => set({ cat: k })} h={38} r={19} px={16} size={14} />
        ))}
      </ScrollView>
      <Text style={[f(13), { color: p.mu }]}>{games.length} jeux · {num(players)} joueurs</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: -4, rowGap: 10 }}>
        {games.map((g) => (
          <Pressable key={g.id} onPress={() => open(g)} style={{ width: '33.333%', paddingHorizontal: 4, gap: 6 }}>
            <GameArt game={g} style={{ aspectRatio: 3 / 4, borderRadius: 10, padding: 8, justifyContent: 'flex-end' }}>
              <Text style={[f(12, '800'), { color: '#fff', lineHeight: 13 }]}>{g.name.toUpperCase()}</Text>
            </GameArt>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
              <Dot size={6} />
              <Text style={[f(11), { color: p.mu }]}>{num(g.players)}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}
