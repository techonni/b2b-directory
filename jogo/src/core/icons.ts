import { Graphics } from 'pixi.js';
import { C } from './theme';

/** Posições dos 12 pontos do anel Zunrel (começa no topo, sentido dos ponteiros). */
export function ringPoints(radius: number): { x: number; y: number }[] {
  return Array.from({ length: 12 }, (_, i) => {
    const a = -Math.PI / 2 + (i * Math.PI * 2) / 12;
    return { x: Math.cos(a) * radius, y: Math.sin(a) * radius };
  });
}

/** Marca Zunrel: anel de 12 pontos (centrado em 0,0). */
export function ringLogo(size = 26, color: number = C.ink): Graphics {
  const g = new Graphics();
  const s = size / 24;
  for (const p of ringPoints(8.1 * s)) g.circle(p.x, p.y, 1.25 * s).fill(color);
  return g;
}

// Ícones de traço (grelha 24×24, centrados em 0,0), no estilo dos ícones do site.
const W = 2;

/** Altifalante com ondas (som ligado) ou com um X (som desligado). */
export function speaker(g: Graphics, muted: boolean, color: number = C.ink, size = 18): Graphics {
  const k = size / 24;
  g.clear();
  g.poly([-1 * k, -7 * k, -6 * k, -3 * k, -9 * k, -3 * k, -9 * k, 3 * k, -6 * k, 3 * k, -1 * k, 7 * k]).stroke({ width: W, color, join: 'round' });
  if (muted) {
    g.moveTo(3 * k, -3 * k).lineTo(9 * k, 3 * k).moveTo(9 * k, -3 * k).lineTo(3 * k, 3 * k).stroke({ width: W, color, cap: 'round' });
  } else {
    g.arc(-1 * k, 0, 6.5 * k, -Math.PI / 4.2, Math.PI / 4.2).stroke({ width: W, color, cap: 'round' });
  }
  return g;
}

export function helpIcon(g: Graphics, color: number = C.ink, size = 18): Graphics {
  const k = size / 24;
  g.clear();
  g.circle(0, 0, 9 * k).stroke({ width: W, color });
  g.moveTo(-2.5 * k, -2.5 * k)
    .arc(0, -2.5 * k, 2.5 * k, Math.PI, Math.PI * 2.25)
    .lineTo(0, 1.8 * k)
    .stroke({ width: W, color, cap: 'round', join: 'round' });
  g.circle(0, 5 * k, 1.1 * k).fill(color);
  return g;
}

export function userIcon(g: Graphics, color: number = C.ink, size = 18): Graphics {
  const k = size / 24;
  g.clear();
  g.circle(0, -4 * k, 4 * k).stroke({ width: W, color });
  g.arc(0, 9 * k, 8 * k, Math.PI, Math.PI * 2).stroke({ width: W, color, cap: 'round' });
  return g;
}

export function menuIcon(g: Graphics, color: number = C.ink, size = 18): Graphics {
  const k = size / 24;
  g.clear();
  for (const y of [-6, 0, 6]) g.moveTo(-8 * k, y * k).lineTo(8 * k, y * k);
  g.stroke({ width: W, color, cap: 'round' });
  return g;
}

export function resetIcon(g: Graphics, color: number = C.ink, size = 18): Graphics {
  const k = size / 24;
  g.clear();
  g.arc(0, 0, 8 * k, -Math.PI * 0.35, Math.PI * 1.45).stroke({ width: W, color, cap: 'round' });
  g.poly([3 * k, -11 * k, 9 * k, -6 * k, 2 * k, -4 * k]).fill(color);
  return g;
}

export function plusIcon(g: Graphics, color: number = C.onAccent, size = 12): Graphics {
  const h = size / 2;
  g.clear();
  g.moveTo(-h, 0).lineTo(h, 0).moveTo(0, -h).lineTo(0, h).stroke({ width: 1.8, color, cap: 'round' });
  return g;
}
