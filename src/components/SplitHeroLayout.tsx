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
      <div className={`h-1.5 w-full ${colorClass}`} />
      
      <div className="bg-background py-12 md:py-16 px-6 md:px-16 lg:px-24">
        {subtitle && (
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-sm font-body uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            {subtitle}
          </Link>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground max-w-2xl">
          {title}
        </h1>
      </div>
      
      <div className="py-12 md:py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}
