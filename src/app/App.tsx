import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ResidentDashboardPage from "../pages/ResidentDashboardPage";
import SearchResultsPage from "../pages/SearchResultsPage";
import ServiceDetailsPage from "../pages/ServiceDetailsPage";
import ResidenteRegistro from "../pages/ResidenteRegistro";
import ResidenteCrearPerfil from "../pages/ResidenteCrearPerfil";
import { EditProfile } from "../pages/EditProfile";
import { EditProfileSuccess } from "../pages/EditProfileSuccess";
import EmprendedorCrearServicios from "../pages/EmprendedorCrearServicios";
import EmprendedorEditarServicios from "../pages/EmprendedorEditarServicios";
import EmprendedorEditarPerfil from "../pages/EmprendedorEditarPerfil";
import RegistroEmprendedor from "../pages/RegistroEmprendedor";
import CrearPerfilEmprendedor from "../pages/CrearPerfilEmprendedor";
import EmprendResultCargueServ from "../pages/EmprendResultCargueServ";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/dashboard", element: <ResidentDashboardPage /> },
  { path: "/categorias/electricistas", element: <SearchResultsPage /> },
  { path: "/service/:id", element: <ServiceDetailsPage /> },
  { path: "/registro", element: <ResidenteRegistro /> },
  { path: "/registro/emprendedor", element: <RegistroEmprendedor /> },
  {
    path: "/registro/emprendedor/crear-perfil",
    element: <CrearPerfilEmprendedor />,
  },
  { path: "/registro/crear-perfil", element: <ResidenteCrearPerfil /> },
  { path: "/perfil/editar", element: <EditProfile /> },
  { path: "/perfil/editar/exito", element: <EditProfileSuccess /> },
  {
    path: "/emprendedor/crear-servicios",
    element: <EmprendedorCrearServicios />,
  },
  {
    path: "/emprendedor/editar-servicios",
    element: <EmprendedorEditarServicios />,
  },
  {
    path: "/emprendedor/editar-perfil",
    element: <EmprendedorEditarPerfil />,
  },
  {
    path: "/emprendedor/resultado-cargue-serv",
    element: <EmprendResultCargueServ />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
