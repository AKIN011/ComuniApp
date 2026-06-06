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
import { SiteFooterLinks } from "../app/components/layout/SiteFooterLinks";
import { ROUTES } from "../routes/paths";

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
        <SiteFooterLinks />
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
                  navigate(ROUTES.entrepreneur.tablero);
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
                      className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#94a3b8]"
                    />
                    <input
                      id="emprendedor-email"
                      type="email"
                      required
                      placeholder="emprendedor@comuniapp.com"
                      className="h-[52px] w-full rounded-[16px] border border-[#e2e8f0] bg-[#f8f9ff] pl-12 pr-4 font-['Inter:Regular',sans-serif] text-[15px] text-[#0d1c2e] outline-none focus:ring-2 focus:ring-[#2d5bff]/30"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold leading-[20px] text-[#0d1c2e]"
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
                      required
                      placeholder="••••••••"
                      className="h-[52px] w-full rounded-[16px] border border-[#e2e8f0] bg-[#f8f9ff] pl-12 pr-12 font-['Inter:Regular',sans-serif] text-[15px] text-[#0d1c2e] outline-none focus:ring-2 focus:ring-[#2d5bff]/30"
                    />
                    <button
                      type="button"
                      aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94a3b8] transition-colors hover:text-[#64748b]"
                    >
                      {showPassword ? (
                        <EyeOff className="size-5" />
                      ) : (
                        <Eye className="size-5" />
                      )}
                    </button>
                  </div>
                </div>

                <Link
                  to={ROUTES.forgotPassword}
                  className="self-end font-['Inter:Medium',sans-serif] text-[13px] font-medium text-[#2d5bff] no-underline hover:text-[#1a4de8]"
                >
                  ¿Olvidaste tu contraseña?
                </Link>

                <button
                  type="submit"
                  className="h-[52px] w-full cursor-pointer rounded-[9999px] bg-[#2d5bff] font-['Inter:Semi_Bold',sans-serif] text-[15px] font-semibold text-white transition-all hover:bg-[#1a4de8] active:scale-[0.98]"
                >
                  Iniciar sesión
                </button>
              </form>

              <div className="flex items-center gap-3 rounded-[16px] bg-[#eef4fc] px-4 py-3">
                <Shield className="size-5 shrink-0 text-[#2d5bff]" />
                <p className="font-['Inter:Regular',sans-serif] text-[13px] leading-[20px] text-[#475569]">
                  Acceso seguro para emprendedores verificados de la comunidad.
                </p>
              </div>

              <p className="text-center font-['Inter:Regular',sans-serif] text-[14px] text-[#64748b]">
                ¿Eres residente?{" "}
                <Link
                  to={ROUTES.login}
                  className="font-semibold text-[#2d5bff] no-underline hover:text-[#1a4de8]"
                >
                  Inicia sesión aquí
                </Link>
              </p>

              <p className="text-center font-['Inter:Regular',sans-serif] text-[14px] text-[#64748b]">
                ¿No tienes cuenta?{" "}
                <Link
                  to={ROUTES.registerEntrepreneur}
                  className="font-semibold text-[#2d5bff] no-underline hover:text-[#1a4de8]"
                >
                  Regístrate
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-[#64748b]">
            <span className="inline-flex items-center gap-2 font-['Inter:Regular',sans-serif] text-[13px]">
              <ShieldCheck className="size-4 text-[#22c55e]" />
              Datos protegidos
            </span>
            <span className="inline-flex items-center gap-2 font-['Inter:Regular',sans-serif] text-[13px]">
              <Users className="size-4 text-[#2d5bff]" />
              Comunidad local
            </span>
          </div>
        </main>
      </div>

      <LoginFooter />
    </div>
  );
}
