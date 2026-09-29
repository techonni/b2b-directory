import { Container, Graphics, Rectangle, type Text } from 'pixi.js';
import gsap from 'gsap';
import { C, R } from '../theme';
import { makeText } from '../text';
import { sound } from '../audio/Sound';
import { coinIcon } from '../../../core/icons';

/** Caixa com rótulo e valor (Duração / Aposta / Pagamento). */
export class Tile extends Container {
  onTap: (() => void) | null = null;
  private readonly bg = new Graphics();
  private readonly title: Text;
  private readonly value: Text;
  private readonly coin = coinIcon(22);
  private w = 100;

  constructor(label: string, private readonly tappable = true, withCoin = true) {
    super();
    this.title = makeText(label, { fontSize: 15, fontWeight: '600', fill: C.textMuted });
    this.value = makeText('', { fontSize: 22, fontWeight: '500', fill: C.text });
    this.title.anchor.set(0.5, 0);
    this.value.anchor.set(0, 0);
    this.coin.visible = withCoin;
    this.addChild(this.bg, this.title, this.value, this.coin);
    if (tappable) {
      this.eventMode = 'static';
      this.cursor = 'pointer';
      this.on('pointerdown', () => gsap.fromTo(this.bg, { alpha: 0.7 }, { alpha: 1, duration: 0.3 }));
      this.on('pointertap', () => {
        sound.play('click');
        this.onTap?.();
      });
    }
  }

  layout(w: number, h: number): void {
    this.bg.clear().roundRect(0, 0, w, h, R.input + 2).fill(C.border);
    this.bg.roundRect(2, 2, w - 4, h - 4, R.input).fill(C.bgInput);
    this.title.position.set(w / 2, 12);
    this.w = w;
    this.placeValue();
    this.hitArea = new Rectangle(0, 0, w, h);
  }

  setValue(v: string): void {
    if (this.value.text !== v) {
      this.value.text = v;
      this.placeValue();
      if (this.tappable) gsap.fromTo(this.value.scale, { x: 1.12, y: 1.12 }, { x: 1, y: 1, duration: 0.3, ease: 'back.out(3)' });
    }
  }

  /** Valor + moeda C centrados na caixa. */
  private placeValue(): void {
    const coinW = this.coin.visible ? 22 + 6 : 0;
    const x = (this.w - (this.value.width + coinW)) / 2;
    this.value.position.set(x, 38);
    this.coin.position.set(x + this.value.width + 6 + 11, 38 + this.value.height / 2);
  }
}
