import { Container, FillGradient, Graphics, type Text } from 'pixi.js';
import gsap from 'gsap';
import { C, R } from '../theme';
import { makeMono, makeText } from '../text';
import { fmtMult } from '../format';
import { ringPoints } from '../icons';
import { HistoryBar } from '../ui/HistoryBar';
import { multiplierAt } from './CrashEngine';

/** O anel enche (12 pontos) entre 1× e este multiplicador (escala logarítmica). */
const RING_FULL_AT = 5;
const Y_STEPS = [0.1, 0.25, 0.5, 1, 2, 5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000, 25000, 50000, 100000];
const X_STEPS = [1, 2, 4, 5, 10, 15, 20, 30, 60, 120, 300, 600];

/**
 * Cena do Ponto Alto: cartão branco com grelha de pontos, curva azul suave,
 * histórico, ronda e o anel Zunrel de 12 pontos à volta do multiplicador.
 */
export class CrashView extends Container {
  readonly history = new HistoryBar();

  private readonly bg = new Graphics();
  private readonly content = new Container();
  private readonly clip = new Graphics();
  private readonly dots = new Graphics();
  private readonly grid = new Graphics();
  private readonly labels = new Container();
  private readonly area = new Graphics();
  private readonly line = new Graphics();
  private readonly tip = new Container();
  private readonly tipHalo = new Graphics();
  private readonly tipDot = new Graphics();
  private readonly tag = new Container();
  private readonly tagBg = new Graphics();
  private readonly tagText: Text;
  private readonly ring = new Container();
  private readonly ringDots: Graphics[] = [];
  private readonly mult: Text;
  private readonly sub: Text;
  private readonly live = new Container();
  private readonly liveText: Text;
  private readonly fx = new Container();

  private readonly areaGrad = new FillGradient({
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
    colorStops: [
      { offset: 0, color: 'rgba(15,75,241,0.14)' },
      { offset: 1, color: 'rgba(15,75,241,0)' },
    ],
  });

  private w = 1216;
  private compact = false;
  private plot = { x0: 0, y0: 0, x1: 1, y1: 1 };
  private ringR = 112;
  private lit = -1;
  private litColor: number = C.accent;
  private multValue = '';
  private phase: 'countdown' | 'running' | 'crashed' = 'countdown';
  private tipPos = { x: 0, y: 0 };
  private last = { flight: 0, crashed: false };
  private tagShown = false;
  private round = 1;
  private axisKey = '';

  constructor() {
    super();
    this.mult = makeText(fmtMult(1), { fontSize: 66, fontWeight: '700', fill: C.text, letterSpacing: -2.6, padding: 6 });
    this.mult.anchor.set(0.5);
    this.sub = makeText('', { fontSize: 14, fontWeight: '500', fill: C.textMuted });
    this.sub.anchor.set(0.5, 0);

    for (let i = 0; i < 12; i++) {
      const d = new Graphics().circle(0, 0, 8).fill(0xffffff);
      d.tint = C.border;
      this.ringDots.push(d);
      this.ring.addChild(d);
    }

    this.tipHalo.circle(0, 0, 16).fill({ color: C.accent, alpha: 0.15 });
    this.tip.addChild(this.tipHalo, this.tipDot);
    this.drawTipDot(C.accent);
    gsap.to(this.tipHalo.scale, { x: 1.25, y: 1.25, duration: 0.8, repeat: -1, yoyo: true, ease: 'sine.inOut' });

    this.tagText = makeText('', { fontSize: 13, fontWeight: '600', fill: C.onAccent });
    this.tagText.anchor.set(0.5);
    this.tag.addChild(this.tagBg, this.tagText);
    this.tag.visible = false;

    const liveDot = new Graphics().circle(0, 0, 8).fill(C.accentSoft).circle(0, 0, 4).fill(C.accent);
    liveDot.label = 'dot';
    gsap.to(liveDot.scale, { x: 0.8, y: 0.8, duration: 0.9, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    this.liveText = makeText('', { fontSize: 13, fontWeight: '500', fill: C.textMuted });
    this.liveText.anchor.set(1, 0.5);
    this.live.addChild(liveDot, this.liveText);

    this.content.addChild(this.dots, this.grid, this.labels, this.area, this.line, this.ring, this.mult, this.sub, this.tip, this.tag, this.fx);
    this.content.mask = this.clip;
    this.addChild(this.bg, this.content, this.clip, this.history, this.live);
  }

  layout(w: number, h: number, compact: boolean): void {
    this.w = w;
    this.compact = compact;
    this.bg.clear().roundRect(0, 0, w, h, R.panel).fill(C.bgPanel).stroke({ width: 1, color: C.border, alignment: 1 });
    this.clip.clear().roundRect(0, 0, w, h, R.panel).fill(0xffffff);

    const pad = compact ? 14 : 20;
    const hudY = compact ? 14 : 16;
    this.history.position.set(pad, hudY);
    this.live.position.set(w - pad, hudY + HistoryBar.HEIGHT / 2);
    this.setRound(this.round);

    const side = compact ? 16 : 40;
    const y0 = hudY + HistoryBar.HEIGHT + (compact ? 20 : 34);
    const y1 = h - (compact ? 36 : 60);
    this.plot = { x0: side, y0, x1: w - side, y1 };

    // Grelha de pontos (fixa) e linha de base.
    const step = compact ? 22 : 28;
    this.dots.clear();
    for (let x = side; x <= w - side + 0.5; x += step) {
      for (let y = y1 - 14; y >= hudY + HistoryBar.HEIGHT + 12; y -= step) this.dots.circle(x, y, 1.3);
    }
    this.dots.fill(C.dot);

    // Anel à volta do multiplicador.
    const ph = y1 - y0;
    this.ringR = compact ? Math.max(42, Math.min(80, ph * 0.28, w * 0.19)) : Math.max(42, Math.min(112, ph * 0.34, w * 0.15));
    const dotR = Math.max(3.6, this.ringR * (8 / 112));
    this.ringDots.forEach((d, i) => {
      const p = ringPoints(this.ringR)[i];
      d.position.set(p.x, p.y);
      d.scale.set(dotR / 8);
    });
    const cx = compact ? Math.max(this.ringR + 24, w * 0.29) : Math.max(this.ringR + 60, w * 0.247);
    const cy = y0 + ph * (compact ? 0.34 : 0.4);
    this.ring.position.set(cx, cy);
    const k = this.ringR / 112;
    this.mult.style.fontSize = Math.max(30, 66 * k);
    this.mult.style.letterSpacing = -2.6 * Math.max(0.5, k);
    this.sub.style.fontSize = Math.max(12, 14 * Math.sqrt(k));
    this.placeCenterText();

    this.axisKey = '';
    this.drawCurve(this.last.flight, this.last.crashed);
  }

  get stageWidth(): number {
    return this.w;
  }

  /** Posição (local) para avisos: em baixo, ao centro da área do gráfico. */
  get noticeY(): number {
    return this.plot.y1 - (this.compact ? 26 : 40);
  }

  setRound(round: number): void {
    this.round = round;
    this.liveText.text = this.compact ? `#${round} · 1 a jogar` : `Ronda #${round} · 1 a jogar`;
    this.layoutLive();
  }

  /** Etiqueta preta junto ao ponto (ex.: "Levantar em 3,00×"); null esconde. */
  setTag(text: string | null, color: number = C.ink): void {
    this.tagShown = text !== null;
    if (text !== null) {
      this.tagText.text = text;
      const w = this.tagText.width + 24;
      const h = 30;
      this.tagBg.clear().roundRect(-w / 2, -h / 2, w, h, h / 2).fill(color);
    }
    this.placeTag();
  }

  enterCountdown(): void {
    this.phase = 'countdown';
    this.drawTipDot(C.accent);
    this.tipHalo.visible = false;
    this.tip.visible = true;
    gsap.killTweensOf(this.tip);
    gsap.fromTo(this.tip, { alpha: 0 }, { alpha: 1, duration: 0.3 });
    this.sub.style.fill = C.textMuted;
    this.sub.text = 'próxima ronda';
    this.mult.style.fill = C.text;
    this.litColor = C.ink;
    this.lit = -1;
    this.drawCurve(0, false);
  }

  enterRunning(): void {
    this.phase = 'running';
    this.tipHalo.visible = true;
    this.sub.text = 'a subir';
    this.sub.style.fill = C.textMuted;
    this.litColor = C.accent;
    this.lit = -1;
    this.setMult(1);
    this.setLit(0, false);
    gsap.fromTo(this.mult.scale, { x: 0.85, y: 0.85 }, { x: 1, y: 1, duration: 0.4, ease: 'back.out(2.5)' });
  }

  enterCrashed(flightMs: number, crashAt: number): void {
    this.phase = 'crashed';
    this.setMult(crashAt);
    this.sub.text = 'parou';
    this.sub.style.fill = C.stop;
    this.drawCurve(flightMs, true);
    this.litColor = C.stop;
    const n = this.lit;
    this.lit = -1;
    this.setLit(Math.max(1, n), false);
    gsap.fromTo(this.ring, { x: this.ring.x - 8 }, { x: this.ring.x, duration: 0.5, ease: 'elastic.out(1.4, 0.3)' });
    this.burst();
    this.setTag(null);
  }

  updateCountdown(remainingMs: number, totalMs: number): void {
    const s = (Math.ceil(remainingMs / 100) / 10).toFixed(1).replace('.', ',');
    if (s !== this.multValue) {
      this.multValue = s;
      this.mult.text = `${s}s`;
      this.placeCenterText();
    }
    this.setLit(Math.ceil((12 * remainingMs) / totalMs), false);
  }

  updateRunning(flightMs: number, m: number): void {
    this.setMult(m);
    this.drawCurve(flightMs, false);
    this.setLit(Math.min(12, Math.floor((12 * Math.log(m)) / Math.log(RING_FULL_AT) + 1e-9)), true);
  }

  /** Levantamento: a etiqueta junto ao ponto passa a azul com o valor recebido. */
  popCashout(text: string): void {
    this.setTag(text, C.accent);
    gsap.fromTo(this.tag.scale, { x: 0.6, y: 0.6 }, { x: 1, y: 1, duration: 0.4, ease: 'back.out(3)' });
    gsap.fromTo(this.tipDot.scale, { x: 1.8, y: 1.8 }, { x: 1, y: 1, duration: 0.5, ease: 'back.out(3)' });
  }

  // ---------- desenho ----------

  private layoutLive(): void {
    const dot = this.live.getChildByLabel('dot');
    if (dot) dot.position.set(-this.liveText.width - 12, 0);
    const liveW = this.liveText.width + 24;
    this.history.layout(this.w - (this.compact ? 28 : 40) - liveW - 12);
  }

  private placeCenterText(): void {
    const k = this.ringR / 112;
    this.mult.position.set(this.ring.x, this.ring.y - 10 * k);
    this.sub.position.set(this.ring.x, this.ring.y + 26 * k);
  }

  private setMult(m: number): void {
    const s = fmtMult(m);
    if (s !== this.multValue) {
      this.multValue = s;
      this.mult.text = s;
    }
  }

  /** Acende os primeiros n pontos do anel (com um pequeno salto nos novos). */
  private setLit(n: number, pop: boolean): void {
    if (n === this.lit) return;
    const prev = this.lit;
    this.lit = n;
    this.ringDots.forEach((d, i) => {
      const on = i < n;
      d.tint = on ? this.litColor : C.border;
      if (pop && on && i >= prev && prev >= 0) {
        const s = d.scale.x;
        gsap.fromTo(d.scale, { x: s * 1.6, y: s * 1.6 }, { x: s, y: s, duration: 0.35, ease: 'back.out(3)' });
      }
    });
    if (pop && n === 12 && prev < 12) {
      gsap.fromTo(this.ring.scale, { x: 1.06, y: 1.06 }, { x: 1, y: 1, duration: 0.5, ease: 'elastic.out(1.2, 0.4)' });
    }
  }

  private drawTipDot(color: number): void {
    this.tipDot.clear().circle(0, 0, 8).fill(color).stroke({ width: 3, color: C.onAccent, alignment: 1 });
    this.tipHalo.tint = color;
  }

  /** Grelha horizontal com legendas (1,50× · 2,00×…) e marcas de tempo (0s · 4s · 8s). */
  private drawAxes(xMax: number, yMax: number): void {
    const { x0, y0, x1, y1 } = this.plot;
    const ySpan = yMax - 1;
    const yStep = Y_STEPS.find((s) => ySpan / s <= 4) ?? Y_STEPS[Y_STEPS.length - 1];
    const xSec = xMax / 1000;
    const xStep = X_STEPS.find((s) => xSec / s <= (this.compact ? 3.2 : 4.2)) ?? X_STEPS[X_STEPS.length - 1];
    const key = `${yStep}|${xStep}|${Math.round(yMax * 1000)}|${Math.round(xMax)}`;
    if (key === this.axisKey) return;
    this.axisKey = key;

    this.grid.clear();
    this.labels.removeChildren().forEach((c) => c.destroy());
    const fs = this.compact ? 11 : 12;
    for (let v = 1 + yStep; v < yMax; v += yStep) {
      const y = y1 - ((v - 1) / ySpan) * (y1 - y0);
      if (y < y0 - 20) break;
      this.grid.moveTo(x0, y).lineTo(x1, y);
      const t = makeMono(fmtMult(v), { fontSize: fs, fontWeight: '500', fill: C.textSoft });
      t.anchor.set(1, 1);
      t.position.set(x1, y - 4);
      this.labels.addChild(t);
    }
    this.grid.stroke({ width: 1, color: C.gridLine });
    this.grid.moveTo(x0, y1).lineTo(x1, y1).stroke({ width: 1, color: C.border });
    for (let s = 0; s <= xSec + 1e-6; s += xStep) {
      const x = x0 + ((s * 1000) / xMax) * (x1 - x0);
      if (x > x1 - 10) break;
      const t = makeMono(`${s}s`, { fontSize: fs, fontWeight: '500', fill: C.textSoft });
      t.anchor.set(0, 0);
      t.position.set(x, y1 + (this.compact ? 12 : 14));
      this.labels.addChild(t);
    }
  }

  private drawCurve(flightMs: number, crashed: boolean): void {
    this.last = { flight: flightMs, crashed };
    const { x0, y0, x1, y1 } = this.plot;
    const m = multiplierAt(flightMs);
    // Eixos que acompanham o ponto: a ponta fica perto de 80% × 80% da área.
    const xMax = Math.max(10000, flightMs / 0.8);
    const yMax = Math.max(2, 1 + (m - 1) / 0.8);
    this.drawAxes(xMax, yMax);
    const N = 72;
    const pts: number[] = [];
    for (let i = 0; i <= N; i++) {
      const t = (flightMs * i) / N;
      pts.push(x0 + (t / xMax) * (x1 - x0), y1 - ((multiplierAt(t) - 1) / (yMax - 1)) * (y1 - y0));
    }
    const tipX = pts[pts.length - 2];
    const tipY = pts[pts.length - 1];
    this.tipPos = { x: tipX, y: tipY };

    this.area.clear();
    this.line.clear();
    if (flightMs > 0) {
      this.area.poly([...pts, tipX, y1, x0, y1]).fill(crashed ? { color: C.curveDead, alpha: 0.08 } : this.areaGrad);
      this.line.moveTo(pts[0], pts[1]);
      for (let i = 2; i < pts.length; i += 2) this.line.lineTo(pts[i], pts[i + 1]);
      this.line.stroke({ width: this.compact ? 3 : 4, color: crashed ? C.curveDead : C.accent, cap: 'round', join: 'round' });
    }
    this.tip.position.set(tipX, tipY);
    this.placeTag();
  }

  private placeTag(): void {
    this.tag.visible = this.tagShown && this.phase !== 'crashed';
    if (!this.tag.visible) return;
    const w = this.tagBg.width;
    const { x, y } = this.tipPos;
    let tx = x + 24 + w / 2;
    let ty = Math.max(this.plot.y0 - 10, Math.min(y, this.plot.y1 - 20));
    if (tx + w / 2 > this.w - 8) {
      // Sem espaço à direita: por cima do ponto (ou por baixo, se não couber).
      tx = Math.min(x, this.w - 12 - w / 2);
      ty = y - 32 > this.history.y + HistoryBar.HEIGHT + 20 ? y - 32 : y + 32;
    }
    this.tag.position.set(Math.max(8 + w / 2, tx), ty);
  }

  private burst(): void {
    const { x, y } = this.tipPos;
    this.drawTipDot(C.stop);
    this.tipHalo.visible = false;
    const ring = new Graphics().circle(0, 0, 12).stroke({ width: 3, color: C.stop });
    ring.position.set(x, y);
    this.fx.addChild(ring);
    gsap.to(ring.scale, { x: 3.5, y: 3.5, duration: 0.6, ease: 'power2.out' });
    gsap.to(ring, { alpha: 0, duration: 0.6, onComplete: () => ring.destroy() });
    // 12 pontos que se afastam: eco do anel da marca.
    for (const p of ringPoints(1)) {
      const d = new Graphics().circle(0, 0, 3).fill(C.stop);
      d.position.set(x, y);
      this.fx.addChild(d);
      gsap.to(d, { x: x + p.x * 46, y: y + p.y * 46, alpha: 0, duration: 0.7, ease: 'power2.out', onComplete: () => d.destroy() });
    }
  }
}
