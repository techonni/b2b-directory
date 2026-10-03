import { Container, Graphics } from 'pixi.js';
import { C } from './theme';

/** Anel de 12 pontos do logo do Zunrel. */
export const RING_DOTS = 12;

export function ringPoint(i: number, radius: number): { x: number; y: number } {
  const a = -Math.PI / 2 + (i * 2 * Math.PI) / RING_DOTS;
  return { x: Math.cos(a) * radius, y: Math.sin(a) * radius };
}

/** Logo do Zunrel (anel de 12 pontos), centrado em (0,0). */
export function logoMark(size = 26): Container {
  const g = new Graphics();
  for (let i = 0; i < RING_DOTS; i++) {
    const p = ringPoint(i, size * 0.3375);
    g.circle(p.x, p.y, size * 0.052).fill(C.text);
  }
  const c = new Container();
  c.addChild(g);
  return c;
}

export type IconKind = 'sound' | 'muted' | 'help' | 'user';

/** Ícones de linha (grelha 24, traço 2), centrados em (0,0) e mostrados a 18 px. */
export function drawIcon(g: Graphics, kind: IconKind, color: number = C.text): Graphics {
  g.clear();
  const s = { width: 2, color, cap: 'round', join: 'round' } as const;
  if (kind === 'sound' || kind === 'muted') {
    g.poly([-1, -7, -6, -3, -9, -3, -9, 3, -6, 3, -1, 7], true).stroke(s);
    if (kind === 'sound') g.arc(-0.07, 0, 5, -0.775, 0.775).stroke(s);
    else g.moveTo(4, -2.5).lineTo(9, 2.5).moveTo(9, -2.5).lineTo(4, 2.5).stroke(s);
  } else if (kind === 'help') {
    g.circle(0, 0, 9).stroke(s);
    g.arc(0, -2.5, 2.5, Math.PI, Math.PI * 2 + 0.927).lineTo(0, 2).stroke(s);
    g.circle(0, 5, 1.1).fill(color);
  } else {
    g.circle(0, -4, 4).stroke(s);
    g.arc(0, 9, 8, Math.PI, Math.PI * 2).stroke(s);
  }
  g.scale.set(0.75);
  return g;
}
