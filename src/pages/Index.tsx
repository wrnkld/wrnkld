import { PortfolioCard } from "@/components/PortfolioCard";

const cards = [
  { title: "Tanium", subtitle: "Case Study", to: "/work/tanium", colorClass: "card-terracotta" },
  { title: "SAS", subtitle: "Case Study", to: "/work/sas", colorClass: "card-forest" },
  { title: "Red Hat", subtitle: "Case Study", to: "/work/redhat", colorClass: "card-navy" },
  { title: "Books", subtitle: "Reading List", to: "/books", colorClass: "card-mustard" },
  { title: "Records", subtitle: "Collection", to: "/records", colorClass: "card-coral" },
  { title: "On Design", subtitle: "Words", to: "/words/on-design", colorClass: "card-slate" },
  { title: "On Process", subtitle: "Words", to: "/words/on-process", colorClass: "card-plum" },
  { title: "On Tools", subtitle: "Words", to: "/words/on-tools", colorClass: "card-teal" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="px-6 pt-16 md:pt-24 pb-16 md:pb-20">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-foreground mb-8">
            Your Name
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
            Designer and builder of digital products. Currently crafting experiences 
            at interesting companies. Previously shaped design systems, led teams, 
            and shipped things people actually use. Based somewhere nice.
          </p>
        </div>
      </header>
      
      {/* Horizontal Scrolling Cards */}
      <section className="pb-16 md:pb-24">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 px-6 pb-4" style={{ width: "max-content" }}>
            {cards.map((card, index) => (
              <PortfolioCard
                key={card.to}
                title={card.title}
                subtitle={card.subtitle}
                to={card.to}
                colorClass={card.colorClass}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="px-6 pb-12 text-center">
        <p className="font-body text-sm text-muted-foreground">
          Say hello → <a href="mailto:hello@example.com" className="underline hover:text-foreground transition-colors">hello@example.com</a>
        </p>
      </footer>
    </div>
  );
}
