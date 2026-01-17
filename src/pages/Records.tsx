import { useState, useMemo } from "react";
import { SplitHeroLayout } from "@/components/SplitHeroLayout";
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
import { Button } from "@/components/ui/button";

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

  const SortButton = ({
    field,
    children,
  }: {
    field: SortField;
    children: React.ReactNode;
  }) => (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => handleSort(field)}
    >
      {children}
      <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
    </Button>
  );

  return (
    <SplitHeroLayout title="Records" subtitle="About">
      <p className="font-body text-lg text-muted-foreground">
        A relatively exhaustive list of records I like. Updated often.
      </p>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={`Search ${records.length} records`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <SortButton field="artist">Artist</SortButton>
            </TableHead>
            <TableHead>
              <SortButton field="album">Album</SortButton>
            </TableHead>
            <TableHead>
              <SortButton field="year">Year</SortButton>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredAndSortedRecords.map((record) => (
            <TableRow key={record.id}>
              <TableCell className="text-muted-foreground">{record.artist}</TableCell>
              <TableCell className="text-foreground">{record.album}</TableCell>
              <TableCell className="text-muted-foreground">{record.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </SplitHeroLayout>
  );
}
