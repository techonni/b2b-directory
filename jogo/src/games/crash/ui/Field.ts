import { Container, Graphics, Rectangle, type Text } from 'pixi.js';
import gsap from 'gsap';
import { C, R, FONT_MONO } from '../theme';
import { makeText } from '../text';
import { sound } from '../audio/Sound';
import { scrollGesture } from '../../../core/ui/ScrollBox';

export interface FieldStep {
  label: string;
  onTap: () => void;
}

export interface FieldOptions {
  value: string;
  /** Texto pequeno a seguir ao valor (ex.: "moedas", "×"). */
  unit?: string;
  steps?: FieldStep[];
}

/** Caixa de valor: número grande em Geist Mono, unidade ao lado e botões ½ / 2× (ou − / +). */
export class Field extends Container {
  onFocus: (() => void) | null = null;

  private readonly value: Text;
  private readonly unit: Text;
  private readonly box = new Graphics();
  private readonly hit = new Container();
  private readonly shaker = new Container();
  private readonly steps: { opt: FieldStep; view: Container; bg: Graphics; caption: Text }[] = [];
  private w = 300;
  private h = 58;
  private focused = false;
  private locked = false;

  constructor(o: FieldOptions) {
    super();
    this.value = makeText(o.value, { fontSize: 24, fontWeight: '600', fontFamily: FONT_MONO, fill: C.text });
    this.value.anchor.set(0, 0.5);
    this.unit = makeText(o.unit ?? '', { fontSize: 14, fontWeight: '500', fill: C.faint });
    this.unit.anchor.set(0, 0.5);
    this.addChild(this.shaker);
    this.shaker.addChild(this.box, this.hit, this.value, this.unit);

    this.hit.eventMode = 'static';
    this.hit.cursor = 'text';
    this.hit.on('pointertap', () => {
      if (this.locked || scrollGesture.dragged) return;
      sound.play('click', 0.6);
      this.onFocus?.();
    });

    for (const opt of o.steps ?? []) {
      const view = new Container();
      const bg = new Graphics();
      const caption = makeText(opt.label, { fontSize: 15, fontWeight: '600', fill: C.text });
      caption.anchor.set(0.5);
      view.addChild(bg, caption);
      view.eventMode = 'static';
      view.cursor = 'pointer';
      view.on('pointerdown', () => {
        if (!this.locked) gsap.fromTo(view.scale, { x: 0.9, y: 0.9 }, { x: 1, y: 1, duration: 0.3, ease: 'back.out(3)' });
      });
      view.on('pointertap', () => {
        if (this.locked || scrollGesture.dragged) return;
        sound.play('click');
        opt.onTap();
      });
      this.shaker.addChild(view);
      this.steps.push({ opt, view, bg, caption });
    }
    this.layout(this.w, this.h);
  }

  layout(w: number, h = 58): void {
    this.w = w;
    this.h = h;
    const btn = h - 18;
    const gap = 6;
    const stepsW = this.steps.length ? this.steps.length * btn + (this.steps.length - 1) * gap + 8 : 0;

    this.box.clear().roundRect(0, 0, w, h, R.field).fill(this.focused ? C.blue : C.border);
    this.box.roundRect(1.5, 1.5, w - 3, h - 3, R.field - 1.5).fill(C.card);
    this.hit.hitArea = new Rectangle(0, 0, w - stepsW, h);
    this.value.style.fontSize = h < 56 ? 22 : 24;
    this.value.position.set(16, h / 2);
    this.placeUnit();
    this.steps.forEach((s, i) => {
      const n = this.steps.length;
      const x = w - 8 - (n - i) * btn - (n - 1 - i) * gap + btn / 2;
      s.view.position.set(x, h / 2);
      s.bg.clear().roundRect(-btn / 2, -btn / 2, btn, btn, R.chip).fill(C.chip);
      s.view.hitArea = new Rectangle(-btn / 2, -btn / 2, btn, btn);
    });
  }

  setValue(v: string): void {
    this.value.text = v;
    this.placeUnit();
  }

  setFocused(on: boolean): void {
    if (this.focused === on) return;
    this.focused = on;
    this.layout(this.w, this.h);
  }

  setLocked(on: boolean): void {
    this.locked = on;
    this.shaker.alpha = on ? 0.5 : 1;
  }

  shake(): void {
    gsap.fromTo(this.shaker, { x: -8 }, { x: 0, duration: 0.45, ease: 'elastic.out(1.2, 0.3)' });
  }

  private placeUnit(): void {
    this.unit.position.set(this.value.x + this.value.width + 6, this.h / 2 + 2);
  }
}
