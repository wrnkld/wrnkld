import { useLocation } from "react-router-dom";

// Decide how many interior vertical rails to draw based on route.
// 2 = default (both middle rails), 1 = single middle rail, 0 = only outer rails.
function interiorRailsFor(pathname: string): number {
  if (pathname.startsWith("/words")) return 0;
  if (pathname.startsWith("/about/experience")) return 1;
  return 2;
}

export function PageRails() {
  const { pathname } = useLocation();
  const interior = interiorRailsFor(pathname);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 flex justify-center"
    >
      <div className="w-full max-w-6xl h-full px-6">
        <div className="h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-l border-r border-border/70">
          <div className={interior >= 1 ? "border-r border-border/70 last:border-r-0" : ""} />
          <div className={`hidden sm:block ${interior >= 2 ? "border-r border-border/70 last:border-r-0" : ""}`} />
          <div className="hidden lg:block" />
        </div>
      </div>
    </div>
  );
}