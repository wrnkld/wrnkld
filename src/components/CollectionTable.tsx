import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Row = { id: number; year: number; recommended?: boolean };

export interface Column<T> {
  key: Extract<keyof T, string>;
  label: string;
  tone: "primary" | "muted";
}

interface CollectionTableProps<T extends Row> {
  items: T[];
  columns: Column<T>[];
}

const MotionRow = motion(TableRow);

export function CollectionTable<T extends Row>({
  items,
  columns,
}: CollectionTableProps<T>) {
  const [sortKey, setSortKey] = useState<Extract<keyof T, string> | null>(null);
  const [direction, setDirection] = useState<"asc" | "desc">("asc");

  const sorted = useMemo(() => {
    if (!sortKey) return items;
    const factor = direction === "asc" ? 1 : -1;
    return [...items].sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      if (typeof av === "number" && typeof bv === "number") return (av - bv) * factor;
      return String(av).localeCompare(String(bv), undefined, { sensitivity: "base" }) * factor;
    });
  }, [items, sortKey, direction]);

  const handleSort = (key: Extract<keyof T, string>) => {
    if (key === sortKey) {
      setDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setDirection("asc");
    }
  };

  return (
    <div className="full-bleed overflow-hidden table-gutter">
      <Table className="w-full">
        <TableHeader>
          <TableRow className="border-b border-border/70 hover:bg-transparent">
            {columns.map((column) => (
              <TableHead
                key={column.key}
                  className="font-medium text-muted-foreground [overflow-wrap:anywhere]"
              >
                <button
                  type="button"
                  onClick={() => handleSort(column.key)}
                  aria-label={`Sort by ${column.label}`}
                  className="flex w-full items-center gap-1.5 text-left hover:text-foreground transition-colors duration-200"
                >
                  {column.label}
                  {sortKey === column.key ? (
                    direction === "asc" ? (
                      <ArrowUp className="h-3.5 w-3.5" />
                    ) : (
                      <ArrowDown className="h-3.5 w-3.5" />
                    )
                  ) : (
                    <ChevronsUpDown className="h-3.5 w-3.5 opacity-40" />
                  )}
                </button>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <AnimatePresence initial={false} mode="popLayout">
            {sorted.map((row) => (
              <MotionRow
                key={row.id}
                layout="position"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="border-b border-border/70 transition-colors surface-tint-hover"
              >
                {columns.map((column) => (
                  <TableCell
                    key={column.key}
                    className={`[overflow-wrap:anywhere] align-top ${
                      row.recommended
                        ? "text-recommended"
                        : column.tone === "primary"
                          ? "text-foreground"
                          : "text-muted-foreground"
                    }`}
                  >
                    {String(row[column.key])}
                  </TableCell>
                ))}
              </MotionRow>
            ))}
          </AnimatePresence>
        </TableBody>
      </Table>
    </div>
  );
}
