import { Container, Graphics, Rectangle, type Text } from 'pixi.js';
import gsap from 'gsap';
import { Button } from '../../../core/ui/Button';
import { coinIcon } from '../../../core/icons';
import { T } from '../theme';
import { num } from '../format';
import { DURATIONS, PROFIT } from '../market/Account';
import { icon } from '../ui/icons';
import { Tabs, onTap, txt } from '../ui/widgets';

const fmtDur = (s: number) => (s < 60 ? `${s}s` : `${s / 60}m`);

/** Campo da aposta com moeda (abre o teclado numérico ao tocar). */
class Field extends Container {
  onTap: (() => void) | null = null;
  private readonly bg = new Graphics();
  private readonly coin = coinIcon(26);
  readonly value: Text;
  private w = 200;
  static readonly H = 56;

  constructor() {
    super();
    this.value = txt('', 22, T.text, '700');
    this.addChild(this.bg, this.coin, this.value);
    onTap(this, () => {
      gsap.fromTo(this.bg, { alpha: 0.6 }, { alpha: 1, duration: 0.3 });
      this.onTap?.();
    });
  }

  layout(w: number): void {
    this.w = w;
    const h = Field.H;
    this.bg.clear().roundRect(0, 0, w, h, 14).fill(T.input).stroke({ width: 1.5, color: T.border });
    this.coin.position.set(16 + 13, h / 2);
    this.value.position.set(16 + 26 + 12, (h - this.value.height) / 2);
    this.hitArea = new Rectangle(0, 0, w, h);
  }

  set(v: string): void {
    this.value.text = v;
    const room = this.w - 54 - 16;
    this.value.scale.set(1);
    if (this.value.width > room) this.value.scale.set(room / this.value.width);
  }
}

/** Painel de negociação binária: saldo, mercado, duração, aposta, Sobe / Desce e modo automático. */
export class OrderPanel extends Container {
  static readonly HEIGHT = 624;
  onUp: (() => void) | null = null;
  onDown: (() => void) | null = null;
  onPct: ((p: number) => void) | null = null;
  onEditAmount: (() => void) | null = null;
  onAuto: (() => void) | null = null;
  onReset: (() => void) | null = null;

  readonly duration = new Tabs(DURATIONS.map(fmtDur), { size: 16 });
  readonly amount = new Field();

  private readonly bg = new Graphics();
  private readonly acc: Text;
  private readonly coin = coinIcon(34);
  private readonly balance: Text;
  private readonly reset = new Button({ label: 'Repor', width: 88, height: 40, color: T.btnGray, fontSize: 15 });
  private readonly market = new Container();
  private readonly marketBg = new Graphics();
  private readonly marketText: Text;
  private readonly durLabel: Text;
  private readonly stakeLabel: Text;
  private readonly pcts: Button[];
  private readonly pencil = new Container();
  private readonly payLabel: Text;
  private readonly payValue: Text;
  private readonly payCoin = coinIcon(20);
  private readonly up = new Button({ label: '▲  Sobe', width: 140, height: 68, color: T.green, textColor: T.onGreen, fontSize: 22 });
  private readonly down = new Button({ label: '▼  Desce', width: 140, height: 68, color: T.red, fontSize: 22 });
  private readonly auto = new Button({ label: '▶  Modo automático', width: 276, height: 54, color: T.primary, fontSize: 17 });
  private readonly autoStatus: Text;
  private readonly autoDot = new Graphics();
  private w = 340;

  constructor() {
    super();
    this.acc = txt('Conta demo', 14, T.muted, '600');
    this.balance = txt('', 28, T.text, '800');
    this.reset.onTap = () => this.onReset?.();

    this.marketText = txt('Mercado', 17, T.text, '700');
    this.marketText.anchor.set(0.5);
    this.market.addChild(this.marketBg, this.marketText);

    this.durLabel = txt('Duração', 14, T.muted, '600');
    this.stakeLabel = txt('Aposta', 14, T.muted, '600');
    this.pcts = [25, 50, 75, 100].map((p) => {
      const b = new Button({ label: `${p}%`, width: 60, height: 42, color: T.btnGray, radius: 12, fontSize: 16 });
      b.onTap = () => this.onPct?.(p / 100);
      return b;
    });
    const pbg = new Graphics();
    pbg.label = 'bg';
    this.pencil.addChild(pbg, icon('pencil', T.text));
    onTap(this.pencil, () => this.onEditAmount?.());

    this.payLabel = txt(`Pagamento · lucro +${Math.round(PROFIT * 100)}%`, 14, T.muted, '600');
    this.payValue = txt('', 20, T.greenText, '800');
    this.payValue.anchor.set(1, 0.5);

    this.autoStatus = txt('Desligado', 14, T.muted, '600');
    this.autoStatus.anchor.set(0.5, 0);

    this.amount.onTap = () => this.onEditAmount?.();
    this.up.onTap = () => this.onUp?.();
    this.down.onTap = () => this.onDown?.();
    this.auto.onTap = () => this.onAuto?.();

    this.addChild(this.bg, this.acc, this.coin, this.balance, this.reset, this.market, this.durLabel, this.duration, this.stakeLabel, this.amount);
    this.addChild(...this.pcts, this.pencil, this.payLabel, this.payCoin, this.payValue, this.up, this.down, this.auto, this.autoDot, this.autoStatus);
  }

  layout(w: number): void {
    this.w = w;
    const px = 20;
    const inner = w - px * 2;
    this.bg.clear().rect(0, 86, w, 1).fill(T.border);

    // Saldo com moeda grande
    this.acc.position.set(px, 14);
    this.coin.position.set(px + 17, 56);
    this.balance.position.set(px + 34 + 12, 56 - this.balance.height / 2);
    this.reset.position.set(w - px - 88, 36);

    // "Mercado" a toda a largura
    let y = 104;
    this.marketBg.clear().roundRect(0, 0, inner, 48, 14).fill(T.rowSel).stroke({ width: 1.5, color: T.borderHi });
    this.marketText.position.set(inner / 2, 24);
    this.market.position.set(px, y);
    y += 48 + 18;

    this.durLabel.position.set(px, y);
    y += 24;
    this.duration.position.set(px, y);
    this.duration.layout(inner, 48);
    y += 48 + 18;

    this.stakeLabel.position.set(px, y);
    y += 24;
    this.amount.position.set(px, y);
    this.amount.layout(inner);
    y += Field.H + 10;
    const pw = 46;
    const bw = (inner - pw - 4 * 8) / 4;
    this.pcts.forEach((b, i) => {
      b.position.set(px + i * (bw + 8), y);
      b.setSize(bw, 42);
    });
    (this.pencil.getChildByLabel('bg') as Graphics).clear().roundRect(0, 0, pw, 42, 12).fill(T.btnGray);
    this.pencil.children[1].position.set(pw / 2, 21);
    this.pencil.hitArea = new Rectangle(0, 0, pw, 42);
    this.pencil.position.set(w - px - pw, y);
    y += 42 + 18;

    this.payLabel.position.set(px, y + 2);
    this.payValue.position.set(w - px, y + 11);
    this.payCoin.position.set(w - px - this.payValue.width - 16, y + 11);
    y += 36;

    const hw = (inner - 12) / 2;
    this.up.position.set(px, y);
    this.up.setSize(hw, 68);
    this.down.position.set(px + hw + 12, y);
    this.down.setSize(hw, 68);
    y += 68 + 12;
    this.auto.position.set(px, y);
    this.auto.setSize(inner, 54);
    y += 54 + 10;
    this.autoStatus.position.set(w / 2 + 8, y);
    this.autoDot.position.set(w / 2 + 8 - this.autoStatus.width / 2 - 12, y + 9);
  }

  setBalance(v: number): void {
    this.balance.text = num(v);
  }

  setPayout(v: number): void {
    this.payValue.text = num(v);
    this.payCoin.x = this.w - 20 - this.payValue.width - 16;
  }

  /** Estado do modo automático: botão, luz e texto. */
  setAuto(on: boolean, status: string, color: number = T.muted): void {
    this.auto.setText(on ? '■  Parar modo automático' : '▶  Modo automático');
    this.auto.setColor(on ? T.btnGray : T.primary);
    this.autoStatus.text = status;
    this.autoStatus.style.fill = color;
    this.autoDot.clear().circle(0, 0, 5).fill(on ? T.greenText : T.dim);
    this.autoDot.x = this.w / 2 + 8 - this.autoStatus.width / 2 - 12;
    gsap.killTweensOf(this.autoDot);
    this.autoDot.alpha = 1;
    if (on) gsap.to(this.autoDot, { alpha: 0.25, duration: 0.6, repeat: -1, yoyo: true });
  }
}
