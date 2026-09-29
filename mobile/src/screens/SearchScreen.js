import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { CAT_LABEL, GAMES } from '../data';
import { useApp } from '../state';
import { AC, MONO, f, num } from '../theme';
import { GameArt, SearchGlyph } from '../ui';

const RECENT = ['Plinko', 'Roulette', 'Nebula', 'Crash'];

export default function SearchScreen() {
  const { p, query, set, open } = useApp();
  const q = query.trim().toLowerCase();
  const results = q
    ? GAMES.filter((g) => (g.name + ' ' + g.studio + ' ' + CAT_LABEL[g.cat]).toLowerCase().includes(q))
    : GAMES.slice(0, 5);
  const n = results.length;
  return (
    <ScrollView contentContainerStyle={{ padding: 16, paddingTop: 18, paddingBottom: 28, gap: 18 }} keyboardShouldPersistTaps="handled" keyboardDismissMode="on-drag" showsVerticalScrollIndicator={false}>
      <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, borderRadius: 12, backgroundColor: p.in, borderWidth: 1, borderColor: AC }}>
        <SearchGlyph />
        <TextInput
          autoFocus
          value={query}
          onChangeText={(t) => set({ query: t })}
          placeholder="Rechercher un jeu, un studio…"
          placeholderTextColor={p.mu}
          autoCorrect={false}
          returnKeyType="search"
          style={[f(15), { flex: 1, color: p.tx, padding: 0 }]}
        />
        {!!q && (
          <Pressable onPress={() => set({ query: '' })}>
            <Text style={[f(13, '600'), { color: p.mu }]}>Effacer</Text>
          </Pressable>
        )}
      </View>

      {q ? (
        <Text style={[f(13), { color: p.mu }]}>{n ? n + ' résultat' + (n > 1 ? 's' : '') : 'Aucun résultat pour « ' + query + ' »'}</Text>
      ) : (
        <View style={{ gap: 12 }}>
          <Text style={[f(13, '600'), { color: p.mu, letterSpacing: 0.8 }]}>RECHERCHES RÉCENTES</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            {RECENT.map((r) => (
              <Pressable key={r} onPress={() => set({ query: r })} style={{ height: 34, paddingHorizontal: 14, borderRadius: 17, borderWidth: 1, borderColor: p.bd, justifyContent: 'center' }}>
                <Text style={[f(13, '500'), { color: p.tx }]}>{r}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      )}

      <View style={{ gap: 8 }}>
        {results.map((g) => (
          <Pressable key={g.id} onPress={() => open(g)} style={{ flexDirection: 'row', alignItems: 'center', gap: 12, padding: 10, borderRadius: 12, backgroundColor: p.sf }}>
            <GameArt game={g} style={{ width: 44, height: 58, borderRadius: 8 }} />
            <View style={{ flex: 1, gap: 3 }}>
              <Text style={[f(15, '600'), { color: p.tx }]}>{g.name}</Text>
              <Text style={[f(12), { color: p.mu }]}>{g.studio} · {CAT_LABEL[g.cat]}</Text>
            </View>
            <Text style={[f(12, '500', MONO), { color: p.mu }]}>{num(g.players)}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}
