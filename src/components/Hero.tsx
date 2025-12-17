import heroImage from "@/assets/story.png";
import logoImage from "@/assets/darcia-logo.png";

const Hero = () => {
  return (
    // Kita bungkus dengan fragment (<>...</>) atau div wrapper karena ada 2 section terpisah
    <div className="flex flex-col w-full min-h-screen">
      
      {/* === BAGIAN 1: ATAS (GAMBAR & JUDUL UTAMA) === */}
      {/* 'flex-grow' agar bagian ini mengisi sisa ruang di atas bagian bawah */}
      <section className="relative flex-grow flex flex-col items-center justify-start overflow-hidden">
        
        {/* --- BACKGROUND IMAGE --- */}
        {/* Gambar ini sudah punya lengkungan transparan di bawahnya */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Wedding couple background"
            // object-top ensures bagian atas gambar (langit) selalu terlihat jelas
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* --- MAIN CONTENT (Logo & Headlines) --- */}
        {/* pt-16 md:pt-24: Mengatur posisi teks agar pas di area langit */}
        <div className="relative z-10 container mx-auto px-6 md:px-8 flex flex-col items-center justify-start h-full pt-16 md:pt-24 pb-10">
          <div className="max-w-4xl mx-auto text-center w-full flex flex-col items-center">
            
            <div className="animate-fade-up flex flex-col items-center">
              
              {/* A. LOGO */}
              <div className="mb-4 md:mb-6">
                 <img 
                   src={logoImage} 
                   alt="Darcia Logo" 
                   className="w-12 md:w-16 h-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] opacity-90"
                 />
              </div>

              {/* B. SUB-HEADLINE (Font South) */}
              {/* Posisi relatif dan margin negatif agar menempel di atas headline */}
              <span className="font-south text-white text-4xl md:text-5xl lg:text-6xl drop-shadow-md relative z-10 mb-[-10px] md:mb-[-18px] transform -rotate-2">
                The Specialised
              </span>

              {/* C. MAIN HEADLINE (Font Sinera) */}
              {/* leading-[0.9]: Jarak antar baris rapat tapi tidak terlalu bertumpuk, sesuai referensi */}
              <h1 className="font-sinera text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] text-white leading-[0.9] tracking-tight [text-shadow:_0_2px_5px_rgba(0,0,0,0.3),_0_0_20px_rgba(255,255,255,0.5),_0_0_40px_rgba(255,255,255,0.3)]">
                Digital <br />
                Wedding <br />
                Invitation
              </h1>

              {/* Tagline "Every couple..." DIPINDAH DARI SINI */}

            </div>

          </div>
        </div>
      </section>

      {/* === BAGIAN 2: BAWAH (AREA KREM & TAGLINE) === */}
      {/* Section ini akan muncul tepat di bawah gambar yang melengkung */}
      {/* bg-cream: Menggunakan warna krem dari konfigurasi tailwind */}
      <section className="bg-cream py-6 md:py-8 flex items-center justify-center relative z-20 -mt-1">
        {/* -mt-1 untuk memastikan tidak ada celah garis tipis antara gambar dan div ini */}
        
        {/* D. TAGLINE (Font Montserrat) */}
        {/* text-emerald-dark: Warna teks diubah jadi gelap karena backgroundnya terang */}
        <p className="text-emerald-dark text-sm md:text-lg font-sans italic font-light tracking-wider uppercase">
          Every couple has a story
        </p>
      </section>

    </div>
  );
};

export default Hero;
