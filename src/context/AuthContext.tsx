import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { authenticateUser } from "../lib/auth/credentials";
import {
  clearSession,
  createSession,
  readSession,
  saveSession,
} from "../lib/auth/session";
import type { Session, SessionUser } from "../lib/auth/types";

interface LoginResult {
  success: boolean;
  error?: string;
}

interface AuthContextValue {
  user: SessionUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => LoginResult;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setSession(readSession());
    setIsLoading(false);
  }, []);

  const login = useCallback((email: string, password: string): LoginResult => {
    const user = authenticateUser(email, password);

    if (!user) {
      return {
        success: false,
        error: "Correo o contraseña incorrectos. Verifica tus datos.",
      };
    }

    const nextSession = createSession(user);
    saveSession(nextSession);
    setSession(nextSession);

    return { success: true };
  }, []);

  const logout = useCallback(() => {
    clearSession();
    setSession(null);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user: session?.user ?? null,
      isAuthenticated: session !== null,
      isLoading,
      login,
      logout,
    }),
    [session, isLoading, login, logout],
  );

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider.");
  }

  return context;
}
