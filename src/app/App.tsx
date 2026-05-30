import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ResidentDashboardPage from "../pages/ResidentDashboardPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/dashboard", element: <ResidentDashboardPage /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
