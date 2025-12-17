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
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center pt-20 md:pt-28">
        
        {/* 1. LOGO */}
        <div className="mb-4 md:mb-6">
            <img 
              src={logoImage} 
              alt="Darcia Logo" 
              className="w-14 md:w-20 h-auto object-contain drop-shadow-md opacity-90"
            />
        </div>

        {/* 2. SUB-HEADLINE (LURUS) */}
        {/* Hapus class 'transform -rotate-3' biar lurus */}
        <span className="font-south text-white text-[2.5rem] md:text-6xl drop-shadow-md relative z-20 mb-[-5px] md:mb-[-10px]">
          The Specialised
        </span>

        {/* 3. MAIN HEADLINE (SPASI LEBIH LEGA) */}
        {/* leading-[1.1]: Jarak antar baris diperlebar biar gak dempet */}
        <h1 className="font-sinera text-center text-white text-[4rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[8.5rem] leading-[1.1] tracking-tight drop-shadow-lg">
          Digital <br />
          Wedding <br />
          Invitation
        </h1>

        {/* 4. TAGLINE */}
        <p className="mt-8 text-white text-sm md:text-lg font-sans italic font-light tracking-wide drop-shadow-md">
          Every couple has a story
        </p>

      </div>

    </section>
  );
};

export default Hero;
