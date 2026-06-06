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
  buildDisplayName,
  getProfileForUser,
  saveUserProfile,
  withProfile,
} from "../lib/auth/profile";
import {
  clearSession,
  createSession,
  readSession,
  saveSession,
} from "../lib/auth/session";
import type { Session, SessionUser, UserProfileData } from "../lib/auth/types";
import type { ProfileUpdateResult } from "../lib/auth/profile";

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
  updateProfile: (profile: UserProfileData) => ProfileUpdateResult;
  getCurrentProfile: () => UserProfileData | null;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const existingSession = readSession();
    if (existingSession) {
      setSession({
        ...existingSession,
        user: withProfile(existingSession.user),
      });
    }
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

  const getCurrentProfile = useCallback((): UserProfileData | null => {
    if (!session?.user) return null;
    return getProfileForUser(session.user);
  }, [session]);

  const updateProfile = useCallback(
    (profile: UserProfileData): ProfileUpdateResult => {
      if (!session?.user) {
        return {
          success: false,
          error: "No hay una sesión activa.",
        };
      }

      const result = saveUserProfile(session.user.id, profile);

      if (!result.success) return result;

      const updatedUser: SessionUser = {
        ...session.user,
        firstName: profile.firstName.trim(),
        lastName: profile.lastName.trim(),
        phone: profile.phone.trim(),
        name: buildDisplayName(profile),
      };

      const nextSession: Session = {
        ...session,
        user: updatedUser,
      };

      saveSession(nextSession);
      setSession(nextSession);

      return { success: true };
    },
    [session],
  );

  const value = useMemo<AuthContextValue>(
    () => ({
      user: session?.user ?? null,
      isAuthenticated: session !== null,
      isLoading,
      login,
      logout,
      updateProfile,
      getCurrentProfile,
    }),
    [session, isLoading, login, logout, updateProfile, getCurrentProfile],
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
