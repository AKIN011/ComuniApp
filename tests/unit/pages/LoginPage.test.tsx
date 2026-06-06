import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { AuthProvider } from "../../../src/context/AuthContext";
import LoginPage from "../../../src/pages/LoginPage";

function renderLoginPage() {
  return render(
    <MemoryRouter>
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    </MemoryRouter>,
  );
}

const mockNavigate = vi.fn();

vi.mock("react-router", async () => {
  const actual = await vi.importActual<typeof import("react-router")>("react-router");

  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => ({ state: null }),
  };
});

describe("LoginPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renderiza el formulario principal", () => {
    renderLoginPage();

    expect(
      screen.getByRole("heading", { name: /bienvenido de nuevo/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(/dirección de correo electrónico/i),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/^contraseña$/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /iniciar sesión/i }),
    ).toBeInTheDocument();
  });

  it("muestra errores cuando el formulario está vacío", async () => {
    const user = userEvent.setup();

    renderLoginPage();

    await user.click(screen.getByRole("button", { name: /iniciar sesión/i }));

    expect(
      screen.getByText(/el correo electrónico es obligatorio/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/la contraseña es obligatoria/i),
    ).toBeInTheDocument();
  });

  it("inicia sesión con credenciales demo y navega al dashboard", async () => {
    const user = userEvent.setup();

    renderLoginPage();

    await user.type(
      screen.getByLabelText(/dirección de correo electrónico/i),
      "residente@comuniapp.com",
    );
    await user.type(screen.getByLabelText(/^contraseña$/i), "residente123");
    await user.click(screen.getByRole("button", { name: /iniciar sesión/i }));

    expect(mockNavigate).toHaveBeenCalledWith("/dashboard", { replace: true });
  });
});
