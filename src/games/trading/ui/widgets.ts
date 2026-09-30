import { Container, Graphics, Rectangle, type Text, type TextStyleOptions } from 'pixi.js';
import gsap from 'gsap';
import { makeText } from '../../../core/text';
import { sound } from '../../../core/audio/Sound';
import { scrollGesture } from '../../../core/ui/ScrollBox';
import { T } from '../theme';
import { icon, type IconName } from './icons';

export function txt(s: string, size: number, fill: number = T.text, weight: TextStyleOptions['fontWeight'] = '500'): Text {
  return makeText(s, { fontSize: size, fontWeight: weight, fill });
}

/** Torna um elemento clicável (ignora toques que foram arrastos de scroll). */
export function onTap(c: Container, fn: () => void, click = true): void {
  c.eventMode = 'static';
  c.cursor = 'pointer';
  c.on('pointertap', () => {
    if (scrollGesture.dragged) return;
    if (click) sound.play('click');
    fn();
  });
}

/** Linha de separação de 1 px. */
export function hline(g: Graphics, x: number, y: number, w: number, color: number = T.border): Graphics {
  return g.rect(x, y, w, 1).fill(color);
}

/** Botão só com ícone (com realce ao passar o rato). */
export class IconButton extends Container {
  onTap: (() => void) | null = null;
  private readonly bg = new Graphics();
  readonly glyph: Graphics;

  constructor(name: IconName, private readonly size = 32, color: number = T.muted, boxed = false) {
    super();
    this.glyph = icon(name, color);
    this.addChild(this.bg, this.glyph);
    this.draw(boxed ? T.panel2 : 0, boxed);
    this.hitArea = new Rectangle(-size / 2, -size / 2, size, size);
    onTap(this, () => this.onTap?.());
    this.on('pointerover', () => this.draw(T.hover, true));
    this.on('pointerout', () => this.draw(boxed ? T.panel2 : 0, boxed));
  }

  private draw(color: number, visible: boolean): void {
    const s = this.size;
    this.bg.clear();
    if (visible) this.bg.roundRect(-s / 2, -s / 2, s, s, 8).fill(color);
  }
}

/** Separadores em pílula (Mercado / Limite / Stop, 1m / 15m…). */
export class Tabs extends Container {
  onChange: ((i: number) => void) | null = null;
  index = 0;
  private readonly bg = new Graphics();
  private readonly knob = new Graphics();
  private readonly labels: Text[];
  private w = 200;
  private h = 32;

  constructor(
    items: string[],
    private readonly o: { size?: number; boxed?: boolean; gap?: number } = {},
  ) {
    super();
    this.addChild(this.bg, this.knob);
    this.labels = items.map((s, i) => {
      const t = txt(s, o.size ?? 13, T.muted, '600');
      t.anchor.set(0.5);
      onTap(t, () => this.select(i));
      this.addChild(t);
      return t;
    });
  }

  layout(w: number, h: number): void {
    this.w = w;
    this.h = h;
    this.bg.clear();
    if (this.o.boxed !== false) this.bg.roundRect(0, 0, w, h, 8).fill(T.input).stroke({ width: 1, color: T.border });
    const sw = this.segW;
    this.labels.forEach((t, i) => {
      t.position.set(this.segX(i) + sw / 2, h / 2);
      t.hitArea = new Rectangle(-sw / 2, -h / 2, sw, h);
    });
    this.paint(false);
  }

  select(i: number, silent = false): void {
    if (i === this.index) return;
    this.index = i;
    this.paint(true);
    if (!silent) this.onChange?.(i);
  }

  private get segW(): number {
    const n = this.labels.length;
    const pad = this.o.boxed === false ? 0 : 3;
    return (this.w - pad * 2 - (this.o.gap ?? 0) * (n - 1)) / n;
  }

  private segX(i: number): number {
    const pad = this.o.boxed === false ? 0 : 3;
    return pad + i * (this.segW + (this.o.gap ?? 0));
  }

  private paint(animate: boolean): void {
    const pad = this.o.boxed === false ? 0 : 3;
    this.knob.clear().roundRect(0, 0, this.segW, this.h - pad * 2, 6).fill(T.rowSel).stroke({ width: 1, color: T.borderHi });
    const x = this.segX(this.index);
    if (animate) gsap.to(this.knob, { x, duration: 0.25, ease: 'power3.out' });
    else this.knob.position.set(x, pad);
    this.knob.y = pad;
    this.labels.forEach((t, j) => (t.style.fill = j === this.index ? T.text : T.muted));
  }
}

/** Caixa de seleção com rótulo. */
export class Check extends Container {
  onChange: ((on: boolean) => void) | null = null;
  private readonly box = new Graphics();
  readonly caption: Text;

  constructor(
    text: string,
    public checked = false,
  ) {
    super();
    this.caption = txt(text, 13, T.muted, '500');
    this.caption.position.set(24, -this.caption.height / 2);
    this.addChild(this.box, this.caption);
    this.hitArea = new Rectangle(-2, -12, 24 + this.caption.width + 8, 24);
    onTap(this, () => this.set(!this.checked));
    this.draw();
  }

  set(on: boolean, silent = false): void {
    this.checked = on;
    this.draw();
    gsap.fromTo(this.box.scale, { x: 0.8, y: 0.8 }, { x: 1, y: 1, duration: 0.25, ease: 'back.out(3)' });
    if (!silent) this.onChange?.(on);
  }

  private draw(): void {
    const g = this.box.clear();
    g.position.set(8, 0);
    if (this.checked) {
      g.roundRect(-8, -8, 16, 16, 4).fill(T.green);
      g.moveTo(-4, 0).lineTo(-1, 3).lineTo(4, -3).stroke({ width: 2, color: 0x06200c, cap: 'round', join: 'round' });
    } else g.roundRect(-7.5, -7.5, 15, 15, 4).stroke({ width: 1.2, color: T.borderHi });
    this.caption.style.fill = this.checked ? T.text : T.muted;
  }
}
