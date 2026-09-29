import { KeyboardAvoidingView, Platform, Pressable, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useApp } from '../state';
import { ACI, AC, ERR, f } from '../theme';
import { Wordmark } from '../ui';

export default function AuthSheet() {
  const { p, auth, fUser, fEmail, fPass, authError, set, openAuth, submitAuth } = useApp();
  const insets = useSafeAreaInsets();
  const signup = auth === 'signup';
  const close = () => set({ auth: null });

  const field = (label, value, key, props) => (
    <View style={{ gap: 6 }}>
      <Text style={[f(13, '500'), { color: p.mu }]}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={(t) => set({ [key]: t })}
        placeholderTextColor={p.mu}
        autoCapitalize="none"
        autoCorrect={false}
        style={[f(15), { height: 48, paddingHorizontal: 14, borderRadius: 11, borderWidth: 1, borderColor: p.bd, backgroundColor: p.in, color: p.tx }]}
        {...props}
      />
    </View>
  );

  const tab = (title, active, mode) => (
    <Pressable onPress={() => openAuth(mode)} style={{ flex: 1, height: 38, borderRadius: 9, alignItems: 'center', justifyContent: 'center', backgroundColor: active ? p.sf2 : 'transparent' }}>
      <Text style={[f(14, '600'), { color: p.tx }]}>{title}</Text>
    </Pressable>
  );

  return (
    <KeyboardAvoidingView style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end' }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Pressable onPress={close} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,.55)' }} />
      <View style={{ paddingTop: 10, paddingHorizontal: 20, paddingBottom: Math.max(insets.bottom, 20) + 14, borderTopLeftRadius: 24, borderTopRightRadius: 24, backgroundColor: p.hd, gap: 16 }}>
        <View style={{ alignSelf: 'center', width: 40, height: 5, borderRadius: 3, backgroundColor: p.bd }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Wordmark size={24} />
          <Pressable onPress={close} hitSlop={12}>
            <Text style={[f(26), { color: p.mu, lineHeight: 28 }]}>×</Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: 'row', padding: 4, borderRadius: 12, backgroundColor: p.in }}>
          {tab('Connexion', !signup, 'login')}
          {tab('Inscription', signup, 'signup')}
        </View>
        {signup && field('Pseudo', fUser, 'fUser', { placeholder: 'ex. LuckyNova', textContentType: 'username' })}
        {field('E-mail', fEmail, 'fEmail', { placeholder: 'toi@exemple.fr', keyboardType: 'email-address', textContentType: 'emailAddress' })}
        {field('Mot de passe', fPass, 'fPass', { placeholder: '8 caractères minimum', secureTextEntry: true, textContentType: signup ? 'newPassword' : 'password' })}
        {!!authError && <Text style={[f(13, '500'), { color: ERR }]}>{authError}</Text>}
        <Pressable onPress={submitAuth} style={({ pressed }) => ({ height: 52, borderRadius: 12, backgroundColor: AC, alignItems: 'center', justifyContent: 'center', transform: [{ scale: pressed ? 0.98 : 1 }] })}>
          <Text style={[f(16, '700'), { color: ACI }]}>{signup ? 'Créer mon compte' : 'Se connecter'}</Text>
        </Pressable>
        <Text style={[f(11), { color: p.mu, textAlign: 'center', lineHeight: 16 }]}>Réservé aux 18 ans et plus. Joue de manière responsable.</Text>
      </View>
    </KeyboardAvoidingView>
  );
}
