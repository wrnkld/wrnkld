import { ReactNode, Children, isValidElement } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface DetailLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  /** Legacy, ignored */
  colorClass?: string;
}

function isMediaElement(child: React.ReactElement<{ className?: string }>): boolean {
  const type = child.type as string | unknown;
  if (type === "img" || type === "video") return true;
  if (type === "div" && (child.props?.className ?? "").includes("grid")) return true;
  return false;
}

export function DetailLayout({ title, subtitle, children }: DetailLayoutProps) {
  const processed = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;
    if (isMediaElement(child)) {
      return <div className="max-w-6xl mx-auto px-6">{child}</div>;
    }
    return <div className="max-w-4xl mx-auto px-6">{child}</div>;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 pt-12 md:pt-16">
        <header className="mb-10 mt-2">
          {subtitle && (
            <Link
              to="/"
              className="group relative inline-block text-sm text-muted-foreground hover:text-foreground transition-colors mb-2 overflow-hidden align-baseline"
              aria-label="Back to home"
            >
              {/* sizer — preserves width of the wider label */}
              <span className="invisible block whitespace-nowrap">
                {subtitle.length >= 4 ? subtitle : "Back"}
              </span>
              <span className="absolute inset-0 flex items-center transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0">
                {subtitle}
              </span>
              <span className="absolute inset-0 flex items-center gap-1.5 translate-y-full opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowLeft className="w-4 h-4" />
                Back
              </span>
            </Link>
          )}
          <h1 className="text-2xl md:text-3xl font-medium">{title}</h1>
        </header>
      </div>

      <main className="pb-20 space-y-8 animate-fade-in">{processed}</main>

      <footer className="max-w-4xl mx-auto px-6 pb-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Link>
      </footer>
    </div>
  );
}
