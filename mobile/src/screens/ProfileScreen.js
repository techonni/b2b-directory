import { Pressable, ScrollView, Text, View } from 'react-native';
import { useApp } from '../state';
import { AC, ACI, MONO, f } from '../theme';
import { Btn } from '../ui';

export default function ProfileScreen() {
  const { p, user, initial, theme, set, openAuth, logout } = useApp();
  const dark = theme === 'dark';
  const row = { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 };
  const sep = { borderBottomWidth: 1, borderBottomColor: p.bd };
  const label = [f(15, '500'), { color: p.tx }];
  const value = [f(14), { color: p.mu }];

  return (
    <ScrollView contentContainerStyle={{ padding: 16, paddingTop: 18, paddingBottom: 28, gap: 20 }} showsVerticalScrollIndicator={false}>
      {user ? (
        <>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
            <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: AC, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={[f(26, '800'), { color: ACI }]}>{initial}</Text>
            </View>
            <View style={{ gap: 4 }}>
              <Text style={[f(20, '700'), { color: p.tx }]}>{user}</Text>
              <Text style={[f(13), { color: p.mu }]}>Membre depuis sept. 2026</Text>
            </View>
          </View>
          <View style={{ gap: 10, padding: 16, borderRadius: 14, backgroundColor: p.sf }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={[f(14, '600'), { color: p.tx }]}>Niveau Argent II</Text>
              <Text style={[f(14, '500', MONO), { color: p.mu }]}>62 %</Text>
            </View>
            <View style={{ height: 8, borderRadius: 4, backgroundColor: p.sf2, overflow: 'hidden' }}>
              <View style={{ width: '62%', height: '100%', backgroundColor: AC, borderRadius: 4 }} />
            </View>
            <Text style={[f(12), { color: p.mu }]}>Encore 1 900 pts pour Or I</Text>
          </View>
        </>
      ) : (
        <View style={{ alignItems: 'center', gap: 14, paddingVertical: 36, paddingHorizontal: 20, borderRadius: 16, backgroundColor: p.sf }}>
          <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: p.sf2 }} />
          <Text style={[f(20, '700'), { color: p.tx }]}>Ton espace joueur</Text>
          <Text style={[f(14), { color: p.mu, lineHeight: 21, maxWidth: 260, textAlign: 'center' }]}>
            Connecte-toi pour suivre ton niveau, tes gains et tes favoris.
          </Text>
          <View style={{ flexDirection: 'row', gap: 8, alignSelf: 'stretch' }}>
            <Btn title="Connexion" onPress={() => openAuth('login')} h={46} r={11} flex />
            <Btn title="Inscription" primary onPress={() => openAuth('signup')} h={46} r={11} flex />
          </View>
        </View>
      )}

      <View style={{ borderRadius: 14, backgroundColor: p.sf, overflow: 'hidden' }}>
        <Pressable onPress={() => set({ theme: dark ? 'light' : 'dark' })} style={[row, sep]}>
          <Text style={label}>Thème sombre</Text>
          <View style={{ width: 46, height: 28, borderRadius: 14, padding: 3, backgroundColor: dark ? AC : p.sf2, alignItems: dark ? 'flex-end' : 'flex-start' }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, backgroundColor: '#fff' }} />
          </View>
        </Pressable>
        <View style={[row, sep]}>
          <Text style={label}>Langue</Text>
          <Text style={value}>Français ›</Text>
        </View>
        <View style={[row, sep]}>
          <Text style={label}>Jeu responsable</Text>
          <Text style={value}>›</Text>
        </View>
        <View style={row}>
          <Text style={label}>Aide et support</Text>
          <Text style={value}>›</Text>
        </View>
      </View>

      {!!user && (
        <Pressable onPress={logout} style={{ height: 48, borderRadius: 12, borderWidth: 1, borderColor: p.bd, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={[f(14, '600'), { color: p.tx }]}>Se déconnecter</Text>
        </Pressable>
      )}
    </ScrollView>
  );
}
