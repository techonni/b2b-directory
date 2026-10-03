import { Container, Graphics } from 'pixi.js';
import gsap from 'gsap';
import { C } from '../theme';
import { makeMono } from '../text';
import { fmtMult } from '../format';

const H = 26;
const GAP = 6;
const KEEP = 14;

class Pill extends Container {
  readonly w: number;
  constructor(readonly value: number) {
    super();
    const high = value >= 2;
    const t = makeMono(fmtMult(value), { fontSize: 13, fontWeight: '600', fill: high ? C.accent : C.textMuted });
    t.anchor.set(0.5);
    this.w = Math.ceil(t.width) + 20;
    t.position.set(this.w / 2, H / 2);
    this.addChild(new Graphics().roundRect(0, 0, this.w, H, H / 2).fill(high ? C.accentSoft : C.bgSoft), t);
  }
}

/** Últimos resultados em pílulas (azul ≥ 2×). O mais recente entra pela esquerda; mostra só as que cabem. */
export class HistoryBar extends Container {
  static readonly HEIGHT = H;
  private pills: Pill[] = [];
  private w = 320;

  layout(w: number): void {
    this.w = w;
    this.arrange(false);
  }

  push(value: number): void {
    const pill = new Pill(value);
    pill.x = -pill.w - GAP;
    this.addChild(pill);
    this.pills.unshift(pill);
    gsap.from(pill.scale, { x: 0.6, y: 0.6, duration: 0.45, ease: 'back.out(2)' });
    for (const old of this.pills.splice(KEEP)) {
      gsap.killTweensOf(old);
      old.destroy({ children: true });
    }
    this.arrange(true);
  }

  private arrange(animate: boolean): void {
    let x = 0;
    for (const p of this.pills) {
      const fits = x + p.w <= this.w;
      gsap.killTweensOf(p, 'x,alpha');
      if (animate) gsap.to(p, { x, alpha: fits ? 1 : 0, duration: 0.45, ease: 'power3.out' });
      else {
        p.x = x;
        p.alpha = fits ? 1 : 0;
      }
      p.visible = fits || animate;
      x += p.w + GAP;
    }
  }
}
