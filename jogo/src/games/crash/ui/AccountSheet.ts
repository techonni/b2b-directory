import { Container, Graphics, Rectangle, type Text } from 'pixi.js';
import gsap from 'gsap';
import { C, R } from '../theme';
import { makeMono, makeText } from '../text';
import { Button } from './Button';

export type AccountView = { kind: 'out' } | { kind: 'in'; account: string } | { kind: 'created'; account: string };

/** Mostra o número de conta em dois blocos (ex.: 4821 3907). */
export const fmtAccount = (a: string) => `${a.slice(0, 4)} ${a.slice(4)}`;

/** Janela "Conta": criar conta, entrar com número + PIN, ou sair. Tudo em Pixi. */
export class AccountSheet extends Container {
  onCreate: (() => void) | null = null;
  onLogin: (() => void) | null = null;
  onLogout: (() => void) | null = null;
  isOpen = false;

  private readonly backdrop = new Graphics();
  private readonly panel = new Container();
  private readonly bg = new Graphics();
  private readonly title: Text;
  private readonly big: Text;
  private readonly text: Text;
  private readonly primary = new Button({ label: '', width: 300, height: 52, fontSize: 17 });
  private readonly secondary = new Button({ label: '', width: 300, height: 52, color: C.ink, fontSize: 17 });
  private readonly closeBtn = new Button({ label: 'Fechar', width: 300, height: 44, color: C.bgSoft, textColor: C.text, fontSize: 15 });
  private view: AccountView = { kind: 'out' };
  private W = 400;
  private H = 800;
  private w = 380;

  constructor() {
    super();
    this.visible = false;
    this.backdrop.eventMode = 'static';
    this.backdrop.on('pointertap', () => this.close());
    this.panel.eventMode = 'static';
    this.title = makeText('Conta', { fontSize: 20, fontWeight: '600', fill: C.text, letterSpacing: -0.4 });
    this.big = makeMono('', { fontSize: 32, fontWeight: '600', fill: C.accent, letterSpacing: 2 });
    this.big.anchor.set(0.5, 0);
    this.text = makeText('', { fontSize: 14, fontWeight: '400', fill: C.textMuted, wordWrap: true, lineHeight: 21 });
    this.closeBtn.onTap = () => this.close();
    this.panel.addChild(this.bg, this.title, this.big, this.text, this.primary, this.secondary, this.closeBtn);
    this.addChild(this.backdrop, this.panel);
  }

  layout(W: number, H: number): void {
    this.W = W;
    this.H = H;
    this.w = Math.min(W - 32, 420);
    this.render();
  }

  open(view: AccountView): void {
    this.view = view;
    this.render();
    if (this.isOpen) return;
    this.isOpen = true;
    this.visible = true;
    gsap.fromTo(this, { alpha: 0 }, { alpha: 1, duration: 0.2 });
    gsap.fromTo(this.panel.scale, { x: 0.94, y: 0.94 }, { x: 1, y: 1, duration: 0.3, ease: 'back.out(2)' });
  }

  close(): void {
    if (!this.isOpen) return;
    this.isOpen = false;
    gsap.to(this, { alpha: 0, duration: 0.18, onComplete: () => (this.visible = this.isOpen) });
  }

  private render(): void {
    const v = this.view;
    const pad = 20;
    const iw = this.w - pad * 2;
    this.text.style.wordWrapWidth = iw;

    this.big.visible = v.kind !== 'out';
    this.secondary.visible = v.kind === 'out';
    if (v.kind === 'out') {
      this.title.text = 'Conta';
      this.text.text = 'Cria uma conta para guardar as tuas moedas virtuais e continuar noutro telemóvel ou computador. Só precisas de um PIN de 4 a 8 algarismos.';
      this.primary.setText('Criar conta');
      this.primary.onTap = () => this.onCreate?.();
      this.secondary.setText('Já tenho conta · Entrar');
      this.secondary.onTap = () => this.onLogin?.();
    } else if (v.kind === 'created') {
      this.title.text = 'Conta criada';
      this.big.text = fmtAccount(v.account);
      this.text.text = 'Este é o teu número de conta. Guarda-o (por exemplo, numa nota) com o teu PIN: vais precisar dos dois para entrar noutro dispositivo. O saldo fica guardado sozinho.';
      this.primary.setText('OK');
      this.primary.onTap = () => this.close();
    } else {
      this.title.text = 'A tua conta';
      this.big.text = fmtAccount(v.account);
      this.text.text = 'O saldo fica guardado sozinho nesta conta. Moedas virtuais, sem dinheiro real.';
      this.primary.setText('Sair da conta');
      this.primary.onTap = () => this.onLogout?.();
    }

    let y = pad;
    this.title.position.set(pad, y);
    y += 38;
    if (this.big.visible) {
      this.big.position.set(this.w / 2, y);
      y += 52;
    }
    this.text.position.set(pad, y);
    y += this.text.height + 18;
    for (const b of [this.primary, ...(this.secondary.visible ? [this.secondary] : []), this.closeBtn]) {
      b.position.set(pad, y);
      b.setSize(iw, b === this.closeBtn ? 44 : 52);
      y += (b === this.closeBtn ? 44 : 52) + 10;
    }
    const h = y + pad - 10;
    this.bg.clear().roundRect(0, 0, this.w, h, R.panel).fill(C.bgPanel).stroke({ width: 1, color: C.border, alignment: 1 });
    this.panel.pivot.set(this.w / 2, h / 2);
    this.panel.position.set(this.W / 2, this.H / 2);
    this.panel.hitArea = new Rectangle(0, 0, this.w, h);
    this.backdrop.clear().rect(0, 0, this.W, this.H).fill({ color: 0x171717, alpha: 0.28 });
  }
}
