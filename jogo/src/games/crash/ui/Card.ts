import { Container, Graphics, type Text } from 'pixi.js';
import { C, R, FONT_MONO } from '../theme';
import { makeText } from '../text';
import { Field } from './Field';
import { Chips } from './Chips';
import { Toggle } from './Toggle';
import { Segmented } from './Segmented';
import { CtaButton } from './CtaButton';

/** Cartão branco com borda fina e cantos de 20 px. */
export function drawCard(g: Graphics, w: number, h: number): void {
  g.clear().roundRect(0, 0, w, h, R.card).fill(C.border);
  g.roundRect(1, 1, w - 2, h - 2, R.card - 1).fill(C.card);
}

abstract class Card extends Container {
  protected readonly bg = new Graphics();
  protected w = 300;
  protected h = 222;
  protected pad = 20;

  constructor() {
    super();
    this.addChild(this.bg);
  }

  /** `compact`: telemóvel (margens e campos mais baixos). */
  abstract layout(w: number, h: number, compact: boolean): void;

  protected frame(w: number, h: number, compact: boolean): void {
    this.w = w;
    this.h = h;
    this.pad = compact ? 16 : 20;
    drawCard(this.bg, w, h);
  }
}

abstract class TitledCard extends Card {
  protected readonly title: Text;
  protected readonly hint: Text;

  constructor(title: string, hint: string) {
    super();
    this.title = makeText(title, { fontSize: 13, fontWeight: '600', fill: C.muted });
    this.hint = makeText(hint, { fontSize: 13, fontWeight: '500', fill: C.faint });
    this.hint.anchor.set(1, 0);
    this.addChild(this.title, this.hint);
  }

  protected frame(w: number, h: number, compact: boolean): void {
    super.frame(w, h, compact);
    this.title.position.set(this.pad, 18);
    this.hint.position.set(w - this.pad, 18);
  }
}

/** "Aposta": montante, valores rápidos e ganho se levantar agora. */
export class BetCard extends TitledCard {
  static readonly QUICK = [1, 10, 50] as const;
  readonly field: Field;
  readonly quick = new Chips(['1', '10', '50', 'Máx']);
  private readonly gainLabel: Text;
  private readonly gainValue: Text;

  constructor(steps: { label: string; onTap: () => void }[]) {
    super('Aposta', 'mín. 0,10');
    this.field = new Field({ value: '0,00', unit: 'moedas', steps });
    this.gainLabel = makeText('', { fontSize: 13, fontWeight: '500', fill: C.muted });
    this.gainLabel.anchor.set(0, 1);
    this.gainValue = makeText('', { fontSize: 13, fontWeight: '600', fontFamily: FONT_MONO, fill: C.text });
    this.gainValue.anchor.set(1, 1);
    this.addChild(this.field, this.quick, this.gainLabel, this.gainValue);
  }

  layout(w: number, h: number, compact: boolean): void {
    this.frame(w, h, compact);
    const iw = w - this.pad * 2;
    const fh = compact ? 52 : 58;
    this.field.position.set(this.pad, 44);
    this.field.layout(iw, fh);
    this.quick.position.set(this.pad, 44 + fh + 10);
    this.quick.layout(iw, compact ? 34 : 36);
    this.gainLabel.position.set(this.pad, h - 18);
    this.gainValue.position.set(w - this.pad, h - 18);
  }

  setGain(label: string, value: string, positive: boolean): void {
    this.gainLabel.text = label;
    this.gainValue.text = value;
    this.gainValue.style.fill = positive ? C.blue : C.text;
  }

  setLocked(on: boolean): void {
    this.field.setLocked(on);
    this.quick.setLocked(on);
  }
}

/** "Levantar automático": multiplicador, valores rápidos e interruptor. */
export class AutoCard extends TitledCard {
  readonly field: Field;
  readonly quick = new Chips(['1,5×', '2×', '3×', '10×']);
  readonly toggle = new Toggle();
  private readonly state: Text;

  constructor(steps: { label: string; onTap: () => void }[]) {
    super('Levantar automático', 'opcional');
    this.field = new Field({ value: '2,00', unit: '×', steps });
    this.state = makeText('Ativo', { fontSize: 14, fontWeight: '500', fill: C.text });
    this.state.anchor.set(0, 0.5);
    this.addChild(this.field, this.quick, this.state, this.toggle);
  }

  layout(w: number, h: number, compact: boolean): void {
    this.frame(w, h, compact);
    const iw = w - this.pad * 2;
    const fh = compact ? 52 : 58;
    this.field.position.set(this.pad, 44);
    this.field.layout(iw, fh);
    this.quick.position.set(this.pad, 44 + fh + 10);
    this.quick.layout(iw, compact ? 34 : 36);
    this.state.position.set(this.pad, h - 18 - Toggle.H / 2);
    this.toggle.position.set(w - this.pad - Toggle.W, h - 18 - Toggle.H);
  }

  setActive(on: boolean): void {
    this.state.text = on ? 'Ativo' : 'Desligado';
    this.toggle.set(on);
    this.field.alpha = this.quick.alpha = on ? 1 : 0.45;
  }

  setLocked(on: boolean): void {
    this.field.setLocked(on);
    this.quick.setLocked(on);
    this.toggle.setLocked(on);
  }
}

/** Manual / Auto e o botão azul principal (Apostar / Levantar). */
export class PlayCard extends Card {
  readonly mode = new Segmented(['Manual', 'Auto']);
  readonly cta = new CtaButton();
  private readonly footLeft: Text;
  private readonly footRight: Text;

  constructor() {
    super();
    this.footLeft = makeText('Jogo de demonstração. Sem dinheiro real.', { fontSize: 12, fontWeight: '500', fill: C.faint });
    this.footRight = makeText('', { fontSize: 12, fontWeight: '500', fill: C.faint });
    this.footRight.anchor.set(1, 0);
    this.addChild(this.mode, this.cta, this.footLeft, this.footRight);
  }

  layout(w: number, h: number, compact: boolean): void {
    this.frame(w, h, compact);
    const iw = w - this.pad * 2;
    this.mode.position.set(this.pad, compact ? 14 : 18);
    this.mode.layout(iw);
    const top = this.mode.y + Segmented.HEIGHT + (compact ? 10 : 12);
    const footY = h - (compact ? 14 : 18) - 14;
    this.cta.position.set(this.pad, top);
    this.cta.layout(iw, footY - 10 - top);
    this.footLeft.position.set(this.pad, footY);
    this.footRight.position.set(w - this.pad, footY);
    // No telemóvel o texto da direita não cabe ao lado do aviso.
    this.footRight.visible = !compact;
  }

  setHint(text: string): void {
    this.footRight.text = text;
  }

  setLocked(on: boolean): void {
    this.mode.setLocked(on);
  }
}
