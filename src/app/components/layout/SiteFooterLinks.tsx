import { Link } from "react-router";
import { ROUTES } from "../../../routes/paths";

type FooterVariant = "resident" | "entrepreneur";

const RESIDENT_LINKS = [
  { label: "Política de privacidad", to: ROUTES.privacy },
  { label: "Centro de ayuda", to: ROUTES.help },
  { label: "Contáctenos", to: ROUTES.contact },
] as const;

const ENTREPRENEUR_LINKS = [
  { label: "Política de privacidad", to: ROUTES.privacy },
  { label: "Términos de servicio", to: ROUTES.terms },
  { label: "Informe de Sostenibilidad", to: ROUTES.sustainability },
] as const;

interface SiteFooterLinksProps {
  variant?: FooterVariant;
  className?: string;
  linkClassName?: string;
}

export function SiteFooterLinks({
  variant = "resident",
  className = "",
  linkClassName = "font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#475569] transition-colors hover:text-[#2d5bff] no-underline",
}: SiteFooterLinksProps) {
  const links = variant === "entrepreneur" ? ENTREPRENEUR_LINKS : RESIDENT_LINKS;

  return (
    <div className={`flex flex-wrap gap-8 ${className}`}>
      {links.map((link) => (
        <Link key={link.to} to={link.to} className={linkClassName}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}
