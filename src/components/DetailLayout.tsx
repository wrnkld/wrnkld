import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface DetailLayoutProps {
  title: string;
  children: ReactNode;
}

export function DetailLayout({ title, children }: DetailLayoutProps) {
  return (
    <div className="relative z-10 min-h-screen text-foreground">
      <header className="pt-16 md:pt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="px-5 py-8">
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
              className="inline-flex items-center gap-2 text-lg font-medium tracking-tight hover:text-muted-foreground transition-colors"
              aria-label="Back to home"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
