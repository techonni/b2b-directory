import { Container, Graphics, Rectangle, type Text } from 'pixi.js';
import gsap from 'gsap';
import { C, R, FONT_MONO } from '../theme';
import { makeText } from '../text';
import { sound } from '../audio/Sound';

export interface CtaState {
  label: string;
  /** Pequeno rótulo à direita (ex.: "recebes"). */
  caption?: string;
  /** Valor à direita, em Geist Mono (ex.: "23,70"). */
  value?: string;
  /** Botão escuro (ação secundária, como cancelar). */
  dark?: boolean;
}

/** Botão principal: "Levantar" à esquerda e "recebes 23,70" à direita. */
export class CtaButton extends Container {
  onTap: (() => void) | null = null;
  private readonly body = new Container();
  private readonly bg = new Graphics();
  private readonly text_: Text;
  private readonly caption: Text;
  private readonly value: Text;
  private w = 300;
  private h = 100;
  private dark = false;

  constructor() {
    super();
    this.text_ = makeText('', { fontSize: 24, fontWeight: '600', fill: C.white });
    this.text_.anchor.set(0, 0.5);
    this.caption = makeText('', { fontSize: 12, fontWeight: '500', fill: C.white });
    this.caption.alpha = 0.75;
    this.caption.anchor.set(1, 1);
    this.value = makeText('', { fontSize: 20, fontWeight: '600', fontFamily: FONT_MONO, fill: C.white });
    this.value.anchor.set(1, 0);
    this.body.addChild(this.bg, this.text_, this.caption, this.value);
    this.addChild(this.body);

    this.eventMode = 'static';
    this.cursor = 'pointer';
    const release = () => gsap.to(this.body.scale, { x: 1, y: 1, duration: 0.18, ease: 'back.out(3)' });
    this.on('pointerdown', () => gsap.to(this.body.scale, { x: 0.98, y: 0.98, duration: 0.08 }));
    this.on('pointerup', release);
    this.on('pointerupoutside', release);
    this.on('pointertap', () => {
      sound.play('click');
      this.onTap?.();
    });
  }

  layout(w: number, h: number): void {
    this.w = w;
    this.h = h;
    this.hitArea = new Rectangle(0, 0, w, h);
    this.body.position.set(w / 2, h / 2);
    this.body.pivot.set(w / 2, h / 2);
    this.text_.style.fontSize = h < 80 ? 20 : 24;
    this.draw();
    this.place();
  }

  set(s: CtaState): void {
    this.text_.text = s.label;
    this.caption.text = s.caption ?? '';
    this.value.text = s.value ?? '';
    if (!!s.dark !== this.dark) {
      this.dark = !!s.dark;
      this.draw();
    }
    this.place();
  }

  private draw(): void {
    this.bg.clear().roundRect(0, 0, this.w, this.h, R.cta).fill(this.dark ? C.text : C.blue);
  }

  private place(): void {
    const px = this.h < 80 ? 16 : 22;
    const small = this.h < 80;
    this.value.style.fontSize = small ? 17 : 20;
    this.text_.position.set(px, this.h / 2);
    const hasValue = this.value.text !== '';
    this.value.position.set(this.w - px, this.h / 2 - (hasValue ? 1 : 0));
    this.caption.position.set(this.w - px, this.h / 2 - 1);
  }
}
