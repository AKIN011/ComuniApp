import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { registerNewUser } from "../lib/auth/credentials";
import { useAuth } from "../context/AuthContext";
import {
  validateLoginForm,
  type LoginFieldErrors,
} from "../lib/auth/validation";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  Shield,
  ShieldCheck,
  Users,
  Home,
} from "lucide-react";
import { ComuniAppLogo } from "../app/components/ComuniAppLogo";
import { ProfileConfirmationModal } from "../app/components/ProfileConfirmationModal";
import { ROUTES } from "../routes/paths";

function RegistroFooter() {
  return (
    <footer className="mt-auto w-full bg-[#eff4ff] px-8 py-12">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-6">
        <div className="flex flex-col gap-4">
          <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[20px] font-bold leading-[28px] text-[#0d1c2e]">
            ComuniApp
          </span>
          <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[rgba(13,28,46,0.7)]">
            © 2024 ComuniApp. Cultivando el comercio comunitario.
          </p>
        </div>
        <div className="flex flex-wrap gap-8">
          {["Política de privacidad", "Centro de ayuda", "Contáctenos"].map(
            (label) => (
              <button
                key={label}
                type="button"
                className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#475569] transition-colors hover:text-[#2d5bff]"
              >
                {label}
              </button>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}

const inputBaseClass =
  "h-[52px] w-full rounded-[14px] border-none bg-[#eef4fc] pl-12 pr-4 font-['Inter:Regular',sans-serif] text-[15px] text-[#0d1c2e] outline-none placeholder:text-[#94a3b8] focus:ring-2 focus:ring-[#2d5bff]/30";

const inputErrorClass = "ring-2 ring-[#dc2626]/40";

export default function RegistroEmprendedor() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState<LoginFieldErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    const validation = validateLoginForm({ email, password });
    setFieldErrors(validation.errors);

    if (!validation.isValid) return;

    setIsSubmitting(true);

    const result = registerNewUser(email, password, "entrepreneur");

    setIsSubmitting(false);

    if (!result.success) {
      if (result.fieldErrors) setFieldErrors(result.fieldErrors);
      setSubmitError(result.error ?? "No se pudo registrar.");
      return;
    }

    const loginResult = login(email, password, "entrepreneur");

    if (!loginResult.success) {
      setSubmitError(
        loginResult.error ??
          "Registro completado, pero no se pudo iniciar sesión. Inicia sesión manualmente.",
      );
      return;
    }

    setShowWelcomeModal(true);
  };

  const continueToProfile = () => {
    setShowWelcomeModal(false);
    navigate(ROUTES.registerEntrepreneurCreateProfile);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9ff]">
      <div className="flex flex-1 flex-col items-center px-4 pb-8 pt-10">
        <header className="mb-10">
          <ComuniAppLogo className="justify-center" />
        </header>

        <main className="w-full max-w-[480px]">
          <div className="rounded-[24px] bg-white px-8 py-10 shadow-[0px_20px_40px_0px_rgba(13,28,46,0.06)]">
            <div className="mb-8 text-center">
              <h1 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] text-[28px] font-extrabold leading-[36px] tracking-[-0.5px] text-[#0d1c2e]">
                Bienvenido de nuevo
              </h1>
              <div className="mt-3 flex justify-center">
                <span className="inline-block rounded-full bg-[#eff4ff] px-4 py-1.5 font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold uppercase leading-[20px] tracking-[0.08em] text-[#2d5bff]">
                  Emprendedor
                </span>
              </div>
              <p className="mt-3 font-['Inter:Regular',sans-serif] text-[15px] leading-[22px] text-[#64748b]">
                Por favor, introduzca sus datos para registrarse.
              </p>
            </div>

            <form className="flex flex-col gap-5" onSubmit={handleRegister} noValidate>
              {submitError && (
                <p
                  role="alert"
                  className="rounded-[12px] bg-[#fef2f2] px-4 py-3 text-center font-['Inter:Medium',sans-serif] text-[14px] font-medium leading-[20px] text-[#b91c1c]"
                >
                  {submitError}
                </p>
              )}

              <div className="flex flex-col gap-2">
                <label
                  className="font-['Inter:Medium',sans-serif] text-[14px] font-medium leading-[20px] text-[#334155]"
                  htmlFor="emprendedor-email"
                >
                  Dirección de correo electrónico
                </label>
                <div className="relative">
                  <Mail
                    aria-hidden
                    className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#94a3b8]"
                  />
                  <input
                    id="emprendedor-email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (fieldErrors.email) {
                        setFieldErrors((prev) => ({ ...prev, email: undefined }));
                      }
                    }}
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={
                      fieldErrors.email ? "emprendedor-email-error" : undefined
                    }
                    className={`${inputBaseClass} ${fieldErrors.email ? inputErrorClass : ""}`}
                  />
                </div>
                {fieldErrors.email && (
                  <p
                    id="emprendedor-email-error"
                    role="alert"
                    className="font-['Inter:Regular',sans-serif] text-[13px] leading-[18px] text-[#dc2626]"
                  >
                    {fieldErrors.email}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="font-['Inter:Medium',sans-serif] text-[14px] font-medium leading-[20px] text-[#334155]"
                  htmlFor="emprendedor-password"
                >
                  Contraseña
                </label>
                <div className="relative">
                  <Lock
                    aria-hidden
                    className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#94a3b8]"
                  />
                  <input
                    id="emprendedor-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (fieldErrors.password) {
                        setFieldErrors((prev) => ({
                          ...prev,
                          password: undefined,
                        }));
                      }
                    }}
                    aria-invalid={Boolean(fieldErrors.password)}
                    aria-describedby={
                      fieldErrors.password
                        ? "emprendedor-password-error"
                        : undefined
                    }
                    className={`${inputBaseClass} pr-12 ${fieldErrors.password ? inputErrorClass : ""}`}
                  />
                  <button
                    type="button"
                    aria-label={
                      showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94a3b8] transition-colors hover:text-[#64748b]"
                    onClick={() => setShowPassword((v) => !v)}
                  >
                    {showPassword ? (
                      <EyeOff className="size-5" />
                    ) : (
                      <Eye className="size-5" />
                    )}
                  </button>
                </div>
                {fieldErrors.password && (
                  <p
                    id="emprendedor-password-error"
                    role="alert"
                    className="font-['Inter:Regular',sans-serif] text-[13px] leading-[18px] text-[#dc2626]"
                  >
                    {fieldErrors.password}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 h-[52px] w-full cursor-pointer rounded-[9999px] bg-[#2d5bff] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[16px] font-bold leading-[24px] text-white shadow-[0px_10px_15px_-3px_rgba(0,64,223,0.25),0px_4px_6px_-4px_rgba(0,64,223,0.2)] transition-all duration-200 hover:bg-[#1a4de8] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Registrando..." : "Registrarse"}
              </button>
            </form>

            <p className="mt-6 text-center font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#64748b]">
              <span className="text-[#94a3b8]">o</span>
            </p>

            <p className="mt-4 text-center font-['Inter:Regular',sans-serif] text-[14px] leading-[22px] text-[#64748b]">
              ¿Ya tienes una cuenta?{" "}
              <Link
                to={ROUTES.loginEntrepreneur}
                className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#2d5bff] no-underline transition-colors hover:text-[#1a4de8]"
              >
                Inicia sesión
              </Link>
            </p>

            <div className="mt-8 border-t border-[#e2e8f0] pt-8">
              <p className="text-center font-['Inter:Medium',sans-serif] text-[11px] font-medium uppercase leading-[16px] tracking-[0.08em] text-[#94a3b8]">
                ¿Estas buscando servicios?
              </p>
              <Link
                to={ROUTES.login}
                className="mt-4 flex h-[48px] w-full cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-[#fce8d5] font-['Inter:Semi_Bold',sans-serif] text-[15px] font-semibold leading-[22px] text-[#9a6b45] no-underline transition-all duration-200 hover:bg-[#f9dcc0] active:scale-[0.98]"
              >
                <Home className="size-5" strokeWidth={2} />
                Inicia como residente
              </Link>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-10 text-[#cbd5e1]">
            <ShieldCheck className="size-7" strokeWidth={1.5} />
            <Shield className="size-7" strokeWidth={1.5} />
            <Users className="size-7" strokeWidth={1.5} />
          </div>
        </main>
      </div>

      <RegistroFooter />

      {showWelcomeModal && (
        <ProfileConfirmationModal
          message="¡Bienvenido! Continúa para completar tu perfil de emprendedor en ComuniApp."
          buttonLabel="Continuar"
          onClose={continueToProfile}
        />
      )}
    </div>
  );
}
