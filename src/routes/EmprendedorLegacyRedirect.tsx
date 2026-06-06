import { Navigate, useLocation } from "react-router";
import { ROUTES } from "./paths";

const LEGACY_EMPRENDEDOR_PATHS: Record<string, string> = {
  "/emprendedor/crear-servicios": ROUTES.entrepreneur.crearServicio,
  "/emprendedor/editar-servicios": ROUTES.entrepreneur.editarServicio,
  "/emprendedor/editar-perfil": ROUTES.entrepreneur.editarPerfil,
};

export function EmprendedorLegacyRedirect() {
  const { pathname } = useLocation();
  const target = LEGACY_EMPRENDEDOR_PATHS[pathname] ?? ROUTES.entrepreneur.tablero;
  return <Navigate to={target} replace />;
}
