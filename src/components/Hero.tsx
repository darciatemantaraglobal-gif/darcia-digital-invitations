import heroImage from "@/assets/story.png";
import logoImage from "@/assets/darcia-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-start overflow-hidden">
      
      {/* --- BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Wedding couple background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 flex flex-col items-center justify-start h-full pt-20 md:pt-32">
        <div className="max-w-4xl mx-auto text-center w-full flex flex-col items-center">
          
          <div className="animate-fade-up flex flex-col items-center">
            
            {/* 1. LOGO */}
            <div className="mb-6 md:mb-8"> {/* Jarak logo ke teks ditambah dikit biar lega */}
               <img 
                 src={logoImage} 
                 alt="Darcia Logo" 
                 className="w-12 md:w-16 h-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] opacity-90"
               />
            </div>

            {/* 2. SUB-HEADLINE (Font South) */}
            {/* mb-[-8px] md:mb-[-15px]: Negative margin biar "nangkring" di atas headline */}
            <span className="font-south text-white text-4xl md:text-6xl drop-shadow-md relative z-10 mb-[-8px] md:mb-[-15px] transform -rotate-3 ml-[-20px] md:ml-[-40px]">
              The Specialised
            </span>

            {/* 3. MAIN HEADLINE (GLOW LEBIH REDUP) */}
            {/* Update Text Shadow: Opacity diturunkan (0.5 & 0.3) biar gak terlalu silau */}
            <h1 className="font-sinera text-[3.5rem] sm:text-6xl md:text-8xl lg:text-[8rem] text-white leading-[0.85] tracking-tight [text-shadow:_0_2px_5px_rgba(0,0,0,0.3),_0_0_20px_rgba(255,255,255,0.5),_0_0_40px_rgba(255,255,255,0.3)]">
              Digital <br />
              Wedding <br />
              Invitation
            </h1>

            {/* 4. TAGLINE (Font Montserrat) */}
            {/* mt-8: Jarak agak jauh dari headline biar clean */}
            <p className="mt-8 text-white/90 text-xs md:text-base font-sans italic font-light tracking-[0.1em] drop-shadow-md uppercase opacity-80">
              Every couple has a story
            </p>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
