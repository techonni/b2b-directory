import { Container, Graphics, Rectangle, type Text } from 'pixi.js';
import gsap from 'gsap';
import { C, LEDGE, R, isLight, tint } from '../theme';
import { makeText } from '../text';
import { sound } from '../audio/Sound';
import { scrollGesture } from './ScrollBox';

export interface ButtonOptions {
  label: string;
  width: number;
  height: number;
  color?: number;
  textColor?: number;
  fontSize?: number;
  radius?: number;
}

/** Cor do degrau: azul claro no principal, cinza nos claros, tom mais claro nos restantes. */
export function ledgeColor(color: number): number {
  if (color === C.btnPrimary) return C.btnPrimaryLedge;
  if (isLight(color)) return C.borderStrong;
  return tint(color, 0.55);
}

/**
 * Botão do brand kit: cara colorida sobre um degrau sólido de 6px que "afunda" ao carregar (GSAP).
 * A posição é o canto superior esquerdo; o degrau fica por baixo da altura pedida.
 */
export class Button extends Container {
  onTap: (() => void) | null = null;
  readonly caption: Text;
  private readonly ledge = new Graphics();
  private readonly face = new Container();
  private readonly bg = new Graphics();
  private w: number;
  private h: number;
  private color: number;
  private textColor: number | null;
  private radius: number;
  private enabled = true;

  constructor(o: ButtonOptions) {
    super();
    this.w = o.width;
    this.h = o.height;
    this.color = o.color ?? C.btnPrimary;
    this.textColor = o.textColor ?? null;
    this.radius = o.radius ?? R.btn;
    this.caption = makeText(o.label, { fontSize: o.fontSize ?? 18, fontWeight: '800', fill: C.white });
    this.caption.anchor.set(0.5);
    this.face.addChild(this.bg, this.caption);
    this.addChild(this.ledge, this.face);

    this.eventMode = 'static';
    this.cursor = 'pointer';
    const release = () => gsap.to(this.face, { y: 0, duration: 0.12, ease: 'power2.out' });
    this.on('pointerdown', () => {
      if (this.enabled) gsap.to(this.face, { y: LEDGE - 1, duration: 0.06 });
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

  setColor(color: number, textColor?: number): void {
    this.color = color;
    this.textColor = textColor ?? null;
    this.redraw();
  }

  setEnabled(on: boolean): void {
    this.enabled = on;
    this.cursor = on ? 'pointer' : 'default';
    this.alpha = on ? 1 : 0.5;
  }

  private redraw(): void {
    const light = isLight(this.color);
    this.ledge.clear().roundRect(0, LEDGE, this.w, this.h, this.radius).fill(ledgeColor(this.color));
    this.bg.clear().roundRect(0, 0, this.w, this.h, this.radius).fill(this.color);
    if (light) this.bg.stroke({ width: 2, color: C.border, alignment: 1 });
    this.caption.style.fill = this.textColor ?? (light ? C.text : C.white);
    this.caption.position.set(this.w / 2, this.h / 2);
    this.hitArea = new Rectangle(0, 0, this.w, this.h + LEDGE);
  }
}
