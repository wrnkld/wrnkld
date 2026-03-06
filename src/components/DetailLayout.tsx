import { ReactNode, Children, isValidElement } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface DetailLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  colorClass?: string;
  
}

// Helper to check if element is media (img, video, or a div containing them like grids)
function isMediaElement(child: React.ReactElement<{ className?: string }>): boolean {
  const type = child.type;
  if (type === 'img' || type === 'video') {
    return true;
  }
  // Check if it's a div with grid class (image grids)
  if (type === 'div' && child.props?.className?.includes('grid')) {
    return true;
  }
  return false;
}

export function DetailLayout({ title, subtitle, children, colorClass }: DetailLayoutProps) {
  // Process children to wrap them appropriately
  const processedChildren = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;
    
    if (isMediaElement(child)) {
      // Media elements get the wider "bust out" container
      return (
        <div className="max-w-5xl mx-auto px-6">
          {child}
        </div>
      );
    }
    
    // Text elements stay in the narrower container
    return (
      <div className="max-w-3xl mx-auto px-6">
        {child}
      </div>
    );
  });

  return (
    <div className="min-h-screen bg-background">
      {colorClass && <div className={`h-1.5 w-full ${colorClass}`} />}
      <div className="py-16 md:py-24 space-y-8">
        {/* Header stays narrow */}
        <div className="max-w-3xl mx-auto px-6">
          {subtitle && (
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-xs font-body uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-3 h-3" />
              <span className="relative overflow-hidden">
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                  {subtitle}
                </span>
                <span className="absolute left-0 top-full inline-block transition-transform duration-300 group-hover:-translate-y-full">
                  Back
                </span>
              </span>
          </Link>
          )}
          <h1 className="font-display text-2xl md:text-3xl font-medium text-foreground mt-4">
              {title}
            </h1>
        </div>
        
        {/* Content with mixed widths */}
        <div className="space-y-8">
          {processedChildren}
        </div>

        {/* Footer back link */}
        <div className="max-w-3xl mx-auto px-6 pt-12">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-xs font-body uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Back</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
