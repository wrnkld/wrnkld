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
      className={`group flex-shrink-0 w-[320px] md:w-[380px] h-[420px] md:h-[480px] rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 ${colorClass}`}
      style={{ 
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-body uppercase tracking-widest opacity-70">
          {subtitle}
        </span>
        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
      </div>
      
      <div>
        <h3 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
          {title}
        </h3>
      </div>
    </Link>
  );
}
