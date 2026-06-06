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
import EmprendedorEditarServicios from "../pages/EmprendedorEditarServicios";
import EmprendedorEditarPerfil from "../pages/EmprendedorEditarPerfil";
import RegistroEmprendedor from "../pages/RegistroEmprendedor";
import CrearPerfilEmprendedor from "../pages/CrearPerfilEmprendedor";
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
      <ProtectedRoute requiredRole="resident">
        <ResidentDashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: ROUTES.serviceHistory,
    element: (
      <ProtectedRoute requiredRole="resident">
        <ServiceHistoryPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/services/:categorySlug",
    element: (
      <ProtectedRoute requiredRole="resident">
        <SearchResultsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/categorias/:legacySlug",
    element: (
      <ProtectedRoute requiredRole="resident">
        <LegacyCategoryRedirect />
      </ProtectedRoute>
    ),
  },
  {
    path: "/service/:slug",
    element: (
      <ProtectedRoute requiredRole="resident">
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
    path: ROUTES.registerEntrepreneurCreateProfile,
    element: (
      <ProtectedRoute
        requiredRole="entrepreneur"
        loginPath={ROUTES.registerEntrepreneur}
      >
        <CrearPerfilEmprendedor />
      </ProtectedRoute>
    ),
  },
  { path: ROUTES.registerCreateProfile, element: <ResidenteCrearPerfil /> },
  {
    path: ROUTES.editProfile,
    element: (
      <ProtectedRoute requiredRole="resident">
        <EditProfile />
      </ProtectedRoute>
    ),
  },
  {
    path: ROUTES.editProfileSuccess,
    element: (
      <ProtectedRoute requiredRole="resident">
        <EditProfileSuccess />
      </ProtectedRoute>
    ),
  },
  {
    path: "/emprendedor",
    element: (
      <ProtectedRoute
        requiredRole="entrepreneur"
        loginPath={ROUTES.loginEntrepreneur}
      >
        <EmprendedorLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="tablero" replace /> },
      { path: "tablero", element: <EmprendedorDashboardPage /> },
      { path: "servicios", element: <EmprendedorServiciosListPage /> },
      { path: "perfil/editar", element: <EmprendedorEditarPerfil /> },
    ],
  },
  {
    path: ROUTES.entrepreneur.crearServicio,
    element: (
      <ProtectedRoute
        requiredRole="entrepreneur"
        loginPath={ROUTES.loginEntrepreneur}
      >
        <EmprendedorCrearServicios />
      </ProtectedRoute>
    ),
  },
  {
    path: ROUTES.entrepreneur.editarServicio,
    element: (
      <ProtectedRoute
        requiredRole="entrepreneur"
        loginPath={ROUTES.loginEntrepreneur}
      >
        <EmprendedorEditarServicios />
      </ProtectedRoute>
    ),
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
