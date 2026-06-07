import { describe, expect, it } from "vitest";

import {
  getEntrepreneurProfileMissingFields,
  isEntrepreneurProfileComplete,
  validateProfileForm,
} from "../../../src/lib/auth/profile";
import { completeEntrepreneurProfile } from "../../helpers/auth";

describe("perfil emprendedor", () => {
  it("detecta campos faltantes en perfil incompleto", () => {
    const missing = getEntrepreneurProfileMissingFields({
      firstName: "Ana",
      lastName: "López",
      phone: "5551234567",
    });

    expect(missing).toContain("businessDescription");
    expect(missing).toContain("profession");
    expect(missing).toContain("officeLocation");
    expect(missing).toContain("whatsapp");
    expect(missing).toContain("tags");
  });

  it("marca completo un perfil con todos los campos requeridos", () => {
    expect(isEntrepreneurProfileComplete(completeEntrepreneurProfile)).toBe(
      true,
    );
  });

  it("rechaza perfil base sin nombres, apellidos o celular", () => {
    const result = validateProfileForm({
      firstName: "",
      lastName: "",
      phone: "",
    });

    expect(result.isValid).toBe(false);
    expect(result.errors.firstName).toMatch(/obligatorios/i);
    expect(result.errors.lastName).toMatch(/obligatorios/i);
    expect(result.errors.phone).toMatch(/obligatorio/i);
  });

  it("acepta datos básicos válidos de perfil", () => {
    const result = validateProfileForm({
      firstName: "Carlos",
      lastName: "Ruiz",
      phone: "5559876543",
    });

    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual({});
  });
});
