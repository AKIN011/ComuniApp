import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { AuthProvider } from "../../../src/context/AuthContext";
import RegistroEmprendedor from "../../../src/pages/RegistroEmprendedor";
import { ROUTES } from "../../../src/routes/paths";

function renderRegistroEmprendedor() {
  return render(
    <MemoryRouter>
      <AuthProvider>
        <RegistroEmprendedor />
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

describe("RegistroEmprendedor", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it("renderiza el formulario de registro", () => {
    renderRegistroEmprendedor();

    expect(
      screen.getByRole("heading", { name: /bienvenido de nuevo/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/introduzca sus datos para registrarse/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /registrarse/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /inicia sesión/i }),
    ).toHaveAttribute("href", ROUTES.loginEntrepreneur);
  });

  it("muestra errores cuando el formulario está vacío", async () => {
    const user = userEvent.setup();
    renderRegistroEmprendedor();

    await user.click(screen.getByRole("button", { name: /registrarse/i }));

    expect(
      screen.getByText(/el correo electrónico es obligatorio/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/la contraseña es obligatoria/i),
    ).toBeInTheDocument();
  });

  it("registra un emprendedor nuevo y muestra modal de bienvenida", async () => {
    const user = userEvent.setup();
    renderRegistroEmprendedor();

    await user.type(
      screen.getByLabelText(/dirección de correo electrónico/i),
      "nuevo.emprendedor@comuniapp.com",
    );
    await user.type(screen.getByLabelText(/^contraseña$/i), "emprendedor123");
    await user.click(screen.getByRole("button", { name: /registrarse/i }));

    expect(
      await screen.findByText(
        /continúa para completar tu perfil de emprendedor/i,
      ),
    ).toBeInTheDocument();
  });

  it("rechaza correo ya registrado", async () => {
    const user = userEvent.setup();
    renderRegistroEmprendedor();

    await user.type(
      screen.getByLabelText(/dirección de correo electrónico/i),
      "emprendedor@comuniapp.com",
    );
    await user.type(screen.getByLabelText(/^contraseña$/i), "emprendedor123");
    await user.click(screen.getByRole("button", { name: /registrarse/i }));

    expect(
      screen.getByText(/este correo electrónico ya está registrado/i),
    ).toBeInTheDocument();
  });

  it("navega a crear perfil al continuar desde el modal", async () => {
    const user = userEvent.setup();
    renderRegistroEmprendedor();

    await user.type(
      screen.getByLabelText(/dirección de correo electrónico/i),
      "otro.emprendedor@comuniapp.com",
    );
    await user.type(screen.getByLabelText(/^contraseña$/i), "emprendedor123");
    await user.click(screen.getByRole("button", { name: /registrarse/i }));

    await user.click(screen.getByRole("button", { name: /continuar/i }));

    expect(mockNavigate).toHaveBeenCalledWith(
      ROUTES.registerEntrepreneurCreateProfile,
    );
  });
});
