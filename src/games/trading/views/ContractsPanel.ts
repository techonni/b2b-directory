import { Container, Graphics, type Text } from 'pixi.js';
import { T } from '../theme';
import { num, pct } from '../format';
import { fmtSigned } from '../../../core/format';
import type { Feed } from '../../binary/market/Market';
import type { Book, Position } from '../../binary/market/Trades';
import { Tabs, txt } from '../ui/widgets';

const ROW_H = 52;
/** Início da lista (por baixo dos separadores grandes). */
const TOP = 120;

/** Contratos abertos (com tempo e estado) e histórico. */
export class ContractsPanel extends Container {
  /** Contratos abertos pelo modo automático (para a etiqueta "auto"). */
  readonly autoIds = new Set<number>();
  private readonly tabs = new Tabs(['Abertos', 'Histórico'], { size: 26 });
  private readonly bg = new Graphics();
  private readonly rowsBg = new Graphics();
  private readonly rows: Text[][] = [];
  private readonly empty: Text;
  private w = 340;
  private h = 300;

  constructor(
    private readonly book: Book,
    private readonly feed: Feed,
  ) {
    super();
    this.empty = txt('', 15, T.dim, '500');
    this.empty.anchor.set(0.5, 0);
    this.tabs.onChange = () => this.refresh();
    this.addChild(this.bg, this.tabs, this.rowsBg, this.empty);
  }

  layout(w: number, h: number): void {
    this.w = w;
    this.h = h;
    this.bg.clear().rect(0, 0, w, 1).fill(T.border);
    this.tabs.position.set(20, 16);
    this.tabs.layout(w - 40, 88);
    const n = Math.max(0, Math.floor((h - TOP) / ROW_H));
    while (this.rows.length < n) {
      const r = [txt('', 15, T.text, '700'), txt('', 13, T.muted, '500'), txt('', 16, T.text, '700'), txt('', 13, T.muted, '500')];
      r[2].anchor.set(1, 0);
      r[3].anchor.set(1, 0);
      this.addChild(...r);
      this.rows.push(r);
    }
    this.empty.position.set(w / 2, TOP + 28);
    this.refresh();
  }

  refresh(): void {
    const open = this.tabs.index === 0;
    const list: Position[] = open ? [...this.book.open].reverse() : this.book.closed;
    const n = Math.min(list.length, Math.floor((this.h - TOP) / ROW_H));
    this.empty.text = open ? 'Sem contratos abertos' : 'Ainda sem histórico';
    this.empty.visible = list.length === 0;
    const g = this.rowsBg.clear();
    this.rows.forEach((r, i) => {
      const p = list[i];
      const vis = i < n && !!p;
      for (const t of r) t.visible = vis;
      if (!vis) return;
      const m = this.feed.get(p.marketId);
      const dec = m.def.decimals;
      const y = TOP + i * ROW_H;
      g.roundRect(12, y, this.w - 24, ROW_H - 6, 12).fill(T.input);
      const up = p.dir === 'up';
      r[0].text = `${up ? '▲ Sobe' : '▼ Desce'} · ${m.def.name}${this.autoIds.has(p.id) ? ' · auto' : ''}`;
      r[0].style.fill = up ? T.greenText : T.redText;
      r[1].text = `${num(p.stake)} Coins · ${p.entry.toFixed(dec)}`;
      if (open) {
        const left = Math.max(0, p.expiry - this.feed.now);
        const win = this.book.winning(p);
        r[2].text = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`;
        r[2].style.fill = T.text;
        r[3].text = win === null ? 'Empate' : win ? `A ganhar · +${num(p.payout - p.stake)}` : 'A perder';
        r[3].style.fill = win === null ? T.muted : win ? T.greenText : T.redText;
      } else {
        const pnl = p.pnl ?? 0;
        r[2].text = p.result === 'tie' ? 'Empate' : fmtSigned(pnl);
        r[2].style.fill = pnl > 0 ? T.greenText : pnl < 0 ? T.redText : T.muted;
        r[3].style.fill = T.muted;
        r[3].text = p.exit !== undefined ? `→ ${p.exit.toFixed(dec)} (${pct(((p.exit - p.entry) / p.entry) * 100)})` : '';
      }
      r[0].position.set(26, y + 6);
      r[1].position.set(26, y + 26);
      r[2].position.set(this.w - 26, y + 5);
      r[3].position.set(this.w - 26, y + 26);
    });
  }
}
