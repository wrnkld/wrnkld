import { ReactNode, Children, isValidElement } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface DetailLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

function isMediaElement(child: React.ReactElement<{ className?: string }>): boolean {
  const type = child.type as string | unknown;
  if (type === "img" || type === "video") return true;
  const cls = child.props?.className ?? "";
  if (type === "div" && cls.includes("grid")) return true;
  if (cls.includes("full-bleed")) return true;
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
    <div className="relative z-10 min-h-screen text-foreground">
      <div className="max-w-4xl mx-auto px-6 pt-16 md:pt-24">
        <header className="mb-8">
          <div>
            {subtitle && (
              <Link
                to="/"
                className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-3 align-baseline"
                aria-label="Back to home"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="relative inline-block overflow-hidden">
                  <span className="invisible block whitespace-nowrap">
                    {subtitle.length >= 4 ? subtitle : "Back"}
                  </span>
                  <span className="absolute inset-0 flex items-center transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0">
                    {subtitle}
                  </span>
                  <span className="absolute inset-0 flex items-center translate-y-full opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    Back
                  </span>
                </span>
              </Link>
            )}
            <h1 className="text-2xl md:text-3xl font-medium">{title}</h1>
          </div>
        </header>
      </div>

      <main className="pb-8 space-y-8 animate-fade-in">{processed}</main>

      <div className="max-w-6xl mx-auto px-6 pt-8 pb-16">
        <footer className="border-t border-b border-border/70">
          <div className="p-5">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
