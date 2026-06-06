import type { SessionUser, UserProfileData } from "./types";

const PROFILES_STORAGE_KEY = "comuniapp_profiles";

export type ProfileFieldErrors = Partial<
  Record<keyof UserProfileData, string>
>;

export interface ProfileValidationResult {
  isValid: boolean;
  errors: ProfileFieldErrors;
}

export interface ProfileUpdateResult {
  success: boolean;
  error?: string;
  fieldErrors?: ProfileFieldErrors;
}

function readProfiles(): Record<string, UserProfileData> {
  try {
    const raw = localStorage.getItem(PROFILES_STORAGE_KEY);
    if (!raw) return {};

    const profiles = JSON.parse(raw) as Record<string, UserProfileData>;
    return profiles && typeof profiles === "object" ? profiles : {};
  } catch {
    return {};
  }
}

function writeProfiles(profiles: Record<string, UserProfileData>): void {
  localStorage.setItem(PROFILES_STORAGE_KEY, JSON.stringify(profiles));
}

export function buildDisplayName(profile: UserProfileData): string {
  return `${profile.firstName.trim()} ${profile.lastName.trim()}`.trim();
}

export function getUserProfile(userId: string): UserProfileData | null {
  const profiles = readProfiles();
  const profile = profiles[userId];

  if (!profile) return null;

  return {
    firstName: profile.firstName ?? "",
    lastName: profile.lastName ?? "",
    phone: profile.phone ?? "",
  };
}

export function getProfileForUser(user: SessionUser): UserProfileData {
  const stored = getUserProfile(user.id);
  if (stored) return stored;

  const nameParts = user.name.trim().split(/\s+/);

  return {
    firstName: user.firstName ?? nameParts[0] ?? "",
    lastName: user.lastName ?? nameParts.slice(1).join(" ") ?? "",
    phone: user.phone ?? "",
  };
}

export function validateProfileForm(
  values: UserProfileData,
): ProfileValidationResult {
  const errors: ProfileFieldErrors = {};
  const firstName = values.firstName.trim();
  const lastName = values.lastName.trim();
  const phone = values.phone.trim();

  if (!firstName) {
    errors.firstName = "Los nombres son obligatorios.";
  }

  if (!lastName) {
    errors.lastName = "Los apellidos son obligatorios.";
  }

  if (!phone) {
    errors.phone = "El celular es obligatorio.";
  } else if (!/^\d{7,15}$/.test(phone.replace(/\s/g, ""))) {
    errors.phone = "Introduce un número de celular válido.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function saveUserProfile(
  userId: string,
  profile: UserProfileData,
): ProfileUpdateResult {
  const validation = validateProfileForm(profile);

  if (!validation.isValid) {
    return {
      success: false,
      error: "Revisa los campos marcados.",
      fieldErrors: validation.errors,
    };
  }

  const profiles = readProfiles();
  profiles[userId] = {
    firstName: profile.firstName.trim(),
    lastName: profile.lastName.trim(),
    phone: profile.phone.trim(),
  };

  writeProfiles(profiles);

  return { success: true };
}

export function withProfile(user: SessionUser): SessionUser {
  const profile = getUserProfile(user.id);

  if (!profile) return user;

  return {
    ...user,
    firstName: profile.firstName,
    lastName: profile.lastName,
    phone: profile.phone,
    name: buildDisplayName(profile),
  };
}
