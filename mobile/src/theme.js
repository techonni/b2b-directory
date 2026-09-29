// Palette and helpers from the design (Zunrel App.dc.html).
export const THEMES = {
  dark: { bg: '#121017', hd: '#1a1721', sf: '#1f1c28', sf2: '#2c2839', bd: '#3a3449', tx: '#f4f2f8', mu: '#a39db4', in: '#0d0b12' },
  light: { bg: '#f5f3f0', hd: '#ffffff', sf: '#ffffff', sf2: '#ebe7ef', bd: '#dcd6e2', tx: '#1a1622', mu: '#686175', in: '#ffffff' },
};

export const AC = '#ff6b3d';
export const ACI = '#1c0e08';
export const OK = '#3ddc84';
export const ERR = '#ff5c6c';

export const SORA = 'Sora';
export const MONO = 'JetBrainsMono';

/** Text style shorthand: f(size, weight, family). */
export const f = (size, weight = '400', family = SORA) => ({ fontFamily: family, fontSize: size, fontWeight: weight });

/** CSS oklch(L C h) -> #rrggbb. */
export function oklch(l, c, h) {
  const hr = (h * Math.PI) / 180;
  const a = c * Math.cos(hr), b = c * Math.sin(hr);
  const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = l - 0.0894841775 * a - 1.291485548 * b;
  const L = l_ ** 3, M = m_ ** 3, S = s_ ** 3;
  const rgb = [
    4.0767416621 * L - 3.3077115913 * M + 0.2309699292 * S,
    -1.2684380046 * L + 2.6097574011 * M - 0.3413193965 * S,
    -0.0041960863 * L - 0.7034186147 * M + 1.707614701 * S,
  ];
  return '#' + rgb
    .map((x) => {
      const v = x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055;
      return Math.round(Math.min(Math.max(v, 0), 1) * 255).toString(16).padStart(2, '0');
    })
    .join('');
}

const fr = new Intl.NumberFormat('fr-FR');
const frMoney = new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
export const num = (n) => fr.format(n);
export const money = (n) => frMoney.format(n);
