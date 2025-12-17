const Philosophy = () => {
  return (
    // bg-gradient-to-b: Mulai dari #F7F0E6 (sama kayak Hero) terus gradasi ke putih pelan-pelan
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#F7F0E6] via-[#F7F0E6] to-white flex flex-col items-center justify-center">
      
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          <div className="animate-fade-up flex flex-col items-center gap-6">
            
            {/* 1. HEADLINE (Font Sinera) */}
            <h2 className="text-primary leading-[1.1] tracking-tight mb-2">
              <span className="font-sinera text-5xl sm:text-6xl md:text-7xl block">
                Simple,
              </span>
              <span className="font-sinera text-5xl sm:text-6xl md:text-7xl block italic text-primary/80">
                but Classy.
              </span>
            </h2>

            {/* 2. BODY TEXT (Font Montserrat) */}
            {/* Langsung masuk ke deskripsi utama */}
            <p className="font-sans text-primary/70 text-sm md:text-base leading-loose font-light max-w-xl mx-auto tracking-wider">
              Darcia hadir untuk memberikan kualitas tinggi dan desain yang selalu relevan, 
              di mana setiap elemen dirancang untuk tampil berkelas tanpa perlu berlebihan. 
              Gaya dengan kesederhanaan yang mewah dan elegan.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;
