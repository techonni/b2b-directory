import { Container, Graphics } from 'pixi.js';
import type { GameScene } from '../../core/scene';
import { sound } from '../../core/audio/Sound';
import { C } from '../../core/theme';
import { Keypad } from '../../core/ui/Keypad';
import { fmtDuration, fmtSigned } from '../../core/format';
import { Feed } from '../binary/market/Market';
import { Book, type Direction, type Position } from '../binary/market/Trades';
import { Chart } from '../binary/views/Chart';
import { Sheet } from '../binary/ui/Sheet';
import { T } from './theme';
import { num } from './format';
import { BOOK_KEY, PAIRS, PLUS, START_BALANCE } from './market/Market';
import { ResultToast } from './ui/ResultToast';
import { ContractsPanel } from './views/ContractsPanel';
import { OrderPanel } from './views/OrderPanel';
import { PairBar } from './views/PairBar';

/** Altura de referência e largura mínima (layout desktop, ocupa o ecrã todo). */
const REF_H = 860;
const MIN_W = 1100;
const BOTTOM_GAP = 16;
const SIDE_W = 420;
const PAD = 16;
const FAST = 5;
const SLOW = 20;

const sma = (a: number[], n: number) => a.slice(-n).reduce((s, x) => s + x, 0) / n;

/**
 * zunrel Binary +: o Binary em formato desktop, com muitos mais pares de forex.
 * Usa o mesmo motor, gráfico e contratos do Binary; tem modo automático.
 */
export class TradingGame implements GameScene {
  readonly view = new Container();
  private readonly root = new Container();
  private readonly feed = new Feed(PAIRS);
  private readonly book = new Book(this.feed, BOOK_KEY);

  private readonly backdrop = new Graphics();
  private readonly app = new Container();
  private readonly centerBg = new Graphics();
  private readonly bar = new PairBar(this.feed.markets);
  private readonly chart = new Chart();
  private readonly side = new Container();
  private readonly sideBg = new Graphics();
  private readonly order = new OrderPanel();
  private readonly contracts = new ContractsPanel(this.book, this.feed);
  private readonly sheet = new Sheet();
  private readonly keypad = new Keypad();
  private readonly toast = new ResultToast();

  private active = false;
  private expanded = false;
  private selId = PAIRS[0].id;
  private stake = 10;
  private secs = 60;
  private W = 1400;
  private H = 900;
  private DW = 1440;
  private DH = 860;

  private autoOn = false;
  private autoTrades = 0;
  private autoPnl = 0;
  private autoPrev: boolean | null = null;

  constructor() {
    this.view.addChild(this.backdrop, this.root);
    this.side.addChild(this.sideBg, this.order, this.contracts);
    this.app.addChild(this.centerBg, this.bar, this.chart, this.side);
    this.root.addChild(this.app, this.toast, this.sheet, this.keypad);
    this.wire();
    this.select(this.selId);
    this.syncAccount();
    this.setStake(this.stake);
    this.order.duration.setValue(fmtDuration(this.secs));
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
  }

  /** O mercado continua a correr fora do ecrã para liquidar contratos a tempo. */
  update(_dt: number, active: boolean): void {
    this.feed.update();
    if (active) this.chart.draw();
  }

  // ---------- Ligações ----------

  private wire(): void {
    this.bar.onPick = (id) => this.select(id);
    this.chart.onExpand = () => {
      this.expanded = !this.expanded;
      this.build();
    };

    const o = this.order;
    o.onReset = () => {
      this.book.reset();
      if (this.autoOn) this.setAuto(false);
      this.toast.show(`Saldo demo reposto: ${num(START_BALANCE)}`, C.btnPrimary);
    };
    o.stake.onTap = () => {
      let value = this.stake;
      this.keypad.open({
        title: 'Aposta (Coins)',
        value: String(this.stake),
        onChange: (s) => {
          value = Number(s || '0');
          o.stake.setValue(s || '0');
          o.payout.setValue(num(value * (1 + PLUS.profit)));
        },
        onClose: () => this.setStake(Number.isFinite(value) ? value : this.stake),
      });
    };
    o.duration.onTap = () =>
      this.sheet.open(
        'Duração',
        PLUS.durations.map((d) => ({ label: fmtDuration(d), selected: d === this.secs })),
        (i) => {
          this.secs = PLUS.durations[i];
          o.duration.setValue(fmtDuration(this.secs));
        },
      );
    o.dir.onChange = (i) => sound.play(i === 0 ? 'up' : 'down');
    o.onBuy = () => this.open(o.dir.index === 0 ? 'up' : 'down');
    o.onAuto = () => this.setAuto(!this.autoOn);

    this.feed.onTick = (sec) => this.onSecond(sec);
    this.book.onChange = () => this.syncAccount();
    this.book.onSettle = (p) => this.onSettle(p);

    window.addEventListener('keydown', (e) => {
      if (!this.active || this.keypad.isOpen || this.sheet.isOpen) return;
      if (e.key === 'ArrowUp') this.order.dir.select(0);
      else if (e.key === 'ArrowDown') this.order.dir.select(1);
      else if (e.key === 'Enter') this.open(this.order.dir.index === 0 ? 'up' : 'down');
      else return;
      e.preventDefault();
    });
  }

  private select(id: string): void {
    if (id !== this.selId) this.autoPrev = null;
    this.selId = id;
    const m = this.feed.get(id);
    this.bar.select(m);
    this.chart.setMarket(m);
    this.chart.setPositions(this.book.open);
    if (this.autoOn) this.order.setAuto(true, `A analisar ${m.def.name}…`, T.greenText);
  }

  private onSecond(sec: number): void {
    this.book.settleDue(sec);
    const m = this.feed.get(this.selId);
    if (m.last.t === sec) this.chart.onTick();
    this.bar.refresh(m);
    this.contracts.refresh();
    if (this.active && this.book.open.some((p) => p.expiry - sec <= 10 && p.expiry - sec > 0)) sound.play('beep', 0.6);
    if (this.autoOn) this.autoStep();
  }

  private syncAccount(): void {
    this.order.setBalance(this.book.balance);
    this.chart.setPositions(this.book.open);
    this.contracts.refresh();
  }

  private setStake(v: number): void {
    this.stake = Math.min(2000, Math.max(1, Math.round(v * 100) / 100));
    this.order.stake.setValue(num(this.stake));
    this.order.payout.setValue(num(this.stake * (1 + PLUS.profit)));
  }

  // ---------- Contratos ----------

  private open(dir: Direction, auto = false): boolean {
    const p = this.book.buy(this.selId, PLUS, dir, this.stake, this.secs);
    if (!p) {
      sound.play('error');
      this.toast.show('Saldo insuficiente', C.loss);
      return false;
    }
    if (auto) this.contracts.autoIds.add(p.id);
    this.contracts.refresh();
    sound.play('buy');
    const name = this.feed.get(this.selId).def.name;
    this.toast.show(`${auto ? 'Auto · ' : ''}${dir === 'up' ? '▲ Sobe' : '▼ Desce'} · ${name} · ${num(p.stake)} · ${fmtDuration(this.secs)}`, C.btnPrimary);
    return true;
  }

  private onSettle(p: Position): void {
    if (this.contracts.autoIds.has(p.id)) {
      this.autoTrades++;
      this.autoPnl += p.pnl ?? 0;
      if (this.autoOn) this.syncAutoStatus();
    }
    if (p.result === 'win') {
      sound.play('win');
      this.toast.show(`Ganhaste ${fmtSigned(p.pnl ?? 0)}`, C.win, C.winText);
    } else if (p.result === 'loss') {
      sound.play('loss');
      this.toast.show(`Perdeste ${num(p.stake)}`, C.loss);
    } else {
      sound.play('tie');
      this.toast.show('Empate · aposta devolvida');
    }
  }

  // ---------- Modo automático ----------

  /**
   * Cruzamento de médias (5 s vs 20 s) no par selecionado: abre "Sobe" quando a média
   * rápida cruza para cima e "Desce" quando cruza para baixo, um contrato de cada vez.
   */
  private setAuto(on: boolean): void {
    this.autoOn = on;
    this.autoPrev = null;
    const name = this.feed.get(this.selId).def.name;
    if (on) {
      this.autoTrades = 0;
      this.autoPnl = 0;
      sound.play('launch');
      this.toast.show(`Modo automático ligado · ${name}`, C.win, C.winText);
      this.order.setAuto(true, `A analisar ${name}…`, T.greenText);
    } else {
      this.toast.show(`Modo automático desligado · ${this.autoTrades} ${this.autoTrades === 1 ? 'contrato' : 'contratos'}`);
      this.order.setAuto(false, 'Desligado');
    }
    this.bar.setAuto(on);
  }

  private syncAutoStatus(): void {
    const n = this.autoTrades;
    const pnl = this.autoPnl;
    this.order.setAuto(true, `${n} ${n === 1 ? 'contrato' : 'contratos'} · ${fmtSigned(pnl)} Coins`, pnl > 0 ? T.greenText : pnl < 0 ? T.redText : T.muted);
  }

  private autoStep(): void {
    const qs = this.feed.get(this.selId).ticks.map((t) => t.q);
    const bull = sma(qs, FAST) > sma(qs, SLOW);
    const crossed = this.autoPrev !== null && bull !== this.autoPrev;
    const first = this.autoPrev === null;
    this.autoPrev = bull;
    if (this.book.open.some((p) => this.contracts.autoIds.has(p.id))) return;
    if (!crossed && !first) return;
    if (!this.open(bull ? 'up' : 'down', true)) this.setAuto(false);
  }

  // ---------- Layout ----------

  /** Ocupa o espaço por baixo do cabeçalho; a escala segue a altura (com largura mínima). */
  private fit(): void {
    const { W, H } = this;
    const s = Math.min((H - BOTTOM_GAP) / REF_H, W / MIN_W, 1.25);
    this.root.scale.set(s);
    this.DW = W / s;
    // Espaço em baixo, como no Crash e no Binary.
    this.DH = (H - BOTTOM_GAP) / s;
    this.backdrop.clear().rect(0, 0, W, H).fill(C.bgBase);
    this.build();
  }

  /** Barra de pares + gráfico do Binary (centro) | painel de negociação + contratos (direita). */
  private build(): void {
    const { DW, DH } = this;

    const ex = this.expanded;
    this.side.visible = !ex;
    const cw = DW - (ex ? 0 : SIDE_W);
    this.centerBg.clear().rect(0, 0, cw, DH).fill(C.bgBase);
    this.bar.layout(cw);
    this.chart.position.set(PAD, PairBar.HEIGHT);
    this.chart.layout(cw - PAD * 2, DH - PairBar.HEIGHT - PAD);

    this.side.position.set(DW - SIDE_W, 0);
    this.sideBg.clear().rect(0, 0, SIDE_W, DH).fill(T.panel);
    this.order.layout(SIDE_W);
    this.contracts.position.set(0, OrderPanel.HEIGHT);
    this.contracts.layout(SIDE_W, DH - OrderPanel.HEIGHT);

    const kw = 440;
    this.keypad.layout(DW, DH, (DW - kw) / 2, kw);
    this.sheet.layout(DW, DH, (DW - kw) / 2, kw);
    this.toast.place(cw / 2, PairBar.HEIGHT + 70);
  }
}
