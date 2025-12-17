import { Link } from "react-router-dom";
import { ArrowRight, Eye } from "lucide-react";
// Import gambar preview (sementara pake placeholder kalau belum ada)
// import siskaPreview from "@/assets/siska-preview.png"; 

const catalogItems = [
  { 
    name: "Siska", 
    tier: "exclusive", 
    badge: "New Arrival", 
    // UPDATE DI SINI:
    // Pakai slug relatif biar kelihatan pro (darcia.id/siskaridho)
    url: "/siskaridho", 
    // image: siskaPreview 
  },
  // Item lain...
];

const CatalogPreview = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center animate-fade-up">
          <span className="font-south text-primary text-4xl md:text-5xl mb-[-5px] md:mb-[-10px] relative z-10 transform -rotate-2 opacity-90">
            The Catalog
          </span>
          <h2 className="font-sinera text-5xl sm:text-6xl md:text-7xl text-primary leading-[0.9] tracking-tight mb-6">
            Our <br />
            Collections
          </h2>
          <p className="font-sans text-primary/70 text-sm md:text-base italic tracking-wide max-w-2xl mx-auto">
            Temukan desain yang paling mewakili cerita cinta Anda.
          </p>
        </div>

        {/* --- CATALOG GRID --- */}
        <div className="flex justify-center mb-16 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
            
            {catalogItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-[#F7F0E6]/30 border border-primary/10 rounded-[2rem] overflow-hidden hover:shadow-[0_15px_40px_rgba(12,101,135,0.1)] transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="aspect-[4/5] relative overflow-hidden bg-primary/5">
                  
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-primary/20">
                       <span className="font-sinera text-4xl opacity-50">{item.name}</span>
                    </div>
                  )}
                  
                  {/* Overlay Hover & Button */}
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    
                    {/* BUTTON LINK */}
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-primary px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 hover:bg-[#F7F0E6] shadow-xl"
                    >
                      <Eye size={16} />
                      Live Preview
                    </a>

                  </div>

                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-4 left-4 bg-white text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md z-10">
                      {item.badge}
                    </div>
                  )}
                </div>

                {/* Card Info */}
                <div className="p-6 text-center border-t border-primary/5 bg-white/50 backdrop-blur-sm">
                  <h3 className="font-sinera text-3xl text-primary mb-1">{item.name}</h3>
                  <p className="font-sans text-primary/50 text-[10px] uppercase tracking-[0.2em]">
                    {item.tier} Edition
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- VIEW ALL BUTTON --- */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 bg-primary text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-emerald-800 transition-all duration-300 hover:gap-4 shadow-lg hover:shadow-xl"
          >
            Lihat Semua Katalog
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CatalogPreview;
