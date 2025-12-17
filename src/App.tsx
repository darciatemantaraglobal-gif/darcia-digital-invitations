import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import Order from "./pages/Order";
import NotFound from "./pages/NotFound";
// 1. IMPORT INI JANGAN LUPA
import PreviewFrame from "./pages/PreviewFrame"; 
// ... import yang lain
import Generator from "./pages/Generator";

const App = () => (
  // ... rest of code
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/catalog" element={<Catalog />} />
    <Route path="/generate" element={<Generator />} /> {/* <--- TAMBAHIN INI */}
    <Route 
      path="/siskaridho" 
      element={<PreviewFrame url="https://darciasiskaridho.vercel.app" />} 
    />
    <Route path="*" element={<NotFound />} />
  </Routes>
  // ... rest of code
);

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/order" element={<Order />} />
            
            {/* 2. JALUR KHUSUS SISKA (Taruh SEBELUM NotFound) */}
            <Route 
              path="/siskaridho" 
              element={<PreviewFrame url="https://darciasiskaridho.vercel.app" />} 
            />

            {/* Catch-all route harus paling bawah */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
