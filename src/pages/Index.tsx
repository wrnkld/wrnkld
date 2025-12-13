import { PortfolioCard } from "@/components/PortfolioCard";

const cards = [
  { title: "Tanium", subtitle: "Work", to: "/work/tanium", colorClass: "card-terracotta" },
  { title: "SAS", subtitle: "Work", to: "/work/sas", colorClass: "card-forest" },
  { title: "Red Hat", subtitle: "Work", to: "/work/redhat", colorClass: "card-navy" },
  { title: "Experience", subtitle: "About", to: "/about", colorClass: "card-mustard" },
  { title: "Books", subtitle: "About", to: "/books", colorClass: "card-coral" },
  { title: "Records", subtitle: "About", to: "/records", colorClass: "card-slate" },
  { title: "TMI", subtitle: "Words", to: "/words/on-design", colorClass: "card-plum", seriesLabel: "Design & AI", partLabel: "Part 1 → TMI" },
  { title: "Vibes", subtitle: "Words", to: "/words/on-process", colorClass: "card-teal", seriesLabel: "Design & AI", partLabel: "Part 2 → Vibes" },
  { title: "Real, Real", subtitle: "Words", to: "/words/on-tools", colorClass: "card-terracotta", seriesLabel: "Design & AI", partLabel: "Part 3 → Real, Real" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="px-6 pt-16 md:pt-24 pb-16 md:pb-20">
        <div className="max-w-2xl mx-auto animate-fade-in">
          <h1 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8 text-left">
            Matthew Stevens
          </h1>
          <p className="prose text-balance">
            A product design leader with 20 years of experience, I design elegant solutions for complex enterprise software, working hard to understand pain points by talking directly to customers. I manage design teams, big or small, still thriving as an individual contributor. I work quickly and efficiently, iterating through multiple ideas and gathering feedback from engineering, product management, and design.
          </p>
        </div>
      </header>
      
      {/* Horizontal Scrolling Cards */}
      <section className="pb-16 md:pb-24">
        <div className="overflow-x-auto overflow-y-visible scrollbar-hide">
          <div className="flex gap-6 px-6 pt-4 pb-4" style={{ width: "max-content" }}>
            {cards.map((card, index) => (
              <PortfolioCard
                key={card.to}
                title={card.title}
                subtitle={card.subtitle}
                to={card.to}
                colorClass={card.colorClass}
                index={index}
                seriesLabel={card.seriesLabel}
                partLabel={card.partLabel}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="px-6 pb-12 text-center">
        <p className="font-body text-lg text-muted-foreground">
          Say hello → <a href="mailto:hello@example.com" className="underline hover:text-foreground transition-colors">hello@example.com</a>
        </p>
      </footer>
    </div>
  );
}
