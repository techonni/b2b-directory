import { Container, Graphics, Rectangle, type Text } from 'pixi.js';
import gsap from 'gsap';
import { C, R } from '../theme';
import { makeMono, makeText } from '../text';
import { sound } from '../audio/Sound';
import { scrollGesture } from '../../../core/ui/ScrollBox';

/** Torna um contentor tocável (com efeito de pressão), ignorando toques que foram arrastos de scroll. */
export function pressable(view: Container, onTap: () => void, isLocked: () => boolean = () => false, target: Container = view): void {
  view.eventMode = 'static';
  view.cursor = 'pointer';
  const release = () => gsap.to(target.scale, { x: 1, y: 1, duration: 0.18, ease: 'back.out(3)' });
  view.on('pointerdown', () => {
    if (!isLocked()) gsap.to(target.scale, { x: 0.95, y: 0.95, duration: 0.08 });
  });
  view.on('pointerup', release);
  view.on('pointerupoutside', release);
  view.on('pointertap', () => {
    if (isLocked() || scrollGesture.dragged) return;
    sound.play('click');
    onTap();
  });
}

/** Botão pequeno centrado (½, 2×, −, +). A posição é o centro. */
export class SmallButton extends Container {
  private readonly bg = new Graphics();
  private readonly body = new Container();
  private locked = false;

  constructor(label: string, onTap: () => void, size = 40) {
    super();
    const t = makeText(label, { fontSize: 15, fontWeight: '600', fill: C.text });
    t.anchor.set(0.5);
    this.body.addChild(this.bg, t);
    this.addChild(this.body);
    this.setSize(size);
    pressable(this, onTap, () => this.locked, this.body);
  }

  setSize(size: number): void {
    this.bg.clear().roundRect(-size / 2, -size / 2, size, size, R.small).fill(C.bgSoft);
    this.hitArea = new Rectangle(-size / 2, -size / 2, size, size);
  }

  setLocked(on: boolean): void {
    this.locked = on;
    this.cursor = on ? 'default' : 'pointer';
  }
}

/** Caixa de valor: número em Geist Mono + unidade pequena, com dois botões à direita. */
export class ValueBox extends Container {
  onFocus: (() => void) | null = null;
  private readonly box = new Graphics();
  private readonly hit = new Container();
  private readonly value: Text;
  private readonly unit: Text;
  private readonly caret = new Graphics();
  private readonly shaker = new Container();
  readonly buttons: SmallButton[];
  private w = 300;
  private h = 58;
  private focused = false;
  private locked = false;
  private caretTween: gsap.core.Tween | null = null;

  constructor(unit: string, buttons: { label: string; onTap: () => void }[]) {
    super();
    this.value = makeMono('0,00', { fontSize: 24, fontWeight: '600', fill: C.text });
    this.value.anchor.set(0, 0.5);
    this.unit = makeText(unit, { fontSize: 14, fontWeight: '500', fill: C.textSoft });
    this.unit.anchor.set(0, 0.5);
    this.caret.rect(0, -12, 2, 24).fill(C.accent);
    this.caret.visible = false;
    this.buttons = buttons.map((b) => new SmallButton(b.label, b.onTap));
    this.shaker.addChild(this.box, this.hit, this.value, this.unit, this.caret, ...this.buttons);
    this.addChild(this.shaker);
    this.hit.eventMode = 'static';
    this.hit.cursor = 'text';
    this.hit.on('pointertap', () => {
      if (this.locked || scrollGesture.dragged) return;
      sound.play('click', 0.6);
      this.onFocus?.();
    });
  }

  layout(w: number, h: number): void {
    this.w = w;
    this.h = h;
    const small = h < 54;
    this.value.style.fontSize = small ? 21 : 24;
    const bs = small ? 36 : 40;
    this.box.clear().roundRect(0, 0, w, h, R.input).fill(C.bgPanel).stroke({ width: this.focused ? 1.5 : 1, color: this.focused ? C.accent : C.border, alignment: 1 });
    this.buttons.forEach((b, i) => {
      b.setSize(bs);
      b.position.set(w - 8 - bs / 2 - (this.buttons.length - 1 - i) * (bs + 6), h / 2);
    });
    const inputW = w - 8 - this.buttons.length * (bs + 6);
    this.hit.hitArea = new Rectangle(0, 0, inputW, h);
    this.value.position.set(16, h / 2);
    this.place();
  }

  setValue(v: string): void {
    this.value.text = v;
    this.place();
  }

  setFocused(on: boolean): void {
    if (this.focused === on) return;
    this.focused = on;
    this.caret.visible = on;
    this.caretTween?.kill();
    this.caretTween = on ? gsap.fromTo(this.caret, { alpha: 1 }, { alpha: 0, duration: 0.5, repeat: -1, yoyo: true, ease: 'steps(1)' }) : null;
    this.layout(this.w, this.h);
  }

  setLocked(on: boolean): void {
    this.locked = on;
    this.shaker.alpha = on ? 0.7 : 1;
    this.hit.cursor = on ? 'default' : 'text';
    for (const b of this.buttons) b.setLocked(on);
  }

  shake(): void {
    gsap.fromTo(this.shaker, { x: -8 }, { x: 0, duration: 0.45, ease: 'elastic.out(1.2, 0.3)' });
  }

  private place(): void {
    this.caret.position.set(this.value.x + this.value.width + 2, this.h / 2);
    this.unit.position.set(this.value.x + this.value.width + (this.focused ? 10 : 6), this.h / 2 + 2);
  }
}

/** Fila de atalhos (1 · 10 · 50 · Máx): o escolhido fica preto. */
export class Chips extends Container {
  private readonly items: { view: Container; body: Container; bg: Graphics; label: Text }[] = [];
  private selected = -1;
  private locked = false;
  private w = 300;
  private h = 36;

  constructor(labels: string[], onPick: (i: number) => void) {
    super();
    labels.forEach((l, i) => {
      const view = new Container();
      const body = new Container();
      const bg = new Graphics();
      const label = makeText(l, { fontSize: 13, fontWeight: '600', fill: C.text });
      label.anchor.set(0.5);
      body.addChild(bg, label);
      view.addChild(body);
      pressable(view, () => onPick(i), () => this.locked, body);
      this.addChild(view);
      this.items.push({ view, body, bg, label });
    });
  }

  layout(w: number, h = 36): void {
    this.w = w;
    this.h = h;
    const gap = 6;
    const iw = (w - gap * (this.items.length - 1)) / this.items.length;
    this.items.forEach((it, i) => {
      const on = i === this.selected;
      it.view.position.set(i * (iw + gap) + iw / 2, h / 2);
      it.bg.clear().roundRect(-iw / 2, -h / 2, iw, h, R.small).fill(on ? C.ink : C.bgPanel).stroke({ width: 1, color: on ? C.ink : C.border, alignment: 1 });
      it.label.style.fill = on ? C.onAccent : C.text;
      it.view.hitArea = new Rectangle(-iw / 2, -h / 2, iw, h);
    });
  }

  select(i: number): void {
    if (i === this.selected) return;
    this.selected = i;
    this.layout(this.w, this.h);
  }

  setLocked(on: boolean): void {
    this.locked = on;
    this.alpha = on ? 0.7 : 1;
    for (const it of this.items) it.view.cursor = on ? 'default' : 'pointer';
  }
}

/** Interruptor azul (ligado) / cinzento (desligado). A posição é o canto superior esquerdo. */
export class Switch extends Container {
  static readonly W = 40;
  static readonly H = 24;
  isOn = true;
  onChange: ((on: boolean) => void) | null = null;
  private readonly track = new Graphics();
  private readonly knob = new Graphics();
  private locked = false;

  constructor() {
    super();
    this.knob.circle(0, 0, 9).fill(C.onAccent);
    this.addChild(this.track, this.knob);
    this.hitArea = new Rectangle(-8, -10, Switch.W + 16, Switch.H + 20);
    pressable(this, () => this.set(!this.isOn, true), () => this.locked, new Container());
    this.draw(false);
  }

  set(on: boolean, emit = false): void {
    if (on === this.isOn) return;
    this.isOn = on;
    this.draw(true);
    if (emit) this.onChange?.(on);
  }

  setLocked(on: boolean): void {
    this.locked = on;
    this.alpha = on ? 0.5 : 1;
    this.cursor = on ? 'default' : 'pointer';
  }

  private draw(animate: boolean): void {
    this.track.clear().roundRect(0, 0, Switch.W, Switch.H, Switch.H / 2).fill(this.isOn ? C.accent : C.border);
    const x = this.isOn ? Switch.W - 12 : 12;
    if (animate) gsap.to(this.knob, { x, duration: 0.2, ease: 'power2.out' });
    else this.knob.x = x;
    this.knob.y = Switch.H / 2;
  }
}

/** Seletor Manual / Auto: fundo cinzento claro com indicador branco deslizante. */
export class Segmented extends Container {
  onChange: ((index: number) => void) | null = null;
  index = 0;
  private readonly bg = new Graphics();
  private readonly knob = new Graphics();
  private readonly labels: Text[];
  private w = 300;
  private locked = false;

  constructor(options: string[]) {
    super();
    this.addChild(this.bg, this.knob);
    this.labels = options.map((o, i) => {
      const t = makeText(o, { fontSize: 13, fontWeight: '600', fill: C.textMuted });
      t.anchor.set(0.5);
      t.eventMode = 'static';
      t.cursor = 'pointer';
      t.on('pointertap', () => {
        if (!scrollGesture.dragged) this.select(i);
      });
      this.addChild(t);
      return t;
    });
    this.eventMode = 'static';
  }

  layout(w: number, h = 38): void {
    this.w = w;
    const segW = (w - 8) / this.labels.length;
    this.bg.clear().roundRect(0, 0, w, h, 12).fill(C.bgSoft);
    this.knob.clear().roundRect(0, 1, segW, h - 8, 9).fill({ color: 0x000000, alpha: 0.06 });
    this.knob.roundRect(0, 0, segW, h - 8, 9).fill(C.bgPanel);
    this.knob.position.set(4 + this.index * segW, 4);
    this.labels.forEach((t, i) => {
      t.position.set(4 + segW * (i + 0.5), h / 2);
      t.hitArea = new Rectangle(-segW / 2, -h / 2, segW, h);
      t.style.fill = i === this.index ? C.text : C.textMuted;
    });
  }

  setLocked(on: boolean): void {
    this.locked = on;
    this.alpha = on ? 0.5 : 1;
  }

  select(i: number): void {
    if (this.locked || i === this.index) return;
    this.index = i;
    sound.play('click');
    const segW = (this.w - 8) / this.labels.length;
    gsap.to(this.knob, { x: 4 + i * segW, duration: 0.25, ease: 'power3.out' });
    this.labels.forEach((t, j) => (t.style.fill = j === i ? C.text : C.textMuted));
    this.onChange?.(i);
  }
}

/** Botão principal: rótulo grande à esquerda; legenda + valor (mono) à direita. */
export class ActionButton extends Container {
  onTap: (() => void) | null = null;
  private readonly body = new Container();
  private readonly bg = new Graphics();
  private readonly labelText: Text;
  private readonly caption: Text;
  private readonly value: Text;
  private w = 300;
  private h = 110;
  private color: number = C.accent;

  constructor() {
    super();
    this.labelText = makeText('Apostar', { fontSize: 24, fontWeight: '600', fill: C.onAccent, letterSpacing: -0.4 });
    this.labelText.anchor.set(0, 0.5);
    this.caption = makeText('', { fontSize: 12, fontWeight: '500', fill: C.onAccent });
    this.caption.alpha = 0.75;
    this.caption.anchor.set(1, 1);
    this.value = makeMono('', { fontSize: 20, fontWeight: '600', fill: C.onAccent });
    this.value.anchor.set(1, 0);
    this.body.addChild(this.bg, this.labelText, this.caption, this.value);
    this.addChild(this.body);
    pressable(this, () => this.onTap?.(), () => false, this.body);
  }

  layout(w: number, h: number): void {
    this.w = w;
    this.h = h;
    this.redraw();
  }

  set(label: string, caption: string, value: string, color: number = C.accent): void {
    if (this.labelText.text !== label) this.labelText.text = label;
    if (this.caption.text !== caption) this.caption.text = caption;
    if (this.value.text !== value) this.value.text = value;
    if (color !== this.color) {
      this.color = color;
      this.redraw();
    }
    this.fit();
  }

  private redraw(): void {
    const { w, h } = this;
    this.body.position.set(w / 2, h / 2);
    this.bg.clear().roundRect(-w / 2, -h / 2, w, h, R.btn).fill(this.color);
    this.hitArea = new Rectangle(0, 0, w, h);
    const small = h < 80;
    this.labelText.style.fontSize = small ? 21 : 24;
    this.value.style.fontSize = small ? 18 : 20;
    this.labelText.position.set(-w / 2 + 22, 0);
    const hasCaption = this.caption.text !== '';
    this.caption.position.set(w / 2 - 22, hasCaption ? -1 : 0);
    this.value.position.set(w / 2 - 22, hasCaption ? 1 : -this.value.height / 2);
    this.fit();
  }

  /** Encolhe o rótulo se não couber ao lado do valor. */
  private fit(): void {
    const hasCaption = this.caption.text !== '';
    this.value.position.y = hasCaption ? 1 : -this.value.height / 2;
    this.caption.position.y = hasCaption ? -1 : 0;
    this.labelText.scale.set(1);
    const room = this.w - 44 - Math.max(this.value.width, this.caption.width) - 14;
    if (this.labelText.width > room) this.labelText.scale.set(Math.max(0.6, room / this.labelText.width));
  }
}
