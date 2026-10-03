import { Application } from 'pixi.js';
import '@fontsource/geist/latin-400.css';
import '@fontsource/geist/latin-500.css';
import '@fontsource/geist/latin-600.css';
import '@fontsource/geist/latin-700.css';
import '@fontsource/geist-mono/latin-500.css';
import '@fontsource/geist-mono/latin-600.css';
import { C } from './core/theme';
import { setDevicePixelRatio, updateTextResolutions } from './core/text';
import { sound } from './core/audio/Sound';
import { CrashGame } from './games/crash/CrashGame';

/** O Pixi desenha os textos num canvas: as fontes têm de estar carregadas antes de os criar. */
async function loadFonts(): Promise<void> {
  const faces = ['400 16px Geist', '500 16px Geist', '600 16px Geist', '700 16px Geist', '500 16px "Geist Mono"', '600 16px "Geist Mono"'];
  const timeout = new Promise<void>((r) => setTimeout(r, 2500));
  await Promise.race([Promise.all(faces.map((f) => document.fonts.load(f, '0123456789,×Ponto Alto'))).then(() => undefined), timeout]).catch(() => undefined);
}

/** game.zunrel.com: Ponto Alto, em ecrã inteiro (moedas virtuais, sem dinheiro real). */
async function start(): Promise<void> {
  await loadFonts();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  setDevicePixelRatio(dpr);
  const app = new Application();
  await app.init({ resizeTo: window, background: C.bgBase, antialias: true, autoDensity: true, resolution: dpr });
  document.body.appendChild(app.canvas);
  sound.init();

  const game = new CrashGame();
  app.stage.addChild(game.view);
  const layout = () => game.resize(window.innerWidth, window.innerHeight);
  window.addEventListener('resize', () => requestAnimationFrame(layout));
  layout();
  game.setActive(true);

  app.ticker.add((t) => {
    game.update(Math.min(t.deltaMS, 100), true);
    updateTextResolutions();
  });
  // Para testes automáticos (screenshots): acesso à instância do jogo.
  (window as unknown as { __pontoAlto?: CrashGame }).__pontoAlto = game;
}

void start();
