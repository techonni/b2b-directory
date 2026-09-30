import { Container, Graphics, Rectangle, type Text } from 'pixi.js';
import { ScrollBox } from '../../../core/ui/ScrollBox';
import { T } from '../theme';
import { num, pct } from '../format';
import type { Instrument } from '../market/Market';
import { icon } from '../ui/icons';
import { onTap, txt } from '../ui/widgets';

const ROW_H = 48;
const PERIODS = ['Hoje', 'Semana', 'Mês'];

interface Row {
  inst: Instrument;
  view: Container;
  bg: Graphics;
  cells: Text[];
  bars: Graphics;
  buy: Text;
  sell: Text;
}

/** Tabela "Screener de mercado": matérias-primas e cripto. */
export class Screener extends Container {
  onSelect: ((id: string) => void) | null = null;
  private readonly bg = new Graphics();
  private readonly title: Text;
  private readonly period = new Container();
  private readonly periodText: Text;
  private readonly head: Text[];
  private readonly list = new ScrollBox();
  private readonly rows: Row[];
  private periodIdx = 0;
  private cols: number[] = [];
  private w = 700;
  private selected = '';

  constructor(insts: Instrument[]) {
    super();
    this.title = txt('Screener de mercado', 16, T.text, '700');
    this.periodText = txt('Hoje', 12, T.text, '600');
    const chev = icon('chevron', T.muted);
    this.period.addChild(this.periodText, chev);
    chev.position.set(this.periodText.width + 12, 8);
    this.period.hitArea = new Rectangle(-8, -6, 80, 30);
    onTap(this.period, () => {
      this.periodIdx = (this.periodIdx + 1) % PERIODS.length;
      this.periodText.text = PERIODS[this.periodIdx];
      chev.x = this.periodText.width + 12;
      this.refresh();
    });
    this.head = ['Símbolo', 'Venda', 'Compra', 'Spread', 'Var. %', 'Compradores', 'Vendedores'].map((s) => txt(s, 11, T.muted, '500'));
    this.addChild(this.bg, this.title, this.period, ...this.head, this.list);

    this.rows = insts.map((inst) => {
      const view = new Container();
      const bg = new Graphics();
      const ic = new Container();
      const ib = new Graphics().roundRect(0, 0, 26, 26, 6).fill(inst.def.icon!.bg);
      ic.addChild(ib);
      if (inst.def.icon!.glyph === 'drop') {
        ic.addChild(new Graphics().moveTo(13, 6).bezierCurveTo(19, 13, 19, 20, 13, 20).bezierCurveTo(7, 20, 7, 13, 13, 6).fill(0xffffff));
      } else {
        const gt = txt(inst.def.icon!.glyph, 11, inst.def.icon!.fg, '800');
        gt.anchor.set(0.5);
        gt.position.set(13, 13);
        ic.addChild(gt);
      }
      ic.position.set(0, 11);
      const name = txt(inst.id, 13, T.text, '700');
      const sub = txt(inst.def.name, 11, T.muted, '500');
      name.position.set(36, 8);
      sub.position.set(36, 26);
      const cells = [0, 1, 2, 3].map(() => txt('', 13, T.text, '600'));
      const bars = new Graphics();
      const buy = txt('', 11, T.muted, '500');
      const sell = txt('', 11, T.muted, '500');
      sell.anchor.set(1, 0);
      view.addChild(bg, ic, name, sub, ...cells, bars, buy, sell);
      onTap(view, () => this.onSelect?.(inst.id));
      view.on('pointerover', () => bg.clear().roundRect(-8, 0, this.w - 24, ROW_H, 8).fill(T.hover));
      view.on('pointerout', () => this.paint(row));
      const row: Row = { inst, view, bg, cells, bars, buy, sell };
      this.list.content.addChild(view);
      return row;
    });
  }

  layout(w: number, h: number): void {
    this.w = w;
    this.bg.clear().rect(0, 0, w, h).fill(T.bg).rect(0, 0, w, 1).fill(T.border);
    this.title.position.set(20, 18);
    this.period.position.set(w - 76, 20);
    // Colunas: símbolo | venda | compra | spread | var | barras
    const narrow = w < 600;
    const inner = w - 40;
    this.cols = narrow ? [0, -1, inner * 0.56, -1, inner * 0.82, -1] : [0, inner * 0.24, inner * 0.36, inner * 0.48, inner * 0.57, inner * 0.7];
    const barW = inner - this.cols[5];
    this.head.forEach((t, i) => {
      const cx = i < 5 ? this.cols[i] : i === 5 ? this.cols[5] : this.cols[5] + barW;
      t.visible = cx >= 0 && !(narrow && i >= 5);
      t.anchor.set(i === 6 ? 1 : 0, 0);
      t.position.set(20 + cx, 58);
    });
    this.list.position.set(12, 80);
    this.list.layout(w - 24, h - 80);
    this.rows.forEach((r, i) => {
      r.view.position.set(8, i * ROW_H);
      r.view.hitArea = new Rectangle(-8, 0, w - 24, ROW_H);
      r.cells.forEach((c, j) => {
        const cx = this.cols[j + 1];
        c.visible = cx >= 0;
        c.position.set(cx, 15);
      });
      r.bars.visible = r.buy.visible = r.sell.visible = !narrow;
      r.buy.position.set(this.cols[5], 25);
      r.sell.position.set(this.cols[5] + barW, 25);
      this.paint(r);
    });
    this.list.refresh();
    this.refresh();
  }

  select(id: string): void {
    this.selected = id;
    for (const r of this.rows) this.paint(r);
  }

  refresh(): void {
    const mult = [1, 2.6, 5.1][this.periodIdx];
    const barW = this.w - 40 - this.cols[5];
    for (const r of this.rows) {
      const i = r.inst;
      const d = i.def.dec;
      const chg = i.chg * mult;
      r.cells[0].text = num(i.bid, d);
      r.cells[1].text = num(i.ask, d);
      r.cells[2].text = num(i.spread, d === 3 ? 3 : 2);
      r.cells[3].text = pct(chg);
      r.cells[3].style.fill = chg >= 0 ? T.greenText : T.redText;
      const b = Math.round(i.buyers);
      r.buy.text = `${b}%`;
      r.sell.text = `${100 - b}%`;
      const gw = (barW - 3) * (b / 100);
      r.bars.clear().roundRect(this.cols[5], 13, gw, 7, 2).fill(T.green).roundRect(this.cols[5] + gw + 3, 13, barW - 3 - gw, 7, 2).fill(T.red);
    }
  }

  private paint(r: Row): void {
    r.bg.clear();
    if (r.inst.id === this.selected) r.bg.roundRect(-8, 0, this.w - 24, ROW_H, 8).fill(T.rowSel);
  }
}
