import { Container, Graphics, Rectangle, type Text } from 'pixi.js';
import gsap from 'gsap';
import { C, R } from './theme';
import { makeText } from './text';
import { coinIcon } from './icons';
import { speaker } from '../../core/icons';
import type { GameScene } from '../../core/scene';
import { sound } from './audio/Sound';
import { clamp, floor2, fmt, fmtMult } from './format';
import { CrashEngine, type Phase } from './game/CrashEngine';
import { CrashView } from './game/CrashView';
import { Wallet } from './game/Wallet';
import { ControlsPanel } from './ui/ControlsPanel';
import { Keypad } from './ui/Keypad';
import { Toast } from './ui/Toast';
import { Button } from './ui/Button';
import { START_BALANCE } from './game/Wallet';
import { AccountClient } from './account';
import { AccountSheet, fmtAccount } from './ui/AccountSheet';

interface Bet {
  amount: number;
  target: number;
  cashed: boolean;
}

const HEADER_H = 64;
const PAD = 16;
const MIN_TARGET = 1.01;
/** Em cada 5 apostas: 3 ganham e 2 perdem (ordem baralhada). Só créditos fictícios. */
const WINS_PER_5 = 3;
const rand = () => crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;
const HELP =
  '1. Escolhe o montante e o multiplicador em "Retirar em".\n' +
  '2. Carrega em Apostar antes da ronda começar.\n' +
  '3. Se o multiplicador chegar ao teu "Retirar em" (ou carregares em Retirar), ganhas montante × multiplicador; se rebentar antes, perdes a aposta.\n' +
  'Créditos fictícios, sem dinheiro real.';
const MAX_TARGET = 1_000_000;

/** Crash embutido no site zunrel. */
export class CrashGame implements GameScene {
  readonly view = new Container();
  private readonly root = this.view;
  private active = false;
  private readonly header = new Container();
  private readonly headerBg = new Graphics();
  private readonly logo: Text;
  private readonly balancePill = new Container();
  private readonly resetBtn = new Button({ label: 'Repor', width: 88, height: 44, color: C.btnSecondary, fontSize: 16 });
  private readonly balanceBg = new Graphics();
  private readonly balanceText: Text;
  /** Botão de som (ligar/desligar) no cabeçalho. */
  private readonly soundBtn = new Container();
  private readonly soundIcon = new Graphics();
  /** Telemóvel: botão "?" que abre o "Como jogar". */
  private readonly helpBtn = new Container();
  /** Computador: "Como jogar" no espaço livre por baixo dos controlos. */
  private readonly help = new Container();
  private readonly helpTitle: Text;
  private readonly helpText: Text;
  /** Telemóvel: janela com o "Como jogar". */
  private readonly helpSheet = new Container();
  private readonly helpSheetBg = new Graphics();
  private readonly helpSheetTitle: Text;
  private readonly helpSheetText: Text;
  private readonly card = new Graphics();
  private readonly scene = new CrashView();
  private readonly panel: ControlsPanel;
  private readonly keypad = new Keypad();
  private readonly toast = new Toast();
  /** Conta (número + PIN) para guardar o saldo no servidor. */
  private readonly account = new AccountClient();
  private readonly accountSheet = new AccountSheet();
  private readonly accountBtn = new Container();
  private readonly accountIcon = new Graphics();
  private wide = false;

  private readonly wallet = new Wallet();
  private readonly engine: CrashEngine;
  private shownBalance = { v: 0 };

  private amount = 1;
  private target = 2;
  private bet: Bet | null = null;
  private queued: { amount: number; target: number } | null = null;
  private autoOn = false;
  private profit = 0;
  private lastTick = 0;
  /** Resultados ainda por sair neste bloco de 5 apostas (true = ganha). */
  private bag: boolean[] = [];

  constructor() {
    this.engine = new CrashEngine({
      phase: (p) => this.onPhase(p),
      tick: (m) => this.onTick(m),
    });
    this.engine.pickCrash = () => this.pickCrash();
    this.logo = makeText('Crash', { fontSize: 26, fontWeight: '800', fill: C.text });
    this.logo.anchor.set(0, 0.5);
    this.balanceText = makeText('', { fontSize: 17, fontWeight: '700', fill: C.text });
    this.balanceText.anchor.set(1, 0.5);
    const helpStyle = { fontSize: 14, fontWeight: '500', fill: C.textMuted, wordWrap: true, lineHeight: 20 } as const;
    this.helpTitle = makeText('Como jogar', { fontSize: 16, fontWeight: '800', fill: C.text });
    this.helpText = makeText(HELP, helpStyle);
    this.help.addChild(this.helpTitle, this.helpText);
    this.helpSheetTitle = makeText('Como jogar', { fontSize: 20, fontWeight: '800', fill: C.text });
    this.helpSheetText = makeText(HELP, { ...helpStyle, fontSize: 16, lineHeight: 23 });
    this.helpSheet.addChild(this.helpSheetBg, this.helpSheetTitle, this.helpSheetText);
    this.helpSheet.visible = false;
    this.helpSheet.eventMode = 'static';
    this.helpSheet.cursor = 'pointer';
    this.helpSheet.on('pointertap', () => (this.helpSheet.visible = false));

    this.panel = new ControlsPanel(
      [
        { label: '½', onTap: () => this.setAmount(this.amount / 2) },
        { label: '2×', onTap: () => this.setAmount(Math.min(this.amount * 2, this.wallet.balance)) },
      ],
      [
        { icon: 'down', onTap: () => this.stepTarget(-1) },
        { icon: 'up', onTap: () => this.stepTarget(1) },
      ],
    );

    this.buildHeader();
    this.root.addChild(this.card, this.scene, this.panel, this.help, this.header, this.accountSheet, this.toast, this.keypad, this.helpSheet);

    this.panel.play.onTap = () => this.onPlay();
    this.panel.mode.onChange = (i) => {
      if (i === 0) this.autoOn = false;
      this.refresh();
    };
    this.panel.amount.onFocus = () => this.edit('amount');
    this.panel.cashout.onFocus = () => this.edit('cashout');

    this.wallet.onChange = (b) => {
      this.animateBalance(b);
      this.account.saveSoon(b);
    };
    this.wireAccount();
    this.shownBalance.v = this.wallet.balance;
    this.balanceText.text = fmt(this.wallet.balance);

    this.setAmount(Math.min(1, this.wallet.balance));
    this.setTarget(2);
    window.addEventListener('keydown', (e) => {
      if (this.active && e.code === 'Space' && !this.keypad.isOpen) {
        e.preventDefault();
        this.onPlay();
      }
    });

    this.scene.enterCountdown();
    this.scene.setRound(this.engine.round, this.profit);
    this.refresh();
  }

  resize(width: number, height: number): void {
    this.layout(width, height);
  }

  setActive(active: boolean): void {
    this.active = active;
    if (!active) sound.stopEngine();
    else if (this.engine.phase === 'running') sound.startEngine();
  }

  private buildHeader(): void {
    this.balancePill.addChild(this.balanceBg, this.balanceText);
    const coin = coinIcon(24);
    coin.label = 'coin';
    this.balancePill.addChild(coin);
    this.balancePill.eventMode = 'static';
    this.balancePill.cursor = 'pointer';
    this.balancePill.on('pointertap', () => this.toast.show('Créditos demo — sem dinheiro real'));
    this.resetBtn.onTap = () => this.resetWallet();
    const round = (c: Container, onTap: () => void) => {
      c.addChildAt(new Graphics().roundRect(-22, -22, 44, 44, R.input).fill(C.bgInput), 0);
      c.eventMode = 'static';
      c.cursor = 'pointer';
      c.hitArea = new Rectangle(-22, -22, 44, 44);
      c.on('pointertap', () => {
        onTap();
        gsap.fromTo(c.scale, { x: 0.85, y: 0.85 }, { x: 1, y: 1, duration: 0.3, ease: 'back.out(3)' });
      });
    };
    this.soundBtn.addChild(speaker(this.soundIcon, sound.muted));
    round(this.soundBtn, () => {
      sound.toggleMute();
      if (!sound.muted) sound.play('click');
      this.toast.show(sound.muted ? 'Som desligado' : 'Som ligado');
    });
    sound.onMuteChange = (m) => speaker(this.soundIcon, m);
    const q = makeText('?', { fontSize: 22, fontWeight: '800', fill: C.text });
    q.anchor.set(0.5);
    this.helpBtn.addChild(q);
    round(this.helpBtn, () => {
      sound.play('click');
      this.helpSheet.visible = true;
      gsap.fromTo(this.helpSheet, { alpha: 0 }, { alpha: 1, duration: 0.25 });
    });
    this.drawAccountIcon();
    this.accountBtn.addChild(this.accountIcon);
    round(this.accountBtn, () => {
      sound.play('click');
      this.openAccount();
    });
    this.header.addChild(this.headerBg, this.logo, this.accountBtn, this.soundBtn, this.helpBtn, this.resetBtn, this.balancePill);
  }

  // ---------- Conta ----------

  /** Ícone de pessoa (verde quando há sessão iniciada). */
  private drawAccountIcon(): void {
    const color = this.account.session ? C.win : C.text;
    this.accountIcon.clear().circle(0, -5, 5).stroke({ width: 2.2, color });
    this.accountIcon.arc(0, 11, 9, Math.PI * 1.08, Math.PI * 1.92).stroke({ width: 2.2, color, cap: 'round' });
  }

  private busy(): boolean {
    return !!((this.bet && !this.bet.cashed) || this.queued || this.autoOn);
  }

  private openAccount(): void {
    const s = this.account.session;
    this.accountSheet.open(s ? { kind: 'in', account: s.account } : { kind: 'out' });
  }

  /** Pede um número no teclado numérico (só algarismos). */
  private askDigits(title: string): Promise<string | null> {
    return new Promise((resolve) => {
      let value = '';
      this.keypad.open({
        title,
        value: '',
        onChange: (v) => (value = v.replace(/\D/g, '')),
        onClose: () => resolve(value || null),
      });
    });
  }

  private wireAccount(): void {
    const sheet = this.accountSheet;
    sheet.onCreate = async () => {
      const pin = await this.askDigits('Escolhe um PIN (4 a 8 algarismos)');
      if (!pin) return;
      if (!/^\d{4,8}$/.test(pin)) return this.accountError('O PIN tem de ter 4 a 8 algarismos');
      try {
        await this.account.register(pin, this.wallet.balance);
        this.drawAccountIcon();
        sound.play('cashout');
        sheet.open({ kind: 'created', account: this.account.session!.account });
      } catch (e) {
        this.accountError((e as Error).message);
      }
    };
    sheet.onLogin = async () => {
      if (this.busy()) return this.accountError('Termina a aposta antes de entrar');
      const acc = await this.askDigits('Número da conta (8 algarismos)');
      if (!acc) return;
      const pin = await this.askDigits('PIN');
      if (!pin) return;
      try {
        const balance = await this.account.login(acc, pin);
        this.wallet.load(balance);
        this.drawAccountIcon();
        sound.play('cashout');
        sheet.close();
        this.toast.show(`Conta ${fmtAccount(acc)} · saldo ${fmt(balance)}`, C.btnPrimary);
      } catch (e) {
        this.accountError((e as Error).message);
      }
    };
    sheet.onLogout = async () => {
      await this.account.logout();
      this.drawAccountIcon();
      sheet.close();
      this.toast.show('Saíste da conta. O saldo continua guardado nela.');
    };
    // Sessão guardada: vai buscar o saldo da conta ao abrir o jogo.
    if (this.account.session) {
      void this.account.me().then((balance) => {
        this.drawAccountIcon();
        if (balance === null || this.busy()) return;
        this.wallet.load(balance);
      });
    }
  }

  private accountError(msg: string): void {
    sound.play('error');
    this.toast.show(msg, C.loss);
  }

  /** Repõe o saldo demo (só sem aposta em jogo, para não baralhar a ronda). */
  private resetWallet(): void {
    if ((this.bet && !this.bet.cashed) || this.queued || this.autoOn) {
      sound.play('error');
      this.toast.show('Termina a aposta antes de repor', C.loss);
      return;
    }
    this.wallet.refill();
    this.toast.show(`Saldo demo reposto: ${fmt(START_BALANCE)}`, C.btnPrimary);
  }

  /** Layout responsivo: coluna única no telemóvel, duas colunas em ecrãs largos. */
  private layout(sw: number, sh: number): void {
    const wide = sw / sh > 1.05 && sw >= 700;
    this.wide = wide;
    const designH = wide ? 680 : 800;
    let scale = sw / 400;
    if (wide || sh / scale < designH) scale = sh / designH;
    const W = sw / scale;
    const H = sh / scale;
    this.root.scale.set(scale);

    const contentW = Math.min(W, wide ? 1200 / scale : 480);
    const ox = (W - contentW) / 2;

    // Cabeçalho
    this.headerBg.clear().rect(0, 0, W, HEADER_H).fill(C.bgBase);
    this.logo.position.set(ox + PAD + 4, HEADER_H / 2);
    this.layoutBalance(ox + contentW - PAD);

    const top = HEADER_H + 4;
    const bottom = H - PAD;
    this.card.clear();
    if (wide) {
      const panelW = 360;
      const cardH = bottom - top;
      this.card.roundRect(ox + PAD, top, panelW, cardH, R.panel).fill(C.bgPanel);
      this.panel.position.set(ox + PAD * 2, top + PAD);
      this.panel.layout(panelW - PAD * 2);
      this.scene.position.set(ox + PAD + panelW + 12, top);
      this.scene.layout(contentW - PAD * 2 - panelW - 12, cardH, false);
    } else {
      const panelH = ControlsPanel.HEIGHT + PAD * 2;
      const stageH = Math.max(260, bottom - top - panelH);
      const cardW = contentW - PAD * 2;
      this.card.roundRect(ox + PAD, top, cardW, stageH + panelH, R.panel).fill(C.bgPanel);
      this.scene.position.set(ox + PAD, top);
      this.scene.layout(cardW, stageH, true);
      this.panel.position.set(ox + PAD * 2, top + stageH + PAD);
      this.panel.layout(cardW - PAD * 2);
    }
    // Como jogar: no computador, no espaço livre do cartão dos controlos; no telemóvel, botão "?".
    this.help.visible = wide;
    this.helpBtn.visible = !wide;
    if (!wide) {
      const cx = ox + contentW - PAD - 30;
      this.soundBtn.position.set(cx, top + 30);
      this.helpBtn.position.set(cx - 52, top + 30);
      this.accountBtn.position.set(cx - 104, top + 30);
    }
    if (wide) {
      const hw = 360 - PAD * 2;
      this.helpText.style.wordWrapWidth = hw;
      this.helpTitle.position.set(0, 0);
      this.helpText.position.set(0, 26);
      const free = bottom - (top + PAD + ControlsPanel.HEIGHT + 24) - PAD;
      const needed = 26 + this.helpText.height;
      this.help.scale.set(Math.min(1, free / needed));
      this.help.visible = free > 60;
      this.help.position.set(ox + PAD * 2, bottom - PAD - needed * this.help.scale.y);
    }
    const sw2 = Math.min(contentW - PAD * 2, 440);
    this.helpSheetText.style.wordWrapWidth = sw2 - 40;
    const sh2 = 20 + 30 + this.helpSheetText.height + 24;
    this.helpSheetBg.clear().rect(0, 0, W, H).fill({ color: 0x000000, alpha: 0.55 });
    this.helpSheetBg.roundRect((W - sw2) / 2, (H - sh2) / 2, sw2, sh2, R.panel).fill(C.bgPanel);
    this.helpSheetTitle.position.set((W - sw2) / 2 + 20, (H - sh2) / 2 + 20);
    this.helpSheetText.position.set((W - sw2) / 2 + 20, (H - sh2) / 2 + 56);
    this.accountSheet.layout(W, H);
    this.toast.position.set(this.scene.x + this.scene.stageWidth / 2, this.scene.y + this.scene.noticeY);
    this.keypad.layout(W, H, ox, contentW);
  }

  private layoutBalance(right: number): void {
    const w = Math.max(130, this.balanceText.width + 64);
    const h = 44;
    this.balanceBg.clear().roundRect(-w, -h / 2, w, h, R.input).fill(C.bgInput);
    this.balanceText.position.set(-16, 0);
    const coin = this.balancePill.getChildByLabel('coin');
    if (coin) coin.position.set(-w + 24, 0);
    this.balancePill.position.set(right, HEADER_H / 2);
    this.resetBtn.position.set(right - w - 10 - 88, HEADER_H / 2 - 22);
    // Computador: som ao lado do Repor. Telemóvel: som e "?" no canto do ecrã do jogo (ver layout).
    this.soundBtn.position.set(right - w - 10 - 88 - 10 - 22, HEADER_H / 2);
    if (this.wide) this.accountBtn.position.set(this.soundBtn.x - 52, HEADER_H / 2);
  }

  private animateBalance(to: number): void {
    gsap.to(this.shownBalance, {
      v: to,
      duration: 0.6,
      ease: 'power2.out',
      onUpdate: () => {
        this.balanceText.text = fmt(this.shownBalance.v);
        this.layoutBalance(this.balancePill.x);
      },
    });
    gsap.fromTo(this.balancePill.scale, { x: 1.06, y: 1.06 }, { x: 1, y: 1, duration: 0.4, ease: 'back.out(3)' });
  }

  // ---------- Ciclo de jogo ----------

  update(dt: number, active: boolean): void {
    if (!active) return;
    this.engine.update(Math.min(dt, 100));
    const e = this.engine;
    if (e.phase === 'countdown') {
      this.scene.updateCountdown(e.remaining, e.countdownMs);
      const sec = Math.ceil(e.remaining / 1000);
      if (sec !== this.lastTick && sec <= 3 && sec > 0) sound.play('tick');
      this.lastTick = sec;
    }
    else if (e.phase === 'running') this.scene.updateRunning(e.flightMs, e.multiplier);
  }

  private onPhase(p: Phase): void {
    const e = this.engine;
    if (p === 'countdown') {
      this.scene.enterCountdown();
      this.scene.setRound(e.round, this.profit);
      if (this.queued) {
        this.bet = { ...this.queued, cashed: false };
        this.queued = null;
      } else if (this.autoOn) {
        this.placeBet();
      }
    } else if (p === 'running') {
      this.scene.enterRunning();
      sound.play('launch');
      sound.startEngine();
    } else {
      sound.stopEngine();
      sound.play('crash');
      this.scene.enterCrashed(e.flightMs, e.multiplier);
      this.scene.history.push(e.multiplier);
      if (this.bet && !this.bet.cashed) {
        this.settle(-this.bet.amount);
        if (this.bet.amount > 0) this.toast.show(`Perdeste ${fmt(this.bet.amount)}`, C.loss);
      }
      this.bet = null;
    }
    this.refresh();
  }

  /**
   * Com aposta em jogo: tira o resultado do saco (3 ganhos e 2 perdas por cada 5 apostas).
   * Ganho → o crash acontece bem depois do "Retirar em"; perda → antes dele.
   * Sem aposta, a ronda segue aleatória.
   */
  private pickCrash(): number | null {
    const b = this.bet;
    if (!b || b.cashed) return null;
    if (!this.bag.length) {
      this.bag = Array.from({ length: 5 }, (_, i) => i < WINS_PER_5);
      for (let i = this.bag.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        [this.bag[i], this.bag[j]] = [this.bag[j], this.bag[i]];
      }
    }
    const win = this.bag.pop()!;
    const t = Math.max(MIN_TARGET, b.target);
    if (win) return t * (1.15 + rand() * 1.5);
    // Perda: rebenta entre 1.00 e um pouco antes do alvo.
    return 1 + rand() * Math.max(0, (t - 1) * 0.85);
  }

  private onTick(m: number): void {
    sound.setEngineMultiplier(m);
    const b = this.bet;
    if (b && !b.cashed && b.target >= MIN_TARGET && m >= b.target) this.cashOut(b.target);
    else if (b && !b.cashed) this.panel.play.setText(`Retirar ${fmt(floor2(b.amount * m))}`);
  }

  private cashOut(m: number): void {
    const b = this.bet;
    if (!b || b.cashed || this.engine.phase !== 'running') return;
    b.cashed = true;
    const payout = floor2(b.amount * m);
    this.wallet.add(payout);
    this.settle(payout - b.amount);
    sound.play('cashout');
    this.scene.popCashout(`${fmtMult(m)}  +${fmt(payout)}`);
    this.toast.show(`Ganhaste ${fmt(payout)} · ${fmtMult(m)}`, C.win, C.winText);
    this.refresh();
  }

  private settle(delta: number): void {
    this.profit = Math.round((this.profit + delta) * 100) / 100;
    this.scene.setRound(this.engine.round, this.profit);
  }

  /** Desconta a aposta; devolve false se não houver saldo. */
  private reserve(): boolean {
    if (this.wallet.take(this.amount)) {
      sound.play('bet');
      return true;
    }
    sound.play('error');
    this.panel.amount.shake();
    this.toast.show('Saldo insuficiente', C.loss);
    return false;
  }

  private placeBet(): void {
    if (!this.reserve()) {
      this.autoOn = false;
      return;
    }
    const bet = { amount: this.amount, target: this.target };
    if (this.engine.phase === 'countdown') this.bet = { ...bet, cashed: false };
    else this.queued = bet;
  }

  private onPlay(): void {
    const phase = this.engine.phase;
    if (this.panel.mode.index === 1) {
      this.autoOn = !this.autoOn;
      if (this.autoOn && phase === 'countdown' && !this.bet) this.placeBet();
      if (!this.autoOn && this.queued) this.cancelQueued();
    } else if (phase === 'countdown' && this.bet) {
      this.wallet.add(this.bet.amount);
      this.bet = null;
    } else if (phase === 'running' && this.bet && !this.bet.cashed) {
      this.cashOut(this.engine.multiplier);
    } else if (this.queued) {
      this.cancelQueued();
    } else if (!(phase === 'countdown' && this.bet)) {
      this.placeBet();
    }
    this.refresh();
  }

  private cancelQueued(): void {
    if (!this.queued) return;
    this.wallet.add(this.queued.amount);
    this.queued = null;
  }

  /** Atualiza o botão principal e bloqueia campos durante uma aposta ativa. */
  private refresh(): void {
    const { play, amount, cashout, mode } = this.panel;
    const phase = this.engine.phase;
    const b = this.bet;
    let label: string;
    let secondary = false;

    if (mode.index === 1) {
      label = this.autoOn ? 'Parar auto' : 'Iniciar auto';
      secondary = this.autoOn;
    } else if (phase === 'running' && b && !b.cashed) {
      label = `Retirar ${fmt(floor2(b.amount * this.engine.multiplier))}`;
    } else if (phase === 'countdown' && b) {
      label = 'Cancelar aposta';
      secondary = true;
    } else if (this.queued) {
      label = 'Cancelar próxima ronda';
      secondary = true;
    } else {
      label = phase === 'countdown' ? 'Apostar' : 'Jogar próxima ronda';
    }
    play.setText(label);
    play.setColor(secondary ? C.btnSecondary : C.btnPrimary);

    const busy = this.autoOn || !!this.queued || (!!b && !b.cashed);
    amount.setLocked(busy);
    cashout.setLocked(busy);
    mode.setLocked(busy);
  }

  // ---------- Valores ----------

  private setAmount(v: number): void {
    this.amount = clamp(floor2(Number.isFinite(v) ? v : 0), 0, 1e9);
    this.panel.amount.setValue(fmt(this.amount));
    this.updateGain();
  }

  private setTarget(v: number): void {
    this.target = clamp(Math.round((Number.isFinite(v) ? v : 2) * 100) / 100, MIN_TARGET, MAX_TARGET);
    this.panel.cashout.setValue(this.target.toFixed(2));
    this.updateGain();
  }

  private stepTarget(dir: 1 | -1): void {
    const v = this.target;
    const step = dir > 0 ? (v < 2 ? 0.1 : v < 10 ? 0.5 : 1) : v <= 2 ? 0.1 : v <= 10 ? 0.5 : 1;
    this.setTarget(v + dir * step);
  }

  private updateGain(): void {
    this.panel.gain.setValue(fmt(floor2(this.amount * (this.target - 1))));
  }

  private edit(which: 'amount' | 'cashout'): void {
    const field = which === 'amount' ? this.panel.amount : this.panel.cashout;
    const current = which === 'amount' ? this.amount.toFixed(2) : this.target.toFixed(2);
    field.setFocused(true);
    this.keypad.open({
      title: which === 'amount' ? 'Montante' : 'Retirar em (×)',
      value: current,
      onChange: (s) => {
        const n = Number(s || '0');
        if (which === 'amount') {
          this.amount = floor2(n);
          field.setValue(s || '0');
          this.updateGain();
        } else {
          field.setValue(s || '0');
          this.target = n;
          this.updateGain();
        }
      },
      onClose: () => {
        field.setFocused(false);
        if (which === 'amount') this.setAmount(this.amount);
        else this.setTarget(this.target);
      },
    });
  }
}

