import heroImage from "@/assets/hero-couple.jpg";
// Pastikan import logo kamu di sini
// import logoIcon from "@/assets/logo-icon.png"; 

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* --- BACKGROUND IMAGE & OVERLAY --- */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Wedding couple"
          className="w-full h-full object-cover scale-105" // Sedikit scale biar dapet depth
        />
        {/* Dark Overlay yang lebih solid untuk kontras elegan */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      {/* --- TOP SECTION: RUNNING TEXT & LOGO --- */}
      <div className="absolute top-0 w-full z-20 flex flex-col items-center">
        
        {/* 1. Teks Berjalan (Running Text Area) */}
        <div className="w-full bg-foreground/5 backdrop-blur-md border-b border-white/5 py-3 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-center">
            <span className="text-ivory/70 text-xs md:text-sm tracking-[0.2em] font-light uppercase mx-4">
              Opening Promo • Special Price for First 50 Couples • Create Your Dream Invitation
            </span>
          </div>
        </div>

        {/* 2. Logo (Agak ke bawah dikit, tanpa tulisan Darcia) */}
        <div className="mt-8 md:mt-10 animate-fade-down">
            {/* Ganti src dengan variable logo kamu */}
            <img 
                src="/path-to-your-logo-icon.png" 
                alt="Logo" 
                className="h-12 w-auto md:h-16 opacity-90 drop-shadow-lg"
            />
        </div>
      </div>

      {/* --- MAIN CONTENT (GLASSMORPHISM CARD) --- */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Glass Card Container */}
          <div className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl animate-fade-up">
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory font-light leading-tight mb-8">
              Specialised <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-ivory">
                Website
              </span> <br />
              Invitation
            </h1>

            <p className="text-ivory/80 text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-10 font-light tracking-wide">
              Take your wedding to the next level with Darcia. Website invitation yang bikin momen kamu jadi lebih{" "}
              <span className="text-emerald-300 font-medium italic">effortless</span>,{" "}
              <span className="text-emerald-300 font-medium italic">modern</span>, &{" "}
              <span className="text-emerald-300 font-medium italic">elegant</span>.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a
                href="#packages"
                className="group relative inline-flex items-center gap-3 bg-ivory text-black px-8 py-4 rounded-full font-medium transition-all duration-500 hover:bg-emerald-light hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
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
        </div>

        {/* --- DECORATIVE TEXT (Bottom) --- */}
        <div className="absolute bottom-10 left-0 right-0 text-center hidden md:block opacity-60">
          <p className="font-serif text-ivory text-sm tracking-[0.3em] uppercase">
            Time to start a new chapter
          </p>
        </div>
      </div>

    </section>
  );
};

export default Hero;
