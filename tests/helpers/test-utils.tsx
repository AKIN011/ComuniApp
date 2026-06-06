import { render, type RenderOptions } from "@testing-library/react";
import { createMemoryRouter, MemoryRouter, RouterProvider } from "react-router";
import type { ReactElement, ReactNode } from "react";

import { AuthProvider } from "../../src/context/AuthContext";
import { appRoutes } from "../../src/routes/appRoutes";

interface ProviderOptions {
  route?: string;
}

function Providers({
  children,
  route = "/",
}: {
  children: ReactNode;
  route?: string;
}) {
  return (
    <MemoryRouter initialEntries={[route]}>
      <AuthProvider>{children}</AuthProvider>
    </MemoryRouter>
  );
}

export function renderWithProviders(
  ui: ReactElement,
  { route = "/", ...options }: ProviderOptions & Omit<RenderOptions, "wrapper"> = {},
) {
  return render(ui, {
    wrapper: ({ children }) => <Providers route={route}>{children}</Providers>,
    ...options,
  });
}

/** Monta la app completa en la ruta indicada (usa createMemoryRouter). */
export function renderApp(route = "/") {
  const router = createMemoryRouter(appRoutes, { initialEntries: [route] });

  return render(
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>,
  );
}
