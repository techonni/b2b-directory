// Ponto Alto: tokens da marca Zunrel (zunrel.com) convertidos para PixiJS.
export const C = {
  /** Fundo da página. */
  bgBase: 0xfbfbfb,
  /** Cartões (jogo, aposta, levantar automático, ação). */
  bgPanel: 0xffffff,
  /** Pílulas neutras, botões ½/2×, segmentado. */
  bgSoft: 0xf3f3f3,
  /** Pílulas azuis claras (histórico ≥ 2×, halo do ponto). */
  accentSoft: 0xe8eefe,
  accent: 0x0f4bf1,
  onAccent: 0xffffff,
  /** Botões escuros (selecionado, "Cancelar…", tooltip). */
  ink: 0x171717,
  border: 0xe5e5e5,
  gridLine: 0xefefef,
  dot: 0xd4d4d4,
  text: 0x171717,
  textMuted: 0x737373,
  textSoft: 0xa0a0a0,
  /** Estado "parou": usado com moderação (anel, legenda e avisos de perda). */
  stop: 0xe5484d,
  stopSoft: 0xfdecec,
  /** Curva depois de parar. */
  curveDead: 0xa0a0a0,
} as const;

export const R = { panel: 20, btn: 16, input: 14, small: 10 } as const;

export const FONT = 'Geist, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif';
export const MONO = '"Geist Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';
