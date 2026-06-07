import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { beforeEach, describe, expect, it, vi } from "vitest";

import SearchResultsPage from "../../../src/pages/SearchResultsPage";

import {
  fetchCategories,
  fetchCategory,
  fetchServicesByCategory,
} from "../../../src/services/catalogService";

const mockUseParams = vi.fn();

vi.mock("react-router", async () => {
  const actual =
    await vi.importActual<typeof import("react-router")>("react-router");

  return {
    ...actual,
    useParams: () => mockUseParams(),
  };
});

vi.mock("../../../src/services/catalogService", () => ({
  fetchCategories: vi.fn(),
  fetchCategory: vi.fn(),
  fetchServicesByCategory: vi.fn(),
}));

vi.mock(
  "../../../src/app/components/catalog/ResidentCatalogLayout",
  () => ({
    ResidentCatalogLayout: ({
      children,
    }: {
      children: React.ReactNode;
    }) => <div>{children}</div>,
  }),
);

vi.mock(
  "../../../src/app/components/catalog/EmptyState",
  () => ({
    EmptyState: ({
      title,
    }: {
      title: string;
    }) => <div>{title}</div>,
  }),
);

vi.mock(
  "../../../src/app/components/catalog/CategorySidebar",
  () => ({
    CategorySidebar: () => (
      <div data-testid="category-sidebar" />
    ),
  }),
);

vi.mock(
  "../../../src/app/components/catalog/CatalogBreadcrumb",
  () => ({
    CatalogBreadcrumb: () => (
      <div data-testid="breadcrumb" />
    ),
  }),
);

vi.mock(
  "../../../src/app/components/catalog/ServiceFilters",
  () => ({
    ServiceFilters: () => (
      <div data-testid="service-filters" />
    ),
  }),
);

vi.mock(
  "../../../src/app/components/catalog/ServiceGrid",
  () => ({
    ServiceGrid: ({ services }: { services: unknown[] }) => (
      <div data-testid="service-grid">
        {services.length} servicios
      </div>
    ),
  }),
);

vi.mock(
  "../../../src/app/components/catalog/LoadingSkeleton",
  () => ({
    ServiceGridSkeleton: () => (
      <div data-testid="loading-skeleton">
        Loading...
      </div>
    ),
  }),
);

describe("SearchResultsPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(fetchCategories).mockResolvedValue([]);
  });

  it("muestra mensaje cuando no existe categoría", () => {
    mockUseParams.mockReturnValue({
      categorySlug: "",
    });

    render(
      <MemoryRouter>
        <SearchResultsPage />
      </MemoryRouter>,
    );

    expect(
      screen.getByText(/categoría no especificada/i),
    ).toBeInTheDocument();
  });

  it("muestra mensaje cuando la categoría es inválida", () => {
    mockUseParams.mockReturnValue({
      categorySlug: "categoria-inexistente",
    });

    render(
      <MemoryRouter>
        <SearchResultsPage />
      </MemoryRouter>,
    );

    expect(
      screen.getByText(/categoría no especificada/i),
    ).toBeInTheDocument();
  });

  it("muestra skeleton durante la carga", () => {
    mockUseParams.mockReturnValue({
      categorySlug: "hogar",
    });

    vi.mocked(fetchCategory).mockImplementation(
      () => new Promise(() => {}),
    );

    vi.mocked(fetchServicesByCategory).mockImplementation(
      () => new Promise(() => {}),
    );

    render(
      <MemoryRouter>
        <SearchResultsPage />
      </MemoryRouter>,
    );

    expect(
      screen.getByTestId("loading-skeleton"),
    ).toBeInTheDocument();
  });

  it("muestra mensaje cuando la categoría no existe", async () => {
    mockUseParams.mockReturnValue({
      categorySlug: "hogar",
    });

    vi.mocked(fetchCategory).mockResolvedValue(null as never);

    vi.mocked(fetchServicesByCategory).mockResolvedValue([]);

    render(
      <MemoryRouter>
        <SearchResultsPage />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(
        screen.getByText(/categoría no encontrada/i),
      ).toBeInTheDocument();
    });
  });

  it("muestra mensaje cuando no hay servicios", async () => {
    mockUseParams.mockReturnValue({
      categorySlug: "hogar",
    });

    vi.mocked(fetchCategory).mockResolvedValue({
      id: "1",
      slug: "hogar",
      name: "Hogar",
    } as never);

    vi.mocked(fetchServicesByCategory).mockResolvedValue([]);

    render(
      <MemoryRouter>
        <SearchResultsPage />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(
        screen.getByText(
          /sin resultados en esta categoría/i,
        ),
      ).toBeInTheDocument();
    });
  });

  it("muestra los servicios cuando existen resultados", async () => {
    mockUseParams.mockReturnValue({
      categorySlug: "hogar",
    });

    vi.mocked(fetchCategory).mockResolvedValue({
      id: "1",
      slug: "hogar",
      name: "Hogar",
    } as never);

    vi.mocked(fetchServicesByCategory).mockResolvedValue([
      {
        id: "1",
        title: "Electricista",
      },
      {
        id: "2",
        title: "Plomero",
      },
    ] as never);

    render(
      <MemoryRouter>
        <SearchResultsPage />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(
        screen.getByTestId("service-grid"),
      ).toBeInTheDocument();
    });

    expect(
      screen.getByText(/2 servicios/i),
    ).toBeInTheDocument();
  });

  it("renderiza filtros y sidebar", async () => {
    mockUseParams.mockReturnValue({
      categorySlug: "hogar",
    });

    vi.mocked(fetchCategory).mockResolvedValue({
      id: "1",
      slug: "hogar",
      name: "Hogar",
    } as never);

    vi.mocked(fetchServicesByCategory).mockResolvedValue([
      { id: "1" },
    ] as never);

    render(
      <MemoryRouter>
        <SearchResultsPage />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(
        screen.getByTestId("category-sidebar"),
      ).toBeInTheDocument();

      expect(
        screen.getByTestId("service-filters"),
      ).toBeInTheDocument();
    });
  });
});