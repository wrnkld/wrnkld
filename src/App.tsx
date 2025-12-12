import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Tanium from "./pages/work/Tanium";
import SAS from "./pages/work/SAS";
import RedHat from "./pages/work/RedHat";
import Books from "./pages/Books";
import Records from "./pages/Records";
import OnDesign from "./pages/words/OnDesign";
import OnProcess from "./pages/words/OnProcess";
import OnTools from "./pages/words/OnTools";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/tanium" element={<Tanium />} />
          <Route path="/work/sas" element={<SAS />} />
          <Route path="/work/redhat" element={<RedHat />} />
          <Route path="/books" element={<Books />} />
          <Route path="/records" element={<Records />} />
          <Route path="/words/on-design" element={<OnDesign />} />
          <Route path="/words/on-process" element={<OnProcess />} />
          <Route path="/words/on-tools" element={<OnTools />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
