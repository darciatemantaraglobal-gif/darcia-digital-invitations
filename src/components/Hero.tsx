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
      <div className="relative z-10 container mx-auto px-6 md:px-8 flex flex-col items-center justify-start h-full pt-20 md:pt-28">
        <div className="max-w-4xl mx-auto text-center w-full flex flex-col items-center">
          
          <div className="animate-fade-up flex flex-col items-center">
            
            {/* 1. LOGO */}
            <div className="mb-2 md:mb-4">
               <img 
                 src={logoImage} 
                 alt="Darcia Logo" 
                 className="w-12 md:w-16 h-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] opacity-90"
               />
            </div>

            {/* 2. SUB-HEADLINE (Font South.otf) */}
            {/* - font-south: Menggunakan font South.otf dari CSS
                - transform -rotate-2: Miring sedikit biar lebih natural kayak tulisan tangan
                - mb-[-10px]: Negative margin biar nempel dikit ke headline bawahnya
            */}
            <span className="font-south text-white text-4xl md:text-6xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] relative z-10 mb-[-10px] md:mb-[-15px] transform -rotate-2">
              The Specialised
            </span>

            {/* 3. MAIN HEADLINE (GLOWING EFFECT) */}
            <h1 className="font-sinera text-[3.5rem] sm:text-6xl md:text-8xl lg:text-[7.5rem] text-white leading-[0.9] [text-shadow:_0_2px_5px_rgba(0,0,0,0.3),_0_0_20px_rgba(255,255,255,0.8),_0_0_40px_rgba(255,255,255,0.5)]">
              Digital <br />
              Wedding <br />
              Invitation
            </h1>

            {/* 4. TAGLINE (Font Montserrat) */}
            <p className="mt-4 md:mt-6 text-white/90 text-sm md:text-lg font-sans italic font-light tracking-wide drop-shadow-md">
              Every couple has a story
            </p>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
