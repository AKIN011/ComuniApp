import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { AuthProvider } from "../../../src/context/AuthContext";
import EmprendedorServiciosListPage from "../../../src/pages/EmprendedorServiciosListPage";
import {
  resetAuthState,
  seedAuthenticatedEntrepreneur,
} from "../../helpers/auth";

function renderServiciosList() {
  return render(
    <MemoryRouter>
      <AuthProvider>
        <EmprendedorServiciosListPage />
      </AuthProvider>
    </MemoryRouter>,
  );
}

vi.mock("react-router", async () => {
  const actual = await vi.importActual<typeof import("react-router")>(
    "react-router",
  );

  return {
    ...actual,
    useLocation: () => ({ key: "test", pathname: "/emprendedor/servicios" }),
  };
});

describe("EmprendedorServiciosListPage", () => {
  beforeEach(() => {
    resetAuthState();
    sessionStorage.clear();
    seedAuthenticatedEntrepreneur();
  });

  it("renderiza el listado de servicios activos e inactivos", async () => {
    renderServiciosList();

    expect(
      await screen.findByRole("heading", { name: /hola, emprendedor/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /todos tus servicios/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /servicios inactivos/i }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByText(/diseño de jardín urbano personalizado/i).length,
    ).toBeGreaterThan(0);
  });
});
