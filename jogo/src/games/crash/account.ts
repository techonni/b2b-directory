/** Cliente da API de contas (game.zunrel.com/api): número de conta + PIN, guarda o saldo demo. */
const TOKEN_KEY = 'crash-pixi:token';
const ACCOUNT_KEY = 'crash-pixi:account';

export interface Session {
  account: string;
  token: string;
}

function read(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key: string, value: string | null): void {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch {
    /* ignorar */
  }
}

async function call<T>(method: string, path: string, body?: unknown, token?: string): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`/api/${path}`, {
      method,
      headers: { 'content-type': 'application/json', ...(token ? { authorization: `Bearer ${token}` } : {}) },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  } catch {
    throw new Error('Sem ligação. Tenta outra vez');
  }
  const data = (await res.json().catch(() => ({}))) as T & { error?: string };
  if (!res.ok) throw new Error(data.error ?? 'Erro do servidor');
  return data;
}

export class AccountClient {
  session: Session | null = null;
  private saveTimer = 0;

  constructor() {
    const token = read(TOKEN_KEY);
    const account = read(ACCOUNT_KEY);
    if (token && account) this.session = { token, account };
  }

  private keep(s: Session | null): void {
    this.session = s;
    write(TOKEN_KEY, s?.token ?? null);
    write(ACCOUNT_KEY, s?.account ?? null);
  }

  async register(pin: string, balance: number): Promise<number> {
    const r = await call<Session & { balance: number }>('POST', 'register', { pin, balance });
    this.keep({ account: r.account, token: r.token });
    return r.balance;
  }

  async login(account: string, pin: string): Promise<number> {
    const r = await call<Session & { balance: number }>('POST', 'login', { account, pin });
    this.keep({ account: r.account, token: r.token });
    return r.balance;
  }

  /** Saldo guardado na conta (ou null se a sessão já não for válida). */
  async me(): Promise<number | null> {
    if (!this.session) return null;
    try {
      const r = await call<{ balance: number }>('GET', 'me', undefined, this.session.token);
      return r.balance;
    } catch (e) {
      if ((e as Error).message === 'Sessão expirada') this.keep(null);
      return null;
    }
  }

  /** Guarda o saldo (agrupa alterações seguidas num só pedido). */
  saveSoon(balance: number): void {
    if (!this.session) return;
    window.clearTimeout(this.saveTimer);
    const token = this.session.token;
    this.saveTimer = window.setTimeout(() => {
      call('PUT', 'balance', { balance }, token).catch(() => undefined);
    }, 600);
  }

  async logout(): Promise<void> {
    const token = this.session?.token;
    this.keep(null);
    if (token) await call('POST', 'logout', undefined, token).catch(() => undefined);
  }
}
