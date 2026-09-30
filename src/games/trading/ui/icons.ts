import { Graphics } from 'pixi.js';
import { T } from '../theme';

// Ícones de traço (≈20 px, centrados em 0,0) desenhados com Graphics.
export type IconName =
  | 'logo'
  | 'home'
  | 'chart'
  | 'wallet'
  | 'shield'
  | 'box'
  | 'case'
  | 'gear'
  | 'search'
  | 'filter'
  | 'bell'
  | 'camera'
  | 'expand'
  | 'line'
  | 'pencil'
  | 'chevron'
  | 'indicators';

export function icon(name: IconName, color: number = T.muted, g = new Graphics()): Graphics {
  g.clear();
  const s = { width: 1.7, color, cap: 'round' as const, join: 'round' as const };
  switch (name) {
    case 'logo':
      for (let i = 0; i < 3; i++) g.moveTo(-10 + i * 7, 10).lineTo(2 + i * 7, -10);
      g.stroke({ ...s, width: 3.2, color: T.text });
      break;
    case 'home':
      g.moveTo(-8, -1).lineTo(0, -8).lineTo(8, -1).moveTo(-6, -3).lineTo(-6, 8).lineTo(6, 8).lineTo(6, -3).stroke(s);
      g.moveTo(-2, 8).lineTo(-2, 3).lineTo(2, 3).lineTo(2, 8).stroke(s);
      break;
    case 'chart':
      g.moveTo(-9, 6).lineTo(-4, 0).lineTo(0, 3).lineTo(8, -6).stroke(s);
      g.moveTo(4, -6).lineTo(8, -6).lineTo(8, -2).stroke(s);
      break;
    case 'wallet':
      g.roundRect(-8, -6, 16, 13, 2.5).stroke(s);
      g.moveTo(-8, -2).lineTo(8, -2).stroke(s);
      g.circle(4, 2.5, 1.2).fill(color);
      break;
    case 'shield':
      g.moveTo(0, -8).lineTo(7, -5).lineTo(7, 0).quadraticCurveTo(7, 6, 0, 9).quadraticCurveTo(-7, 6, -7, 0).lineTo(-7, -5).closePath().stroke(s);
      g.moveTo(-3, 0).lineTo(-1, 2.5).lineTo(3.5, -2.5).stroke(s);
      break;
    case 'box':
      g.poly([0, -8, 7.5, -4, 7.5, 4.5, 0, 8.5, -7.5, 4.5, -7.5, -4]).stroke(s);
      g.moveTo(-7.5, -4).lineTo(0, 0).lineTo(7.5, -4).moveTo(0, 0).lineTo(0, 8.5).stroke(s);
      break;
    case 'case':
      g.roundRect(-8, -4, 16, 12, 2).stroke(s);
      g.moveTo(-3, -4).lineTo(-3, -7).lineTo(3, -7).lineTo(3, -4).moveTo(-8, 1).lineTo(8, 1).stroke(s);
      break;
    case 'gear': {
      const pts: number[] = [];
      for (let i = 0; i < 16; i++) {
        const r = i % 2 === 0 ? 8.5 : 6.5;
        const a = (i / 16) * Math.PI * 2;
        pts.push(Math.cos(a) * r, Math.sin(a) * r);
      }
      g.poly(pts).stroke(s);
      g.circle(0, 0, 2.8).stroke(s);
      break;
    }
    case 'search':
      g.circle(-1.5, -1.5, 6).stroke(s);
      g.moveTo(3, 3).lineTo(7.5, 7.5).stroke(s);
      break;
    case 'filter':
      g.moveTo(-8, -5).lineTo(8, -5).moveTo(-8, 3).lineTo(8, 3).stroke(s);
      g.circle(3, -5, 2.4).fill(T.panel).stroke(s);
      g.circle(-3, 3, 2.4).fill(T.panel).stroke(s);
      break;
    case 'bell':
      g.moveTo(-6, 5).lineTo(-6, -1).quadraticCurveTo(-6, -7, 0, -7).quadraticCurveTo(6, -7, 6, -1).lineTo(6, 5).stroke(s);
      g.moveTo(-8, 5).lineTo(8, 5).moveTo(-2, 8).lineTo(2, 8).stroke(s);
      break;
    case 'camera':
      g.roundRect(-8, -5, 16, 12, 2.5).stroke(s);
      g.circle(0, 1, 3).stroke(s);
      g.moveTo(-3, -5).lineTo(-2, -7).lineTo(2, -7).lineTo(3, -5).stroke(s);
      break;
    case 'expand':
      g.moveTo(-7, -3).lineTo(-7, -7).lineTo(-3, -7).moveTo(3, -7).lineTo(7, -7).lineTo(7, -3);
      g.moveTo(7, 3).lineTo(7, 7).lineTo(3, 7).moveTo(-3, 7).lineTo(-7, 7).lineTo(-7, 3).stroke(s);
      break;
    case 'line':
      g.moveTo(-8, 4).lineTo(-3, -2).lineTo(1, 2).lineTo(8, -5).stroke(s);
      break;
    case 'indicators':
      g.moveTo(-8, 5).lineTo(-8, -1).moveTo(-3, 5).lineTo(-3, -6).moveTo(2, 5).lineTo(2, 0).moveTo(7, 5).lineTo(7, -4).stroke(s);
      break;
    case 'pencil':
      g.moveTo(-6, 6).lineTo(-5, 2).lineTo(3, -6).lineTo(6, -3).lineTo(-2, 5).closePath().stroke(s);
      break;
    case 'chevron':
      g.moveTo(-4, -2).lineTo(0, 2).lineTo(4, -2).stroke(s);
      break;
  }
  return g;
}
