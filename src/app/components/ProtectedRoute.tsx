import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";
import type { UserRole } from "../../lib/auth/types";
import { ROUTES } from "../../routes/paths";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: UserRole;
  loginPath?: string;
}

export function ProtectedRoute({
  children,
  requiredRole,
  loginPath = ROUTES.login,
}: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, user } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8f9ff] font-['Inter:Regular',sans-serif] text-[15px] text-[#64748b]">
        Cargando sesión…
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={loginPath} replace state={{ from: location.pathname }} />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    const redirectTo =
      user?.role === "entrepreneur"
        ? ROUTES.entrepreneur.tablero
        : ROUTES.dashboard;
    return <Navigate to={redirectTo} replace />;
  }

  return children;
}
