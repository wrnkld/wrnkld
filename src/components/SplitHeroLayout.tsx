import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface SplitHeroLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  colorClass?: string;
}

export function SplitHeroLayout({ title, subtitle, children }: SplitHeroLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {subtitle && (
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-sm font-body uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          {subtitle}
        </Link>
      )}
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
        {title}
      </h1>
      {children}
    </div>
  );
}
