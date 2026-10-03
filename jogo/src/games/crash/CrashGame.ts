import { Container, Graphics, Rectangle, type Text } from 'pixi.js';
import gsap from 'gsap';
import { C, R } from './theme';
import { makeMono, makeText } from './text';
import { helpIcon, menuIcon, plusIcon, resetIcon, ringLogo, speaker, userIcon } from './icons';
import type { GameScene } from '../../core/scene';
import { ScrollBox } from '../../core/ui/ScrollBox';
import { sound } from './audio/Sound';
import { clamp, floor2, fmt, fmtMult, fmtMultShort, fmtSigned, fmtTyped } from './format';
import { CrashEngine, type Phase } from './game/CrashEngine';
import { CrashView } from './game/CrashView';
import { Wallet } from './game/Wallet';
import { ActionCard, AutoCard, BetCard } from './ui/Cards';
import { pressable } from './ui/controls';
import { Keypad } from './ui/Keypad';
import { Toast } from './ui/Toast';
import { START_BALANCE } from './game/Wallet';
import { AccountClient } from './account';
import { AccountSheet, fmtAccount } from './ui/AccountSheet';
import { Menu, type MenuItem } from './ui/Menu';

interface Bet {
  amount: number;
  target: number;
  /** Levantar automático ligado para esta aposta. */
  auto: boolean;
  cashed: boolean;
}

const MIN_TARGET = 1.01;
/** Em cada 5 apostas: 3 ganham e 2 perdem (ordem baralhada). Só moedas virtuais. */
const WINS_PER_5 = 3;
const rand = () => crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;
const HELP =
  '1. Escolhe a aposta e o multiplicador em "Levantar automático".\n' +
  '2. Carrega em Apostar antes da ronda começar.\n' +
  '3. Enquanto o multiplicador sobe, carrega em Levantar (ou deixa o levantamento automático fazê-lo): recebes aposta × multiplicador. Se a ronda parar antes, perdes a aposta.\n' +
  'No computador, a tecla Espaço aposta e levanta.\n' +
  'Moedas virtuais, sem dinheiro real.';
const MAX_TARGET = 1_000_000;
const QUICK_AMOUNTS = [1, 10, 50];
const TARGET_PRESETS = [1.5, 2, 3, 10];

/** Botão quadrado com ícone (som, ajuda, conta, menu). A posição é o centro. */
class IconButton extends Container {
  readonly icon = new Graphics();
  readonly dot = new Graphics();
  private readonly bg = new Graphics();
  private readonly body = new Container();

  constructor(onTap: () => void) {
    super();
    this.body.addChild(this.bg, this.icon, this.dot);
    this.addChild(this.body);
    this.dot.circle(14, -14, 4.5).fill(C.accent).stroke({ width: 2, color: C.bgPanel });
    this.dot.visible = false;
    this.setSize(40);
    pressable(this, onTap, () => false, this.body);
  }

  setSize(s: number): void {
    this.bg.clear().roundRect(-s / 2, -s / 2, s, s, 12).fill(C.bgPanel).stroke({ width: 1, color: C.border, alignment: 1 });
    this.dot.position.set((s - 40) / 2, -(s - 40) / 2);
    this.hitArea = new Rectangle(-s / 2, -s / 2, s, s);
  }
}

/** Ponto Alto: jogo demo da Zunrel (moedas virtuais, sem dinheiro real). */
export class CrashGame implements GameScene {
  readonly view = new Container();
  private readonly root = this.view;
  private active = false;
  private readonly page = new ScrollBox();

  // Cabeçalho
  private readonly header = new Container();
  private readonly logo = ringLogo(26);
  private readonly brand: Text;
  private readonly sep: Text;
  private readonly gameName: Text;
  private readonly badge = new Container();
  private readonly balancePill = new Container();
  private readonly balanceBg = new Graphics();
  private readonly balanceLabel: Text;
  private readonly balanceText: Text;
  private readonly balancePlus = new Container();
  private readonly soundBtn = new IconButton(() => this.toggleSound());
  private readonly helpBtn = new IconButton(() => this.openHelp());
  private readonly userBtn = new IconButton(() => this.openAccount());
  /** Telemóvel: ☰ com conta, som, repor saldo e "Como jogar". */
  private readonly menuBtn = new IconButton(() => {
    if (this.menu.isOpen) this.menu.close();
    else this.openMenu();
  });
  private readonly menu = new Menu();

  /** Janela "Como jogar". */
  private readonly helpSheet = new Container();
  private readonly helpSheetBg = new Graphics();
  private readonly helpSheetTitle: Text;
  private readonly helpSheetText: Text;

  private readonly scene = new CrashView();
  private readonly betCard: BetCard;
  private readonly autoCard: AutoCard;
  private readonly actionCard = new ActionCard();
  private readonly keypad = new Keypad();
  private readonly toast = new Toast();
  /** Conta (número + PIN) para guardar o saldo no servidor. */
  private readonly account = new AccountClient();
  private readonly accountSheet = new AccountSheet();
  private W = 400;
  private H = 800;
  private wide = true;

  private readonly wallet = new Wallet();
  private readonly engine: CrashEngine;
  private shownBalance = { v: 0 };

  private amount = 1;
  private target = 2;
  /** Interruptor "Ativo" do levantamento automático (ligado = comportamento de sempre). */
  private autoCashout = true;
  private bet: Bet | null = null;
  private queued: { amount: number; target: number; auto: boolean } | null = null;
  private autoOn = false;
  private profit = 0;
  private lastTick = 0;
  /** Resultados ainda por sair neste bloco de 5 apostas (true = ganha). */
  private bag: boolean[] = [];
  /** Texto da etiqueta depois de levantar (fica até ao fim da ronda). */
  private cashedTag = '';

  constructor() {
    this.engine = new CrashEngine({
      phase: (p) => this.onPhase(p),
      tick: (m) => this.onTick(m),
    });
    this.engine.pickCrash = () => this.pickCrash();

    this.brand = makeText('Zunrel', { fontSize: 15, fontWeight: '600', fill: C.text });
    this.sep = makeText('/', { fontSize: 15, fontWeight: '500', fill: C.dot });
    this.gameName = makeText('Ponto Alto', { fontSize: 15, fontWeight: '600', fill: C.text });
    for (const t of [this.brand, this.sep, this.gameName]) t.anchor.set(0, 0.5);
    this.balanceLabel = makeText('Saldo', { fontSize: 14, fontWeight: '500', fill: C.textMuted });
    this.balanceLabel.anchor.set(0, 0.5);
    this.balanceText = makeMono('', { fontSize: 15, fontWeight: '600', fill: C.text });
    this.balanceText.anchor.set(0, 0.5);

    this.helpSheetTitle = makeText('Como jogar', { fontSize: 20, fontWeight: '600', fill: C.text, letterSpacing: -0.4 });
    this.helpSheetText = makeText(HELP, { fontSize: 15, fontWeight: '400', fill: C.textMuted, wordWrap: true, lineHeight: 23 });
    this.helpSheet.addChild(this.helpSheetBg, this.helpSheetTitle, this.helpSheetText);
    this.helpSheet.visible = false;
    this.helpSheet.eventMode = 'static';
    this.helpSheet.cursor = 'pointer';
    this.helpSheet.on('pointertap', () => (this.helpSheet.visible = false));

    this.betCard = new BetCard(
      () => this.setAmount(this.amount / 2),
      () => this.setAmount(Math.min(this.amount * 2, this.wallet.balance)),
      (i) => this.setAmount(i < QUICK_AMOUNTS.length ? Math.min(QUICK_AMOUNTS[i], this.wallet.balance) : this.wallet.balance),
    );
    this.autoCard = new AutoCard(
      () => this.stepTarget(-1),
      () => this.stepTarget(1),
      (i) => this.setTarget(TARGET_PRESETS[i]),
      TARGET_PRESETS.map(fmtMultShort),
    );

    this.buildHeader();
    this.page.content.addChild(this.header, this.scene, this.betCard, this.autoCard, this.actionCard, this.toast);
    this.root.addChild(this.page, this.menu, this.accountSheet, this.keypad, this.helpSheet);

    this.actionCard.play.onTap = () => this.onPlay();
    this.actionCard.mode.onChange = (i) => {
      if (i === 0) this.autoOn = false;
      this.refresh();
    };
    this.autoCard.toggle.onChange = (on) => {
      this.autoCashout = on;
      this.toast.show(on ? 'Levantar automático ativo' : 'Levantar automático desligado');
      this.refresh();
    };
    this.betCard.box.onFocus = () => this.edit('amount');
    this.autoCard.box.onFocus = () => this.edit('cashout');

    this.wallet.onChange = (b) => {
      this.animateBalance(b);
      this.account.saveSoon(b);
    };
    this.wireAccount();
    this.shownBalance.v = this.wallet.balance;
    this.balanceText.text = fmt(this.wallet.balance);
    sound.onMuteChange = () => this.drawSoundIcon();

    this.setAmount(Math.min(1, this.wallet.balance));
    this.setTarget(2);
    window.addEventListener('keydown', (e) => {
      if (this.active && e.code === 'Space' && !this.keypad.isOpen) {
        e.preventDefault();
        this.onPlay();
      }
    });

    this.scene.enterCountdown();
    this.scene.setRound(this.engine.round);
    this.updateSession();
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
    const badgeText = makeText('Demo · moedas virtuais', { fontSize: 12, fontWeight: '500', fill: C.textMuted, letterSpacing: 0.2 });
    badgeText.anchor.set(0, 0.5);
    badgeText.position.set(9, 0);
    const bw = badgeText.width + 18;
    this.badge.addChild(new Graphics().roundRect(0, -11, bw, 22, 11).fill(C.bgPanel).stroke({ width: 1, color: C.border, alignment: 1 }), badgeText);

    const plusBg = new Graphics().circle(0, 0, 13).fill(C.ink);
    this.balancePlus.addChild(plusBg, plusIcon(new Graphics(), C.onAccent, 11));
    this.balancePlus.hitArea = new Rectangle(-18, -18, 36, 36);
    pressable(this.balancePlus, () => this.resetWallet());
    this.balancePill.addChild(this.balanceBg, this.balanceLabel, this.balanceText, this.balancePlus);
    this.balancePill.eventMode = 'static';
    this.balancePill.cursor = 'pointer';
    this.balancePill.on('pointertap', (e) => {
      if (e.target === this.balancePlus) return;
      this.toast.show('Moedas virtuais, sem dinheiro real. O + repõe o saldo.');
    });

    this.drawSoundIcon();
    helpIcon(this.helpBtn.icon);
    userIcon(this.userBtn.icon);
    userIcon(this.menuBtn.icon);
    this.drawAccountIcon();
    this.header.addChild(this.logo, this.brand, this.sep, this.gameName, this.badge, this.balancePill, this.soundBtn, this.helpBtn, this.userBtn, this.menuBtn);
  }

  private drawSoundIcon(): void {
    speaker(this.soundBtn.icon, sound.muted);
  }

  private toggleSound(): void {
    sound.toggleMute();
    if (!sound.muted) sound.play('click');
    this.toast.show(sound.muted ? 'Som desligado' : 'Som ligado');
  }

  private openHelp(): void {
    this.menu.close();
    this.helpSheet.visible = true;
    gsap.fromTo(this.helpSheet, { alpha: 0 }, { alpha: 1, duration: 0.25 });
  }

  // ---------- Conta ----------

  /** Ponto azul no botão da conta quando há sessão iniciada. */
  private drawAccountIcon(): void {
    const on = !!this.account.session;
    this.userBtn.dot.visible = on;
    this.menuBtn.dot.visible = on;
  }

  private openMenu(): void {
    const s = this.account.session;
    const color = s ? C.accent : C.text;
    const items: MenuItem[] = [
      {
        label: s ? `Conta ${fmtAccount(s.account)}` : 'Entrar / Criar conta',
        icon: (g) => void userIcon(g, color, 20),
        onTap: () => this.openAccount(),
      },
      {
        label: sound.muted ? 'Ligar som' : 'Desligar som',
        icon: (g) => void speaker(g, sound.muted, C.text, 20),
        onTap: () => this.toggleSound(),
      },
      {
        label: 'Repor saldo',
        icon: (g) => void resetIcon(g, C.text, 18),
        onTap: () => this.resetWallet(),
      },
      {
        label: 'Como jogar',
        icon: (g) => void helpIcon(g, C.text, 20),
        onTap: () => this.openHelp(),
      },
    ];
    const p = this.menuBtn.getGlobalPosition();
    const sc = this.root.scale.x;
    this.menu.open(items, p.x / sc + 20, p.y / sc + 26, this.W, this.H);
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
        this.toast.show(`Conta ${fmtAccount(acc)} · saldo ${fmt(balance)}`, C.accent);
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
    this.toast.show(msg, C.stop);
  }

  /** Repõe o saldo demo (só sem aposta em jogo, para não baralhar a ronda). */
  private resetWallet(): void {
    if ((this.bet && !this.bet.cashed) || this.queued || this.autoOn) {
      sound.play('error');
      this.toast.show('Termina a aposta antes de repor', C.stop);
      return;
    }
    this.wallet.refill();
    this.toast.show(`Saldo reposto: ${fmt(START_BALANCE)} moedas`, C.accent);
  }

  // ---------- Layout ----------

  /** Computador: cabeçalho, cartão do jogo e três cartões em linha. Telemóvel: tudo numa coluna. */
  private layout(sw: number, sh: number): void {
    const wide = sw >= 860 && sw / sh >= 1;
    this.wide = wide;
    const scale = wide ? Math.min(1, sh / 720, sw / 980) : clamp(sw / 390, 0.82, 1.15);
    const W = sw / scale;
    const H = sh / scale;
    this.W = W;
    this.H = H;
    this.root.scale.set(scale);
    this.menu.close();

    const padX = wide ? 32 : 16;
    const contentW = Math.min(W - padX * 2, wide ? 1216 : 560);
    const ox = (W - contentW) / 2;
    const headerTop = wide ? 22 : 12;
    const headerH = wide ? 44 : 40;
    this.layoutHeader(ox, contentW, headerTop + headerH / 2, wide);

    const gap = wide ? 14 : 10;
    const gameTop = headerTop + headerH + gap;
    let bottom: number;
    if (wide) {
      const cardH = 222;
      const cardsTop = Math.max(gameTop + 300 + gap, H - 18 - cardH);
      const gameH = cardsTop - gap - gameTop;
      this.scene.position.set(ox, gameTop);
      this.scene.layout(contentW, gameH, false);
      const unit = (contentW - gap * 2) / 3.25;
      this.betCard.position.set(ox, cardsTop);
      this.betCard.layout(unit, cardH, false);
      this.autoCard.position.set(ox + unit + gap, cardsTop);
      this.autoCard.layout(unit, cardH, false);
      this.actionCard.position.set(ox + (unit + gap) * 2, cardsTop);
      this.actionCard.layout(contentW - (unit + gap) * 2, cardH, false);
      bottom = cardsTop + cardH;
    } else {
      // Telemóvel: jogo grande e o botão principal logo por baixo; os outros cartões seguem (com scroll se preciso).
      const betH = 170;
      const actionH = 156;
      const gameH = clamp(Math.round(H * 0.39), 280, 400);
      this.scene.position.set(ox, gameTop);
      this.scene.layout(contentW, gameH, true);
      let y = gameTop + gameH + gap;
      this.actionCard.position.set(ox, y);
      this.actionCard.layout(contentW, actionH, true);
      y += actionH + gap;
      this.betCard.position.set(ox, y);
      this.betCard.layout(contentW, betH, true);
      y += betH + gap;
      this.autoCard.position.set(ox, y);
      this.autoCard.layout(contentW, betH, true);
      y += betH;
      bottom = y;
    }
    void bottom;
    this.page.layout(W, H);

    const sw2 = Math.min(contentW, 440);
    this.helpSheetText.style.wordWrapWidth = sw2 - 48;
    const sh2 = 24 + 36 + this.helpSheetText.height + 28;
    this.helpSheetBg.clear().rect(0, 0, W, H).fill({ color: 0x171717, alpha: 0.28 });
    this.helpSheetBg.roundRect((W - sw2) / 2, (H - sh2) / 2, sw2, sh2, R.panel).fill(C.bgPanel).stroke({ width: 1, color: C.border, alignment: 1 });
    this.helpSheetTitle.position.set((W - sw2) / 2 + 24, (H - sh2) / 2 + 24);
    this.helpSheetText.position.set((W - sw2) / 2 + 24, (H - sh2) / 2 + 60);
    this.accountSheet.layout(W, H);
    this.toast.position.set(this.scene.x + this.scene.stageWidth / 2, this.scene.y + this.scene.noticeY);
    const kw = wide ? Math.min(420, contentW) : contentW;
    this.keypad.layout(W, H, (W - kw) / 2, kw);
  }

  private layoutHeader(ox: number, contentW: number, cy: number, wide: boolean): void {
    const fs = wide ? 15 : 14;
    for (const t of [this.brand, this.sep, this.gameName]) t.style.fontSize = fs;
    this.logo.scale.set(wide ? 1 : 0.85);
    let x = ox + (wide ? 13 : 11);
    this.logo.position.set(x, cy);
    x += wide ? 23 : 19;
    this.brand.position.set(x, cy);
    x += this.brand.width + (wide ? 10 : 7);
    this.sep.position.set(x, cy);
    x += this.sep.width + (wide ? 10 : 7);
    this.gameName.position.set(x, cy);
    x += this.gameName.width + 10;
    this.badge.position.set(x, cy);
    this.badge.visible = wide;

    let r = ox + contentW;
    for (const b of [this.userBtn, this.helpBtn, this.soundBtn]) {
      b.visible = wide;
      if (!wide) continue;
      b.position.set(r - 20, cy);
      r -= 40 + 12;
    }
    this.menuBtn.visible = !wide;
    if (!wide) {
      this.menuBtn.setSize(38);
      menuIcon(this.menuBtn.icon);
      this.menuBtn.position.set(r - 19, cy);
      r -= 38 + 8;
    }
    this.balancePill.position.set(r, cy);
    this.layoutBalance();
  }

  /** Pílula do saldo, alinhada à direita na posição do contentor. */
  private layoutBalance(): void {
    const wide = this.wide;
    this.balanceLabel.visible = wide;
    this.balanceText.style.fontSize = wide ? 15 : 14;
    const h = wide ? 42 : 38;
    const plusR = 13;
    const left = wide ? 16 : 14;
    const textW = this.balanceText.width;
    const labelW = wide ? this.balanceLabel.width + 10 : 0;
    const w = left + labelW + textW + 10 + plusR * 2 + 8;
    this.balanceBg.clear().roundRect(-w, -h / 2, w, h, h / 2).fill(C.bgPanel).stroke({ width: 1, color: C.border, alignment: 1 });
    this.balanceLabel.position.set(-w + left, 0);
    this.balanceText.position.set(-w + left + labelW, 0);
    this.balancePlus.position.set(-8 - plusR, 0);
    this.balancePill.hitArea = new Rectangle(-w, -h / 2, w, h);
  }

  private animateBalance(to: number): void {
    gsap.to(this.shownBalance, {
      v: to,
      duration: 0.6,
      ease: 'power2.out',
      onUpdate: () => {
        this.balanceText.text = fmt(this.shownBalance.v);
        this.layoutBalance();
      },
    });
    gsap.fromTo(this.balancePill.scale, { x: 1.04, y: 1.04 }, { x: 1, y: 1, duration: 0.4, ease: 'back.out(3)' });
    this.refreshChips();
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
      this.scene.setRound(e.round);
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
        if (this.bet.amount > 0) this.toast.show(`Perdeste ${fmt(this.bet.amount)} · parou em ${fmtMult(e.multiplier)}`, C.stop);
      }
      this.bet = null;
    }
    this.refresh();
  }

  /**
   * Com aposta em jogo: tira o resultado do saco (3 ganhos e 2 perdas por cada 5 apostas).
   * Ganho → a ronda para bem depois do alvo; perda → antes dele.
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
    // Perda: para entre 1,00 e um pouco antes do alvo.
    return 1 + rand() * Math.max(0, (t - 1) * 0.85);
  }

  private onTick(m: number): void {
    sound.setEngineMultiplier(m);
    const b = this.bet;
    if (b && !b.cashed && b.auto && b.target >= MIN_TARGET && m >= b.target) this.cashOut(b.target);
    else if (b && !b.cashed) {
      const payout = floor2(b.amount * m);
      this.actionCard.play.set('Levantar', 'recebes', fmt(payout));
      this.betCard.setGain('Ganho se levantar agora', fmtSigned(floor2(payout - b.amount)), true);
    }
  }

  private cashOut(m: number): void {
    const b = this.bet;
    if (!b || b.cashed || this.engine.phase !== 'running') return;
    b.cashed = true;
    const payout = floor2(b.amount * m);
    this.wallet.add(payout);
    this.settle(payout - b.amount);
    sound.play('cashout');
    this.cashedTag = `Levantaste a ${fmtMult(m)}`;
    this.scene.popCashout(this.cashedTag);
    this.toast.show(`Recebeste ${fmt(payout)} moedas`, C.accent);
    this.refresh();
  }

  private settle(delta: number): void {
    this.profit = Math.round((this.profit + delta) * 100) / 100;
    this.updateSession();
  }

  private updateSession(): void {
    this.actionCard.setFoot(`Sessão ${fmtSigned(this.profit)}`, this.profit > 0);
  }

  /** Desconta a aposta; devolve false se não houver saldo. */
  private reserve(): boolean {
    if (this.wallet.take(this.amount)) {
      sound.play('bet');
      return true;
    }
    sound.play('error');
    this.betCard.box.shake();
    this.toast.show('Saldo insuficiente', C.stop);
    return false;
  }

  private placeBet(): void {
    if (!this.reserve()) {
      this.autoOn = false;
      return;
    }
    const bet = { amount: this.amount, target: this.target, auto: this.autoCashout };
    if (this.engine.phase === 'countdown') this.bet = { ...bet, cashed: false };
    else this.queued = bet;
  }

  private onPlay(): void {
    const phase = this.engine.phase;
    if (this.actionCard.mode.index === 1) {
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

  /** Atualiza o botão principal, a etiqueta da curva e bloqueia campos durante uma aposta ativa. */
  private refresh(): void {
    const { play, mode } = this.actionCard;
    const phase = this.engine.phase;
    const b = this.bet;
    const q = this.queued;
    const amount = fmt(this.amount);

    if (mode.index === 1) {
      if (this.autoOn && phase === 'running' && b && !b.cashed) play.set('Parar auto', 'em jogo', fmt(b.amount), C.ink);
      else play.set(this.autoOn ? 'Parar auto' : 'Iniciar auto', 'aposta por ronda', amount, this.autoOn ? C.ink : C.accent);
    } else if (phase === 'running' && b && !b.cashed) {
      play.set('Levantar', 'recebes', fmt(floor2(b.amount * this.engine.multiplier)));
    } else if (phase === 'countdown' && b) {
      play.set('Cancelar aposta', 'aposta', fmt(b.amount), C.ink);
    } else if (q) {
      play.set('Cancelar', 'próxima ronda', fmt(q.amount), C.ink);
    } else {
      play.set(phase === 'countdown' ? 'Apostar' : 'Apostar na próxima', 'aposta', amount);
    }

    // Etiqueta junto ao ponto: alvo da aposta em jogo.
    const live = b && !b.cashed ? b : q;
    if (b && b.cashed) this.scene.setTag(this.cashedTag, C.accent);
    else if (live && live.auto) this.scene.setTag(`Levantar em ${fmtMult(live.target)}`);
    else if (live) this.scene.setTag('Levantamento manual');
    else this.scene.setTag(null);

    this.updateGain();
    const busy = this.autoOn || !!q || (!!b && !b.cashed);
    this.betCard.box.setLocked(busy);
    this.betCard.chips.setLocked(busy);
    this.autoCard.box.setLocked(busy);
    this.autoCard.chips.setLocked(busy);
    this.autoCard.toggle.setLocked(busy);
    mode.setLocked(busy);
  }

  // ---------- Valores ----------

  private setAmount(v: number): void {
    this.amount = clamp(floor2(Number.isFinite(v) ? v : 0), 0, 1e9);
    this.betCard.box.setValue(fmt(this.amount));
    this.updateGain();
    this.refreshChips();
    if (this.actionCard) this.refresh();
  }

  private setTarget(v: number): void {
    this.target = clamp(Math.round((Number.isFinite(v) ? v : 2) * 100) / 100, MIN_TARGET, MAX_TARGET);
    this.autoCard.box.setValue(fmt(this.target));
    this.updateGain();
    this.refreshChips();
  }

  private refreshChips(): void {
    const bal = this.wallet.balance;
    let ai = QUICK_AMOUNTS.findIndex((a) => Math.abs(a - this.amount) < 1e-9);
    if (ai < 0 && this.amount > 0 && Math.abs(this.amount - bal) < 1e-9) ai = QUICK_AMOUNTS.length;
    this.betCard.chips.select(ai);
    this.autoCard.chips.select(TARGET_PRESETS.findIndex((t) => Math.abs(t - this.target) < 1e-9));
  }

  private stepTarget(dir: 1 | -1): void {
    const v = this.target;
    const step = dir > 0 ? (v < 2 ? 0.1 : v < 10 ? 0.5 : 1) : v <= 2 ? 0.1 : v <= 10 ? 0.5 : 1;
    this.setTarget(v + dir * step);
  }

  /** Linha de ganho no cartão Aposta (ao vivo durante a ronda, previsto fora dela). */
  private updateGain(): void {
    const b = this.bet;
    if (b && !b.cashed && this.engine.phase === 'running') {
      const payout = floor2(b.amount * this.engine.multiplier);
      this.betCard.setGain('Ganho se levantar agora', fmtSigned(floor2(payout - b.amount)), true);
    } else {
      this.betCard.setGain(`Ganho se levantar a ${fmtMult(this.target)}`, fmtSigned(floor2(this.amount * (this.target - 1))), false);
    }
  }

  private edit(which: 'amount' | 'cashout'): void {
    const field = which === 'amount' ? this.betCard.box : this.autoCard.box;
    const current = which === 'amount' ? this.amount.toFixed(2) : this.target.toFixed(2);
    field.setFocused(true);
    this.keypad.open({
      title: which === 'amount' ? 'Aposta (moedas)' : 'Levantar automático em (×)',
      value: current,
      onChange: (s) => {
        const n = Number(s || '0');
        field.setValue(fmtTyped(s || '0'));
        if (which === 'amount') this.amount = floor2(n);
        else this.target = n;
        this.refresh();
      },
      onClose: () => {
        field.setFocused(false);
        if (which === 'amount') this.setAmount(this.amount);
        else this.setTarget(this.target);
      },
    });
  }
}
