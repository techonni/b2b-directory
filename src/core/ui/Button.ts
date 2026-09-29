import { Container, Graphics, Rectangle, type Text } from 'pixi.js';
import gsap from 'gsap';
import { C, R, ledgeOf } from '../theme';
import { makeText } from '../text';
import { sound } from '../audio/Sound';
import { scrollGesture } from './ScrollBox';

/** Altura da base sólida ("ledge") que colapsa ao toque. */
const LEDGE = 6;

export interface ButtonOptions {
  label: string;
  width: number;
  height: number;
  color?: number;
  textColor?: number;
  fontSize?: number;
  radius?: number;
}

/** Botão Pixi com efeito de pressão em GSAP. A posição é o canto superior esquerdo. */
export class Button extends Container {
  onTap: (() => void) | null = null;
  readonly caption: Text;
  private readonly body = new Container();
  private readonly face = new Container();
  private readonly bg = new Graphics();
  private readonly ledge = new Graphics();
  private w: number;
  private h: number;
  private color: number;
  private radius: number;
  private enabled = true;

  constructor(o: ButtonOptions) {
    super();
    this.w = o.width;
    this.h = o.height;
    this.color = o.color ?? C.btnPrimary;
    this.radius = o.radius ?? R.btn;
    this.caption = makeText(o.label, { fontSize: o.fontSize ?? 18, fontWeight: '800', fill: o.textColor ?? Button.textOn(this.color) });
    this.caption.anchor.set(0.5);
    this.face.addChild(this.bg, this.caption);
    this.body.addChild(this.ledge, this.face);
    this.addChild(this.body);

    this.eventMode = 'static';
    this.cursor = 'pointer';
    const release = () => gsap.to(this.face, { y: 0, duration: 0.14, ease: 'back.out(3)' });
    this.on('pointerdown', () => {
      if (this.enabled) gsap.to(this.face, { y: LEDGE - 1, duration: 0.07 });
    });
    this.on('pointerup', release);
    this.on('pointerupoutside', release);
    this.on('pointertap', () => {
      if (!this.enabled || scrollGesture.dragged) return;
      sound.play('click');
      this.onTap?.();
    });
    this.redraw();
  }

  setSize(w: number, h: number = this.h): void {
    this.w = w;
    this.h = h;
    this.redraw();
  }

  setText(text: string): void {
    if (this.caption.text !== text) this.caption.text = text;
  }

  private static textOn(color: number): number {
    return color === C.btnSecondary ? C.text : C.white;
  }

  setColor(color: number, textColor: number = Button.textOn(color)): void {
    this.color = color;
    this.caption.style.fill = textColor;
    this.redraw();
  }

  setEnabled(on: boolean): void {
    this.enabled = on;
    this.cursor = on ? 'pointer' : 'default';
    this.alpha = on ? 1 : 0.5;
  }

  private redraw(): void {
    const fh = this.h - LEDGE;
    const r = Math.min(this.radius, fh / 2);
    this.ledge.clear().roundRect(-this.w / 2, -this.h / 2 + LEDGE, this.w, fh, r).fill(ledgeOf(this.color));
    this.bg.clear().roundRect(-this.w / 2, -this.h / 2, this.w, fh, r).fill(this.color);
    this.caption.y = -LEDGE / 2;
    this.body.position.set(this.w / 2, this.h / 2);
    this.hitArea = new Rectangle(0, 0, this.w, this.h);
  }
}
