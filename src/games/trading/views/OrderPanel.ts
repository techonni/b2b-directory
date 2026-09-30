import { Container, Graphics, Rectangle, type Text } from 'pixi.js';
import gsap from 'gsap';
import { Button } from '../../../core/ui/Button';
import { coinIcon } from '../../../core/icons';
import { T } from '../theme';
import { icon } from '../ui/icons';
import { Check, IconButton, Tabs, onTap, txt } from '../ui/widgets';

/** Campo de valor (abre o teclado numérico ao tocar). */
class Field extends Container {
  onTap: (() => void) | null = null;
  private readonly bg = new Graphics();
  private readonly caption: Text;
  readonly value: Text;
  private w = 200;
  private readonly h = 42;

  constructor(caption: string) {
    super();
    this.caption = txt(caption, 11, T.muted, '500');
    this.value = txt('', 15, T.text, '600');
    this.addChild(this.bg, this.caption, this.value);
    onTap(this, () => {
      gsap.fromTo(this.bg, { alpha: 0.6 }, { alpha: 1, duration: 0.3 });
      this.onTap?.();
    });
  }

  layout(w: number): void {
    this.w = w;
    this.bg.clear().roundRect(0, 0, w, this.h, 8).fill(T.input).stroke({ width: 1, color: T.border });
    this.caption.position.set(w - 12 - this.caption.width, (this.h - this.caption.height) / 2);
    this.value.position.set(12, (this.h - this.value.height) / 2);
    this.hitArea = new Rectangle(0, 0, w, this.h);
  }

  set(v: string): void {
    this.value.text = v;
    this.fit();
  }

  private fit(): void {
    const room = this.w - 24 - this.caption.width - 8;
    this.value.scale.set(1);
    if (this.value.width > room) this.value.scale.set(room / this.value.width);
  }
}

/** Painel de ordem: conta, tipo, valor, percentagens, opções e Comprar / Vender. */
export class OrderPanel extends Container {
  static readonly HEIGHT = 440;
  onBuy: (() => void) | null = null;
  onSell: (() => void) | null = null;
  onPct: ((p: number) => void) | null = null;
  onEditAmount: (() => void) | null = null;
  onEditPrice: (() => void) | null = null;

  readonly kind = new Tabs(['Mercado', 'Limite', 'Stop']);
  readonly reduce = new Check('Reduzir apenas');
  readonly tpsl = new Check('Take profit / Stop loss');
  readonly auto = new Check('Modo automático');
  readonly amount = new Field('Coins');
  readonly price = new Field('Preço');

  private readonly bg = new Graphics();
  private readonly avatar = new Container();
  private readonly user: Text;
  private readonly accountNo: Text;
  private readonly bell = new IconButton('bell', 34);
  private readonly availLabel: Text;
  private readonly availValue: Text;
  private readonly coin = coinIcon(15);
  private readonly posLabel: Text;
  private readonly posValue: Text;
  private readonly pcts: Button[];
  private readonly pencil = new Container();
  private readonly autoStatus: Text;
  private readonly buy = new Button({ label: 'Comprar', width: 130, height: 42, color: T.green, radius: 8, fontSize: 15 });
  private readonly sell = new Button({ label: 'Vender', width: 130, height: 42, color: T.red, radius: 8, fontSize: 15 });
  private w = 312;
  private compact = false;

  constructor() {
    super();
    const ring = new Graphics().circle(0, 0, 18).fill(0x3a3f3d).stroke({ width: 1.5, color: T.borderHi });
    const ini = txt('JR', 12, T.text, '700');
    ini.anchor.set(0.5);
    this.avatar.addChild(ring, ini);
    this.user = txt('Conta demo', 14, T.text, '700');
    this.accountNo = txt('Conta: 4453728992', 12, T.muted, '500');
    this.bell.onTap = () => gsap.fromTo(this.bell.glyph, { rotation: -0.4 }, { rotation: 0, duration: 0.6, ease: 'elastic.out(1.2, 0.3)' });

    this.availLabel = txt('Disponível para negociar', 12, T.muted, '500');
    this.availValue = txt('', 13, T.greenText, '700');
    this.availValue.anchor.set(1, 0);
    this.posLabel = txt('Posição:', 12, T.muted, '500');
    this.posValue = txt('', 13, T.text, '700');
    this.posValue.anchor.set(1, 0);

    this.pcts = [25, 50, 75, 100].map((p) => {
      const b = new Button({ label: `${p}%`, width: 50, height: 30, color: T.btnGray, radius: 7, fontSize: 12 });
      b.onTap = () => this.onPct?.(p / 100);
      return b;
    });
    const pbg = new Graphics();
    pbg.label = 'bg';
    this.pencil.addChild(pbg, icon('pencil', T.muted));
    onTap(this.pencil, () => this.onEditAmount?.());
    this.autoStatus = txt('', 11, T.dim, '500');
    this.autoStatus.anchor.set(1, 0.5);

    this.amount.onTap = () => this.onEditAmount?.();
    this.price.onTap = () => this.onEditPrice?.();
    this.kind.onChange = () => this.layout(this.w);
    this.buy.onTap = () => this.onBuy?.();
    this.sell.onTap = () => this.onSell?.();

    this.addChild(this.bg, this.avatar, this.user, this.accountNo, this.bell, this.kind, this.availLabel, this.coin, this.availValue, this.posLabel, this.posValue);
    this.addChild(this.amount, this.price, ...this.pcts, this.pencil, this.reduce, this.tpsl, this.auto, this.autoStatus, this.buy, this.sell);
  }

  /** `compact`: sem a linha da conta (telemóvel). */
  layout(w: number, compact = this.compact): void {
    this.w = w;
    this.compact = compact;
    const px = 18;
    const inner = w - px * 2;
    this.bg.clear();
    if (!compact) this.bg.rect(0, 64, w, 1).fill(T.border);
    for (const v of [this.avatar, this.user, this.accountNo, this.bell]) v.visible = !compact;
    this.avatar.position.set(px + 18, 32);
    this.user.position.set(px + 46, 13);
    this.accountNo.position.set(px + 46, 34);
    this.bell.position.set(w - px - 12, 32);

    let y = compact ? 12 : 80;
    this.kind.position.set(px, y);
    this.kind.layout(inner, 36);
    y += 36 + 16;
    this.availLabel.position.set(px, y);
    this.availValue.position.set(w - px, y);
    this.coin.position.set(w - px - this.availValue.width - 12, y + 8);
    y += 24;
    this.posLabel.position.set(px, y);
    this.posValue.position.set(w - px, y);
    y += 28;

    const split = this.kind.index > 0;
    this.price.visible = split;
    const fw = split ? (inner - 8) * 0.56 : inner;
    this.amount.position.set(px, y);
    this.amount.layout(fw);
    this.price.position.set(px + fw + 8, y);
    this.price.layout(inner - fw - 8);
    y += 42 + 10;

    const pw = 32;
    const bw = (inner - pw - 4 * 6) / 4;
    this.pcts.forEach((b, i) => {
      b.position.set(px + i * (bw + 6), y);
      b.setSize(bw, 30);
    });
    (this.pencil.getChildByLabel('bg') as Graphics).clear().roundRect(0, 0, pw, 30, 7).fill(T.btnGray);
    this.pencil.children[1].position.set(pw / 2, 15);
    this.pencil.hitArea = new Rectangle(0, 0, pw, 30);
    this.pencil.position.set(w - px - pw, y);
    y += 30 + 22;

    for (const c of [this.reduce, this.tpsl, this.auto]) {
      c.position.set(px, y);
      y += 28;
    }
    this.autoStatus.position.set(w - px, this.auto.y);
    y += 6;
    const hw = (inner - 10) / 2;
    this.buy.position.set(px, y);
    this.buy.setSize(hw, 42);
    this.sell.position.set(px + hw + 10, y);
    this.sell.setSize(hw, 42);
  }

  relayout(): void {
    this.layout(this.w);
  }

  setAvailable(v: string): void {
    this.availValue.text = v;
    this.coin.x = this.w - 18 - this.availValue.width - 12;
  }

  setPosition(v: string): void {
    this.posValue.text = v;
  }

  setAutoStatus(s: string, color: number = T.dim): void {
    this.autoStatus.text = s;
    this.autoStatus.style.fill = color;
  }
}
