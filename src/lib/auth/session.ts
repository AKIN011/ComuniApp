import type { Session } from "./types";

const SESSION_STORAGE_KEY = "comuniapp_session";
const SESSION_DURATION_MS = 24 * 60 * 60 * 1000;

export function createSession(user: Session["user"]): Session {
  return {
    token: crypto.randomUUID(),
    user,
    expiresAt: Date.now() + SESSION_DURATION_MS,
  };
}

export function isSessionValid(session: Session | null): session is Session {
  return session !== null && session.expiresAt > Date.now();
}

export function readSession(): Session | null {
  try {
    const raw = localStorage.getItem(SESSION_STORAGE_KEY);
    if (!raw) return null;

    const session = JSON.parse(raw) as Session;
    if (!isSessionValid(session)) {
      clearSession();
      return null;
    }

    return session;
  } catch {
    clearSession();
    return null;
  }
}

export function saveSession(session: Session): void {
  localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
}

export function clearSession(): void {
  localStorage.removeItem(SESSION_STORAGE_KEY);
}
