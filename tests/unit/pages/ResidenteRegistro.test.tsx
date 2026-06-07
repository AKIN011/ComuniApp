import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { beforeEach, describe, expect, it, vi } from "vitest";

import ResidenteRegistro from "../../../src/pages/ResidenteRegistro";
import { registerNewUser } from "../../../src/lib/auth/credentials";

const mockNavigate = vi.fn();

vi.mock("react-router", async () => {
  const actual =
    await vi.importActual<typeof import("react-router")>("react-router");

  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock("../../../src/lib/auth/credentials", () => ({
  registerNewUser: vi.fn(),
}));

vi.mock(
  "../../../src/app/components/ProfileConfirmationModal",
  () => ({
    ProfileConfirmationModal: ({
      message,
      onClose,
    }: {
      message: string;
      onClose: () => void;
    }) => (
      <div data-testid="welcome-modal">
        <p>{message}</p>
        <button onClick={onClose}>Continuar</button>
      </div>
    ),
  }),
);

function renderPage() {
  return render(
    <MemoryRouter>
      <ResidenteRegistro />
    </MemoryRouter>,
  );
}

describe("ResidenteRegistro", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renderiza correctamente la pantalla", () => {
    renderPage();

    expect(
      screen.getByText(/bienvenido de nuevo/i),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/dirección de correo electrónico/i),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/mostrar u ocultar contraseña/i),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /regístrate/i }),
    ).toBeInTheDocument();
  });

  it("permite escribir correo y contraseña", async () => {
    const user = userEvent.setup();

    renderPage();

    const emailInput = screen.getByPlaceholderText(
      /name@company.com/i,
    );

    const passwordInput =
      screen.getByPlaceholderText(/••••••••/i);

    await user.type(
      emailInput,
      "usuario@correo.com",
    );

    await user.type(
      passwordInput,
      "Password123",
    );

    expect(emailInput).toHaveValue(
      "usuario@correo.com",
    );

    expect(passwordInput).toHaveValue(
      "Password123",
    );
  });

  it("permite mostrar y ocultar la contraseña", async () => {
    const user = userEvent.setup();

    renderPage();

    const passwordInput =
      screen.getByPlaceholderText(/••••••••/i);

    expect(passwordInput).toHaveAttribute(
      "type",
      "password",
    );

    await user.click(
      screen.getByLabelText(
        /mostrar u ocultar contraseña/i,
      ),
    );

    expect(passwordInput).toHaveAttribute(
      "type",
      "text",
    );
  });

  it("muestra errores cuando el registro falla", async () => {
    const user = userEvent.setup();

    vi.mocked(registerNewUser).mockReturnValue({
      success: false,
      error: "Correo inválido",
      fieldErrors: {
        email: "Correo inválido",
      },
    });

    renderPage();

    await user.click(
      screen.getByRole("button", {
        name: /regístrate/i,
      }),
    );

    expect(
      screen.getByText(/correo inválido/i),
    ).toBeInTheDocument();
  });

  it("muestra el modal cuando el registro es exitoso", async () => {
    const user = userEvent.setup();

    vi.mocked(registerNewUser).mockReturnValue({
      success: true,
    });

    renderPage();

    await user.type(
      screen.getByPlaceholderText(
        /name@company.com/i,
      ),
      "usuario@test.com",
    );

    await user.type(
      screen.getByPlaceholderText(
        /••••••••/i,
      ),
      "Password123",
    );

    await user.click(
      screen.getByRole("button", {
        name: /regístrate/i,
      }),
    );

    expect(
      screen.getByTestId("welcome-modal"),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /continúa para completar tu perfil/i,
      ),
    ).toBeInTheDocument();
  });

  it("navega al perfil cuando se cierra el modal", async () => {
    const user = userEvent.setup();

    vi.mocked(registerNewUser).mockReturnValue({
      success: true,
    });

    renderPage();

    await user.click(
      screen.getByRole("button", {
        name: /regístrate/i,
      }),
    );

    await user.click(
      screen.getByRole("button", {
        name: /continuar/i,
      }),
    );

    expect(mockNavigate).toHaveBeenCalledWith(
      "/registro/crear-perfil",
    );
  });

  it("navega al registro de emprendedor", async () => {
    const user = userEvent.setup();

    renderPage();

    await user.click(
      screen.getByRole("button", {
        name: /únete como emprendedor/i,
      }),
    );

    expect(mockNavigate).toHaveBeenCalledWith(
      "/registro/emprendedor",
    );
  });

  it("renderiza los enlaces del footer", () => {
    renderPage();

    expect(
      screen.getByRole("link", {
        name: /política de privacidad/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /centro de ayuda/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /contáctenos/i,
      }),
    ).toBeInTheDocument();
  });
});