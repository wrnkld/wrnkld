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
  const [tab, setTab] = useState("all");
  const recommendedOnly = tab === "recommended";

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

  const scopeCount = recommendedOnly
    ? books.filter((book) => book.recommended).length
    : books.length;

  return (
    <DetailLayout title="Books">
      <p className="font-body text-base text-muted-foreground">
        I started tracking the books I read. Recommended in pink.
      </p>

      <CollectionSearch
        value={query}
        onChange={setQuery}
        placeholder={`Search ${scopeCount} ${recommendedOnly ? "recommended " : ""}books`}
        tabs={{
          value: tab,
          onChange: setTab,
          options: [
            { value: "all", label: "All" },
            { value: "recommended", label: "Recommended" },
          ],
        }}
      />

      <CollectionTable items={filtered} columns={columns} />
    </DetailLayout>
  );
}
