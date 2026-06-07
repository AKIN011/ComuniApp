import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { AuthProvider } from "../../../src/context/AuthContext";
import CrearPerfilEmprendedor from "../../../src/pages/CrearPerfilEmprendedor";
import {
  resetAuthState,
  seedAuthenticatedEntrepreneur,
} from "../../helpers/auth";

function renderCrearPerfilEmprendedor() {
  return render(
    <MemoryRouter>
      <AuthProvider>
        <CrearPerfilEmprendedor />
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
  };
});

describe("CrearPerfilEmprendedor", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    resetAuthState();
    seedAuthenticatedEntrepreneur();
  });

  it("renderiza el paso inicial de creación de perfil", () => {
    renderCrearPerfilEmprendedor();

    expect(
      screen.getByRole("heading", { name: /crea tu perfil/i }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/nombres/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/apellidos/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/celular/i)).toBeInTheDocument();
  });

  it("muestra errores si el paso 1 está vacío", async () => {
    const user = userEvent.setup();
    renderCrearPerfilEmprendedor();

    await user.click(screen.getByRole("button", { name: /continuar/i }));

    expect(
      screen.getByText(/los nombres son obligatorios/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/los apellidos son obligatorios/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/el celular es obligatorio/i),
    ).toBeInTheDocument();
  });

  it("avanza al paso de negocio con datos válidos", async () => {
    const user = userEvent.setup();
    renderCrearPerfilEmprendedor();

    await user.type(screen.getByLabelText(/nombres/i), "María");
    await user.type(screen.getByLabelText(/apellidos/i), "García");
    await user.type(screen.getByLabelText(/celular/i), "5551234567");
    await user.click(screen.getByRole("button", { name: /continuar/i }));

    expect(
      await screen.findByRole("heading", { name: /describe tu negocio/i }),
    ).toBeInTheDocument();
  });

  it("crea el perfil y muestra modal de éxito", async () => {
    const user = userEvent.setup();
    renderCrearPerfilEmprendedor();

    await user.type(screen.getByLabelText(/nombres/i), "María");
    await user.type(screen.getByLabelText(/apellidos/i), "García");
    await user.type(screen.getByLabelText(/celular/i), "5551234567");
    await user.click(screen.getByRole("button", { name: /continuar/i }));

    await user.type(
      screen.getByPlaceholderText(/cuéntanos sobre tu negocio/i),
      "Ofrezco servicios de jardinería urbana.",
    );
    await user.click(screen.getByRole("button", { name: /continuar/i }));

    expect(
      await screen.findByText(/el perfil fue creado correctamente/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /ir a dashboard/i }),
    ).toBeInTheDocument();
  });
});
