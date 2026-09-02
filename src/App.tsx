import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Experience from "./pages/about/Experience";

import MonteCarlo from "./pages/work/MonteCarlo";
import Tanium from "./pages/work/Tanium";
import SAS from "./pages/work/SAS";
import RedHat from "./pages/work/RedHat";
import Books from "./pages/about/Books";
import Records from "./pages/about/Records";
import Tools from "./pages/words/Tools";
import Vibes from "./pages/words/Vibes";
import Sleeves from "./pages/words/Sleeves";
import Claude from "./pages/words/Claude";

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
        <Route path="/work/sas" element={<SAS />} />
        <Route path="/work/redhat" element={<RedHat />} />
        <Route path="/about/books" element={<Books />} />
        <Route path="/about/records" element={<Records />} />
        <Route path="/words/tools" element={<Tools />} />
        <Route path="/words/vibes" element={<Vibes />} />
        <Route path="/words/sleeves" element={<Sleeves />} />
        <Route path="/words/claude" element={<Claude />} />
        {/* Redirects from old /designai paths */}
        <Route path="/designai/tools" element={<Navigate to="/words/tools" replace />} />
        <Route path="/designai/vibes" element={<Navigate to="/words/vibes" replace />} />
        <Route path="/designai/sleeves" element={<Navigate to="/words/sleeves" replace />} />
        <Route path="/designai/claude" element={<Navigate to="/words/claude" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </TooltipProvider>
);

export default App;
