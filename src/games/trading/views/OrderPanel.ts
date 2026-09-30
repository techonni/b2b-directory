import { Container, Graphics, type Text } from 'pixi.js';
import gsap from 'gsap';
import { Button } from '../../../core/ui/Button';
import { coinIcon } from '../../../core/icons';
import { Segmented } from '../../binary/ui/Segmented';
import { Tile } from '../../binary/ui/Tile';
import { T } from '../theme';
import { num } from '../format';
import { PROFIT } from '../market/Account';
import { txt } from '../ui/widgets';

/**
 * Painel de negociação com a mesma UI do Binary: Sobe / Desce, Duração · Aposta · Pagamento,
 * botão Comprar grande e modo automático.
 */
export class OrderPanel extends Container {
  static readonly HEIGHT = 560;
  onBuy: (() => void) | null = null;
  onAuto: (() => void) | null = null;
  onReset: (() => void) | null = null;

  readonly dir = new Segmented([
    { label: 'Sobe', color: T.greenText },
    { label: 'Desce', color: T.redText },
  ]);
  readonly duration = new Tile('Duração', true, false);
  readonly stake = new Tile('Aposta');
  readonly payout = new Tile('Pagamento', false);

  private readonly bg = new Graphics();
  private readonly acc: Text;
  private readonly coin = coinIcon(34);
  private readonly balance: Text;
  private readonly reset = new Button({ label: 'Repor', width: 104, height: 52, color: T.btnGray, fontSize: 18 });
  private readonly market = new Container();
  private readonly marketBg = new Graphics();
  private readonly marketText: Text;
  private readonly buy = new Button({ label: `Comprar · +${Math.round(PROFIT * 100)}%`, width: 300, height: 60, fontSize: 21 });
  private readonly auto = new Button({ label: '▶  Modo automático', width: 300, height: 60, color: T.btnGray, fontSize: 19 });
  private readonly autoStatus: Text;
  private readonly autoDot = new Graphics();
  private w = 360;

  constructor() {
    super();
    this.acc = txt('Conta demo', 15, T.muted, '600');
    this.balance = txt('', 28, T.text, '800');
    this.reset.onTap = () => this.onReset?.();

    this.marketText = txt('Mercado', 18, T.text, '700');
    this.marketText.anchor.set(0.5);
    this.market.addChild(this.marketBg, this.marketText);

    this.autoStatus = txt('Desligado', 15, T.muted, '600');
    this.autoStatus.anchor.set(0.5, 0);

    this.buy.onTap = () => this.onBuy?.();
    this.auto.onTap = () => this.onAuto?.();

    this.addChild(this.bg, this.acc, this.coin, this.balance, this.reset, this.market, this.dir, this.duration, this.stake, this.payout);
    this.addChild(this.buy, this.auto, this.autoDot, this.autoStatus);
  }

  layout(w: number): void {
    this.w = w;
    const px = 20;
    const inner = w - px * 2;
    this.bg.clear().rect(0, 92, w, 1).fill(T.border);

    // Saldo com moeda grande
    this.acc.position.set(px, 14);
    this.coin.position.set(px + 17, 60);
    this.balance.position.set(px + 34 + 12, 60 - this.balance.height / 2);
    this.reset.position.set(w - px - 104, 22);

    // "Mercado" a toda a largura
    let y = 110;
    this.marketBg.clear().roundRect(0, 0, inner, 52, 14).fill(T.rowSel);
    this.marketText.position.set(inner / 2, 26);
    this.market.position.set(px, y);
    y += 52 + 16;

    this.dir.position.set(px, y);
    this.dir.layout(inner, 60);
    y += 60 + 16;
    const tw = (inner - 2 * 10) / 3;
    [this.duration, this.stake, this.payout].forEach((t, i) => {
      t.position.set(px + i * (tw + 10), y);
      t.layout(tw, 80);
    });
    y += 80 + 16;
    this.buy.position.set(px, y);
    this.buy.setSize(inner, 60);
    y += 60 + 12;
    this.auto.position.set(px, y);
    this.auto.setSize(inner, 60);
    y += 60 + 12;
    this.autoStatus.position.set(w / 2 + 8, y);
    this.autoDot.position.set(w / 2 + 8 - this.autoStatus.width / 2 - 12, y + 10);
  }

  setBalance(v: number): void {
    this.balance.text = num(v);
  }

  /** Estado do modo automático: botão, luz e texto. */
  setAuto(on: boolean, status: string, color: number = T.muted): void {
    this.auto.setText(on ? '■  Parar modo automático' : '▶  Modo automático');
    this.auto.setColor(on ? T.red : T.btnGray);
    this.autoStatus.text = status;
    this.autoStatus.style.fill = color;
    this.autoDot.clear().circle(0, 0, 5).fill(on ? T.greenText : T.dim);
    this.autoDot.x = this.w / 2 + 8 - this.autoStatus.width / 2 - 12;
    gsap.killTweensOf(this.autoDot);
    this.autoDot.alpha = 1;
    if (on) gsap.to(this.autoDot, { alpha: 0.25, duration: 0.6, repeat: -1, yoyo: true });
  }
}
