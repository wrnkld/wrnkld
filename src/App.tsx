import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { PageRails } from "./components/PageRails";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import MonteCarlo from "./pages/work/MonteCarlo";
import Tanium from "./pages/work/Tanium";

import Books from "./pages/about/Books";
import Records from "./pages/about/Records";

const App = () => (
  <TooltipProvider>
    <BrowserRouter>
      <ScrollToTop />
      <PageRails />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about/experience" element={<Navigate to="/" replace />} />

        <Route path="/work/montecarlo" element={<MonteCarlo />} />
        <Route path="/work/tanium" element={<Tanium />} />
        <Route path="/work/sas" element={<Navigate to="/" replace />} />
        <Route path="/work/redhat" element={<Navigate to="/" replace />} />

        <Route path="/about/books" element={<Books />} />
        <Route path="/about/records" element={<Records />} />
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
