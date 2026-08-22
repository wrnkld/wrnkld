import { useLocation } from "react-router-dom";

// Decide how many interior vertical rails to draw based on route.
// 2 = default (both middle rails), 1 = single middle rail, 0 = only outer rails.
// The homepage is now an editorial stack of full-width bands, so it gets outer rails only.
function railsFor(pathname: string): { sm: boolean; lg: number } {
  return { sm: false, lg: 0 };
}


export function PageRails() {
  const { pathname } = useLocation();
  const rails = railsFor(pathname);
  const firstRail = [
    rails.sm ? "sm:border-r sm:border-border/70" : "",
    rails.lg >= 1 ? "lg:border-r lg:border-border/70" : "lg:border-r-0",
  ].join(" ");
  const secondRail = rails.lg >= 2 ? "lg:border-r lg:border-border/70" : "";
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 flex justify-center"
    >
      <div className="w-full max-w-6xl h-full px-6">
        <div className="h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-l border-r border-border/70">
          <div className={firstRail} />
          <div className={`hidden sm:block ${secondRail}`} />
          <div className="hidden lg:block" />
        </div>
      </div>
    </div>
  );
}