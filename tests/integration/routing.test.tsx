import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { resetAuthState, seedAuthenticatedResident } from "../helpers/auth";
import { renderApp } from "../helpers/test-utils";

describe("Integración — rutas públicas y protegidas", () => {
  it("muestra la landing en /", async () => {
    resetAuthState();
    renderApp("/");

    expect(await screen.findAllByText(/comuniapp/i)).not.toHaveLength(0);
  });

  it("muestra login de emprendedor en /login/emprendedor", async () => {
    resetAuthState();
    renderApp("/login/emprendedor");

    expect(
      await screen.findByRole("link", { name: /inicia como residente/i }),
    ).toBeInTheDocument();
  });

  it("permite ver catálogo con sesión de residente", async () => {
    seedAuthenticatedResident();
    renderApp("/services/cleaning");

    expect(
      await screen.findByRole("heading", { name: /resultados/i }),
    ).toBeInTheDocument();
  });
});
