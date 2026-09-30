import { Container, Graphics, Rectangle, type Text } from 'pixi.js';
import gsap from 'gsap';
import { Button } from '../../../core/ui/Button';
import { coinIcon } from '../../../core/icons';
import { T } from '../theme';
import { icon } from '../ui/icons';
import { Check, IconButton, onTap, txt } from '../ui/widgets';

/** Campo de valor (abre o teclado numérico ao tocar). */
class Field extends Container {
  onTap: (() => void) | null = null;
  private readonly bg = new Graphics();
  private readonly caption: Text;
  readonly value: Text;
  private w = 200;
  private readonly h = 44;

  constructor(caption: string) {
    super();
    this.caption = txt(caption, 12, T.muted, '500');
    this.value = txt('', 16, T.text, '600');
    this.addChild(this.bg, this.caption, this.value);
    onTap(this, () => {
      gsap.fromTo(this.bg, { alpha: 0.6 }, { alpha: 1, duration: 0.3 });
      this.onTap?.();
    });
  }

  layout(w: number): void {
    this.w = w;
    this.bg.clear().roundRect(0, 0, w, this.h, 12).fill(T.input).stroke({ width: 1, color: T.border });
    this.caption.position.set(w - 14 - this.caption.width, (this.h - this.caption.height) / 2);
    this.value.position.set(14, (this.h - this.value.height) / 2);
    this.hitArea = new Rectangle(0, 0, w, this.h);
  }

  set(v: string): void {
    this.value.text = v;
    const room = this.w - 28 - this.caption.width - 8;
    this.value.scale.set(1);
    if (this.value.width > room) this.value.scale.set(room / this.value.width);
  }
}

/** Painel de ordem: conta, ordem a mercado, valor, percentagens, take profit, Comprar / Vender e modo automático. */
export class OrderPanel extends Container {
  static readonly HEIGHT = 452;
  onBuy: (() => void) | null = null;
  onSell: (() => void) | null = null;
  onPct: ((p: number) => void) | null = null;
  onEditAmount: (() => void) | null = null;
  onAuto: (() => void) | null = null;

  readonly tpsl = new Check('Take profit / Stop loss (+3% / −2%)');
  readonly amount = new Field('Coins');

  private readonly bg = new Graphics();
  private readonly avatar = new Container();
  private readonly user: Text;
  private readonly accountNo: Text;
  private readonly bell = new IconButton('bell', 34);
  private readonly market = new Container();
  private readonly marketBg = new Graphics();
  private readonly marketText: Text;
  private readonly availLabel: Text;
  private readonly availValue: Text;
  private readonly coin = coinIcon(15);
  private readonly posLabel: Text;
  private readonly posValue: Text;
  private readonly pcts: Button[];
  private readonly pencil = new Container();
  private readonly buy = new Button({ label: 'Comprar', width: 130, height: 46, color: T.green, textColor: T.onGreen, fontSize: 16 });
  private readonly sell = new Button({ label: 'Vender', width: 130, height: 46, color: T.red, fontSize: 16 });
  private readonly auto = new Button({ label: '▶  Modo automático', width: 276, height: 46, color: T.primary, fontSize: 15 });
  private readonly autoStatus: Text;
  private readonly autoDot = new Graphics();
  private w = 312;

  constructor() {
    super();
    const ring = new Graphics().circle(0, 0, 18).fill(T.rowSel).stroke({ width: 1.5, color: T.border });
    const ini = txt('JR', 12, T.text, '700');
    ini.anchor.set(0.5);
    this.avatar.addChild(ring, ini);
    this.user = txt('Conta demo', 14, T.text, '700');
    this.accountNo = txt('Conta: 4453728992', 12, T.muted, '500');
    this.bell.onTap = () => gsap.fromTo(this.bell.glyph, { rotation: -0.4 }, { rotation: 0, duration: 0.6, ease: 'elastic.out(1.2, 0.3)' });

    this.marketText = txt('Mercado', 14, T.text, '700');
    this.marketText.anchor.set(0.5);
    this.market.addChild(this.marketBg, this.marketText);

    this.availLabel = txt('Disponível para negociar', 12, T.muted, '500');
    this.availValue = txt('', 13, T.greenText, '700');
    this.availValue.anchor.set(1, 0);
    this.posLabel = txt('Posição:', 12, T.muted, '500');
    this.posValue = txt('', 13, T.text, '700');
    this.posValue.anchor.set(1, 0);

    this.pcts = [25, 50, 75, 100].map((p) => {
      const b = new Button({ label: `${p}%`, width: 50, height: 32, color: T.btnGray, radius: 10, fontSize: 13 });
      b.onTap = () => this.onPct?.(p / 100);
      return b;
    });
    const pbg = new Graphics();
    pbg.label = 'bg';
    this.pencil.addChild(pbg, icon('pencil', T.text));
    onTap(this.pencil, () => this.onEditAmount?.());

    this.autoStatus = txt('Desligado', 12, T.muted, '500');
    this.autoStatus.anchor.set(0.5, 0);

    this.amount.onTap = () => this.onEditAmount?.();
    this.buy.onTap = () => this.onBuy?.();
    this.sell.onTap = () => this.onSell?.();
    this.auto.onTap = () => this.onAuto?.();

    this.addChild(this.bg, this.avatar, this.user, this.accountNo, this.bell, this.market, this.availLabel, this.coin, this.availValue, this.posLabel, this.posValue);
    this.addChild(this.amount, ...this.pcts, this.pencil, this.tpsl, this.buy, this.sell, this.auto, this.autoDot, this.autoStatus);
  }

  layout(w: number): void {
    this.w = w;
    const px = 18;
    const inner = w - px * 2;
    this.bg.clear().rect(0, 64, w, 1).fill(T.border);
    this.avatar.position.set(px + 18, 32);
    this.user.position.set(px + 46, 13);
    this.accountNo.position.set(px + 46, 34);
    this.bell.position.set(w - px - 12, 32);

    // Só ordens a mercado: separador único, centrado.
    let y = 80;
    this.marketBg.clear().roundRect(0, 0, inner, 38, 12).fill(T.input).stroke({ width: 1, color: T.border });
    this.marketBg.roundRect(inner / 2 - 60, 4, 120, 30, 9).fill(T.rowSel);
    this.marketText.position.set(inner / 2, 19);
    this.market.position.set(px, y);
    y += 38 + 16;
    this.availLabel.position.set(px, y);
    this.availValue.position.set(w - px, y);
    this.coin.position.set(w - px - this.availValue.width - 12, y + 8);
    y += 24;
    this.posLabel.position.set(px, y);
    this.posValue.position.set(w - px, y);
    y += 28;

    this.amount.position.set(px, y);
    this.amount.layout(inner);
    y += 44 + 10;

    const pw = 34;
    const bw = (inner - pw - 4 * 6) / 4;
    this.pcts.forEach((b, i) => {
      b.position.set(px + i * (bw + 6), y);
      b.setSize(bw, 32);
    });
    (this.pencil.getChildByLabel('bg') as Graphics).clear().roundRect(0, 0, pw, 32, 10).fill(T.btnGray);
    this.pencil.children[1].position.set(pw / 2, 16);
    this.pencil.hitArea = new Rectangle(0, 0, pw, 32);
    this.pencil.position.set(w - px - pw, y);
    y += 32 + 24;

    this.tpsl.position.set(px, y);
    y += 24;
    const hw = (inner - 10) / 2;
    this.buy.position.set(px, y);
    this.buy.setSize(hw, 46);
    this.sell.position.set(px + hw + 10, y);
    this.sell.setSize(hw, 46);
    y += 46 + 10;
    this.auto.position.set(px, y);
    this.auto.setSize(inner, 46);
    y += 46 + 8;
    this.autoStatus.position.set(w / 2 + 6, y);
    this.autoDot.position.set(w / 2 + 6 - this.autoStatus.width / 2 - 10, y + 8);
  }

  setAvailable(v: string): void {
    this.availValue.text = v;
    this.coin.x = this.w - 18 - this.availValue.width - 12;
  }

  setPosition(v: string): void {
    this.posValue.text = v;
  }

  /** Estado do modo automático: botão, luz e texto. */
  setAuto(on: boolean, status: string, color: number = T.muted): void {
    this.auto.setText(on ? '■  Parar modo automático' : '▶  Modo automático');
    this.auto.setColor(on ? T.btnGray : T.primary);
    this.autoStatus.text = status;
    this.autoStatus.style.fill = color;
    this.autoDot.clear().circle(0, 0, 4).fill(on ? T.greenText : T.dim);
    this.autoDot.x = this.w / 2 + 6 - this.autoStatus.width / 2 - 10;
    gsap.killTweensOf(this.autoDot);
    this.autoDot.alpha = 1;
    if (on) gsap.to(this.autoDot, { alpha: 0.25, duration: 0.6, repeat: -1, yoyo: true });
  }
}
