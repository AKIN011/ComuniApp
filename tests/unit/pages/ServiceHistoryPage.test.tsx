import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it, vi } from "vitest";

import ServiceHistoryPage from "../../../src/pages/ServiceHistoryPage";

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
  "../../../src/data/dashboardActivities",
  () => ({
    DASHBOARD_ACTIVITIES: [
      {
        id: "1",
        title: "Reserva confirmada",
        subtitle: "Electricista agendado para mañana",
        icon: () => <span>Icon1</span>,
        iconBg: "bg-blue",
        iconColor: "text-blue",
      },
      {
        id: "2",
        title: "Servicio completado",
        subtitle: "Limpieza finalizada",
        icon: () => <span>Icon2</span>,
        iconBg: "bg-green",
        iconColor: "text-green",
      },
    ],
  }),
);

function renderPage() {
  return render(
    <MemoryRouter>
      <ServiceHistoryPage />
    </MemoryRouter>,
  );
}

describe("ServiceHistoryPage", () => {
  it("renderiza correctamente la página", () => {
    renderPage();

    expect(
      screen.getByRole("heading", {
        name: /historial de servicios/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /actividad reciente de tus solicitudes y reservas/i,
      ),
    ).toBeInTheDocument();
  });

  it("renderiza el DashboardHeader", () => {
    renderPage();

    expect(
      screen.getByTestId("dashboard-header"),
    ).toBeInTheDocument();
  });

  it("renderiza todas las actividades", () => {
    renderPage();

    expect(
      screen.getByText(/reserva confirmada/i),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /electricista agendado para mañana/i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/servicio completado/i),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /limpieza finalizada/i,
      ),
    ).toBeInTheDocument();
  });

  it("renderiza el enlace para volver al dashboard", () => {
    renderPage();

    const link = screen.getByRole("link", {
      name: /volver al dashboard/i,
    });

    expect(link).toBeInTheDocument();
  });

  it("renderiza la cantidad correcta de actividades", () => {
    renderPage();

    const activities = screen.getAllByText(
      /reserva confirmada|servicio completado/i,
    );

    expect(activities).toHaveLength(2);
  });
});