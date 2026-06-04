import { useCallback, useState } from "react";
import type { EmprendedorService } from "../app/components/emprendedor/emprendedorData";
import {
  activeServices as initialActiveServices,
  EMPRENDEDOR_USER_NAME,
  inactiveServices as initialInactiveServices,
} from "../app/components/emprendedor/emprendedorData";
import {
  EmprendedorServiceAlertOverlay,
  type ServiceAlertVariant,
} from "../app/components/emprendedor/EmprendedorServiceAlertOverlay";
import {
  GrowBusinessCard,
  ListActiveServiceCard,
  ListInactiveServiceCard,
} from "../app/components/emprendedor/ServiceCards";

export default function EmprendedorServiciosListPage() {
  const [activeList, setActiveList] =
    useState<EmprendedorService[]>(initialActiveServices);
  const [inactiveList, setInactiveList] = useState<EmprendedorService[]>(
    initialInactiveServices,
  );
  const [alertVariant, setAlertVariant] = useState<ServiceAlertVariant | null>(
    null,
  );
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);

  const closeAlert = useCallback(() => {
    setAlertVariant(null);
    setPendingDeleteId(null);
  }, []);

  const handleDeactivate = useCallback((serviceId: string) => {
    setActiveList((prev) => {
      const service = prev.find((s) => s.id === serviceId);
      if (!service) return prev;
      setInactiveList((inactive) => [
        { ...service, status: "inactivo" },
        ...inactive,
      ]);
      return prev.filter((s) => s.id !== serviceId);
    });
    setAlertVariant("deactivate-success");
  }, []);

  const handleActivate = useCallback((serviceId: string) => {
    setInactiveList((prev) => {
      const service = prev.find((s) => s.id === serviceId);
      if (!service) return prev;
      setActiveList((active) => [
        { ...service, status: "activo" },
        ...active,
      ]);
      return prev.filter((s) => s.id !== serviceId);
    });
  }, []);

  const handleDeleteRequest = useCallback((serviceId: string) => {
    setPendingDeleteId(serviceId);
    setAlertVariant("delete-confirm");
  }, []);

  const handleConfirmDelete = useCallback(() => {
    if (!pendingDeleteId) return;
    setInactiveList((prev) => prev.filter((s) => s.id !== pendingDeleteId));
    setPendingDeleteId(null);
    setAlertVariant("delete-success");
  }, [pendingDeleteId]);

  return (
    <div data-name="EMPRENDEDOR LISTA DE SERVICIOS">
      <header className="mb-10">
        <h1 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[36px] font-bold leading-[44px] tracking-[-0.8px] text-[#0d1c2e]">
          Hola, {EMPRENDEDOR_USER_NAME}
        </h1>
        <p className="mt-2 font-['Inter:Regular',sans-serif] text-[16px] leading-[26px] text-[#64748b]">
          Estos son los servicios que actualmente tienes cargados en la
          plataforma.
        </p>
      </header>

      <section className="mb-12">
        <div className="mb-6">
          <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[22px] font-bold text-[#0d1c2e]">
            Todos tus servicios
          </h2>
          <p className="mt-1 font-['Inter:Regular',sans-serif] text-[15px] text-[#64748b]">
            Administra y realiza un seguimiento de tus ofertas comunitarias
            activas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {activeList.map((service) => (
            <ListActiveServiceCard
              key={service.id}
              service={service}
              onDeactivate={handleDeactivate}
            />
          ))}
          <GrowBusinessCard />
        </div>
      </section>

      <section>
        <div className="mb-6">
          <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[22px] font-bold text-[#0d1c2e]">
            Servicios inactivos
          </h2>
          <p className="mt-1 font-['Inter:Regular',sans-serif] text-[15px] text-[#64748b]">
            Los servicios inactivos no están publicados.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {inactiveList.map((service) => (
            <ListInactiveServiceCard
              key={service.id}
              service={service}
              onActivate={handleActivate}
              onDelete={handleDeleteRequest}
            />
          ))}
        </div>
      </section>

      {alertVariant && (
        <EmprendedorServiceAlertOverlay
          variant={alertVariant}
          onClose={closeAlert}
          onConfirmDelete={
            alertVariant === "delete-confirm"
              ? handleConfirmDelete
              : undefined
          }
        />
      )}
    </div>
  );
}
