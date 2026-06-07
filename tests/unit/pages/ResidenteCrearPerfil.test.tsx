import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { describe, expect, it, vi } from "vitest";

import ResidenteCrearPerfil from "../../../src/pages/ResidenteCrearPerfil";

// Mock del modal para no depender de su implementación
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
      <div data-testid="success-modal">
        <p>{message}</p>
        <button onClick={onClose}>Cerrar Modal</button>
      </div>
    ),
  }),
);

function renderPage() {
  return render(
    <MemoryRouter>
      <ResidenteCrearPerfil />
    </MemoryRouter>,
  );
}

describe("ResidenteCrearPerfil", () => {
  it("renderiza correctamente la pantalla", () => {
    renderPage();

    expect(
      screen.getByText(/crea tu perfil/i),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /por favor introduzca los siguientes datos/i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /continuar/i }),
    ).toBeInTheDocument();
  });

  it("renderiza los campos del formulario", () => {
    renderPage();

    expect(screen.getByText(/nombres/i)).toBeInTheDocument();
    expect(screen.getByText(/apellidos/i)).toBeInTheDocument();
    expect(screen.getByText(/celular/i)).toBeInTheDocument();

    expect(
      screen.getAllByRole("textbox").length,
    ).toBeGreaterThanOrEqual(2);
  });

  it("muestra el modal al hacer clic en continuar", async () => {
    const user = userEvent.setup();

    renderPage();

    await user.click(
      screen.getByRole("button", {
        name: /continuar/i,
      }),
    );

    expect(
      screen.getByTestId("success-modal"),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /sus datos se han registrado satisfactoriamente/i,
      ),
    ).toBeInTheDocument();
  });

  it("permite cerrar el modal", async () => {
    const user = userEvent.setup();

    renderPage();

    await user.click(
      screen.getByRole("button", {
        name: /continuar/i,
      }),
    );

    expect(
      screen.getByTestId("success-modal"),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: /cerrar modal/i,
      }),
    );

    expect(
      screen.queryByTestId("success-modal"),
    ).not.toBeInTheDocument();
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