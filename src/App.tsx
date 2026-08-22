import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import MonteCarlo from "./pages/work/MonteCarlo";
import Tanium from "./pages/work/Tanium";

import Books from "./pages/about/Books";
import Records from "./pages/about/Records";
import Experience from "./pages/about/Experience";

const App = () => (
  <TooltipProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about/experience" element={<Experience />} />

        <Route path="/work/montecarlo" element={<MonteCarlo />} />
        <Route path="/work/tanium" element={<Tanium />} />
        <Route path="/work/sas" element={<Navigate to="/" replace />} />
        <Route path="/work/redhat" element={<Navigate to="/" replace />} />

        <Route path="/about/books" element={<Books />} />
        <Route path="/about/records" element={<Records />} />
        {/* Essays now live in accordions on the homepage */}
        <Route path="/words/tools" element={<Navigate to="/" replace />} />
        <Route path="/words/vibes" element={<Navigate to="/" replace />} />
        <Route path="/words/sleeves" element={<Navigate to="/" replace />} />
        <Route path="/words/claude" element={<Navigate to="/" replace />} />

        {/* Redirects from old /designai paths */}
        <Route path="/designai/tools" element={<Navigate to="/" replace />} />
        <Route path="/designai/vibes" element={<Navigate to="/" replace />} />
        <Route path="/designai/sleeves" element={<Navigate to="/" replace />} />
        <Route path="/designai/claude" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </TooltipProvider>
);

export default App;
