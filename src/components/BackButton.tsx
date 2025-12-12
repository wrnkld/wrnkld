import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 font-body text-sm"
    >
      <ArrowLeft className="w-4 h-4" />
      <span>Back</span>
    </Link>
  );
}
