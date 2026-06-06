import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router";
import { Check, Megaphone, Store } from "lucide-react";
import { ComuniAppLogo } from "../app/components/ComuniAppLogo";
import { SiteFooterLinks } from "../app/components/layout/SiteFooterLinks";
import { ROUTES } from "../routes/paths";
import { useAuth } from "../context/AuthContext";
import {
  validateProfileForm,
  type ProfileFieldErrors,
} from "../lib/auth/profile";

function PageFooter() {
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
        <SiteFooterLinks />
      </div>
    </footer>
  );
}

function ProfileCreatedModal() {
  const navigate = useNavigate();
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(248,249,255,0.35)] p-6 backdrop-blur-[14px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-created-title"
    >
      <div className="w-full max-w-[409px] rounded-[20px] bg-white px-8 py-12 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="mx-auto mb-10 flex size-[99px] items-center justify-center rounded-full bg-[#22c55e]">
          <Check className="size-12 text-white" strokeWidth={3} />
        </div>
        <p
          id="profile-created-title"
          className="text-center font-['Inter:Medium',sans-serif] text-[20px] leading-[25px] text-black"
        >
          El perfil fue creado correctamente
        </p>
        <button
          type="button"
          onClick={() => navigate(ROUTES.entrepreneur.tablero)}
          className="mt-10 flex w-full items-center justify-center rounded-[9999px] bg-gradient-to-r from-[#0040df] to-[#2d5bff] py-4 font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold text-white shadow-[0px_10px_15px_-3px_rgba(0,64,223,0.2),0px_4px_6px_-4px_rgba(0,64,223,0.2)] transition-opacity hover:opacity-90"
        >
          Ir a dashboard
        </button>
      </div>
    </div>
  );
}

function IconCircle({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto mb-4 flex size-[110px] items-center justify-center rounded-full bg-[#f5e1c8]">
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-[32px] bg-[#eff4ff] px-6 py-4 font-['Inter:Regular',sans-serif] text-[16px] text-[#0d1c2e] outline-none placeholder:text-[rgba(116,118,136,0.6)] focus:ring-2 focus:ring-[#2d5bff]/30";

const labelClass =
  "font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold text-[#0d1c2e]";

const continueBtnClass =
  "mt-2 w-full rounded-[9999px] bg-gradient-to-r from-[#0040df] to-[#2d5bff] py-4 font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold text-white shadow-[0px_10px_15px_-3px_rgba(0,64,223,0.2),0px_4px_6px_-4px_rgba(0,64,223,0.2)] transition-opacity hover:opacity-90";

function ProfileCard({
  nombres,
  apellidos,
  celular,
  onNombresChange,
  onApellidosChange,
  onCelularChange,
  onContinue,
  showContinue,
  fieldErrors,
}: {
  nombres: string;
  apellidos: string;
  celular: string;
  onNombresChange: (v: string) => void;
  onApellidosChange: (v: string) => void;
  onCelularChange: (v: string) => void;
  onContinue: () => void;
  showContinue: boolean;
  fieldErrors?: ProfileFieldErrors;
}) {
  return (
    <div className="w-full max-w-[449px] shrink-0 rounded-[48px] bg-white px-6 pb-12 pt-10 shadow-[0px_20px_20px_rgba(13,28,46,0.06)] sm:px-10">
      <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[48px] border border-[rgba(196,197,217,0.1)]" />
      <div className="relative flex flex-col items-center">
        <IconCircle>
          <Store className="size-12 text-[#1e3a5f]" strokeWidth={1.5} />
        </IconCircle>
        <h2 className="mb-2 text-center font-['Inter:Bold',sans-serif] text-[24px] font-bold text-black">
          Crea tu perfil
        </h2>
        <p className="mb-8 max-w-[366px] text-center font-['Inter:Medium',sans-serif] text-[14px] leading-[20px] text-[#434656]">
          Por favor introduzca los siguientes datos para completar su perfil
        </p>

        <form
          className="flex w-full flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            onContinue();
          }}
        >
          <div className="flex flex-col gap-2">
            <label className={labelClass} htmlFor="nombres">
              Nombres
            </label>
            <input
              id="nombres"
              type="text"
              required
              value={nombres}
              onChange={(e) => onNombresChange(e.target.value)}
              className={inputClass}
            />
            {fieldErrors?.firstName && (
              <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#dc2626]">
                {fieldErrors.firstName}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className={labelClass} htmlFor="apellidos">
              Apellidos
            </label>
            <input
              id="apellidos"
              type="text"
              required
              value={apellidos}
              onChange={(e) => onApellidosChange(e.target.value)}
              className={inputClass}
            />
            {fieldErrors?.lastName && (
              <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#dc2626]">
                {fieldErrors.lastName}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className={labelClass} htmlFor="celular">
              Celular
            </label>
            <input
              id="celular"
              type="tel"
              required
              value={celular}
              onChange={(e) => onCelularChange(e.target.value)}
              className={inputClass}
            />
            {fieldErrors?.phone && (
              <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#dc2626]">
                {fieldErrors.phone}
              </p>
            )}
          </div>
          {showContinue && (
            <button type="submit" className={continueBtnClass}>
              Continuar
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

function BusinessCard({
  descripcion,
  onDescripcionChange,
  onContinue,
}: {
  descripcion: string;
  onDescripcionChange: (v: string) => void;
  onContinue: () => void;
}) {
  return (
    <div className="w-full max-w-[449px] shrink-0 rounded-[48px] bg-white px-6 pb-12 pt-10 shadow-[0px_20px_20px_rgba(13,28,46,0.06)] sm:px-10">
      <div className="flex flex-col items-center">
        <IconCircle>
          <Megaphone className="size-12 text-[#ea580c]" strokeWidth={1.5} />
        </IconCircle>
        <h2 className="mb-2 text-center font-['Inter:Bold',sans-serif] text-[24px] font-bold text-black">
          Describe tu negocio
        </h2>
        <p className="mb-8 max-w-[366px] text-center font-['Inter:Medium',sans-serif] text-[14px] leading-[20px] text-[#434656]">
          Haz que tu negocio y servicios que ofreces destaquen con una
          descripción general llamativa.
        </p>

        <form
          className="flex w-full flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            onContinue();
          }}
        >
          <textarea
            id="descripcion-negocio"
            required
            rows={8}
            value={descripcion}
            onChange={(e) => onDescripcionChange(e.target.value)}
            placeholder="Cuéntanos sobre tu negocio"
            className={`${inputClass} min-h-[200px] resize-y`}
          />
          <button type="submit" className={continueBtnClass}>
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
}

export default function CrearPerfilEmprendedor() {
  const { updateProfile } = useAuth();
  const [step, setStep] = useState<1 | 2>(1);
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [celular, setCelular] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [profileErrors, setProfileErrors] = useState<ProfileFieldErrors>({});
  const [submitError, setSubmitError] = useState("");

  const handleStep1Continue = () => {
    setSubmitError("");
    const validation = validateProfileForm({
      firstName: nombres,
      lastName: apellidos,
      phone: celular,
    });
    setProfileErrors(validation.errors);

    if (!validation.isValid) return;

    setStep(2);
  };

  const handleStep2Continue = () => {
    setSubmitError("");

    if (!descripcion.trim()) {
      setSubmitError("La descripción del negocio es obligatoria.");
      return;
    }

    const validation = validateProfileForm({
      firstName: nombres,
      lastName: apellidos,
      phone: celular,
    });
    setProfileErrors(validation.errors);

    if (!validation.isValid) return;

    const result = updateProfile({
      firstName: nombres.trim(),
      lastName: apellidos.trim(),
      phone: celular.trim(),
      businessDescription: descripcion.trim(),
    });

    if (!result.success) {
      if (result.fieldErrors) setProfileErrors(result.fieldErrors);
      setSubmitError(result.error ?? "No se pudo guardar el perfil.");
      return;
    }

    setShowSuccessModal(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9ff]">
      <div className="relative flex flex-1 flex-col items-center overflow-hidden px-4 pb-8 pt-10">
        <div
          aria-hidden
          className="pointer-events-none absolute left-[-5%] top-[-10%] bottom-1/2 right-[65%] rounded-[9999px] bg-[#e6eeff] opacity-60 blur-[60px]"
        />

        <header className="relative z-[2] mb-10">
          <ComuniAppLogo className="justify-center" />
        </header>

        <main className="relative z-[2] w-full max-w-[960px]">
          {submitError && (
            <p
              role="alert"
              className="mx-auto mb-6 max-w-[449px] rounded-[12px] bg-[#fef2f2] px-4 py-3 text-center font-['Inter:Medium',sans-serif] text-[14px] font-medium leading-[20px] text-[#b91c1c]"
            >
              {submitError}
            </p>
          )}
          <div
            className={`flex items-start justify-center gap-6 transition-all duration-500 ease-in-out ${
              step === 1 ? "flex-col" : "flex-col md:flex-row md:justify-center"
            }`}
          >
            <div
              className={`transition-all duration-500 ease-in-out ${
                step === 1
                  ? "mx-auto w-full translate-x-0"
                  : "w-full md:w-auto md:translate-x-0"
              }`}
            >
              <ProfileCard
                nombres={nombres}
                apellidos={apellidos}
                celular={celular}
                onNombresChange={setNombres}
                onApellidosChange={setApellidos}
                onCelularChange={setCelular}
                onContinue={handleStep1Continue}
                showContinue={step === 1}
                fieldErrors={profileErrors}
              />
            </div>

            <div
              className={`transition-all duration-500 ease-in-out ${
                step === 2
                  ? "w-full translate-x-0 opacity-100 md:w-auto"
                  : "pointer-events-none absolute w-full translate-x-8 opacity-0 md:translate-x-12"
              }`}
            >
              {step === 2 && (
                <BusinessCard
                  descripcion={descripcion}
                  onDescripcionChange={setDescripcion}
                  onContinue={handleStep2Continue}
                />
              )}
            </div>
          </div>
        </main>
      </div>

      <PageFooter />

      {showSuccessModal && <ProfileCreatedModal />}
    </div>
  );
}
