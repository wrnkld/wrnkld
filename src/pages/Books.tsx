import { useState, useMemo } from "react";
import { PageLayout } from "@/components/PageLayout";
import { books } from "@/data/books";
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
import { ArrowUpDown, Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type SortField = "title" | "author" | "year" | "yearRead";
type SortDirection = "asc" | "desc";

export default function Books() {
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [recommendedFilter, setRecommendedFilter] = useState<string>("all");
  const [sortField, setSortField] = useState<SortField>("yearRead");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const years = useMemo(() => {
    const uniqueYears = [...new Set(books.map((b) => b.yearRead))].sort(
      (a, b) => b - a
    );
    return uniqueYears;
  }, []);

  const filteredAndSortedBooks = useMemo(() => {
    let result = [...books];

    // Search filter
    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(
        (book) =>
          book.title.toLowerCase().includes(searchLower) ||
          book.author.toLowerCase().includes(searchLower)
      );
    }

    // Year filter
    if (yearFilter !== "all") {
      result = result.filter((book) => book.yearRead === parseInt(yearFilter));
    }

    // Recommended filter
    if (recommendedFilter === "recommended") {
      result = result.filter((book) => book.recommended);
    }

    // Sort
    result.sort((a, b) => {
      let comparison = 0;
      if (sortField === "title" || sortField === "author") {
        comparison = a[sortField].localeCompare(b[sortField]);
      } else {
        comparison = a[sortField] - b[sortField];
      }
      return sortDirection === "asc" ? comparison : -comparison;
    });

    return result;
  }, [search, yearFilter, recommendedFilter, sortField, sortDirection]);

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
    <PageLayout title="Books" subtitle="Reading List">
      <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
        Books I've read since 2022. Stars indicate personal recommendations.
      </p>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by title or author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={yearFilter} onValueChange={setYearFilter}>
          <SelectTrigger className="w-full sm:w-[140px]">
            <SelectValue placeholder="Year read" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All years</SelectItem>
            {years.map((year) => (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={recommendedFilter} onValueChange={setRecommendedFilter}>
          <SelectTrigger className="w-full sm:w-[160px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All books</SelectItem>
            <SelectItem value="recommended">Recommended</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Count */}
      <p className="text-sm text-muted-foreground mb-4">
        {filteredAndSortedBooks.length} book
        {filteredAndSortedBooks.length !== 1 ? "s" : ""}
      </p>

      {/* Table */}
      <div className="border border-border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-[40px]"></TableHead>
              <TableHead>
                <SortButton field="title">Title</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="author">Author</SortButton>
              </TableHead>
              <TableHead className="w-[100px] text-right">
                <SortButton field="year">Published</SortButton>
              </TableHead>
              <TableHead className="w-[100px] text-right">
                <SortButton field="yearRead">Read</SortButton>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedBooks.map((book, index) => (
              <TableRow
                key={book.id}
                className="animate-fade-in"
                style={{ animationDelay: `${Math.min(index * 20, 500)}ms` }}
              >
                <TableCell className="text-center">
                  {book.recommended && (
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  )}
                </TableCell>
                <TableCell className="font-medium">{book.title}</TableCell>
                <TableCell className="text-muted-foreground">
                  {book.author}
                </TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {book.year}
                </TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {book.yearRead}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </PageLayout>
  );
}
