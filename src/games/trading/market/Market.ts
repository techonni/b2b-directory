import type { MarketDef } from '../../binary/market/Market';
import type { TradeType } from '../../binary/market/Trades';

/** Pares do Binary + (mais do que no Binary). Cotações demo simuladas pelo mesmo motor do Binary. */
export const PAIRS: MarketDef[] = [
  { id: 'EURUSD', name: 'EUR/USD', badge: 'EUR', full: 'Euro / Dólar americano', vol: 0.08, start: 1.08524, decimals: 5 },
  { id: 'GBPUSD', name: 'GBP/USD', badge: 'GBP', full: 'Libra / Dólar americano', vol: 0.09, start: 1.27143, decimals: 5 },
  { id: 'USDJPY', name: 'USD/JPY', badge: 'USD', full: 'Dólar americano / Iene', vol: 0.1, start: 151.423, decimals: 3 },
  { id: 'USDCHF', name: 'USD/CHF', badge: 'USD', full: 'Dólar americano / Franco suíço', vol: 0.08, start: 0.90314, decimals: 5 },
  { id: 'AUDUSD', name: 'AUD/USD', badge: 'AUD', full: 'Dólar australiano / Dólar americano', vol: 0.1, start: 0.65421, decimals: 5 },
  { id: 'USDCAD', name: 'USD/CAD', badge: 'USD', full: 'Dólar americano / Dólar canadiano', vol: 0.07, start: 1.36208, decimals: 5 },
  { id: 'NZDUSD', name: 'NZD/USD', badge: 'NZD', full: 'Dólar neozelandês / Dólar americano', vol: 0.1, start: 0.59873, decimals: 5 },
  { id: 'EURGBP', name: 'EUR/GBP', badge: 'EUR', full: 'Euro / Libra', vol: 0.06, start: 0.85357, decimals: 5 },
  { id: 'EURJPY', name: 'EUR/JPY', badge: 'EUR', full: 'Euro / Iene', vol: 0.1, start: 164.332, decimals: 3 },
  { id: 'GBPJPY', name: 'GBP/JPY', badge: 'GBP', full: 'Libra / Iene', vol: 0.12, start: 192.515, decimals: 3 },
  { id: 'EURCHF', name: 'EUR/CHF', badge: 'EUR', full: 'Euro / Franco suíço', vol: 0.06, start: 0.98011, decimals: 5 },
  { id: 'AUDJPY', name: 'AUD/JPY', badge: 'AUD', full: 'Dólar australiano / Iene', vol: 0.12, start: 99.054, decimals: 3 },
  { id: 'EURAUD', name: 'EUR/AUD', badge: 'EUR', full: 'Euro / Dólar australiano', vol: 0.09, start: 1.65882, decimals: 5 },
  { id: 'GBPCHF', name: 'GBP/CHF', badge: 'GBP', full: 'Libra / Franco suíço', vol: 0.08, start: 1.14824, decimals: 5 },
  { id: 'CADJPY', name: 'CAD/JPY', badge: 'CAD', full: 'Dólar canadiano / Iene', vol: 0.1, start: 111.173, decimals: 3 },
  { id: 'USDSGD', name: 'USD/SGD', badge: 'USD', full: 'Dólar americano / Dólar de Singapura', vol: 0.05, start: 1.34702, decimals: 5 },
  { id: 'USDMXN', name: 'USD/MXN', badge: 'USD', full: 'Dólar americano / Peso mexicano', vol: 0.12, start: 17.0512, decimals: 4 },
  { id: 'EURCAD', name: 'EUR/CAD', badge: 'EUR', full: 'Euro / Dólar canadiano', vol: 0.08, start: 1.47812, decimals: 5 },
  { id: 'GBPAUD', name: 'GBP/AUD', badge: 'GBP', full: 'Libra / Dólar australiano', vol: 0.1, start: 1.94361, decimals: 5 },
  { id: 'AUDNZD', name: 'AUD/NZD', badge: 'AUD', full: 'Dólar australiano / Dólar neozelandês', vol: 0.07, start: 1.09264, decimals: 5 },
  { id: 'NZDJPY', name: 'NZD/JPY', badge: 'NZD', full: 'Dólar neozelandês / Iene', vol: 0.12, start: 90.652, decimals: 3 },
  { id: 'CHFJPY', name: 'CHF/JPY', badge: 'CHF', full: 'Franco suíço / Iene', vol: 0.1, start: 167.614, decimals: 3 },
  { id: 'EURNZD', name: 'EUR/NZD', badge: 'EUR', full: 'Euro / Dólar neozelandês', vol: 0.09, start: 1.81247, decimals: 5 },
  { id: 'USDZAR', name: 'USD/ZAR', badge: 'USD', full: 'Dólar americano / Rand', vol: 0.14, start: 18.3462, decimals: 4 },
];

/** Contrato binário do Binary +: lucro fixo, vencimentos de 30 s a 15 min. */
export const PLUS: TradeType = { id: 'binary', name: 'Binary +', profit: 0.85, durations: [30, 60, 120, 300, 600, 900] };

export const START_BALANCE = 10_000;
export const BOOK_KEY = 'zunrel-binaryplus:v1';
