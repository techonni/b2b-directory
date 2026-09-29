import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { TABS } from './src/data';
import AuthSheet from './src/screens/AuthSheet';
import BrowseScreen from './src/screens/BrowseScreen';
import ChatScreen from './src/screens/ChatScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SearchScreen from './src/screens/SearchScreen';
import { AppProvider, useApp } from './src/state';
import { AC, ACI, MONO, f } from './src/theme';
import { Btn, Wordmark } from './src/ui';

export default function App() {
  const [loaded] = useFonts({
    Sora: require('./assets/fonts/Sora.ttf'),
    JetBrainsMono: require('./assets/fonts/JetBrainsMono.ttf'),
  });
  if (!loaded) return <View style={{ flex: 1, backgroundColor: '#121017' }} />;
  return (
    <SafeAreaProvider>
      <AppProvider>
        <Root />
      </AppProvider>
    </SafeAreaProvider>
  );
}

const SCREENS = { home: HomeScreen, browse: BrowseScreen, search: SearchScreen, chat: ChatScreen, profile: ProfileScreen };

function Root() {
  const { p, theme, screen, toast, auth } = useApp();
  const Screen = SCREENS[screen];
  return (
    <View style={{ flex: 1, backgroundColor: p.bg }}>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      <Header />
      <View style={{ flex: 1 }}>
        <Screen />
      </View>
      <TabBar />
      {!!toast && (
        <View style={{ position: 'absolute', left: 16, right: 16, bottom: 110, padding: 14, paddingHorizontal: 16, borderRadius: 12, backgroundColor: p.tx, shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 15, shadowOffset: { width: 0, height: 8 }, elevation: 8 }}>
          <Text style={[f(14, '600'), { color: p.bg }]}>{toast}</Text>
        </View>
      )}
      {!!auth && <AuthSheet />}
    </View>
  );
}

function Header() {
  const { p, user, balance, initial, go, openAuth } = useApp();
  const insets = useSafeAreaInsets();
  return (
    <View style={{ backgroundColor: p.hd, paddingTop: insets.top + 10, paddingBottom: 14, paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: p.bd, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <Pressable onPress={() => go('home')}>
        <Wordmark />
      </Pressable>
      {user ? (
        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
          <View style={{ height: 40, flexDirection: 'row', alignItems: 'center', gap: 8, paddingLeft: 14, paddingRight: 6, borderRadius: 10, backgroundColor: p.in, borderWidth: 1, borderColor: p.bd }}>
            <Text style={[f(14, '500', MONO), { color: p.tx }]}>{balance.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €</Text>
            <View style={{ height: 28, paddingHorizontal: 10, borderRadius: 7, backgroundColor: AC, justifyContent: 'center' }}>
              <Text style={[f(13, '700'), { color: ACI }]}>Dépôt</Text>
            </View>
          </View>
          <Pressable onPress={() => go('profile')} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: p.sf2, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={[f(15, '700'), { color: p.tx }]}>{initial}</Text>
          </Pressable>
        </View>
      ) : (
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <Btn title="Connexion" onPress={() => openAuth('login')} />
          <Btn title="Inscription" primary onPress={() => openAuth('signup')} />
        </View>
      )}
    </View>
  );
}

// Outlined abstract glyphs from the design's tab bar: [width, height, radii TL TR BR BL].
const ICONS = {
  home: [18, 16, [4, 4, 3, 3]],
  browse: [17, 17, [4, 4, 4, 4]],
  search: [16, 16, [8, 8, 8, 8]],
  chat: [20, 15, [6, 6, 6, 1]],
  profile: [16, 16, [8, 8, 5, 5]],
};

function TabBar() {
  const { p, screen, go } = useApp();
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flexDirection: 'row', paddingTop: 8, paddingHorizontal: 2, paddingBottom: Math.max(insets.bottom, 12), backgroundColor: p.hd, borderTopWidth: 1, borderTopColor: p.bd }}>
      {TABS.map(([k, label]) => {
        const active = screen === k;
        const color = active ? p.tx : p.mu;
        const [w, h, [tl, tr, br, bl]] = ICONS[k];
        return (
          <Pressable key={k} onPress={() => go(k)} style={{ flex: 1, alignItems: 'center', gap: 5, paddingVertical: 6 }}>
            <View style={{ width: 48, height: 30, borderRadius: 15, backgroundColor: active ? p.sf2 : 'transparent', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ width: w, height: h, borderWidth: 2, borderColor: color, borderTopLeftRadius: tl, borderTopRightRadius: tr, borderBottomRightRadius: br, borderBottomLeftRadius: bl }} />
            </View>
            <Text style={[f(10, '600'), { color, letterSpacing: -0.1 }]}>{label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
