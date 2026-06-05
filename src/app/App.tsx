import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthProvider } from "../context/AuthContext";
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
import { GuestRoute } from "./components/GuestRoute";
import { ProtectedRoute } from "./components/ProtectedRoute";
import EmprendedorCrearServicios from "../pages/EmprendedorCrearServicios";
import EmprendedorEditarServicios from "../pages/EmprendedorEditarServicios";
import EmprendedorEditarPerfil from "../pages/EmprendedorEditarPerfil";
import RegistroEmprendedor from "../pages/RegistroEmprendedor";
import CrearPerfilEmprendedor from "../pages/CrearPerfilEmprendedor";
import EmprendResultCargueServ from "../pages/EmprendResultCargueServ";

const router = createBrowserRouter([

  { path: "/", element: <HomePage /> },
  {
    path: "/login",
    element: (
      <GuestRoute>
        <LoginPage />
      </GuestRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <ResidentDashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/categorias/electricistas",
    element: (
      <ProtectedRoute>
        <SearchResultsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/service/:id",
    element: (
      <ProtectedRoute>
        <ServiceDetailsPage />
      </ProtectedRoute>
    ),
  },
  { path: "/registro", element: <ResidenteRegistro /> },
  { path: "/registro/emprendedor", element: <RegistroEmprendedor /> },
  {
    path: "/registro/emprendedor/crear-perfil",
    element: <CrearPerfilEmprendedor />,
  },
  { path: "/registro/crear-perfil", element: <ResidenteCrearPerfil /> },
  {
    path: "/perfil/editar",
    element: (
      <ProtectedRoute>
        <EditProfile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/perfil/editar/exito",
    element: (
      <ProtectedRoute>
        <EditProfileSuccess />
      </ProtectedRoute>
    ),
  },
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
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

