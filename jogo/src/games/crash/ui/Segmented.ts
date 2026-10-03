import { Container, Graphics, Rectangle, type Text } from 'pixi.js';
import gsap from 'gsap';
import { C, R } from '../theme';
import { makeText } from '../text';
import { sound } from '../audio/Sound';
import { scrollGesture } from '../../../core/ui/ScrollBox';

/** Seletor Manual / Auto: fundo cinzento claro e indicador branco que desliza (GSAP). */
export class Segmented extends Container {
  static readonly HEIGHT = 38;
  onChange: ((index: number) => void) | null = null;
  index = 0;

  private readonly bg = new Graphics();
  private readonly knob = new Graphics();
  private readonly labels: Text[];
  private w = 300;
  private locked = false;

  constructor(options: string[]) {
    super();
    this.addChild(this.bg, this.knob);
    this.labels = options.map((o, i) => {
      const t = makeText(o, { fontSize: 13, fontWeight: '600', fill: C.muted });
      t.anchor.set(0.5);
      t.eventMode = 'static';
      t.cursor = 'pointer';
      t.on('pointertap', () => {
        if (!scrollGesture.dragged) this.select(i);
      });
      this.addChild(t);
      return t;
    });
    this.eventMode = 'static';
    this.layout(this.w);
  }

  layout(w: number): void {
    this.w = w;
    const h = Segmented.HEIGHT;
    const segW = (w - 8) / this.labels.length;
    this.bg.clear().roundRect(0, 0, w, h, R.seg).fill(C.chip);
    this.knob.clear().roundRect(0, 0, segW, h - 8, R.seg - 3).fill(C.white);
    this.knob.position.set(4 + this.index * segW, 4);
    this.labels.forEach((t, i) => {
      t.position.set(4 + segW * (i + 0.5), h / 2);
      t.hitArea = new Rectangle(-segW / 2, -h / 2, segW, h);
      t.style.fill = i === this.index ? C.text : C.muted;
    });
  }

  setLocked(on: boolean): void {
    this.locked = on;
    this.alpha = on ? 0.5 : 1;
  }

  select(i: number): void {
    if (this.locked || i === this.index) return;
    this.index = i;
    sound.play('click');
    const segW = (this.w - 8) / this.labels.length;
    gsap.to(this.knob, { x: 4 + i * segW, duration: 0.3, ease: 'power3.out' });
    this.labels.forEach((t, j) => (t.style.fill = j === i ? C.text : C.muted));
    this.onChange?.(i);
  }
}
