import heroImage from "@/assets/story.png";
import logoImage from "@/assets/darcia-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-start overflow-hidden">
      
      {/* --- BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Wedding couple background"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* --- MAIN CONTENT --- */}
      {/* Padding atas disesuaikan biar teks pas di tengah area langit */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center pt-24 md:pt-32">
        
        {/* 1. LOGO */}
        <div className="mb-4">
            <img 
              src={logoImage} 
              alt="Darcia Logo" 
              className="w-10 md:w-14 h-auto object-contain drop-shadow-md opacity-90"
            />
        </div>

        {/* 2. SUB-HEADLINE (The Specialised) */}
        {/* Ukuran: text-3xl (mobile) -> text-5xl (desktop). Gak raksasa lagi. */}
        {/* Lurus (tanpa rotate), margin bawah sedikit minus biar deket sama headline */}
        <span className="font-south text-white text-3xl md:text-5xl drop-shadow-md relative z-20 mb-[-5px] md:mb-[-10px]">
          The Specialised
        </span>

        {/* 3. MAIN HEADLINE (Digital Wedding Invitation) */}
        {/* Ukuran: text-5xl (mobile) -> text-7xl (desktop). Ini ukuran "Sweet Spot". */}
        {/* Leading: 1.05 (sedikit longgar biar enak dibaca, tapi tetep satu kesatuan) */}
        <h1 className="font-sinera text-center text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight drop-shadow-lg">
          Digital <br />
          Wedding <br />
          Invitation
        </h1>

        {/* 4. TAGLINE */}
        {/* Ukuran font kecil manis, jarak mt-6 biar gak terlalu jauh */}
        <p className="mt-6 text-white text-xs md:text-base font-sans italic font-light tracking-wider drop-shadow-md opacity-90">
          Every couple has a story
        </p>

      </div>

    </section>
  );
};

export default Hero;
