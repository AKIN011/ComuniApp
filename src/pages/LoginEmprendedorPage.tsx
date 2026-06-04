import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  Shield,
  ShieldCheck,
  Users,
} from "lucide-react";
import { ComuniAppLogo } from "../app/components/ComuniAppLogo";
import { EMPRENDEDOR_ROUTES } from "../lib/emprendedorRoutes";

function LoginFooter() {
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

export default function LoginEmprendedorPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#f8f9ff] isolate"
      data-name="LOGIN EMPRENDEDOR"
    >
      <div className="relative flex flex-1 flex-col items-center overflow-hidden px-4 pb-8 pt-10">
        <div
          aria-hidden
          className="pointer-events-none absolute left-[-5%] top-[-10%] bottom-1/2 right-[65%] rounded-[9999px] bg-[#e6eeff] opacity-60 blur-[60px]"
          data-name="Minimalist Background Decoration"
        />

        <header className="relative z-[1] mb-10">
          <ComuniAppLogo className="justify-center" />
        </header>

        <main className="relative z-[1] w-full max-w-[448px]">
          <div
            className="relative rounded-[48px] bg-white shadow-[0px_20px_20px_rgba(13,28,46,0.06)]"
            data-name="Login Card"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[48px] border border-[rgba(196,197,217,0.1)]"
            />
            <div className="flex flex-col gap-8 px-6 py-10 sm:px-10">
              <div>
                <h1 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[24px] font-bold leading-[32px] tracking-[-0.6px] text-[#0d1c2e]">
                  Bienvenido de nuevo
                </h1>
                <p className="mt-2 font-['Inter:Medium',sans-serif] text-[14px] font-medium leading-[20px] text-[#434656]">
                  Por favor, introduzca sus datos para iniciar sesión.
                </p>
              </div>

              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  navigate(EMPRENDEDOR_ROUTES.tablero);
                }}
              >
                <div className="flex flex-col gap-2">
                  <label
                    className="font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold leading-[20px] text-[#0d1c2e]"
                    htmlFor="emprendedor-email"
                  >
                    Dirección de correo electrónico
                  </label>
                  <div className="relative">
                    <Mail
                      aria-hidden
                      className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#747688]"
                    />
                    <input
                      id="emprendedor-email"
                      type="email"
                      autoComplete="email"
                      placeholder="name@company.com"
                      className="h-[52px] w-full rounded-[32px] border-none bg-[#eff4ff] pl-12 pr-4 font-['Inter:Regular',sans-serif] text-[16px] text-[#0d1c2e] outline-none placeholder:text-[rgba(116,118,136,0.6)] focus:ring-2 focus:ring-[#2d5bff]/30"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <label
                      className="font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold leading-[20px] text-[#0d1c2e]"
                      htmlFor="emprendedor-password"
                    >
                      Contraseña
                    </label>
                    <button
                      type="button"
                      className="font-['Inter:Medium',sans-serif] text-[13px] font-medium leading-[20px] text-[#2d5bff] transition-colors hover:text-[#1a4de8]"
                    >
                      ¿Olvidaste tu contraseña?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock
                      aria-hidden
                      className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#747688]"
                    />
                    <input
                      id="emprendedor-password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="••••••••"
                      className="h-[52px] w-full rounded-[32px] border-none bg-[#eff4ff] pl-12 pr-12 font-['Inter:Regular',sans-serif] text-[16px] text-[#0d1c2e] outline-none placeholder:text-[rgba(116,118,136,0.6)] focus:ring-2 focus:ring-[#2d5bff]/30"
                    />
                    <button
                      type="button"
                      aria-label={
                        showPassword
                          ? "Ocultar contraseña"
                          : "Mostrar contraseña"
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#747688] transition-colors hover:text-[#434656]"
                      onClick={() => setShowPassword((v) => !v)}
                    >
                      {showPassword ? (
                        <EyeOff className="size-5" />
                      ) : (
                        <Eye className="size-5" />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="relative mt-1 flex h-[52px] w-full cursor-pointer items-center justify-center rounded-[9999px] border-none bg-gradient-to-r from-[#0040df] to-[#2d5bff] font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[16px] font-bold leading-[24px] text-white shadow-[0px_10px_15px_-3px_rgba(0,64,223,0.2),0px_4px_6px_-4px_rgba(0,64,223,0.2)] transition-all duration-200 hover:brightness-105 active:scale-[0.98]"
                >
                  Iniciar sesión
                </button>
              </form>

              <p className="text-center font-['Inter:Regular',sans-serif] text-[14px] leading-[22px] text-[#64748b]">
                ¿No tienes una cuenta?{" "}
                <Link
                  className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#2d5bff] transition-colors hover:text-[#1a4de8]"
                  to="/registro"
                >
                  Regístrate en su lugar
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 text-[#0d1c2e] opacity-40">
            <ShieldCheck className="size-7" strokeWidth={1.5} />
            <Shield className="size-7" strokeWidth={1.5} />
            <Users className="size-7" strokeWidth={1.5} />
          </div>
        </main>
      </div>

      <LoginFooter />
    </div>
  );
}
