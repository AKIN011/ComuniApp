import {
  CheckCircle2,
  Clock,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

export interface DashboardActivity {
  id: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
}

export const DASHBOARD_ACTIVITIES: DashboardActivity[] = [
  {
    id: "completed-dave",
    icon: CheckCircle2,
    iconBg: "bg-[#dbeafe]",
    iconColor: "text-[#2d5bff]",
    title: "Completado por Dave P.",
    subtitle: "Hace 2 días",
  },
  {
    id: "scheduled-cleaning",
    icon: Clock,
    iconBg: "bg-[#ffedd5]",
    iconColor: "text-[#ea580c]",
    title: "Limpieza de la casa.",
    subtitle: "Programado para el viernes. En 3 días",
  },
  {
    id: "review-left",
    icon: MessageCircle,
    iconBg: "bg-[#dcfce7]",
    iconColor: "text-[#16a34a]",
    title: "Dejó una reseña.",
    subtitle: "Para 'Detalle de Autos'. La semana pasada",
  },
];
