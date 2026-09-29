// Tokens do Brand kit (Rubik, azul + laranja, botões com "ledge") em PixiJS (site + jogos).
export const C = {
  bgBase: 0xf7f9fc,
  bgStage: 0xf5f8fd,
  bgPanel: 0xffffff,
  bgInput: 0xf5f8fd,
  bgAddon: 0xd5dae3,
  btnPrimary: 0x3b82f6,
  btnSecondary: 0xe5e9f0,
  border: 0xeef1f6,
  text: 0x111827,
  textMuted: 0x6b7280,
  textPlaceholder: 0x9ca3af,
  win: 0x22c55e,
  winText: 0xffffff,
  loss: 0xef4444,
  coin: 0xff9f0a,
  coinText: 0x7a4a00,
  multBlue: 0x3b82f6,
  multRed: 0xef4444,
  curveStart: 0x03c8ff,
  curveDead: 0x9ca3af,
  /** Direção "Sobe" (verde) e "Desce" (vermelho) — os mesmos papéis de ganho/perda. */
  up: 0x22c55e,
  down: 0xef4444,
  line: 0x111827,
  grid: 0xe2e6ee,
  /** Brand kit: branco para texto sobre cores fortes, laranja de recompensa, azul claro do "ledge". */
  white: 0xffffff,
  reward: 0xff9f0a,
  sky: 0x03c8ff,
  ledgeBlue: 0xafcbfd,
  night: 0x0b1437,
} as const;

/** Cor do "ledge" (base sólida) de um botão — versão clara da cor da face, como no Brand kit. */
export function ledgeOf(color: number): number {
  if (color === C.btnSecondary) return 0xcdd3de;
  const mix = (c: number) => Math.round(c + (255 - c) * 0.6);
  return (mix((color >> 16) & 255) << 16) | (mix((color >> 8) & 255) << 8) | mix(color & 255);
}

export const R = { panel: 20, btn: 22, input: 14 } as const;

export const FONT = 'Rubik, Figtree, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif';
