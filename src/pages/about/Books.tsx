import { useState, useMemo } from "react";
import { DetailLayout } from "@/components/DetailLayout";
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
import { ArrowUpDown, Search, X } from "lucide-react";
import { motion } from "motion/react";

type SortField = "title" | "author" | "year";
type SortDirection = "asc" | "desc";

export default function Books() {
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const filteredAndSortedBooks = useMemo(() => {
    let result = [...books];

    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(
        (book) =>
          book.title.toLowerCase().includes(searchLower) ||
          book.author.toLowerCase().includes(searchLower) ||
          book.year.toString().includes(searchLower)
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
      className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
    >
      {children}
      <ArrowUpDown className="h-3 w-3" />
    </button>
  );

  return (
    <DetailLayout title="Books" subtitle="About">
      <p className="font-body text-base text-muted-foreground">
        I started tracking the books I read. Recommended in pink.
      </p>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={`Search ${books.length} books`}
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

      <div className="full-bleed border-y border-border/70 overflow-hidden table-gutter">
        <Table>
          <TableHeader>
            <TableRow className="surface-tint-hover border-b-border/70">
              <TableHead>
                <SortHeader field="author">Author</SortHeader>
              </TableHead>
              <TableHead>
                <SortHeader field="title">Title</SortHeader>
              </TableHead>
              <TableHead>
                <SortHeader field="year">Year</SortHeader>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          {filteredAndSortedBooks.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center text-muted-foreground py-8">
                    No results
                  </TableCell>
                </TableRow>
              ) : (
                filteredAndSortedBooks.map((book) => (
                  <motion.tr
                    key={book.id}
                    layout
                    transition={{ duration: 0.15 }}
                    className="border-b border-border/70 transition-colors surface-tint-hover"
                  >
                    <TableCell className={book.recommended ? "text-recommended" : "text-muted-foreground"}>
                      {book.author}
                    </TableCell>
                    <TableCell className={book.recommended ? "text-recommended" : "text-foreground"}>
                      {book.title}
                    </TableCell>
                    <TableCell className={book.recommended ? "text-recommended" : "text-muted-foreground"}>
                      {book.year}
                    </TableCell>
                  </motion.tr>
                ))
              )}
          </TableBody>
        </Table>
      </div>
    </DetailLayout>
  );
}
