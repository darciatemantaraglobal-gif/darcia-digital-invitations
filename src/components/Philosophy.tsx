const Philosophy = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-4">
            Simple, but <span className="italic text-primary">classy</span>,
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6">
            Ini bukan sekedar slogan tetapi sebuah filosofi,
          </p>
          <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8">
            Gaya dengan kesederhanaan yang mewah dan elegan
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Darcia hadir untuk memberikan kualitas tinggi dan desain yang selalu relevan, 
            di mana setiap elemen dirancang untuk tampil berkelas tanpa perlu berlebihan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
