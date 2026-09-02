export function Row({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`px-5 py-4 text-sm border-b border-border/70 transition-colors surface-tint-hover ${className}`}
    >
      {children}
    </div>
  );
}
