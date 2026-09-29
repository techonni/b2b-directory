import { createContext, createElement, useContext, useMemo, useRef, useState } from 'react';
import { SEED } from './data';
import { THEMES } from './theme';

const Ctx = createContext(null);
export const useApp = () => useContext(Ctx);

export function AppProvider({ children }) {
  const [s, setS] = useState({
    screen: 'home', theme: 'dark', user: null, balance: 0, cat: 'all', query: '', room: 'general', draft: '',
    messages: JSON.parse(JSON.stringify(SEED)), auth: null, fUser: '', fEmail: '', fPass: '', authError: '', toast: '',
  });
  const timer = useRef(null);
  const cur = useRef(s);
  cur.current = s;
  const set = (patch) => setS((prev) => ({ ...prev, ...(typeof patch === 'function' ? patch(prev) : patch) }));

  const actions = useMemo(() => {
    const showToast = (msg) => {
      set({ toast: msg });
      clearTimeout(timer.current);
      timer.current = setTimeout(() => set({ toast: '' }), 2200);
    };
    const openAuth = (auth) => set({ auth, authError: '' });
    return {
      set,
      go: (screen) => set({ screen }),
      browse: (cat) => set({ screen: 'browse', cat }),
      openAuth,
      showToast,
      open: (g) => {
        if (!cur.current.user) return openAuth('login');
        showToast('Lancement de ' + g.name + '…');
      },
      submitAuth: () => {
        const { auth, fUser, fEmail, fPass } = cur.current;
        if (auth === 'signup' && fUser.trim().length < 3) return set({ authError: 'Le pseudo doit faire au moins 3 caractères.' });
        if (!/^\S+@\S+\.\S+$/.test(fEmail)) return set({ authError: 'Adresse e-mail invalide.' });
        if (fPass.length < 8) return set({ authError: 'Le mot de passe doit faire au moins 8 caractères.' });
        const name = auth === 'signup' ? fUser.trim() : fEmail.split('@')[0];
        set({ user: name, balance: auth === 'signup' ? 0 : 124.5, auth: null, fPass: '', authError: '' });
        showToast(auth === 'signup' ? 'Bienvenue sur zunrel, ' + name + ' !' : 'Content de te revoir, ' + name);
      },
      send: () => {
        const { draft, user, room } = cur.current;
        const text = draft.trim();
        if (!text) return;
        if (!user) return openAuth('login');
        set((prev) => ({ draft: '', messages: { ...prev.messages, [room]: [...prev.messages[room], [user, 2, text, true]] } }));
      },
      logout: () => {
        set({ user: null, balance: 0 });
        showToast('Tu es déconnecté');
      },
    };
  }, []);

  const value = { ...s, ...actions, p: THEMES[s.theme], initial: (s.user || '?')[0].toUpperCase() };
  return createElement(Ctx.Provider, { value }, children);
}
