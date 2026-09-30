import type { Market } from './Market';

export type Side = 'buy' | 'sell';

export interface Holding {
  qty: number;
  avg: number;
  /** Take profit / stop loss (preço), se ativos. */
  tp?: number;
  sl?: number;
}

export interface Fill {
  symId: string;
  side: Side;
  qty: number;
  price: number;
  pnl?: number;
  reason: 'manual' | 'auto' | 'tp' | 'sl';
}

export const START_CASH = 100_000;
const KEY = 'zunrel-trading:v1';
const TP = 0.03;
const SL = 0.02;

interface Saved {
  cash: number;
  hold: Record<string, Holding>;
}

/**
 * Carteira demo (Coins fictícios): só posições compradas, sem alavancagem.
 * Ordens a mercado; take profit / stop loss por posição.
 */
export class Account {
  cash = START_CASH;
  hold: Record<string, Holding> = {};
  onChange: (() => void) | null = null;
  onFill: ((f: Fill) => void) | null = null;

  constructor(private readonly market: Market) {
    try {
      const s = JSON.parse(localStorage.getItem(KEY) ?? 'null') as Saved | null;
      if (s && Number.isFinite(s.cash)) {
        this.cash = s.cash;
        this.hold = s.hold ?? {};
      }
    } catch {
      /* ignorar */
    }
  }

  qty(symId: string): number {
    return this.hold[symId]?.qty ?? 0;
  }

  get equity(): number {
    return this.cash + Object.entries(this.hold).reduce((s, [id, h]) => s + h.qty * this.market.get(id).price, 0);
  }

  /** Compra ou venda a mercado de `amount` Coins. Devolve o erro, se houver. */
  trade(symId: string, side: Side, amount: number, reason: Fill['reason'] = 'manual', tpsl = false): string | null {
    const inst = this.market.get(symId);
    if (!(amount > 0)) return 'Indica um valor';
    if (side === 'buy') {
      const price = inst.ask;
      if (amount > this.cash + 1e-6) return 'Saldo insuficiente';
      const q = amount / price;
      const h = this.hold[symId] ?? { qty: 0, avg: price };
      h.avg = (h.qty * h.avg + q * price) / (h.qty + q);
      h.qty += q;
      if (tpsl) {
        h.tp = h.avg * (1 + TP);
        h.sl = h.avg * (1 - SL);
      }
      this.hold[symId] = h;
      this.cash = Math.round((this.cash - amount) * 100) / 100;
      this.emit({ symId, side, qty: q, price, reason });
    } else {
      const h = this.hold[symId];
      if (!h || h.qty <= 1e-9) return `Sem posição em ${symId}`;
      const price = inst.bid;
      const q = Math.min(h.qty, amount / price);
      this.close(symId, q, reason);
    }
    return null;
  }

  /** Chamado a cada segundo: take profit e stop loss. */
  check(): void {
    for (const [id, h] of Object.entries(this.hold)) {
      const p = this.market.get(id).price;
      if (h.tp && p >= h.tp) this.close(id, h.qty, 'tp');
      else if (h.sl && p <= h.sl) this.close(id, h.qty, 'sl');
    }
  }

  reset(): void {
    this.cash = START_CASH;
    this.hold = {};
    this.save();
  }

  private close(symId: string, q: number, reason: Fill['reason']): void {
    const h = this.hold[symId];
    const price = this.market.get(symId).bid;
    const pnl = (price - h.avg) * q;
    h.qty -= q;
    if (h.qty < 1e-6) delete this.hold[symId];
    this.cash = Math.round((this.cash + q * price) * 100) / 100;
    this.emit({ symId, side: 'sell', qty: q, price, pnl, reason });
  }

  private emit(f: Fill): void {
    this.save();
    this.onFill?.(f);
  }

  private save(): void {
    try {
      localStorage.setItem(KEY, JSON.stringify({ cash: this.cash, hold: this.hold } satisfies Saved));
    } catch {
      /* ignorar */
    }
    this.onChange?.();
  }
}
