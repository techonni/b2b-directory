import type { Market } from './Market';

export type Dir = 'up' | 'down';

export interface Contract {
  id: number;
  symId: string;
  dir: Dir;
  stake: number;
  payout: number;
  entry: number;
  /** Início e vencimento (ms epoch). */
  start: number;
  expiry: number;
  auto: boolean;
  exit?: number;
  result?: 'win' | 'loss' | 'tie';
  pnl?: number;
}

export const START_CASH = 10_000;
/** Lucro fixo de um contrato ganho. */
export const PROFIT = 0.85;
export const DURATIONS = [30, 60, 120, 300, 600, 900];
const KEY = 'zunrel-trading:v2';

interface Saved {
  cash: number;
  closed: Contract[];
  open?: Contract[];
}

/**
 * Carteira demo (Coins fictícios) com contratos binários "Sobe / Desce":
 * no vencimento compara a cotação com a de entrada. Ganha o lucro fixo,
 * perde a aposta, empate devolve.
 */
export class Account {
  cash = START_CASH;
  open: Contract[] = [];
  closed: Contract[] = [];
  onChange: (() => void) | null = null;
  onSettle: ((c: Contract) => void) | null = null;
  private nextId = 1;

  constructor(private readonly market: Market) {
    try {
      const s = JSON.parse(localStorage.getItem(KEY) ?? 'null') as Saved | null;
      if (s && Number.isFinite(s.cash)) {
        // Contratos que ficaram abertos ao sair são anulados e a aposta devolvida.
        this.cash = s.cash + (s.open ?? []).reduce((sum, c) => sum + c.stake, 0);
        this.closed = s.closed ?? [];
        this.nextId = this.closed.reduce((m, c) => Math.max(m, c.id), 0) + 1;
      }
    } catch {
      /* ignorar */
    }
  }

  buy(symId: string, dir: Dir, stake: number, seconds: number, auto = false): Contract | string {
    if (!(stake >= 1)) return 'Aposta mínima: 1 Coin';
    if (stake > this.cash + 1e-9) return 'Saldo insuficiente';
    const now = Date.now();
    const c: Contract = {
      id: this.nextId++,
      symId,
      dir,
      stake,
      payout: Math.round(stake * (1 + PROFIT) * 100) / 100,
      entry: this.market.get(symId).price,
      start: now,
      expiry: now + seconds * 1000,
      auto,
    };
    this.cash = Math.round((this.cash - stake) * 100) / 100;
    this.open.push(c);
    this.save();
    return c;
  }

  /** Chamado a cada segundo: liquida os contratos vencidos. */
  settleDue(): void {
    const now = Date.now();
    const due = this.open.filter((c) => c.expiry <= now + 50);
    if (!due.length) return;
    for (const c of due) {
      const exit = this.market.get(c.symId).price;
      c.exit = exit;
      c.result = exit === c.entry ? 'tie' : (exit > c.entry) === (c.dir === 'up') ? 'win' : 'loss';
      const credit = c.result === 'win' ? c.payout : c.result === 'tie' ? c.stake : 0;
      c.pnl = Math.round((credit - c.stake) * 100) / 100;
      this.cash = Math.round((this.cash + credit) * 100) / 100;
      this.closed.unshift(c);
    }
    this.open = this.open.filter((c) => !due.includes(c));
    this.closed = this.closed.slice(0, 50);
    this.save();
    for (const c of due) this.onSettle?.(c);
  }

  /** A ganhar (true), a perder (false) ou empatado (null) neste momento. */
  winning(c: Contract): boolean | null {
    const q = this.market.get(c.symId).price;
    if (q === c.entry) return null;
    return (q > c.entry) === (c.dir === 'up');
  }

  reset(): void {
    this.cash = START_CASH;
    this.open = [];
    this.closed = [];
    this.save();
  }

  private save(): void {
    try {
      localStorage.setItem(KEY, JSON.stringify({ cash: this.cash, closed: this.closed, open: this.open } satisfies Saved));
    } catch {
      /* ignorar */
    }
    this.onChange?.();
  }
}
