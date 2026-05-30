import { Link } from "react-router";

type ComuniAppLogoProps = {
  className?: string;
  textClassName?: string;
  to?: string;
};

export function ComuniAppLogo({
  className = "",
  textClassName = "font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] text-[24px] font-extrabold leading-[32px] tracking-[-0.6px] text-[#0d1c2e]",
  to = "/",
}: ComuniAppLogoProps) {
  const content = (
    <>
      <svg
        aria-hidden
        className="size-8 shrink-0"
        fill="none"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" fill="#2d5bff" r="16" />
        <circle cx="16" cy="10" fill="white" r="2" />
        <circle cx="11" cy="18" fill="white" r="2" />
        <circle cx="21" cy="18" fill="white" r="2" />
        <circle cx="16" cy="22" fill="white" r="1.5" />
        <path
          d="M16 12v4M13 17l3-3 3 3"
          stroke="white"
          strokeLinecap="round"
          strokeWidth="1.2"
        />
      </svg>
      <span className={textClassName}>ComuniApp</span>
    </>
  );

  if (to) {
    return (
      <Link
        className={`inline-flex items-center gap-2 ${className}`}
        to={to}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>{content}</div>
  );
}
