const Philosophy = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-4 animate-fade-up">
            Simple, but <span className="italic text-primary">classy</span>,
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-8 animate-scale-in" style={{ animationDelay: '0.2s' }} />
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Ini bukan sekedar slogan tetapi sebuah filosofi,
          </p>
          <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Gaya dengan kesederhanaan yang mewah dan elegan
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.5s' }}>
            Darcia hadir untuk memberikan kualitas tinggi dan desain yang selalu relevan, 
            di mana setiap elemen dirancang untuk tampil berkelas tanpa perlu berlebihan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
