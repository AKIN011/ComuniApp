import svgPaths from "./svg-gqf54d49lq";

function Frame() {
  return <div className="h-[32px] relative shrink-0 w-0" />;
}

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

function Container5() {
  return <div className="h-[20px] relative shrink-0 w-full" data-name="Container" />;
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center justify-center relative size-full">
        <GenericAvatar />
        <Container5 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[43px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[24px] text-black text-center w-[min-content]">
          <p className="leading-[20px]">Editar tu perfil</p>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[14px] text-center w-[366px]">
          <p className="leading-[20px]">Por favor introduzca los siguientes datos para completar su perfil</p>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[362px]" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1c2e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Nombres</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[20px]">Camilo Andrés</p>
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

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input />
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[362px]" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1c2e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Apellidos</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[20px]">Torres Cárdenas</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#eff4ff] relative rounded-[32px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[48px] pr-[16px] py-[16px] relative size-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input1 />
    </div>
  );
}

function EmailField1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full" data-name="Email Field">
      <Label1 />
      <Container8 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[20px]">3005056031</p>
      </div>
    </div>
  );
}

function Input2() {
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

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input2 />
    </div>
  );
}

function PasswordField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Password Field">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1c2e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Celular</p>
      </div>
      <Container10 />
    </div>
  );
}

function Form() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[31px] items-start relative size-full">
        <EmailField />
        <EmailField1 />
        <PasswordField />
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

function LoginCard() {
  return (
    <div className="bg-white drop-shadow-[0px_20px_20px_rgba(13,28,46,0.06)] h-[787px] relative rounded-[48px] shrink-0 w-full" data-name="Login Card">
      <div aria-hidden className="absolute border border-[rgba(196,197,217,0.1)] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[49px] pt-[41px] px-[41px] relative size-full">
        <Container4 />
        <Form />
        <Divider />
      </div>
    </div>
  );
}

function Container12() {
  return <div className="h-[30px] relative shrink-0 w-[24px]" data-name="Container" />;
}

function Container13() {
  return <div className="h-[24px] relative shrink-0 w-[33px]" data-name="Container" />;
}

function TrustBadges() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center opacity-40 relative shrink-0 w-full" data-name="Trust Badges">
      <div aria-hidden className="absolute bg-white inset-0 mix-blend-saturation pointer-events-none" />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[975px] items-start pt-[50px] relative shrink-0 w-[449px]" data-name="Container">
      <LogoAnchor />
      <LoginCard />
      <TrustBadges />
    </div>
  );
}

function MainTopAppBarSuppressedForLoginJourneyAsPerSemanticShellMandate() {
  return (
    <div className="h-[975px] relative shrink-0 w-full z-[2]" data-name="Main - TopAppBar Suppressed for Login Journey as per Semantic Shell Mandate">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[24px] relative size-full">
          <Frame />
          <Container />
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

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Política de privacidad</p>
      </div>
    </div>
  );
}

function Link1() {
  return <div className="relative self-stretch shrink-0 w-[112px]" data-name="Link" />;
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Centro de ayuda</p>
      </div>
    </div>
  );
}

function Link3() {
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
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function FooterComponentExecution() {
  return (
    <div className="bg-[#eff4ff] max-w-[1280px] relative shrink-0 w-full" data-name="Footer Component Execution">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[32px] py-[48px] relative size-full">
          <Paragraph />
          <Nav />
        </div>
      </div>
    </div>
  );
}

function FooterComponentExecutionMargin() {
  return (
    <div className="content-stretch flex flex-col h-[152px] items-start relative shrink-0 w-full z-[1]" data-name="Footer Component Execution:margin">
      <FooterComponentExecution />
    </div>
  );
}

export default function ResidenteEditarPerfil() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 249, 255) 0%, rgb(248, 249, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="RESIDENTE EDITAR PERFIL 1">
      <MainTopAppBarSuppressedForLoginJourneyAsPerSemanticShellMandate />
      <FooterComponentExecutionMargin />
    </div>
  );
}