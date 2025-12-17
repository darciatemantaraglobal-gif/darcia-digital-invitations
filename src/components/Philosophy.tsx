const Philosophy = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#F7F0E6] via-[#F7F0E6] to-white flex flex-col items-center justify-center">
      
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          <div className="animate-fade-up flex flex-col items-center gap-6">
            
            {/* HEADLINE (Tetap Sinera) */}
            <h2 className="text-primary leading-[1.1] tracking-tight mb-2">
              <span className="font-sinera text-5xl sm:text-6xl md:text-7xl block">
                Simple,
              </span>
              <span className="font-sinera text-5xl sm:text-6xl md:text-7xl block italic text-primary/80">
                but Classy.
              </span>
            </h2>

            {/* BODY TEXT (Updated) */}
            {/* - font-normal: Montserrat Regular (bukan tipis/light)
                - leading-relaxed: Jarak antar baris lebih rapat & enak dibaca
                - text-primary/80: Warna solid tapi gak terlalu hitam pekat */}
            <p className="font-sans font-normal text-primary/80 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
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
