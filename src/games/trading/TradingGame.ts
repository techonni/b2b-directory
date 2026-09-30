import { Container, Graphics } from 'pixi.js';
import gsap from 'gsap';
import type { GameScene } from '../../core/scene';
import { sound } from '../../core/audio/Sound';
import { C } from '../../core/theme';
import { Keypad } from '../../core/ui/Keypad';
import { Toast } from '../../core/ui/Toast';
import { fmtSigned } from '../../core/format';
import { T } from './theme';
import { num, qty } from './format';
import { Account, START_CASH, type Fill, type Side } from './market/Account';
import { Market } from './market/Market';
import { BookPanel } from './views/BookPanel';
import { ChartPanel } from './views/ChartPanel';
import { Insights } from './views/Insights';
import { OrderPanel } from './views/OrderPanel';
import { Rail, type RailItem } from './views/Rail';
import { Screener } from './views/Screener';
import { Watchlist } from './views/Watchlist';

/** Altura de referência e largura mínima (layout desktop, ocupa o ecrã todo). */
const REF_H = 860;
const MIN_W = 1200;
const BOTTOM_GAP = 16;
const WATCH_W = 296;
const SIDE_W = 312;
const FAST = 5;
const SLOW = 20;

const REASON: Record<Fill['reason'], string> = {
  manual: '',
  auto: 'Auto · ',
  tp: 'Take profit · ',
  sl: 'Stop loss · ',
};

/** Visível no ecrã (ele e todos os pais). */
function shown(c: Container | null): boolean {
  for (; c; c = c.parent) if (!c.visible) return false;
  return true;
}

const sma = (a: number[], n: number) => a.slice(-n).reduce((s, x) => s + x, 0) / n;

/** zunrel Trading: terminal de forex demo com velas, livro, screener e modo automático. */
export class TradingGame implements GameScene {
  readonly view = new Container();
  private readonly root = new Container();
  private readonly market = new Market();
  private readonly account = new Account(this.market);

  private readonly backdrop = new Graphics();
  private readonly frame = new Graphics();
  private readonly frameMask = new Graphics();
  private readonly app = new Container();
  private readonly side = new Container();
  private readonly sideBg = new Graphics();
  private readonly rail = new Rail();
  private readonly watch = new Watchlist(this.market.forex);
  private readonly chart = new ChartPanel();
  private readonly screener = new Screener(this.market.others);
  private readonly order = new OrderPanel();
  private readonly book = new BookPanel();
  private readonly insights = new Insights(this.market);
  private readonly keypad = new Keypad();
  private readonly toast = new Toast();

  private active = false;
  private expanded = false;
  private selId = 'EUR/USD';
  private amount = 10_000;
  private W = 1400;
  private H = 900;
  /** Tamanho lógico da app (depois da escala). */
  private DW = 1440;
  private DH = 860;

  private autoOn = false;
  private autoTrades = 0;
  private autoPnl = 0;
  private autoPrev: boolean | null = null;
  private autoCool = 0;

  constructor() {
    this.view.addChild(this.backdrop, this.root);
    this.side.addChild(this.sideBg, this.order, this.book, this.insights);
    this.app.addChild(this.chart, this.screener, this.side, this.watch, this.rail);
    this.root.addChild(this.app, this.frameMask, this.frame, this.toast, this.keypad);
    this.app.mask = this.frameMask;
    this.wire();
    this.select(this.selId);
    this.watch.refresh();
    this.screener.refresh();
    this.syncAccount();
    this.order.amount.set(num(this.amount));
    this.order.setAuto(false, 'Desligado');
    this.build();
  }

  resize(width: number, height: number): void {
    this.W = width;
    this.H = height;
    this.fit();
  }

  setActive(active: boolean): void {
    this.active = active;
    this.watch.keysOn = active;
    if (!active) this.watch.focus(false);
  }

  update(dt: number): void {
    this.market.update(dt);
    if (!this.active) return;
    if (shown(this.chart)) this.chart.draw();
    this.insights.update(dt);
  }

  // ---------- Ligações ----------

  private wire(): void {
    this.watch.onSelect = (id) => this.select(id);
    this.screener.onSelect = (id) => this.select(id);
    this.insights.onSelect = (id) => this.select(id);
    this.chart.onExpand = () => {
      this.expanded = !this.expanded;
      this.build();
    };
    this.rail.onSelect = (i) => this.onRail(i);
    this.rail.onReset = () => {
      this.account.reset();
      if (this.autoOn) this.setAuto(false);
      this.toast.show(`Conta demo reposta: ${num(START_CASH)} Coins`, T.btnGray);
    };

    const o = this.order;
    o.onPct = (p) => this.setAmount(Math.floor(this.account.cash * p * 100) / 100);
    o.onEditAmount = () => {
      let value = this.amount;
      this.keypad.open({
        title: 'Valor (Coins)',
        value: String(this.amount),
        onChange: (s) => {
          value = Number(s || '0');
          o.amount.set(s || '0');
        },
        onClose: () => this.setAmount(Number.isFinite(value) ? value : this.amount),
      });
    };
    o.onBuy = () => this.submit('buy');
    o.onSell = () => this.submit('sell');
    o.onAuto = () => this.setAuto(!this.autoOn);

    this.market.onTick = () => this.onSecond();
    this.account.onChange = () => this.syncAccount();
    this.account.onFill = (f) => this.onFill(f);
  }

  private onRail(i: RailItem): void {
    const msgs: Partial<Record<RailItem, string>> = {
      home: 'Mercados: escolhe um par à esquerda',
      wallet: `Património: ${num(this.account.equity)} Coins`,
      shield: 'Conta demo · créditos fictícios, sem dinheiro real',
      case: `${Object.keys(this.account.hold).length} posições abertas`,
      box: 'Screener de mercado em baixo',
    };
    if (i === 'box' && this.expanded) {
      this.expanded = false;
      this.build();
    }
    if (msgs[i]) this.toast.show(msgs[i]!, T.btnGray);
    gsap.delayedCall(1.2, () => this.rail.select('chart'));
  }

  private select(id: string): void {
    if (id !== this.selId) this.autoPrev = null;
    this.selId = id;
    const inst = this.market.get(id);
    this.chart.setInstrument(inst);
    this.book.setInstrument(inst);
    this.watch.select(id);
    this.screener.select(id);
    this.syncAccount();
    if (this.autoOn) this.order.setAuto(true, `A analisar ${id}…`, T.greenText);
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
    this.order.setPosition(`${qty(this.account.qty(this.selId))} ${this.selId}`);
  }

  private setAmount(v: number): void {
    this.amount = Math.max(0, Math.round(v * 100) / 100);
    this.order.amount.set(num(this.amount));
  }

  // ---------- Ordens ----------

  private submit(side: Side): void {
    const err = this.account.trade(this.selId, side, this.amount, 'manual', side === 'buy' && this.order.tpsl.checked);
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
      this.toast.show(`${pre}Compra ${qty(f.qty)} ${f.symId} a ${num(f.price, d)}`, T.green, T.onGreen);
    } else {
      const pnl = f.pnl ?? 0;
      sound.play(pnl >= 0 ? 'win' : 'loss');
      this.toast.show(`${pre}Venda ${qty(f.qty)} ${f.symId} · ${fmtSigned(pnl)}`, pnl >= 0 ? T.green : T.red, pnl >= 0 ? T.onGreen : 0xffffff);
    }
  }

  // ---------- Modo automático ----------

  /**
   * Estratégia de cruzamento de médias (5 s vs 20 s) no par selecionado:
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
      this.toast.show(`Modo automático ligado · ${this.selId}`, T.green, T.onGreen);
      this.order.setAuto(true, `A analisar ${this.selId}…`, T.greenText);
    } else {
      this.toast.show(`Modo automático desligado · ${this.autoTrades} ${this.autoTrades === 1 ? 'ordem' : 'ordens'}`, T.btnGray);
      this.order.setAuto(false, 'Desligado');
    }
    this.chart.setAuto(on);
  }

  private syncAutoStatus(): void {
    const pnl = this.autoPnl;
    const n = this.autoTrades;
    this.order.setAuto(true, `${n} ${n === 1 ? 'ordem' : 'ordens'} · ${fmtSigned(pnl)} Coins`, pnl > 0 ? T.greenText : pnl < 0 ? T.redText : T.muted);
  }

  private autoStep(): void {
    const inst = this.market.get(this.selId);
    const bull = sma(inst.live, FAST) > sma(inst.live, SLOW);
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
        this.order.setAuto(true, 'Sem saldo', T.redText);
        return;
      }
      if (!this.account.trade(this.selId, 'buy', amt, 'auto', this.order.tpsl.checked)) this.autoCool = 3;
    } else if (!bull && held && crossed) {
      if (!this.account.trade(this.selId, 'sell', Infinity, 'auto')) this.autoCool = 3;
    }
  }

  // ---------- Layout ----------

  /** Ocupa o espaço todo por baixo do cabeçalho; a escala segue a altura (com largura mínima). */
  private fit(): void {
    const { W, H } = this;
    const s = Math.min(H / REF_H, W / MIN_W, 1.25);
    this.root.scale.set(s);
    this.root.position.set(0, 0);
    this.DW = W / s;
    // Espaço em baixo, como no Crash e no Binary.
    this.DH = (H - BOTTOM_GAP) / s;
    this.backdrop.clear().rect(0, 0, W, H).fill(C.bgBase);
    this.build();
  }

  /** Monta os painéis no tamanho lógico DW × DH. */
  private build(): void {
    const { DW, DH } = this;
    this.frameMask.clear().rect(0, 0, DW, DH).fill(0xffffff);
    this.frame.clear().rect(0, DH - 1, DW, 1).fill(T.border);

    this.rail.layout(DH);
    this.watch.position.set(Rail.W, 0);
    this.watch.layout(WATCH_W, DH);
    const cx = Rail.W + WATCH_W;
    const cw = DW - cx - SIDE_W;
    const chartH = this.expanded ? DH : Math.round(DH * 0.6);
    this.chart.position.set(cx, 0);
    this.chart.layout(cw, chartH);
    this.screener.visible = !this.expanded;
    this.screener.position.set(cx, chartH);
    this.screener.layout(cw, DH - chartH);

    this.side.position.set(DW - SIDE_W, 0);
    this.sideBg.clear().rect(0, 0, SIDE_W, DH).fill(T.panel).rect(0, 0, 1, DH).fill(T.border);
    this.order.layout(SIDE_W);
    const rest = DH - OrderPanel.HEIGHT;
    const bookH = 222;
    this.book.position.set(0, OrderPanel.HEIGHT);
    this.book.layout(SIDE_W, bookH);
    this.insights.position.set(0, OrderPanel.HEIGHT + bookH);
    this.insights.layout(SIDE_W, rest - bookH);

    const kw = 440;
    this.keypad.layout(DW, DH, (DW - kw) / 2, kw);
    this.toast.position.set(cx + cw / 2, 150);
  }
}
