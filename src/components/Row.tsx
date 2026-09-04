import { cn } from "@/lib/utils";

export function Row({
  className = "",
  children,
  noHover = false,
}: {
  className?: string;
  children: React.ReactNode;
  noHover?: boolean;
}) {
  return (
    <div
      className={cn(
        "px-5 py-4 text-base border-b border-border/70 transition-colors",
        !noHover && "surface-tint-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
