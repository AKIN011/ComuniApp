import { clearSession, createSession, saveSession } from "../../src/lib/auth/session";
import type { SessionUser } from "../../src/lib/auth/types";

export const mockResident: SessionUser = {
  id: "demo-resident",
  email: "residente@comuniapp.com",
  name: "Residente Demo",
  role: "resident",
};

export function resetAuthState() {
  clearSession();
}

export function seedAuthenticatedResident(user: SessionUser = mockResident) {
  const session = createSession(user);
  saveSession(session);
}
