import { PageLayout } from "@/components/PageLayout";

const records = [
  { title: "Kind of Blue", artist: "Miles Davis", year: "1959" },
  { title: "Remain in Light", artist: "Talking Heads", year: "1980" },
  { title: "Selected Ambient Works 85-92", artist: "Aphex Twin", year: "1992" },
  { title: "In Rainbows", artist: "Radiohead", year: "2007" },
  { title: "Bitches Brew", artist: "Miles Davis", year: "1970" },
  { title: "The Velvet Underground & Nico", artist: "The Velvet Underground", year: "1967" },
  { title: "Endtroducing.....", artist: "DJ Shadow", year: "1996" },
  { title: "Music Has the Right to Children", artist: "Boards of Canada", year: "1998" },
  { title: "Loveless", artist: "My Bloody Valentine", year: "1991" },
  { title: "Blue", artist: "Joni Mitchell", year: "1971" },
];

export default function Records() {
  return (
    <PageLayout title="Records" subtitle="Collection">
      <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12">
        The albums I keep coming back to. Heavy on jazz, ambient, and things 
        that layer well. Always looking for recommendations.
      </p>
      
      <ul className="space-y-6">
        {records.map((record, index) => (
          <li 
            key={record.title}
            className="border-b border-border pb-6 last:border-0 animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <h3 className="font-display text-xl font-medium text-foreground mb-1">
              {record.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              {record.artist} · {record.year}
            </p>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
