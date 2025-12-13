import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  accentColor?: string;
}

export function PageLayout({ title, subtitle, children, accentColor }: PageLayoutProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <header className="mb-12 animate-fade-in">
          {subtitle && (
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-sm font-body uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity duration-300 mb-4"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{isHovered ? "Back" : subtitle}</span>
            </Link>
          )}
          <h1 
            className="font-display text-4xl md:text-6xl font-semibold text-foreground"
            style={accentColor ? { color: accentColor } : {}}
          >
            {title}
          </h1>
        </header>
        
        <main className="animate-fade-in" style={{ animationDelay: "100ms" }}>
          {children}
        </main>
      </div>
    </div>
  );
}
