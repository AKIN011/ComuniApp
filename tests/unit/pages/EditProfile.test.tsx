import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { EditProfile } from "../../../src/pages/EditProfile";

const mockNavigate = vi.fn();

const mockUpdateProfile = vi.fn();
const mockGetCurrentProfile = vi.fn();

vi.mock("react-router", async () => {
  const actual =
    await vi.importActual<typeof import("react-router")>("react-router");

  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock("../../../src/context/AuthContext", () => ({
  useAuth: () => ({
    user: {
      id: "1",
    },
    getCurrentProfile: mockGetCurrentProfile,
    updateProfile: mockUpdateProfile,
  }),
}));

function renderPage() {
  return render(
    <MemoryRouter>
      <EditProfile />
    </MemoryRouter>,
  );
}

describe("EditProfile", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    mockGetCurrentProfile.mockReturnValue({
      firstName: "Juan",
      lastName: "Pérez",
      phone: "3001234567",
    });
  });

  it("renderiza el formulario", () => {
    renderPage();

    expect(
      screen.getByRole("heading", {
        name: /editar tu perfil/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/nombres/i),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/apellidos/i),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/celular/i),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /guardar cambios/i,
      }),
    ).toBeInTheDocument();
  });

  it("carga los datos del perfil actual", () => {
    renderPage();

    expect(
      screen.getByDisplayValue("Juan"),
    ).toBeInTheDocument();

    expect(
      screen.getByDisplayValue("Pérez"),
    ).toBeInTheDocument();

    expect(
      screen.getByDisplayValue("3001234567"),
    ).toBeInTheDocument();
  });

  it("muestra error general cuando updateProfile falla", async () => {
    const user = userEvent.setup();

    mockUpdateProfile.mockReturnValue({
      success: false,
      error: "No fue posible actualizar el perfil",
    });

    renderPage();

    await user.click(
      screen.getByRole("button", {
        name: /guardar cambios/i,
      }),
    );

    expect(
      screen.getByRole("alert"),
    ).toHaveTextContent(
      /no fue posible actualizar el perfil/i,
    );
  });

  it("muestra errores de campos", async () => {
    const user = userEvent.setup();

    mockUpdateProfile.mockReturnValue({
      success: false,
      fieldErrors: {
        firstName: "Nombre obligatorio",
        lastName: "Apellido obligatorio",
        phone: "Celular inválido",
      },
    });

    renderPage();

    await user.click(
      screen.getByRole("button", {
        name: /guardar cambios/i,
      }),
    );

    expect(
      screen.getByText(/nombre obligatorio/i),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/apellido obligatorio/i),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/celular inválido/i),
    ).toBeInTheDocument();
  });

  it("limpia el error cuando el usuario modifica el campo", async () => {
    const user = userEvent.setup();

    mockUpdateProfile.mockReturnValue({
      success: false,
      fieldErrors: {
        firstName: "Nombre obligatorio",
      },
    });

    renderPage();

    await user.click(
      screen.getByRole("button", {
        name: /guardar cambios/i,
      }),
    );

    expect(
      screen.getByText(/nombre obligatorio/i),
    ).toBeInTheDocument();

    const input =
      screen.getByLabelText(/nombres/i);

    await user.clear(input);
    await user.type(input, "Carlos");

    expect(
      screen.queryByText(/nombre obligatorio/i),
    ).not.toBeInTheDocument();
  });

  it("navega a la pantalla de éxito cuando guarda correctamente", async () => {
    const user = userEvent.setup();

    mockUpdateProfile.mockReturnValue({
      success: true,
    });

    renderPage();

    await user.click(
      screen.getByRole("button", {
        name: /guardar cambios/i,
      }),
    );

    expect(
      mockUpdateProfile,
    ).toHaveBeenCalledWith({
      firstName: "Juan",
      lastName: "Pérez",
      phone: "3001234567",
    });

    expect(mockNavigate).toHaveBeenCalledWith(
      "/perfil/editar/exito",
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