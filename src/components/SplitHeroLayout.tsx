import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Color class to text color mapping (light vs dark text)
const darkTextColors = ["card-mustard", "card-coral"];

interface SplitHeroLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  colorClass: string;
}

export function SplitHeroLayout({ title, subtitle, children, colorClass }: SplitHeroLayoutProps) {
  const [isHovered, setIsHovered] = useState(false);
  const useDarkText = darkTextColors.includes(colorClass);

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed left panel - hidden below lg breakpoint */}
      <div 
        className={`hidden lg:flex fixed left-0 top-0 w-1/2 h-screen flex-col justify-between p-12 xl:p-16 z-10 ${colorClass}`}
      >
        {/* Top: Subtitle/back link */}
        <div className="animate-fade-in">
          {subtitle && (
            <Link 
              to="/"
              className={`inline-flex items-center gap-2 text-sm font-body uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity duration-300 ${useDarkText ? 'text-foreground' : ''}`}
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
        </div>
        
        {/* Bottom: Title */}
        <div className="animate-fade-in">
          <h1 className={`font-display text-4xl lg:text-5xl xl:text-6xl font-semibold ${useDarkText ? 'text-foreground' : ''}`}>
            {title}
          </h1>
        </div>
      </div>

      {/* Mobile/tablet header - shown below lg breakpoint */}
      <div className={`lg:hidden flex flex-col justify-between p-8 min-h-[40vh] ${colorClass}`}>
        {/* Top: Subtitle/back link */}
        <div className="animate-fade-in">
          {subtitle && (
            <Link 
              to="/"
              className={`inline-flex items-center gap-2 text-sm font-body uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity duration-300 ${useDarkText ? 'text-foreground' : ''}`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{subtitle}</span>
            </Link>
          )}
        </div>
        
        {/* Bottom: Title */}
        <div className="animate-fade-in">
          <h1 className={`font-display text-3xl md:text-4xl font-semibold ${useDarkText ? 'text-foreground' : ''}`}>
            {title}
          </h1>
        </div>
      </div>
      
      {/* Scrolling right content area */}
      <main className="lg:ml-[50%] animate-fade-in" style={{ animationDelay: "100ms" }}>
        {children}
      </main>
    </div>
  );
}
