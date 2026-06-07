import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { beforeEach, describe, expect, it, vi } from "vitest";

import ServiceDetailsPage from "../../../src/pages/ServiceDetailsPage";
import { fetchServiceDetail } from "../../../src/services/catalogService";

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
  fetchServiceDetail: vi.fn(),
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
  "../../../src/app/components/catalog/CatalogBreadcrumb",
  () => ({
    CatalogBreadcrumb: () => (
      <div data-testid="breadcrumb" />
    ),
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
  "../../../src/app/components/catalog/LoadingSkeleton",
  () => ({
    ServiceDetailSkeleton: () => (
      <div data-testid="service-skeleton">
        Loading...
      </div>
    ),
  }),
);

vi.mock(
  "../../../src/app/components/catalog/ProviderCard",
  () => ({
    ProviderCard: () => (
      <div data-testid="provider-card">
        Provider
      </div>
    ),
  }),
);

vi.mock(
  "../../../src/app/components/catalog/RelatedServices",
  () => ({
    RelatedServices: ({ services }: { services: unknown[] }) => (
      <div data-testid="related-services">
        Relacionados {services.length}
      </div>
    ),
  }),
);

vi.mock(
  "../../../src/app/components/catalog/ServiceReviews",
  () => ({
    ServiceReviews: ({
      reviewCount,
    }: {
      reviewCount: number;
    }) => (
      <div data-testid="service-reviews">
        Reviews {reviewCount}
      </div>
    ),
  }),
);

vi.mock(
  "../../../src/app/components/figma/ImageWithFallback",
  () => ({
    ImageWithFallback: ({
      alt,
      src,
    }: {
      alt: string;
      src: string;
    }) => <img alt={alt} src={src} />,
  }),
);

describe("ServiceDetailsPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("muestra mensaje cuando no existe slug", () => {
    mockUseParams.mockReturnValue({ slug: "" });

    render(
      <MemoryRouter>
        <ServiceDetailsPage />
      </MemoryRouter>,
    );

    expect(
      screen.getByText(/servicio no especificado/i),
    ).toBeInTheDocument();
  });

  it("muestra skeleton mientras carga", () => {
    mockUseParams.mockReturnValue({
      slug: "electricista-premium",
    });

    vi.mocked(fetchServiceDetail).mockImplementation(
      () => new Promise(() => {}),
    );

    render(
      <MemoryRouter>
        <ServiceDetailsPage />
      </MemoryRouter>,
    );

    expect(
      screen.getByTestId("service-skeleton"),
    ).toBeInTheDocument();
  });

  it("muestra mensaje cuando el servicio no existe", async () => {
    mockUseParams.mockReturnValue({
      slug: "inexistente",
    });

    vi.mocked(fetchServiceDetail).mockResolvedValue({
      service: null,
      related: [],
    });

    render(
      <MemoryRouter>
        <ServiceDetailsPage />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(
        screen.getByText(/servicio no encontrado/i),
      ).toBeInTheDocument();
    });
  });

  it("carga el detalle del servicio", async () => {
    mockUseParams.mockReturnValue({
      slug: "electricista-premium",
    });

    vi.mocked(fetchServiceDetail).mockResolvedValue({
      service: {
        id: "1",
        name: "Electricista Premium",
        categoryName: "Hogar",
        categorySlug: "hogar",
        description: "Servicio profesional",
        rating: 4.8,
        reviewCount: 25,
        price: 50000,
        priceUnit: "hora",
        availability: "available",
        location: "Bogotá",
        experienceYears: 10,
        hours: "8:00 AM - 6:00 PM",
        tags: ["Certificado", "Garantía"],
        images: ["img1.jpg", "img2.jpg"],
        reviews: [],
      },
      related: [
        {
          id: "2",
          name: "Plomero",
        },
      ],
    } as never);

    render(
      <MemoryRouter>
        <ServiceDetailsPage />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(
        screen.getByText(
          /electricista premium/i,
        ),
      ).toBeInTheDocument();
    });

    expect(
      screen.getByText(
        /servicio profesional/i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/bogotá/i),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /10 años de experiencia/i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("provider-card"),
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("service-reviews"),
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("related-services"),
    ).toBeInTheDocument();
  });

  it("permite cambiar la imagen activa", async () => {
    const user = userEvent.setup();

    mockUseParams.mockReturnValue({
      slug: "electricista-premium",
    });

    vi.mocked(fetchServiceDetail).mockResolvedValue({
      service: {
        id: "1",
        name: "Electricista Premium",
        categoryName: "Hogar",
        categorySlug: "hogar",
        description: "Servicio profesional",
        rating: 4.8,
        reviewCount: 25,
        price: 50000,
        priceUnit: "hora",
        availability: "available",
        location: "Bogotá",
        experienceYears: 10,
        hours: "8:00 AM - 6:00 PM",
        tags: ["Certificado"],
        images: ["img1.jpg", "img2.jpg"],
        reviews: [],
      },
      related: [],
    } as never);

    render(
      <MemoryRouter>
        <ServiceDetailsPage />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(
        screen.getByAltText(
          /electricista premium/i,
        ),
      ).toBeInTheDocument();
    });

    const secondThumbnail =
      screen.getByAltText(
        /electricista premium 2/i,
      );

    await user.click(secondThumbnail);

    expect(secondThumbnail).toBeInTheDocument();
  });

  it("invoca fetchServiceDetail con el slug recibido", async () => {
    mockUseParams.mockReturnValue({
      slug: "electricista-premium",
    });

    vi.mocked(fetchServiceDetail).mockResolvedValue({
      service: null,
      related: [],
    });

    render(
      <MemoryRouter>
        <ServiceDetailsPage />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(fetchServiceDetail)
        .toHaveBeenCalledWith(
          "electricista-premium",
        );
    });
  });
});