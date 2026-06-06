export type UserRole = "resident" | "entrepreneur";

export interface UserProfileData {
  firstName: string;
  lastName: string;
  phone: string;
}

export interface SessionUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  firstName?: string;
  lastName?: string;
  phone?: string;
}

export interface Session {
  token: string;
  user: SessionUser;
  expiresAt: number;
}

export interface StoredUser extends SessionUser {
  password: string;
}
