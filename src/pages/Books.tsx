import { PageLayout } from "@/components/PageLayout";

const books = [
  { title: "Thinking in Systems", author: "Donella H. Meadows", year: "2008" },
  { title: "The Design of Everyday Things", author: "Don Norman", year: "1988" },
  { title: "Zen and the Art of Motorcycle Maintenance", author: "Robert M. Pirsig", year: "1974" },
  { title: "Sapiens", author: "Yuval Noah Harari", year: "2011" },
  { title: "The Structure of Scientific Revolutions", author: "Thomas S. Kuhn", year: "1962" },
  { title: "Interaction of Color", author: "Josef Albers", year: "1963" },
  { title: "A Pattern Language", author: "Christopher Alexander", year: "1977" },
  { title: "The Timeless Way of Building", author: "Christopher Alexander", year: "1979" },
  { title: "Gödel, Escher, Bach", author: "Douglas Hofstadter", year: "1979" },
  { title: "The Medium is the Massage", author: "Marshall McLuhan", year: "1967" },
];

export default function Books() {
  return (
    <PageLayout title="Books" subtitle="Reading List">
      <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12">
        A collection of books that have shaped how I think about design, systems, 
        and making things. Not exhaustive, just the ones I return to.
      </p>
      
      <ul className="space-y-6">
        {books.map((book, index) => (
          <li 
            key={book.title}
            className="border-b border-border pb-6 last:border-0 animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <h3 className="font-display text-xl font-medium text-foreground mb-1">
              {book.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              {book.author} · {book.year}
            </p>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
