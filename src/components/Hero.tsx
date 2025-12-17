import heroImage from "@/assets/hero-couple.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Wedding couple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 py-32">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory font-light leading-tight mb-6 animate-fade-up">
            Specialised
            <br />
            <span className="italic">Website</span>
            <br />
            Invitation
          </h1>
          <p className="text-ivory/90 text-base md:text-lg leading-relaxed max-w-md mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Take your wedding to the next level with Darcia, website invitation yang bikin momen pernikahan kamu jadi lebih{" "}
            <em className="text-emerald-light">effortless</em>,{" "}
            <em className="text-emerald-light">modern</em>, dan{" "}
            <em className="text-emerald-light">elegant!</em>
          </p>
          <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 bg-primary hover:bg-emerald-dark text-primary-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-elevated"
            >
              Lihat Paket
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Decorative Text */}
        <div className="absolute bottom-12 right-8 md:right-16 text-right hidden md:block">
          <p className="font-serif text-ivory/80 text-lg italic">
            Time to start a
          </p>
          <p className="font-serif text-ivory text-3xl italic">new chapter.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
