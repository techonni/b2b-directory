import { Container, FillGradient, Graphics, type Text } from 'pixi.js';
import gsap from 'gsap';
import { T } from '../theme';
import { hhmm, num, pct } from '../format';
import type { Instrument, Market } from '../market/Market';
import { onTap, txt } from '../ui/widgets';

/** Etiqueta pequena (símbolo, intensidade, sentimento). */
function tag(g: Graphics, t: Text, s: string, color: number, bg: number, x: number): number {
  t.text = s;
  t.style.fill = color;
  const w = t.width + 12;
  g.roundRect(x, 0, w, 18, 4).fill(bg);
  t.position.set(x + 6, 9 - t.height / 2);
  return x + w + 6;
}

/**
 * "Insights em tempo real": notas geradas a partir do próprio mercado simulado
 * (não são notícias reais). Muda a cada 15 s ou ao tocar.
 */
export class Insights extends Container {
  onSelect: ((id: string) => void) | null = null;
  private readonly bg = new Graphics();
  private readonly title: Text;
  private readonly card = new Container();
  private readonly art = new Graphics();
  private readonly tags = new Graphics();
  private readonly tagTexts = [0, 1, 2].map(() => txt('', 10, T.text, '700'));
  private readonly headline: Text;
  private readonly body: Text;
  private readonly time: Text;
  private readonly skyGrad = new FillGradient({
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
    colorStops: [
      { offset: 0, color: '#1d2a22' },
      { offset: 1, color: '#070908' },
    ],
  });
  private cur: Instrument | null = null;
  private idx = 0;
  private timer = 0;
  private w = 312;
  private h = 300;

  constructor(private readonly market: Market) {
    super();
    this.title = txt('Insights em tempo real', 16, T.text, '700');
    this.headline = txt('', 14, T.text, '700');
    this.body = txt('', 12, T.muted, '500');
    this.time = txt('', 11, T.dim, '500');
    const tagBox = new Container();
    tagBox.addChild(this.tags, ...this.tagTexts);
    tagBox.label = 'tags';
    this.card.addChild(this.art, tagBox, this.headline, this.body, this.time);
    onTap(this.card, () => this.cur && this.onSelect?.(this.cur.id));
    this.addChild(this.bg, this.title, this.card);
  }

  layout(w: number, h: number): void {
    this.w = w;
    this.h = h;
    this.bg.clear().rect(0, 0, w, 1).fill(T.border);
    this.title.position.set(18, 18);
    this.card.position.set(18, 52);
    this.render(false);
  }

  update(dt: number): void {
    this.timer += dt;
    if (this.timer > 15000 || !this.cur) {
      this.timer = 0;
      this.next();
    }
  }

  private next(): void {
    const movers = [...this.market.all].sort((a, b) => Math.abs(b.chg) - Math.abs(a.chg)).slice(0, 6);
    this.cur = movers[this.idx++ % movers.length];
    this.render(true);
  }

  private render(animate: boolean): void {
    const i = this.cur;
    if (!i) return;
    const cw = this.w - 36;
    const avail = this.h - 52 - 12;
    const ah = Math.min(150, Math.round(cw * 0.52), avail - 140);
    const showArt = ah >= 60;
    this.drawArt(cw, showArt ? ah : 0, i);
    this.art.visible = showArt;

    const up = i.chg >= 0;
    const strong = Math.abs(i.chg) > 1.5;
    const tags = this.card.getChildByLabel('tags')!;
    tags.y = showArt ? ah + 12 : 0;
    this.tags.clear();
    let x = tag(this.tags, this.tagTexts[0], i.id, T.text, T.rowSel, 0);
    x = tag(this.tags, this.tagTexts[1], strong ? 'Forte' : 'Moderado', 0x1a1400, T.coin, x);
    tag(this.tags, this.tagTexts[2], up ? 'Positivo' : 'Negativo', up ? 0x04150a : 0xffffff, up ? T.green : T.red, x);

    const d = i.def.dec;
    this.headline.text = up
      ? `${i.id} ${strong ? 'dispara' : 'sobe'} ${pct(i.chg)} na sessão simulada`
      : `${i.id} ${strong ? 'afunda' : 'recua'} ${pct(i.chg)} na sessão simulada`;
    this.body.text = `Negociado a ${num(i.price, d)}, entre ${num(i.low, d)} e ${num(i.high, d)}. ${Math.round(i.buyers)}% das ordens no livro são de compra.`;
    for (const t of [this.headline, this.body]) {
      t.style.wordWrap = true;
      t.style.wordWrapWidth = cw;
    }
    this.headline.style.lineHeight = 19;
    this.body.style.lineHeight = 17;
    this.headline.y = tags.y + 28;
    this.body.y = this.headline.y + this.headline.height + 6;
    this.time.text = `Agora mesmo, ${hhmm(new Date())} · gerado pela simulação`;
    this.time.y = this.body.y + this.body.height + 8;
    this.body.visible = this.time.y + 16 < avail || showArt;
    if (animate) gsap.fromTo(this.card, { alpha: 0 }, { alpha: 1, duration: 0.5, ease: 'power2.out' });
  }

  /** Ilustração: ecrã com gráfico e brilho verde/vermelho. */
  private drawArt(w: number, h: number, i: Instrument): void {
    const g = this.art.clear();
    if (!h) return;
    const up = i.chg >= 0;
    const col = up ? T.greenText : T.redText;
    g.roundRect(0, 0, w, h, 10).fill(this.skyGrad);
    g.circle(w * 0.7, h * 0.35, h * 0.55).fill({ color: col, alpha: 0.08 });
    // Monitor
    const mx = w * 0.18;
    const mw = w * 0.64;
    const my = h * 0.14;
    const mh = h * 0.6;
    g.roundRect(mx, my, mw, mh, 6).fill(0x0b0d0c).stroke({ width: 2, color: 0x2a2e2c });
    g.rect(w / 2 - 6, my + mh, 12, h * 0.12).fill(0x2a2e2c);
    g.roundRect(w / 2 - 30, my + mh + h * 0.12, 60, 4, 2).fill(0x2a2e2c);
    // Velas
    const n = 14;
    const cw = (mw - 24) / n;
    let p = up ? 0.25 : 0.75;
    for (let k = 0; k < n; k++) {
      const o = p;
      p = Math.min(0.88, Math.max(0.12, p + (up ? 0.045 : -0.045) + Math.sin(k * 2.3 + i.id.length) * 0.09));
      const x = mx + 12 + k * cw;
      const top = my + 6 + (mh - 12) * (1 - Math.max(o, p));
      const bot = my + 6 + (mh - 12) * (1 - Math.min(o, p));
      const c = p >= o ? T.greenText : T.redText;
      g.rect(x + cw * 0.3 - 0.5, top - 5, 1, bot - top + 10).fill(c);
      g.rect(x, top, cw * 0.6, Math.max(3, bot - top)).fill(c);
    }
    g.roundRect(0, 0, w, h, 10).stroke({ width: 1, color: T.border });
  }
}
