import { Container, Graphics, Rectangle, type Text } from 'pixi.js';
import { C, R } from '../theme';
import { makeText } from '../text';
import { sound } from '../audio/Sound';
import { scrollGesture } from '../../../core/ui/ScrollBox';

/** Linha de valores rápidos (1 · 10 · 50 · Máx). O escolhido fica preto. */
export class Chips extends Container {
  onTap: ((index: number) => void) | null = null;
  private readonly cells: { view: Container; bg: Graphics; caption: Text }[] = [];
  private selected = -1;
  private locked = false;
  private w = 300;
  private h = 36;

  constructor(labels: string[]) {
    super();
    labels.forEach((label, i) => {
      const view = new Container();
      const bg = new Graphics();
      const caption = makeText(label, { fontSize: 13, fontWeight: '600', fill: C.text });
      caption.anchor.set(0.5);
      view.addChild(bg, caption);
      view.eventMode = 'static';
      view.cursor = 'pointer';
      view.on('pointertap', () => {
        if (this.locked || scrollGesture.dragged) return;
        sound.play('click');
        this.onTap?.(i);
      });
      this.addChild(view);
      this.cells.push({ view, bg, caption });
    });
    this.layout(this.w, this.h);
  }

  layout(w: number, h = 36): void {
    this.w = w;
    this.h = h;
    this.draw();
  }

  setSelected(i: number): void {
    if (i === this.selected) return;
    this.selected = i;
    this.draw();
  }

  setLocked(on: boolean): void {
    this.locked = on;
    this.alpha = on ? 0.5 : 1;
  }

  private draw(): void {
    const gap = 6;
    const n = this.cells.length;
    const cw = (this.w - gap * (n - 1)) / n;
    this.cells.forEach((c, i) => {
      const on = i === this.selected;
      c.view.position.set(i * (cw + gap), 0);
      c.view.hitArea = new Rectangle(0, 0, cw, this.h);
      c.bg.clear().roundRect(0, 0, cw, this.h, R.chip).fill(on ? C.text : C.border);
      if (!on) c.bg.roundRect(1, 1, cw - 2, this.h - 2, R.chip - 1).fill(C.card);
      c.caption.position.set(cw / 2, this.h / 2);
      c.caption.style.fill = on ? C.white : C.text;
    });
  }
}
