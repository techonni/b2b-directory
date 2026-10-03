import { Container, Graphics } from 'pixi.js';
import gsap from 'gsap';
import { C } from '../theme';
import { RING_DOTS, ringPoint } from '../icons';

/** Anel de 12 pontos do logo do Zunrel: enche de azul à medida que o multiplicador sobe. */
export class Ring extends Container {
  private readonly dots: Graphics[] = [];
  private count = 0;
  private color: number = C.blue;
  private radius = 112;

  constructor() {
    super();
    for (let i = 0; i < RING_DOTS; i++) {
      const g = new Graphics();
      g.tint = C.border;
      this.dots.push(g);
      this.addChild(g);
    }
    this.layout(112);
  }

  layout(radius: number): void {
    this.radius = radius;
    const r = Math.max(5, (radius * 8) / 112);
    this.dots.forEach((g, i) => {
      const p = ringPoint(i, radius);
      g.clear().circle(0, 0, r).fill(C.white);
      g.position.set(p.x, p.y);
    });
  }

  /** Quantos pontos estão cheios (0 a 12) e com que cor. */
  set(count: number, color: number = C.blue, animate = true): void {
    count = Math.max(0, Math.min(RING_DOTS, Math.floor(count)));
    if (count === this.count && color === this.color) return;
    const old = this.count;
    this.count = count;
    this.color = color;
    this.dots.forEach((g, i) => {
      g.tint = i < count ? color : C.border;
      if (animate && i >= old && i < count) {
        gsap.killTweensOf(g.scale);
        gsap.fromTo(g.scale, { x: 1.5, y: 1.5 }, { x: 1, y: 1, duration: 0.35, ease: 'back.out(3)' });
      }
    });
  }

  get size(): number {
    return this.radius;
  }
}
