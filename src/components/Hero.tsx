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
          // object-top: Biar langitnya selalu kelihatan utuh
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* --- MAIN CONTENT --- */}
      {/* pt-20 md:pt-28: Jarak dari atas layar biar pas di tengah langit */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center pt-20 md:pt-28">
        
        {/* 1. LOGO */}
        {/* Jarak mb-2 biar deket sama tulisan The Specialised */}
        <div className="mb-2 md:mb-4">
            <img 
              src={logoImage} 
              alt="Darcia Logo" 
              className="w-14 md:w-20 h-auto object-contain drop-shadow-md opacity-90"
            />
        </div>

        {/* 2. SUB-HEADLINE (Font South) */}
        {/* text-3xl md:text-5xl: Ukuran disamain proporsinya */}
        {/* mb-[-8px] md:mb-[-15px]: Narik tulisan ini ke bawah biar 'nindih' judul utama dikit */}
        <span className="font-south text-white text-[2rem] md:text-5xl drop-shadow-md relative z-20 mb-[-8px] md:mb-[-15px] transform -rotate-3">
          The Specialised
        </span>

        {/* 3. MAIN HEADLINE (Font Sinera) */}
        {/* leading-[0.8]: Ini KUNCINYA. Jarak baris dirapetin banget biar numpuk. */}
        {/* Ukuran font dibikin gede banget biar dominan */}
        <h1 className="font-sinera text-center text-white text-[4rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[8.5rem] leading-[0.8] tracking-tight drop-shadow-lg">
          Digital <br />
          Wedding <br />
          Invitation
        </h1>

        {/* 4. TAGLINE (Font Montserrat) */}
        {/* mt-6: Jarak dari judul utama ke tagline */}
        {/* text-white: Warnanya putih, bukan gelap */}
        <p className="mt-6 text-white text-sm md:text-lg font-sans italic font-light tracking-wide drop-shadow-md">
          Every couple has a story
        </p>

      </div>

    </section>
  );
};

export default Hero;
