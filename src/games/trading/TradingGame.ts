import { Container, Graphics, Rectangle, type Text } from 'pixi.js';
import gsap from 'gsap';
import type { GameScene } from '../../core/scene';
import { sound } from '../../core/audio/Sound';
import { Keypad } from '../../core/ui/Keypad';
import { ScrollBox } from '../../core/ui/ScrollBox';
import { Toast } from '../../core/ui/Toast';
import { fmtSigned } from '../../core/format';
import { T } from './theme';
import { num, qty } from './format';
import { Account, type Fill, type Side } from './market/Account';
import { Market } from './market/Market';
import { icon, type IconName } from './ui/icons';
import { onTap, txt } from './ui/widgets';
import { BookPanel } from './views/BookPanel';
import { ChartPanel } from './views/ChartPanel';
import { Insights } from './views/Insights';
import { OrderPanel } from './views/OrderPanel';
import { Rail, type RailItem } from './views/Rail';
import { Screener } from './views/Screener';
import { Watchlist } from './views/Watchlist';

const WATCH_W = 296;
const SIDE_W = 312;
const MOBILE_W = 420;
const NAV_H = 62;
const FAST = 5;
const SLOW = 20;

type MTab = 'markets' | 'trade' | 'book' | 'screener';
const MTABS: { id: MTab; label: string; icon: IconName }[] = [
  { id: 'markets', label: 'Mercados', icon: 'home' },
  { id: 'trade', label: 'Negociar', icon: 'chart' },
  { id: 'book', label: 'Livro', icon: 'case' },
  { id: 'screener', label: 'Screener', icon: 'box' },
];

const REASON: Record<Fill['reason'], string> = {
  manual: '',
  auto: 'Auto · ',
  limit: 'Limite · ',
  stop: 'Stop · ',
  tp: 'Take profit · ',
  sl: 'Stop loss · ',
};

/** Visível no ecrã (ele e todos os pais). */
function shown(c: Container | null): boolean {
  for (; c; c = c.parent) if (!c.visible) return false;
  return true;
}

const sma = (a: number[], n: number) => a.slice(-n).reduce((s, x) => s + x, 0) / n;

/** zunrel Trading: terminal de ações demo com gráfico, livro, screener e modo automático. */
export class TradingGame implements GameScene {
  readonly view = new Container();
  private readonly root = new Container();
  private readonly market = new Market();
  private readonly account = new Account(this.market);

  private readonly frame = new Graphics();
  private readonly frameMask = new Graphics();
  private readonly app = new Container();
  private readonly side = new Container();
  private readonly sideBg = new Graphics();
  private readonly rail = new Rail();
  private readonly watch = new Watchlist(this.market.stocks);
  private readonly chart = new ChartPanel();
  private readonly screener = new Screener(this.market.others);
  private readonly order = new OrderPanel();
  private readonly book = new BookPanel();
  private readonly insights = new Insights(this.market);
  private readonly mScroll = new ScrollBox();
  private readonly nav = new Container();
  private readonly navBg = new Graphics();
  private readonly navItems: { id: MTab; view: Container; g: Graphics; t: Text }[] = [];
  private readonly keypad = new Keypad();
  private readonly toast = new Toast();

  private active = false;
  private mobile = false;
  private mtab: MTab = 'trade';
  private expanded = false;
  private selId = 'SBUX';
  private amount = 10_000;
  private limitPrice = 0;
  private W = 1400;
  private H = 900;

  private autoOn = false;
  private autoTrades = 0;
  private autoPnl = 0;
  private autoPrev: boolean | null = null;
  private autoCool = 0;

  constructor() {
    this.view.addChild(this.frame, this.root);
    this.side.addChild(this.sideBg, this.order, this.book, this.insights);
    this.app.addChild(this.watch, this.chart, this.screener, this.side, this.rail);
    this.root.addChild(this.app, this.nav, this.toast, this.keypad);
    this.app.mask = this.frameMask;
    this.root.addChild(this.frameMask);

    this.nav.addChild(this.navBg);
    for (const m of MTABS) {
      const view = new Container();
      const g = icon(m.icon);
      const t = txt(m.label, 11, T.muted, '600');
      t.anchor.set(0.5, 0);
      t.y = 14;
      g.y = -4;
      view.addChild(g, t);
      onTap(view, () => this.showTab(m.id));
      this.navItems.push({ id: m.id, view, g, t });
      this.nav.addChild(view);
    }
    this.wire();
    this.select(this.selId);
    this.syncAccount();
    this.order.amount.set(num(this.amount));
    this.order.setAutoStatus('Desligado');
  }

  resize(width: number, height: number): void {
    this.W = width;
    this.H = height;
    this.layout();
  }

  setActive(active: boolean): void {
    this.active = active;
    this.watch.keysOn = active;
    if (!active) this.watch.focus(false);
  }

  update(dt: number, active: boolean): void {
    this.market.update(dt);
    if (!active) return;
    if (this.active && shown(this.chart)) this.chart.draw();
    this.insights.update(dt);
  }

  // ---------- Ligações ----------

  private wire(): void {
    this.watch.onSelect = (id) => this.select(id, true);
    this.screener.onSelect = (id) => this.select(id, true);
    this.insights.onSelect = (id) => this.select(id, true);
    this.chart.onExpand = () => {
      this.expanded = !this.expanded;
      this.layout();
    };
    this.rail.onSelect = (i) => this.onRail(i);
    this.rail.onReset = () => {
      this.account.reset();
      if (this.autoOn) this.order.auto.set(false);
      this.toast.show('Conta demo reposta: 100,000.00 Coins', T.btnGray);
    };

    const o = this.order;
    o.onPct = (p) => {
      const inst = this.market.get(this.selId);
      const base = o.reduce.checked ? this.account.qty(this.selId) * inst.bid : this.account.cash;
      this.setAmount(Math.floor(base * p * 100) / 100);
    };
    o.onEditAmount = () => this.editNumber('Valor (Coins)', this.amount, (v) => this.setAmount(v), (s) => o.amount.set(s));
    o.onEditPrice = () =>
      this.editNumber(o.kind.index === 1 ? 'Preço limite' : 'Preço stop', this.limitPrice, (v) => {
        this.limitPrice = v;
        o.price.set(num(v, this.market.get(this.selId).def.dec));
      }, (s) => o.price.set(s));
    o.kind.onChange = () => {
      this.limitPrice = this.market.get(this.selId).price;
      o.price.set(num(this.limitPrice, this.market.get(this.selId).def.dec));
      o.relayout();
    };
    o.onBuy = () => this.submit('buy');
    o.onSell = () => this.submit('sell');
    o.auto.onChange = (on) => this.setAuto(on);

    this.market.onTick = () => this.onSecond();
    this.account.onChange = () => this.syncAccount();
    this.account.onFill = (f) => this.onFill(f);
  }

  private onRail(i: RailItem): void {
    const msgs: Partial<Record<RailItem, string>> = {
      home: 'Mercados: escolhe uma ação à esquerda',
      wallet: `Património: ${num(this.account.equity)} Coins`,
      shield: 'Conta demo · créditos fictícios, sem dinheiro real',
      case: `${Object.keys(this.account.hold).length} posições · ${this.account.pending.length} ordens pendentes`,
    };
    if (i === 'box') {
      this.expanded = false;
      this.layout();
      this.toast.show('Screener de mercado em baixo', T.btnGray);
    } else if (msgs[i]) this.toast.show(msgs[i]!, T.btnGray);
    gsap.delayedCall(1.2, () => this.rail.select('chart'));
  }

  private select(id: string, user = false): void {
    if (id !== this.selId) this.autoPrev = null;
    this.selId = id;
    const inst = this.market.get(id);
    this.chart.setInstrument(inst);
    this.book.setInstrument(inst);
    this.watch.select(id);
    this.screener.select(id);
    this.syncAccount();
    if (this.order.kind.index) {
      this.limitPrice = inst.price;
      this.order.price.set(num(inst.price, inst.def.dec));
    }
    if (user && this.mobile && this.mtab !== 'trade') this.showTab('trade');
    if (user && this.autoOn) this.order.setAutoStatus(`A analisar ${id}…`);
  }

  private onSecond(): void {
    this.account.check();
    this.watch.refresh();
    this.screener.refresh();
    this.chart.refresh();
    this.book.refresh();
    this.syncAccount();
    if (this.autoOn) this.autoStep();
  }

  private syncAccount(): void {
    this.order.setAvailable(num(this.account.cash));
    const q = this.account.qty(this.selId);
    this.order.setPosition(`${qty(q)} ${this.selId}`);
  }

  private setAmount(v: number): void {
    this.amount = Math.max(0, Math.round(v * 100) / 100);
    this.order.amount.set(num(this.amount));
  }

  private editNumber(title: string, start: number, commit: (v: number) => void, preview: (s: string) => void): void {
    let value = start;
    this.keypad.open({
      title,
      value: String(Math.round(start * 100) / 100),
      onChange: (s) => {
        value = Number(s || '0');
        preview(s || '0');
      },
      onClose: () => commit(Number.isFinite(value) ? value : start),
    });
  }

  // ---------- Ordens ----------

  private submit(side: Side): void {
    const o = this.order;
    if (side === 'buy' && o.reduce.checked) return this.fail('Reduzir apenas: só são permitidas vendas');
    let err: string | null;
    if (o.kind.index === 0) err = this.account.trade(this.selId, side, this.amount, 'manual', side === 'buy' && o.tpsl.checked);
    else {
      err = this.account.place({ symId: this.selId, side, kind: o.kind.index === 1 ? 'limit' : 'stop', amount: this.amount, price: this.limitPrice });
      if (!err) {
        sound.play('bet');
        const d = this.market.get(this.selId).def.dec;
        this.toast.show(`${o.kind.index === 1 ? 'Limite' : 'Stop'} · ${side === 'buy' ? 'compra' : 'venda'} a ${num(this.limitPrice, d)} colocada`, T.btnGray);
      }
    }
    if (err) this.fail(err);
  }

  private fail(msg: string): void {
    sound.play('error');
    this.toast.show(msg, T.red);
  }

  private onFill(f: Fill): void {
    const d = this.market.get(f.symId).def.dec;
    const pre = REASON[f.reason];
    if (f.reason === 'auto') {
      this.autoTrades++;
      if (f.pnl !== undefined) this.autoPnl += f.pnl;
      this.syncAutoStatus();
    }
    if (f.side === 'buy') {
      sound.play('buy');
      this.toast.show(`${pre}Compra ${qty(f.qty)} ${f.symId} a ${num(f.price, d)}`, T.green, 0x04150a);
    } else {
      const pnl = f.pnl ?? 0;
      sound.play(pnl >= 0 ? 'win' : 'loss');
      this.toast.show(`${pre}Venda ${qty(f.qty)} ${f.symId} · ${fmtSigned(pnl)}`, pnl >= 0 ? T.green : T.red, pnl >= 0 ? 0x04150a : 0xffffff);
    }
  }

  // ---------- Modo automático ----------

  /**
   * Estratégia de cruzamento de médias (5 s vs 20 s) no símbolo selecionado:
   * compra o valor indicado quando a média rápida cruza para cima e vende a posição
   * quando cruza para baixo. Respeita Take profit / Stop loss.
   */
  private setAuto(on: boolean): void {
    this.autoOn = on;
    this.autoPrev = null;
    this.autoCool = 0;
    if (on) {
      this.autoTrades = 0;
      this.autoPnl = 0;
      sound.play('launch');
      this.toast.show(`Modo automático ligado · ${this.selId}`, T.green, 0x04150a);
      this.order.setAutoStatus(`A analisar ${this.selId}…`, T.greenText);
    } else {
      this.toast.show(`Modo automático desligado · ${this.autoTrades} ordens`, T.btnGray);
      this.order.setAutoStatus('Desligado');
    }
  }

  private syncAutoStatus(): void {
    const pnl = this.autoPnl;
    this.order.setAutoStatus(`${this.autoTrades} ${this.autoTrades === 1 ? 'ordem' : 'ordens'} · ${fmtSigned(pnl)}`, pnl > 0 ? T.greenText : pnl < 0 ? T.redText : T.muted);
  }

  private autoStep(): void {
    const inst = this.market.get(this.selId);
    const fast = sma(inst.live, FAST);
    const slow = sma(inst.live, SLOW);
    const bull = fast > slow;
    const held = this.account.qty(this.selId) > 0;
    const first = this.autoPrev === null;
    const crossed = !first && bull !== this.autoPrev;
    this.autoPrev = bull;
    if (this.autoCool > 0) {
      this.autoCool--;
      return;
    }
    if (bull && !held && (crossed || first)) {
      const amt = Math.min(this.amount, Math.floor(this.account.cash * 100) / 100);
      if (amt < 1) {
        this.order.setAutoStatus('Sem saldo', T.redText);
        return;
      }
      if (!this.account.trade(this.selId, 'buy', amt, 'auto', this.order.tpsl.checked)) this.autoCool = 3;
    } else if (!bull && held && crossed) {
      if (!this.account.trade(this.selId, 'sell', Infinity, 'auto')) this.autoCool = 3;
    }
  }

  // ---------- Layout ----------

  private showTab(t: MTab): void {
    this.mtab = t;
    this.layout();
    const views: Record<MTab, Container> = { markets: this.watch, trade: this.mScroll, book: this.side, screener: this.screener };
    gsap.fromTo(views[t], { alpha: 0 }, { alpha: 1, duration: 0.25 });
  }

  private layout(): void {
    const { W, H } = this;
    this.mobile = W < 900;
    this.frame.clear().rect(0, 0, W, H).fill(T.bg);
    if (this.mobile) this.layoutMobile(W, H);
    else this.layoutDesktop(W, H);
  }

  private layoutDesktop(W: number, H: number): void {
    const s = Math.max(0.6, Math.min(1.2, W / 1440, H / 900));
    this.root.scale.set(s);
    const LW = W / s;
    const LH = H / s;
    const m = 14;
    const aw = LW - m * 2;
    const ah = LH - m * 2;
    this.app.position.set(m, m);
    this.frameMask.clear().roundRect(m, m, aw, ah, 18).fill(0xffffff);
    this.frame.roundRect(m * s - 1, m * s - 1, aw * s + 2, ah * s + 2, 18 * s).stroke({ width: 1, color: T.borderHi });
    this.nav.visible = false;
    for (const v of [this.rail, this.watch, this.chart, this.screener, this.side]) v.visible = true;

    // Painéis na ordem certa (o layout móvel pode tê-los movido).
    this.app.addChild(this.chart, this.screener, this.side, this.watch, this.rail);
    this.side.addChild(this.order);
    this.mScroll.removeFromParent();

    this.rail.layout(ah);
    this.watch.position.set(Rail.W, 0);
    this.watch.layout(WATCH_W, ah);
    const cx = Rail.W + WATCH_W;
    const cw = aw - cx - SIDE_W;
    const chartH = this.expanded ? ah : Math.max(360, Math.round(ah * 0.62));
    this.chart.position.set(cx, 0);
    this.chart.layout(cw, chartH);
    this.screener.visible = !this.expanded;
    this.screener.position.set(cx, chartH);
    this.screener.layout(cw, ah - chartH);

    this.side.position.set(aw - SIDE_W, 0);
    this.sideBg.clear().rect(0, 0, SIDE_W, ah).fill(T.panel).rect(0, 0, 1, ah).fill(T.border);
    this.order.position.set(0, 0);
    this.order.layout(SIDE_W, false);
    const rest = ah - OrderPanel.HEIGHT;
    const bookH = Math.max(226, Math.min(300, Math.round(rest * 0.45)));
    this.book.position.set(0, OrderPanel.HEIGHT);
    this.book.layout(SIDE_W, bookH);
    this.insights.visible = rest - bookH > 120;
    this.insights.position.set(0, OrderPanel.HEIGHT + bookH);
    this.insights.layout(SIDE_W, rest - bookH);

    const kw = 440;
    this.keypad.layout(LW, LH, (LW - kw) / 2, kw);
    this.toast.position.set(m + cx + cw / 2, m + 150);
  }

  private layoutMobile(W: number, H: number): void {
    const s = Math.min(1.3, W / MOBILE_W);
    this.root.scale.set(s);
    const LW = W / s;
    const LH = H / s;
    const ch = LH - NAV_H;
    this.app.position.set(0, 0);
    this.frameMask.clear().rect(0, 0, LW, ch).fill(0xffffff);
    this.rail.visible = false;

    const t = this.mtab;
    this.watch.visible = t === 'markets';
    this.mScroll.visible = t === 'trade';
    this.side.visible = t === 'book';
    this.screener.visible = t === 'screener';
    this.chart.visible = true;

    // Negociar: gráfico + painel de ordem num scroll.
    this.app.addChild(this.mScroll);
    this.mScroll.content.addChild(this.chart, this.order);
    this.mScroll.position.set(0, 0);
    const chartH = Math.max(280, ch - (OrderPanel.HEIGHT - 64) - 8);
    this.chart.position.set(0, 0);
    this.chart.layout(LW, chartH);
    this.order.position.set((LW - Math.min(LW, 480)) / 2, chartH);
    this.order.layout(Math.min(LW, 480), true);
    this.mScroll.layout(LW, ch);

    this.watch.position.set(0, 0);
    this.watch.layout(LW, ch);
    this.screener.position.set(0, 0);
    this.screener.layout(LW, ch);

    this.side.position.set(0, 0);
    this.sideBg.clear().rect(0, 0, LW, ch).fill(T.panel);
    const bookH = Math.min(340, ch * 0.5);
    this.book.position.set(0, 0);
    this.book.layout(LW, bookH);
    this.insights.visible = true;
    this.insights.position.set(0, bookH);
    this.insights.layout(Math.min(LW, 520), ch - bookH);

    this.nav.visible = true;
    this.nav.position.set(0, ch);
    this.navBg.clear().rect(0, 0, LW, NAV_H).fill(T.rail).rect(0, 0, LW, 1).fill(T.border);
    const iw = LW / MTABS.length;
    this.navItems.forEach((n, i) => {
      n.view.position.set(iw * (i + 0.5), NAV_H / 2 - 4);
      n.view.hitArea = new Rectangle(-iw / 2, -NAV_H / 2, iw, NAV_H);
      const on = n.id === t;
      icon(MTABS[i].icon, on ? T.text : T.muted, n.g);
      n.t.style.fill = on ? T.text : T.muted;
    });

    this.keypad.layout(LW, LH, 0, LW);
    this.toast.position.set(LW / 2, 90);
  }
}
