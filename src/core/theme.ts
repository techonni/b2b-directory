// Tokens do "Brand kit design system" (tema claro, Rubik, azul + laranja de recompensa)
// convertidos para PixiJS. Site e jogos usam só estes valores.
export const C = {
  /** Fundo da página. */
  bgBase: 0xf7f9fc,
  /** Palco dos jogos (gráficos, curva do Crash). */
  bgStage: 0xf5f8fd,
  /** Cartões e painéis. */
  bgPanel: 0xffffff,
  /** Campos, caixas de valor ("Surface"). */
  bgInput: 0xf5f8fd,
  /** Seleção / blocos de atalho (azul muito claro). */
  bgAddon: 0xeaf3ff,
  /** Bavo Blue: ações principais. */
  btnPrimary: 0x3b82f6,
  /** Degrau do botão principal ("Ledge Blue"). */
  btnPrimaryLedge: 0xafcbfd,
  /** Botões secundários e pílulas neutras ("Line"). */
  btnSecondary: 0xeef1f6,
  /** Contornos e degraus neutros. */
  border: 0xeef1f6,
  borderStrong: 0xe2e6ee,
  /** Ink: títulos e texto. */
  text: 0x111827,
  textBody: 0x374151,
  textMuted: 0x6b7280,
  textPlaceholder: 0x9ca3af,
  white: 0xffffff,
  /** Go: ganho, progresso, "Sobe". */
  win: 0x22c55e,
  winText: 0xffffff,
  /** Perda / crash (vermelho, fora do kit mas necessário nos jogos). */
  loss: 0xef4444,
  /** Reward: moedas, destaques, números a notar. */
  coin: 0xff9f0a,
  coinText: 0xffffff,
  reward: 0xff9f0a,
  streak: 0xff7a00,
  sky: 0x03c8ff,
  face: 0x93c5fd,
  night: 0x0b1437,
  multBlue: 0x3b82f6,
  multBlueLedge: 0xafcbfd,
  multRed: 0xef4444,
  multRedLedge: 0xfca5a5,
  curveStart: 0x03c8ff,
  curveDead: 0xc3c9d4,
  up: 0x22c55e,
  down: 0xef4444,
  line: 0x3b82f6,
  grid: 0xeef1f6,
  /** Cor da mascote (gota). */
  drop: 0x1688ff,
} as const;

/** Cantos generosos do kit: cartões 28, botões 22, tiles 24 (valores reduzidos para UI densa). */
export const R = { panel: 24, btn: 20, input: 16 } as const;

/** Degrau sólido por baixo de tudo o que se carrega (px). */
export const LEDGE = 6;

export const FONT = 'Rubik, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif';

/** Mistura uma cor com branco (t = 0 → cor, 1 → branco): tons claros para degraus. */
export function tint(color: number, t: number): number {
  const r = (color >> 16) & 255;
  const g = (color >> 8) & 255;
  const b = color & 255;
  const m = (c: number) => Math.round(c + (255 - c) * t);
  return (m(r) << 16) | (m(g) << 8) | m(b);
}

/** Cor clara? (para escolher texto escuro ou branco por cima). */
export function isLight(color: number): boolean {
  const r = (color >> 16) & 255;
  const g = (color >> 8) & 255;
  const b = color & 255;
  return 0.299 * r + 0.587 * g + 0.114 * b > 170;
}
