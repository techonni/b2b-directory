import { Container, Graphics, Rectangle, type Text } from 'pixi.js';
import gsap from 'gsap';
import { T } from '../theme';
import { pct } from '../format';
import type { Market } from '../../binary/market/Market';
import { onTap, txt } from '../ui/widgets';

const CHIP_H = 40;

/** Barra de cima: par selecionado (nome, descrição, variação) e botões dos pares que couberem. */
export class PairBar extends Container {
  static readonly HEIGHT = 76;
  onPick: ((id: string) => void) | null = null;
  private readonly pairName: Text;
  private readonly full: Text;
  private readonly chg: Text;
  private readonly auto = new Container();
  private readonly chips: { m: Market; view: Container; bg: Graphics; t: Text }[] = [];
  private selected = '';

  constructor(markets: Market[]) {
    super();
    this.pairName = txt('', 26, T.text, '800');
    this.full = txt('', 14, T.muted, '500');
    this.chg = txt('', 16, T.greenText, '700');
    const ab = txt('● AUTO', 12, T.onGreen, '800');
    ab.position.set(10, 4);
    this.auto.addChild(new Graphics().roundRect(0, 0, ab.width + 20, 24, 8).fill(T.green), ab);
    this.auto.visible = false;
    this.addChild(this.pairName, this.full, this.chg, this.auto);
    for (const m of markets) {
      const view = new Container();
      const bg = new Graphics();
      const t = txt(m.def.name, 15, T.muted, '700');
      t.position.set(16, (CHIP_H - t.height) / 2);
      view.addChild(bg, t);
      onTap(view, () => this.onPick?.(m.id));
      view.on('pointerover', () => m.id !== this.selected && (t.style.fill = T.text));
      view.on('pointerout', () => this.paint());
      this.chips.push({ m, view, bg, t });
      this.addChild(view);
    }
  }

  layout(w: number): void {
    this.pairName.position.set(20, 10);
    this.full.position.set(20, 44);
    this.placeHead();
    // Pares a partir da direita do nome, até ao fim da barra (os que couberem).
    let x = 330;
    for (const c of this.chips) {
      const cw = c.t.width + 32;
      c.view.visible = x + cw <= w - 16;
      c.view.position.set(x, (PairBar.HEIGHT - CHIP_H) / 2);
      c.view.hitArea = new Rectangle(0, 0, cw, CHIP_H);
      x += cw + 8;
    }
    this.paint();
  }

  select(m: Market): void {
    this.selected = m.id;
    this.pairName.text = m.def.name;
    this.full.text = m.def.full;
    this.refresh(m);
    this.paint();
    gsap.fromTo(this.pairName, { alpha: 0 }, { alpha: 1, duration: 0.3 });
  }

  refresh(m: Market): void {
    const c = ((m.last.q - m.open) / m.open) * 100;
    this.chg.text = pct(c);
    this.chg.style.fill = c >= 0 ? T.greenText : T.redText;
    this.placeHead();
  }

  setAuto(on: boolean): void {
    this.auto.visible = on;
    gsap.killTweensOf(this.auto);
    this.auto.alpha = 1;
    if (on) gsap.to(this.auto, { alpha: 0.45, duration: 0.7, repeat: -1, yoyo: true });
  }

  private placeHead(): void {
    this.chg.position.set(20 + this.pairName.width + 12, 17);
    this.auto.position.set(this.chg.x + this.chg.width + 12, 16);
  }

  private paint(): void {
    for (const c of this.chips) {
      const sel = c.m.id === this.selected;
      const cw = c.t.width + 32;
      c.bg.clear().roundRect(0, 0, cw, CHIP_H, 12).fill(sel ? T.primary : T.panel);
      c.t.style.fill = sel ? T.text : T.muted;
    }
  }
}
