export type Kind = 'forex' | 'commodity' | 'crypto';

export interface InstDef {
  id: string;
  name: string;
  kind: Kind;
  price: number;
  /** Variação inicial da sessão em %. */
  chg: number;
  dec: number;
  /** Volatilidade por segundo (fração). */
  vol: number;
  /** Ícone do screener: cor de fundo e letra. */
  icon?: { bg: number; fg: number; glyph: string };
  exchange?: string;
}

// Preços fictícios, só para a demo (Coins).
export const DEFS: InstDef[] = [
  { id: 'EUR/USD', name: 'Euro / Dólar americano', kind: 'forex', price: 1.08524, chg: 0.21, dec: 4, vol: 0.00009 },
  { id: 'GBP/USD', name: 'Libra / Dólar americano', kind: 'forex', price: 1.27143, chg: 0.35, dec: 4, vol: 0.00009 },
  { id: 'USD/JPY', name: 'Dólar americano / Iene', kind: 'forex', price: 151.423, chg: -0.18, dec: 3, vol: 0.00009 },
  { id: 'USD/CHF', name: 'Dólar americano / Franco suíço', kind: 'forex', price: 0.90314, chg: -0.27, dec: 4, vol: 0.00009 },
  { id: 'AUD/USD', name: 'Dólar australiano / Dólar americano', kind: 'forex', price: 0.65421, chg: 0.52, dec: 4, vol: 0.00009 },
  { id: 'USD/CAD', name: 'Dólar americano / Dólar canadiano', kind: 'forex', price: 1.36208, chg: -0.12, dec: 4, vol: 0.00009 },
  { id: 'NZD/USD', name: 'Dólar neozelandês / Dólar americano', kind: 'forex', price: 0.59873, chg: 0.44, dec: 4, vol: 0.00009 },
  { id: 'EUR/GBP', name: 'Euro / Libra', kind: 'forex', price: 0.85357, chg: -0.14, dec: 4, vol: 0.00009 },
  { id: 'EUR/JPY', name: 'Euro / Iene', kind: 'forex', price: 164.332, chg: 0.06, dec: 3, vol: 0.00009 },
  { id: 'GBP/JPY', name: 'Libra / Iene', kind: 'forex', price: 192.515, chg: 0.17, dec: 3, vol: 0.00009 },
  { id: 'EUR/CHF', name: 'Euro / Franco suíço', kind: 'forex', price: 0.98011, chg: -0.06, dec: 4, vol: 0.00009 },
  { id: 'AUD/JPY', name: 'Dólar australiano / Iene', kind: 'forex', price: 99.054, chg: 0.34, dec: 3, vol: 0.00009 },
  { id: 'EUR/AUD', name: 'Euro / Dólar australiano', kind: 'forex', price: 1.65882, chg: -0.31, dec: 4, vol: 0.00009 },
  { id: 'GBP/CHF', name: 'Libra / Franco suíço', kind: 'forex', price: 1.14824, chg: 0.08, dec: 4, vol: 0.00009 },
  { id: 'CAD/JPY', name: 'Dólar canadiano / Iene', kind: 'forex', price: 111.173, chg: -0.05, dec: 3, vol: 0.00009 },
  { id: 'USD/SGD', name: 'Dólar americano / Dólar de Singapura', kind: 'forex', price: 1.34702, chg: 0.11, dec: 4, vol: 0.00009 },
  { id: 'USD/MXN', name: 'Dólar americano / Peso mexicano', kind: 'forex', price: 17.0512, chg: -0.42, dec: 4, vol: 0.00009 },
  { id: 'EUR/CAD', name: 'Euro / Dólar canadiano', kind: 'forex', price: 1.47812, chg: 0.12, dec: 4, vol: 0.00009 },
  { id: 'GBP/AUD', name: 'Libra / Dólar australiano', kind: 'forex', price: 1.94361, chg: -0.22, dec: 4, vol: 0.00009 },
  { id: 'AUD/NZD', name: 'Dólar australiano / Dólar neozelandês', kind: 'forex', price: 1.09264, chg: 0.09, dec: 4, vol: 0.00009 },
  { id: 'NZD/JPY', name: 'Dólar neozelandês / Iene', kind: 'forex', price: 90.652, chg: 0.28, dec: 3, vol: 0.00009 },
  { id: 'CHF/JPY', name: 'Franco suíço / Iene', kind: 'forex', price: 167.614, chg: 0.05, dec: 3, vol: 0.00009 },
  { id: 'EUR/NZD', name: 'Euro / Dólar neozelandês', kind: 'forex', price: 1.81247, chg: -0.19, dec: 4, vol: 0.00009 },
  { id: 'USD/ZAR', name: 'Dólar americano / Rand', kind: 'forex', price: 18.3462, chg: -0.36, dec: 4, vol: 0.00009 },
];

export type Timeframe = '1m' | '15m' | '1H' | '4H' | '1D' | '1W' | '1M';
export const TIMEFRAMES: Timeframe[] = ['1m', '15m', '1H', '4H', '1D', '1W', '1M'];
/** Segundos de "tempo de mercado" por ponto do gráfico. */
export const TF_SEC: Record<Timeframe, number> = { '1m': 60, '15m': 900, '1H': 3600, '4H': 14400, '1D': 86400, '1W': 604800, '1M': 2592000 };
/** Um ponto novo entra no gráfico a cada N segundos reais (para se ver o mercado a mexer). */
const TF_STEP: Record<Timeframe, number> = { '1m': 2, '15m': 3, '1H': 4, '4H': 5, '1D': 6, '1W': 8, '1M': 10 };
export const CHART_POINTS = 80;

/** Uma vela: abertura, máximo, mínimo, fecho. */
export interface Bar {
  o: number;
  h: number;
  l: number;
  c: number;
}

function gauss(): number {
  const u = 1 - Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * Math.random());
}

/** Gerador determinístico (a forma do histórico de cada símbolo é sempre a mesma). */
function seeded(seed: string): () => number {
  let h = 2166136261;
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
}

export interface Print {
  price: number;
  size: number;
  side: 'buy' | 'sell';
  t: number;
}

export class Instrument {
  price: number;
  prevPrice: number;
  readonly open: number;
  high: number;
  low: number;
  volume: number;
  /** % de ordens de compra no livro (screener). */
  buyers: number;
  /** Preços a cada segundo (para a estratégia automática). */
  readonly live: number[] = [];
  readonly prints: Print[] = [];
  private readonly target: number;
  private readonly series = new Map<Timeframe, { bars: Bar[]; age: number }>();

  constructor(readonly def: InstDef) {
    this.price = def.price;
    this.prevPrice = def.price;
    this.open = def.price / (1 + def.chg / 100);
    this.target = def.price;
    this.high = Math.max(this.open, def.price) * (1 + def.vol * 20);
    this.low = Math.min(this.open, def.price) * (1 - def.vol * 25);
    this.volume = 4e6 + Math.random() * 20e6;
    this.buyers = Math.min(90, Math.max(10, 50 + def.chg * 8 + (Math.random() - 0.5) * 10));
    for (let i = 0; i < 60; i++) this.live.push(def.price);
  }

  get id(): string {
    return this.def.id;
  }

  get chg(): number {
    return ((this.price - this.open) / this.open) * 100;
  }

  get spread(): number {
    const tick = 10 ** -this.def.dec;
    return Math.max(tick, Math.round((this.price * (this.def.kind === 'forex' ? 0.00006 : 0.00018)) / tick) * tick);
  }

  get bid(): number {
    return this.price - this.spread / 2;
  }

  get ask(): number {
    return this.price + this.spread / 2;
  }

  /** Um segundo de mercado: passeio aleatório com leve regresso ao nível inicial. */
  step(): void {
    this.prevPrice = this.price;
    const pull = Math.log(this.target / this.price) * 0.004;
    this.price *= Math.exp(this.def.vol * gauss() + pull);
    this.high = Math.max(this.high, this.price);
    this.low = Math.min(this.low, this.price);
    const n = 1 + Math.floor(Math.random() * 3);
    for (let i = 0; i < n; i++) {
      const side = Math.random() < this.buyers / 100 ? 'buy' : 'sell';
      const size = Math.round((0.05 + Math.random() ** 3 * 8) * 1000) / 1000;
      this.volume += size * 1000;
      this.prints.unshift({ price: side === 'buy' ? this.ask : this.bid, size, side, t: Date.now() });
    }
    this.prints.length = Math.min(this.prints.length, 40);
    this.buyers = Math.min(92, Math.max(8, this.buyers + (this.price > this.prevPrice ? 0.6 : -0.6) + gauss() * 0.8));
    this.live.push(this.price);
    if (this.live.length > 120) this.live.shift();
    for (const [tf, s] of this.series) {
      s.age++;
      const p = this.price;
      if (s.age >= TF_STEP[tf]) {
        s.age = 0;
        s.bars.push({ o: p, h: p, l: p, c: p });
        s.bars.shift();
      } else {
        const b = s.bars[s.bars.length - 1];
        b.c = p;
        b.h = Math.max(b.h, p);
        b.l = Math.min(b.l, p);
      }
    }
  }

  /** Velas do gráfico para um intervalo (geradas na primeira vez e depois vivas). */
  chart(tf: Timeframe): Bar[] {
    let s = this.series.get(tf);
    if (!s) {
      const rnd = seeded(`${this.id}:${tf}`);
      // Mesma escala do mercado ao vivo (cada vela nova junta TF_STEP segundos).
      const sigma = this.def.vol * Math.sqrt(TF_STEP[tf]) * 0.9;
      const closes = [this.price];
      let p = this.price;
      let trend = 0;
      for (let i = 1; i < CHART_POINTS + 1; i++) {
        trend = trend * 0.92 + (rnd() - 0.5) * sigma * 0.3;
        const g = (rnd() + rnd() + rnd() - 1.5) * 1.4;
        p /= Math.exp(sigma * g + trend);
        closes.unshift(p);
      }
      const bars: Bar[] = [];
      for (let i = 1; i < closes.length; i++) {
        const o = closes[i - 1];
        const c = closes[i];
        bars.push({ o, c, h: Math.max(o, c) * (1 + rnd() * sigma * 0.9), l: Math.min(o, c) * (1 - rnd() * sigma * 0.9) });
      }
      s = { bars, age: 0 };
      this.series.set(tf, s);
    }
    const last = s.bars[s.bars.length - 1];
    last.c = this.price;
    last.h = Math.max(last.h, this.price);
    last.l = Math.min(last.l, this.price);
    return s.bars;
  }

  /** Livro de ordens sintético à volta do preço. */
  book(levels: number): { asks: [number, number][]; bids: [number, number][] } {
    const tick = this.spread;
    const asks: [number, number][] = [];
    const bids: [number, number][] = [];
    for (let i = 0; i < levels; i++) {
      const base = 0.8 + i * 1.3;
      asks.push([this.ask + tick * i * 2, Math.round((base + Math.random() * 2.5) * (100 - this.buyers) * 12)]);
      bids.push([this.bid - tick * i * 2, Math.round((base + Math.random() * 2.5) * this.buyers * 12)]);
    }
    return { asks, bids };
  }
}

/** Todos os instrumentos; avança um segundo de cada vez. */
export class Market {
  readonly all = DEFS.map((d) => new Instrument(d));
  onTick: (() => void) | null = null;
  private acc = 0;

  get(id: string): Instrument {
    return this.all.find((i) => i.id === id) ?? this.all[0];
  }

  get forex(): Instrument[] {
    return this.all.filter((i) => i.def.kind === 'forex');
  }

  update(dtMs: number): void {
    this.acc += dtMs;
    if (this.acc < 1000) return;
    this.acc %= 1000;
    for (const i of this.all) i.step();
    this.onTick?.();
  }
}
