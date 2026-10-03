import { Container, Graphics, type Text } from 'pixi.js';
import { C, R } from '../theme';
import { makeMono, makeText } from '../text';
import { ActionButton, Chips, Segmented, Switch, ValueBox } from './controls';

/** Cartão branco com contorno e cabeçalho (título à esquerda, nota à direita). */
abstract class Card extends Container {
  protected readonly bg = new Graphics();
  protected readonly title: Text | null;
  protected readonly note: Text | null;
  protected w = 300;
  protected h = 222;
  /** Telemóvel: margens e alturas mais pequenas. */
  protected compact = false;

  constructor(title?: string, note?: string) {
    super();
    this.addChild(this.bg);
    this.title = title ? makeText(title, { fontSize: 13, fontWeight: '600', fill: C.textMuted }) : null;
    this.note = note ? makeText(note, { fontSize: 13, fontWeight: '500', fill: C.textSoft }) : null;
    if (this.note) this.note.anchor.set(1, 0);
    if (this.title) this.addChild(this.title);
    if (this.note) this.addChild(this.note);
  }

  get padX(): number {
    return this.compact ? 16 : 20;
  }

  get padY(): number {
    return this.compact ? 14 : 18;
  }

  layout(w: number, h: number, compact: boolean): void {
    this.w = w;
    this.h = h;
    this.compact = compact;
    this.bg.clear().roundRect(0, 0, w, h, R.panel).fill(C.bgPanel).stroke({ width: 1, color: C.border, alignment: 1 });
    this.title?.position.set(this.padX, this.padY);
    this.note?.position.set(w - this.padX, this.padY);
    this.place();
  }

  protected abstract place(): void;

  /** Altura natural do cartão (telemóvel). */
  static height(compact: boolean): number {
    return compact ? 178 : 222;
  }
}

/** Aposta: montante, ½ / 2×, atalhos (1 · 10 · 50 · Máx) e ganho. */
export class BetCard extends Card {
  readonly box: ValueBox;
  readonly chips: Chips;
  private readonly gainLabel: Text;
  private readonly gainValue: Text;

  constructor(half: () => void, double: () => void, pick: (i: number) => void) {
    super('Aposta', 'moedas virtuais');
    this.box = new ValueBox('moedas', [
      { label: '½', onTap: half },
      { label: '2×', onTap: double },
    ]);
    this.chips = new Chips(['1', '10', '50', 'Máx'], pick);
    this.gainLabel = makeText('Ganho se levantar agora', { fontSize: 13, fontWeight: '500', fill: C.textMuted });
    this.gainLabel.anchor.set(0, 0.5);
    this.gainValue = makeMono('+0,00', { fontSize: 14, fontWeight: '600', fill: C.text });
    this.gainValue.anchor.set(1, 0.5);
    this.addChild(this.box, this.chips, this.gainLabel, this.gainValue);
  }

  setGain(label: string, value: string, live: boolean): void {
    this.gainLabel.text = label;
    this.gainValue.text = value;
    this.gainValue.style.fill = live ? C.accent : C.text;
  }

  protected place(): void {
    const { padX, padY, w, h } = this;
    const c = this.compact;
    const boxY = padY + (c ? 24 : 28);
    const boxH = c ? 50 : 58;
    this.box.position.set(padX, boxY);
    this.box.layout(w - padX * 2, boxH);
    this.chips.position.set(padX, boxY + boxH + (c ? 8 : 10));
    this.chips.layout(w - padX * 2, c ? 34 : 36);
    const gy = h - padY - 9;
    this.gainLabel.position.set(padX, gy);
    this.gainValue.position.set(w - padX, gy);
  }
}

/** Levantar automático: multiplicador alvo, − / +, atalhos e interruptor "Ativo". */
export class AutoCard extends Card {
  readonly box: ValueBox;
  readonly chips: Chips;
  readonly toggle = new Switch();
  private readonly toggleLabel: Text;

  constructor(minus: () => void, plus: () => void, pick: (i: number) => void, presets: string[]) {
    super('Levantar automático', 'opcional');
    this.box = new ValueBox('×', [
      { label: '−', onTap: minus },
      { label: '+', onTap: plus },
    ]);
    this.chips = new Chips(presets, pick);
    this.toggleLabel = makeText('Ativo', { fontSize: 14, fontWeight: '500', fill: C.text });
    this.toggleLabel.anchor.set(0, 0.5);
    this.addChild(this.box, this.chips, this.toggleLabel, this.toggle);
  }

  protected place(): void {
    const { padX, padY, w, h } = this;
    const c = this.compact;
    const boxY = padY + (c ? 24 : 28);
    const boxH = c ? 50 : 58;
    this.box.position.set(padX, boxY);
    this.box.layout(w - padX * 2, boxH);
    this.chips.position.set(padX, boxY + boxH + (c ? 8 : 10));
    this.chips.layout(w - padX * 2, c ? 34 : 36);
    const ty = h - padY - 12;
    this.toggleLabel.position.set(padX, ty);
    this.toggle.position.set(w - padX - Switch.W, ty - Switch.H / 2);
  }
}

/** Manual / Auto + botão principal + rodapé. */
export class ActionCard extends Card {
  readonly mode = new Segmented(['Manual', 'Auto']);
  readonly play = new ActionButton();
  private readonly footLeft: Text;
  private readonly footRight: Text;

  constructor() {
    super();
    this.footLeft = makeText('Jogo de demonstração. Sem dinheiro real.', { fontSize: 12, fontWeight: '400', fill: C.textSoft });
    this.footLeft.anchor.set(0, 1);
    this.footRight = makeText('', { fontSize: 12, fontWeight: '400', fill: C.textSoft });
    this.footRight.anchor.set(1, 1);
    this.addChild(this.mode, this.play, this.footLeft, this.footRight);
  }

  setFoot(right: string, highlight = false): void {
    this.footRight.text = right;
    this.footRight.style.fill = highlight ? C.accent : C.textSoft;
    this.fitFoot();
  }

  protected place(): void {
    const { padX, padY, w, h } = this;
    const c = this.compact;
    const segH = c ? 36 : 38;
    this.mode.position.set(padX, padY);
    this.mode.layout(w - padX * 2, segH);
    const footY = h - padY;
    const top = padY + segH + (c ? 10 : 12);
    const bottom = footY - 15 - (c ? 8 : 10);
    this.play.position.set(padX, top);
    this.play.layout(w - padX * 2, bottom - top);
    this.footLeft.position.set(padX, footY);
    this.footRight.position.set(w - padX, footY);
    this.fitFoot();
  }

  /** Em cartões estreitos, o texto da esquerda encurta para não tocar no da direita. */
  private fitFoot(): void {
    const room = this.w - this.padX * 2 - this.footRight.width - 12;
    this.footLeft.text = 'Jogo de demonstração. Sem dinheiro real.';
    if (this.footLeft.width > room) this.footLeft.text = 'Demo · sem dinheiro real';
    if (this.footLeft.width > room) this.footLeft.text = 'Demo';
  }
}
