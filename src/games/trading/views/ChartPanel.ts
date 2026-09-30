import { Container, FillGradient, Graphics, Rectangle, type FederatedPointerEvent, type Text } from 'pixi.js';
import gsap from 'gsap';
import { sound } from '../../../core/audio/Sound';
import { T } from '../theme';
import { compact, dayMonth, fullDate, hhmm, num, pct } from '../format';
import { CHART_POINTS, TF_SEC, TIMEFRAMES, type Instrument, type Timeframe } from '../market/Market';
import { icon } from '../ui/icons';
import { IconButton, onTap, txt } from '../ui/widgets';

const HEAD_H = 76;
const TOOL_H = 44;
const AXIS_R = 62;
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
  tf: Timeframe = '1D';

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
  private readonly markPills = [new Pill(11, T.green, 0x04150a), new Pill(11, T.green, 0x04150a)];
  private readonly yLabels: Text[] = [];
  private readonly xLabels: Text[] = [];
  private readonly lastPill = new Pill(11, T.green, 0x04150a);
  private readonly hover = new Graphics();
  private readonly hoverDate = new Pill(11, 0x2c302e, T.text);
  private readonly hoverPrice = new Pill(11, 0x2c302e, T.text);
  private readonly flash = new Graphics();
  private readonly grad = new FillGradient({
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
    colorStops: [
      { offset: 0, color: 'rgba(56,209,90,0.30)' },
      { offset: 0.7, color: 'rgba(56,209,90,0.06)' },
      { offset: 1, color: 'rgba(56,209,90,0)' },
    ],
  });

  private inst!: Instrument;
  private readonly shown = { v: 0 };
  private showArea = true;
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
    this.addChild(this.bg, this.sym, this.exch, this.nameText);
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
      this.showArea = !this.showArea;
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

    this.plot.addChild(this.grid, this.area, this.sma, this.line, this.marks, ...this.markPills, this.hover, this.lastPill, this.hoverDate, this.hoverPrice, this.flash);
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
    this.exch.text = `/ ${inst.def.kind === 'stock' ? 'NASDAQ' : inst.def.kind === 'crypto' ? 'CRIPTO' : 'SPOT'} · DEMO`;
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
    const pts = src.slice();
    pts[pts.length - 1] = this.shown.v;
    const W = this.w - AXIS_R;
    const H = this.h - HEAD_H - TOOL_H - AXIS_B;
    if (W < 50 || H < 50) return;
    let lo = Infinity;
    let hi = -Infinity;
    for (const p of pts) {
      lo = Math.min(lo, p);
      hi = Math.max(hi, p);
    }
    const padV = (hi - lo) * 0.12 || hi * 0.001;
    lo -= padV;
    hi += padV;
    const top = 16;
    const X = (i: number) => (i / (CHART_POINTS - 1)) * W;
    const Y = (p: number) => top + (1 - (p - lo) / (hi - lo)) * (H - top);

    // Grelha e eixo dos preços
    const g = this.grid.clear();
    const step = niceStep(hi - lo, 5);
    let k = 0;
    const dec = step < 1 ? Math.min(3, Math.ceil(-Math.log10(step))) : 0;
    for (let v = Math.ceil(lo / step) * step; v <= hi && k < this.yLabels.length; v += step, k++) {
      dashH(g, 0, W, Math.round(Y(v)) + 0.5);
      const t = this.yLabels[k];
      t.visible = true;
      t.text = num(v, Math.max(dec, 2));
      t.position.set(W + 12, Y(v));
    }
    for (; k < this.yLabels.length; k++) this.yLabels[k].visible = false;
    g.stroke({ width: 1, color: T.grid });
    g.rect(0, H, W, 1).fill(T.border);

    // Eixo do tempo
    const now = Date.now();
    const sec = TF_SEC[this.tf];
    const nX = Math.max(3, Math.min(this.xLabels.length, Math.floor(W / 80)));
    this.xLabels.forEach((t, j) => {
      t.visible = j < nX;
      if (!t.visible) return;
      const idx = Math.round(((j + 0.5) / nX) * (CHART_POINTS - 1));
      const d = new Date(now - (CHART_POINTS - 1 - idx) * sec * 1000);
      t.text = sec < 86400 ? hhmm(d) : sec === 86400 ? String(d.getDate()) : dayMonth(d);
      t.position.set(X(idx), H + 9);
    });

    // Área + linha
    this.area.clear();
    if (this.showArea) {
      this.area.moveTo(0, H);
      pts.forEach((p, i) => this.area.lineTo(X(i), Y(p)));
      this.area.lineTo(W, H).closePath().fill(this.grad);
    }
    this.line.clear();
    pts.forEach((p, i) => (i ? this.line.lineTo(X(i), Y(p)) : this.line.moveTo(0, Y(p))));
    this.line.stroke({ width: 1.6, color: T.greenText, join: 'round' });

    // Média móvel (Indicadores)
    this.sma.clear();
    if (this.showSma) {
      const n = 14;
      for (let i = n; i < pts.length; i++) {
        let s = 0;
        for (let j = i - n; j < i; j++) s += pts[j];
        const y = Y(s / n);
        if (i === n) this.sma.moveTo(X(i), y);
        else this.sma.lineTo(X(i), y);
      }
      this.sma.stroke({ width: 1.4, color: T.coin, alpha: 0.85 });
    }

    // Marcadores: variação desde dois pontos do histórico até agora
    const m = this.marks.clear();
    [0.45, 0.8].forEach((f, j) => {
      const idx = Math.round(f * (CHART_POINTS - 1));
      const x = Math.round(X(idx)) + 0.5;
      dashV(m, x, top + 12, H);
      const change = ((pts[pts.length - 1] - pts[idx]) / pts[idx]) * 100;
      const pill = this.markPills[j];
      pill.set(pct(change), change >= 0 ? T.green : T.red);
      pill.caption.style.fill = change >= 0 ? 0x04150a : 0xffffff;
      pill.position.set(x, top + 2);
    });
    m.stroke({ width: 1, color: T.greenText, alpha: 0.6 });

    // Último preço (esconde a etiqueta do eixo que ficaria por baixo)
    const ly = Y(pts[pts.length - 1]);
    for (const t of this.yLabels) if (t.visible && Math.abs(t.y - ly) < 14) t.visible = false;
    m.circle(W, ly, 3.5).fill(T.greenText);
    this.lastPill.set(num(pts[pts.length - 1], this.inst.def.dec), this.inst.chg >= 0 ? T.green : T.red);
    this.lastPill.caption.style.fill = this.inst.chg >= 0 ? 0x04150a : 0xffffff;
    this.lastPill.position.set(W + this.lastPill.width / 2 + 4, ly);

    // Cursor
    const hv = this.hover.clear();
    const on = this.hoverX !== null && this.hoverX >= 0 && this.hoverX <= W;
    this.hoverDate.visible = this.hoverPrice.visible = on;
    if (on) {
      const idx = Math.round((this.hoverX! / W) * (CHART_POINTS - 1));
      const x = X(idx);
      const y = Y(pts[idx]);
      dashV(hv, x, 0, H);
      dashH(hv, 0, W, y);
      hv.stroke({ width: 1, color: T.muted, alpha: 0.6 });
      hv.circle(x, y, 4).fill(T.text).circle(x, y, 7).fill({ color: T.text, alpha: 0.18 });
      const d = new Date(now - (CHART_POINTS - 1 - idx) * sec * 1000);
      this.hoverDate.set(fullDate(d));
      this.hoverDate.position.set(Math.min(W - this.hoverDate.width / 2, Math.max(this.hoverDate.width / 2, x)), H - 16);
      this.hoverPrice.set(num(pts[idx], this.inst.def.dec));
      this.hoverPrice.position.set(W + this.hoverPrice.width / 2 + 4, y);
      for (const t of this.yLabels) if (t.visible && Math.abs(t.y - y) < 14) t.visible = false;
    }
  }
}
