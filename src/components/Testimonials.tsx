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
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-4">
            They <span className="italic text-primary">Said</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Terima kasih banyak sudah memilih kami sebagai vendor undangan website 
            untuk acara Anda! Kami sangat senang bisa membantu mewujudkan undangan yang spesial.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-serif text-lg text-foreground">{testimonial.name}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
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
