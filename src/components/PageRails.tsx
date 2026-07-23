export function PageRails() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 flex justify-center"
    >
      <div className="w-full max-w-6xl h-full px-6">
        <div className="h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-l border-r border-border/70">
          <div className="border-r border-border/70 last:border-r-0" />
          <div className="hidden sm:block border-r border-border/70 last:border-r-0" />
          <div className="hidden lg:block" />
        </div>
      </div>
    </div>
  );
}