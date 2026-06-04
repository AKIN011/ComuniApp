const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface LoginFormValues {
  email: string;
  password: string;
}

export type LoginFieldErrors = Partial<Record<keyof LoginFormValues, string>>;

export interface LoginValidationResult {
  isValid: boolean;
  errors: LoginFieldErrors;
}

export function validateLoginForm(
  values: LoginFormValues,
): LoginValidationResult {
  const errors: LoginFieldErrors = {};
  const email = values.email.trim();
  const password = values.password;

  if (!email) {
    errors.email = "El correo electrónico es obligatorio.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Introduce un correo electrónico válido.";
  }

  if (!password) {
    errors.password = "La contraseña es obligatoria.";
  } else if (password.length < 8) {
    errors.password = "La contraseña debe tener al menos 8 caracteres.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
