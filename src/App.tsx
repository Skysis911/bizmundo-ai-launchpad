import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Index from "./pages/Index";
import Uslugi from "./pages/Uslugi";
import Funkcje from "./pages/Funkcje";
import Cennik from "./pages/Cennik";
import Kontakt from "./pages/Kontakt";
import SpecialOffer from "./pages/SpecialOffer";
import NotFound from "./pages/NotFound";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetails from "./pages/CaseStudyDetails";
import Resources from "./pages/Resources";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/uslugi" element={<Uslugi />} />
              <Route path="/funkcje" element={<Funkcje />} />
              <Route path="/cennik" element={<Cennik />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/oferta-specjalna" element={<SpecialOffer />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:slug" element={<CaseStudyDetails />} />
              <Route path="/zasoby" element={<Resources />} />
              <Route path="/o-nas" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
