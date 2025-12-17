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
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center animate-fade-up">
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

        {/* --- BASIC FEATURES (Clean Style) --- */}
        <div className="max-w-5xl mx-auto mb-20 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="border border-primary/10 rounded-[2rem] p-8 md:p-10 bg-[#F7F0E6]/30">
            <h3 className="font-sinera text-2xl md:text-3xl text-primary mb-8 text-center">
              Fitur Dasar (Included)
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
              {basicFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                  </div>
                  <span className="font-sans text-sm md:text-base text-primary/80 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- PACKAGES CARD (AURIX STYLE GLOW) --- */}
        {/* Style Reference: Dark card with glowing backdrop */}
        <div className="flex justify-center mb-20 animate-fade-up relative z-10" style={{ animationDelay: '0.2s' }}>
          
          {packages.map((pkg, idx) => (
            <div key={idx} className="relative w-full max-w-md group">
              
              {/* 1. GLOW EFFECT (Behind Card) */}
              {/* Efek cahaya berpendar di belakang card, meniru style referensi */}
              <div className="absolute -inset-1 bg-gradient-to-b from-primary/20 to-primary/60 rounded-[2.5rem] blur-2xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
              
              {/* 2. CARD CONTENT */}
              <div className="relative bg-primary text-white rounded-[2rem] p-8 md:p-10 overflow-hidden border border-white/10 shadow-2xl">
                
                {/* Decorative Blur Inside */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-[60px] pointer-events-none"></div>

                {/* --- TOP SECTION: NAME & PRICE --- */}
                <div className="mb-8">
                   <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-sinera text-3xl md:text-4xl tracking-wide">{pkg.name}</h3>
                        <p className="font-sans text-white/60 text-xs uppercase tracking-widest mt-1">{pkg.tagline}</p>
                      </div>
                      {/* Badge "Best" */}
                      <span className="bg-white/10 border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white/80">
                        Popular
                      </span>
                   </div>

                   {/* Price (Besar tapi proporsional) */}
                   <div className="font-sinera text-5xl md:text-6xl text-white mt-6 tracking-tight">
                      {pkg.price}
                      <span className="text-lg text-white/40 font-sans font-light ml-2">/ event</span>
                   </div>
                </div>

                {/* --- ACTION BUTTON (Middle Position like Reference) --- */}
                <Link
                  to="/order"
                  className="block w-full bg-white text-primary text-center py-4 rounded-xl font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-[#F7F0E6] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 mb-10"
                >
                  Pilih Paket
                </Link>

                {/* --- FEATURES LIST (Bottom Section) --- */}
                <div className="border-t border-white/10 pt-8">
                  <p className="font-sans text-white/50 text-xs uppercase tracking-widest mb-6 font-medium">
                    What's included:
                  </p>
                  <ul className="space-y-4">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="font-sans text-white/90 font-light text-sm md:text-base tracking-wide">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
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
