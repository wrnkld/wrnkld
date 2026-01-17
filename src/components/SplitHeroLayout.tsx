import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface SplitHeroLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  colorClass: string;
}

export function SplitHeroLayout({ title, subtitle, children, colorClass }: SplitHeroLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Thin accent bar */}
      <div className={`h-1.5 w-full ${colorClass}`} />
      
      {/* Header */}
      <header className="px-6 pt-8 md:pt-12 pb-8 md:pb-12">
        <div className="max-w-3xl animate-fade-in">
          {subtitle && (
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-sm font-body uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              {subtitle}
            </Link>
          )}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            {title}
          </h1>
        </div>
      </header>
      
      {/* Content */}
      <main className="animate-fade-in" style={{ animationDelay: "100ms" }}>
        {children}
      </main>
    </div>
  );
}
