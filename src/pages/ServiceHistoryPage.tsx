import { Link } from "react-router";
import { DashboardHeader } from "../app/components/dashboard/DashboardHeader";
import { DASHBOARD_ACTIVITIES } from "../data/dashboardActivities";
import { ROUTES } from "../routes/paths";

export default function ServiceHistoryPage() {
  return (
    <div className="min-h-screen bg-[#f8f9ff]">
      <DashboardHeader />
      <main className="mx-auto max-w-[1280px] px-8 py-10">
        <h1 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] text-[32px] font-extrabold text-[#0d1c2e]">
          Historial de servicios
        </h1>
        <p className="mt-2 font-['Inter:Regular',sans-serif] text-[15px] text-[#64748b]">
          Actividad reciente de tus solicitudes y reservas.
        </p>

        <ul className="mt-8 space-y-4">
          {DASHBOARD_ACTIVITIES.map((item) => (
            <li
              key={item.id}
              className="flex gap-4 rounded-[20px] bg-white p-5 shadow-[0px_4px_20px_0px_rgba(13,28,46,0.04)]"
            >
              <div
                className={`flex size-11 shrink-0 items-center justify-center rounded-full ${item.iconBg}`}
              >
                <item.icon className={`size-5 ${item.iconColor}`} />
              </div>
              <div>
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[15px] font-semibold text-[#0d1c2e]">
                  {item.title}
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#64748b]">
                  {item.subtitle}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <Link
          to={ROUTES.dashboard}
          className="mt-8 inline-block font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold text-[#2d5bff] no-underline hover:text-[#1a4de8]"
        >
          ← Volver al dashboard
        </Link>
      </main>
    </div>
  );
}
