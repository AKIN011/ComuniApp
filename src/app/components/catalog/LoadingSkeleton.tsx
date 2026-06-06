export function ServiceCardSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-[24px] bg-white shadow-[0px_8px_30px_0px_rgba(13,28,46,0.06)]">
      <div className="h-[220px] bg-[#e2e8f0]" />
      <div className="space-y-3 p-5">
        <div className="h-5 w-3/4 rounded bg-[#e2e8f0]" />
        <div className="h-4 w-full rounded bg-[#eef4fc]" />
        <div className="h-4 w-2/3 rounded bg-[#eef4fc]" />
        <div className="h-10 w-full rounded-[9999px] bg-[#dce9ff]" />
      </div>
    </div>
  );
}

export function ServiceGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <ServiceCardSkeleton key={index} />
      ))}
    </div>
  );
}

export function ServiceDetailSkeleton() {
  return (
    <div className="animate-pulse space-y-8">
      <div className="h-[360px] rounded-[24px] bg-[#e2e8f0]" />
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          <div className="h-8 w-2/3 rounded bg-[#e2e8f0]" />
          <div className="h-4 w-full rounded bg-[#eef4fc]" />
          <div className="h-4 w-full rounded bg-[#eef4fc]" />
          <div className="h-4 w-4/5 rounded bg-[#eef4fc]" />
        </div>
        <div className="h-[280px] rounded-[24px] bg-[#eef4fc]" />
      </div>
    </div>
  );
}
