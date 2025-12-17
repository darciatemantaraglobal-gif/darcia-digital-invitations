import { Check, Sparkle, Star } from "lucide-react";
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
    <section id="packages" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12 md:mb-20 flex flex-col items-center animate-fade-up">
          <span className="font-south text-primary text-3xl md:text-5xl mb-[-5px] md:mb-[-10px] relative z-10 transform -rotate-2 opacity-90">
            The Options
          </span>
          <h2 className="font-sinera text-4xl sm:text-6xl md:text-7xl text-primary leading-[0.9] tracking-tight mb-4">
            Packages & <br />
            Features
          </h2>
          <p className="font-sans text-primary/70 text-xs md:text-base italic tracking-wide max-w-xs md:max-w-none mx-auto">
            Pick a package that suits your story
          </p>
        </div>

        {/* --- BASIC FEATURES (Compact Grid) --- */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="border border-primary/10 rounded-3xl p-6 md:p-10 bg-[#F7F0E6]/30">
            <h3 className="font-sinera text-xl md:text-3xl text-primary mb-6 text-center">
              Fitur Dasar (Included)
            </h3>
            
            {/* Mobile: 2 Kolom Rapat | Desktop: 3 Kolom Lega */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-2 md:gap-x-8">
              {basicFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 md:gap-3">
                  {/* Icon Check Kecil */}
                  <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary/60 flex-shrink-0" strokeWidth={2.5} />
                  {/* Text Compact */}
                  <span className="font-sans text-[11px] md:text-sm text-primary/80 font-medium leading-tight">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- PACKAGES CARD (ICONIC & ELEGANT) --- */}
        <div className="flex justify-center mb-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              // Card Container
              className="relative w-full max-w-sm md:max-w-lg group hover:-translate-y-2 transition-transform duration-500"
            >
              {/* === CARD VISUAL === */}
              <div className="bg-primary text-white rounded-[2rem] md:rounded-[2.5rem] p-1 shadow-[0_15px_40px_rgba(12,101,135,0.25)]">
                
                {/* INNER BORDER FRAME (The "Invitation" Look) */}
                <div className="border border-white/20 rounded-[1.8rem] md:rounded-[2.3rem] p-6 md:p-10 flex flex-col items-center h-full relative overflow-hidden">
                  
                  {/* Dekorasi Background Halus */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>

                  {/* Badge */}
                  <div className="mb-6">
                     <span className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                       Best Choice
                     </span>
                  </div>

                  {/* Title & Price */}
                  <h3 className="font-sinera text-4xl md:text-5xl mb-1">{pkg.name}</h3>
                  <p className="font-sans text-white/60 text-xs md:text-sm tracking-widest uppercase mb-8">{pkg.tagline}</p>
                  
                  <div className="font-sinera text-5xl md:text-7xl text-white mb-8 md:mb-10 tracking-tight">
                    <span className="text-2xl md:text-3xl align-top opacity-50 mr-1">Rp</span>
                    350<span className="text-2xl md:text-3xl opacity-50">k</span>
                  </div>

                  {/* Feature List (Centered & Iconic) */}
                  <ul className="space-y-3 md:space-y-4 mb-10 w-full">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center justify-center gap-3 text-center">
                        {/* Ganti Check dengan Sparkle biar lebih 'Magic' */}
                        <Sparkle className="w-3 h-3 md:w-4 md:h-4 text-[#F7F0E6] flex-shrink-0 opacity-70" />
                        <span className="font-sans text-white/90 font-light text-sm md:text-base tracking-wide">
                          {feature}
                        </span>
                        <Sparkle className="w-3 h-3 md:w-4 md:h-4 text-[#F7F0E6] flex-shrink-0 opacity-70" />
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <Link
                    to="/order"
                    className="w-full bg-[#F7F0E6] text-primary py-3.5 md:py-4 rounded-full font-bold uppercase tracking-[0.15em] text-xs md:text-sm hover:bg-white hover:scale-[1.02] transition-all duration-300 shadow-lg"
                  >
                    Pilih Paket
                  </Link>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- CUSTOM DESIGN CTA (Compact) --- */}
        <div className="max-w-3xl mx-auto text-center animate-fade-up px-4" style={{ animationDelay: '0.3s' }}>
          <div className="bg-white border border-primary/10 rounded-3xl p-8 md:p-12 shadow-sm">
            <h3 className="font-sinera text-2xl md:text-4xl text-primary mb-3">
              Custom Design?
            </h3>
            <p className="font-sans text-primary/70 text-xs md:text-sm mb-6 max-w-md mx-auto leading-relaxed">
              Ingin desain yang benar-benar unik dan beda? Kami siap mewujudkannya.
            </p>
            <a
              href="https://wa.me/6285265048930?text=Halo%20kak,%20saya%20mau%20konsul%20terkait%20Custom%20Design"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary border-b border-primary/30 pb-1 text-xs md:text-sm font-bold uppercase tracking-widest hover:border-primary hover:text-emerald-800 transition-all"
            >
              Konsultasi Sekarang
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Packages;
