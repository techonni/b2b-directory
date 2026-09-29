import { Container, Graphics } from 'pixi.js';
import { C } from './theme';
import { makeText } from './text';

/** Moeda dourada com "C" (Coins demo), usada no Crash e no Binary. */
export function coinIcon(size = 26): Container {
  const c = new Container();
  c.addChild(new Graphics().circle(0, 0, size / 2).fill(C.coin));
  const t = makeText('C', { fontSize: size * 0.55, fontWeight: '800', fill: C.coinText });
  t.anchor.set(0.5);
  c.addChild(t);
  return c;
}

/** Altifalante com ondas (som ligado) ou com um X (som desligado). */
export function speaker(g: Graphics, muted: boolean, color: number = C.text): Graphics {
  g.clear();
  g.poly([-9, -4, -5, -4, 1, -9, 1, 9, -5, 4, -9, 4]).fill(color);
  if (muted) {
    g.moveTo(5, -4).lineTo(12, 4).moveTo(12, -4).lineTo(5, 4).stroke({ width: 2.2, color, cap: 'round' });
  } else {
    g.arc(1, 0, 6, -Math.PI / 4, Math.PI / 4).stroke({ width: 2.2, color, cap: 'round' });
    g.arc(1, 0, 11, -Math.PI / 3.2, Math.PI / 3.2).stroke({ width: 2.2, color, cap: 'round' });
  }
  return g;
}

/** Gota da mascote (caminho do brand kit, viewBox 204×257), com os dois olhos-pílula brancos. */
export function dropMark(height = 40): Container {
  const c = new Container();
  const g = new Graphics()
    .moveTo(25.8, 88.7)
    .lineTo(92.8, 11.6)
    .quadraticCurveTo(102, 1, 111.2, 11.6)
    .lineTo(178.2, 88.7)
    .arc(102, 155, 101, -0.716, 3.858)
    .closePath()
    .fill(C.drop);
  const pill = (cx: number, cy: number, w: number, h: number, rot: number) => {
    const p = new Graphics().roundRect(-w / 2, -h / 2, w, h, w / 2).fill(C.white);
    p.position.set(cx, cy);
    p.rotation = rot;
    return p;
  };
  c.addChild(g, pill(120.5, 114, 18, 32, -0.49), pill(164, 103.5, 15, 31, -0.45));
  c.scale.set(height / 257);
  return c;
}

/** Marca zunrel: gota + palavra em Rubik 900 com o ponto laranja do kit. Origem: meio da altura, à esquerda. */
export function logo(size = 28): Container {
  const c = new Container();
  const mark = dropMark(size * 1.45);
  mark.position.set(0, -size * 0.78);
  const word = makeText('zunrel', { fontSize: size, fontWeight: '900', fill: C.text, letterSpacing: -0.6 });
  word.anchor.set(0, 0.5);
  word.position.set(size * 1.3, 0);
  const dot = makeText('.', { fontSize: size, fontWeight: '900', fill: C.reward });
  dot.anchor.set(0, 0.5);
  dot.position.set(word.x + word.width, 0);
  c.addChild(mark, word, dot);
  return c;
}
