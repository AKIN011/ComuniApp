import React, { useState } from "react";
import { Link as RouterLink } from "react-router";
import svgPaths from "../imports/ResidenteCrearPerfil1-1/svg-9j2hvqeju1";
import { ProfileConfirmationModal } from "../app/components/ProfileConfirmationModal";
import { ROUTES } from "../routes/paths";

function Container2() {
  return (
    <div className="h-[28.75px] relative shrink-0 w-[30px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 28.75">
        <g id="Container">
          <path d={svgPaths.p17161d00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 64, 223) 0%, rgb(45, 91, 255) 100%)" }} data-name="Background">
      <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-0 rounded-[48px] shadow-[0px_10px_15px_-3px_rgba(0,64,223,0.2),0px_4px_6px_-4px_rgba(0,64,223,0.2)] size-[48px] top-1/2" data-name="Overlay+Shadow" />
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1c2e] text-[30px] tracking-[-0.75px] whitespace-nowrap">
        <p className="leading-[36px]">ComuniApp</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative self-stretch shrink-0" data-name="Container">
      <Background />
      <Container3 />
    </div>
  );
}

function LogoAnchor() {
  return (
    <div className="content-stretch flex h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Logo Anchor">
      <Container1 />
    </div>
  );
}

function GenericAvatar() {
  return (
    <div className="h-[107px] relative shrink-0 w-[110px]" data-name="Generic avatar">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 107">
        <g id="Generic avatar">
          <rect fill="var(--fill-0, #CBD5E1)" height="107" rx="53.5" width="110" />
          <g id="Avatar Placeholder">
            <path clipRule="evenodd" d={svgPaths.p2afb0e80} fill="var(--fill-0, #434656)" fillRule="evenodd" />
            <path d={svgPaths.p8d41100} fill="var(--fill-0, #434656)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center justify-center relative size-full">
        <GenericAvatar />
        <div className="h-[20px] relative shrink-0 w-full" />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[43px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[24px] text-black text-center w-[min-content]">
          <p className="leading-[20px]">Crea tu perfil</p>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[14px] text-center w-full max-w-[366px]">
          <p className="leading-[20px]">Por favor introduzca los siguientes datos para completar su perfil</p>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1c2e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Nombres</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#eff4ff] relative rounded-[32px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[24px] py-[16px] relative size-full">
          <input type="text" className="bg-transparent outline-none w-full text-[16px] text-[#0d1c2e] placeholder:text-[rgba(116,118,136,0.6)]" />
        </div>
      </div>
    </div>
  );
}

function EmailField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Email Field">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1c2e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Apellidos</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#eff4ff] relative rounded-[32px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[24px] py-[16px] relative size-full">
          <input type="text" className="bg-transparent outline-none w-full text-[16px] text-[#0d1c2e] placeholder:text-[rgba(116,118,136,0.6)]" />
        </div>
      </div>
    </div>
  );
}

function EmailField1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Email Field">
      <Label1 />
      <Input1 />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#eff4ff] relative rounded-[32px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[24px] py-[16px] relative size-full">
          <input type="tel" className="bg-transparent outline-none w-full text-[16px] text-[#0d1c2e] placeholder:text-[rgba(116,118,136,0.6)]" />
        </div>
      </div>
    </div>
  );
}

function PasswordField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Password Field">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1c2e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Celular</p>
      </div>
      <Input2 />
    </div>
  );
}

function ButtonPrimaryLoginAction({ onContinue }: { onContinue: () => void }) {
  return (
    <button type="button" onClick={onContinue} className="bg-gradient-to-r cursor-pointer content-stretch flex from-[#0040df] items-center justify-center py-[16px] relative rounded-[9999px] shrink-0 to-[#2d5bff] w-full border-none outline-none" data-name="Button - Primary Login Action">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,64,223,0.2),0px_4px_6px_-4px_rgba(0,64,223,0.2)]" data-name="Button - Primary Login Action:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Continuar</p>
      </div>
    </button>
  );
}

function Form({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[31px] items-start relative size-full">
        <EmailField />
        <EmailField1 />
        <PasswordField />
        <ButtonPrimaryLoginAction onContinue={onContinue} />
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="relative shrink-0 w-full" data-name="Divider">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pt-[8px] relative size-full">
        <div className="flex-[1_0_0] h-px min-w-px relative" data-name="Horizontal Divider">
          <div aria-hidden className="absolute border-0 border-[rgba(196,197,217,0.2)] border-solid inset-0 pointer-events-none" />
        </div>
        <div className="flex-[1_0_0] h-px min-w-px relative" data-name="Horizontal Divider">
          <div aria-hidden className="absolute border-0 border-[rgba(196,197,217,0.2)] border-solid inset-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

function LoginCard({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="bg-white drop-shadow-[0px_20px_20px_rgba(13,28,46,0.06)] relative rounded-[48px] shrink-0 w-full" data-name="Login Card">
      <div aria-hidden className="absolute border border-[rgba(196,197,217,0.1)] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[49px] pt-[41px] px-[24px] sm:px-[41px] relative size-full">
        <Container4 />
        <Form onContinue={onContinue} />
        <Divider />
      </div>
    </div>
  );
}

function TrustBadges() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center opacity-40 relative shrink-0 w-full h-[30px]" data-name="Trust Badges">
      <div aria-hidden className="absolute bg-white inset-0 mix-blend-saturation pointer-events-none" />
      {/* We had empty trust badges in the source snippet, they are just spacers but lets omit them if they are just divs or implement them roughly as the login page */}
    </div>
  );
}

function Container({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start w-full max-w-[448px] relative shrink-0" data-name="Container">
      <LogoAnchor />
      <LoginCard onContinue={onContinue} />
      <TrustBadges />
    </div>
  );
}

function MainTopAppBarSuppressedForLoginJourneyAsPerSemanticShellMandate({
  onContinue,
}: {
  onContinue: () => void;
}) {
  return (
    <div className="relative shrink-0 w-full flex-grow z-[2] min-h-[calc(100vh-152px)] flex flex-col justify-center" data-name="Main - TopAppBar Suppressed for Login Journey as per Semantic Shell Mandate">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[24px] relative size-full">
           <div className="absolute bg-[#e6eeff] blur-[60px] bottom-1/2 left-[-5%] opacity-60 right-[65%] rounded-[9999px] top-[-10%]" data-name="Minimalist Background Decoration" />
          <Container onContinue={onContinue} />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#0d1c2e] text-[20px]">
        <p className="leading-[28px]">ComuniApp</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[14px] text-[rgba(13,28,46,0.7)]">
        <p className="leading-[20px]">© 2024 ComuniApp. Cultivando el comercio comunitario.</p>
      </div>
    </div>
  );
}

function PrivacyFooterLink() {
  return (
    <RouterLink to={ROUTES.privacy} className="content-stretch flex flex-col items-start relative self-stretch shrink-0 no-underline" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] hover:text-[#0040df] text-[14px] whitespace-nowrap transition-colors">
        <p className="leading-[20px]">Política de privacidad</p>
      </div>
    </RouterLink>
  );
}

function HelpFooterLink() {
  return (
    <RouterLink to={ROUTES.help} className="content-stretch flex flex-col items-start relative self-stretch shrink-0 no-underline" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] hover:text-[#0040df] text-[14px] whitespace-nowrap transition-colors">
        <p className="leading-[20px]">Centro de ayuda</p>
      </div>
    </RouterLink>
  );
}

function ContactFooterLink() {
  return (
    <RouterLink to={ROUTES.contact} className="content-stretch flex flex-col items-start relative self-stretch shrink-0 no-underline" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] hover:text-[#0040df] text-[14px] whitespace-nowrap transition-colors">
        <p className="leading-[20px]">Contáctenos</p>
      </div>
    </RouterLink>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 flex-wrap" data-name="Nav">
      <PrivacyFooterLink />
      <HelpFooterLink />
      <ContactFooterLink />
    </div>
  );
}

function FooterComponentExecution() {
  return (
    <div className="bg-[#eff4ff] relative shrink-0 w-full flex justify-center" data-name="Footer Component Execution">
      <div className="flex flex-row items-center max-w-[1280px] w-full size-full">
        <div className="content-stretch flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-between px-[32px] py-[48px] relative size-full">
          <Paragraph />
          <Nav />
        </div>
      </div>
    </div>
  );
}

function FooterComponentExecutionMargin() {
  return (
    <div className="content-stretch flex flex-col items-start mt-auto relative shrink-0 w-full z-[1]" data-name="Footer Component Execution:margin">
      <FooterComponentExecution />
    </div>
  );
}

export default function ResidenteCrearPerfil() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <div className="content-stretch flex flex-col min-h-screen isolate items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 249, 255) 0%, rgb(248, 249, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="RESIDENTE CREAR PERFIL 1">
      <MainTopAppBarSuppressedForLoginJourneyAsPerSemanticShellMandate onContinue={() => setShowSuccessModal(true)} />
      <FooterComponentExecutionMargin />
      {showSuccessModal && (
        <ProfileConfirmationModal
          message="Sus datos se han registrado satisfactoriamente"
          homePath="/login"
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </div>
  );
}
