import heroImage from "@/assets/hero-couple.jpg";
// Import logo dihapus karena tidak dipakai lagi di section ini

const Hero = () => {
  return (
    // Menggunakan min-h-[100dvh] untuk support mobile browser modern
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      
      {/* --- BACKGROUND IMAGE & OVERLAY --- */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Wedding couple"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Overlay gelap solid untuk readability maksimal */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      {/* --- TOP SECTION: RUNNING TEXT ONLY --- */}
      <div className="absolute top-0 w-full z-20">
        {/* Teks Berjalan */}
        <div className="w-full bg-foreground/5 backdrop-blur-md border-b border-white/5 py-2 md:py-3 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-center">
            <span className="text-ivory/70 text-[10px] md:text-sm tracking-[0.2em] font-light uppercase mx-4">
              Opening Promo • Special Price for First 50 Couples • Create Your Dream Invitation
            </span>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT (GLASSMORPHISM CARD) --- */}
      {/* Container utama */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center w-full">
          
          {/* Glass Card - Logo sudah hilang, jadi layout lebih clean */}
          <div className="p-6 md:p-12 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl animate-fade-up">
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-ivory font-light leading-tight mb-4 md:mb-8">
              Specialised <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-ivory pr-1">
                Website
              </span> <br />
              Invitation
            </h1>

            <p className="text-ivory/80 text-sm md:text-lg leading-relaxed max-w-xs md:max-w-lg mx-auto mb-8 md:mb-10 font-light tracking-wide">
              Take your wedding to the next level with Darcia. Momen pernikahan jadi lebih{" "}
              <span className="text-emerald-300 font-medium italic">effortless</span>,{" "}
              <span className="text-emerald-300 font-medium italic">modern</span>, &{" "}
              <span className="text-emerald-300 font-medium italic">elegant</span>.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a
                href="#packages"
                className="group relative inline-flex items-center gap-3 bg-ivory text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-medium text-sm md:text-base transition-all duration-500 hover:bg-emerald-light hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
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
        <div className="absolute bottom-6 md:bottom-10 left-0 right-0 text-center opacity-40 md:opacity-60 pointer-events-none">
          <p className="font-serif text-ivory text-[10px] md:text-sm tracking-[0.2em] uppercase">
            Time to start a new chapter
          </p>
        </div>
      </div>

    </section>
  );
};

export default Hero;
