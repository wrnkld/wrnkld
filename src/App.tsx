import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Experience from "./pages/about/Experience";

import MonteCarlo from "./pages/work/MonteCarlo";
import Tanium from "./pages/work/Tanium";
import Books from "./pages/about/Books";
import Records from "./pages/about/Records";

const App = () => (
  <TooltipProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/preview" element={<Navigate to="/" replace />} />
        <Route path="/about/experience" element={<Experience />} />

        <Route path="/work/montecarlo" element={<MonteCarlo />} />
        <Route path="/work/tanium" element={<Tanium />} />
        <Route path="/about/books" element={<Books />} />
        <Route path="/about/records" element={<Records />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </TooltipProvider>
);

export default App;
