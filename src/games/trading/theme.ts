import { C } from '../../core/theme';

// Trading com os tokens do site (UI Design Rules – HTML5 Games, em src/core/theme.ts).
export const T = {
  bg: C.bgStage,
  rail: C.bgBase,
  panel: C.bgPanel,
  panel2: C.bgInput,
  input: C.bgInput,
  rowSel: C.bgAddon,
  hover: 0x2b3e51,
  border: C.border,
  borderHi: C.bgAddon,
  grid: C.grid,
  text: C.text,
  muted: C.textMuted,
  dim: C.textPlaceholder,
  green: C.win,
  onGreen: C.winText,
  greenText: C.up,
  red: C.loss,
  redText: C.down,
  primary: C.btnPrimary,
  btnGray: C.btnSecondary,
  coin: C.coin,
} as const;
