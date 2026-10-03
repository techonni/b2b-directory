import { Container, Graphics, Rectangle } from 'pixi.js';
import gsap from 'gsap';
import { C } from '../theme';
import { sound } from '../audio/Sound';
import { scrollGesture } from '../../../core/ui/ScrollBox';

/** Interruptor 40×24 (azul quando ativo). */
export class Toggle extends Container {
  static readonly W = 40;
  static readonly H = 24;
  onChange: ((on: boolean) => void) | null = null;
  active = true;

  private readonly track = new Graphics();
  private readonly knob = new Graphics();
  private locked = false;

  constructor() {
    super();
    this.knob.circle(0, 0, 9).fill(C.white);
    this.knob.y = Toggle.H / 2;
    this.addChild(this.track, this.knob);
    this.eventMode = 'static';
    this.cursor = 'pointer';
    this.hitArea = new Rectangle(-6, -6, Toggle.W + 12, Toggle.H + 12);
    this.drawTrack();
    this.knob.x = Toggle.W - 12;
    this.on('pointertap', () => {
      if (this.locked || scrollGesture.dragged) return;
      sound.play('click');
      this.set(!this.active, true);
      this.onChange?.(this.active);
    });
  }

  set(on: boolean, animate = false): void {
    this.active = on;
    this.drawTrack();
    const x = on ? Toggle.W - 12 : 12;
    if (animate) gsap.to(this.knob, { x, duration: 0.2, ease: 'power2.out' });
    else this.knob.x = x;
  }

  setLocked(on: boolean): void {
    this.locked = on;
    this.alpha = on ? 0.5 : 1;
  }

  private drawTrack(): void {
    this.track.clear().roundRect(0, 0, Toggle.W, Toggle.H, Toggle.H / 2).fill(this.active ? C.blue : C.dot);
  }
}
