import { useState, useMemo } from "react";
import { SplitHeroLayout } from "@/components/SplitHeroLayout";
import { books } from "@/data/books";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpDown, Search, Star, X } from "lucide-react";

type SortField = "title" | "author" | "year" | "yearRead";
type SortDirection = "asc" | "desc";

export default function Books() {
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<SortField>("yearRead");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const filteredAndSortedBooks = useMemo(() => {
    let result = [...books];

    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(
        (book) =>
          book.title.toLowerCase().includes(searchLower) ||
          book.author.toLowerCase().includes(searchLower) ||
          book.year.toString().includes(searchLower) ||
          book.yearRead.toString().includes(searchLower)
      );
    }

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
      className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
    >
      {children}
      <ArrowUpDown className="h-3 w-3" />
    </button>
  );

  return (
    <SplitHeroLayout title="Books" subtitle="About">
      <p className="font-body text-lg text-muted-foreground">
        I recently started tracking the books I read.
      </p>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={`Search ${books.length} books`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
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

      <div className="border border-border rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-8"></TableHead>
              <TableHead className="text-left font-normal">
                <SortHeader field="author">Author</SortHeader>
              </TableHead>
              <TableHead className="text-left font-normal">
                <SortHeader field="title">Title</SortHeader>
              </TableHead>
              <TableHead className="text-left font-normal">
                <SortHeader field="year">Published</SortHeader>
              </TableHead>
              <TableHead className="text-left font-normal">
                <SortHeader field="yearRead">Read</SortHeader>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedBooks.map((book) => (
              <TableRow key={book.id}>
                <TableCell className="w-8">
                  {book.recommended && (
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  )}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {book.author}
                </TableCell>
                <TableCell className="text-foreground">{book.title}</TableCell>
                <TableCell className="text-muted-foreground">
                  {book.year}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {book.yearRead}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </SplitHeroLayout>
  );
}
