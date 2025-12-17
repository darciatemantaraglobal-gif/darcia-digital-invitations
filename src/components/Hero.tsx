import heroImage from "@/assets/hero-couple.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      
      {/* --- BACKGROUND IMAGE & OVERLAY --- */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Wedding couple"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Overlay dibuat lebih gelap (60%) agar teks putih tanpa kotak tetap terbaca jelas */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      </div>

      {/* --- TOP SECTION: RUNNING TEXT --- */}
      <div className="absolute top-0 w-full z-20">
        <div className="w-full border-b border-white/10 py-3 overflow-hidden bg-black/20 backdrop-blur-sm">
          <div className="animate-marquee whitespace-nowrap text-center">
            <span className="text-ivory/80 text-[10px] md:text-sm tracking-[0.2em] font-light uppercase mx-4">
              Opening Promo • Special Price for First 50 Couples • Create Your Dream Invitation
            </span>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT (CLEAN MODE) --- */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 flex flex-col items-center justify-center h-full pt-12">
        <div className="max-w-4xl mx-auto text-center w-full flex flex-col items-center gap-6 md:gap-8">
          
          {/* 1. TYPOGRAPHY (Tanpa Kotak) */}
          <div className="animate-fade-up flex flex-col items-center">
            
            {/* Sub-headline kecil di atas */}
            <span className="text-ivory/80 text-xs md:text-sm tracking-[0.3em] uppercase mb-4 md:mb-6 font-light">
              The Specialised
            </span>

            {/* Main Headline - Font Sinera */}
            {/* Menggunakan leading-tight atau leading-[0.9] agar teks menumpuk estetik */}
            <h1 className="font-sinera text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-ivory leading-[1.1] md:leading-[1.1] drop-shadow-lg">
              Website <br />
              <span className="italic text-emerald-200">Invitation</span>
            </h1>

            {/* Description */}
            <p className="mt-6 md:mt-8 text-ivory/90 text-sm md:text-lg leading-relaxed max-w-[280px] md:max-w-lg mx-auto font-light tracking-wide">
              Momen pernikahan jadi lebih{" "}
              <span className="text-emerald-300 font-medium">effortless</span>,{" "}
              <span className="text-emerald-300 font-medium">modern</span>, &{" "}
              <span className="text-emerald-300 font-medium">elegant</span>.
            </p>

          </div>

          {/* 2. FLOATING BUTTON */}
          <div className="animate-fade-up mt-4 md:mt-6" style={{ animationDelay: '0.2s' }}>
            <a
              href="#packages"
              className="group relative inline-flex items-center gap-3 bg-white text-emerald-950 px-8 py-4 md:px-10 md:py-5 rounded-full font-medium text-sm md:text-base transition-all duration-500 hover:bg-emerald-100 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <span>Lihat Paket</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>

        {/* Decorative Text (Hidden on mobile to keep it clean) */}
        <div className="absolute bottom-8 left-0 right-0 text-center opacity-50 pointer-events-none hidden md:block">
          <p className="font-serif text-ivory text-xs tracking-[0.4em] uppercase">
            Start a new chapter
          </p>
        </div>
      </div>

    </section>
  );
};

export default Hero;
