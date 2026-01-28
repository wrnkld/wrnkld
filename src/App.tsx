import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

import Tanium from "./pages/work/Tanium";
import SAS from "./pages/work/SAS";
import RedHat from "./pages/work/RedHat";
import Books from "./pages/Books";
import Records from "./pages/Records";
import Tools from "./pages/words/Tools";
import Vibes from "./pages/words/Vibes";
import Sleeves from "./pages/words/Sleeves";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about/experience" element={<About />} />
          
          <Route path="/work/tanium" element={<Tanium />} />
          <Route path="/work/sas" element={<SAS />} />
          <Route path="/work/redhat" element={<RedHat />} />
          <Route path="/about/books" element={<Books />} />
          <Route path="/about/records" element={<Records />} />
          <Route path="/designai/tools" element={<Tools />} />
          <Route path="/designai/vibes" element={<Vibes />} />
          <Route path="/designai/sleeves" element={<Sleeves />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
