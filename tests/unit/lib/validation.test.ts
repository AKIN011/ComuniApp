import { describe, expect, it } from "vitest";

import { validateLoginForm } from "../../../src/lib/auth/validation";

describe("validateLoginForm", () => {
  it("rechaza campos vacíos", () => {
    const result = validateLoginForm({ email: "", password: "" });

    expect(result.isValid).toBe(false);
    expect(result.errors.email).toMatch(/obligatorio/i);
    expect(result.errors.password).toMatch(/obligatoria/i);
  });

  it("rechaza correo inválido", () => {
    const result = validateLoginForm({
      email: "no-es-correo",
      password: "12345678",
    });

    expect(result.isValid).toBe(false);
    expect(result.errors.email).toMatch(/válido/i);
  });

  it("acepta credenciales válidas", () => {
    const result = validateLoginForm({
      email: "residente@comuniapp.com",
      password: "residente123",
    });

    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual({});
  });
});
