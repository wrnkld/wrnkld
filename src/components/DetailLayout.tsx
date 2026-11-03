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
          <div className="px-5">
            <Link
              to="/"
              aria-label="Back to home"
              className="inline-flex items-center gap-1 text-base text-muted-foreground hover:text-foreground transition-colors duration-200 mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
            <h1 className="text-2xl md:text-3xl font-medium leading-tight tracking-tight max-w-3xl">
              {title}
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-3 pb-10 md:pt-4 animate-fade-in">
        <div className="px-5 space-y-6 md:space-y-8 [&>p]:max-w-3xl">{children}</div>
      </main>
    </div>
  );
}
