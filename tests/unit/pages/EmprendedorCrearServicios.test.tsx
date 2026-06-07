import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { AuthProvider } from "../../../src/context/AuthContext";
import EmprendedorCrearServicios from "../../../src/pages/EmprendedorCrearServicios";
import { ROUTES } from "../../../src/routes/paths";
import { resetAuthState, seedAuthenticatedEntrepreneur } from "../../helpers/auth";

function renderCrearServicios() {
  return render(
    <MemoryRouter>
      <AuthProvider>
        <EmprendedorCrearServicios />
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

describe("EmprendedorCrearServicios", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    resetAuthState();
    sessionStorage.clear();
    seedAuthenticatedEntrepreneur();
  });

  it("renderiza el formulario de creación de servicios", () => {
    renderCrearServicios();

    expect(
      screen.getByRole("heading", { name: /crear servicios/i }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/título del servicio/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/descripción/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /publicar/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /guardar como borrador/i }),
    ).toBeInTheDocument();
  });

  it("muestra errores de validación al publicar vacío", async () => {
    const user = userEvent.setup();
    renderCrearServicios();

    await user.click(screen.getByRole("button", { name: /publicar/i }));

    expect(screen.getByText(/revisa los campos marcados/i)).toBeInTheDocument();
    expect(screen.getByText(/el título es obligatorio/i)).toBeInTheDocument();
    expect(
      screen.getByText(/la descripción es obligatoria/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/selecciona una categoría/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/agrega al menos una imagen del servicio/i),
    ).toBeInTheDocument();
  });

  it("guarda borrador con mensaje de estado", async () => {
    const user = userEvent.setup();
    renderCrearServicios();

    await user.type(
      screen.getByLabelText(/título del servicio/i),
      "Jardinería premium",
    );
    await user.click(
      screen.getByRole("button", { name: /guardar como borrador/i }),
    );

    expect(
      screen.getByText(/borrador guardado: "jardinería premium"/i),
    ).toBeInTheDocument();
  });

  it("publica un servicio válido y muestra modal de éxito", async () => {
    const user = userEvent.setup();
    renderCrearServicios();

    await user.type(
      screen.getByLabelText(/título del servicio/i),
      "Limpieza profunda",
    );
    await user.type(
      screen.getByLabelText(/descripción/i),
      "Servicio de limpieza para hogares.",
    );

    await user.click(screen.getByRole("button", { name: /seleccionar categoría/i }));
    await user.click(screen.getByRole("option", { name: /^hogar$/i }));

    const file = new File(["image"], "servicio.png", { type: "image/png" });
    const fileInput = document.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement;
    await user.upload(fileInput, file);

    await user.click(screen.getByRole("button", { name: /publicar/i }));

    expect(
      await screen.findByText(/se ha publicado el servicio correctamente/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /ver servicios/i }),
    ).toBeInTheDocument();
  });

  it("navega al listado desde el enlace de regreso", async () => {
    const user = userEvent.setup();
    renderCrearServicios();

    await user.click(
      screen.getByRole("button", { name: /de vuelta a los servicios/i }),
    );

    expect(mockNavigate).toHaveBeenCalledWith(ROUTES.entrepreneur.servicios);
  });
});
