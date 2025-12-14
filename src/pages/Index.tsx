import { useRef, useState } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="px-6 pt-16 md:pt-24 pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8 text-left">
            Matthew Stevens
          </h1>
          <p className="prose">
            A product design leader with 20 years of experience, I design elegant solutions for complex enterprise software, working hard to understand pain points by talking directly to customers. I manage design teams, big or small, still thriving as an individual contributor. I work quickly and efficiently, iterating through multiple ideas and gathering feedback from engineering, product management, and design.
          </p>
        </div>
      </header>
      
      {/* Horizontal Scrolling Cards */}
      <section className="pb-16 md:pb-24">
        <div 
          ref={scrollRef}
          className="overflow-x-auto overflow-y-visible scrollbar-hide cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="flex gap-6 px-6 pt-4 pb-4" style={{ width: "max-content" }}>
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
