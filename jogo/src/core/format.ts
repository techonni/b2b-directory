// Português de Portugal: vírgula decimal e espaço nos milhares (1 248,50 · 2,37×).
const pad = (n: number) => String(n).padStart(2, '0');
const group = (digits: string) => digits.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const fmt = (n: number): string => {
  const [int, dec] = Math.abs(n).toFixed(2).split('.');
  return `${n < 0 ? '−' : ''}${group(int)},${dec}`;
};
export const fmtMult = (m: number): string => `${m.toFixed(2).replace('.', ',')}×`;
export const fmtSigned = (n: number): string => `${n > 0 ? '+' : n < 0 ? '−' : ''}${fmt(Math.abs(n))}`;
/** Valor em edição (ponto interno) mostrado com vírgula. */
export const fmtInput = (s: string): string => s.replace('.', ',');
export const fmtQuote = (q: number, decimals: number): string => q.toFixed(decimals).replace('.', ',');

/** Arredonda para baixo a 2 casas (pagamentos nunca arredondam a favor do jogador). */
export const floor2 = (n: number): number => Math.floor(n * 100 + 1e-9) / 100;
export const clamp = (v: number, lo: number, hi: number): number => Math.min(hi, Math.max(lo, v));

export const fmtDuration = (s: number): string => (s < 60 ? `${s}s` : s % 60 === 0 ? `${s / 60}m` : `${Math.floor(s / 60)}m ${s % 60}s`);
export const fmtCountdown = (s: number): string => `${Math.floor(s / 60)}:${pad(Math.max(0, Math.floor(s % 60)))}`;
