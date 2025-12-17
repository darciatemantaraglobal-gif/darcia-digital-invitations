const Philosophy = () => {
  return (
    // bg-gradient-to-b from-cream to-background: 
    // Membuat transisi halus dari warna Cream (akhir Hero) ke warna Background halaman
    <section className="py-24 md:py-32 bg-gradient-to-b from-cream to-background flex flex-col items-center justify-center">
      
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          <div className="animate-fade-up flex flex-col items-center gap-2">
            
            {/* 1. HEADLINE (Font Sinera) */}
            {/* Menggunakan variasi Italic pada baris kedua untuk aksen visual pengganti script */}
            <h2 className="text-primary leading-[1.1] tracking-tight">
              <span className="font-sinera text-5xl sm:text-6xl md:text-7xl block">
                Simple,
              </span>
              <span className="font-sinera text-5xl sm:text-6xl md:text-7xl block italic text-primary/90">
                but Classy.
              </span>
            </h2>

            {/* 2. DIVIDER */}
            <div className="w-16 h-[1px] bg-primary/20 my-8 md:my-10" />

            {/* 3. BODY TEXT (Font Montserrat) */}
            <div className="flex flex-col gap-5 md:gap-6">
              <p className="font-sans text-primary text-lg md:text-xl font-medium tracking-wide italic">
                "Ini bukan sekedar slogan, tetapi sebuah filosofi."
              </p>
              
              <p className="font-sans text-primary/80 text-sm md:text-base leading-loose font-light max-w-xl mx-auto tracking-wide">
                Darcia hadir untuk memberikan kualitas tinggi dan desain yang selalu relevan, 
                di mana setiap elemen dirancang untuk tampil berkelas tanpa perlu berlebihan. 
                Gaya dengan kesederhanaan yang mewah dan elegan.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;
