import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';
import { Application } from 'pixi.js';
import { C } from './core/theme';
import { setDevicePixelRatio, updateTextResolutions } from './core/text';
import { sound } from './core/audio/Sound';
import { CrashGame } from './games/crash/CrashGame';

/** game.zunrel.com: Ponto Alto, em ecrã inteiro (moedas virtuais, sem dinheiro real). */
async function start(): Promise<void> {
  // As letras têm de estar carregadas antes de desenhar texto no canvas.
  const sample = 'Aa0é×½−→,';
  await Promise.all(
    ['400', '500', '600', '700'].map((w) => document.fonts.load(`${w} 16px "Geist Variable"`, sample)).concat(
      ['500', '600'].map((w) => document.fonts.load(`${w} 16px "Geist Mono Variable"`, sample)),
    ),
  ).catch(() => undefined);
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  setDevicePixelRatio(dpr);
  const app = new Application();
  await app.init({ resizeTo: window, background: C.bg, antialias: true, autoDensity: true, resolution: dpr });
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
}

void start();
