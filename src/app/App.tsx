import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthProvider } from "../context/AuthContext";
import { appRoutes } from "../routes/appRoutes";

const router = createBrowserRouter(appRoutes);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
