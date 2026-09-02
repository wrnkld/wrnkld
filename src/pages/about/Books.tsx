import { useMemo, useState } from "react";
import { DetailLayout } from "@/components/DetailLayout";
import { CollectionTable, type Column } from "@/components/CollectionTable";
import { CollectionSearch } from "@/components/CollectionSearch";
import { books } from "@/data/books";

type Book = (typeof books)[number];

const columns: Column<Book>[] = [
  { key: "author", label: "Author", tone: "muted" },
  { key: "title", label: "Title", tone: "primary" },
  { key: "year", label: "Year", tone: "muted" },
];

export default function Books() {
  const [query, setQuery] = useState("");
  const [recommendedOnly, setRecommendedOnly] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return books.filter((book) => {
      if (recommendedOnly && !book.recommended) return false;
      if (!q) return true;
      return (
        book.title.toLowerCase().includes(q) ||
        book.author.toLowerCase().includes(q) ||
        String(book.year).includes(q)
      );
    });
  }, [query, recommendedOnly]);

  return (
    <DetailLayout title="Books">
      <p className="font-body text-base text-muted-foreground">
        I started tracking the books I read. Recommended in pink.
      </p>

      <CollectionSearch
        value={query}
        onChange={setQuery}
        placeholder="Search books"
        toggle={{
          label: "Show only recommended",
          checked: recommendedOnly,
          onChange: setRecommendedOnly,
        }}
      />

      <CollectionTable items={filtered} columns={columns} />
    </DetailLayout>
  );
}
