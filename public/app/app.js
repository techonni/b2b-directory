// zunrel web app: same screens and logic as the design (Zunrel App.dc.html).
(function () {
  'use strict';

  const GAMES = [
    { id: 1, name: 'Pharaon Doré', studio: 'Nebula Games', cat: 'slots', players: 412, hue: 75 },
    { id: 2, name: 'Crash Rocket', studio: 'Zunrel Originals', cat: 'originals', players: 388, hue: 25 },
    { id: 3, name: 'Neon Fruits', studio: 'Pixel Forge', cat: 'slots', players: 301, hue: 340 },
    { id: 4, name: 'Blackjack Royal', studio: 'LiveStudio', cat: 'live', players: 276, hue: 155 },
    { id: 5, name: 'Mines', studio: 'Zunrel Originals', cat: 'originals', players: 254, hue: 285 },
    { id: 6, name: 'Roulette Lumière', studio: 'LiveStudio', cat: 'live', players: 231, hue: 10 },
    { id: 7, name: 'Dragon Spin', studio: 'Nebula Games', cat: 'slots', players: 198, hue: 50 },
    { id: 8, name: 'Plinko', studio: 'Zunrel Originals', cat: 'originals', players: 187, hue: 205 },
    { id: 9, name: 'Baccarat Privé', studio: 'LiveStudio', cat: 'live', players: 152, hue: 0 },
    { id: 10, name: "Poker Hold'em", studio: 'CardHouse', cat: 'tables', players: 143, hue: 170 },
    { id: 11, name: 'Dés Turbo', studio: 'Zunrel Originals', cat: 'originals', players: 120, hue: 260 },
    { id: 12, name: 'Océan Mystique', studio: 'Pixel Forge', cat: 'slots', players: 96, hue: 230 },
    { id: 13, name: 'Vidéo Poker', studio: 'CardHouse', cat: 'tables', players: 81, hue: 120 },
  ];
  const CATS = [['all', 'Tout'], ['originals', 'Originaux'], ['slots', 'Machines'], ['live', 'Live'], ['tables', 'Tables']];
  const CAT_LABEL = Object.fromEntries(CATS);
  const ROOMS = [['general', 'Général'], ['fr', 'Français'], ['vip', 'VIP']];
  const SEED = {
    general: [
      ['LuckyNova', 3, 'Quelqu’un a testé le nouveau Plinko ?'],
      ['Maxou_77', 4, 'oui x120 hier soir, trop content'],
      ['Sabrina.K', 2, 'GG Maxou !'],
      ['R3nard', 5, 'le crash monte à combien en moyenne ?'],
      ['LuckyNova', 3, 'ça dépend, moi je sors à 2x'],
      ['Pixelle', 4, 'bonne soirée à tous'],
      ['Tomtom', 1, 'premier jour ici, des conseils ?'],
      ['R3nard', 5, 'fixe-toi une limite et amuse-toi'],
    ],
    fr: [['Camille', 2, 'Salut la team FR'], ['Yanis', 3, 'yo ! le live roulette est calme ce soir']],
    vip: [['Aurora', 6, 'Nouveau tournoi vendredi 21h'], ['Kaï', 6, 'inscrit, ça va être serré']],
  };
  const LVL = ['#6b6478', '#5a7d9a', '#3d9970', '#b08d2e', '#c0602f', '#9b4dca', '#d63a6a'];
  const TABS = [['home', 'Accueil'], ['browse', 'Parcourir'], ['search', 'Recherche'], ['chat', 'Chat'], ['profile', 'Profil']];
  const ICONS = { home: [18, 16, '4px 4px 3px 3px'], browse: [17, 17, '4px'], search: [16, 16, '50%'], chat: [20, 15, '6px 6px 6px 1px'], profile: [16, 16, '50% 50% 5px 5px'] };
  const RECENT = ['Plinko', 'Roulette', 'Nebula', 'Crash'];

  const store = {
    get(k) { try { return localStorage.getItem('zunrel.' + k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem('zunrel.' + k, v); } catch (e) { /* private mode */ } },
  };

  const S = {
    screen: 'home', theme: store.get('theme') || 'dark', user: null, balance: 0, cat: 'all', query: '',
    room: 'general', draft: '', messages: JSON.parse(JSON.stringify(SEED)),
    auth: null, fUser: '', fEmail: '', fPass: '', authError: '', toast: '',
  };

  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const num = (n) => n.toLocaleString('fr-FR');
  const art = (g) => {
    const d = S.theme === 'light' ? 0.02 : 0;
    return `background:repeating-linear-gradient(135deg,oklch(${0.5 + d} 0.13 ${g.hue}) 0 10px,oklch(${0.45 + d} 0.12 ${g.hue}) 10px 20px)`;
  };
  const byId = (id) => GAMES.find((g) => g.id === +id);

  // ---------- render ----------
  function header() {
    const logo = '<button class="logo" data-act="go" data-arg="home"><b>zunrel</b><i></i></button>';
    if (!S.user) {
      return logo + '<div class="row"><button class="btn press" data-act="auth" data-arg="login">Connexion</button><button class="btn pri press" data-act="auth" data-arg="signup">Inscription</button></div>';
    }
    return logo + `<div class="row">
      <div class="row" style="height:40px;padding:0 6px 0 14px;border-radius:10px;background:var(--in);border:1px solid var(--bd)">
        <span class="mono" style="font-size:14px;font-weight:500">${S.balance.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €</span>
        <span style="height:28px;padding:0 10px;border-radius:7px;background:var(--ac);color:var(--aci);font:700 13px/28px Sora,sans-serif">Dépôt</span>
      </div>
      <button data-act="go" data-arg="profile" style="width:40px;height:40px;border-radius:50%;background:var(--sf2);font:700 15px Sora,sans-serif">${esc(S.user[0].toUpperCase())}</button>
    </div>`;
  }

  function tabs() {
    return TABS.map(([k, label]) => {
      const [w, h, r] = ICONS[k];
      return `<button class="tab${S.screen === k ? ' on' : ''}" data-act="go" data-arg="${k}"><span class="pill"><i style="width:${w}px;height:${h}px;border-radius:${r}"></i></span>${label}</button>`;
    }).join('');
  }

  const card = (g) => `<button class="card press" data-act="open" data-arg="${g.id}">
      <span class="art" style="${art(g)}"><span class="tag">visuel du jeu</span><span class="n">${esc(g.name)}</span><span class="s">${esc(g.studio)}</span></span>
      <span class="meta"><span class="dot s"></span>${num(g.players)} en jeu</span></button>`;

  const item = (g, tall) => `<button class="item" data-act="open" data-arg="${g.id}">
      <span class="th${tall ? ' tall' : ''}" style="${art(g)}"></span>
      <span class="txt"><b>${esc(g.name)}</b><span>${tall ? esc(g.studio) + ' · ' + CAT_LABEL[g.cat] : num(g.players) + ' joueurs en ligne'}</span></span>
      ${tall ? `<span class="mono mu" style="font-size:12px;font-weight:500">${num(g.players)}</span>` : '<span class="play">Jouer</span>'}</button>`;

  function home() {
    return `<div class="page">
      <button class="search" data-act="go" data-arg="search"><span class="glyph"></span>Rechercher un jeu, un studio…</button>
      <div class="promo"><span class="tag">visuel promo</span><span class="k">Offre de bienvenue</span><span class="t">200 % sur ton premier dépôt</span><button class="press" data-act="auth" data-arg="signup">Je m'inscris</button></div>
      <div class="tiles">
        <button class="tile press" data-act="browse" data-arg="all">Jeux<span><i class="dot"></i>21 402</span></button>
        <button class="tile press" data-act="browse" data-arg="live">Live<span><i class="dot"></i>8 190</span></button>
      </div>
      <div class="sec"><div class="sec-h"><span class="h2">Tendances</span><button class="link" data-act="browse" data-arg="all">Tout voir</button></div>
        <div class="hscroll">${GAMES.slice(0, 7).map(card).join('')}</div></div>
      <div class="sec"><span class="h2">Originaux zunrel</span>
        <div class="list">${GAMES.filter((g) => g.cat === 'originals').map((g) => item(g, false)).join('')}</div></div>
    </div>`;
  }

  function browse() {
    const games = GAMES.filter((g) => S.cat === 'all' || g.cat === S.cat);
    return `<div class="page g18">
      <span class="h1">Parcourir</span>
      <div class="chips">${CATS.map(([k, l]) => `<button class="chip${S.cat === k ? ' on' : ''}" data-act="cat" data-arg="${k}">${l}</button>`).join('')}</div>
      <span class="small">${games.length} jeux · ${num(games.reduce((a, g) => a + g.players, 0))} joueurs</span>
      <div class="grid3">${games.map((g) => `<button class="g press" data-act="open" data-arg="${g.id}"><span class="art" style="${art(g)}"><span class="n">${esc(g.name)}</span></span><span class="meta"><span class="dot s"></span>${num(g.players)}</span></button>`).join('')}</div>
    </div>`;
  }

  function searchResults() {
    const q = S.query.trim().toLowerCase();
    const res = q ? GAMES.filter((g) => (g.name + ' ' + g.studio + ' ' + CAT_LABEL[g.cat]).toLowerCase().includes(q)) : GAMES.slice(0, 5);
    const n = res.length;
    const top = q
      ? `<span class="small">${n ? n + ' résultat' + (n > 1 ? 's' : '') : 'Aucun résultat pour « ' + esc(S.query) + ' »'}</span>`
      : `<div class="sec" style="gap:12px"><span class="caps">Recherches récentes</span><div class="recent">${RECENT.map((r) => `<button data-act="pick" data-arg="${r}">${r}</button>`).join('')}</div></div>`;
    return top + `<div class="list">${res.map((g) => item(g, true)).join('')}</div>`;
  }

  function search() {
    return `<div class="page g18">
      <div class="search on"><span class="glyph"></span><input id="q" type="text" enterkeyhint="search" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Rechercher un jeu, un studio…" value="${esc(S.query)}"><button id="qclear" class="mu" style="font:600 13px Sora,sans-serif" data-act="clear"${S.query.trim() ? '' : ' hidden'}>Effacer</button></div>
      <div id="sres" style="display:flex;flex-direction:column;gap:18px">${searchResults()}</div>
    </div>`;
  }

  const msgsHtml = () => S.messages[S.room].map(([u, l, t, me]) =>
    `<div class="msg${me ? ' me' : ''}"><span class="lvl" style="background:${LVL[l]}">N${l}</span><span class="u">${esc(u)}: </span>${esc(t)}</div>`).join('');

  function chat() {
    return `<div class="chat">
      <div class="rooms">${ROOMS.map(([k, l]) => `<button class="chip sq${S.room === k ? ' on' : ''}" data-act="room" data-arg="${k}">${l}</button>`).join('')}</div>
      <div class="msgs" id="msgs">${msgsHtml()}</div>
      <div class="compose">
        <form class="row" id="send"><input id="draft" class="field" maxlength="160" enterkeyhint="send" autocomplete="off" placeholder="${S.user ? 'Écris ton message' : 'Connecte-toi pour discuter'}" value="${esc(S.draft)}"><button class="btn pri" type="submit">Envoyer</button></form>
        <div class="foot"><span class="row" style="gap:6px"><span class="dot"></span>31 205 en ligne</span><span class="mono" id="left">${160 - S.draft.length}</span></div>
      </div>
    </div>`;
  }

  function profile() {
    const dark = S.theme === 'dark';
    const top = S.user
      ? `<div class="row" style="gap:14px"><div class="avatar me">${esc(S.user[0].toUpperCase())}</div><div style="display:flex;flex-direction:column;gap:4px"><span style="font:700 20px Sora,sans-serif">${esc(S.user)}</span><span class="small">Membre depuis sept. 2026</span></div></div>
         <div class="card2"><div class="row" style="justify-content:space-between;font:600 14px Sora,sans-serif"><span>Niveau Argent II</span><span class="mono mu" style="font-weight:500">62 %</span></div><div class="bar"><i></i></div><span class="small" style="font-size:12px">Encore 1 900 pts pour Or I</span></div>`
      : `<div class="empty"><div class="avatar"></div><span style="font:700 20px Sora,sans-serif">Ton espace joueur</span><span class="mu" style="font:400 14px/1.5 Sora,sans-serif;max-width:260px">Connecte-toi pour suivre ton niveau, tes gains et tes favoris.</span>
         <div class="row" style="width:100%"><button class="btn press" style="flex:1;height:46px;border-radius:11px" data-act="auth" data-arg="login">Connexion</button><button class="btn pri press" style="flex:1;height:46px;border-radius:11px" data-act="auth" data-arg="signup">Inscription</button></div></div>`;
    return `<div class="page" style="gap:20px">${top}
      <div class="menu">
        <button data-act="theme">Thème sombre<span class="switch${dark ? ' on' : ''}"><i></i></span></button>
        <div>Langue<em>Français ›</em></div>
        <div>Jeu responsable<em>›</em></div>
        <div>Aide et support<em>›</em></div>
      </div>
      ${S.user ? '<button class="out press" data-act="logout">Se déconnecter</button>' : ''}
    </div>`;
  }

  function sheet() {
    const su = S.auth === 'signup';
    return `<div class="scrim" data-act="close"></div>
      <form class="panel" id="authform" novalidate>
        <span class="grab"></span>
        <div class="row" style="justify-content:space-between"><span class="logo sm"><b>zunrel</b><i></i></span><button type="button" data-act="close" style="font:400 26px/1 Sora,sans-serif;color:var(--mu)">×</button></div>
        <div class="seg"><button type="button" class="${su ? '' : 'on'}" data-act="auth" data-arg="login">Connexion</button><button type="button" class="${su ? 'on' : ''}" data-act="auth" data-arg="signup">Inscription</button></div>
        ${su ? `<label>Pseudo<input class="field" name="fUser" autocomplete="username" autocapitalize="off" placeholder="ex. LuckyNova" value="${esc(S.fUser)}"></label>` : ''}
        <label>E-mail<input class="field" name="fEmail" type="email" autocomplete="email" autocapitalize="off" placeholder="toi@exemple.fr" value="${esc(S.fEmail)}"></label>
        <label>Mot de passe<input class="field" name="fPass" type="password" autocomplete="${su ? 'new-password' : 'current-password'}" placeholder="8 caractères minimum" value="${esc(S.fPass)}"></label>
        ${S.authError ? `<span class="err">${esc(S.authError)}</span>` : ''}
        <button class="submit press" type="submit">${su ? 'Créer mon compte' : 'Se connecter'}</button>
        <span class="legal">Réservé aux 18 ans et plus. Joue de manière responsable.</span>
      </form>`;
  }

  const SCREENS = { home, browse, search, chat, profile };

  function render() {
    document.documentElement.dataset.theme = S.theme;
    $('hdr').innerHTML = header();
    $('main').innerHTML = SCREENS[S.screen]();
    $('tabs').innerHTML = tabs();
    renderSheet();
    if (S.screen === 'chat') scrollChat();
  }

  function renderSheet() {
    const el = $('sheet');
    el.hidden = !S.auth;
    el.innerHTML = S.auth ? sheet() : '';
  }

  function scrollChat() {
    const m = $('msgs');
    if (m) m.scrollTop = m.scrollHeight;
  }

  let toastTimer;
  function toast(msg) {
    const el = $('toast');
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.hidden = true; }, 2200);
  }

  // ---------- actions ----------
  function openAuth(mode) { S.auth = mode; S.authError = ''; renderSheet(); }

  const ACTIONS = {
    go(arg) { S.screen = arg; render(); $('main').scrollTop = 0; if (arg === 'search') { const q = $('q'); if (q) q.focus(); } },
    browse(arg) { S.cat = arg; ACTIONS.go('browse'); },
    cat(arg) { S.cat = arg; render(); },
    auth: openAuth,
    close() { S.auth = null; renderSheet(); },
    open(arg) {
      const g = byId(arg);
      if (!S.user) return openAuth('login');
      toast('Lancement de ' + g.name + '…');
    },
    pick(arg) { S.query = arg; render(); },
    clear() { S.query = ''; render(); $('q').focus(); },
    room(arg) { S.room = arg; render(); },
    theme() { S.theme = S.theme === 'dark' ? 'light' : 'dark'; store.set('theme', S.theme); render(); },
    logout() { S.user = null; S.balance = 0; render(); toast('Tu es déconnecté'); },
  };

  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-act]');
    if (!t) return;
    e.preventDefault();
    ACTIONS[t.dataset.act](t.dataset.arg);
  });

  document.addEventListener('input', (e) => {
    const t = e.target;
    if (t.id === 'q') {
      S.query = t.value;
      $('sres').innerHTML = searchResults();
      $('qclear').hidden = !S.query.trim();
    } else if (t.id === 'draft') {
      S.draft = t.value;
      $('left').textContent = 160 - S.draft.length;
    } else if (t.name && t.name in S) {
      S[t.name] = t.value;
    }
  });

  document.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id === 'send') {
      const text = S.draft.trim();
      if (!text) return;
      if (!S.user) return openAuth('login');
      S.messages[S.room].push([S.user, 2, text, true]);
      S.draft = '';
      $('msgs').innerHTML = msgsHtml();
      $('draft').value = '';
      $('left').textContent = 160;
      scrollChat();
    } else if (e.target.id === 'authform') {
      const su = S.auth === 'signup';
      let err = '';
      if (su && S.fUser.trim().length < 3) err = 'Le pseudo doit faire au moins 3 caractères.';
      else if (!/^\S+@\S+\.\S+$/.test(S.fEmail)) err = 'Adresse e-mail invalide.';
      else if (S.fPass.length < 8) err = 'Le mot de passe doit faire au moins 8 caractères.';
      if (err) { S.authError = err; renderSheet(); return; }
      const name = su ? S.fUser.trim() : S.fEmail.split('@')[0];
      Object.assign(S, { user: name, balance: su ? 0 : 124.5, auth: null, fPass: '', authError: '' });
      document.activeElement && document.activeElement.blur();
      render();
      toast(su ? 'Bienvenue sur zunrel, ' + name + ' !' : 'Content de te revoir, ' + name);
    }
  });

  // ---------- install hint (iPhone Safari, not yet installed) ----------
  function installHint() {
    const standalone = window.navigator.standalone || matchMedia('(display-mode: standalone)').matches;
    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
    if (standalone || !ios || store.get('hint') === '1') return;
    const el = $('install');
    el.innerHTML = '<span style="flex:1">Pour installer l’app : touche <b>Partager</b> <span aria-hidden="true">⬆︎</span> puis <b>« Sur l’écran d’accueil »</b>.</span><button aria-label="Fermer">×</button>';
    el.hidden = false;
    el.querySelector('button').onclick = () => { el.hidden = true; store.set('hint', '1'); };
  }

  render();
  installHint();

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
})();
