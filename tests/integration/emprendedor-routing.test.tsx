import { screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import type { EditServiceNavigationState } from "../../src/app/components/emprendedor/emprendedorData";
import { ROUTES } from "../../src/routes/paths";
import {
  resetAuthState,
  seedAuthenticatedEntrepreneur,
  seedEntrepreneurWithCompleteProfile,
} from "../helpers/auth";
import { renderApp, renderAppWithState } from "../helpers/test-utils";

describe("Integración — rutas emprendedor", () => {
  it("muestra registro de emprendedor en /registro/emprendedor", async () => {
    resetAuthState();
    renderApp("/registro/emprendedor");

    expect(
      await screen.findByText(/introduzca sus datos para registrarse/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /registrarse/i }),
    ).toBeInTheDocument();
  });

  it("redirige /emprendedor al tablero", async () => {
    resetAuthState();
    seedAuthenticatedEntrepreneur();
    renderApp("/emprendedor");

    expect(
      await screen.findByRole("heading", { name: /hola, emprendedor/i }),
    ).toBeInTheDocument();
  });

  it("muestra listado de servicios en /emprendedor/servicios", async () => {
    resetAuthState();
    seedAuthenticatedEntrepreneur();
    renderApp("/emprendedor/servicios");

    expect(
      await screen.findByRole("heading", { name: /todos tus servicios/i }),
    ).toBeInTheDocument();
  });

  it("muestra editar perfil en /emprendedor/perfil/editar", async () => {
    resetAuthState();
    seedEntrepreneurWithCompleteProfile();
    renderApp("/emprendedor/perfil/editar");

    expect(
      await screen.findByRole("heading", { name: /editar mi perfil/i }),
    ).toBeInTheDocument();
  });

  it("muestra crear servicios en /emprendedor/servicios/crear", async () => {
    resetAuthState();
    seedAuthenticatedEntrepreneur();
    renderApp("/emprendedor/servicios/crear");

    expect(
      await screen.findByRole("heading", { name: /crear servicios/i }),
    ).toBeInTheDocument();
  });

  it("redirige ruta legacy de editar perfil", async () => {
    resetAuthState();
    seedEntrepreneurWithCompleteProfile();
    renderApp(ROUTES.entrepreneur.editarPerfilLegacy);

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /editar mi perfil/i }),
      ).toBeInTheDocument();
    });
  });

  it("muestra editar servicios con estado de navegación", async () => {
    resetAuthState();
    seedAuthenticatedEntrepreneur();

    const editState: EditServiceNavigationState = {
      serviceId: "jardin-urbano",
      title: "Diseño de Jardín Urbano Personalizado",
      description: "Descripción de prueba para edición.",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
      status: "activo",
    };

    renderAppWithState(ROUTES.entrepreneur.editarServicio, editState);

    expect(
      await screen.findByRole("heading", { name: /editar servicios/i }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/título del servicio/i)).toHaveValue(
      editState.title,
    );
  });

  it("muestra crear perfil emprendedor con sesión activa", async () => {
    resetAuthState();
    seedAuthenticatedEntrepreneur();
    renderApp("/registro/emprendedor/crear-perfil");

    expect(
      await screen.findByRole("heading", { name: /crea tu perfil/i }),
    ).toBeInTheDocument();
  });
});
