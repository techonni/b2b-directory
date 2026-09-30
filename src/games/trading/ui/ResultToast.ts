import { Container, Graphics, type Text } from 'pixi.js';
import gsap from 'gsap';
import { C } from '../../../core/theme';
import { txt } from './widgets';

/** Aviso grande como o do Binary (ganho, perda, contrato aberto…), só com fade. */
export class ResultToast extends Container {
  private readonly bg = new Graphics();
  private readonly caption: Text;
  private tl: gsap.core.Timeline | null = null;

  constructor() {
    super();
    this.caption = txt('', 24, C.text, '700');
    this.caption.anchor.set(0.5);
    this.addChild(this.bg, this.caption);
    this.visible = false;
  }

  show(text: string, color: number = C.btnSecondary, textColor: number = C.text): void {
    this.caption.text = text;
    this.caption.style.fill = textColor;
    const w = this.caption.width + 56;
    const h = 64;
    this.bg.clear().roundRect(-w / 2, -h / 2, w, h, h / 2).fill(color);
    this.tl?.kill();
    this.visible = true;
    this.alpha = 1;
    this.tl = gsap
      .timeline({ onComplete: () => (this.visible = false) })
      .fromTo(this, { y: this.baseY - 12 }, { y: this.baseY, duration: 0.3, ease: 'power2.out' })
      .to(this, { alpha: 0, duration: 0.35 }, 2.2);
  }

  private baseY = 0;

  place(x: number, y: number): void {
    this.baseY = y;
    this.position.set(x, y);
  }
}
