import { Search, X } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CollectionSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  tabs?: {
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
  };
}

export function CollectionSearch({
  value,
  onChange,
  placeholder = "Search",
  tabs,
}: CollectionSearchProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      {tabs && (
        <Tabs value={tabs.value} onValueChange={tabs.onChange} className="shrink-0">
          <TabsList className="h-9">
            {tabs.options.map((option) => (
              <TabsTrigger key={option.value} value={option.value} className="text-sm">
                {option.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      )}

      <div className="relative w-full flex-1">
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
    </div>
  );
}
