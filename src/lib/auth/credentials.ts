import type { SessionUser, StoredUser } from "./types";

const USERS_STORAGE_KEY = "comuniapp_users";

const DEMO_USERS: StoredUser[] = [
  {
    id: "demo-resident",
    email: "residente@comuniapp.com",
    password: "residente123",
    name: "Residente Demo",
    role: "resident",
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
  return sessionUser;
}
