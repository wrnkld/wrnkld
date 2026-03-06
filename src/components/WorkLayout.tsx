import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface WorkLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  accentColor?: string;
}

export function WorkLayout({ title, subtitle, children, accentColor }: WorkLayoutProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Constrained header */}
      <div className="max-w-4xl mx-auto px-6 pt-12 md:pt-20">
        <header className="mb-12 animate-fade-in">
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
            className="font-display text-2xl md:text-3xl font-medium text-foreground"
            style={accentColor ? { color: accentColor } : {}}
          >
            {title}
          </h1>
        </header>
      </div>
      
      {/* Full-width content area */}
      <main className="animate-fade-in pb-12 md:pb-20" style={{ animationDelay: "100ms" }}>
        {children}
      </main>

      {/* Footer back link */}
      <div className="max-w-4xl mx-auto px-6 pb-12 md:pb-20">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-sm font-body uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Link>
      </div>
    </div>
  );
}

// Helper component for constrained text sections
export function WorkSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`max-w-4xl mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
}

// Helper component for full-width sections
export function WorkFullWidth({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`w-full ${className}`}>
      {children}
    </div>
  );
}
