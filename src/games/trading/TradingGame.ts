import { Container, Graphics } from 'pixi.js';
import type { GameScene } from '../../core/scene';
import { sound } from '../../core/audio/Sound';
import { C } from '../../core/theme';
import { Keypad } from '../../core/ui/Keypad';
import { Toast } from '../../core/ui/Toast';
import { fmtSigned } from '../../core/format';
import { T } from './theme';
import { num } from './format';
import { Account, DURATIONS, PROFIT, START_CASH, type Contract, type Dir } from './market/Account';
import { Market } from './market/Market';
import { ChartPanel } from './views/ChartPanel';
import { ContractsPanel } from './views/ContractsPanel';
import { OrderPanel } from './views/OrderPanel';
import { Sheet } from '../binary/ui/Sheet';
import { fmtDuration } from '../../core/format';

/** Altura de referência e largura mínima (layout desktop, ocupa o ecrã todo). */
const REF_H = 860;
const MIN_W = 1100;
const BOTTOM_GAP = 16;
const SIDE_W = 420;
const FAST = 5;
const SLOW = 20;

/** Visível no ecrã (ele e todos os pais). */
function shown(c: Container | null): boolean {
  for (; c; c = c.parent) if (!c.visible) return false;
  return true;
}

const sma = (a: number[], n: number) => a.slice(-n).reduce((s, x) => s + x, 0) / n;

/**
 * zunrel Trading: binary trading em formato desktop, com muitos pares de forex.
 * Contratos Sobe / Desce com vencimento, gráfico de velas e modo automático.
 */
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
  private readonly sheet = new Sheet();
  private secs = 60;
  private readonly chart = new ChartPanel();
  private readonly order = new OrderPanel();
  private readonly contracts = new ContractsPanel(this.account);
  private readonly keypad = new Keypad();
  private readonly toast = new Toast();

  private active = false;
  private expanded = false;
  private selId = 'EUR/USD';
  private stake = 10;
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
    this.app.addChild(this.chart, this.side);
    this.root.addChild(this.app, this.frameMask, this.frame, this.toast, this.sheet, this.keypad);
    this.app.mask = this.frameMask;
    this.wire();
    this.select(this.selId);
    this.chart.setPairs(this.market.forex.map((i) => i.id));
    this.select(this.selId);
    this.order.duration.setValue(fmtDuration(this.secs));
    this.syncAccount();
    this.setStake(this.stake);
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

  update(dt: number): void {
    this.market.update(dt);
    if (this.active && shown(this.chart)) this.chart.draw();
  }

  // ---------- Ligações ----------

  private wire(): void {
    this.chart.onPair = (id) => this.select(id);
    this.chart.onExpand = () => {
      this.expanded = !this.expanded;
      this.build();
    };

    const o = this.order;
    o.onReset = () => {
      this.account.reset();
      if (this.autoOn) this.setAuto(false);
      this.toast.show(`Conta demo reposta: ${num(START_CASH)} Coins`, T.btnGray);
    };
    o.stake.onTap = () => {
      let value = this.stake;
      this.keypad.open({
        title: 'Aposta (Coins)',
        value: String(this.stake),
        onChange: (s) => {
          value = Number(s || '0');
          o.stake.setValue(s || '0');
          o.payout.setValue(num(value * (1 + PROFIT)));
        },
        onClose: () => this.setStake(Number.isFinite(value) ? value : this.stake),
      });
    };
    o.duration.onTap = () =>
      this.sheet.open(
        'Duração',
        DURATIONS.map((d) => ({ label: fmtDuration(d), selected: d === this.secs })),
        (i) => {
          this.secs = DURATIONS[i];
          o.duration.setValue(fmtDuration(this.secs));
        },
      );
    o.dir.onChange = (i) => sound.play(i === 0 ? 'up' : 'down');
    o.onBuy = () => this.open(o.dir.index === 0 ? 'up' : 'down');
    o.onAuto = () => this.setAuto(!this.autoOn);

    this.market.onTick = () => this.onSecond();
    this.account.onChange = () => this.syncAccount();
    this.account.onSettle = (c) => this.onSettle(c);

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
    const inst = this.market.get(id);
    this.chart.setInstrument(inst);
    if (this.autoOn) this.order.setAuto(true, `A analisar ${id}…`, T.greenText);
  }

  private onSecond(): void {
    this.account.settleDue();
    this.chart.refresh();
    this.contracts.refresh();
    if (this.active && this.account.open.some((c) => c.expiry - Date.now() <= 3000)) sound.play('beep', 0.5);
    if (this.autoOn) this.autoStep();
  }

  private syncAccount(): void {
    this.order.setBalance(this.account.cash);
    this.chart.setContracts(this.account.open);
    this.contracts.refresh();
  }

  private setStake(v: number): void {
    this.stake = Math.max(1, Math.round(v * 100) / 100);
    this.order.stake.setValue(num(this.stake));
    this.order.payout.setValue(num(this.stake * (1 + PROFIT)));
  }

  private get seconds(): number {
    return this.secs;
  }

  // ---------- Contratos ----------

  private open(dir: Dir, auto = false): boolean {
    const r = this.account.buy(this.selId, dir, this.stake, this.seconds, auto);
    if (typeof r === 'string') {
      sound.play('error');
      this.toast.show(r, T.red);
      return false;
    }
    sound.play(dir === 'up' ? 'up' : 'down');
    const s = this.seconds;
    this.toast.show(`${auto ? 'Auto · ' : ''}${dir === 'up' ? '▲ Sobe' : '▼ Desce'} · ${this.selId} · ${num(r.stake)} · ${s < 60 ? `${s}s` : `${s / 60}m`}`, dir === 'up' ? T.green : T.red, dir === 'up' ? T.onGreen : 0xffffff);
    return true;
  }

  private onSettle(c: Contract): void {
    if (c.auto) {
      this.autoTrades++;
      this.autoPnl += c.pnl ?? 0;
      if (this.autoOn) this.syncAutoStatus();
    }
    if (c.result === 'win') {
      sound.play('win');
      this.toast.show(`Ganhaste ${fmtSigned(c.pnl ?? 0)} · ${c.symId}`, T.green, T.onGreen);
    } else if (c.result === 'loss') {
      sound.play('loss');
      this.toast.show(`Perdeste ${num(c.stake)} · ${c.symId}`, T.red);
    } else {
      sound.play('tie');
      this.toast.show('Empate · aposta devolvida', T.btnGray);
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
    if (on) {
      this.autoTrades = 0;
      this.autoPnl = 0;
      sound.play('launch');
      this.toast.show(`Modo automático ligado · ${this.selId}`, T.green, T.onGreen);
      this.order.setAuto(true, `A analisar ${this.selId}…`, T.greenText);
    } else {
      this.toast.show(`Modo automático desligado · ${this.autoTrades} ${this.autoTrades === 1 ? 'contrato' : 'contratos'}`, T.btnGray);
      this.order.setAuto(false, 'Desligado');
    }
    this.chart.setAuto(on);
  }

  private syncAutoStatus(): void {
    const n = this.autoTrades;
    const pnl = this.autoPnl;
    this.order.setAuto(true, `${n} ${n === 1 ? 'contrato' : 'contratos'} · ${fmtSigned(pnl)} Coins`, pnl > 0 ? T.greenText : pnl < 0 ? T.redText : T.muted);
  }

  private autoStep(): void {
    const inst = this.market.get(this.selId);
    const bull = sma(inst.live, FAST) > sma(inst.live, SLOW);
    const crossed = this.autoPrev !== null && bull !== this.autoPrev;
    const first = this.autoPrev === null;
    this.autoPrev = bull;
    if (this.account.open.some((c) => c.auto)) return;
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

  /** Lista de pares | gráfico grande | painel de negociação + contratos. */
  private build(): void {
    const { DW, DH } = this;
    this.frameMask.clear().rect(0, 0, DW, DH).fill(0xffffff);
    this.frame.clear().rect(0, DH - 1, DW, 1).fill(T.border);

    // Expandido: só o gráfico.
    const ex = this.expanded;
    this.side.visible = !ex;
    const left = 0;
    const cw = DW - left - (ex ? 0 : SIDE_W);
    this.chart.position.set(left, 0);
    this.chart.layout(cw, DH);

    this.side.position.set(DW - SIDE_W, 0);
    this.sideBg.clear().rect(0, 0, SIDE_W, DH).fill(T.panel).rect(0, 0, 1, DH).fill(T.border);
    this.order.layout(SIDE_W);
    this.contracts.position.set(0, OrderPanel.HEIGHT);
    this.contracts.layout(SIDE_W, DH - OrderPanel.HEIGHT);

    const kw = 440;
    this.keypad.layout(DW, DH, (DW - kw) / 2, kw);
    this.sheet.layout(DW, DH, (DW - kw) / 2, kw);
    this.toast.position.set(left + cw / 2, 150);
  }
}
