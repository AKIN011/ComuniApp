import type { ReactNode } from "react";
import { DashboardHeader } from "../dashboard/DashboardHeader";

interface ResidentCatalogLayoutProps {
  children: ReactNode;
}

export function ResidentCatalogLayout({ children }: ResidentCatalogLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f8f9ff]">
      <DashboardHeader />
      <main className="mx-auto max-w-[1280px] px-8 py-8">{children}</main>
    </div>
  );
}
