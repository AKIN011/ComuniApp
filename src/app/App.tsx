import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
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
import EmprendedorCrearServicios from "../pages/EmprendedorCrearServicios";
import EmprendedorEditarPerfil from "../pages/EmprendedorEditarPerfil";
import RegistroEmprendedor from "../pages/RegistroEmprendedor";
import CrearPerfilEmprendedor from "../pages/CrearPerfilEmprendedor";
import EmprendResultCargueServ from "../pages/EmprendResultCargueServ";
import EmprendedorDashboardPage from "../pages/EmprendedorDashboardPage";
import EmprendedorServiciosListPage from "../pages/EmprendedorServiciosListPage";
import ContentPage from "../pages/ContentPage";
import ComingSoonPage from "../pages/ComingSoonPage";
import ServiceHistoryPage from "../pages/ServiceHistoryPage";
import { GuestRoute } from "./components/GuestRoute";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { EmprendedorLayout } from "./components/emprendedor/EmprendedorLayout";
import { LegacyCategoryRedirect } from "../routes/LegacyCategoryRedirect";
import { EmprendedorLegacyRedirect } from "../routes/EmprendedorLegacyRedirect";
import { ROUTES } from "../routes/paths";

const router = createBrowserRouter([
  { path: ROUTES.home, element: <HomePage /> },
  {
    path: ROUTES.login,
    element: (
      <GuestRoute>
        <LoginPage />
      </GuestRoute>
    ),
  },
  {
    path: ROUTES.loginEntrepreneur,
    element: (
      <GuestRoute>
        <LoginEmprendedorPage />
      </GuestRoute>
    ),
  },
  {
    path: ROUTES.forgotPassword,
    element: <ContentPage pageSlug="recuperar" />,
  },
  {
    path: ROUTES.dashboard,
    element: (
      <ProtectedRoute>
        <ResidentDashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: ROUTES.serviceHistory,
    element: (
      <ProtectedRoute>
        <ServiceHistoryPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/services/:categorySlug",
    element: (
      <ProtectedRoute>
        <SearchResultsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/categorias/:legacySlug",
    element: (
      <ProtectedRoute>
        <LegacyCategoryRedirect />
      </ProtectedRoute>
    ),
  },
  {
    path: "/service/:slug",
    element: (
      <ProtectedRoute>
        <ServiceDetailsPage />
      </ProtectedRoute>
    ),
  },
  { path: "/proximamente", element: <ComingSoonPage /> },
  { path: "/legal/:slug", element: <ContentPage /> },
  { path: ROUTES.help, element: <ContentPage pageSlug="ayuda" /> },
  { path: ROUTES.contact, element: <ContentPage pageSlug="contacto" /> },
  { path: ROUTES.register, element: <ResidenteRegistro /> },
  { path: ROUTES.registerEntrepreneur, element: <RegistroEmprendedor /> },
  {
    path: "/registro/emprendedor/crear-perfil",
    element: <CrearPerfilEmprendedor />,
  },
  { path: ROUTES.registerCreateProfile, element: <ResidenteCrearPerfil /> },
  {
    path: ROUTES.editProfile,
    element: (
      <ProtectedRoute>
        <EditProfile />
      </ProtectedRoute>
    ),
  },
  {
    path: ROUTES.editProfileSuccess,
    element: (
      <ProtectedRoute>
        <EditProfileSuccess />
      </ProtectedRoute>
    ),
  },
  {
    path: "/emprendedor",
    element: <EmprendedorLayout />,
    children: [
      { index: true, element: <Navigate to="tablero" replace /> },
      { path: "tablero", element: <EmprendedorDashboardPage /> },
      { path: "servicios", element: <EmprendedorServiciosListPage /> },
    ],
  },
  {
    path: ROUTES.entrepreneur.crearServicio,
    element: <EmprendedorCrearServicios />,
  },
  {
    path: ROUTES.entrepreneur.editarPerfil,
    element: <EmprendedorEditarPerfil />,
  },
  {
    path: ROUTES.entrepreneur.resultadoCargue,
    element: <EmprendResultCargueServ />,
  },
  {
    path: ROUTES.entrepreneur.crearServiciosLegacy,
    element: <EmprendedorLegacyRedirect />,
  },
  {
    path: ROUTES.entrepreneur.editarServiciosLegacy,
    element: <EmprendedorLegacyRedirect />,
  },
  {
    path: ROUTES.entrepreneur.editarPerfilLegacy,
    element: <EmprendedorLegacyRedirect />,
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
