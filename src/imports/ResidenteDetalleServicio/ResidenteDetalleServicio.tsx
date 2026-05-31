import { Link as RouterLink } from "react-router";
import svgPaths from "./svg-8sbuc1fnlk";
import imgHandcraftedPottery from "./6c8699e3c8701a44c5c90888bc4145973ee56f7b.png";
import imgReviewer from "./e14c27901ffe1c2d223fe0361236965d6668c715.png";
import imgReviewer1 from "./4dc5c5e28ab1baa90f57ae5df844e760846c6324.png";
import imgImage1 from "./ba6a59c2b8300362d902469a74f672f0090965ac.png";
import imgImgComuniapp1 from "./750d044d80bea8de1a424690f1cb1468881a64ef.png";

function HandcraftedPottery() {
  return (
    <div className="h-[450px] relative shrink-0 w-full" data-name="Handcrafted pottery">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-[-1.42%] max-w-none size-[111.68%] top-[-3.01%]" src={imgHandcraftedPottery} />
      </div>
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start overflow-clip relative rounded-[48px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Overlay+Shadow">
      <HandcraftedPottery />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#996100] content-stretch flex flex-col items-start px-[16px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fed] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">{`sERVICIOS `}</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <div className="absolute inset-[-72.18%_-68.57%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.6667 27.0833">
          <g id="Container">
            <g filter="url(#filter0_d_1_208)" id="Icon">
              <path d={svgPaths.pf09f400} fill="var(--fill-0, #784B00)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="27.0833" id="filter0_d_1_208" width="27.6667" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0 0 0 0 0.3 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_208" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_208" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#784b00] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">4.9</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">(128 reseñas)</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Background />
      <Container1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#0d1c2e] text-[48px] tracking-[-1.2px] w-full">
        <p className="leading-[48px]">Electricista especializado 24/7</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[18px] w-full">
        <p className="leading-[29.25px] mb-0">Brinda soluciones eléctricas confiables y seguras para tu hogar o negocio. Con amplia experiencia en instalaciones, mantenimiento y reparación de sistemas eléctricos, cada trabajo se realiza con atención al detalle y cumpliendo normas de seguridad.</p>
        <p className="leading-[29.25px]">{`Desde arreglos rápidos hasta instalaciones completas, el servicio está disponible 24/7 para atender emergencias o proyectos programados. `}</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[18px] w-full">
        <p className="leading-[29.25px]">Se garantiza un diagnóstico claro, materiales de calidad y un trabajo bien hecho desde la primera visita. Ideal para quienes buscan confianza, rapidez y resultados duraderos en su comunidad.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[221px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[901px] items-start relative shrink-0 w-[782px]" data-name="Hero Section">
      <OverlayShadow />
      <Container />
      <Heading />
      <Container5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex h-[1020px] items-center left-[70px] top-[90px] w-[829px]">
      <HeroSection />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d1c2e] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Reseñas de la comunidad</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Escucha a 128 vecinos que aman este servicio.</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[355px]" data-name="Container">
      <Heading1 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p2cbc1080} fill="var(--fill-0, #0040DF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0040df] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Escribir una reseña</p>
      </div>
      <Container11 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-[814px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative size-full">
        <Container9 />
        <Button />
      </div>
    </div>
  );
}

function Reviewer() {
  return (
    <div className="max-w-[48px] relative shrink-0 size-[48px]" data-name="Reviewer">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgReviewer} />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[9999px] shrink-0 size-[48px]" data-name="Container">
      <Reviewer />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1c2e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Santiago Romero</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Residente • hace 2 días</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[135px]" data-name="Container">
      <Heading2 />
      <Container17 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <div className="absolute inset-[-42.11%_-40%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 35">
            <g filter="url(#filter0_d_1_200)" id="Icon">
              <path d={svgPaths.p16bc4c00} fill="var(--fill-0, #784B00)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="35" id="filter0_d_1_200" width="36" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0 0 0 0 0.3 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_200" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_200" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <div className="absolute inset-[-42.11%_-40%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 35">
            <g filter="url(#filter0_d_1_200)" id="Icon">
              <path d={svgPaths.p16bc4c00} fill="var(--fill-0, #784B00)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="35" id="filter0_d_1_200" width="36" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0 0 0 0 0.3 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_200" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_200" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <div className="absolute inset-[-42.11%_-40%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 35">
            <g filter="url(#filter0_d_1_200)" id="Icon">
              <path d={svgPaths.p16bc4c00} fill="var(--fill-0, #784B00)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="35" id="filter0_d_1_200" width="36" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0 0 0 0 0.3 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_200" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_200" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <div className="absolute inset-[-42.11%_-40%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 35">
            <g filter="url(#filter0_d_1_200)" id="Icon">
              <path d={svgPaths.p16bc4c00} fill="var(--fill-0, #784B00)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="35" id="filter0_d_1_200" width="36" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0 0 0 0 0.3 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_200" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_200" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <div className="absolute inset-[-42.11%_-40%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 35">
            <g filter="url(#filter0_d_1_200)" id="Icon">
              <path d={svgPaths.p16bc4c00} fill="var(--fill-0, #784B00)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="35" id="filter0_d_1_200" width="36" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0 0 0 0 0.3 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_200" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_200" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[19px] items-start relative shrink-0" data-name="Container">
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container18 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[16px] w-full">
        <p className="leading-[26px]">Muy buen servicio. Llegó puntual, encontró el daño rápido y dejó todo funcionando perfecto. Se nota que sabe lo que hace</p>
      </div>
    </div>
  );
}

function ReviewItem() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[32px] shrink-0 w-full" data-name="Review Item 1">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[32px] relative size-full">
        <Container13 />
        <Container24 />
      </div>
    </div>
  );
}

function Reviewer1() {
  return (
    <div className="max-w-[48px] relative shrink-0 size-[48px]" data-name="Reviewer">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgReviewer1} />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[9999px] shrink-0 size-[48px]" data-name="Container">
      <Reviewer1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d1c2e] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Victor Mora</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[12px] whitespace-nowrap">
        <p className="leading-[16px] whitespace-pre">{`Residente  • hace 1 semana`}</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[158px]" data-name="Container">
      <Heading3 />
      <Container29 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <div className="absolute inset-[-42.11%_-40%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 35">
            <g filter="url(#filter0_d_1_200)" id="Icon">
              <path d={svgPaths.p16bc4c00} fill="var(--fill-0, #784B00)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="35" id="filter0_d_1_200" width="36" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0 0 0 0 0.3 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_200" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_200" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <div className="absolute inset-[-42.11%_-40%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 35">
            <g filter="url(#filter0_d_1_200)" id="Icon">
              <path d={svgPaths.p16bc4c00} fill="var(--fill-0, #784B00)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="35" id="filter0_d_1_200" width="36" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0 0 0 0 0.3 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_200" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_200" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <div className="absolute inset-[-42.11%_-40%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 35">
            <g filter="url(#filter0_d_1_200)" id="Icon">
              <path d={svgPaths.p16bc4c00} fill="var(--fill-0, #784B00)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="35" id="filter0_d_1_200" width="36" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0 0 0 0 0.3 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_200" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_200" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <div className="absolute inset-[-42.11%_-40%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 35">
            <g filter="url(#filter0_d_1_200)" id="Icon">
              <path d={svgPaths.p16bc4c00} fill="var(--fill-0, #784B00)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="35" id="filter0_d_1_200" width="36" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.380392 0 0 0 0 0 0 0 0 0.3 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_200" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_200" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p3e30af00} fill="var(--fill-0, #C4C5D9)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[19px] items-start relative shrink-0" data-name="Container">
      <Container31 />
      <Container32 />
      <Container33 />
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container30 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[16px] w-full">
        <p className="leading-[26px]">Excelente atención. Me explicó todo antes de arreglarlo y no cobró de más. Quedé tranquilo con el trabajo, lo recomiendo.</p>
      </div>
    </div>
  );
}

function ReviewItem1() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[32px] shrink-0 w-full" data-name="Review Item 2">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[32px] relative size-full">
        <Container25 />
        <Container36 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start pt-[8px] relative size-full">
        <ReviewItem />
        <ReviewItem1 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[33px] py-[13px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#c4c5d9] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#434656] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Cargar más reseñas</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Button1 />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[32px] items-start pt-[33px] right-[388px] top-[calc(50%+484px)] w-[814px]" data-name>
      <div aria-hidden className="absolute border-[rgba(196,197,217,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <Container8 />
      <Container12 />
      <Container37 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[19.84px] pr-[19.86px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#434656] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px] mb-0 whitespace-pre">{`Llevando energía a todos los hogares `}</p>
        <p className="leading-[20px] whitespace-pre">de la comunidad</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[8px] top-[160px]" data-name="Margin">
      <Container38 />
    </div>
  );
}

function Component2() {
  return (
    <div className="h-[208px] relative shrink-0 w-full" data-name>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[calc(50%-0.47px)] text-[#0d1c2e] text-[20px] text-center top-[126px] whitespace-nowrap">
        <p className="leading-[28px]">Juan DIego Moreno</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[calc(50%+0.12px)] not-italic text-[#006c49] text-[14px] text-center top-[150px] whitespace-nowrap">
        <p className="leading-[20px]">Técnico Verificado</p>
      </div>
      <Margin />
      <div className="absolute left-[94px] size-[126px] top-[-22px]" data-name="image 1">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage1} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage1} />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p1869180} fill="var(--fill-0, #0040DF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0d1c2e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] whitespace-pre">{`CR 35 #12 -10,  El Remanso`}</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[20px] relative shrink-0 w-[229px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center relative size-full">
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col h-[82px] items-center pt-[33px] relative shrink-0 w-full" data-name>
      <div aria-hidden className="absolute border-[rgba(196,197,217,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <Container39 />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p13e73800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#2d5bff] content-stretch flex gap-[7.99px] items-center justify-center py-[16px] relative rounded-[9999px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.33px_0_0] rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <Container42 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">¡Contactar!</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name>
      <Button2 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p2b729200} fill="var(--fill-0, #747688)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#e6eeff] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Link">
      <Container43 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[17px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
        <g id="Container">
          <path d={svgPaths.p399f9f00} fill="var(--fill-0, #747688)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#e6eeff] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Link">
      <Container44 />
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-start justify-center relative shrink-0 w-full" data-name>
      <Link />
      <Link1 />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute bg-[#eff4ff] content-stretch flex flex-col gap-[47px] items-start left-[866px] px-[43px] py-[32px] rounded-[32px] top-[145px] w-[406px]" data-name>
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[19.84px] pr-[19.86px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#434656] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px] mb-0 whitespace-pre">{`Llevando energía a todos los hogares `}</p>
        <p className="leading-[20px] whitespace-pre">de la comunidad</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[8px] top-[160px]" data-name="Margin">
      <Container45 />
    </div>
  );
}

function Component7() {
  return (
    <div className="h-[208px] relative shrink-0 w-full" data-name>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[calc(50%-0.47px)] text-[#0d1c2e] text-[20px] text-center top-[126px] whitespace-nowrap">
        <p className="leading-[28px]">Juan DIego Moreno</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[calc(50%+0.12px)] not-italic text-[#006c49] text-[14px] text-center top-[150px] whitespace-nowrap">
        <p className="leading-[20px]">Técnico Verificado</p>
      </div>
      <Margin1 />
      <div className="absolute left-[94px] size-[126px] top-[-22px]" data-name="image 1">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage1} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage1} />
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p1869180} fill="var(--fill-0, #0040DF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0d1c2e] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] whitespace-pre">{`CR 35 #12 -10,  El Remanso`}</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[20px] relative shrink-0 w-[229px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center relative size-full">
        <Container47 />
        <Container48 />
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-col h-[82px] items-center pt-[33px] relative shrink-0 w-full" data-name>
      <div aria-hidden className="absolute border-[rgba(196,197,217,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <Container46 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p13e73800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#2d5bff] content-stretch flex gap-[7.99px] items-center justify-center py-[16px] relative rounded-[9999px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.33px_0_0] rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <Container49 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">¡Contactar!</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name>
      <Button3 />
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p2b729200} fill="var(--fill-0, #747688)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[#e6eeff] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Link">
      <Container50 />
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[17px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
        <g id="Container">
          <path d={svgPaths.p399f9f00} fill="var(--fill-0, #747688)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[#e6eeff] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Link">
      <Container51 />
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-start justify-center relative shrink-0 w-full" data-name>
      <Link2 />
      <Link3 />
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute bg-[#eff4ff] content-stretch flex flex-col gap-[47px] items-start left-[866px] px-[43px] py-[32px] rounded-[32px] top-[145px] w-[406px]" data-name>
      <Component7 />
      <Component8 />
      <Component9 />
      <Component10 />
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[13px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13">
        <g id="Container">
          <path d={svgPaths.p3494f300} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#2d5bff] h-[27px] relative rounded-[9999px] shrink-0 w-[44px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative size-full">
          <Container52 />
        </div>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="bg-[#dce9ff] content-stretch flex h-[48px] items-center justify-between overflow-clip px-[13px] py-[4px] relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[318px]" data-name>
      <Button4 />
    </div>
  );
}

function Component11() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(248,249,255,0.8)] content-stretch flex h-[90px] items-center justify-between px-[20px] relative rounded-[999px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[1280px]" data-name>
      <RouterLink to="/dashboard" className="h-[35px] relative shrink-0 w-[176px]" data-name="IMG comuniapp 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[141.49%] left-[-0.1%] max-w-none top-[-20.58%] w-full" src={imgImgComuniapp1} />
        </div>
      </RouterLink>
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d1c2e] text-[16px] tracking-[-0.4px] w-[73px]">
        <p className="leading-[24px]">Servicios</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d1c2e] text-[16px] tracking-[-0.4px] w-[129px]">
        <p className="leading-[24px]">Emprendedores</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d1c2e] text-[16px] tracking-[-0.4px] w-[87px]">
        <p className="leading-[24px]">Categorías</p>
      </div>
      <Component12 />
      <div className="bg-[#cbd5e1] h-[35px] overflow-clip relative rounded-[100px] shrink-0 w-[36px]" data-name="Generic avatar">
        <div className="absolute bottom-[10.92%] left-[14.77%] right-[14.77%] top-1/4" data-name="Avatar Placeholder">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.3657 22.4281">
            <g id="Avatar Placeholder">
              <path clipRule="evenodd" d={svgPaths.p178d40c0} fill="var(--fill-0, #434656)" fillRule="evenodd" />
              <path d={svgPaths.p9206270} fill="var(--fill-0, #434656)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Nsds() {
  return (
    <div className="absolute bg-[#eff4ff] content-stretch flex h-[84px] items-center justify-between left-0 max-w-[1280px] pt-[5px] top-0 w-[1280px]" data-name="NSDS">
      <Component11 />
    </div>
  );
}

export default function ResidenteDetalleServicio() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 249, 255) 0%, rgb(248, 249, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="RESIDENTE DETALLE SERVICIO">
      <Frame />
      <Component />
      <Component1 />
      <Component6 />
      <Nsds />
    </div>
  );
}