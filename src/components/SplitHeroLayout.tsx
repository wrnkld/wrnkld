import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface SplitHeroLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  colorClass?: string;
}

export function SplitHeroLayout({ title, subtitle, children, colorClass }: SplitHeroLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {colorClass && <div className={`h-1.5 w-full ${colorClass}`} />}
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16 space-y-6">
        {subtitle && (
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-sm font-body uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            {subtitle}
          </Link>
        )}
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
          {title}
        </h1>
        <div className="space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
}
