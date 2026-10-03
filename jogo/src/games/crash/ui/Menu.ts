import { Container, Graphics, Rectangle } from 'pixi.js';
import gsap from 'gsap';
import { C, R } from '../theme';
import { makeText } from '../text';

export interface MenuItem {
  label: string;
  /** Desenha o ícone (centrado em 0,0, cerca de 24 px). */
  icon: (g: Graphics) => void;
  onTap: () => void;
}

const ROW_H = 46;
const MENU_W = 240;

/** Menu "hambúrguer": lista que abre por baixo do botão ☰, alinhada à direita. */
export class Menu extends Container {
  isOpen = false;
  private readonly backdrop = new Graphics();
  private readonly panel = new Container();

  constructor() {
    super();
    this.visible = false;
    this.backdrop.eventMode = 'static';
    this.backdrop.on('pointertap', () => this.close());
    this.panel.eventMode = 'static';
    this.addChild(this.backdrop, this.panel);
  }

  /** Abre com o canto superior direito em (right, top). W/H = tamanho do ecrã (para o fundo que fecha). */
  open(items: MenuItem[], right: number, top: number, W: number, H: number): void {
    this.backdrop.clear().rect(0, 0, W, H).fill({ color: 0x171717, alpha: 0.12 });
    this.panel.removeChildren().forEach((c) => c.destroy({ children: true }));
    const h = items.length * ROW_H + 12;
    this.panel.addChild(
      new Graphics()
        .roundRect(0, 4, MENU_W, h, R.input)
        .fill({ color: 0x000000, alpha: 0.05 })
        .roundRect(0, 0, MENU_W, h, R.input)
        .fill(C.bgPanel)
        .stroke({ width: 1, color: C.border, alignment: 1 }),
    );
    items.forEach((it, i) => {
      const row = new Container();
      const hover = new Graphics().roundRect(6, 0, MENU_W - 12, ROW_H, R.small).fill(C.bgSoft);
      hover.alpha = 0;
      const icon = new Graphics();
      it.icon(icon);
      icon.position.set(28, ROW_H / 2);
      const label = makeText(it.label, { fontSize: 15, fontWeight: '500', fill: C.text });
      label.anchor.set(0, 0.5);
      label.position.set(50, ROW_H / 2);
      row.addChild(hover, icon, label);
      row.position.set(0, 6 + i * ROW_H);
      row.eventMode = 'static';
      row.cursor = 'pointer';
      row.hitArea = new Rectangle(6, 0, MENU_W - 12, ROW_H);
      row.on('pointerover', () => (hover.alpha = 1));
      row.on('pointerout', () => (hover.alpha = 0));
      row.on('pointertap', () => {
        this.close();
        it.onTap();
      });
      this.panel.addChild(row);
    });
    this.panel.position.set(right - MENU_W, top);
    this.isOpen = true;
    this.visible = true;
    gsap.killTweensOf(this);
    gsap.fromTo(this, { alpha: 0 }, { alpha: 1, duration: 0.15 });
    gsap.fromTo(this.panel, { y: top - 8 }, { y: top, duration: 0.2, ease: 'power2.out' });
  }

  close(): void {
    if (!this.isOpen) return;
    this.isOpen = false;
    gsap.to(this, { alpha: 0, duration: 0.12, onComplete: () => (this.visible = this.isOpen) });
  }
}
