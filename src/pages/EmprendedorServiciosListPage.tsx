import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router";
import type { EmprendedorService } from "../app/components/emprendedor/emprendedorData";
import {
  activeServices as initialActiveServices,
  getEntrepreneurFirstName,
  inactiveServices as initialInactiveServices,
} from "../app/components/emprendedor/emprendedorData";
import { useAuth } from "../context/AuthContext";
import {
  EmprendedorServiceAlertOverlay,
  type ServiceAlertVariant,
} from "../app/components/emprendedor/EmprendedorServiceAlertOverlay";
import {
  GrowBusinessCard,
  ListActiveServiceCard,
  ListInactiveServiceCard,
} from "../app/components/emprendedor/ServiceCards";
import {
  buildEmprendedorServiceLists,
  clearPublishedService,
  isPublishedServiceId,
  removeServiceOverride,
  saveServiceOverride,
  updatePublishedServiceActive,
} from "../app/utils/emprendedorServicioStorage";

export default function EmprendedorServiciosListPage() {
  const { user } = useAuth();
  const location = useLocation();
  const [refreshToken, setRefreshToken] = useState(0);
  const [alertVariant, setAlertVariant] = useState<ServiceAlertVariant | null>(
    null,
  );
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);

  const { activeServices: activeList, inactiveServices: inactiveList } =
    useMemo(
      () =>
        buildEmprendedorServiceLists(
          initialActiveServices,
          initialInactiveServices,
        ),
      [refreshToken],
    );

  const refreshLists = useCallback(() => {
    setRefreshToken((token) => token + 1);
  }, []);

  useEffect(() => {
    refreshLists();
  }, [location.key, refreshLists]);

  const closeAlert = useCallback(() => {
    setAlertVariant(null);
    setPendingDeleteId(null);
  }, []);

  const handleDeactivate = useCallback(
    (serviceId: string) => {
      const service = activeList.find((item) => item.id === serviceId);
      if (!service) return;

      saveServiceOverride(serviceId, { status: "inactivo" });

      if (isPublishedServiceId(serviceId)) {
        updatePublishedServiceActive(false);
      }

      refreshLists();
      setAlertVariant("deactivate-success");
    },
    [activeList, refreshLists],
  );

  const handleActivate = useCallback(
    (serviceId: string) => {
      const service = inactiveList.find((item) => item.id === serviceId);
      if (!service) return;

      saveServiceOverride(serviceId, { status: "activo" });

      if (isPublishedServiceId(serviceId)) {
        updatePublishedServiceActive(true);
      }

      refreshLists();
    },
    [inactiveList, refreshLists],
  );

  const handleDeleteRequest = useCallback((serviceId: string) => {
    setPendingDeleteId(serviceId);
    setAlertVariant("delete-confirm");
  }, []);

  const handleConfirmDelete = useCallback(() => {
    if (!pendingDeleteId) return;

    saveServiceOverride(pendingDeleteId, { deleted: true });

    if (isPublishedServiceId(pendingDeleteId)) {
      clearPublishedService();
      removeServiceOverride(pendingDeleteId);
    }

    refreshLists();
    setPendingDeleteId(null);
    setAlertVariant("delete-success");
  }, [pendingDeleteId, refreshLists]);

  return (
    <div data-name="EMPRENDEDOR LISTA DE SERVICIOS">
      <header className="mb-10">
        <h1 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[36px] font-bold leading-[44px] tracking-[-0.8px] text-[#0d1c2e]">
          Hola, {getEntrepreneurFirstName(user)}
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
          {activeList.map((service: EmprendedorService) => (
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
          {inactiveList.map((service: EmprendedorService) => (
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
