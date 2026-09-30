export type Kind = 'stock' | 'commodity' | 'crypto';

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
  { id: 'AAPL', name: 'Apple Inc.', kind: 'stock', price: 145.86, chg: 1.2, dec: 2, vol: 0.0005 },
  { id: 'MSFT', name: 'Microsoft Corporation', kind: 'stock', price: 299.35, chg: -0.7, dec: 2, vol: 0.0004 },
  { id: 'GOOGL', name: 'Alphabet Inc.', kind: 'stock', price: 334.57, chg: 0.45, dec: 2, vol: 0.0005 },
  { id: 'SBUX', name: 'Starbucks Corporation', kind: 'stock', price: 106.0, chg: 1.43, dec: 2, vol: 0.0006 },
  { id: 'AMZN', name: 'Amazon.com, Inc.', kind: 'stock', price: 278.05, chg: -0.3, dec: 2, vol: 0.0005 },
  { id: 'TSLA', name: 'Tesla, Inc.', kind: 'stock', price: 688.99, chg: 3.9, dec: 2, vol: 0.0011 },
  { id: 'NFLX', name: 'Netflix, Inc.', kind: 'stock', price: 515.24, chg: -1.15, dec: 2, vol: 0.0007 },
  { id: 'NVDA', name: 'NVIDIA Corporation', kind: 'stock', price: 220.8, chg: 2.55, dec: 2, vol: 0.0009 },
  { id: 'DIS', name: 'The Walt Disney Company', kind: 'stock', price: 175.67, chg: 0.8, dec: 2, vol: 0.0005 },
  { id: 'PYPL', name: 'PayPal Holdings, Inc.', kind: 'stock', price: 280.14, chg: -0.55, dec: 2, vol: 0.0006 },
  { id: 'INTC', name: 'Intel Corporation', kind: 'stock', price: 53.42, chg: 0.1, dec: 2, vol: 0.0006 },
  { id: 'CSCO', name: 'Cisco Systems, Inc.', kind: 'stock', price: 58.67, chg: -0.2, dec: 2, vol: 0.0004 },
  { id: 'ADBE', name: 'Adobe Inc.', kind: 'stock', price: 630.15, chg: 1.75, dec: 2, vol: 0.0006 },
  { id: 'CRM', name: 'Salesforce, Inc.', kind: 'stock', price: 248.13, chg: 0.65, dec: 2, vol: 0.0006 },
  { id: 'V', name: 'Visa Inc.', kind: 'stock', price: 230.76, chg: 1.1, dec: 2, vol: 0.0004 },
  { id: 'ORCL', name: 'Oracle Corporation', kind: 'stock', price: 85.23, chg: -0.1, dec: 2, vol: 0.0005 },
  { id: 'UBER', name: 'Uber Technologies, Inc.', kind: 'stock', price: 44.12, chg: 0.9, dec: 2, vol: 0.0008 },
  { id: 'Oil-Crude', name: 'Crude Oil Spot', kind: 'commodity', price: 223.89, chg: 1.12, dec: 3, vol: 0.0005, icon: { bg: 0x0a0a0a, fg: 0xffffff, glyph: 'drop' } },
  { id: 'Oil-Brent', name: 'Brent Oil Spot', kind: 'commodity', price: 93.722, chg: 1.19, dec: 3, vol: 0.0005, icon: { bg: 0x0a0a0a, fg: 0xffffff, glyph: 'drop' } },
  { id: 'Gold', name: 'Gold Spot', kind: 'commodity', price: 223.89, chg: -0.7, dec: 2, vol: 0.0003, icon: { bg: 0xf2b632, fg: 0x5a3b00, glyph: 'Au' } },
  { id: 'Silver', name: 'Silver Spot', kind: 'commodity', price: 26.34, chg: 0.76, dec: 2, vol: 0.0004, icon: { bg: 0xc9ced3, fg: 0x2b3036, glyph: 'Ag' } },
  { id: 'BTC/USD', name: 'Bitcoin to US Dollar', kind: 'crypto', price: 67250.5, chg: 0.05, dec: 2, vol: 0.0008, icon: { bg: 0xf7931a, fg: 0xffffff, glyph: '₿' } },
  { id: 'ETH/USD', name: 'Ethereum to US Dollar', kind: 'crypto', price: 3480.2, chg: -0.4, dec: 2, vol: 0.0009, icon: { bg: 0x627eea, fg: 0xffffff, glyph: 'Ξ' } },
];

export type Timeframe = '1m' | '15m' | '1H' | '4H' | '1D' | '1W' | '1M';
export const TIMEFRAMES: Timeframe[] = ['1m', '15m', '1H', '4H', '1D', '1W', '1M'];
/** Segundos de "tempo de mercado" por ponto do gráfico. */
export const TF_SEC: Record<Timeframe, number> = { '1m': 60, '15m': 900, '1H': 3600, '4H': 14400, '1D': 86400, '1W': 604800, '1M': 2592000 };
/** Um ponto novo entra no gráfico a cada N segundos reais (para se ver o mercado a mexer). */
const TF_STEP: Record<Timeframe, number> = { '1m': 2, '15m': 3, '1H': 4, '4H': 5, '1D': 6, '1W': 8, '1M': 10 };
export const CHART_POINTS = 150;

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
  private readonly series = new Map<Timeframe, { pts: number[]; age: number }>();

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
    return Math.max(tick, Math.round((this.price * 0.00018) / tick) * tick);
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
      if (s.age >= TF_STEP[tf]) {
        s.age = 0;
        s.pts.push(this.price);
        s.pts.shift();
      }
      s.pts[s.pts.length - 1] = this.price;
    }
  }

  /** Histórico do gráfico para um intervalo (gerado na primeira vez e depois vivo). */
  chart(tf: Timeframe): number[] {
    let s = this.series.get(tf);
    if (!s) {
      const rnd = seeded(`${this.id}:${tf}`);
      const sigma = Math.min(0.005, this.def.vol * Math.sqrt(TF_SEC[tf]) * 0.06);
      const pts = [this.price];
      let p = this.price;
      let trend = 0;
      for (let i = 1; i < CHART_POINTS; i++) {
        trend = trend * 0.92 + (rnd() - 0.5) * sigma * 0.3;
        const g = (rnd() + rnd() + rnd() - 1.5) * 1.4;
        p /= Math.exp(sigma * g + trend);
        pts.unshift(p);
      }
      s = { pts, age: 0 };
      this.series.set(tf, s);
    }
    s.pts[s.pts.length - 1] = this.price;
    return s.pts;
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

  get stocks(): Instrument[] {
    return this.all.filter((i) => i.def.kind === 'stock');
  }

  get others(): Instrument[] {
    return this.all.filter((i) => i.def.kind !== 'stock');
  }

  update(dtMs: number): void {
    this.acc += dtMs;
    if (this.acc < 1000) return;
    this.acc %= 1000;
    for (const i of this.all) i.step();
    this.onTick?.();
  }
}
