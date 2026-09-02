import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface DetailLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function DetailLayout({ title, subtitle, children }: DetailLayoutProps) {
  return (
    <div className="relative z-10 min-h-screen text-foreground">
      <header className="border-b border-border/70 pt-16 md:pt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="px-5 py-8">
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
            <h1 className="text-2xl md:text-3xl font-medium leading-tight tracking-tight max-w-3xl">
              {title}
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 animate-fade-in">
        <div className="px-5 space-y-8 [&>p]:max-w-3xl">{children}</div>
      </main>

      <footer className="border-t border-border/70">
        <div className="max-w-6xl mx-auto px-6">
          <div className="px-5 py-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
