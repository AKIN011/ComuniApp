import LandingPageGeneral from "../imports/LandingPageGeneral/LandingPageGeneral";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-[#f8f9ff]">
      <div className="w-[1280px] h-[3100px] mx-auto relative bg-white shadow-xl overflow-hidden shrink-0">
        <LandingPageGeneral />
      </div>
    </div>
  );
}
