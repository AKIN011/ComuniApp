import { Navigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

export function GuestRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8f9ff] font-['Inter:Regular',sans-serif] text-[15px] text-[#64748b]">
        Cargando sesión…
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
