import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthProvider } from "../context/AuthContext";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ResidentDashboardPage from "../pages/ResidentDashboardPage";
import SearchResultsPage from "../pages/SearchResultsPage";
import ServiceDetailsPage from "../pages/ServiceDetailsPage";
import ResidenteRegistro from "../pages/ResidenteRegistro";
import ResidenteCrearPerfil from "../pages/ResidenteCrearPerfil";
import { EditProfile } from "../pages/EditProfile";
import { EditProfileSuccess } from "../pages/EditProfileSuccess";
import { GuestRoute } from "./components/GuestRoute";
import { ProtectedRoute } from "./components/ProtectedRoute";

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
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
