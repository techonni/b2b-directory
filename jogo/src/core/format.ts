// Moedas no formato europeu: vírgula decimal e espaço nos milhares (ex.: 1 248,50).
const pad = (n: number) => String(n).padStart(2, '0');

const group = (int: string) => int.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

/** Número com 2 casas decimais em pt-PT (1 248,50). */
export const fmt = (n: number): string => {
  const neg = n < 0;
  const [int, dec] = Math.abs(n).toFixed(2).split('.');
  return `${neg ? '−' : ''}${group(int)},${dec}`;
};
export const fmtMult = (m: number): string => `${fmt(m)}×`;
export const fmtSigned = (n: number): string => `${n > 0 ? '+' : n < 0 ? '−' : ''}${fmt(Math.abs(n))}`;
/** Multiplicador curto para atalhos (1,5× · 2× · 10×). */
export const fmtMultShort = (m: number): string => `${String(Math.round(m * 100) / 100).replace('.', ',')}×`;
/** Texto escrito no teclado (com ponto) mostrado com vírgula. */
export const fmtTyped = (s: string): string => s.replace('.', ',');

/** Arredonda para baixo a 2 casas (pagamentos nunca arredondam a favor do jogador). */
export const floor2 = (n: number): number => Math.floor(n * 100 + 1e-9) / 100;
export const clamp = (v: number, lo: number, hi: number): number => Math.min(hi, Math.max(lo, v));

/** Hora local HH:MM:SS a partir de segundos epoch. */
export const fmtClock = (epoch: number): string => {
  const d = new Date(epoch * 1000);
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
};
export const fmtDuration = (s: number): string => (s < 60 ? `${s}s` : s % 60 === 0 ? `${s / 60}m` : `${Math.floor(s / 60)}m ${s % 60}s`);
export const fmtCountdown = (s: number): string => `${Math.floor(s / 60)}:${pad(Math.max(0, Math.floor(s % 60)))}`;
