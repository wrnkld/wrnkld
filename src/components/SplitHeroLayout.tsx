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
    <div className="min-h-screen bg-white">
      {/* Accent bar */}
      <div className={`h-1.5 w-full ${colorClass}`} />
      
      {/* Hero */}
      <div className="bg-background">
        <div className="max-w-3xl mx-auto px-6 pt-12 pb-20">
          {subtitle && (
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-sm font-body uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-4 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              {subtitle}
            </Link>
          )}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            {title}
          </h1>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        {children}
      </div>
    </div>
  );
}
