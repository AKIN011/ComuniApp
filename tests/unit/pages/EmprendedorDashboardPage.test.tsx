import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { AuthProvider } from "../../../src/context/AuthContext";
import EmprendedorDashboardPage from "../../../src/pages/EmprendedorDashboardPage";
import {
  resetAuthState,
  seedAuthenticatedEntrepreneur,
  seedEntrepreneurWithCompleteProfile,
} from "../../helpers/auth";

function renderDashboard() {
  return render(
    <MemoryRouter>
      <AuthProvider>
        <EmprendedorDashboardPage />
      </AuthProvider>
    </MemoryRouter>,
  );
}

const mockNavigate = vi.fn();

vi.mock("react-router", async () => {
  const actual = await vi.importActual<typeof import("react-router")>(
    "react-router",
  );

  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => ({ key: "test", pathname: "/emprendedor/tablero" }),
  };
});

describe("EmprendedorDashboardPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    resetAuthState();
    sessionStorage.clear();
  });

  it("renderiza el tablero con saludo y acciones rápidas", async () => {
    seedAuthenticatedEntrepreneur();
    renderDashboard();

    expect(
      await screen.findByRole("heading", { name: /hola, emprendedor/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/acciones rápidas/i)).toBeInTheDocument();
    expect(screen.getByText(/crear nuevo servicio/i)).toBeInTheDocument();
    expect(screen.getByText(/tus servicios publicados/i)).toBeInTheDocument();
  });

  it("muestra modal de completar perfil si el perfil está incompleto", async () => {
    seedAuthenticatedEntrepreneur();
    renderDashboard();

    expect(
      await screen.findByRole("dialog", {
        name: /completa tu perfil de emprendedor/i,
      }),
    ).toBeInTheDocument();
  });

  it("no muestra modal si el perfil está completo", async () => {
    seedEntrepreneurWithCompleteProfile();
    renderDashboard();

    expect(
      await screen.findByRole("heading", { name: /hola, emprendedor/i }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("dialog", {
        name: /completa tu perfil de emprendedor/i,
      }),
    ).not.toBeInTheDocument();
  });

  it("cierra el modal de completar perfil", async () => {
    seedAuthenticatedEntrepreneur();
    const user = userEvent.setup();
    renderDashboard();

    const dismissButton = await screen.findByRole("button", {
      name: /ahora no/i,
    });
    await user.click(dismissButton);

    expect(
      screen.queryByRole("dialog", {
        name: /completa tu perfil de emprendedor/i,
      }),
    ).not.toBeInTheDocument();
  });
});
