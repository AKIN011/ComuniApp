export type UserRole = "resident" | "entrepreneur";

export interface SessionUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface Session {
  token: string;
  user: SessionUser;
  expiresAt: number;
}

export interface StoredUser extends SessionUser {
  password: string;
}
