import { Container, Graphics, type Text } from 'pixi.js';
import { T } from '../theme';
import { num, pct } from '../format';
import { fmtSigned } from '../../../core/format';
import type { Account, Contract } from '../market/Account';
import { Tabs, txt } from '../ui/widgets';

const ROW_H = 46;

/** Contratos abertos (com tempo e estado) e histórico. */
export class ContractsPanel extends Container {
  private readonly tabs = new Tabs(['Abertos', 'Histórico'], { size: 14 });
  private readonly bg = new Graphics();
  private readonly rowsBg = new Graphics();
  private readonly rows: Text[][] = [];
  private readonly empty: Text;
  private w = 340;
  private h = 300;

  constructor(private readonly account: Account) {
    super();
    this.empty = txt('', 14, T.dim, '500');
    this.empty.anchor.set(0.5, 0);
    this.tabs.onChange = () => this.refresh();
    this.addChild(this.bg, this.tabs, this.rowsBg, this.empty);
  }

  layout(w: number, h: number): void {
    this.w = w;
    this.h = h;
    this.bg.clear().rect(0, 0, w, 1).fill(T.border);
    this.tabs.position.set(20, 16);
    this.tabs.layout(w - 40, 40);
    const n = Math.max(0, Math.floor((h - 72) / ROW_H));
    while (this.rows.length < n) {
      const r = [
        txt('', 14, T.text, '700'),
        txt('', 12, T.muted, '500'),
        txt('', 15, T.text, '700'),
        txt('', 12, T.muted, '500'),
      ];
      r[2].anchor.set(1, 0);
      r[3].anchor.set(1, 0);
      this.addChild(...r);
      this.rows.push(r);
    }
    this.empty.position.set(w / 2, 100);
    this.refresh();
  }

  refresh(): void {
    const open = this.tabs.index === 0;
    const list: Contract[] = open ? [...this.account.open].reverse() : this.account.closed;
    const n = Math.min(list.length, Math.floor((this.h - 72) / ROW_H));
    this.empty.text = open ? 'Sem contratos abertos' : 'Ainda sem histórico';
    this.empty.visible = list.length === 0;
    const g = this.rowsBg.clear();
    const now = Date.now();
    this.rows.forEach((r, i) => {
      const c = list[i];
      const vis = i < n && !!c;
      for (const t of r) t.visible = vis;
      if (!vis) return;
      const y = 72 + i * ROW_H;
      g.roundRect(12, y, this.w - 24, ROW_H - 6, 10).fill(T.input);
      const up = c.dir === 'up';
      r[0].text = `${up ? '▲' : '▼'} ${c.symId}${c.auto ? '  · auto' : ''}`;
      r[0].style.fill = up ? T.greenText : T.redText;
      const dec = c.symId.includes('JPY') ? 3 : 4;
      r[1].text = `${num(c.stake)} Coins · ${num(c.entry, dec)}`;
      if (open) {
        const left = Math.max(0, Math.ceil((c.expiry - now) / 1000));
        const win = this.account.winning(c);
        r[2].text = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`;
        r[2].style.fill = T.text;
        r[3].text = win === null ? 'Empate' : win ? `A ganhar · +${num(c.payout - c.stake)}` : 'A perder';
        r[3].style.fill = win === null ? T.muted : win ? T.greenText : T.redText;
      } else {
        const pnl = c.pnl ?? 0;
        r[2].text = c.result === 'tie' ? 'Empate' : fmtSigned(pnl);
        r[2].style.fill = pnl > 0 ? T.greenText : pnl < 0 ? T.redText : T.muted;
        r[3].style.fill = T.muted;
        r[3].text = c.exit !== undefined ? `→ ${num(c.exit, dec)} (${pct(((c.exit - c.entry) / c.entry) * 100)})` : '';
      }
      r[0].position.set(26, y + 5);
      r[1].position.set(26, y + 23);
      r[2].position.set(this.w - 26, y + 4);
      r[3].position.set(this.w - 26, y + 23);
    });
  }
}
