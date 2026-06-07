import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { beforeEach, describe, expect, it, vi } from "vitest";

import ResidentDashboardPage from "../../../src/pages/ResidentDashboardPage";
import { fetchFeaturedServices } from "../../../src/services/catalogService";

vi.mock("../../../src/services/catalogService", () => ({
  fetchFeaturedServices: vi.fn(),
}));

vi.mock(
  "../../../src/app/components/dashboard/DashboardHeader",
  () => ({
    DashboardHeader: () => (
      <div data-testid="dashboard-header">
        Dashboard Header
      </div>
    ),
  }),
);

vi.mock(
  "../../../src/app/components/catalog/CatalogSearchForm",
  () => ({
    CatalogSearchForm: () => (
      <div data-testid="catalog-search-form">
        Search Form
      </div>
    ),
  }),
);

vi.mock(
  "../../../src/app/components/catalog/ServiceGrid",
  () => ({
    ServiceGrid: ({ services }: { services: unknown[] }) => (
      <div data-testid="service-grid">
        Servicios: {services.length}
      </div>
    ),
  }),
);

vi.mock(
  "../../../src/app/components/layout/SiteFooterLinks",
  () => ({
    SiteFooterLinks: () => (
      <div data-testid="footer-links">
        Footer Links
      </div>
    ),
  }),
);

function renderPage() {
  return render(
    <MemoryRouter>
      <ResidentDashboardPage />
    </MemoryRouter>,
  );
}

describe("ResidentDashboardPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(fetchFeaturedServices).mockResolvedValue([
      {
        id: "1",
        title: "Electricista",
      },
      {
        id: "2",
        title: "Plomero",
      },
    ] as never);
  });

  it("renderiza correctamente la pantalla principal", () => {
    renderPage();

    expect(
      screen.getByText(
        /encuentra la ayuda local perfecta hoy/i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("dashboard-header"),
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("catalog-search-form"),
    ).toBeInTheDocument();
  });

  it("carga los servicios recomendados al iniciar", async () => {
    renderPage();

    await waitFor(() => {
      expect(fetchFeaturedServices).toHaveBeenCalledTimes(1);
    });
  });

  it("muestra el grid de servicios con la información cargada", async () => {
    renderPage();

    await waitFor(() => {
      expect(
        screen.getByText(/servicios: 2/i),
      ).toBeInTheDocument();
    });
  });

  it("renderiza la sección de recomendados", () => {
    renderPage();

    expect(
      screen.getByText(/recomendado para ti/i),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /basado en tu actividad comunitaria/i,
      ),
    ).toBeInTheDocument();
  });

  it("renderiza la sección de actividad reciente", () => {
    renderPage();

    expect(
      screen.getByText(/actividad reciente/i),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /historial de servicio/i,
      }),
    ).toBeInTheDocument();
  });

  it("renderiza la tarjeta para emprendedores", () => {
    renderPage();

    expect(
      screen.getByText(
        /¿organizar un servicio\?/i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /comenzar/i,
      }),
    ).toBeInTheDocument();
  });

  it("renderiza el footer", () => {
    renderPage();

    expect(
      screen.getByText(/comuniapp/i),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /cultivando el comercio comunitario/i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("footer-links"),
    ).toBeInTheDocument();
  });

  it("renderiza el enlace ver todo", () => {
    renderPage();

    expect(
      screen.getByRole("link", {
        name: /ver todo/i,
      }),
    ).toBeInTheDocument();
  });
});