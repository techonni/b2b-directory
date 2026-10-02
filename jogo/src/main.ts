import { Application } from 'pixi.js';
import { C } from './core/theme';
import { setDevicePixelRatio, updateTextResolutions } from './core/text';
import { sound } from './core/audio/Sound';
import { CrashGame } from './games/crash/CrashGame';

/** game.zunrel.com : só o jogo Crash, em ecrã inteiro (créditos fictícios, sem dinheiro real). */
async function start(): Promise<void> {
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
}

void start();
