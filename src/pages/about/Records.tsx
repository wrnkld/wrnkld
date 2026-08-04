import { useState, useMemo } from "react";
import { DetailLayout } from "@/components/DetailLayout";
import { records } from "@/data/records";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpDown, Search, X } from "lucide-react";
import { motion } from "motion/react";

type SortField = "album" | "artist" | "year";
type SortDirection = "asc" | "desc";

export default function Records() {
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const filteredAndSortedRecords = useMemo(() => {
    let result = [...records];

    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(
        (record) =>
          record.album.toLowerCase().includes(searchLower) ||
          record.artist.toLowerCase().includes(searchLower) ||
          record.year.toString().includes(searchLower)
      );
    }

    result.sort((a, b) => {
      let comparison = 0;
      if (sortField === "album" || sortField === "artist") {
        comparison = a[sortField].localeCompare(b[sortField]);
      } else {
        comparison = a[sortField] - b[sortField];
      }
      return sortDirection === "asc" ? comparison : -comparison;
    });

    return result;
  }, [search, sortField, sortDirection]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const SortHeader = ({
    field,
    children,
  }: {
    field: SortField;
    children: React.ReactNode;
  }) => (
    <button
      onClick={() => handleSort(field)}
      className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
    >
      {children}
      <ArrowUpDown className="h-3 w-3" />
    </button>
  );

  return (
    <DetailLayout title="Records" subtitle="About">
      <p className="font-body text-base text-muted-foreground">
        A relatively exhaustive list of records I like. Updated often.
      </p>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={`Search ${records.length} records`}
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

      <div className="full-bleed border-y border-border/70 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="surface-tint-hover border-b-border/70">
              <TableHead>
                <SortHeader field="artist">Artist</SortHeader>
              </TableHead>
              <TableHead>
                <SortHeader field="album">Album</SortHeader>
              </TableHead>
              <TableHead>
                <SortHeader field="year">Year</SortHeader>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          {filteredAndSortedRecords.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center text-muted-foreground py-8">
                    No results
                  </TableCell>
                </TableRow>
              ) : (
                filteredAndSortedRecords.map((record) => (
                  <motion.tr
                    key={record.id}
                    layout
                    transition={{ duration: 0.15 }}
                    className="border-b border-border/70 transition-colors surface-tint-hover"
                  >
                    <TableCell className="text-muted-foreground">{record.artist}</TableCell>
                    <TableCell className="text-foreground">{record.album}</TableCell>
                    <TableCell className="text-muted-foreground">{record.year}</TableCell>
                  </motion.tr>
                ))
              )}
          </TableBody>
        </Table>
      </div>
    </DetailLayout>
  );
}
