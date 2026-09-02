import { useMemo, useState } from "react";
import { DetailLayout } from "@/components/DetailLayout";
import { CollectionTable, type Column } from "@/components/CollectionTable";
import { CollectionSearch } from "@/components/CollectionSearch";
import { records } from "@/data/records";

type Record = (typeof records)[number];

const columns: Column<Record>[] = [
  { key: "artist", label: "Artist", tone: "muted" },
  { key: "album", label: "Album", tone: "primary" },
  { key: "year", label: "Year", tone: "muted" },
];

export default function Records() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return records;
    return records.filter(
      (record) =>
        record.album.toLowerCase().includes(q) ||
        record.artist.toLowerCase().includes(q) ||
        String(record.year).includes(q),
    );
  }, [query]);

  return (
    <DetailLayout title="Records">
      <p className="font-body text-base text-muted-foreground">
        A relatively exhaustive list of records I like. Updated often.
      </p>

      <CollectionSearch value={query} onChange={setQuery} placeholder={`Search ${records.length} records`} />

      <CollectionTable items={filtered} columns={columns} />
    </DetailLayout>
  );
}
