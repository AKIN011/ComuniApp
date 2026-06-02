import svgPaths from "./svg-e44tleatyp";

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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[362px]" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1c2e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Dirección de correo electrónico</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(116,118,136,0.6)] w-full">
        <p className="leading-[normal]">name@company.com</p>
      </div>
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
    <div className="absolute bottom-[26.92%] content-stretch flex flex-col items-start left-[16px] top-[26.92%]" data-name="Container">
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
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full" data-name="Email Field">
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

function Link() {
  return <div className="h-[16px] relative shrink-0 w-[152px]" data-name="Link" />;
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[4px] relative size-full">
          <Label1 />
          <Link />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(116,118,136,0.6)] w-full">
        <p className="leading-[normal]">••••••••</p>
      </div>
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
    <div className="absolute bottom-[26.92%] content-stretch flex flex-col items-start left-[16px] top-[26.92%]" data-name="Container">
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
    <div className="absolute bottom-[37.75%] content-stretch flex flex-col items-center justify-center right-[16px] top-[37.75%]" data-name="Button">
      <Container13 />
    </div>
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

function ButtonPrimaryLoginAction() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#0040df] items-center justify-center py-[16px] relative rounded-[9999px] shrink-0 to-[#2d5bff] w-full" data-name="Button - Primary Login Action">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,64,223,0.2),0px_4px_6px_-4px_rgba(0,64,223,0.2)]" data-name="Button - Primary Login Action:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Regístrate</p>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <EmailField />
        <PasswordField />
        <ButtonPrimaryLoginAction />
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
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#0040df]">
        <p className="leading-[20px]">Incia Sesión</p>
      </div>
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

function Button1() {
  return (
    <div className="bg-[#ffddb8] opacity-60 relative rounded-[32px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-center px-[16px] py-[14px] relative size-full">
          <Container15 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2a1700] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[24px]">Únete como emprendedor</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(196,197,217,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Container14 />
      <Button1 />
    </div>
  );
}

function SecondaryActions() {
  return (
    <div className="relative shrink-0 w-full" data-name="Secondary Actions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pt-[8px] relative size-full">
        <Paragraph />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function LoginCard() {
  return (
    <div className="bg-white drop-shadow-[0px_20px_20px_rgba(13,28,46,0.06)] relative rounded-[48px] shrink-0 w-full" data-name="Login Card">
      <div aria-hidden className="absolute border border-[rgba(196,197,217,0.1)] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[49px] pt-[41px] px-[41px] relative size-full">
        <Container4 />
        <Form />
        <Divider />
        <SecondaryActions />
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

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[448px] relative shrink-0 w-[448px]" data-name="Container">
      <LogoAnchor />
      <LoginCard />
      <TrustBadges />
    </div>
  );
}

function MainTopAppBarSuppressedForLoginJourneyAsPerSemanticShellMandate() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Main - TopAppBar Suppressed for Login Journey as per Semantic Shell Mandate">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[24px] relative size-full">
          <div className="absolute bg-[#e6eeff] blur-[60px] bottom-1/2 left-[-5%] opacity-60 right-[65%] rounded-[9999px] top-[-10%]" data-name="Minimalist Background Decoration" />
          <Container />
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
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Política de privacidad</p>
      </div>
    </div>
  );
}

function Link2() {
  return <div className="relative self-stretch shrink-0 w-[112px]" data-name="Link" />;
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Centro de ayuda</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Contáctenos</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[24px] h-[20px] items-start relative shrink-0" data-name="Nav">
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function FooterComponentExecution() {
  return (
    <div className="bg-[#eff4ff] max-w-[1280px] relative shrink-0 w-full" data-name="Footer Component Execution">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[32px] py-[48px] relative size-full">
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
  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 249, 255) 0%, rgb(248, 249, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="RESIDENTE REGISTRO 1">
      <MainTopAppBarSuppressedForLoginJourneyAsPerSemanticShellMandate />
      <FooterComponentExecutionMargin />
    </div>
  );
}