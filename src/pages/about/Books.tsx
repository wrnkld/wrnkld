import { DetailLayout } from "@/components/DetailLayout";
import { CollectionTable, type Column } from "@/components/CollectionTable";
import { books } from "@/data/books";

type Book = (typeof books)[number];

const columns: Column<Book>[] = [
  { key: "author", label: "Author", tone: "muted" },
  { key: "title", label: "Title", tone: "primary" },
  { key: "year", label: "Year", tone: "muted" },
];

export default function Books() {
  return (
    <DetailLayout title="Books" subtitle="About">
      <p className="font-body text-base text-muted-foreground">
        I started tracking the books I read. Recommended in pink.
      </p>

      <CollectionTable
        items={books}
        columns={columns}
        searchPlaceholder={`Search ${books.length} books`}
        recommendFilter
      />
    </DetailLayout>
  );
}
