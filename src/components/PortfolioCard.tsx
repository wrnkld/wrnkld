import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  subtitle: string;
  to: string;
  colorClass: string;
  index: number;
  seriesLabel?: string;
  partLabel?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export function PortfolioCard({ title, subtitle, to, colorClass, index, seriesLabel, partLabel, onClick }: PortfolioCardProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      draggable={false}
      className={`group flex-shrink-0 w-[280px] md:w-[320px] h-[360px] md:h-[400px] rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 select-none ${colorClass}`}
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
        {seriesLabel && (
          <span className="text-sm font-body opacity-70 block mb-2">
            {seriesLabel}
          </span>
        )}
        <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight">
          {title}
        </h3>
        {partLabel && (
          <span className="text-sm font-body opacity-70 block mt-2">
            {partLabel}
          </span>
        )}
      </div>
    </Link>
  );
}
