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
      {/* 50/50 Hero Split */}
      <div className="flex flex-col md:flex-row min-h-[50vh] md:min-h-[60vh]">
        {/* Left side - Color block with title */}
        <div 
          className={`w-full md:w-1/2 flex flex-col justify-end p-8 md:p-12 lg:p-16 ${colorClass}`}
        >
          <div className="animate-fade-in">
            {subtitle && (
              <Link 
                to="/"
                className={`inline-flex items-center gap-2 text-sm font-body uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity duration-300 mb-4 ${useDarkText ? 'text-foreground' : ''}`}
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
            <h1 className={`font-display text-4xl md:text-5xl lg:text-6xl font-semibold ${useDarkText ? 'text-foreground' : ''}`}>
              {title}
            </h1>
          </div>
        </div>
        
        {/* Right side - Empty or subtle pattern */}
        <div className="hidden md:block w-1/2 bg-background" />
      </div>
      
      {/* Content area */}
      <main className="animate-fade-in pb-12 md:pb-20" style={{ animationDelay: "100ms" }}>
        {children}
      </main>
    </div>
  );
}
