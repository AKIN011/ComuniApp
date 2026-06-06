import { Navigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { ROUTES } from "../../routes/paths";

export function GuestRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading, user } = useAuth();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8f9ff] font-['Inter:Regular',sans-serif] text-[15px] text-[#64748b]">
        Cargando sesión…
      </div>
    );
  }

  if (isAuthenticated && user) {
    const redirectTo =
      user.role === "entrepreneur"
        ? ROUTES.entrepreneur.tablero
        : ROUTES.dashboard;
    return <Navigate to={redirectTo} replace />;
  }

  return children;
}
