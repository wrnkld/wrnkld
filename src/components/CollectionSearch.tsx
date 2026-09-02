import { Search, X } from "lucide-react";

interface CollectionSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  toggle?: {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
  };
}

export function CollectionSearch({
  value,
  onChange,
  placeholder = "Search",
  toggle,
}: CollectionSearchProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full sm:max-w-xs">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          className="h-9 w-full rounded-md border border-border/70 bg-transparent pl-9 pr-8 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors duration-200"
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Clear search"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {toggle && (
        <button
          type="button"
          role="switch"
          aria-checked={toggle.checked}
          onClick={() => toggle.onChange(!toggle.checked)}
          className="inline-flex items-center gap-2 rounded-md border border-border/70 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors duration-200"
        >
          <span
            className={`relative h-5 w-9 rounded-full border transition-colors duration-200 ${
              toggle.checked
                ? "border-foreground bg-foreground"
                : "border-border bg-muted"
            }`}
          >
            <span
              className={`absolute top-0.5 h-3.5 w-3.5 rounded-full shadow-sm transition-all duration-200 ${
                toggle.checked ? "left-[1.15rem] bg-background" : "left-0.5 bg-foreground/40"
              }`}
            />
          </span>
          {toggle.label}
        </button>
      )}
    </div>
  );
}
