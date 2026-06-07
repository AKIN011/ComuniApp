import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { AuthProvider } from "../../../src/context/AuthContext";
import LoginEmprendedorPage from "../../../src/pages/LoginEmprendedorPage";
import { ROUTES } from "../../../src/routes/paths";

function renderLoginEmprendedorPage() {
  return render(
    <MemoryRouter>
      <AuthProvider>
        <LoginEmprendedorPage />
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
    useLocation: () => ({ state: null }),
  };
});

describe("LoginEmprendedorPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it("renderiza el formulario de emprendedor", () => {
    renderLoginEmprendedorPage();

    expect(
      screen.getByRole("heading", { name: /bienvenido de nuevo/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Emprendedor")).toBeInTheDocument();
    expect(
      screen.getByLabelText(/dirección de correo electrónico/i),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/^contraseña$/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /iniciar sesión/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /inicia como residente/i }),
    ).toBeInTheDocument();
  });

  it("muestra errores cuando el formulario está vacío", async () => {
    const user = userEvent.setup();
    renderLoginEmprendedorPage();

    await user.click(screen.getByRole("button", { name: /iniciar sesión/i }));

    expect(
      screen.getByText(/el correo electrónico es obligatorio/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/la contraseña es obligatoria/i),
    ).toBeInTheDocument();
  });

  it("inicia sesión con credenciales demo y navega al tablero", async () => {
    const user = userEvent.setup();
    renderLoginEmprendedorPage();

    await user.type(
      screen.getByLabelText(/dirección de correo electrónico/i),
      "emprendedor@comuniapp.com",
    );
    await user.type(screen.getByLabelText(/^contraseña$/i), "emprendedor123");
    await user.click(screen.getByRole("button", { name: /iniciar sesión/i }));

    expect(mockNavigate).toHaveBeenCalledWith(ROUTES.entrepreneur.tablero, {
      replace: true,
    });
  });

  it("rechaza credenciales de residente", async () => {
    const user = userEvent.setup();
    renderLoginEmprendedorPage();

    await user.type(
      screen.getByLabelText(/dirección de correo electrónico/i),
      "residente@comuniapp.com",
    );
    await user.type(screen.getByLabelText(/^contraseña$/i), "residente123");
    await user.click(screen.getByRole("button", { name: /iniciar sesión/i }));

    expect(
      screen.getByText(/no está registrada como emprendedor/i),
    ).toBeInTheDocument();
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
