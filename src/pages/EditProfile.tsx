import { useNavigate } from "react-router";
import { FormEvent } from "react";
import svgPaths from "../imports/ResidenteEditarPerfil1/svg-gqf54d49lq";

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

function LogoAnchor() {
  return (
    <div className="content-stretch flex h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Logo Anchor">
      <div className="content-stretch flex gap-[12px] items-center relative self-stretch shrink-0" data-name="Container">
        <Background />
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1c2e] text-[30px] tracking-[-0.75px] whitespace-nowrap">
            <p className="leading-[36px]">ComuniApp</p>
          </div>
        </div>
      </div>
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

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center justify-center relative size-full">
        <GenericAvatar />
        <div className="h-[20px] relative shrink-0 w-full" data-name="Container" />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[43px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[24px] text-black text-center w-[min-content]">
          <h1 className="leading-[20px]">Editar tu perfil</h1>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[14px] text-center w-[366px] max-w-full">
          <p className="leading-[20px]">Por favor introduzca los siguientes datos para completar su perfil</p>
        </div>
      </div>
    </div>
  );
}

function Form() {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate("/perfil/editar/exito");
  };

  return (
    <form onSubmit={handleSubmit} className="relative shrink-0 w-full" data-name="Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[31px] items-start relative size-full">
        
        {/* Nombres Field */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Nombres Field">
          <label className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1c2e] text-[14px] whitespace-nowrap">
            <span className="leading-[20px]">Nombres</span>
          </label>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <input 
              type="text" 
              defaultValue="Camilo Andrés"
              required
              className="bg-[#eff4ff] relative rounded-[32px] shrink-0 w-full px-[48px] py-[16px] font-['Inter:Regular',sans-serif] font-normal text-[14px] text-black outline-none focus:ring-2 focus:ring-[#0040df]" 
            />
          </div>
        </div>

        {/* Apellidos Field */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Apellidos Field">
          <label className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1c2e] text-[14px] whitespace-nowrap">
            <span className="leading-[20px]">Apellidos</span>
          </label>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <input 
              type="text" 
              defaultValue="Torres Cárdenas"
              required
              className="bg-[#eff4ff] relative rounded-[32px] shrink-0 w-full px-[48px] py-[16px] font-['Inter:Regular',sans-serif] font-normal text-[14px] text-black outline-none focus:ring-2 focus:ring-[#0040df]" 
            />
          </div>
        </div>

        {/* Celular Field */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Celular Field">
          <label className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1c2e] text-[14px] whitespace-nowrap">
            <span className="leading-[20px]">Celular</span>
          </label>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <input 
              type="tel" 
              defaultValue="3005056031"
              required
              className="bg-[#eff4ff] relative rounded-[32px] shrink-0 w-full px-[48px] py-[16px] font-['Inter:Regular',sans-serif] font-normal text-[14px] text-black outline-none focus:ring-2 focus:ring-[#0040df]" 
            />
          </div>
        </div>

        {/* Action Button */}
        <button 
          type="submit" 
          className="bg-gradient-to-r content-stretch flex from-[#0040df] items-center justify-center py-[16px] rounded-[9999px] to-[#2d5bff] w-full mt-[16px] cursor-pointer hover:opacity-90 transition-opacity"
        >
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,64,223,0.2),0px_4px_6px_-4px_rgba(0,64,223,0.2)]" />
          <span className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
            Guardar cambios
          </span>
        </button>
      </div>
    </form>
  );
}

function Divider() {
  return (
    <div className="relative shrink-0 w-full" data-name="Divider">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pt-[8px] relative size-full">
        <div className="flex-[1_0_0] h-px min-w-px relative bg-[rgba(196,197,217,0.2)]" data-name="Horizontal Divider" />
        <div className="flex-[1_0_0] h-px min-w-px relative bg-[rgba(196,197,217,0.2)]" data-name="Horizontal Divider" />
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="bg-[#eff4ff] relative shrink-0 w-full mt-auto flex justify-center" data-name="Footer Component Execution">
      <div className="flex flex-row items-center w-full max-w-[1280px]">
        <div className="content-stretch flex items-center justify-between px-[32px] py-[48px] relative size-full flex-wrap gap-8">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-name="Paragraph">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#0d1c2e] text-[20px]">
              <p className="leading-[28px]">ComuniApp</p>
            </div>
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[14px] text-[rgba(13,28,46,0.7)]">
              <p className="leading-[20px]">© 2024 ComuniApp. Cultivando el comercio comunitario.</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0 flex-wrap" data-name="Nav">
            <a href="#" className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] hover:text-[#0040df] whitespace-nowrap">
              <span className="leading-[20px]">Política de privacidad</span>
            </a>
            <a href="#" className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] hover:text-[#0040df] whitespace-nowrap">
              <span className="leading-[20px]">Centro de ayuda</span>
            </a>
            <a href="#" className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] hover:text-[#0040df] whitespace-nowrap">
              <span className="leading-[20px]">Contáctenos</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EditProfile() {
  return (
    <div className="flex flex-col min-h-screen relative w-full overflow-x-hidden" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 249, 255) 0%, rgb(248, 249, 255) 100%)" }}>
      <div className="flex-1 flex flex-col items-center justify-start p-[24px] sm:p-[40px] pt-[50px] relative w-full z-[2]">
        <div className="content-stretch flex flex-col gap-[40px] items-center relative w-full max-w-[449px]">
          <LogoAnchor />
          
          <div className="bg-white drop-shadow-[0px_20px_20px_rgba(13,28,46,0.06)] relative rounded-[48px] shrink-0 w-full" data-name="Login Card">
            <div aria-hidden className="absolute border border-[rgba(196,197,217,0.1)] border-solid inset-0 pointer-events-none rounded-[48px]" />
            <div className="content-stretch flex flex-col gap-[32px] items-start pb-[49px] pt-[41px] px-[24px] sm:px-[41px] relative size-full">
              <Header />
              <Form />
              <Divider />
            </div>
          </div>
          
          <div className="h-[24px]" />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
