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

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/dashboard", element: <ResidentDashboardPage /> },
  { path: "/categorias/electricistas", element: <SearchResultsPage /> },
  { path: "/service/:id", element: <ServiceDetailsPage /> },
  { path: "/registro", element: <ResidenteRegistro /> },
  { path: "/registro/crear-perfil", element: <ResidenteCrearPerfil /> },
  { path: "/perfil/editar", element: <EditProfile /> },
  { path: "/perfil/editar/exito", element: <EditProfileSuccess /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
