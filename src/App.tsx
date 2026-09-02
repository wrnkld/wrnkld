import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Experience from "./pages/about/Experience";
import WordPage from "./pages/words/WordPage";

import MonteCarlo from "./pages/work/MonteCarlo";
import Tanium from "./pages/work/Tanium";
import SAS from "./pages/work/SAS";
import RedHat from "./pages/work/RedHat";
import Books from "./pages/about/Books";
import Records from "./pages/about/Records";

// Old /designai/* essay URLs now live under /words/*.
const DesignAiRedirect = () => {
  const { slug } = useParams();
  return <Navigate to={`/words/${slug}`} replace />;
};

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
        <Route path="/words/:slug" element={<WordPage />} />
        <Route path="/designai/:slug" element={<DesignAiRedirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </TooltipProvider>
);

export default App;
