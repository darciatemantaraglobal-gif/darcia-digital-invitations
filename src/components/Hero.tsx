import heroImage from "@/assets/story.png"; // Pastikan file ini ada di folder assets

const Hero = () => {
  // Warna krem untuk bagian bawah kurva, sesuaikan jika perlu
  const creamColor = "#F8F5F0"; 

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-start overflow-hidden">
      
      {/* --- BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Wedding couple painted background"
          className="w-full h-full object-cover object-center"
        />
        {/* NOTE: Overlay gelap dihapus agar gambar lukisan terlihat jelas */}
      </div>

      {/* --- MAIN CONTENT --- */}
      {/* Menggunakan justify-start dan padding-top (pt-20) untuk menempatkan teks di area langit */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 flex flex-col items-center justify-start h-full pt-24 md:pt-32 pb-32">
        <div className="max-w-4xl mx-auto text-center w-full flex flex-col items-center gap-4 md:gap-6">
          
          {/* 1. TYPOGRAPHY */}
          <div className="animate-fade-up flex flex-col items-center">
            
            {/* Sub-headline kecil */}
            <span className="text-white text-sm md:text-base tracking-[0.2em] uppercase mb-2 font-light drop-shadow-sm font-serif">
              The Specialised
            </span>

            {/* Main Headline */}
            <h1 className="font-sinera text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] text-white leading-[0.95] drop-shadow-lg">
              Digital <br />
              Wedding <br />
              Invitation
            </h1>

            {/* Description / Tagline */}
            <p className="mt-6 text-white text-lg md:text-2xl font-light italic tracking-wider drop-shadow-md font-serif">
              Every couple has a story
            </p>

          </div>

          {/* 2. FLOATING BUTTON (Opsional: Hapus jika ingin persis seperti gambar referensi tanpa tombol) */}
          <div className="animate-fade-up mt-8" style={{ animationDelay: '0.2s' }}>
            <a
              href="#packages"
              className="group relative inline-flex items-center gap-3 bg-white text-emerald-950 px-8 py-4 md:px-10 md:py-5 rounded-full font-medium text-sm md:text-base transition-all duration-500 hover:bg-emerald-50 hover:scale-105 shadow-lg"
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

      {/* --- BOTTOM CURVE DIVIDER --- */}
      {/* Menggunakan SVG untuk membuat bentuk lengkungan di bagian bawah */}
      <div className="absolute bottom-0 left-0 w-full z-20 leading-0">
        <svg 
          className="block w-full h-auto max-h-[20vh] md:max-h-[25vh]" 
          viewBox="0 0 1440 320" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="none"
        >
          {/* Path ini membentuk lengkungan cekung di tengah */}
          <path 
            fill={creamColor}
            fillOpacity="1" 
            d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,186.7C672,160,768,128,864,128C960,128,1056,160,1152,186.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        {/* Filler solid di bawah SVG untuk memastikan tidak ada celah di layar tinggi */}
        <div className={`w-full h-24 -mt-1`} style={{ backgroundColor: creamColor }}></div>
      </div>

    </section>
  );
};

export default Hero;
