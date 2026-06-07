import { saveUserProfile } from "../../src/lib/auth/profile";
import { clearSession, createSession, saveSession } from "../../src/lib/auth/session";
import type { SessionUser, UserProfileData } from "../../src/lib/auth/types";

export const mockResident: SessionUser = {
  id: "demo-resident",
  email: "residente@comuniapp.com",
  name: "Residente Demo",
  role: "resident",
};

export const mockEntrepreneur: SessionUser = {
  id: "demo-entrepreneur",
  email: "emprendedor@comuniapp.com",
  name: "Emprendedor Demo",
  role: "entrepreneur",
};

export const completeEntrepreneurProfile: UserProfileData = {
  firstName: "Emprendedor",
  lastName: "Demo",
  phone: "5551234567",
  businessDescription: "Servicios de calidad en la comunidad.",
  profession: "Electricista",
  officeLocation: "Centro comunitario",
  whatsapp: "wa.link/demo",
  tags: ["Reparaciones", "Instalaciones"],
};

export function resetAuthState() {
  clearSession();
}

export function seedAuthenticatedResident(user: SessionUser = mockResident) {
  const session = createSession(user);
  saveSession(session);
}

export function seedAuthenticatedEntrepreneur(
  user: SessionUser = mockEntrepreneur,
) {
  const session = createSession(user);
  saveSession(session);
}

export function seedEntrepreneurWithCompleteProfile(
  user: SessionUser = mockEntrepreneur,
  profile: UserProfileData = completeEntrepreneurProfile,
) {
  seedAuthenticatedEntrepreneur(user);
  saveUserProfile(user.id, profile);
}
