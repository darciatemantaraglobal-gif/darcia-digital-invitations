import { Sparkle } from "lucide-react"; // Import icon

const Philosophy = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#F7F0E6] via-[#F7F0E6] to-white flex flex-col items-center justify-center">
      
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          <div className="animate-fade-up flex flex-col items-center gap-4">
            
            {/* 1. ICON DI ATAS JUDUL */}
            {/* Icon Sparkle untuk kesan elegan/kilau */}
            <Sparkle className="w-10 h-10 text-primary/60 mb-2" strokeWidth={1.5} />

            {/* HEADLINE (Sinera, Semua Miring) */}
            <h2 className="text-primary leading-[1.05] tracking-tight mb-4">
              {/* Tambahkan class 'italic' di sini */}
              <span className="font-sinera text-5xl sm:text-6xl md:text-7xl block italic">
                Simple,
              </span>
              <span className="font-sinera text-5xl sm:text-6xl md:text-7xl block italic text-primary/80">
                but Classy.
              </span>
            </h2>

            {/* BODY TEXT (Updated) */}
            {/* Ubah font-normal menjadi font-semibold */}
            <p className="font-sans font-semibold text-primary/80 text-sm md:text-base leading-relaxed max-w-xl mx-auto tracking-wide">
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
