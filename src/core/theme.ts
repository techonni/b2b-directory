// Tokens de "UI Design Rules – HTML5 Games" convertidos para PixiJS (site + jogos).
export const C = {
  bgBase: 0xf7f9fc,
  bgStage: 0xeaf3ff,
  bgPanel: 0xffffff,
  bgInput: 0xf5f8fd,
  bgAddon: 0xeef1f6,
  btnPrimary: 0x3b82f6,
  btnSecondary: 0xeef1f6,
  border: 0xe3e8f0,
  text: 0x111827,
  /** Texto sobre superfícies coloridas (botões, etiquetas). */
  onColor: 0xffffff,
  textMuted: 0x6b7280,
  textPlaceholder: 0x9ca3af,
  win: 0x22c55e,
  winText: 0xffffff,
  loss: 0xef4444,
  coin: 0xff9f0a,
  coinText: 0x7a4300,
  multBlue: 0x3b82f6,
  multRed: 0xef4444,
  curveStart: 0x03c8ff,
  curveDead: 0x9ca3af,
  /** Direção "Sobe" (verde) e "Desce" (vermelho) — os mesmos papéis de ganho/perda. */
  up: 0x22c55e,
  down: 0xef4444,
  line: 0x111827,
  grid: 0xe3e8f0,
  ledge: 0xafcbfd,
  sky: 0x03c8ff,
} as const;

export const R = { panel: 16, btn: 14, input: 12 } as const;

export const FONT = 'Rubik, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif';
