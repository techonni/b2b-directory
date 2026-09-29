import { useEffect, useRef } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from 'react-native';
import { LVL, ROOMS } from '../data';
import { useApp } from '../state';
import { MONO, f } from '../theme';
import { Btn, Chip, Dot } from '../ui';

export default function ChatScreen() {
  const { p, user, room, messages, draft, set, send } = useApp();
  const list = messages[room];
  const ref = useRef(null);

  useEffect(() => {
    requestAnimationFrame(() => ref.current?.scrollToEnd({ animated: false }));
  }, [room, list.length]);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={{ flexDirection: 'row', gap: 6, paddingHorizontal: 16, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: p.bd }}>
        {ROOMS.map(([k, label]) => (
          <Chip key={k} title={label} active={room === k} onPress={() => set({ room: k })} />
        ))}
      </View>

      <ScrollView ref={ref} style={{ flex: 1 }} contentContainerStyle={{ gap: 8, paddingHorizontal: 16, paddingVertical: 14 }} keyboardDismissMode="interactive" showsVerticalScrollIndicator={false}>
        {list.map(([name, lvl, text, mine], i) => (
          <View key={i} style={{ paddingVertical: 11, paddingHorizontal: 14, borderRadius: 12, backgroundColor: mine ? p.sf2 : p.sf, flexDirection: 'row', gap: 6, alignItems: 'flex-start' }}>
            <View style={{ minWidth: 22, height: 18, paddingHorizontal: 5, borderRadius: 5, backgroundColor: LVL[lvl], alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
              <Text style={[f(10, '600', MONO), { color: '#fff' }]}>N{lvl}</Text>
            </View>
            <Text style={[f(15), { flex: 1, color: p.tx, lineHeight: 22 }]}>
              <Text style={{ fontWeight: '600', color: p.mu }}>{name}: </Text>
              {text}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={{ gap: 10, paddingHorizontal: 16, paddingTop: 12, paddingBottom: 14, borderTopWidth: 1, borderTopColor: p.bd, backgroundColor: p.hd }}>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <TextInput
            value={draft}
            onChangeText={(t) => set({ draft: t })}
            onSubmitEditing={send}
            returnKeyType="send"
            maxLength={160}
            placeholder={user ? 'Écris ton message' : 'Connecte-toi pour discuter'}
            placeholderTextColor={p.mu}
            style={[f(15), { flex: 1, height: 46, paddingHorizontal: 14, borderRadius: 11, borderWidth: 1, borderColor: p.bd, backgroundColor: p.in, color: p.tx }]}
          />
          <Btn title="Envoyer" primary onPress={send} h={46} r={11} px={18} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <Dot />
            <Text style={[f(12), { color: p.mu }]}>31 205 en ligne</Text>
          </View>
          <Text style={[f(12, '400', MONO), { color: p.mu }]}>{160 - draft.length}</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
