import { Container, Graphics, Rectangle, type Text } from 'pixi.js';
import gsap from 'gsap';
import { C, R } from '../theme';
import { makeText } from '../text';
import { fmtQuote } from '../format';
import type { Feed, Market } from '../market/Market';
import { sound } from '../audio/Sound';

const ROW_H = 76;

interface Row {
  m: Market;
  view: Container;
  bg: Graphics;
  price: Text;
  change: Text;
}

/** Coluna de pares à esquerda (computador): preço, variação e par selecionado. */
export class MarketList extends Container {
  static readonly WIDTH = 260;
  onSelect: ((id: string) => void) | null = null;
  private readonly title: Text;
  private readonly rows: Row[];
  private selected = '';

  constructor(feed: Feed) {
    super();
    this.title = makeText('Mercados', { fontSize: 18, fontWeight: '800', fill: C.text });
    this.title.position.set(4, 0);
    this.addChild(this.title);
    this.rows = feed.markets.map((m, i) => {
      const view = new Container();
      view.y = 36 + i * (ROW_H + 8);
      const bg = new Graphics();
      const badge = new Graphics().roundRect(14, 16, 44, 44, 10).fill(C.btnSecondary);
      const bt = makeText(m.def.badge, { fontSize: 15, fontWeight: '800', fill: C.text });
      bt.anchor.set(0.5);
      bt.position.set(36, 38);
      const name = makeText(m.def.name, { fontSize: 17, fontWeight: '700', fill: C.text });
      name.position.set(70, 14);
      const price = makeText('', { fontSize: 14, fontWeight: '600', fill: C.textMuted });
      price.position.set(70, 40);
      const change = makeText('', { fontSize: 14, fontWeight: '700', fill: C.up });
      change.anchor.set(1, 0);
      change.position.set(MarketList.WIDTH - 14, 40);
      view.addChild(bg, badge, bt, name, price, change);
      view.eventMode = 'static';
      view.cursor = 'pointer';
      view.hitArea = new Rectangle(0, 0, MarketList.WIDTH, ROW_H);
      view.on('pointertap', () => {
        sound.play('click');
        gsap.fromTo(view.scale, { x: 0.97, y: 0.97 }, { x: 1, y: 1, duration: 0.25, ease: 'back.out(3)' });
        this.onSelect?.(m.id);
      });
      this.addChild(view);
      return { m, view, bg, price, change };
    });
    this.refresh();
  }

  select(id: string): void {
    this.selected = id;
    this.paint();
  }

  /** Preços e variação (chamado a cada segundo). */
  refresh(): void {
    for (const r of this.rows) {
      const q = r.m.last.q;
      const ch = ((q - r.m.open) / r.m.open) * 100;
      r.price.text = fmtQuote(q, r.m.def.decimals);
      r.change.text = `${ch >= 0 ? '+' : '−'}${Math.abs(ch).toFixed(2)}%`;
      r.change.style.fill = ch >= 0 ? C.up : C.down;
    }
    this.paint();
  }

  private paint(): void {
    for (const r of this.rows) {
      const sel = r.m.id === this.selected;
      r.bg.clear().roundRect(0, 0, MarketList.WIDTH, ROW_H, R.panel).fill(sel ? C.bgAddon : C.bgPanel);
    }
  }
}
