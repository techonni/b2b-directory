import { Container, Graphics, type Text } from 'pixi.js';
import { T } from '../theme';
import { compact, hhmmss, num } from '../format';
import type { Instrument } from '../market/Market';
import { Tabs, txt } from '../ui/widgets';

const ROW_H = 22;

/** Livro de ordens / negócios recentes do instrumento selecionado. */
export class BookPanel extends Container {
  private readonly tabs = new Tabs(['Livro de ordens', 'Negócios recentes'], { size: 12 });
  private readonly bg = new Graphics();
  private readonly bars = new Graphics();
  private readonly head: Text[];
  private readonly cells: Text[][] = [];
  private readonly mid: Text;
  private readonly arrow = new Graphics();
  private readonly spread: Text;
  private w = 312;
  private h = 260;
  private levels = 3;
  private inst!: Instrument;

  constructor() {
    super();
    this.head = ['Preço', 'Tamanho', 'Total'].map((s) => txt(s, 11, T.muted, '500'));
    this.mid = txt('', 16, T.greenText, '700');
    this.spread = txt('', 11, T.muted, '500');
    this.spread.anchor.set(1, 0);
    this.tabs.onChange = () => this.refresh();
    this.addChild(this.bg, this.tabs, this.bars, ...this.head, this.mid, this.arrow, this.spread);
  }

  setInstrument(inst: Instrument): void {
    this.inst = inst;
    this.refresh();
  }

  layout(w: number, h: number): void {
    this.w = w;
    this.h = h;
    this.bg.clear().rect(0, 0, w, 1).fill(T.border);
    this.tabs.position.set(18, 14);
    this.tabs.layout(w - 36, 32);
    const avail = h - 60 - 20 - 34;
    this.levels = Math.max(1, Math.min(8, Math.floor(avail / 2 / ROW_H)));
    const need = this.levels * 2 + 2;
    while (this.cells.length < need) {
      const row = [0, 1, 2].map((j) => {
        const t = txt('', 12, T.text, '500');
        t.anchor.set(j === 0 ? 0 : 1, 0);
        this.addChild(t);
        return t;
      });
      this.cells.push(row);
    }
    const cx = this.colX();
    this.head.forEach((t, j) => {
      t.anchor.set(j === 0 ? 0 : 1, 0);
      t.position.set(cx[j], 60);
    });
    this.refresh();
  }

  private colX(): number[] {
    return [18, this.w * 0.62, this.w - 18];
  }

  refresh(): void {
    if (!this.inst || this.cells.length < this.levels * 2) return;
    const i = this.inst;
    const d = i.def.dec;
    const cx = this.colX();
    const b = this.bars.clear();
    for (const r of this.cells) for (const c of r) c.visible = false;
    const top = 82;

    if (this.tabs.index === 1) {
      this.head[1].text = 'Tamanho';
      this.head[2].text = 'Hora';
      this.mid.visible = this.spread.visible = this.arrow.visible = false;
      const n = Math.min(this.cells.length, Math.floor((this.h - top - 8) / ROW_H), i.prints.length);
      for (let k = 0; k < n; k++) {
        const p = i.prints[k];
        const row = this.cells[k];
        row[0].text = num(p.price, d);
        row[0].style.fill = p.side === 'buy' ? T.greenText : T.redText;
        row[1].text = p.size.toFixed(3);
        row[2].text = hhmmss(new Date(p.t));
        row.forEach((c, j) => {
          c.visible = true;
          if (j) c.style.fill = T.text;
          c.position.set(cx[j], top + k * ROW_H);
        });
      }
      return;
    }

    this.head[1].text = 'Tamanho';
    this.head[2].text = 'Total';
    this.mid.visible = this.spread.visible = this.arrow.visible = true;
    const { asks, bids } = i.book(this.levels);
    const total = (arr: [number, number][]) => arr.reduce((s, x) => s + x[1], 0);
    const max = Math.max(total(asks), total(bids));
    const bw = this.w - 36;
    // Vendas por cima (mais alta primeiro), compras por baixo.
    let cum = 0;
    const askRows = asks.map(([p, s]) => ((cum += s), [p, s, cum] as const)).reverse();
    cum = 0;
    const bidRows = bids.map(([p, s]) => ((cum += s), [p, s, cum] as const));
    const put = (k: number, y: number, [p, s, c]: readonly [number, number, number], ask: boolean) => {
      const row = this.cells[k];
      row[0].text = num(p, d);
      row[1].text = compact(s);
      row[2].text = compact(c);
      row.forEach((t, j) => {
        t.visible = true;
        t.style.fill = j === 0 ? (ask ? T.redText : T.greenText) : T.text;
        t.position.set(cx[j], y + 4);
      });
      const len = (c / max) * bw;
      b.rect(this.w - 18 - len, y + 1, len, ROW_H - 2).fill({ color: ask ? T.red : T.green, alpha: 0.13 });
    };
    askRows.forEach((r, k) => put(k, top + k * ROW_H, r, true));
    const my = top + this.levels * ROW_H + 6;
    this.mid.text = num(i.price, d);
    this.mid.style.fill = i.price >= i.prevPrice ? T.greenText : T.redText;
    this.mid.position.set(18, my);
    const up = i.price >= i.prevPrice;
    this.arrow
      .clear()
      .moveTo(0, up ? 5 : -5)
      .lineTo(0, up ? -5 : 5)
      .moveTo(-4, up ? -1 : 1)
      .lineTo(0, up ? -5 : 5)
      .lineTo(4, up ? -1 : 1)
      .stroke({ width: 1.8, color: up ? T.greenText : T.redText, cap: 'round', join: 'round' });
    this.arrow.position.set(18 + this.mid.width + 10, my + 10);
    this.spread.text = `Spread: ${num(i.spread, d)} (${((i.spread / i.price) * 100).toFixed(2)}%)`;
    this.spread.position.set(this.w - 18, my + 3);
    bidRows.forEach((r, k) => put(this.levels + k, my + 28 + k * ROW_H, r, false));
  }
}
