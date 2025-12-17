import { Instagram, Sparkles } from "lucide-react";

const filters = [
  { name: "Filter 1", color: "from-rose-200 to-rose-100" },
  { name: "Filter 2", color: "from-amber-200 to-amber-100" },
  { name: "Filter 3", color: "from-emerald-200 to-emerald-100" },
  { name: "Filter 4", color: "from-sky-200 to-sky-100" },
];

const InstagramTemplate = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left - Filters Preview */}
          <div className="flex-1 order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              {filters.map((filter, idx) => (
                <div
                  key={idx}
                  className={`aspect-[9/16] rounded-2xl bg-gradient-to-br ${filter.color} flex items-center justify-center shadow-card hover:scale-105 transition-transform duration-300`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="text-center">
                    <Instagram className="w-8 h-8 text-foreground/40 mx-auto mb-2" />
                    <p className="text-sm text-foreground/60">{filter.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 text-center md:text-left order-1 md:order-2">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4 leading-tight">
              Instagram Template Story
            </h2>
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">FREE BONUS di Paket Exclusive!</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Dapatkan template Instagram Story eksklusif untuk membagikan momen spesial 
              pernikahan kamu dengan lebih stylish dan menarik.
            </p>
            <a
              href="/catalog"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
            >
              Lihat Katalog
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramTemplate;
