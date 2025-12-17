import { Check, Sparkle } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Exclusive",
    tagline: "All-in-One Solution",
    price: "Rp 350.000",
    features: [
      "Semua Fitur Dasar",
      "Desain Premium",
      "Masa Aktif 8 Bulan",
      "Foto (Max 15)",
      "Love Story Timeline",
      "Amplop Digital",
      "Musik Latar (Autoplay)",
    ],
    highlight: true,
  },
];

const basicFeatures = [
  "Unlimited Share",
  "Personalized Name",
  "Pilihan Bahasa",
  "Navigasi Peta",
  "Countdown Timer",
  "Kolom Ucapan",
  "RSVP Form",
  "Protokol Kesehatan",
  "Custom Doa",
];

const Packages = () => {
  return (
    <section id="packages" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 flex flex-col items-center animate-fade-up">
          <span className="font-south text-primary text-4xl md:text-5xl mb-[-5px] md:mb-[-10px] relative z-10 transform -rotate-2 opacity-90">
            The Options
          </span>
          <h2 className="font-sinera text-5xl sm:text-6xl md:text-7xl text-primary leading-[0.9] tracking-tight mb-6">
            Packages & <br />
            Features
          </h2>
          <p className="font-sans text-primary/70 text-sm md:text-base italic tracking-wide">
            Pick a package that suits your story
          </p>
        </div>

        {/* --- PACKAGES CARD (SLIM & GRADIENT) --- */}
        <div className="flex justify-center mb-20 animate-fade-up relative z-10" style={{ animationDelay: '0.2s' }}>
          
          {packages.map((pkg, idx) => (
            // max-w-sm: Ukuran card dibuat lebih ramping (Compact)
            <div key={idx} className="relative w-full max-w-sm group">
              
              {/* 1. GLOW EFFECT */}
              <div className="absolute -inset-1 bg-gradient-to-b from-primary/40 to-primary/10 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-100 transition duration-500"></div>
              
              {/* 2. CARD CONTENT */}
              {/* p-6 md:p-8: Padding disesuaikan biar pas dengan ukuran card yang lebih kecil */}
              <div className="relative bg-gradient-to-br from-primary to-[#063445] text-white rounded-[2rem] p-6 md:p-8 overflow-hidden border border-white/10 shadow-2xl">
                
                {/* Decorative Blur Inside */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-[50px] pointer-events-none"></div>

                {/* --- TOP SECTION --- */}
                <div className="mb-6 relative z-10">
                   <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-sinera text-3xl md:text-4xl tracking-wide">{pkg.name}</h3>
                        <p className="font-sans text-white/60 text-[10px] uppercase tracking-widest mt-1">{pkg.tagline}</p>
                      </div>
                      <span className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                        Popular
                      </span>
                   </div>

                   {/* Price (Sedikit dikecilin biar muat enak) */}
                   <div className="font-sinera text-4xl md:text-5xl text-white mt-5 tracking-tight drop-shadow-lg">
                      {pkg.price}
                      <span className="text-base text-white/40 font-sans font-light ml-2">/ event</span>
                   </div>
                </div>

                {/* --- ACTION BUTTON --- */}
                <Link
                  to="/order"
                  className="block w-full bg-white text-primary text-center py-3.5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#F7F0E6] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-[1.02] transition-all duration-300 mb-8 relative z-10"
                >
                  Pilih Paket
                </Link>

                {/* --- FEATURES SECTION --- */}
                <div className="border-t border-white/10 pt-6 relative z-10">
                  
                  {/* A. EXCLUSIVE FEATURES */}
                  <div className="mb-6">
                    <p className="font-sans text-white/60 text-[10px] uppercase tracking-widest mb-3 font-bold">
                      Exclusive Features:
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                            <Sparkle className="w-2.5 h-2.5 text-white" />
                          </div>
                          <span className="font-sans text-white font-medium text-xs md:text-sm tracking-wide">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* B. BASIC FEATURES (Merged) */}
                  <div className="pt-5 border-t border-white/10 border-dashed">
                    <p className="font-sans text-white/50 text-[10px] uppercase tracking-widest mb-3 font-bold">
                      Also Includes:
                    </p>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-2">
                      {basicFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                           <Check className="w-3 h-3 text-white/40 flex-shrink-0" />
                           <span className="font-sans text-white/60 text-[10px] md:text-xs font-light leading-tight">
                             {feature}
                           </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* --- CUSTOM DESIGN CTA --- */}
        <div className="max-w-4xl mx-auto text-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="bg-[#F7F0E6] rounded-[2rem] p-10 md:p-14 border border-primary/5">
            <h3 className="font-sinera text-3xl md:text-4xl text-primary mb-4">
              Custom Design?
            </h3>
            <p className="font-sans text-primary/70 mb-8 max-w-lg mx-auto leading-relaxed">
              Punya konsep visual sendiri atau ingin desain yang benar-benar unik? 
              Kami siap mewujudkannya.
            </p>
            <a
              href="https://wa.me/6285265048930?text=Halo%20kak,%20saya%20mau%20konsul%20terkait%20Custom%20Design"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary text-primary px-10 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
            >
              Konsultasi
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Packages;
