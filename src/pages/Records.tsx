import { useState, useMemo } from "react";
import { PageLayout } from "@/components/PageLayout";
import { records } from "@/data/records";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  const [decadeFilter, setDecadeFilter] = useState<string>("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const decades = useMemo(() => {
    const uniqueDecades = [
      ...new Set(records.map((r) => Math.floor(r.year / 10) * 10)),
    ].sort((a, b) => b - a);
    return uniqueDecades;
  }, []);

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

    // Decade filter
    if (decadeFilter !== "all") {
      const decade = parseInt(decadeFilter);
      result = result.filter(
        (record) => record.year >= decade && record.year < decade + 10
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
  }, [search, decadeFilter, sortField, sortDirection]);

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
    <PageLayout title="Records" subtitle="Collection">
      <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
        My record collection spanning seven decades.
      </p>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by album or artist..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={decadeFilter} onValueChange={setDecadeFilter}>
          <SelectTrigger className="w-full sm:w-[140px]">
            <SelectValue placeholder="Decade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All decades</SelectItem>
            {decades.map((decade) => (
              <SelectItem key={decade} value={decade.toString()}>
                {decade}s
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Count */}
      <p className="text-sm text-muted-foreground mb-4">
        {filteredAndSortedRecords.length} record
        {filteredAndSortedRecords.length !== 1 ? "s" : ""}
      </p>

      {/* Table */}
      <div className="border border-border rounded-lg overflow-hidden">
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
                <TableCell className="text-muted-foreground">
                  {record.album}
                </TableCell>
                <TableCell className="text-right text-muted-foreground">
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
