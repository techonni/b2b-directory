import { Container, Graphics } from 'pixi.js';
import gsap from 'gsap';
import { C, R } from '../core/theme';
import { makeText } from '../core/text';
import { Button } from '../core/ui/Button';
import { Page } from './Page';
import { BinaryThumb, CrashThumb, type Thumb } from './thumbs';

function pill(text: string, color: number = C.btnSecondary, textColor: number = C.text): Container {
  const c = new Container();
  const t = makeText(text, { fontSize: 13, fontWeight: '700', fill: textColor });
  const w = t.width + 22;
  c.addChild(new Graphics().roundRect(0, 0, w, 28, 14).fill(color), t);
  t.position.set(11, 14 - t.height / 2);
  return c;
}

/** Página inicial: destaque com os dois jogos animados e rodapé. */
export class HomePage extends Page {
  private thumbs: Thumb[] = [];

  protected build(x: number, w: number): number {
    this.thumbs = [];
    const m = this.mobile;
    const c = this.content;
    let y = m ? 28 : 64;

    // ---------- Destaque ----------
    const textW = m ? w : w * 0.48;
    const kicker = pill('Jogos originais · HTML5', C.bgPanel, C.textMuted);
    kicker.position.set(x, y);
    const h1 = makeText('Jogos originais,\ndireto no browser.', {
      fontSize: m ? 36 : 54,
      fontWeight: '800',
      fill: C.text,
      lineHeight: m ? 42 : 62,
      wordWrap: true,
      wordWrapWidth: textW,
    });
    h1.position.set(x, y + 44);
    const lead = makeText('Crash e opções binárias em modo demo: créditos fictícios, sem registo e sem dinheiro real. Abre, joga e diverte-te.', {
      fontSize: m ? 16 : 19,
      fontWeight: '500',
      fill: C.textMuted,
      lineHeight: m ? 24 : 29,
      wordWrap: true,
      wordWrapWidth: textW,
    });
    lead.position.set(x, h1.y + h1.height + 16);
    c.addChild(kicker, h1, lead);

    let by = lead.y + lead.height + 28;
    const bw = m ? (w - 12) / 2 : 180;
    const play1 = new Button({ label: 'Jogar Crash', width: bw, height: 52, fontSize: 17 });
    const play2 = new Button({ label: 'Jogar Binary', width: bw, height: 52, fontSize: 17, color: C.btnSecondary });
    play1.position.set(x, by);
    play2.position.set(x + bw + 12, by);
    play1.onTap = () => this.onNavigate?.('crash');
    play2.onTap = () => this.onNavigate?.('binary');
    c.addChild(play1, play2);
    by += 52 + 28;

    const stats = [
      ['2', 'jogos originais'],
      ['99%', 'RTP no Crash'],
      ['0 €', 'sempre demo'],
    ];
    const sw = m ? w / 3 : 140;
    stats.forEach(([big, small], i) => {
      const b = makeText(big, { fontSize: m ? 24 : 28, fontWeight: '800', fill: C.text });
      const s = makeText(small, { fontSize: 13, fontWeight: '600', fill: C.textMuted });
      b.position.set(x + i * sw, by);
      s.position.set(x + i * sw, by + (m ? 32 : 38));
      c.addChild(b, s);
    });
    const textBottom = by + 64;

    // Ilustração: dois ecrãs de jogo animados a flutuar.
    const artW = m ? w : w * 0.48;
    const artH = m ? 250 : 400;
    const artX = m ? x : x + w - artW;
    const artY = m ? textBottom + 28 : y - 8;
    const art = new Container();
    art.position.set(artX, artY);
    const a1 = new CrashThumb();
    const a2 = new BinaryThumb();
    const artCardW = artW * 0.74;
    const artCardH = artH * 0.62;
    a1.layout(artCardW, artCardH);
    a2.layout(artCardW, artCardH);
    const frame = (t: Thumb) => {
      const f = new Container();
      f.addChild(new Graphics().roundRect(-6, -6, artCardW + 12, artCardH + 12, R.panel + 4).fill(C.bgPanel), t);
      return f;
    };
    const f2 = frame(a2);
    const f1 = frame(a1);
    f2.position.set(artW - artCardW, artH - artCardH);
    f1.position.set(0, 0);
    art.addChild(f2, f1);
    gsap.to(f1, { y: 10, duration: 2.6, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to(f2, { y: artH - artCardH - 10, duration: 3.1, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    c.addChild(art);
    this.thumbs.push(a1, a2);
    gsap.from([kicker, h1, lead, play1, play2], { alpha: 0, y: '+=16', duration: 0.6, stagger: 0.06, ease: 'power3.out' });
    gsap.from(art, { alpha: 0, x: art.x + 30, duration: 0.8, ease: 'power3.out' });

    y = Math.max(textBottom, artY + artH) + (m ? 16 : 32);

    return y;
  }

  tick(dt: number): void {
    for (const t of this.thumbs) if (!t.destroyed) t.tick(dt);
  }
}
