import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & Andi",
    text: "Undangan dari Darcia benar-benar memukau! Semua tamu memuji desainnya yang elegan. Tim sangat responsif dan helpful. Highly recommended!",
    rating: 5,
  },
  {
    name: "Maya & Rizki",
    text: "Proses pemesanan sangat mudah dan hasilnya memuaskan. Fitur RSVP sangat membantu kami mengatur jumlah tamu. Terima kasih Darcia!",
    rating: 5,
  },
  {
    name: "Dina & Fajar",
    text: "Kami suka banget dengan desain undangan kami! Simple tapi classy, sesuai dengan tema pernikahan. Service yang luar biasa!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* --- HEADER (Sama dengan Packages/Hero) --- */}
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center animate-fade-up">
          {/* Script Accent */}
          <span className="font-south text-primary text-4xl md:text-5xl mb-[-5px] md:mb-[-10px] relative z-10 transform -rotate-2 opacity-90">
            The Stories
          </span>
          {/* Main Headline */}
          <h2 className="font-sinera text-5xl sm:text-6xl md:text-7xl text-primary leading-[0.9] tracking-tight mb-6">
            Happy <br />
            Couples
          </h2>
          {/* Description */}
          <p className="font-sans text-primary/70 text-sm md:text-base italic tracking-wide max-w-2xl mx-auto">
            Terima kasih banyak sudah memilih kami untuk menjadi bagian dari hari spesial Anda.
          </p>
        </div>

        {/* --- TESTIMONIALS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              // Card Style: Light Cream BG + Thin Border (Mirip Basic Features di Package)
              className="bg-[#F7F0E6]/30 border border-primary/10 rounded-[2rem] p-8 md:p-10 hover:shadow-[0_10px_40px_rgba(12,101,135,0.1)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between animate-fade-up group"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div>
                {/* Icon Quote */}
                <div className="mb-6 opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                   <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary fill-primary/10" />
                </div>
                
                {/* Text */}
                <p className="font-sans text-primary/80 leading-relaxed text-sm md:text-base mb-8 font-light tracking-wide">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Footer: Name & Rating */}
              <div className="flex items-end justify-between border-t border-primary/5 pt-6">
                <div>
                  <p className="font-sinera text-2xl text-primary mb-1">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-primary/50">
                    Darcia Couple
                  </p>
                </div>
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    // Bintang dibuat Primary biar clean monochrome
                    <Star 
                      key={i} 
                      className="w-4 h-4 text-primary fill-primary" 
                      strokeWidth={1}
                    />
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
