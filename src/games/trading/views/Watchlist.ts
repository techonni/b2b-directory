import { Container, Graphics, Rectangle, type Text } from 'pixi.js';
import gsap from 'gsap';
import { ScrollBox } from '../../../core/ui/ScrollBox';
import { T } from '../theme';
import { num, pct } from '../format';
import type { Instrument } from '../market/Market';
import { icon } from '../ui/icons';
import { IconButton, onTap, txt } from '../ui/widgets';

const ROW_H = 52;

interface Row {
  inst: Instrument;
  view: Container;
  bg: Graphics;
  price: Text;
  chg: Text;
  last: number;
}

/** Lista de ações com pesquisa (escrever no teclado filtra). */
export class Watchlist extends Container {
  onSelect: ((id: string) => void) | null = null;
  private readonly bg = new Graphics();
  private readonly search = new Container();
  private readonly searchBg = new Graphics();
  private readonly query: Text;
  private readonly caret = new Graphics();
  private readonly filter = new IconButton('filter', 30);
  private readonly list = new ScrollBox();
  private readonly rows: Row[];
  private selected = 'SBUX';
  private q = '';
  private focused = false;
  /** O jogo liga o teclado só quando está visível. */
  keysOn = false;
  private w = 296;
  private h = 600;

  constructor(insts: Instrument[]) {
    super();
    this.query = txt('', 14, T.text, '600');
    const glass = icon('search', T.muted);
    glass.position.set(22, 22);
    this.search.addChild(this.searchBg, glass, this.query, this.caret);
    this.query.position.set(42, 22 - 9);
    onTap(this.search, () => this.focus(true));
    this.filter.onTap = () => this.setQuery('');
    this.addChild(this.bg, this.search, this.filter, this.list);

    this.rows = insts.map((inst) => {
      const view = new Container();
      const bg = new Graphics();
      const sym = txt(inst.id, 13, T.text, '700');
      const name = txt(inst.def.name, 11, T.muted, '500');
      const price = txt('', 13, T.text, '600');
      const chg = txt('', 11, T.greenText, '600');
      price.anchor.set(1, 0);
      chg.anchor.set(1, 0);
      sym.position.set(14, 9);
      name.label = 'name';
      name.position.set(14, 28);
      view.addChild(bg, sym, name, price, chg);
      onTap(view, () => {
        this.select(inst.id);
        this.onSelect?.(inst.id);
      });
      view.on('pointerover', () => inst.id !== this.selected && this.paintRow(row, T.hover));
      view.on('pointerout', () => this.paintRow(row));
      const row: Row = { inst, view, bg, price, chg, last: inst.price };
      this.list.content.addChild(view);
      return row;
    });

    gsap.to(this.caret, { alpha: 0, duration: 0.5, repeat: -1, yoyo: true, ease: 'steps(1)' });
    window.addEventListener('keydown', (e) => this.onKey(e));
    this.setQuery('');
  }

  layout(w: number, h: number): void {
    this.w = w;
    this.h = h;
    this.bg.clear().rect(0, 0, w, h).fill(T.panel).rect(w - 1, 0, 1, h).fill(T.border);
    const sw = w - 24 - 40;
    this.searchBg.clear().roundRect(0, 0, sw, 44, 10).fill(T.input).stroke({ width: 1, color: this.focused ? T.borderHi : T.border });
    this.search.position.set(12, 12);
    this.search.hitArea = new Rectangle(0, 0, sw, 44);
    this.filter.position.set(w - 12 - 18, 12 + 22);
    this.list.position.set(0, 68);
    this.list.layout(w, h - 68);
    this.place();
  }

  /** A escrever na pesquisa (as setas não abrem contratos). */
  get typing(): boolean {
    return this.focused;
  }

  select(id: string): void {
    this.selected = id;
    for (const r of this.rows) this.paintRow(r);
  }

  /** Atualiza preços (1×/s) com um piscar suave na variação. */
  refresh(): void {
    for (const r of this.rows) {
      const i = r.inst;
      r.price.text = num(i.price, i.def.dec);
      r.chg.text = pct(i.chg);
      r.chg.style.fill = i.chg >= 0 ? T.greenText : T.redText;
      if (r.view.visible && i.price !== r.last) gsap.fromTo(r.price, { alpha: 0.55 }, { alpha: 1, duration: 0.5 });
      r.last = i.price;
    }
  }

  focus(on: boolean): void {
    this.focused = on;
    this.caret.visible = on;
    this.setQuery(this.q);
    this.layout(this.w, this.h);
  }

  private onKey(e: KeyboardEvent): void {
    if (!this.focused || !this.keysOn || !this.visible) return;
    if (e.key === 'Escape') return this.focus(false);
    if (e.key === 'Backspace') this.setQuery(this.q.slice(0, -1));
    else if (e.key === 'Enter') {
      const first = this.rows.find((r) => r.view.visible);
      if (first) {
        this.select(first.inst.id);
        this.onSelect?.(first.inst.id);
      }
      this.q = '';
      this.focus(false);
    } else if (/^[a-z0-9./ -]$/i.test(e.key) && this.q.length < 16) this.setQuery(this.q + e.key.toUpperCase());
    else return;
    e.preventDefault();
  }

  private setQuery(q: string): void {
    this.q = q;
    this.query.text = q || (this.focused ? '' : 'Pesquisar');
    this.query.style.fill = q ? T.text : T.dim;
    this.caret.clear().rect(0, 0, 1.5, 18).fill(T.text);
    this.caret.position.set(this.query.x + (q ? this.query.width + 2 : 0), 22 - 9);
    this.caret.visible = this.focused;
    this.place();
  }

  private place(): void {
    let y = 0;
    for (const r of this.rows) {
      const i = r.inst;
      const match = !this.q || i.id.includes(this.q) || i.def.name.toUpperCase().includes(this.q);
      r.view.visible = match;
      if (!match) continue;
      r.view.position.set(8, y);
      r.view.hitArea = new Rectangle(0, 0, this.w - 16, ROW_H);
      r.price.position.set(this.w - 16 - 14, 9);
      const nm = r.view.getChildByLabel('name')!;
      nm.scale.set(1);
      const room = this.w - 16 - 14 - 84 - 14;
      if (nm.width > room) nm.scale.set(room / nm.width);
      r.chg.position.set(this.w - 16 - 14, 29);
      this.paintRow(r);
      y += ROW_H + 2;
    }
    this.list.refresh();
  }

  private paintRow(r: Row, color?: number): void {
    const sel = r.inst.id === this.selected;
    r.bg.clear();
    const c = sel ? T.rowSel : color;
    if (c !== undefined) r.bg.roundRect(0, 0, this.w - 16, ROW_H, 10).fill(c);
  }
}
