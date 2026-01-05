import { PortfolioCard } from "@/components/PortfolioCard";

const cards = [
  { title: "Pt 1 → Tools", subtitle: "Design & AI", to: "/designai/tools", colorClass: "card-terracotta" },
  { title: "Pt 2 → Vibes", subtitle: "Design & AI", to: "/designai/vibes", colorClass: "card-forest" },
  { title: "Pt 3 → Sleeves", subtitle: "Design & AI", to: "/designai/sleeves", colorClass: "card-navy" },
  { title: "Experience", subtitle: "About", to: "/about/experience", colorClass: "card-mustard" },
  { title: "Tanium", subtitle: "Work", to: "/work/tanium", colorClass: "card-coral" },
  { title: "Books", subtitle: "About", to: "/about/books", colorClass: "card-slate" },
  { title: "Records", subtitle: "About", to: "/about/records", colorClass: "card-plum" },
  { title: "Red Hat", subtitle: "Work", to: "/work/redhat", colorClass: "card-teal" },
  { title: "SAS", subtitle: "Work", to: "/work/sas", colorClass: "card-terracotta" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="px-6 pt-12 md:pt-20 pb-8 md:pb-12">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6 text-left">
            Matthew Stevens
          </h1>
          <p className="prose">
            Head of Design at <a href="https://montecarlodata.com" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-foreground/60 transition-colors">Monte Carlo</a>. Recently built <a href="https://sleeves.app" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-foreground/60 transition-colors">Sleeves</a>, an app for tracking albums you love with friends. Product design leader with 20 years of experience designing elegant solutions for complex software, leading teams while working as an individual contributor. I work closely with customers and partners in product and engineering to ship clear, usable products.
          </p>
        </div>
      </header>
      
      {/* Fanned Cards - Desktop */}
      <section className="hidden md:block px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative flex justify-center items-center" style={{ height: '340px' }}>
            {cards.map((card, index) => {
              const totalCards = cards.length;
              const middleIndex = (totalCards - 1) / 2;
              const offset = index - middleIndex;
              const translateX = offset * 70;
              
              return (
                <div
                  key={card.to}
                  className="absolute transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:!z-50 hover:-translate-y-4 hover:scale-105 group"
                  style={{
                    transform: `translateX(${translateX}px)`,
                    zIndex: index,
                  }}
                >
                  <div className="transition-shadow duration-300 group-hover:shadow-2xl">
                    <PortfolioCard
                      title={card.title}
                      subtitle={card.subtitle}
                      to={card.to}
                      colorClass={card.colorClass}
                      index={index}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stacked Cards - Mobile */}
      <section className="md:hidden px-6 pb-12">
        <div className="flex flex-col gap-4">
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
      </section>
      
      {/* Footer */}
      <footer className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-lg text-muted-foreground">
            Say hello → <a href="mailto:hello@wrnkld.tv" className="underline hover:text-foreground transition-colors">hello@wrnkld.tv</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
