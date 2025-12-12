import { ReactNode } from "react";
import { BackButton } from "./BackButton";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  accentColor?: string;
}

export function PageLayout({ title, subtitle, children, accentColor }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <div className="mb-12 animate-fade-in">
          <BackButton />
        </div>
        
        <header className="mb-12 animate-fade-in" style={{ animationDelay: "100ms" }}>
          {subtitle && (
            <span className="text-sm font-body uppercase tracking-widest text-muted-foreground mb-4 block">
              {subtitle}
            </span>
          )}
          <h1 
            className="font-display text-4xl md:text-6xl font-semibold text-foreground"
            style={accentColor ? { color: accentColor } : {}}
          >
            {title}
          </h1>
        </header>
        
        <main className="animate-fade-in" style={{ animationDelay: "200ms" }}>
          {children}
        </main>
      </div>
    </div>
  );
}
