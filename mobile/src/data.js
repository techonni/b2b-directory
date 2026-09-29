export const GAMES = [
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

export const CATS = [['all', 'Tout'], ['originals', 'Originaux'], ['slots', 'Machines'], ['live', 'Live'], ['tables', 'Tables']];
export const CAT_LABEL = Object.fromEntries(CATS);

export const ROOMS = [['general', 'Général'], ['fr', 'Français'], ['vip', 'VIP']];

export const SEED = {
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

export const LVL = ['#6b6478', '#5a7d9a', '#3d9970', '#b08d2e', '#c0602f', '#9b4dca', '#d63a6a'];

export const TABS = [['home', 'Accueil'], ['browse', 'Parcourir'], ['search', 'Recherche'], ['chat', 'Chat'], ['profile', 'Profil']];
