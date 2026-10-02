/**
 * API de contas do jogo (Cloudflare Pages Functions + D1).
 * Conta = número de 8 algarismos + PIN de 4 a 8 algarismos. Guarda só o saldo demo (créditos fictícios).
 *
 *   POST /api/register  { pin, balance }      → { account, token, balance }
 *   POST /api/login     { account, pin }      → { account, token, balance }
 *   GET  /api/me        (Authorization: Bearer <token>) → { account, balance }
 *   PUT  /api/balance   { balance } (Bearer)  → { balance }
 *   POST /api/logout    (Bearer)              → { ok: true }
 */

interface D1Result<T> {
  results: T[];
}
interface D1Prepared {
  bind(...values: unknown[]): D1Prepared;
  first<T>(): Promise<T | null>;
  run(): Promise<unknown>;
  all<T>(): Promise<D1Result<T>>;
}
interface D1Database {
  prepare(sql: string): D1Prepared;
  exec(sql: string): Promise<unknown>;
}
interface Env {
  DB: D1Database;
}
interface Context {
  request: Request;
  env: Env;
  params: { path?: string[] };
}
interface AccountRow {
  id: string;
  pin_hash: string;
  salt: string;
  balance: number;
  fails: number;
  locked_until: number;
}

const START_BALANCE = 1000;
const MAX_BALANCE = 1e9;
const MAX_FAILS = 5;
const LOCK_MS = 15 * 60 * 1000;
const ITERATIONS = 100_000;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
const fail = (msg: string, status = 400) => json({ error: msg }, status);

const hex = (buf: ArrayBuffer | Uint8Array) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
const randomHex = (bytes: number) => hex(crypto.getRandomValues(new Uint8Array(bytes)));

async function hashPin(pin: string, salt: string): Promise<string> {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(pin), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', hash: 'SHA-256', salt: new TextEncoder().encode(salt), iterations: ITERATIONS },
    key,
    256,
  );
  return hex(bits);
}

/** Comparação em tempo constante. */
function same(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}

const validPin = (pin: unknown): pin is string => typeof pin === 'string' && /^\d{4,8}$/.test(pin);
const cleanBalance = (v: unknown) => {
  const n = Number(v);
  return Number.isFinite(n) ? Math.min(MAX_BALANCE, Math.max(0, Math.round(n * 100) / 100)) : null;
};

async function body(req: Request): Promise<Record<string, unknown>> {
  try {
    const b = await req.json();
    return b && typeof b === 'object' ? (b as Record<string, unknown>) : {};
  } catch {
    return {};
  }
}

async function newSession(db: D1Database, account: string): Promise<string> {
  const token = randomHex(32);
  await db.prepare('INSERT INTO sessions (token, account_id, created_at) VALUES (?, ?, ?)').bind(token, account, Date.now()).run();
  return token;
}

async function sessionAccount(req: Request, db: D1Database): Promise<AccountRow | null> {
  const m = /^Bearer ([0-9a-f]{64})$/.exec(req.headers.get('authorization') ?? '');
  if (!m) return null;
  return db
    .prepare('SELECT a.* FROM sessions s JOIN accounts a ON a.id = s.account_id WHERE s.token = ?')
    .bind(m[1])
    .first<AccountRow>();
}

const SCHEMA =
  'CREATE TABLE IF NOT EXISTS accounts (id TEXT PRIMARY KEY, pin_hash TEXT NOT NULL, salt TEXT NOT NULL, balance REAL NOT NULL DEFAULT 1000, fails INTEGER NOT NULL DEFAULT 0, locked_until INTEGER NOT NULL DEFAULT 0, created_at INTEGER NOT NULL);\n' +
  'CREATE TABLE IF NOT EXISTS sessions (token TEXT PRIMARY KEY, account_id TEXT NOT NULL, created_at INTEGER NOT NULL);';
let schemaReady: Promise<unknown> | null = null;

export async function onRequest(ctx: Context): Promise<Response> {
  const { request: req, env } = ctx;
  const db = env.DB;
  if (!db) return fail('Base de dados não ligada', 503);
  schemaReady ??= db.exec(SCHEMA).catch((e) => {
    schemaReady = null;
    throw e;
  });
  await schemaReady;
  const route = `${req.method} /${(ctx.params.path ?? []).join('/')}`;

  if (route === 'POST /register') {
    const b = await body(req);
    if (!validPin(b.pin)) return fail('O PIN tem de ter 4 a 8 algarismos');
    const balance = cleanBalance(b.balance) ?? START_BALANCE;
    const salt = randomHex(16);
    const pinHash = await hashPin(b.pin, salt);
    for (let tries = 0; tries < 5; tries++) {
      const id = String(10_000_000 + (crypto.getRandomValues(new Uint32Array(1))[0] % 90_000_000));
      const exists = await db.prepare('SELECT id FROM accounts WHERE id = ?').bind(id).first();
      if (exists) continue;
      await db
        .prepare('INSERT INTO accounts (id, pin_hash, salt, balance, created_at) VALUES (?, ?, ?, ?, ?)')
        .bind(id, pinHash, salt, balance, Date.now())
        .run();
      return json({ account: id, token: await newSession(db, id), balance });
    }
    return fail('Tenta outra vez', 500);
  }

  if (route === 'POST /login') {
    const b = await body(req);
    const id = typeof b.account === 'string' ? b.account : String(b.account ?? '');
    if (!/^\d{8}$/.test(id) || !validPin(b.pin)) return fail('Conta ou PIN errados', 401);
    const acc = await db.prepare('SELECT * FROM accounts WHERE id = ?').bind(id).first<AccountRow>();
    if (!acc) return fail('Conta ou PIN errados', 401);
    if (acc.locked_until > Date.now()) return fail('Demasiadas tentativas. Tenta daqui a 15 minutos', 429);
    if (!same(await hashPin(b.pin, acc.salt), acc.pin_hash)) {
      const fails = acc.fails + 1;
      const lock = fails >= MAX_FAILS ? Date.now() + LOCK_MS : 0;
      await db.prepare('UPDATE accounts SET fails = ?, locked_until = ? WHERE id = ?').bind(lock ? 0 : fails, lock, id).run();
      return fail(lock ? 'Demasiadas tentativas. Tenta daqui a 15 minutos' : 'Conta ou PIN errados', lock ? 429 : 401);
    }
    await db.prepare('UPDATE accounts SET fails = 0, locked_until = 0 WHERE id = ?').bind(id).run();
    return json({ account: id, token: await newSession(db, id), balance: acc.balance });
  }

  if (route === 'GET /me') {
    const acc = await sessionAccount(req, db);
    return acc ? json({ account: acc.id, balance: acc.balance }) : fail('Sessão expirada', 401);
  }

  if (route === 'PUT /balance') {
    const acc = await sessionAccount(req, db);
    if (!acc) return fail('Sessão expirada', 401);
    const balance = cleanBalance((await body(req)).balance);
    if (balance === null) return fail('Saldo inválido');
    await db.prepare('UPDATE accounts SET balance = ? WHERE id = ?').bind(balance, acc.id).run();
    return json({ balance });
  }

  if (route === 'POST /logout') {
    const m = /^Bearer ([0-9a-f]{64})$/.exec(req.headers.get('authorization') ?? '');
    if (m) await db.prepare('DELETE FROM sessions WHERE token = ?').bind(m[1]).run();
    return json({ ok: true });
  }

  return fail('Não encontrado', 404);
}
