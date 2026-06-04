import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import LoginEmprendedorPage from "../pages/LoginEmprendedorPage";
import ResidentDashboardPage from "../pages/ResidentDashboardPage";
import SearchResultsPage from "../pages/SearchResultsPage";
import ServiceDetailsPage from "../pages/ServiceDetailsPage";
import ResidenteRegistro from "../pages/ResidenteRegistro";
import ResidenteCrearPerfil from "../pages/ResidenteCrearPerfil";
import { EditProfile } from "../pages/EditProfile";
import { EditProfileSuccess } from "../pages/EditProfileSuccess";
import { EmprendedorLayout } from "./components/emprendedor/EmprendedorLayout";
import EmprendedorDashboardPage from "../pages/EmprendedorDashboardPage";
import EmprendedorServiciosListPage from "../pages/EmprendedorServiciosListPage";
import EmprendedorCrearServicioPage from "../pages/EmprendedorCrearServicioPage";
import EmprendedorEditarPerfilPage from "../pages/EmprendedorEditarPerfilPage";
import { EMPRENDEDOR_ROUTES } from "../lib/emprendedorRoutes";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/login/emprendedor", element: <LoginEmprendedorPage /> },
  { path: "/dashboard", element: <ResidentDashboardPage /> },
  { path: "/categorias/electricistas", element: <SearchResultsPage /> },
  { path: "/service/:id", element: <ServiceDetailsPage /> },
  { path: "/registro", element: <ResidenteRegistro /> },
  { path: "/registro/crear-perfil", element: <ResidenteCrearPerfil /> },
  { path: "/perfil/editar", element: <EditProfile /> },
  { path: "/perfil/editar/exito", element: <EditProfileSuccess /> },
  {
    path: "/emprendedor",
    element: <EmprendedorLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={EMPRENDEDOR_ROUTES.tablero} replace />,
      },
      { path: "tablero", element: <EmprendedorDashboardPage /> },
      { path: "servicios", element: <EmprendedorServiciosListPage /> },
      { path: "servicios/crear", element: <EmprendedorCrearServicioPage /> },
      { path: "perfil/editar", element: <EmprendedorEditarPerfilPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
