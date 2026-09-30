import { Container, FillGradient, Graphics, Rectangle, type FederatedPointerEvent, type Text } from 'pixi.js';
import gsap from 'gsap';
import { sound } from '../../../core/audio/Sound';
import { T } from '../theme';
import { compact, dayMonth, fullDate, hhmm, num, pct } from '../format';
import { TF_SEC, TIMEFRAMES, type Instrument, type Timeframe } from '../market/Market';
import type { Contract } from '../market/Account';
import { icon } from '../ui/icons';
import { IconButton, onTap, txt } from '../ui/widgets';

const HEAD_H = 76;
const TOOL_H = 44;
const AXIS_R = 74;
const AXIS_B = 30;

function dashH(g: Graphics, x1: number, x2: number, y: number, dash = 3, gap = 4): void {
  for (let x = x1; x < x2; x += dash + gap) g.moveTo(x, y).lineTo(Math.min(x + dash, x2), y);
}

function dashV(g: Graphics, x: number, y1: number, y2: number, dash = 4, gap = 4): void {
  for (let y = y1; y < y2; y += dash + gap) g.moveTo(x, y).lineTo(x, Math.min(y + dash, y2));
}

/** Escala "bonita" para o eixo dos preços. */
function niceStep(range: number, count: number): number {
  const raw = range / count;
  const mag = 10 ** Math.floor(Math.log10(raw));
  const n = raw / mag;
  return (n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10) * mag;
}

/** Pílula com texto (marcadores, eixo, etiqueta do cursor). */
class Pill extends Container {
  readonly bg = new Graphics();
  readonly caption: Text;
  constructor(
    size: number,
    private color: number,
    textColor: number,
  ) {
    super();
    this.caption = txt('', size, textColor, '600');
    this.caption.anchor.set(0.5);
    this.addChild(this.bg, this.caption);
  }
  set(text: string, color = this.color): void {
    this.color = color;
    this.caption.text = text;
    const w = this.caption.width + 14;
    const h = this.caption.height + 6;
    this.bg.clear().roundRect(-w / 2, -h / 2, w, h, 5).fill(color);
  }
}

/** Cabeçalho do símbolo, barra de ferramentas e gráfico de área em tempo real. */
export class ChartPanel extends Container {
  onExpand: (() => void) | null = null;
  tf: Timeframe = '1m';

  private readonly bg = new Graphics();
  private readonly sym: Text;
  private readonly exch: Text;
  private readonly nameText: Text;
  private readonly stats: { key: string; label: Text; value: Text }[] = [];
  private readonly tfLabels: { tf: Timeframe; t: Text }[] = [];
  private readonly tfSel = new Graphics();
  private readonly lineBtn = new IconButton('line', 30);
  private readonly indBtn = new Container();
  private readonly indText: Text;
  private readonly camBtn = new IconButton('camera', 30);
  private readonly expBtn = new IconButton('expand', 30);

  private readonly plot = new Container();
  private readonly grid = new Graphics();
  private readonly area = new Graphics();
  private readonly line = new Graphics();
  private readonly sma = new Graphics();
  private readonly marks = new Graphics();
  private readonly markPills = [new Pill(11, T.green, T.onGreen), new Pill(11, T.green, T.onGreen)];
  private readonly yLabels: Text[] = [];
  private readonly xLabels: Text[] = [];
  private readonly lastPill = new Pill(11, T.green, T.onGreen);
  private readonly hover = new Graphics();
  private readonly hoverDate = new Pill(11, T.rowSel, T.text);
  private readonly hoverPrice = new Pill(11, T.rowSel, T.text);
  private readonly flash = new Graphics();
  private readonly grad = new FillGradient({
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
    colorStops: [
      { offset: 0, color: 'rgba(107,221,74,0.28)' },
      { offset: 0.7, color: 'rgba(107,221,74,0.05)' },
      { offset: 1, color: 'rgba(107,221,74,0)' },
    ],
  });

  private readonly autoBadge = new Pill(11, T.green, T.onGreen);
  private readonly cLines = new Graphics();
  private readonly cPills: Pill[] = [];
  private contracts: Contract[] = [];
  private inst!: Instrument;
  private readonly shown = { v: 0 };
  /** false = velas (predefinido); true = linha com área. */
  private lineMode = false;
  private showSma = false;
  private hoverX: number | null = null;
  private w = 700;
  private h = 500;
  private narrow = false;

  constructor() {
    super();
    this.sym = txt('', 24, T.text, '700');
    this.exch = txt('', 13, T.muted, '500');
    this.nameText = txt('', 13, T.muted, '500');
    this.autoBadge.set('● AUTO');
    this.autoBadge.visible = false;
    this.addChild(this.bg, this.sym, this.exch, this.nameText, this.autoBadge);
    for (const [key, label] of [
      ['open', 'Abertura'],
      ['chg', 'Variação'],
      ['high', 'Máximo'],
      ['low', 'Mínimo'],
      ['vol', 'Volume'],
    ]) {
      const l = txt(label, 12, T.muted, '500');
      const v = txt('', 15, T.text, '700');
      l.anchor.set(1, 0);
      v.anchor.set(1, 0);
      this.stats.push({ key, label: l, value: v });
      this.addChild(l, v);
    }

    this.addChild(this.tfSel);
    for (const tf of TIMEFRAMES) {
      const t = txt(tf, 12, T.muted, '600');
      t.anchor.set(0.5);
      t.hitArea = new Rectangle(-t.width / 2 - 8, -14, t.width + 16, 28);
      onTap(t, () => this.setTf(tf));
      this.tfLabels.push({ tf, t });
      this.addChild(t);
    }
    this.lineBtn.onTap = () => {
      this.lineMode = !this.lineMode;
      icon('line', this.lineMode ? T.text : T.muted, this.lineBtn.glyph);
      this.draw();
    };
    const indIcon = icon('indicators', T.muted);
    this.indText = txt('Indicadores', 12, T.muted, '600');
    this.indText.position.set(14, -this.indText.height / 2);
    this.indBtn.addChild(indIcon, this.indText);
    this.indBtn.hitArea = new Rectangle(-12, -14, 110, 28);
    onTap(this.indBtn, () => {
      this.showSma = !this.showSma;
      this.indText.style.fill = this.showSma ? T.text : T.muted;
      icon('indicators', this.showSma ? T.greenText : T.muted, indIcon);
      this.draw();
    });
    this.camBtn.onTap = () => this.snapshot();
    this.expBtn.onTap = () => this.onExpand?.();
    this.addChild(this.lineBtn, this.indBtn, this.camBtn, this.expBtn);

    this.plot.addChild(this.grid, this.area, this.sma, this.line, this.marks, ...this.markPills, this.cLines, this.hover, this.lastPill, this.hoverDate, this.hoverPrice, this.flash);
    for (let i = 0; i < 8; i++) {
      const t = txt('', 11, T.muted, '500');
      t.anchor.set(0, 0.5);
      this.yLabels.push(t);
      this.plot.addChild(t);
    }
    for (let i = 0; i < 12; i++) {
      const t = txt('', 11, T.muted, '500');
      t.anchor.set(0.5, 0);
      this.xLabels.push(t);
      this.plot.addChild(t);
    }
    this.plot.eventMode = 'static';
    this.plot.on('pointermove', (e: FederatedPointerEvent) => {
      this.hoverX = this.plot.toLocal(e.global).x;
      this.draw();
    });
    this.plot.on('pointerleave', () => {
      this.hoverX = null;
      this.draw();
    });
    this.addChild(this.plot);
  }

  setInstrument(inst: Instrument): void {
    const changed = this.inst !== inst;
    this.inst = inst;
    this.sym.text = inst.id;
    this.exch.text = `/ ${inst.def.kind === 'forex' ? 'FOREX' : inst.def.kind === 'crypto' ? 'CRIPTO' : 'SPOT'} · DEMO`;
    this.nameText.text = inst.def.name;
    this.shown.v = inst.price;
    this.layoutHead();
    this.refresh();
    if (changed) gsap.fromTo(this.plot, { alpha: 0.2 }, { alpha: 1, duration: 0.35 });
  }

  layout(w: number, h: number): void {
    this.w = w;
    this.h = h;
    this.narrow = w < 640;
    this.bg.clear().rect(0, 0, w, h).fill(T.bg).rect(0, HEAD_H, w, 1).fill(T.border);
    this.layoutHead();

    // Barra de ferramentas
    const ty = HEAD_H + TOOL_H / 2;
    let x = 20;
    for (const { t } of this.tfLabels) {
      t.position.set(x + t.width / 2, ty);
      x += t.width + (this.narrow ? 16 : 22);
    }
    this.lineBtn.position.set(x + 8, ty);
    this.indBtn.position.set(x + 38, ty);
    this.indBtn.visible = !this.narrow;
    this.camBtn.position.set(w - 60, ty);
    this.expBtn.position.set(w - 24, ty);
    this.paintTf(false);

    this.plot.position.set(0, HEAD_H + TOOL_H);
    this.plot.hitArea = new Rectangle(0, 0, w, h - HEAD_H - TOOL_H);
    this.draw();
  }

  private layoutHead(): void {
    const w = this.w;
    this.sym.position.set(20, this.narrow ? 12 : 14);
    this.exch.position.set(20 + this.sym.width + 8, this.sym.y + 9);
    this.nameText.position.set(20, this.sym.y + 34);
    const ex = this.exch.visible ? this.exch.x + this.exch.width : this.sym.x + this.sym.width;
    this.autoBadge.position.set(ex + 14 + this.autoBadge.width / 2, this.sym.y + 16);
    this.exch.visible = !this.narrow;
    const shown = this.narrow ? ['chg', 'high'] : ['open', 'chg', 'high', 'low', 'vol'];
    let x = w - 20;
    for (const s of [...this.stats].reverse()) {
      const vis = shown.includes(s.key);
      s.label.visible = s.value.visible = vis;
      if (!vis) continue;
      s.label.position.set(x, 18);
      s.value.position.set(x, 38);
      x -= Math.max(this.narrow ? 64 : 76, s.value.width + 22);
    }
  }

  /** Etiqueta "AUTO" a piscar junto ao símbolo enquanto o modo automático está ligado. */
  /** Contratos abertos (desenhados como linhas de entrada com contagem decrescente). */
  setContracts(list: Contract[]): void {
    this.contracts = list;
  }

  setAuto(on: boolean): void {
    this.autoBadge.visible = on;
    gsap.killTweensOf(this.autoBadge);
    this.autoBadge.alpha = 1;
    if (on) gsap.to(this.autoBadge, { alpha: 0.45, duration: 0.7, repeat: -1, yoyo: true });
  }

  setTf(tf: Timeframe): void {
    this.tf = tf;
    this.paintTf(true);
    this.draw();
  }

  private paintTf(animate: boolean): void {
    const t = this.tfLabels.find((x) => x.tf === this.tf)!.t;
    for (const l of this.tfLabels) l.t.style.fill = l.tf === this.tf ? T.text : T.muted;
    const w = Math.max(30, t.width + 16);
    this.tfSel.clear().roundRect(-w / 2, -13, w, 26, 6).fill(T.rowSel);
    if (animate) gsap.to(this.tfSel, { x: t.x, duration: 0.25, ease: 'power3.out' });
    else this.tfSel.position.set(t.x, t.y);
    this.tfSel.y = t.y;
  }

  /** Chamado a cada segundo: estatísticas e animação do último ponto. */
  refresh(): void {
    const i = this.inst;
    const d = i.def.dec;
    const val: Record<string, [string, number]> = {
      open: [num(i.open, d), T.text],
      chg: [pct(i.chg), i.chg >= 0 ? T.greenText : T.redText],
      high: [num(i.high, d), T.text],
      low: [num(i.low, d), T.text],
      vol: [compact(i.volume), T.text],
    };
    for (const s of this.stats) {
      s.value.text = val[s.key][0];
      s.value.style.fill = val[s.key][1];
    }
    this.layoutHead();
    gsap.to(this.shown, { v: i.price, duration: 0.8, ease: 'power2.out' });
  }

  private snapshot(): void {
    sound.play('cashout');
    const h = this.h - HEAD_H - TOOL_H;
    this.flash.clear().rect(0, 0, this.w, h).fill(0xffffff);
    gsap.fromTo(this.flash, { alpha: 0.5 }, { alpha: 0, duration: 0.5, ease: 'power2.out' });
  }

  /** Redesenha o gráfico (a cada frame enquanto visível). */
  draw(): void {
    if (!this.inst) return;
    const src = this.inst.chart(this.tf);
    const bars = src.map((b) => ({ ...b }));
    const last = bars[bars.length - 1];
    last.c = this.shown.v;
    last.h = Math.max(last.h, last.c);
    last.l = Math.min(last.l, last.c);
    const closes = bars.map((b) => b.c);
    const W = this.w - AXIS_R;
    const H = this.h - HEAD_H - TOOL_H - AXIS_B;
    if (W < 50 || H < 50) return;
    let lo = Infinity;
    let hi = -Infinity;
    for (const b of bars) {
      lo = Math.min(lo, this.lineMode ? b.c : b.l);
      hi = Math.max(hi, this.lineMode ? b.c : b.h);
    }
    const padV = (hi - lo) * 0.1 || hi * 0.001;
    lo -= padV;
    hi += padV;
    const top = 34;
    const n = bars.length;
    const slot = W / n;
    const X = (i: number) => (i + 0.5) * slot;
    const Y = (p: number) => top + (1 - (p - lo) / (hi - lo)) * (H - top);
    const dec = this.inst.def.dec;

    // Grelha e eixo dos preços
    const g = this.grid.clear();
    const step = niceStep(hi - lo, 5);
    let k = 0;
    const labelDec = Math.max(2, Math.min(dec, Math.ceil(-Math.log10(step)) + 1));
    for (let v = Math.ceil(lo / step) * step; v <= hi && k < this.yLabels.length; v += step, k++) {
      dashH(g, 0, W, Math.round(Y(v)) + 0.5);
      const t = this.yLabels[k];
      t.visible = true;
      t.text = num(v, labelDec);
      t.position.set(W + 10, Y(v));
    }
    for (; k < this.yLabels.length; k++) this.yLabels[k].visible = false;
    g.stroke({ width: 1, color: T.grid });
    g.rect(0, H, W, 1).fill(T.border);

    // Eixo do tempo
    const now = Date.now();
    const sec = TF_SEC[this.tf];
    const timeOf = (i: number) => new Date(now - (n - 1 - i) * sec * 1000);
    const nX = Math.max(3, Math.min(this.xLabels.length, Math.floor(W / 90)));
    this.xLabels.forEach((t, j) => {
      t.visible = j < nX;
      if (!t.visible) return;
      const idx = Math.round(((j + 0.5) / nX) * (n - 1));
      const d = timeOf(idx);
      t.text = sec < 86400 ? hhmm(d) : sec === 86400 ? String(d.getDate()) : dayMonth(d);
      t.position.set(X(idx), H + 9);
    });

    // Velas (ou linha com área)
    const a = this.area.clear();
    const l = this.line.clear();
    if (this.lineMode) {
      a.moveTo(X(0), H);
      closes.forEach((c, i) => a.lineTo(X(i), Y(c)));
      a.lineTo(X(n - 1), H).closePath().fill(this.grad);
      closes.forEach((c, i) => (i ? l.lineTo(X(i), Y(c)) : l.moveTo(X(0), Y(c))));
      l.stroke({ width: 1.8, color: T.greenText, join: 'round' });
    } else {
      const bw = Math.max(2, Math.min(14, slot * 0.62));
      for (const up of [true, false]) {
        const color = up ? T.greenText : T.redText;
        bars.forEach((b, i) => {
          if (b.c >= b.o !== up) return;
          const x = X(i);
          const y1 = Y(Math.max(b.o, b.c));
          const y2 = Y(Math.min(b.o, b.c));
          a.rect(Math.round(x) - 0.5, Y(b.h), 1, Y(b.l) - Y(b.h));
          a.rect(x - bw / 2, y1, bw, Math.max(1, y2 - y1));
        });
        a.fill(color);
      }
    }

    // Média móvel (Indicadores)
    this.sma.clear();
    if (this.showSma) {
      const p = 14;
      for (let i = p; i < n; i++) {
        let sum = 0;
        for (let j = i - p + 1; j <= i; j++) sum += closes[j];
        const y = Y(sum / p);
        if (i === p) this.sma.moveTo(X(i), y);
        else this.sma.lineTo(X(i), y);
      }
      this.sma.stroke({ width: 1.6, color: T.coin, alpha: 0.9 });
    }

    // Marcadores: variação desde dois pontos do histórico até agora
    const m = this.marks.clear();
    [0.45, 0.8].forEach((f, j) => {
      const idx = Math.round(f * (n - 1));
      const x = Math.round(X(idx)) + 0.5;
      dashV(m, x, top - 6, H);
      const change = ((last.c - closes[idx]) / closes[idx]) * 100;
      const pill = this.markPills[j];
      pill.set(pct(change), change >= 0 ? T.green : T.red);
      pill.caption.style.fill = change >= 0 ? T.onGreen : 0xffffff;
      pill.position.set(x, top - 18);
    });
    m.stroke({ width: 1, color: T.muted, alpha: 0.5 });

    // Último preço: linha tracejada até ao eixo e etiqueta
    const ly = Y(last.c);
    const upDay = this.inst.chg >= 0;
    dashH(m, 0, W, Math.round(ly) + 0.5, 2, 3);
    m.stroke({ width: 1, color: upDay ? T.greenText : T.redText, alpha: 0.7 });
    this.lastPill.set(num(last.c, dec), upDay ? T.green : T.red);
    this.lastPill.caption.style.fill = upDay ? T.onGreen : 0xffffff;
    this.lastPill.position.set(W + this.lastPill.width / 2 + 4, ly);
    for (const t of this.yLabels) if (t.visible && Math.abs(t.y - ly) < 14) t.visible = false;

    // Contratos abertos neste par: linha na cotação de entrada + etiqueta com o tempo que falta
    const cl = this.cLines.clear();
    const mine = this.contracts.filter((c) => c.symId === this.inst.id).slice(-6);
    while (this.cPills.length < mine.length) {
      const p = new Pill(12, T.green, T.onGreen);
      this.cPills.push(p);
      this.plot.addChild(p);
    }
    this.cPills.forEach((p, j) => {
      const c = mine[j];
      p.visible = !!c;
      if (!c) return;
      const up = c.dir === 'up';
      const y = Math.round(Math.min(H - 4, Math.max(top, Y(c.entry)))) + 0.5;
      dashH(cl, 0, W, y, 6, 4);
      cl.stroke({ width: 1.5, color: up ? T.greenText : T.redText, alpha: 0.9 });
      const left = Math.max(0, Math.ceil((c.expiry - now) / 1000));
      p.set(`${up ? '▲' : '▼'} ${num(c.stake)} · ${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`, up ? T.green : T.red);
      p.caption.style.fill = up ? T.onGreen : 0xffffff;
      p.position.set(12 + p.width / 2 + j * 4, y - 14);
    });

    // Cursor com OHLC
    const hv = this.hover.clear();
    const on = this.hoverX !== null && this.hoverX >= 0 && this.hoverX <= W;
    this.hoverDate.visible = this.hoverPrice.visible = on;
    if (on) {
      const idx = Math.max(0, Math.min(n - 1, Math.floor(this.hoverX! / slot)));
      const b = bars[idx];
      const x = X(idx);
      const y = Y(b.c);
      dashV(hv, x, 0, H);
      dashH(hv, 0, W, y);
      hv.stroke({ width: 1, color: T.muted, alpha: 0.6 });
      this.hoverDate.set(`${fullDate(timeOf(idx))}  ·  A ${num(b.o, dec)}  M ${num(b.h, dec)}  m ${num(b.l, dec)}  F ${num(b.c, dec)}`);
      this.hoverDate.position.set(Math.min(W - this.hoverDate.width / 2, Math.max(this.hoverDate.width / 2, x)), H - 16);
      this.hoverPrice.set(num(b.c, dec));
      this.hoverPrice.position.set(W + this.hoverPrice.width / 2 + 4, y);
      for (const t of this.yLabels) if (t.visible && Math.abs(t.y - y) < 14) t.visible = false;
    }
  }
}
