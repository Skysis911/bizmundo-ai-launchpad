
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react"; // Import React explicitly
import Index from "./pages/Index";
import Uslugi from "./pages/Uslugi";
import Funkcje from "./pages/Funkcje";
import Cennik from "./pages/Cennik";
import Kontakt from "./pages/Kontakt";
import SpecialOffer from "./pages/SpecialOffer";
import NotFound from "./pages/NotFound";

// Create a client outside of the component
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
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
