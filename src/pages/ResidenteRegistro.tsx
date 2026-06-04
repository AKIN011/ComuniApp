import React, { useState } from "react";
import { useNavigate } from "react-router";
import svgPaths from "../imports/ResidenteRegistro1-1/svg-e44tleatyp";
import { ProfileConfirmationModal } from "../app/components/ProfileConfirmationModal";

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

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d1c2e] text-[24px] tracking-[-0.6px] w-full">
        <p className="leading-[32px]">Bienvenido de nuevo</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[14px] w-full">
        <p className="leading-[20px]">Por favor, introduzca sus datos para registrarse.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading />
        <Container5 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full md:w-[362px]" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1c2e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Dirección de correo electrónico</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <input type="email" placeholder="name@company.com" className="[word-break:break-word] bg-transparent outline-none flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[normal] not-italic relative shrink-0 text-[16px] text-[#0d1c2e] placeholder:text-[rgba(116,118,136,0.6)] w-full" />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#eff4ff] relative rounded-[32px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[48px] pr-[16px] py-[16px] relative size-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bottom-[26.92%] content-stretch flex flex-col items-start left-[16px] top-[26.92%] pointer-events-none" data-name="Container">
      <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
          <path d={svgPaths.p13e73800} fill="var(--fill-0, #747688)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <Container8 />
    </div>
  );
}

function EmailField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Email Field">
      <Label />
      <Container6 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1c2e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Contraseña</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[4px] relative size-full">
          <Label1 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <input type="password" placeholder="••••••••" className="[word-break:break-word] bg-transparent outline-none flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[normal] not-italic relative shrink-0 text-[16px] text-[#0d1c2e] placeholder:text-[rgba(116,118,136,0.6)] w-full" />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#eff4ff] relative rounded-[32px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[48px] py-[16px] relative size-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bottom-[26.92%] content-stretch flex flex-col items-start left-[16px] top-[26.92%] pointer-events-none" data-name="Container">
      <div className="h-[21px] relative shrink-0 w-[16px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 21">
          <path d={svgPaths.p12930f00} fill="var(--fill-0, #747688)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 12.5">
        <g id="Container">
          <path d={svgPaths.p2e870a60} fill="var(--fill-0, #747688)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <button type="button" className="absolute cursor-pointer bottom-[37.75%] content-stretch flex flex-col items-center justify-center right-[16px] top-[37.75%] border-none outline-none bg-transparent p-0" data-name="Button">
      <Container13 />
    </button>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input1 />
      <Container12 />
      <Button />
    </div>
  );
}

function PasswordField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Password Field">
      <Container9 />
      <Container10 />
    </div>
  );
}

function ButtonPrimaryLoginAction({ onRegister }: { onRegister: () => void }) {
  return (
    <button onClick={onRegister} type="button" className="bg-gradient-to-r cursor-pointer content-stretch flex from-[#0040df] items-center justify-center py-[16px] relative rounded-[9999px] shrink-0 to-[#2d5bff] w-full border-none outline-none" data-name="Button - Primary Login Action">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,64,223,0.2),0px_4px_6px_-4px_rgba(0,64,223,0.2)]" data-name="Button - Primary Login Action:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Regístrate</p>
      </div>
    </button>
  );
}

function Form({ onRegister }: { onRegister: () => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <EmailField />
        <PasswordField />
        <ButtonPrimaryLoginAction onRegister={onRegister} />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#c4c5d9] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">o</p>
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
        <Margin />
        <div className="flex-[1_0_0] h-px min-w-px relative" data-name="Horizontal Divider">
          <div aria-hidden className="absolute border-0 border-[rgba(196,197,217,0.2)] border-solid inset-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[4px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center w-full whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#434656]">
        <p className="leading-[20px]">¿Ya tienes una cuenta?</p>
      </div>
      <button className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#0040df] cursor-pointer bg-transparent border-none p-0 outline-none hover:underline">
        <p className="leading-[20px]">Inicia Sesión</p>
      </button>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">¿ERES PROPIETARIO DE UN NEGOCIO LOCAL?</p>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20.094px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0939 18">
        <g id="Container">
          <path d={svgPaths.p725c500} fill="var(--fill-0, #2A1700)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1({ onEmprendedor }: { onEmprendedor: () => void }) {
  return (
    <button
      type="button"
      onClick={onEmprendedor}
      className="relative w-full shrink-0 cursor-pointer rounded-[32px] border-none bg-[#ffddb8] outline-none transition-opacity hover:opacity-80"
      data-name="Button"
    >
      <div className="flex size-full flex-row items-center justify-center">
        <div className="relative flex size-full content-stretch items-center justify-center gap-[12px] border-0 border-solid border-[transparent] bg-clip-padding px-[16px] py-[14px]">
          <Container15 />
          <div className="relative flex shrink-0 flex-col justify-center [word-break:break-word] font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold not-italic leading-[0] text-[#2a1700]">
            <p className="whitespace-nowrap leading-[24px]">Únete como emprendedor</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function HorizontalBorder({ onEmprendedor }: { onEmprendedor: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(196,197,217,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Container14 />
      <Button1 onEmprendedor={onEmprendedor} />
    </div>
  );
}

function SecondaryActions({ onEmprendedor }: { onEmprendedor: () => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Secondary Actions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pt-[8px] relative size-full">
        <Paragraph />
        <HorizontalBorder onEmprendedor={onEmprendedor} />
      </div>
    </div>
  );
}

function LoginCard({
  onRegister,
  onEmprendedor,
}: {
  onRegister: () => void;
  onEmprendedor: () => void;
}) {
  return (
    <div className="bg-white drop-shadow-[0px_20px_20px_rgba(13,28,46,0.06)] relative rounded-[48px] shrink-0 w-full" data-name="Login Card">
      <div aria-hidden className="absolute border border-[rgba(196,197,217,0.1)] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[49px] pt-[41px] px-[24px] sm:px-[41px] relative size-full">
        <Container4 />
        <Form onRegister={onRegister} />
        <Divider />
        <SecondaryActions onEmprendedor={onEmprendedor} />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[30px] relative shrink-0 w-[24px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 30">
        <g id="Container">
          <path d={svgPaths.p3d5d680} fill="var(--fill-0, #0D1C2E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[30px] relative shrink-0 w-[24px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 30">
        <g id="Container">
          <path d={svgPaths.p15b21300} fill="var(--fill-0, #0D1C2E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[24px] relative shrink-0 w-[33px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 24">
        <g id="Container">
          <path d={svgPaths.p212b3d00} fill="var(--fill-0, #0D122E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function TrustBadges() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center opacity-40 relative shrink-0 w-full" data-name="Trust Badges">
      <div aria-hidden className="absolute bg-white inset-0 mix-blend-saturation pointer-events-none" />
      <Container16 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container({
  onRegister,
  onEmprendedor,
}: {
  onRegister: () => void;
  onEmprendedor: () => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start w-full max-w-[448px] relative shrink-0" data-name="Container">
      <LogoAnchor />
      <LoginCard onRegister={onRegister} onEmprendedor={onEmprendedor} />
      <TrustBadges />
    </div>
  );
}

function MainTopAppBarSuppressedForLoginJourneyAsPerSemanticShellMandate({
  onRegister,
  onEmprendedor,
}: {
  onRegister: () => void;
  onEmprendedor: () => void;
}) {
  return (
    <div className="relative shrink-0 w-full flex-grow z-[2] min-h-[calc(100vh-152px)] flex flex-col justify-center" data-name="Main - TopAppBar Suppressed for Login Journey as per Semantic Shell Mandate">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[24px] relative size-full">
           <div className="absolute bg-[#e6eeff] blur-[60px] bottom-1/2 left-[-5%] opacity-60 right-[65%] rounded-[9999px] top-[-10%]" data-name="Minimalist Background Decoration" />
          <Container onRegister={onRegister} onEmprendedor={onEmprendedor} />
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
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

function Link1() {
  return (
    <a href="#" className="content-stretch flex flex-col items-start relative self-stretch shrink-0 no-underline" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] hover:text-[#0040df] text-[14px] whitespace-nowrap transition-colors">
        <p className="leading-[20px]">Política de privacidad</p>
      </div>
    </a>
  );
}

function Link3() {
  return (
    <a href="#" className="content-stretch flex flex-col items-start relative self-stretch shrink-0 no-underline" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] hover:text-[#0040df] text-[14px] whitespace-nowrap transition-colors">
        <p className="leading-[20px]">Centro de ayuda</p>
      </div>
    </a>
  );
}

function Link4() {
  return (
    <a href="#" className="content-stretch flex flex-col items-start relative self-stretch shrink-0 no-underline" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] hover:text-[#0040df] text-[14px] whitespace-nowrap transition-colors">
        <p className="leading-[20px]">Contáctenos</p>
      </div>
    </a>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 flex-wrap" data-name="Nav">
      <Link1 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function FooterComponentExecution() {
  return (
    <div className="bg-[#eff4ff] relative shrink-0 w-full flex justify-center" data-name="Footer Component Execution">
      <div className="flex flex-row items-center max-w-[1280px] w-full size-full">
        <div className="content-stretch flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-between px-[32px] py-[48px] relative size-full">
          <Paragraph1 />
          <Nav />
        </div>
      </div>
    </div>
  );
}

function FooterComponentExecutionMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[80px] relative shrink-0 w-full z-[1]" data-name="Footer Component Execution:margin">
      <FooterComponentExecution />
    </div>
  );
}

export default function ResidenteRegistro() {
  const navigate = useNavigate();
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  const handleRegister = () => {
    setShowWelcomeModal(true);
  };

  const continueToProfile = () => {
    setShowWelcomeModal(false);
    navigate("/registro/crear-perfil");
  };

  const goToEmprendedorRegistro = () => {
    navigate("/registro/emprendedor");
  };

  return (
    <div className="content-stretch flex flex-col min-h-screen isolate items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 249, 255) 0%, rgb(248, 249, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="RESIDENTE REGISTRO 1">
      <MainTopAppBarSuppressedForLoginJourneyAsPerSemanticShellMandate
        onRegister={handleRegister}
        onEmprendedor={goToEmprendedorRegistro}
      />
      <FooterComponentExecutionMargin />
      {showWelcomeModal && (
        <ProfileConfirmationModal
          message="¡Bienvenido! Continúa para completar tu perfil en ComuniApp."
          homePath="/registro/crear-perfil"
          onClose={continueToProfile}
        />
      )}
    </div>
  );
}
