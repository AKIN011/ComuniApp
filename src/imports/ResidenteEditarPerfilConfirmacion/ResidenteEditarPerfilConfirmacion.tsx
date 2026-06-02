import svgPaths from "./svg-mxaihcjp9x";
import imgImage1 from "./fa7a8e1d694aa7ed6fca32167dbe5b8aed0bfc6a.png";

function Frame() {
  return <div className="h-[32px] relative shrink-0 w-0" />;
}

function Frame1() {
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

function ButtonPrimaryLoginAction() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#0040df] items-center justify-center left-[22px] py-[16px] rounded-[9999px] to-[#2d5bff] top-[458px] w-[367px]" data-name="Button - Primary Login Action">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,64,223,0.2),0px_4px_6px_-4px_rgba(0,64,223,0.2)]" data-name="Button - Primary Login Action:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Ir al Home</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white h-[726px] overflow-clip relative rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[409px]" data-name="Container">
      <div className="absolute left-[155px] size-[99px] top-[142px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[43px] justify-center leading-[0] left-[205px] not-italic text-[20px] text-black text-center top-[341.5px] w-[310px]">
        <p className="leading-[25px]">Sus datos se han actualizado satisfactoriamente</p>
      </div>
      <ButtonPrimaryLoginAction />
    </div>
  );
}

function TrustBadges() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Trust Badges">
      <div aria-hidden className="absolute bg-white inset-0 mix-blend-saturation pointer-events-none" />
      <Container4 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[975px] items-start pt-[50px] relative shrink-0 w-[449px]" data-name="Container">
      <LogoAnchor />
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
          <Frame1 />
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

export default function ResidenteEditarPerfilConfirmacion() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 249, 255) 0%, rgb(248, 249, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="RESIDENTE EDITAR PERFIL CONFIRMACIÓN">
      <MainTopAppBarSuppressedForLoginJourneyAsPerSemanticShellMandate />
      <FooterComponentExecutionMargin />
    </div>
  );
}