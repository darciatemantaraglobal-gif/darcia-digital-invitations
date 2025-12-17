import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Import Halaman
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import Order from "./pages/Order";
import NotFound from "./pages/NotFound";
import PreviewFrame from "./pages/PreviewFrame"; 
import Generator from "./pages/Generator";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* 1. Halaman Utama */}
            <Route path="/" element={<Index />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/order" element={<Order />} />
            
            {/* 2. Tool Generator Link (darcia.id/generate) */}
            <Route path="/generate" element={<Generator />} /> 
            
            {/* 3. Preview Undangan Siska (darcia.id/siskaridho) */}
            <Route 
              path="/siskaridho" 
              element={<PreviewFrame url="https://darciasiskaridho.vercel.app" />} 
            />

            {/* 4. Catch-all (Harus paling bawah) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
