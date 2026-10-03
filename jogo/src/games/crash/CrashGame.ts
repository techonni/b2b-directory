import { Container, Graphics, Rectangle, type Text } from 'pixi.js';
import gsap from 'gsap';
import { C, R, FONT_MONO } from './theme';
import { makeText } from './text';
import { logoMark, drawIcon, type IconKind } from './icons';
import type { GameScene } from '../../core/scene';
import { ScrollBox, scrollGesture } from '../../core/ui/ScrollBox';
import { sound } from './audio/Sound';
import { clamp, floor2, fmt, fmtInput, fmtMult, fmtSigned } from './format';
import { CrashEngine, type Phase } from './game/CrashEngine';
import { CrashView } from './game/CrashView';
import { Wallet, START_BALANCE } from './game/Wallet';
import { AutoCard, BetCard, PlayCard, drawCard } from './ui/Card';
import { Keypad } from './ui/Keypad';
import { Toast } from './ui/Toast';
import { AccountClient } from './account';
import { AccountSheet, fmtAccount } from './ui/AccountSheet';

interface Bet {
  amount: number;
  target: number;
  /** Levantar automático ligado: levanta sozinho ao chegar ao multiplicador. */
  auto: boolean;
  cashed: boolean;
}

const PAD = 16;
const HEADER_COMPACT = 56;
const MIN_BET = 0.1;
const MIN_TARGET = 1.01;
const MAX_TARGET = 1_000_000;
/** Em cada 5 apostas: 3 ganham e 2 perdem (ordem baralhada). Só moedas virtuais. */
const WINS_PER_5 = 3;
const rand = () => crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;
const HELP =
  '1. Escolhe o valor da aposta e, se quiseres, o multiplicador do levantar automático.\n' +
  '2. Carrega em Apostar antes de a ronda começar.\n' +
  '3. Carrega em Levantar antes de a curva cair: recebes aposta × multiplicador. Se a curva cair antes, perdes a aposta. Com o levantar automático ligado, levantas sozinho ao chegar ao multiplicador escolhido.\n' +
  'Moedas virtuais, sem dinheiro real.';

/** Ponto Alto: jogo de curva (tipo crash) do Zunrel, com moedas virtuais. */
export class CrashGame implements GameScene {
  readonly view = new Container();
  private readonly root = this.view;
  private active = false;

  // Cabeçalho
  private readonly header = new Container();
  private readonly brand = new Container();
  private readonly brandZunrel: Text;
  private readonly brandSep: Text;
  private readonly brandGame: Text;
  private readonly demoPill = new Container();
  private readonly balancePill = new Container();
  private readonly balanceBg = new Graphics();
  private readonly balanceLabel: Text;
  private readonly balanceText: Text;
  private readonly plusBtn = new Container();
  private readonly soundBtn: IconButton;
  private readonly helpBtn: IconButton;
  private readonly accountBtn: IconButton;
  private readonly accountDot = new Graphics();

  // Corpo
  private readonly body = new Container();
  private readonly dock = new Graphics();
  private readonly scroll = new ScrollBox();
  private readonly scene = new CrashView();
  private readonly betCard: BetCard;
  private readonly autoCard: AutoCard;
  private readonly play = new PlayCard();

  // Janelas
  private readonly helpSheet = new Container();
  private readonly helpSheetBg = new Graphics();
  private readonly helpSheetTitle: Text;
  private readonly helpSheetText: Text;
  private readonly keypad = new Keypad();
  private readonly toast = new Toast();
  private readonly account = new AccountClient();
  private readonly accountSheet = new AccountSheet();

  private compact = true;

  private readonly wallet = new Wallet();
  private readonly engine: CrashEngine;
  private shownBalance = { v: 0 };

  private amount = 10;
  private target = 2;
  private autoCash = true;
  private bet: Bet | null = null;
  private queued: { amount: number; target: number; auto: boolean } | null = null;
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

    this.brandZunrel = makeText('Zunrel', { fontSize: 15, fontWeight: '600', fill: C.text });
    this.brandSep = makeText('/', { fontSize: 15, fontWeight: '400', fill: C.dot });
    this.brandGame = makeText('Ponto Alto', { fontSize: 15, fontWeight: '600', fill: C.text });
    this.balanceLabel = makeText('Saldo', { fontSize: 14, fontWeight: '500', fill: C.muted });
    this.balanceText = makeText('', { fontSize: 15, fontWeight: '600', fontFamily: FONT_MONO, fill: C.text });
    this.soundBtn = new IconButton(sound.muted ? 'muted' : 'sound');
    this.helpBtn = new IconButton('help');
    this.accountBtn = new IconButton('user');

    this.helpSheetTitle = makeText('Como jogar', { fontSize: 20, fontWeight: '600', fill: C.text });
    this.helpSheetText = makeText(HELP, { fontSize: 14, fontWeight: '500', fill: C.muted, wordWrap: true, lineHeight: 21 });
    this.helpSheet.addChild(this.helpSheetBg, this.helpSheetTitle, this.helpSheetText);
    this.helpSheet.visible = false;
    this.helpSheet.eventMode = 'static';
    this.helpSheet.cursor = 'pointer';
    this.helpSheet.on('pointertap', () => (this.helpSheet.visible = false));

    this.betCard = new BetCard([
      { label: '½', onTap: () => this.setAmount(this.amount / 2) },
      { label: '2×', onTap: () => this.setAmount(Math.min(this.amount * 2, this.wallet.balance)) },
    ]);
    this.autoCard = new AutoCard([
      { label: '−', onTap: () => this.stepTarget(-1) },
      { label: '+', onTap: () => this.stepTarget(1) },
    ]);

    this.buildHeader();
    this.body.addChild(this.scene, this.betCard, this.autoCard);
    this.scroll.visible = false;
    this.root.addChild(this.dock, this.body, this.scroll, this.header, this.play, this.accountSheet, this.helpSheet, this.keypad, this.toast);

    this.betCard.quick.onTap = (i) => this.setAmount(i < 3 ? BetCard.QUICK[i] : floor2(this.wallet.balance));
    this.autoCard.quick.onTap = (i) => this.setTarget([1.5, 2, 3, 10][i]);
    this.autoCard.toggle.onChange = (on) => {
      this.autoCash = on;
      this.autoCard.setActive(on);
      this.refresh();
    };
    this.betCard.field.onFocus = () => this.edit('amount');
    this.autoCard.field.onFocus = () => this.edit('target');
    this.play.cta.onTap = () => this.onPlay();
    this.play.mode.onChange = (i) => {
      if (i === 0) this.autoOn = false;
      this.refresh();
    };

    this.wallet.onChange = (b) => {
      this.animateBalance(b);
      this.account.saveSoon(b);
    };
    this.wireAccount();
    this.shownBalance.v = this.wallet.balance;
    this.balanceText.text = fmt(this.wallet.balance);

    this.setAmount(Math.min(10, floor2(this.wallet.balance)));
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

  // ---------- Cabeçalho ----------

  private buildHeader(): void {
    const mark = logoMark(26);
    mark.label = 'mark';
    this.brand.addChild(mark, this.brandZunrel, this.brandSep, this.brandGame, this.demoPill);
    const demo = makeText('Demo · moedas virtuais', { fontSize: 12, fontWeight: '500', fill: C.muted });
    demo.anchor.set(0, 0.5);
    this.demoPill.addChild(new Graphics(), demo);

    const plusBg = new Graphics().circle(0, 0, 13).fill(C.text);
    const plus = new Graphics().moveTo(-5, 0).lineTo(5, 0).moveTo(0, -5).lineTo(0, 5).stroke({ width: 2, color: C.white, cap: 'round' });
    this.plusBtn.addChild(plusBg, plus);
    this.plusBtn.eventMode = 'static';
    this.plusBtn.cursor = 'pointer';
    this.plusBtn.hitArea = new Rectangle(-18, -18, 36, 36);
    this.plusBtn.on('pointertap', () => {
      sound.play('click');
      this.resetWallet();
    });
    this.balanceText.anchor.set(0, 0.5);
    this.balanceLabel.anchor.set(0, 0.5);
    this.balancePill.addChild(this.balanceBg, this.balanceLabel, this.balanceText, this.plusBtn);

    this.soundBtn.onTap = () => {
      sound.toggleMute();
      this.soundBtn.setKind(sound.muted ? 'muted' : 'sound');
      if (!sound.muted) sound.play('click');
      this.toast.show(sound.muted ? 'Som desligado' : 'Som ligado');
    };
    this.helpBtn.onTap = () => {
      this.helpSheet.visible = true;
      gsap.fromTo(this.helpSheet, { alpha: 0 }, { alpha: 1, duration: 0.2 });
    };
    this.accountBtn.onTap = () => this.openAccount();
    this.accountDot.circle(0, 0, 4.5).fill(C.blue).stroke({ width: 2, color: C.white });
    this.accountBtn.addChild(this.accountDot);
    this.drawAccountIcon();
    this.header.addChild(this.brand, this.balancePill, this.soundBtn, this.helpBtn, this.accountBtn);
  }

  /** Posiciona o cabeçalho: `left`/`right` = margens do conteúdo, `cy` = linha central. */
  private layoutHeader(left: number, right: number, cy: number, compact: boolean): void {
    const size = compact ? 34 : 40;
    const gap = compact ? 6 : 12;
    for (const b of [this.soundBtn, this.helpBtn, this.accountBtn]) b.setSize(size);
    let x = right - size;
    for (const b of [this.accountBtn, this.helpBtn, this.soundBtn]) {
      b.position.set(x, cy - size / 2);
      x -= size + gap;
    }
    this.accountDot.position.set(size - 7, 7);

    // Saldo (no telemóvel só o valor).
    this.balanceLabel.visible = !compact;
    this.balanceText.style.fontSize = compact ? 14 : 15;
    const pad = compact ? 10 : 16;
    this.balanceLabel.position.set(pad, 0);
    const vx = compact ? pad : pad + this.balanceLabel.width + 10;
    this.balanceText.position.set(vx, 0);
    const w = vx + this.balanceText.width + (compact ? 8 : 10) + 26 + (compact ? 6 : 8);
    const h = compact ? 36 : 40;
    this.balanceBg.clear().roundRect(0, -h / 2, w, h, h / 2).fill(C.border);
    this.balanceBg.roundRect(1, -h / 2 + 1, w - 2, h - 2, h / 2 - 1).fill(C.card);
    this.plusBtn.position.set(w - (compact ? 6 : 8) - 13, 0);
    this.balancePill.position.set(x + gap - w, cy);

    // Marca
    this.brand.position.set(left, cy);
    this.brand.getChildAt(0).position.set(13, 0);
    this.brandZunrel.visible = this.brandSep.visible = this.demoPill.visible = !compact;
    let bx = 26 + 10;
    for (const t of [this.brandZunrel, this.brandSep, this.brandGame]) {
      if (!t.visible) continue;
      t.anchor.set(0, 0.5);
      t.position.set(bx, 0);
      bx += t.width + 10;
    }
    if (!compact) {
      const label = this.demoPill.getChildAt(1) as Text;
      const pw = Math.ceil(label.width) + 18;
      const pill = this.demoPill.getChildAt(0) as Graphics;
      pill.clear().roundRect(0, -12, pw, 24, 12).fill(C.border);
      pill.roundRect(1, -11, pw - 2, 22, 11).fill(C.bg);
      label.position.set(9, 0);
      this.demoPill.position.set(bx + 2, 0);
    }
  }

  // ---------- Conta ----------

  /** Ponto azul no ícone da conta quando há sessão iniciada. */
  private drawAccountIcon(): void {
    this.accountDot.visible = !!this.account.session;
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
        this.toast.show(`Conta ${fmtAccount(acc)} · saldo ${fmt(balance)}`, C.blue);
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
    if (this.busy()) {
      sound.play('error');
      this.toast.show('Termina a aposta antes de repor', C.loss);
      return;
    }
    this.wallet.refill();
    this.toast.show(`Saldo reposto: ${fmt(START_BALANCE)} moedas`, C.blue);
  }

  // ---------- Layout ----------

  /** Computador: cabeçalho + cartão do jogo + 3 cartões. Telemóvel: tudo numa coluna (com scroll) e o botão fixo em baixo. */
  private layout(sw: number, sh: number): void {
    const wide = sw >= 820 && sw / sh > 1.1;
    this.compact = !wide;
    const scale = wide ? Math.min(sw / 1280, sh / 808) : Math.min(sw / 400, 1.5);
    const W = sw / scale;
    const H = sh / scale;
    this.root.scale.set(scale);
    this.helpSheet.visible = false;

    if (wide) {
      const cw = Math.min(W - 64, 1216);
      const ox = (W - cw) / 2;
      const cardsH = 222;
      const cardsY = H - 22 - cardsH;
      const stageY = 22 + 44 + 14;
      const stageH = Math.max(300, cardsY - 14 - stageY);
      this.layoutHeader(ox, ox + cw, 44, false);

      this.scroll.visible = false;
      this.dock.clear();
      for (const c of [this.scene, this.betCard, this.autoCard]) this.body.addChild(c);
      this.scene.position.set(ox, stageY);
      this.scene.layout(cw, stageH, false);
      const unit = (cw - 28) / 3.25;
      this.betCard.position.set(ox, cardsY);
      this.betCard.layout(unit, cardsH, false);
      this.autoCard.position.set(ox + unit + 14, cardsY);
      this.autoCard.layout(unit, cardsH, false);
      this.play.position.set(ox + (unit + 14) * 2, cardsY);
      this.play.layout(unit * 1.25, cardsH, false);
      this.toast.position.set(ox + cw / 2, stageY + 62);
      this.keypad.layout(W, H, (W - Math.min(cw, 480)) / 2, Math.min(cw, 480));
    } else {
      const cw = Math.min(W, 440) - PAD * 2;
      const ox = (W - cw) / 2;
      const playH = 168;
      const dockY = H - playH - 24;
      this.layoutHeader(ox, ox + cw, HEADER_COMPACT / 2, true);

      this.dock.clear().rect(0, dockY, W, H - dockY).fill(C.bg).rect(0, dockY, W, 1).fill(C.border);
      this.scroll.visible = true;
      this.scroll.position.set(0, HEADER_COMPACT);
      this.scroll.layout(W, dockY - HEADER_COMPACT);
      const stageH = 300;
      const cardH = 196;
      for (const c of [this.scene, this.betCard, this.autoCard]) this.scroll.content.addChild(c);
      this.scene.position.set(ox, 4);
      this.scene.layout(cw, stageH, true);
      this.betCard.position.set(ox, 4 + stageH + 14);
      this.betCard.layout(cw, cardH, true);
      this.autoCard.position.set(ox, 4 + stageH + 14 + cardH + 14);
      this.autoCard.layout(cw, cardH, true);
      this.scroll.refresh();
      this.play.position.set(ox, dockY + 12);
      this.play.layout(cw, playH, true);
      this.toast.position.set(W / 2, HEADER_COMPACT + 30);
      this.keypad.layout(W, H, (W - Math.min(W, 440)) / 2, Math.min(W, 440));
    }

    // Janela "Como jogar"
    const sw2 = Math.min(W - PAD * 2, 440);
    this.helpSheetText.style.wordWrapWidth = sw2 - 40;
    const sh2 = 20 + 36 + this.helpSheetText.height + 24;
    const hx = (W - sw2) / 2;
    const hy = (H - sh2) / 2;
    this.helpSheetBg.clear().rect(0, 0, W, H).fill({ color: 0x000000, alpha: 0.3 });
    const card = new Graphics();
    drawCard(card, sw2, sh2);
    this.helpSheetBg.addChild(card);
    card.position.set(hx, hy);
    this.helpSheetTitle.position.set(hx + 20, hy + 20);
    this.helpSheetText.position.set(hx + 20, hy + 56);
    this.accountSheet.layout(W, H);
    this.refresh();
  }

  private animateBalance(to: number): void {
    gsap.to(this.shownBalance, {
      v: to,
      duration: 0.6,
      ease: 'power2.out',
      onUpdate: () => {
        this.balanceText.text = fmt(this.shownBalance.v);
        this.layoutHeader(this.brand.x, this.accountBtn.x + this.accountBtn.size, this.brand.y, this.compact);
      },
    });
    gsap.fromTo(this.balancePill.scale, { x: 1.04, y: 1.04 }, { x: 1, y: 1, duration: 0.35, ease: 'back.out(3)' });
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
    } else if (e.phase === 'running') this.scene.updateRunning(e.flightMs, e.multiplier);
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
        this.toast.show(`Perdeste ${fmt(this.bet.amount)}`, C.loss);
      }
      this.bet = null;
    }
    this.refresh();
  }

  /**
   * Com aposta em jogo: tira o resultado do saco (3 ganhos e 2 perdas por cada 5 apostas).
   * Ganho → a curva cai bem depois do multiplicador escolhido; perda → antes dele.
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
    // Perda: cai entre 1,00 e um pouco antes do alvo.
    return 1 + rand() * Math.max(0, (t - 1) * 0.85);
  }

  private onTick(m: number): void {
    sound.setEngineMultiplier(m);
    const b = this.bet;
    if (b && !b.cashed && b.auto && b.target >= MIN_TARGET && m >= b.target) this.cashOut(b.target);
    else this.refresh();
  }

  private cashOut(m: number): void {
    const b = this.bet;
    if (!b || b.cashed || this.engine.phase !== 'running') return;
    b.cashed = true;
    const payout = floor2(b.amount * m);
    this.wallet.add(payout);
    this.settle(payout - b.amount);
    sound.play('cashout');
    this.scene.popCashout(`${fmtMult(m)} · +${fmt(payout)}`);
    this.toast.show(`Ganhaste ${fmt(payout)} · ${fmtMult(m)}`, C.blue);
    this.refresh();
  }

  private settle(delta: number): void {
    this.profit = Math.round((this.profit + delta) * 100) / 100;
    this.scene.setRound(this.engine.round, this.profit);
  }

  /** Desconta a aposta; devolve false se não houver saldo ou o valor for baixo demais. */
  private reserve(): boolean {
    if (this.amount < MIN_BET - 1e-9) {
      sound.play('error');
      this.betCard.field.shake();
      this.toast.show('Aposta mínima: 0,10', C.loss);
      return false;
    }
    if (this.wallet.take(this.amount)) {
      sound.play('bet');
      return true;
    }
    sound.play('error');
    this.betCard.field.shake();
    this.toast.show('Saldo insuficiente', C.loss);
    return false;
  }

  private placeBet(): void {
    if (!this.reserve()) {
      this.autoOn = false;
      return;
    }
    const bet = { amount: this.amount, target: this.target, auto: this.autoCash };
    if (this.engine.phase === 'countdown') this.bet = { ...bet, cashed: false };
    else this.queued = bet;
  }

  private onPlay(): void {
    const phase = this.engine.phase;
    if (this.play.mode.index === 1) {
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
    } else {
      this.placeBet();
    }
    this.refresh();
  }

  private cancelQueued(): void {
    if (!this.queued) return;
    this.wallet.add(this.queued.amount);
    this.queued = null;
  }

  /** Atualiza o botão principal, o ganho e bloqueia campos durante uma aposta ativa. */
  private refresh(): void {
    const phase = this.engine.phase;
    const m = this.engine.multiplier;
    const b = this.bet;
    const live = phase === 'running' && !!b && !b.cashed;
    const busy = this.autoOn || !!this.queued || (!!b && !b.cashed);

    // Botão principal
    const mode = this.play.mode.index;
    let hint = 'Jogar → próxima ronda';
    if (mode === 1) {
      this.play.cta.set({ label: this.autoOn ? 'Parar auto' : 'Iniciar auto', caption: 'aposta', value: fmt(this.amount), dark: this.autoOn });
      hint = this.autoOn ? 'Aposta sozinho em cada ronda' : 'Aposta sozinho, ronda a ronda';
    } else if (live) {
      this.play.cta.set({ label: 'Levantar', caption: 'recebes', value: fmt(floor2(b.amount * m)) });
      hint = 'Espaço para levantar';
    } else if (phase === 'countdown' && b) {
      this.play.cta.set({ label: 'Cancelar aposta', caption: 'aposta', value: fmt(b.amount), dark: true });
      hint = 'A ronda vai começar';
    } else if (this.queued) {
      this.play.cta.set({ label: 'Cancelar próxima', caption: 'aposta', value: fmt(this.queued.amount), dark: true });
    } else if (phase === 'countdown') {
      this.play.cta.set({ label: 'Apostar', caption: 'aposta', value: fmt(this.amount) });
      hint = 'Espaço para apostar';
    } else {
      this.play.cta.set({ label: 'Apostar', caption: 'próxima ronda', value: fmt(this.amount) });
    }
    this.play.setHint(hint);

    // Ganho
    if (live) {
      const gain = floor2(b.amount * m) - b.amount;
      this.betCard.setGain('Ganho se levantar agora', fmtSigned(gain), gain > 0);
    } else {
      const gain = floor2(this.amount * (this.target - 1));
      this.betCard.setGain(`Ganho em ${fmtMult(this.target)}`, fmtSigned(gain), false);
    }
    this.scene.setTag(b && !b.cashed && b.auto ? `Levantar em ${fmtMult(b.target)}` : null);

    this.betCard.setLocked(busy);
    this.autoCard.setLocked(busy);
    this.play.setLocked(busy);
  }

  // ---------- Valores ----------

  private setAmount(v: number): void {
    this.amount = clamp(floor2(Number.isFinite(v) ? v : 0), 0, 1e9);
    this.betCard.field.setValue(fmt(this.amount));
    const q = BetCard.QUICK.indexOf(this.amount as 1 | 10 | 50);
    this.betCard.quick.setSelected(q >= 0 ? q : this.amount > 0 && this.amount === floor2(this.wallet.balance) ? 3 : -1);
    this.refresh();
  }

  private setTarget(v: number): void {
    this.target = clamp(Math.round((Number.isFinite(v) ? v : 2) * 100) / 100, MIN_TARGET, MAX_TARGET);
    this.autoCard.field.setValue(fmtInput(this.target.toFixed(2)));
    this.autoCard.quick.setSelected([1.5, 2, 3, 10].indexOf(this.target));
    this.refresh();
  }

  private stepTarget(dir: 1 | -1): void {
    const v = this.target;
    const step = dir > 0 ? (v < 2 ? 0.1 : v < 10 ? 0.5 : 1) : v <= 2 ? 0.1 : v <= 10 ? 0.5 : 1;
    this.setTarget(v + dir * step);
  }

  private edit(which: 'amount' | 'target'): void {
    const field = which === 'amount' ? this.betCard.field : this.autoCard.field;
    const current = which === 'amount' ? this.amount.toFixed(2) : this.target.toFixed(2);
    field.setFocused(true);
    this.keypad.open({
      title: which === 'amount' ? 'Aposta (moedas)' : 'Levantar em (×)',
      value: current,
      onChange: (s) => {
        const n = Number(s || '0');
        field.setValue(fmtInput(s || '0'));
        if (which === 'amount') this.amount = floor2(n);
        else this.target = n;
      },
      onClose: () => {
        field.setFocused(false);
        if (which === 'amount') this.setAmount(this.amount);
        else this.setTarget(this.target);
      },
    });
  }
}

/** Botão quadrado com ícone de linha (som, ajuda, conta). */
class IconButton extends Container {
  onTap: (() => void) | null = null;
  size = 40;
  private readonly bg = new Graphics();
  private readonly glyph = new Graphics();

  constructor(private kind: IconKind) {
    super();
    this.addChild(this.bg, this.glyph);
    this.eventMode = 'static';
    this.cursor = 'pointer';
    this.on('pointerdown', () => gsap.fromTo(this.scale, { x: 0.92, y: 0.92 }, { x: 1, y: 1, duration: 0.3, ease: 'back.out(3)' }));
    this.on('pointertap', () => {
      if (scrollGesture.dragged) return;
      sound.play('click');
      this.onTap?.();
    });
    this.draw();
  }

  setSize(s: number): void {
    this.size = s;
    this.draw();
  }

  setKind(kind: IconKind): void {
    this.kind = kind;
    this.draw();
  }

  private draw(): void {
    const s = this.size;
    this.bg.clear().roundRect(0, 0, s, s, R.seg).fill(C.border);
    this.bg.roundRect(1, 1, s - 2, s - 2, R.seg - 1).fill(C.card);
    drawIcon(this.glyph, this.kind);
    this.glyph.position.set(s / 2, s / 2);
    this.hitArea = new Rectangle(0, 0, s, s);
  }
}
