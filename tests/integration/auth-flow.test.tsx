import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";

import { resetAuthState, seedAuthenticatedResident } from "../helpers/auth";
import { renderApp } from "../helpers/test-utils";

describe("Integración — autenticación residente", () => {
  beforeEach(() => {
    resetAuthState();
  });

  it("permite iniciar sesión desde /login", async () => {
    const user = userEvent.setup();
    renderApp("/login");

    await screen.findByRole("heading", { name: /bienvenido de nuevo/i });

    await user.type(
      screen.getByLabelText(/dirección de correo electrónico/i),
      "residente@comuniapp.com",
    );
    await user.type(screen.getByLabelText(/^contraseña$/i), "residente123");
    await user.click(screen.getByRole("button", { name: /iniciar sesión/i }));

    await waitFor(() => {
      expect(
        screen.getByRole("heading", {
          name: /encuentra la ayuda local perfecta hoy/i,
        }),
      ).toBeInTheDocument();
    });
  });

  it("redirige a login al acceder a ruta protegida sin sesión", async () => {
    renderApp("/dashboard");

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /bienvenido de nuevo/i }),
      ).toBeInTheDocument();
    });
  });

  it("permite acceder al dashboard con sesión activa", async () => {
    seedAuthenticatedResident();
    renderApp("/dashboard");

    expect(
      await screen.findByRole("heading", {
        name: /encuentra la ayuda local perfecta hoy/i,
      }),
    ).toBeInTheDocument();
  });
});
