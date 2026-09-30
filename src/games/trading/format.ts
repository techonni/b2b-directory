const cache = new Map<number, Intl.NumberFormat>();

/** Número com separador de milhares (ex.: 67,250.50), como no design. */
export function num(n: number, d = 2): string {
  let f = cache.get(d);
  if (!f) {
    f = new Intl.NumberFormat('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
    cache.set(d, f);
  }
  return f.format(n);
}

export const pct = (n: number): string => `${n > 0 ? '+' : n < 0 ? '−' : ''}${Math.abs(n).toFixed(2)}%`;

/** Quantidade sem zeros inúteis (74 · 12.5 · 0.0312). */
export const qty = (n: number): string => (Math.abs(n) >= 100 ? num(n, 0) : String(Math.round(n * 10000) / 10000));

export function compact(n: number): string {
  if (n >= 1e9) return `${(n / 1e9).toFixed(1)}B`;
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
  if (n >= 1e3) return `${(n / 1e3).toFixed(1)}k`;
  return n.toFixed(1);
}

const pad = (n: number) => String(n).padStart(2, '0');
export const hhmm = (d: Date): string => `${pad(d.getHours())}:${pad(d.getMinutes())}`;
export const hhmmss = (d: Date): string => `${hhmm(d)}:${pad(d.getSeconds())}`;
const MONTHS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
export const dayMonth = (d: Date): string => `${d.getDate()} ${MONTHS[d.getMonth()]}`;
export const fullDate = (d: Date): string => `${d.getDate()} ${MONTHS[d.getMonth()]} ${String(d.getFullYear()).slice(2)}, ${hhmm(d)}`;
