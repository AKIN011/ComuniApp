import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { beforeEach, describe, expect, it, vi } from "vitest";

import type { EditServiceNavigationState } from "../../../src/app/components/emprendedor/emprendedorData";
import { AuthProvider } from "../../../src/context/AuthContext";
import EmprendedorEditarServicios from "../../../src/pages/EmprendedorEditarServicios";
import { ROUTES } from "../../../src/routes/paths";
import { resetAuthState, seedAuthenticatedEntrepreneur } from "../../helpers/auth";

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

const defaultEditState: EditServiceNavigationState = {
  serviceId: "jardin-urbano",
  title: "Diseño de Jardín Urbano Personalizado",
  description:
    "Transforma tu espacio exterior con paisajismo preciso. Verificado por vecinos durante 5 años.",
  image:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  status: "activo",
  price: "$85/hr",
};

function renderEditarServicios(state: EditServiceNavigationState | null = defaultEditState) {
  const initialEntry = state
    ? { pathname: ROUTES.entrepreneur.editarServicio, state }
    : ROUTES.entrepreneur.editarServicio;

  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <AuthProvider>
        <EmprendedorEditarServicios />
      </AuthProvider>
    </MemoryRouter>,
  );
}

describe("EmprendedorEditarServicios", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    resetAuthState();
    sessionStorage.clear();
    seedAuthenticatedEntrepreneur();
  });

  it("renderiza el formulario con datos del servicio", async () => {
    renderEditarServicios();

    expect(
      await screen.findByRole("heading", { name: /editar servicios/i }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/título del servicio/i)).toHaveValue(
      defaultEditState.title,
    );
    expect(screen.getByLabelText(/descripción/i)).toHaveValue(
      defaultEditState.description,
    );
    expect(
      screen.getByRole("button", { name: /actualizar/i }),
    ).toBeInTheDocument();
  });

  it("redirige al listado si no hay estado de edición", async () => {
    renderEditarServicios(null);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(ROUTES.entrepreneur.servicios, {
        replace: true,
      });
    });
  });

  it("muestra errores de validación al actualizar vacío", async () => {
    const user = userEvent.setup();
    renderEditarServicios();

    const titleInput = await screen.findByLabelText(/título del servicio/i);
    await user.clear(titleInput);
    await user.clear(screen.getByLabelText(/descripción/i));
    await user.click(screen.getByRole("button", { name: /actualizar/i }));

    expect(screen.getByText(/revisa los campos marcados/i)).toBeInTheDocument();
    expect(screen.getByText(/el título es obligatorio/i)).toBeInTheDocument();
    expect(
      screen.getByText(/la descripción es obligatoria/i),
    ).toBeInTheDocument();
  });

  it("actualiza el servicio y muestra modal de éxito", async () => {
    const user = userEvent.setup();
    renderEditarServicios();

    await screen.findByRole("button", { name: /actualizar/i });
    await user.click(screen.getByRole("button", { name: /actualizar/i }));

    expect(
      await screen.findByText(/se ha actualizado el servicio correctamente/i),
    ).toBeInTheDocument();
  });
});
