import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  accentColor?: string;
  fullWidthContent?: boolean;
}

export function PageLayout({ title, subtitle, children, accentColor, fullWidthContent = false }: PageLayoutProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className={`${fullWidthContent ? '' : 'max-w-4xl mx-auto px-6'} py-12 md:py-20`}>
        <header className={`mb-12 animate-fade-in ${fullWidthContent ? 'max-w-4xl mx-auto px-6' : ''}`}>
          {subtitle && (
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-sm font-body uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity duration-300 mb-4"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="relative overflow-hidden">
                <span className={`inline-block transition-all duration-300 ${isHovered ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                  {subtitle}
                </span>
                <span className={`absolute left-0 top-0 inline-block transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                  Back
                </span>
              </span>
            </Link>
          )}
          <h1 
            className="font-display text-2xl md:text-3xl font-semibold text-foreground"
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
