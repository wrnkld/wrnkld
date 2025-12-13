import { useState, useMemo } from "react";
import { PageLayout } from "@/components/PageLayout";
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
import { ArrowUpDown, Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type SortField = "title" | "author" | "year" | "yearRead";
type SortDirection = "asc" | "desc";

export default function Books() {
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<SortField>("yearRead");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const filteredAndSortedBooks = useMemo(() => {
    let result = [...books];

    // Search filter
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
      className="-ml-3 h-8 hover:bg-transparent text-lg text-foreground"
      onClick={() => handleSort(field)}
    >
      {children}
      <ArrowUpDown className="ml-2 h-4 w-4 text-muted-foreground" />
    </Button>
  );

  return (
    <PageLayout title="Books" subtitle="About">
      <p className="prose mb-8">
        I recently started tracking the books I read.
      </p>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={`Search ${books.length} books`}
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
              <TableHead className="w-[40px]"></TableHead>
              <TableHead>
                <SortButton field="author">Author</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="title">Title</SortButton>
              </TableHead>
              <TableHead className="w-[100px]">
                <SortButton field="year">Published</SortButton>
              </TableHead>
              <TableHead className="w-[100px]">
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
                <TableCell>
                  <div className="flex justify-center">
                    {book.recommended && (
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    )}
                  </div>
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
    </PageLayout>
  );
}
