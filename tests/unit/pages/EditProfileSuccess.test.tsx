import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { EditProfileSuccess } from "../../../src/pages/EditProfileSuccess";

const mockNavigate = vi.fn();

vi.mock("react-router", async () => {
  const actual =
    await vi.importActual<typeof import("react-router")>("react-router");

  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock(
  "../../../src/app/components/figma/ImageWithFallback",
  () => ({
    ImageWithFallback: ({
      alt,
      src,
    }: {
      alt: string;
      src: string;
    }) => (
      <img
        alt={alt}
        src={src}
        data-testid="success-image"
      />
    ),
  }),
);

vi.mock(
  "../../../src/pages/EditProfile",
  () => ({
    Footer: () => (
      <div data-testid="footer">
        Footer
      </div>
    ),
  }),
);

function renderPage() {
  return render(
    <MemoryRouter>
      <EditProfileSuccess />
    </MemoryRouter>,
  );
}

describe("EditProfileSuccess", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renderiza correctamente la pantalla de éxito", () => {
    renderPage();

    expect(
      screen.getByText(/comuniapp/i),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /sus datos se han actualizado satisfactoriamente/i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /ir al home/i,
      }),
    ).toBeInTheDocument();
  });

  it("renderiza la imagen de éxito", () => {
    renderPage();

    expect(
      screen.getByTestId("success-image"),
    ).toBeInTheDocument();

    expect(
      screen.getByAltText(/éxito/i),
    ).toBeInTheDocument();
  });

  it("renderiza el footer", () => {
    renderPage();

    expect(
      screen.getByTestId("footer"),
    ).toBeInTheDocument();
  });

  it("navega al dashboard cuando se hace click en Ir al Home", async () => {
    const user = userEvent.setup();

    renderPage();

    await user.click(
      screen.getByRole("button", {
        name: /ir al home/i,
      }),
    );

    expect(mockNavigate).toHaveBeenCalledTimes(1);

    expect(mockNavigate).toHaveBeenCalledWith(
      "/dashboard",
    );
  });
});