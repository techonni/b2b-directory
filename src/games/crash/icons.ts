export { coinIcon } from '../../core/icons';
import { Graphics } from 'pixi.js';
import { C } from './theme';

export function chevron(dir: 'up' | 'down', size = 14, color: number = C.text): Graphics {
  const h = size / 2;
  const y = dir === 'up' ? h / 2 : -h / 2;
  return new Graphics()
    .moveTo(-h, y)
    .lineTo(0, -y)
    .lineTo(h, y)
    .stroke({ width: 2.5, color, cap: 'round', join: 'round' });
}
