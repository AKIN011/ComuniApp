import ResidenteResultadoDeBusquedaCategorias from "../imports/ResidenteResultadoDeBusquedaCategorias/ResidenteResultadoDeBusquedaCategorias";

export default function SearchResultsPage() {
  return (
    <div className="w-full min-h-screen bg-[#f8f9ff]">
      <div className="w-[1280px] h-[1280px] mx-auto relative bg-white shadow-xl overflow-hidden shrink-0">
        <ResidenteResultadoDeBusquedaCategorias />
      </div>
    </div>
  );
}
