import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ResidentDashboardPage from "../pages/ResidentDashboardPage";
import SearchResultsPage from "../pages/SearchResultsPage";
import ServiceDetailsPage from "../pages/ServiceDetailsPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/dashboard", element: <ResidentDashboardPage /> },
  { path: "/categorias/electricistas", element: <SearchResultsPage /> },
  { path: "/service/:id", element: <ServiceDetailsPage /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
