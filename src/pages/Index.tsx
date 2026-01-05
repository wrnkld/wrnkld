import { useRef, useState, useCallback } from "react";
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
  const [hasDragged, setHasDragged] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0, lastX: 0, lastTime: 0, velocity: 0 });

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setHasDragged(false);
    const state = dragState.current;
    state.startX = e.pageX;
    state.scrollLeft = scrollRef.current.scrollLeft;
    state.lastX = e.pageX;
    state.lastTime = Date.now();
    state.velocity = 0;
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const state = dragState.current;
    const dx = e.pageX - state.startX;
    
    // Track velocity
    const now = Date.now();
    const dt = now - state.lastTime;
    if (dt > 0) {
      state.velocity = (e.pageX - state.lastX) / dt;
    }
    state.lastX = e.pageX;
    state.lastTime = now;
    
    if (Math.abs(dx) > 5) setHasDragged(true);
    scrollRef.current.scrollLeft = state.scrollLeft - dx;
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    if (!scrollRef.current || !isDragging) return;
    setIsDragging(false);
    
    // Apply momentum
    const momentum = -dragState.current.velocity * 300;
    scrollRef.current.scrollBy({ left: momentum, behavior: "smooth" });
    
    setTimeout(() => setHasDragged(false), 100);
  }, [isDragging]);

  const handleCardClick = (e: React.MouseEvent) => {
    if (hasDragged) {
      e.preventDefault();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="px-6 pt-12 md:pt-20 pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6 text-left">
            Matthew Stevens
          </h1>
          <p className="prose">
            Head of Design at <a href="https://montecarlodata.com" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-foreground/60 transition-colors">Monte Carlo</a>. Recently built <a href="https://sleeves.app" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-foreground/60 transition-colors">Sleeves</a>, an app for tracking albums you love with friends. Product design leader with 20 years of experience designing elegant solutions for complex software, leading teams while working as an individual contributor. I work closely with customers and partners in product and engineering to ship clear, usable products.
          </p>
        </div>
      </header>
      
      {/* Horizontal Scrolling Cards */}
      <section className="pb-12 md:pb-20">
        <div 
          ref={scrollRef}
          className="overflow-x-auto overflow-y-visible scrollbar-hide cursor-grab active:cursor-grabbing touch-auto"
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
                onClick={handleCardClick}
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
