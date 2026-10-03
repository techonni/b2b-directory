import { Container, FillGradient, Graphics, type Text } from 'pixi.js';
import gsap from 'gsap';
import { C, FONT_MONO } from '../theme';
import { makeText } from '../text';
import { fmtDuration, fmtMult, fmtSigned } from '../format';
import { HistoryBar } from '../ui/HistoryBar';
import { Ring } from '../ui/Ring';
import { drawCard } from '../ui/Card';
import { multiplierAt } from './CrashEngine';
import { RING_DOTS } from '../icons';

/** O anel fica cheio aos 5×. */
const RING_FULL = 5;
const Y_STEPS = [0.1, 0.2, 0.25, 0.5, 1, 2, 2.5, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 5000, 10000, 100000, 1000000];
const X_STEPS = [1, 2, 5, 10, 15, 30, 60, 120, 300, 600, 1800, 3600];

/** Cena de jogo: histórico, grelha de pontos, curva azul, anel com o multiplicador e estado da ronda. */
export class CrashView extends Container {
  readonly history = new HistoryBar();

  private readonly bg = new Graphics();
  private readonly dots = new Graphics();
  private readonly axes = new Graphics();
  private readonly area = new Graphics();
  private readonly line = new Graphics();
  private readonly ring = new Ring();
  private readonly center = new Container();
  private readonly readout = new Container();
  private readonly mult: Text;
  private readonly caption: Text;
  private readonly ball = new Container();
  private readonly halo = new Graphics();
  private readonly core = new Graphics();
  private readonly tag = new Container();
  private readonly tagBg = new Graphics();
  private readonly tagText: Text;
  private readonly fx = new Container();
  private readonly liveDot = new Graphics();
  private readonly live: Text;
  private readonly yLabels: Text[] = [];
  private readonly xLabels: Text[] = [];

  private readonly areaGrad = new FillGradient({
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
    colorStops: [
      { offset: 0, color: 'rgba(15,75,241,0.14)' },
      { offset: 1, color: 'rgba(15,75,241,0)' },
    ],
  });

  private w = 600;
  private h = 470;
  private compact = false;
  private plot = { x0: 40, y0: 60, x1: 560, y1: 410 };
  private multValue = '';
  private roundText = '';
  private tagValue: string | null = null;
  private tip = { x: 0, y: 0 };
  private last = { flight: 0, crashed: false };
  private crashed = false;
  private tscale = 1;

  constructor() {
    super();
    this.mult = makeText('', { fontSize: 66, fontWeight: '700', fill: C.text, letterSpacing: -2.6 });
    this.mult.anchor.set(0.5);
    this.mult.position.set(0, -10);
    this.caption = makeText('', { fontSize: 14, fontWeight: '500', fill: C.muted });
    this.caption.anchor.set(0.5);
    this.caption.position.set(0, 38);
    this.readout.addChild(this.mult, this.caption);
    this.center.addChild(this.ring, this.readout);

    this.ball.addChild(this.halo, this.core);
    this.drawBall(C.blue);
    gsap.to(this.halo.scale, { x: 1.25, y: 1.25, duration: 0.8, repeat: -1, yoyo: true, ease: 'sine.inOut' });

    this.tagText = makeText('', { fontSize: 13, fontWeight: '600', fill: C.white });
    this.tagText.anchor.set(0.5);
    this.tag.addChild(this.tagBg, this.tagText);
    this.tag.visible = false;

    this.live = makeText('', { fontSize: 13, fontWeight: '500', fill: C.muted });
    this.live.anchor.set(0, 0.5);
    this.liveDot.circle(0, 0, 8).fill(C.blueSoft).circle(0, 0, 4).fill(C.blue);

    for (let i = 0; i < 6; i++) {
      const y = makeText('', { fontSize: 12, fontWeight: '500', fontFamily: FONT_MONO, fill: C.faint });
      y.anchor.set(1, 1);
      const x = makeText('', { fontSize: 12, fontWeight: '500', fontFamily: FONT_MONO, fill: C.faint });
      this.yLabels.push(y);
      this.xLabels.push(x);
    }

    this.addChild(this.bg, this.dots, this.axes, this.center, this.area, this.line, this.ball, this.tag, ...this.yLabels, ...this.xLabels, this.history, this.liveDot, this.live, this.fx);
  }

  layout(w: number, h: number, compact: boolean): void {
    this.w = w;
    this.h = h;
    this.compact = compact;
    drawCard(this.bg, w, h);

    this.history.position.set(20, 16);
    this.history.layout(w - 40 - (compact ? 0 : 230));
    const liveY = compact ? 16 + HistoryBar.HEIGHT + 20 : 16 + HistoryBar.HEIGHT / 2;
    this.live.position.set(compact ? 20 + 18 : w - 20 - this.live.width, liveY);
    this.liveDot.position.set(compact ? 20 + 4 : w - 20 - this.live.width - 14, liveY);

    const x0 = compact ? 20 : 40;
    const x1 = w - x0;
    const y0 = compact ? 92 : 60;
    const y1 = h - (compact ? 42 : 60);
    this.plot = { x0, y0, x1, y1 };

    this.dots.clear();
    for (let x = x0; x <= x1; x += 28) for (let y = y0; y <= y1; y += 28) this.dots.circle(x, y, 1.3);
    this.dots.fill(C.dot);

    const radius = Math.max(44, Math.min(112, (y1 - y0) * 0.32, (x1 - x0) * 0.24));
    this.ring.layout(radius);
    const rs = radius / 112;
    this.center.position.set(compact ? w / 2 : x0 + (x1 - x0) * 0.23, y0 + (y1 - y0) * (compact ? 0.45 : 0.4));
    this.tscale = rs;
    this.fit();
    this.drawCurve(this.last.flight, this.last.crashed);
  }

  /** Posição horizontal do centro da cena (para avisos). */
  get stageWidth(): number {
    return this.w;
  }

  setRound(round: number, profit: number): void {
    const text = `Ronda #${round} · Demo${profit !== 0 ? ` · sessão ${fmtSigned(profit)}` : ''}`;
    if (text === this.roundText) return;
    this.roundText = text;
    this.live.text = text;
    this.layout(this.w, this.h, this.compact);
  }

  /** Etiqueta "Levantar em X" junto à ponta da curva (null esconde). */
  setTag(text: string | null): void {
    if (text === this.tagValue) return;
    this.tagValue = text;
    this.placeTag();
  }

  enterCountdown(): void {
    this.crashed = false;
    this.mult.style.fill = C.muted;
    this.caption.text = 'próxima ronda';
    this.ring.set(0, C.blue, false);
    this.area.clear();
    this.line.clear();
    this.ball.visible = true;
    this.drawBall(C.blue);
    gsap.killTweensOf(this.ball);
    gsap.fromTo(this.ball, { alpha: 0 }, { alpha: 1, duration: 0.3 });
    this.drawCurve(0, false);
    this.setReadout('5,0s');
    gsap.fromTo(this.readout, { alpha: 0 }, { alpha: 1, duration: 0.3 });
  }

  enterRunning(): void {
    this.mult.style.fill = C.text;
    this.caption.text = 'a subir';
    this.ring.set(0, C.blue, false);
    this.setReadout(fmtMult(1));
    gsap.fromTo(this.readout, { alpha: 0.4 }, { alpha: 1, duration: 0.25 });
  }

  enterCrashed(flightMs: number, crashAt: number): void {
    this.crashed = true;
    this.setReadout(fmtMult(crashAt));
    this.mult.style.fill = C.loss;
    this.caption.text = 'fim da ronda';
    this.ring.set(this.ringCount(crashAt), C.loss, false);
    this.drawCurve(flightMs, true);
    gsap.fromTo(this.readout, { x: -8 }, { x: 0, duration: 0.5, ease: 'elastic.out(1.4, 0.3)' });
    this.explode();
  }

  updateCountdown(remainingMs: number, totalMs: number): void {
    this.setReadout(`${(remainingMs / 1000).toFixed(1).replace('.', ',')}s`);
    this.ring.set(((totalMs - remainingMs) / totalMs) * RING_DOTS, C.blue);
  }

  updateRunning(flightMs: number, m: number): void {
    this.setReadout(fmtMult(m));
    this.ring.set(this.ringCount(m), C.blue);
    this.drawCurve(flightMs, false);
  }

  /** Mostra o ganho a subir a partir da ponta da curva. */
  popCashout(text: string): void {
    const t = makeText(text, { fontSize: 18, fontWeight: '600', fontFamily: FONT_MONO, fill: C.blue });
    t.anchor.set(0.5);
    t.position.set(Math.min(this.tip.x, this.w - 70), this.tip.y - 30);
    this.fx.addChild(t);
    gsap
      .timeline({ onComplete: () => t.destroy() })
      .from(t.scale, { x: 0.6, y: 0.6, duration: 0.3, ease: 'back.out(3)' })
      .to(t, { y: t.y - 50, alpha: 0, duration: 1.1, ease: 'power1.in' }, 0.35);
  }

  private ringCount(m: number): number {
    return (Math.log(Math.max(1, m)) / Math.log(RING_FULL)) * RING_DOTS;
  }

  private setReadout(s: string): void {
    if (s === this.multValue) return;
    this.multValue = s;
    this.mult.text = s;
    this.fit();
  }

  /** O número cabe sempre dentro do anel (encolhe para valores grandes). */
  private fit(): void {
    const inner = this.ring.size * 2 - 40;
    this.mult.scale.set(1);
    const s = Math.min(this.tscale, inner / Math.max(1, this.mult.width));
    this.readout.scale.set(s);
    this.caption.scale.set(Math.max(1, 0.78 / s));
  }

  private drawBall(color: number): void {
    this.halo.clear().circle(0, 0, 16).fill({ color, alpha: 0.15 });
    this.core.clear().circle(0, 0, 8).fill(color).stroke({ width: 3, color: C.white });
  }

  private drawCurve(flightMs: number, crashed: boolean): void {
    this.last = { flight: flightMs, crashed };
    const { x0, y0, x1, y1 } = this.plot;
    const m = multiplierAt(flightMs);
    // Eixos que "acompanham" a ponta: fica perto de 85% da largura e 80% da altura.
    const xMax = Math.max(8000, flightMs / 0.85);
    const yMax = Math.max(1.8, 1 + (m - 1) / 0.8);
    const N = 48;
    const pts: number[] = [];
    for (let i = 0; i <= N; i++) {
      const t = (flightMs * i) / N;
      pts.push(x0 + (t / xMax) * (x1 - x0), y1 - ((multiplierAt(t) - 1) / (yMax - 1)) * (y1 - y0));
    }
    const tipX = pts[pts.length - 2];
    const tipY = pts[pts.length - 1];
    this.tip = { x: tipX, y: tipY };

    this.area.clear();
    this.line.clear();
    if (flightMs > 0) {
      this.area.poly([...pts, tipX, y1, x0, y1]).fill(crashed ? { color: C.faint, alpha: 0.1 } : this.areaGrad);
      this.line.moveTo(pts[0], pts[1]);
      for (let i = 2; i < pts.length; i += 2) this.line.lineTo(pts[i], pts[i + 1]);
      this.line.stroke({ width: 4, color: crashed ? C.faint : C.blue, cap: 'round', join: 'round' });
    }
    this.ball.position.set(tipX, tipY);
    this.drawAxes(xMax, yMax);
    this.placeTag();
  }

  private drawAxes(xMax: number, yMax: number): void {
    const { x0, y0, x1, y1 } = this.plot;
    this.axes.clear();

    const ySpan = yMax - 1;
    const yStep = Y_STEPS.find((s) => Math.floor(yMax / s + 1e-9) - Math.floor(1 / s + 1e-9) <= 3) ?? Y_STEPS[Y_STEPS.length - 1];
    let n = 0;
    for (let v = (Math.floor(1 / yStep + 1e-9) + 1) * yStep; v <= yMax + 1e-9 && n < this.yLabels.length; v += yStep, n++) {
      const y = y1 - ((v - 1) / ySpan) * (y1 - y0);
      this.axes.moveTo(x0, y).lineTo(x1, y);
      const label = this.yLabels[n];
      label.text = yStep >= 1 ? `${Math.round(v)}×` : fmtMult(v);
      label.position.set(x1, y - 5);
      label.visible = true;
    }
    for (; n < this.yLabels.length; n++) this.yLabels[n].visible = false;
    this.axes.stroke({ width: 1, color: C.gridLine });
    this.axes.moveTo(x0, y1).lineTo(x1, y1).stroke({ width: 1, color: C.border });

    const seconds = xMax / 1000;
    const xStep = X_STEPS.find((s) => Math.floor(seconds / s) <= 3) ?? X_STEPS[X_STEPS.length - 1];
    this.xLabels.forEach((label, i) => {
      const t = i * xStep;
      label.visible = t <= seconds + 1e-9;
      if (!label.visible) return;
      label.text = fmtDuration(t);
      label.position.set(x0 + ((t * 1000) / xMax) * (x1 - x0), y1 + 10);
    });
  }

  private placeTag(): void {
    const text = this.tagValue;
    this.tag.visible = text !== null && !this.crashed;
    if (text === null) return;
    this.tagText.text = text;
    const w = Math.ceil(this.tagText.width) + 28;
    const h = 30;
    this.tagBg.clear().roundRect(0, 0, w, h, h / 2).fill(C.text);
    this.tagText.position.set(w / 2, h / 2);
    const right = this.tip.x + 24 + w <= this.plot.x1 + 20;
    this.tag.position.set(right ? this.tip.x + 24 : this.tip.x - 24 - w, Math.max(this.plot.y0 - 20, this.tip.y - 15));
  }

  private explode(): void {
    const { x, y } = this.tip;
    gsap.to(this.ball, { alpha: 0, duration: 0.2 });
    const ring = new Graphics().circle(0, 0, 12).stroke({ width: 3, color: C.loss });
    ring.position.set(x, y);
    this.fx.addChild(ring);
    gsap.to(ring.scale, { x: 4, y: 4, duration: 0.6, ease: 'power2.out' });
    gsap.to(ring, { alpha: 0, duration: 0.6, onComplete: () => ring.destroy() });
    for (let i = 0; i < 10; i++) {
      const a = (Math.PI * 2 * i) / 10 + Math.random() * 0.4;
      const d = 36 + Math.random() * 36;
      const p = new Graphics().circle(0, 0, 2.5 + Math.random() * 2.5).fill(i % 2 ? C.loss : C.text);
      p.position.set(x, y);
      this.fx.addChild(p);
      gsap.to(p, { x: x + Math.cos(a) * d, y: y + Math.sin(a) * d, alpha: 0, duration: 0.7, ease: 'power2.out', onComplete: () => p.destroy() });
    }
  }
}
