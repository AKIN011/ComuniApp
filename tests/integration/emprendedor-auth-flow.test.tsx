import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";

import {
  resetAuthState,
  seedAuthenticatedEntrepreneur,
  seedAuthenticatedResident,
} from "../helpers/auth";
import { renderApp } from "../helpers/test-utils";

describe("Integración — autenticación emprendedor", () => {
  beforeEach(() => {
    resetAuthState();
    sessionStorage.clear();
  });

  it("permite iniciar sesión desde /login/emprendedor", async () => {
    const user = userEvent.setup();
    renderApp("/login/emprendedor");

    await screen.findByRole("heading", { name: /bienvenido de nuevo/i });

    await user.type(
      screen.getByLabelText(/dirección de correo electrónico/i),
      "emprendedor@comuniapp.com",
    );
    await user.type(screen.getByLabelText(/^contraseña$/i), "emprendedor123");
    await user.click(screen.getByRole("button", { name: /iniciar sesión/i }));

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /hola, emprendedor/i }),
      ).toBeInTheDocument();
    });
  });

  it("redirige a login emprendedor al acceder al tablero sin sesión", async () => {
    renderApp("/emprendedor/tablero");

    await waitFor(() => {
      expect(
        screen.getByRole("link", { name: /inicia como residente/i }),
      ).toBeInTheDocument();
    });
  });

  it("permite acceder al tablero con sesión de emprendedor", async () => {
    seedAuthenticatedEntrepreneur();
    renderApp("/emprendedor/tablero");

    expect(
      await screen.findByRole("heading", { name: /hola, emprendedor/i }),
    ).toBeInTheDocument();
  });

  it("redirige a dashboard si un residente intenta entrar al tablero", async () => {
    seedAuthenticatedResident();
    renderApp("/emprendedor/tablero");

    await waitFor(() => {
      expect(
        screen.getByRole("heading", {
          name: /encuentra la ayuda local perfecta hoy/i,
        }),
      ).toBeInTheDocument();
    });
  });

  it("redirige al tablero si un emprendedor intenta entrar al dashboard residente", async () => {
    seedAuthenticatedEntrepreneur();
    renderApp("/dashboard");

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /hola, emprendedor/i }),
      ).toBeInTheDocument();
    });
  });
});
