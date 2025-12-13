import { useState, useMemo } from "react";
import { PageLayout } from "@/components/PageLayout";
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
import { ArrowUpDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

type SortField = "album" | "artist" | "year";
type SortDirection = "asc" | "desc";

export default function Records() {
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const filteredAndSortedRecords = useMemo(() => {
    let result = [...records];

    // Search filter
    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(
        (record) =>
          record.album.toLowerCase().includes(searchLower) ||
          record.artist.toLowerCase().includes(searchLower)
      );
    }


    // Sort
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
      className="-ml-3 h-8 hover:bg-transparent"
      onClick={() => handleSort(field)}
    >
      {children}
      <ArrowUpDown className="ml-2 h-3 w-3 text-muted-foreground" />
    </Button>
  );

  return (
    <PageLayout title="Records" subtitle="About">
      <p className="prose mb-8">
        A relatively exhaustive list of records I like. Updated often.
      </p>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={`Search ${records.length} records`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Table */}
      <div className="border border-border rounded-md overflow-hidden prose">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead>
                <SortButton field="artist">Artist</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="album">Album</SortButton>
              </TableHead>
              <TableHead className="w-[100px] text-right">
                <SortButton field="year">Year</SortButton>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedRecords.map((record, index) => (
              <TableRow
                key={record.id}
                className="animate-fade-in"
                style={{ animationDelay: `${Math.min(index * 20, 500)}ms` }}
              >
                <TableCell className="font-medium">{record.artist}</TableCell>
                <TableCell>
                  {record.album}
                </TableCell>
                <TableCell className="text-right">
                  {record.year}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </PageLayout>
  );
}
