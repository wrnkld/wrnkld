import { useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpDown } from "lucide-react";
import { motion } from "motion/react";

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

export function CollectionTable<T extends Row>({
  items,
  columns,
}: CollectionTableProps<T>) {
  const [sortKey, setSortKey] = useState<Extract<keyof T, string>>("year" as Extract<keyof T, string>);
  const [direction, setDirection] = useState<"asc" | "desc">("desc");

  const rows = useMemo(() => {
    const result = [...items];
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
  }, [items, sortKey, direction]);

  const sortBy = (key: Extract<keyof T, string>) => {
    if (key === sortKey) {
      setDirection(direction === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setDirection("asc");
    }
  };

  return (
    <div className="full-bleed overflow-hidden table-gutter">
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
  );
}
