import type { SessionUser, StoredUser, UserRole } from "./types";
import { withProfile } from "./profile";
import {
  validateLoginForm,
  type LoginFieldErrors,
} from "./validation";

export interface RegisterResult {
  success: boolean;
  error?: string;
  fieldErrors?: LoginFieldErrors;
}

const USERS_STORAGE_KEY = "comuniapp_users";

const DEMO_USERS: StoredUser[] = [
  {
    id: "demo-resident",
    email: "residente@comuniapp.com",
    password: "residente123",
    name: "Residente Demo",
    role: "resident",
  },
  {
    id: "demo-entrepreneur",
    email: "emprendedor@comuniapp.com",
    password: "emprendedor123",
    name: "Emprendedor Demo",
    role: "entrepreneur",
  },
];

function readStoredUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem(USERS_STORAGE_KEY);
    if (!raw) return [];

    const users = JSON.parse(raw) as StoredUser[];
    return Array.isArray(users) ? users : [];
  } catch {
    return [];
  }
}

export function registerUser(user: StoredUser): void {
  const users = readStoredUsers();
  const normalizedEmail = user.email.trim().toLowerCase();

  if (
    DEMO_USERS.some((demo) => demo.email === normalizedEmail) ||
    users.some((stored) => stored.email === normalizedEmail)
  ) {
    throw new Error("USER_EXISTS");
  }

  users.push({ ...user, email: normalizedEmail });
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
}

export function registerNewUser(
  email: string,
  password: string,
  role: UserRole,
): RegisterResult {
  const validation = validateLoginForm({ email, password });

  if (!validation.isValid) {
    return {
      success: false,
      error: "Revisa los campos marcados.",
      fieldErrors: validation.errors,
    };
  }

  const normalizedEmail = email.trim().toLowerCase();

  try {
    registerUser({
      id: crypto.randomUUID(),
      email: normalizedEmail,
      password,
      name: normalizedEmail.split("@")[0],
      role,
    });
    return { success: true };
  } catch (err) {
    if (err instanceof Error && err.message === "USER_EXISTS") {
      return {
        success: false,
        error: "Este correo electrónico ya está registrado.",
      };
    }

    return {
      success: false,
      error: "No se pudo completar el registro. Inténtalo de nuevo.",
    };
  }
}

export function authenticateUser(
  email: string,
  password: string,
): SessionUser | null {
  const normalizedEmail = email.trim().toLowerCase();
  const allUsers = [...DEMO_USERS, ...readStoredUsers()];
  const match = allUsers.find(
    (user) =>
      user.email === normalizedEmail && user.password === password,
  );

  if (!match) return null;

  const { password: _password, ...sessionUser } = match;
  return withProfile(sessionUser);
}
