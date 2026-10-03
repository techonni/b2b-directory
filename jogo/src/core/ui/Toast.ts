import { Container, Graphics, type Text } from 'pixi.js';
import gsap from 'gsap';
import { C } from '../theme';
import { makeText } from '../text';

/** Aviso curto (ganho, perda, saldo insuficiente…). */
export class Toast extends Container {
  private readonly bg = new Graphics();
  private readonly caption: Text;
  private tl: gsap.core.Timeline | null = null;

  constructor() {
    super();
    this.caption = makeText('', { fontSize: 14, fontWeight: '600', fill: C.white });
    this.caption.anchor.set(0.5);
    this.addChild(this.bg, this.caption);
    this.alpha = 0;
    this.visible = false;
  }

  show(text: string, color: number = C.text, textColor: number = C.white): void {
    this.caption.text = text;
    this.caption.style.fill = textColor;
    const w = this.caption.width + 36;
    const h = 38;
    this.bg.clear().roundRect(-w / 2, -h / 2, w, h, h / 2).fill(color);
    this.tl?.kill();
    this.visible = true;
    this.tl = gsap
      .timeline({ onComplete: () => (this.visible = false) })
      .fromTo(this, { alpha: 0 }, { alpha: 1, duration: 0.2 })
      .fromTo(this.scale, { x: 0.9, y: 0.9 }, { x: 1, y: 1, duration: 0.3, ease: 'back.out(2)' }, 0)
      .to(this, { alpha: 0, duration: 0.3 }, 2.2);
  }
}
