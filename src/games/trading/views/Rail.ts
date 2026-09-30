import { Container, Graphics, Rectangle } from 'pixi.js';
import gsap from 'gsap';
import { T } from '../theme';
import { icon, type IconName } from '../ui/icons';
import { onTap, txt } from '../ui/widgets';

export type RailItem = 'home' | 'chart' | 'wallet' | 'shield' | 'box' | 'case';
const ITEMS: RailItem[] = ['home', 'chart', 'wallet', 'shield', 'box', 'case'];

/** Barra lateral de ícones (computador). */
export class Rail extends Container {
  static readonly W = 64;
  onSelect: ((i: RailItem) => void) | null = null;
  onReset: (() => void) | null = null;
  private readonly bg = new Graphics();
  private readonly sel = new Graphics();
  private readonly logo = icon('logo');
  private readonly buttons: { id: RailItem; view: Container; g: Graphics }[] = [];
  private readonly gear = new Container();
  private readonly avatar = new Container();
  private active: RailItem = 'chart';

  constructor() {
    super();
    this.addChild(this.bg, this.sel, this.logo);
    for (const id of ITEMS) {
      const view = new Container();
      const g = icon(id as IconName);
      view.addChild(g);
      view.hitArea = new Rectangle(-20, -20, 40, 40);
      onTap(view, () => {
        this.select(id);
        this.onSelect?.(id);
      });
      view.on('pointerover', () => id !== this.active && icon(id as IconName, T.text, g));
      view.on('pointerout', () => this.paint());
      this.buttons.push({ id, view, g });
      this.addChild(view);
    }
    this.gear.addChild(icon('gear'));
    this.gear.hitArea = new Rectangle(-20, -20, 40, 40);
    onTap(this.gear, () => this.onReset?.());
    const ring = new Graphics().circle(0, 0, 17).fill(T.rowSel).stroke({ width: 1.5, color: T.borderHi });
    const ini = txt('JR', 12, T.text, '700');
    ini.anchor.set(0.5);
    this.avatar.addChild(ring, ini);
    this.addChild(this.gear, this.avatar);
    this.paint();
  }

  layout(h: number): void {
    const w = Rail.W;
    this.bg.clear().rect(0, 0, w, h).fill(T.rail).rect(w - 1, 0, 1, h).fill(T.border);
    this.logo.position.set(w / 2, 34);
    this.buttons.forEach((b, i) => b.view.position.set(w / 2, 96 + i * 52));
    this.gear.position.set(w / 2, h - 90);
    this.avatar.position.set(w / 2, h - 40);
    this.placeSel(false);
  }

  select(id: RailItem): void {
    this.active = id;
    this.paint();
    this.placeSel(true);
  }

  private paint(): void {
    for (const b of this.buttons) icon(b.id as IconName, b.id === this.active ? T.text : T.muted, b.g);
  }

  private placeSel(animate: boolean): void {
    const b = this.buttons.find((x) => x.id === this.active);
    if (!b) return;
    this.sel.clear().roundRect(-20, -20, 40, 40, 10).fill(T.rowSel);
    this.sel.x = Rail.W / 2;
    if (animate) gsap.to(this.sel, { y: b.view.y, duration: 0.3, ease: 'power3.out' });
    else this.sel.y = b.view.y;
  }
}
