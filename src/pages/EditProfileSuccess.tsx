import { useNavigate } from "react-router";
import { ImageWithFallback } from "../app/components/figma/ImageWithFallback";
import { Footer } from "./EditProfile";
import svgPaths from "../imports/ResidenteEditarPerfil1/svg-gqf54d49lq";
import successImage from "../assets/fa7a8e1d694aa7ed6fca32167dbe5b8aed0bfc6a.png";

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
    <div
      className="content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(0, 64, 223) 0%, rgb(45, 91, 255) 100%)",
      }}
      data-name="Background"
    >
      <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-0 rounded-[48px] shadow-[0px_10px_15px_-3px_rgba(0,64,223,0.2),0px_4px_6px_-4px_rgba(0,64,223,0.2)] size-[48px] top-1/2" />
      <Container2 />
    </div>
  );
}

function LogoAnchor() {
  return (
    <div className="content-stretch flex h-[48px] items-start justify-center relative shrink-0 w-full">
      <div className="content-stretch flex gap-[12px] items-center relative self-stretch shrink-0">
        <Background />
        <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[30px] text-[#0d1c2e] tracking-[-0.75px]">
          ComuniApp
        </div>
      </div>
    </div>
  );
}

function SuccessCard() {
  const navigate = useNavigate();

  return (
    <div className="bg-white relative rounded-[48px] shadow-[0px_20px_20px_0px_rgba(13,28,46,0.06)] shrink-0 w-full max-w-[449px] flex flex-col items-center pt-[80px] px-[41px] pb-[49px]">
      <div className="size-[99px] relative shrink-0 mb-10">
        <ImageWithFallback
          src={successImage}
          alt="Éxito"
          className="absolute inset-0 size-full object-cover"
        />
      </div>

      <p className="text-center font-['Inter:Medium',sans-serif] text-[20px] leading-[25px] text-black max-w-[310px]">
        Sus datos se han actualizado satisfactoriamente
      </p>

      <button
        type="button"
        onClick={() => navigate("/dashboard")}
        className="relative mt-16 flex w-full cursor-pointer items-center justify-center rounded-[9999px] bg-gradient-to-r from-[#0040df] to-[#2d5bff] py-4 font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold text-white transition-opacity hover:opacity-90"
      >
        Ir al Home
      </button>
    </div>
  );
}

export function EditProfileSuccess() {
  return (
    <div
      className="flex flex-col min-h-screen relative w-full overflow-x-hidden"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(248, 249, 255) 0%, rgb(248, 249, 255) 100%)",
      }}
    >
      <div className="flex-1 flex flex-col items-center justify-start p-[24px] sm:p-[40px] pt-[50px] relative w-full z-[2]">
        <div className="content-stretch flex flex-col gap-[40px] items-center relative w-full max-w-[449px]">
          <LogoAnchor />
          <SuccessCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}
