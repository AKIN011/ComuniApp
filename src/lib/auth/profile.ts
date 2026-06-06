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

function normalizeProfile(profile: Partial<UserProfileData>): UserProfileData {
  return {
    firstName: profile.firstName?.trim() ?? "",
    lastName: profile.lastName?.trim() ?? "",
    phone: profile.phone?.trim() ?? "",
    businessDescription: profile.businessDescription?.trim() ?? "",
    profession: profile.profession?.trim() ?? "",
    officeLocation: profile.officeLocation?.trim() ?? "",
    whatsapp: profile.whatsapp?.trim() ?? "",
    verifiedBadge: profile.verifiedBadge?.trim() ?? "",
    tags: Array.isArray(profile.tags)
      ? profile.tags.map((tag) => tag.trim()).filter(Boolean)
      : [],
    profilePhotoUrl: profile.profilePhotoUrl?.trim() ?? "",
  };
}

export function buildDisplayName(profile: UserProfileData): string {
  return `${profile.firstName.trim()} ${profile.lastName.trim()}`.trim();
}

export function getUserProfile(userId: string): UserProfileData | null {
  const profiles = readProfiles();
  const profile = profiles[userId];

  if (!profile) return null;

  return normalizeProfile(profile);
}

export function getProfileForUser(user: SessionUser): UserProfileData {
  const stored = getUserProfile(user.id);
  if (stored) return stored;

  const nameParts = user.name.trim().split(/\s+/);

  return normalizeProfile({
    firstName: user.firstName ?? nameParts[0] ?? "",
    lastName: user.lastName ?? nameParts.slice(1).join(" ") ?? "",
    phone: user.phone ?? "",
  });
}

export function getEntrepreneurProfileMissingFields(
  profile: UserProfileData,
): string[] {
  const missing: string[] = [];

  if (!profile.businessDescription?.trim()) {
    missing.push("businessDescription");
  }
  if (!profile.profession?.trim()) {
    missing.push("profession");
  }
  if (!profile.officeLocation?.trim()) {
    missing.push("officeLocation");
  }
  if (!profile.whatsapp?.trim()) {
    missing.push("whatsapp");
  }
  if (!profile.tags?.length) {
    missing.push("tags");
  }

  return missing;
}

export function isEntrepreneurProfileComplete(
  profile: UserProfileData,
): boolean {
  return getEntrepreneurProfileMissingFields(profile).length === 0;
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
  const existing = profiles[userId];
  const merged: Partial<UserProfileData> = {
    ...existing,
    firstName: profile.firstName,
    lastName: profile.lastName,
    phone: profile.phone,
  };

  const optionalFields = [
    "businessDescription",
    "profession",
    "officeLocation",
    "whatsapp",
    "verifiedBadge",
    "tags",
    "profilePhotoUrl",
  ] as const;

  for (const field of optionalFields) {
    if (profile[field] !== undefined) {
      merged[field] = profile[field];
    }
  }

  profiles[userId] = normalizeProfile(merged);

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
