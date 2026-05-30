import { DashboardHeader } from "../app/components/dashboard/DashboardHeader";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  GraduationCap,
  Heart,
  MessageCircle,
  Sprout,
  Search,
  Sparkles,
  Stethoscope,
  Wrench,
} from "lucide-react";

const categories = [
  {
    label: "Fontanería",
    icon: Wrench,
    bg: "bg-[#eef4fc]",
    color: "text-[#2d5bff]",
  },
  {
    label: "Limpieza",
    icon: Sparkles,
    bg: "bg-[#ecfdf5]",
    color: "text-[#10b981]",
  },
  {
    label: "Salud",
    icon: Stethoscope,
    bg: "bg-[#fff7ed]",
    color: "text-[#f59e0b]",
  },
  {
    label: "Jardinería",
    icon: Sprout,
    bg: "bg-[#eef2ff]",
    color: "text-[#6366f1]",
  },
  {
    label: "Tutoría",
    icon: GraduationCap,
    bg: "bg-[#fef2f2]",
    color: "text-[#ef4444]",
  },
];

const recommendations = [
  {
    image:
      "https://images.unsplash.com/photo-1592419044701-650b9bd90e57?w=800&q=80",
    rating: "4.9",
    title: "Recorte de setos experto",
    price: "$45/hr",
    description:
      "Transforma tu espacio exterior con paisajismo preciso. Verificado por vecinos durante 5 años.",
    provider: "Por Marcus Chen",
    badge: "VERIFICADO",
    badgeStyle: "bg-[#dcfce7] text-[#15803d]",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    rating: "5.0",
    title: "Tutor de Cálculo y Física",
    price: "$60/hr",
    description:
      "Entrenamiento a nivel de secundaria y universidad. Ayudando a los estudiantes a tener éxito en nuestro vecindario.",
    provider: "por Dr. Sarah L.",
    badge: "EXPERTO",
    badgeStyle: "bg-[#dcfce7] text-[#15803d]",
  },
];

const activities = [
  {
    icon: CheckCircle2,
    iconBg: "bg-[#dbeafe]",
    iconColor: "text-[#2d5bff]",
    title: "Completado por Dave P.",
    subtitle: "Hace 2 días",
  },
  {
    icon: Clock,
    iconBg: "bg-[#ffedd5]",
    iconColor: "text-[#ea580c]",
    title: "Limpieza de la casa.",
    subtitle: "Programado para el viernes. En 3 días",
  },
  {
    icon: MessageCircle,
    iconBg: "bg-[#dcfce7]",
    iconColor: "text-[#16a34a]",
    title: "Dejó una reseña.",
    subtitle: "Para 'Detalle de Autos'. La semana pasada",
  },
];

function DashboardFooter() {
  return (
    <footer className="mt-12 bg-[#eff4ff] px-8 py-12">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-6">
        <div className="flex flex-col gap-3">
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

export default function ResidentDashboardPage() {
  return (
    <div className="min-h-screen bg-[#f8f9ff]">
      <DashboardHeader />

      <main className="mx-auto max-w-[1280px] px-8 pb-8 pt-10">
        {/* Hero search */}
        <section className="mb-10 text-center">
          <h1 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] text-[40px] font-extrabold leading-[48px] tracking-[-0.8px] text-[#0d1c2e] md:text-[48px] md:leading-[56px]">
            Encuentra la ayuda local perfecta hoy.
          </h1>
          <p className="mx-auto mt-3 max-w-[640px] font-['Inter:Regular',sans-serif] text-[17px] leading-[26px] text-[#64748b]">
            Conéctate con vecinos de confianza para servicios adaptados a tu
            hogar y tu vida.
          </p>

          <div className="mx-auto mt-8 flex max-w-[720px] items-center gap-2 rounded-[9999px] bg-[#eef4fc] p-2 pl-5 shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.04)]">
            <Search className="size-5 shrink-0 text-[#94a3b8]" />
            <input
              type="search"
              placeholder={`Prueba con 'Plomería' o 'Tutor de Matemáticas'...`}
              className="min-w-0 flex-1 bg-transparent font-['Inter:Regular',sans-serif] text-[15px] text-[#0d1c2e] outline-none placeholder:text-[rgba(67,70,86,0.5)]"
            />
            <button
              type="button"
              className="shrink-0 cursor-pointer rounded-[9999px] bg-[#2d5bff] px-8 py-3 font-['Inter:Semi_Bold',sans-serif] text-[15px] font-semibold leading-[22px] text-white transition-all duration-200 hover:bg-[#1a4de8] active:scale-[0.98]"
            >
              Buscar
            </button>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {categories.map(({ label, icon: Icon, bg, color }) => (
            <button
              key={label}
              type="button"
              className="flex cursor-pointer flex-col items-center gap-3 rounded-[20px] bg-white px-4 py-6 shadow-[0px_4px_20px_0px_rgba(13,28,46,0.04)] transition-all duration-200 hover:shadow-[0px_8px_24px_0px_rgba(13,28,46,0.08)] active:scale-[0.98]"
            >
              <div
                className={`flex size-12 items-center justify-center rounded-[14px] ${bg}`}
              >
                <Icon className={`size-6 ${color}`} strokeWidth={2} />
              </div>
              <span className="font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold leading-[20px] text-[#334155]">
                {label}
              </span>
            </button>
          ))}
        </section>

        {/* Main grid */}
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Recommendations */}
          <section>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[24px] font-bold leading-[32px] text-[#0d1c2e]">
                  Recomendado para ti
                </h2>
                <p className="mt-1 font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#64748b]">
                  Basado en tu actividad comunitaria
                </p>
              </div>
              <button
                type="button"
                className="inline-flex cursor-pointer items-center gap-1 font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold leading-[20px] text-[#2d5bff] transition-colors hover:text-[#1a4de8]"
              >
                Ver todo
                <ArrowRight className="size-4" />
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {recommendations.map((card) => (
                <article
                  key={card.title}
                  className="overflow-hidden rounded-[24px] bg-white shadow-[0px_8px_30px_0px_rgba(13,28,46,0.06)]"
                >
                  <div className="relative h-[200px] overflow-hidden">
                    <img
                      alt={card.title}
                      className="size-full object-cover"
                      src={card.image}
                    />
                    <div className="absolute right-3 top-3 flex items-center gap-1 rounded-[9999px] bg-white px-2.5 py-1 shadow-sm">
                      <span className="text-[#f59e0b]">★</span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] text-[13px] font-semibold text-[#0d1c2e]">
                        {card.rating}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[18px] font-bold leading-[26px] text-[#0d1c2e]">
                        {card.title}
                      </h3>
                      <span className="shrink-0 font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold leading-[24px] text-[#2d5bff]">
                        {card.price}
                      </span>
                    </div>
                    <p className="mt-2 font-['Inter:Regular',sans-serif] text-[14px] leading-[22px] text-[#64748b]">
                      {card.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <div className="size-8 overflow-hidden rounded-full bg-[#e2e8f0]">
                          <img
                            alt=""
                            className="size-full object-cover"
                            src={`https://i.pravatar.cc/64?u=${encodeURIComponent(card.provider)}`}
                          />
                        </div>
                        <span className="font-['Inter:Medium',sans-serif] text-[13px] font-medium text-[#475569]">
                          {card.provider}
                        </span>
                      </div>
                      <span
                        className={`rounded-[6px] px-2 py-0.5 font-['Inter:Bold',sans-serif] text-[10px] font-bold uppercase tracking-wide ${card.badgeStyle}`}
                      >
                        {card.badge}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6">
            <div className="rounded-[24px] bg-[#eef4fc] p-6">
              <div className="mb-5 flex items-center gap-2">
                <Clock className="size-5 text-[#2d5bff]" />
                <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[18px] font-bold leading-[26px] text-[#0d1c2e]">
                  Actividad Reciente
                </h3>
              </div>
              <ul className="flex flex-col gap-5">
                {activities.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <div
                      className={`flex size-9 shrink-0 items-center justify-center rounded-full ${item.iconBg}`}
                    >
                      <item.icon
                        className={`size-4 ${item.iconColor}`}
                        strokeWidth={2}
                      />
                    </div>
                    <div>
                      <p className="font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold leading-[20px] text-[#0d1c2e]">
                        {item.title}
                      </p>
                      <p className="font-['Inter:Regular',sans-serif] text-[13px] leading-[18px] text-[#64748b]">
                        {item.subtitle}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-6 w-full cursor-pointer rounded-[9999px] border-2 border-[#2d5bff] bg-transparent py-3 font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold leading-[20px] text-[#2d5bff] transition-all duration-200 hover:bg-[#2d5bff]/5 active:scale-[0.98]"
              >
                Historial de servicio
              </button>
            </div>

            <div className="relative overflow-hidden rounded-[24px] bg-[#2d5bff] p-6">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-4 -top-4 size-32 rounded-full bg-white/10"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute bottom-4 right-4 opacity-20"
              >
                <Heart className="size-16 text-white" fill="white" />
              </div>
              <h3 className="relative font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[20px] font-bold leading-[28px] text-white">
                ¿Organizar un servicio?
              </h3>
              <p className="relative mt-2 font-['Inter:Regular',sans-serif] text-[14px] leading-[22px] text-white/90">
                Únete a más de 200 vecinos que ganan ingresos adicionales cada
                semana.
              </p>
              <button
                type="button"
                className="relative mt-5 cursor-pointer rounded-[9999px] bg-white px-6 py-2.5 font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold leading-[20px] text-[#2d5bff] transition-all duration-200 hover:bg-[#f0f4ff] active:scale-[0.98]"
              >
                Comenzar
              </button>
            </div>
          </aside>
        </div>
      </main>

      <DashboardFooter />
    </div>
  );
}
