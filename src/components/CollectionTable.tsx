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

export function CollectionTable<T extends Row>({
  items,
  columns,
}: CollectionTableProps<T>) {
  return (
    <div className="full-bleed overflow-hidden table-gutter">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-border/70 hover:bg-transparent">
            {columns.map((column) => (
              <TableHead key={column.key} className="font-semibold text-muted-foreground">
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((row) => (
            <TableRow
              key={row.id}
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
