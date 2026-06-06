import { Link, useLocation, useParams } from "react-router";
import { SITE_PAGES } from "../data/siteContent";
import { ROUTES } from "../routes/paths";

interface ContentPageProps {
  pageSlug?: string;
}

export default function ContentPage({ pageSlug }: ContentPageProps) {
  const { slug: paramSlug = "" } = useParams<{ slug: string }>();
  const location = useLocation();
  const slug = pageSlug ?? paramSlug;
  const content = SITE_PAGES[slug];
  const returnTo =
    (location.state as { returnTo?: string } | null)?.returnTo ?? ROUTES.dashboard;
  const backLabel =
    slug === "ayuda" ? "← Volver al dashboard" : "← Volver al inicio";
  const backTo = slug === "ayuda" ? returnTo : ROUTES.home;

  if (!content) {
    return (
      <div className="min-h-screen bg-[#f8f9ff] px-8 py-16">
        <div className="mx-auto max-w-[720px] text-center">
          <h1 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[28px] font-bold text-[#0d1c2e]">
            Página no encontrada
          </h1>
          <Link
            to={ROUTES.home}
            className="mt-6 inline-block font-['Inter:Semi_Bold',sans-serif] text-[15px] font-semibold text-[#2d5bff] no-underline"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9ff] px-8 py-12">
      <article className="mx-auto max-w-[720px] rounded-[24px] bg-white p-8 shadow-[0px_8px_30px_0px_rgba(13,28,46,0.06)]">
        <Link
          to={backTo}
          className="mb-6 inline-block font-['Inter:Medium',sans-serif] text-[14px] text-[#2d5bff] no-underline hover:text-[#1a4de8]"
        >
          {backLabel}
        </Link>
        <h1 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] text-[32px] font-extrabold text-[#0d1c2e]">
          {content.title}
        </h1>
        <p className="mt-2 font-['Inter:Regular',sans-serif] text-[16px] leading-[26px] text-[#64748b]">
          {content.description}
        </p>
        <div className="mt-8 space-y-6">
          {content.sections.map((section, index) => (
            <section key={index}>
              {section.heading && (
                <h2 className="mb-2 font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[18px] font-bold text-[#0d1c2e]">
                  {section.heading}
                </h2>
              )}
              <p className="font-['Inter:Regular',sans-serif] text-[15px] leading-[24px] text-[#475569]">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
