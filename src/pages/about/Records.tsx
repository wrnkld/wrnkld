import { DetailLayout } from "@/components/DetailLayout";
import { CollectionTable, type Column } from "@/components/CollectionTable";
import { records } from "@/data/records";

type Record = (typeof records)[number];

const columns: Column<Record>[] = [
  { key: "artist", label: "Artist", tone: "muted" },
  { key: "album", label: "Album", tone: "primary" },
  { key: "year", label: "Year", tone: "muted" },
];

export default function Records() {
  return (
    <DetailLayout title="Records">
      <p className="font-body text-base text-muted-foreground">
        A relatively exhaustive list of records I like. Updated often.
      </p>

      <CollectionTable items={records} columns={columns} />
    </DetailLayout>
  );
}

