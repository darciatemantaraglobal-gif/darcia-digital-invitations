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
        
        {/* --- HEADER (Tetap Besar & Elegan) --- */}
        <div className="text-center mb-12 md:mb-16 flex flex-col items-center animate-fade-up">
          <span className="font-south text-primary text-4xl md:text-5xl mb-[-5px] md:mb-[-10px] relative z-10 transform -rotate-2 opacity-90">
            The Stories
          </span>
          <h2 className="font-sinera text-5xl sm:text-6xl md:text-7xl text-primary leading-[0.9] tracking-tight mb-6">
            Happy <br />
            Couples
          </h2>
          <p className="font-sans text-primary/70 text-sm md:text-base italic tracking-wide max-w-2xl mx-auto">
            Terima kasih banyak sudah memilih kami untuk menjadi bagian dari hari spesial Anda.
          </p>
        </div>

        {/* --- TESTIMONIALS GRID (Compact Mode) --- */}
        {/* gap-5: Jarak antar kartu dirapatkan sedikit */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              // Compact Style: rounded-3xl, p-6 (Padding lebih kecil)
              className="bg-[#F7F0E6]/30 border border-primary/10 rounded-3xl p-6 hover:shadow-[0_5px_30px_rgba(12,101,135,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between animate-fade-up group"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div>
                {/* Icon Quote (Lebih kecil: w-6) */}
                <div className="mb-4 opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                   <Quote className="w-6 h-6 text-primary fill-primary/10" />
                </div>
                
                {/* Text (Compact Font: text-xs md:text-sm) */}
                <p className="font-sans text-primary/80 leading-relaxed text-xs md:text-sm mb-6 font-light tracking-wide">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Footer: Name & Rating */}
              <div className="flex items-end justify-between border-t border-primary/5 pt-4">
                <div>
                  {/* Nama (Ukuran disesuaikan: text-lg/xl) */}
                  <p className="font-sinera text-xl text-primary mb-0.5">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-[9px] uppercase tracking-widest text-primary/50">
                    Darcia Couple
                  </p>
                </div>
                
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    // Bintang lebih kecil (w-3.5)
                    <Star 
                      key={i} 
                      className="w-3.5 h-3.5 text-primary fill-primary" 
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
