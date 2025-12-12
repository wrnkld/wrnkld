import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  subtitle: string;
  to: string;
  colorClass: string;
  index: number;
}

export function PortfolioCard({ title, subtitle, to, colorClass, index }: PortfolioCardProps) {
  return (
    <Link
      to={to}
      className={`group flex-shrink-0 w-[320px] md:w-[380px] h-[420px] md:h-[480px] rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 ${colorClass}`}
      style={{ 
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div>
        <span className="text-sm font-body uppercase tracking-widest opacity-70">
          {subtitle}
        </span>
      </div>
      
      <div className="space-y-4">
        <h3 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-sm font-body font-medium">View</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
