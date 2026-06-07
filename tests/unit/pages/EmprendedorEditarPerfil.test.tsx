import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { AuthProvider } from "../../../src/context/AuthContext";
import EmprendedorEditarPerfil from "../../../src/pages/EmprendedorEditarPerfil";
import {
  resetAuthState,
  seedAuthenticatedEntrepreneur,
  seedEntrepreneurWithCompleteProfile,
} from "../../helpers/auth";

function renderEditarPerfil() {
  return render(
    <MemoryRouter>
      <AuthProvider>
        <EmprendedorEditarPerfil />
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

describe("EmprendedorEditarPerfil", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    resetAuthState();
  });

  it("renderiza la pantalla de edición de perfil", async () => {
    seedAuthenticatedEntrepreneur();
    renderEditarPerfil();

    expect(
      await screen.findByRole("heading", { name: /editar mi perfil/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /guardar cambios/i }),
    ).toBeInTheDocument();
  });

  it("muestra banner de perfil incompleto", async () => {
    seedAuthenticatedEntrepreneur();
    renderEditarPerfil();

    expect(
      await screen.findByText(/tu perfil aún no está completo/i),
    ).toBeInTheDocument();
  });

  it("no muestra banner si el perfil está completo", async () => {
    seedEntrepreneurWithCompleteProfile();
    renderEditarPerfil();

    expect(
      await screen.findByRole("heading", { name: /editar mi perfil/i }),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/tu perfil aún no está completo/i),
    ).not.toBeInTheDocument();
  });

  it("guarda cambios y muestra modal de éxito", async () => {
    seedEntrepreneurWithCompleteProfile();
    const user = userEvent.setup();
    renderEditarPerfil();

    await screen.findByRole("button", { name: /guardar cambios/i });
    await user.click(screen.getByRole("button", { name: /guardar cambios/i }));

    expect(
      await screen.findByText(
        /sus datos se han actualizado satisfactoriamente/i,
      ),
    ).toBeInTheDocument();
  });
});
