import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpDown, Search, X, Circle, Cherry } from "lucide-react";
import { motion } from "motion/react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type Row = { id: number; year: number; recommended?: boolean };

export interface Column<T> {
  key: Extract<keyof T, string>;
  label: string;
  tone: "primary" | "muted";
}

interface CollectionTableProps<T extends Row> {
  items: T[];
  columns: Column<T>[];
  searchPlaceholder: string;
  /** Show the All / Recommended filter tabs. */
  recommendFilter?: boolean;
}

export function CollectionTable<T extends Row>({
  items,
  columns,
  searchPlaceholder,
  recommendFilter = false,
}: CollectionTableProps<T>) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<Extract<keyof T, string>>("year" as Extract<keyof T, string>);
  const [direction, setDirection] = useState<"asc" | "desc">("desc");
  const [filter, setFilter] = useState<"all" | "recommended">("all");

  const rows = useMemo(() => {
    const term = search.trim().toLowerCase();
    const result = items.filter((item) => {
      if (filter === "recommended" && !item.recommended) return false;
      if (!term) return true;
      return columns.some((c) => String(item[c.key]).toLowerCase().includes(term));
    });

    result.sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      const comparison =
        typeof av === "number" && typeof bv === "number"
          ? av - bv
          : String(av).localeCompare(String(bv));
      return direction === "asc" ? comparison : -comparison;
    });

    return result;
  }, [items, columns, search, sortKey, direction, filter]);

  const sortBy = (key: Extract<keyof T, string>) => {
    if (key === sortKey) {
      setDirection(direction === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setDirection("asc");
    }
  };

  return (
    <>
      <TooltipProvider delayDuration={200}>
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 rounded-lg border-border/70"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          {recommendFilter && (
            <Tabs value={filter} onValueChange={(v) => setFilter(v as "all" | "recommended")}>
              <TabsList className="surface-tint p-1.5">
                {[
                  { mode: "all", Icon: Circle, label: "All" },
                  { mode: "recommended", Icon: Cherry, label: "Recommended" },
                ].map(({ mode, Icon, label }) => (
                  <Tooltip key={mode}>
                    <TooltipTrigger asChild>
                      <span className="inline-flex">
                        <TabsTrigger
                          value={mode}
                          aria-label={label}
                          className="px-1.5 rounded data-[state=active]:shadow-[0_1px_2px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.06)]"
                        >
                          <Icon className="h-4 w-4" />
                        </TabsTrigger>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent className="hidden sm:block">{label}</TooltipContent>
                  </Tooltip>
                ))}
              </TabsList>
            </Tabs>
          )}
        </div>
      </TooltipProvider>

      <div className="full-bleed border-y border-border/70 overflow-hidden table-gutter">
        <Table>
          <TableHeader>
            <TableRow className="surface-tint-hover border-b-border/70">
              {columns.map((column) => (
                <TableHead key={column.key}>
                  <button
                    onClick={() => sortBy(column.key)}
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {column.label}
                    <ArrowUpDown className="h-3 w-3" />
                  </button>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center text-muted-foreground py-8">
                  No results
                </TableCell>
              </TableRow>
            ) : (
              rows.map((row) => (
                <motion.tr
                  key={row.id}
                  layout
                  transition={{ duration: 0.15 }}
                  className="border-b border-border/70 transition-colors surface-tint-hover"
                >
                  {columns.map((column) => (
                    <TableCell
                      key={column.key}
                      className={
                        row.recommended
                          ? "text-recommended"
                          : column.tone === "primary"
                            ? "text-foreground"
                            : "text-muted-foreground"
                      }
                    >
                      {String(row[column.key])}
                    </TableCell>
                  ))}
                </motion.tr>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
