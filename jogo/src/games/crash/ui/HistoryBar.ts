import { Container, Graphics, type Text } from 'pixi.js';
import gsap from 'gsap';
import { C, FONT_MONO } from '../theme';
import { makeText } from '../text';
import { fmtMult } from '../format';

const KEY = 'ponto-alto:history';
const MAX = 16;
const GAP = 6;
const H = 26;

class Pill extends Container {
  readonly pillW: number;

  constructor(readonly value: number) {
    super();
    const win = value >= 2;
    const caption: Text = makeText(fmtMult(value), { fontSize: 13, fontWeight: '600', fontFamily: FONT_MONO, fill: win ? C.blue : C.muted });
    caption.anchor.set(0.5);
    this.pillW = Math.ceil(caption.width) + 20;
    caption.position.set(this.pillW / 2, H / 2);
    this.addChild(new Graphics().roundRect(0, 0, this.pillW, H, H / 2).fill(win ? C.blueSoft : C.chip), caption);
  }
}

/** Últimos resultados em pílulas (azul ≥ 2×). O mais recente entra pela esquerda; guarda-se no browser. */
export class HistoryBar extends Container {
  static readonly HEIGHT = H;
  private readonly clip = new Graphics();
  private readonly row = new Container();
  private pills: Pill[] = [];

  constructor() {
    super();
    this.addChild(this.row, this.clip);
    this.row.mask = this.clip;
    for (const v of this.load().reverse()) this.add(v, false);
    this.place(false);
  }

  layout(w: number): void {
    this.clip.clear().rect(0, -4, w, H + 8).fill(C.white);
    this.place(false);
  }

  push(value: number): void {
    this.add(value, true);
    this.save();
  }

  private add(value: number, animate: boolean): void {
    const pill = new Pill(value);
    pill.x = -pill.pillW - GAP;
    this.row.addChild(pill);
    this.pills.unshift(pill);
    for (const old of this.pills.splice(MAX)) old.destroy({ children: true });
    this.place(animate);
    if (animate) gsap.from(pill, { alpha: 0, duration: 0.3 });
  }

  private place(animate: boolean): void {
    let x = 0;
    for (const p of this.pills) {
      gsap.killTweensOf(p, 'x');
      if (animate) gsap.to(p, { x, duration: 0.4, ease: 'power3.out' });
      else p.x = x;
      x += p.pillW + GAP;
    }
  }

  private load(): number[] {
    try {
      const v = JSON.parse(localStorage.getItem(KEY) ?? '[]') as unknown;
      return Array.isArray(v) ? v.filter((n): n is number => typeof n === 'number' && n >= 1).slice(0, MAX) : [];
    } catch {
      return [];
    }
  }

  private save(): void {
    try {
      localStorage.setItem(KEY, JSON.stringify(this.pills.map((p) => p.value)));
    } catch {
      /* ignorar */
    }
  }
}
