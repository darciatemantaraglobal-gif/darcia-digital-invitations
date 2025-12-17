import { Link } from "react-router-dom";

const catalogItems = [
  { name: "Siska", tier: "exclusive", badge: "EXCLUSIVE" },
];

const tierColors: Record<string, string> = {
  exclusive: "bg-gold text-foreground",
};

const CatalogPreview = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-4">
            Our Catalog
          </h2>
          <p className="font-sans text-muted-foreground">
            Silahkan klik <strong>Preview</strong> untuk melihat detail tampilan
          </p>
        </div>

        {/* Catalog Grid */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            {catalogItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
              >
                {/* Placeholder Image */}
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-emerald-light/5 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-serif text-3xl text-primary/60">{item.name}</p>
                    <p className="font-sans text-xs text-muted-foreground mt-1 capitalize">{item.tier}</p>
                  </div>
                </div>

                {/* Badge */}
                {item.badge && (
                  <div className="absolute top-3 left-3 bg-gold text-foreground px-3 py-1 rounded-full text-xs font-semibold font-sans">
                    {item.badge}
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button className="bg-background text-foreground px-6 py-2 rounded-full font-medium text-sm font-sans transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Preview
                  </button>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-serif text-lg text-foreground">{item.name}</h3>
                  <span
                    className={`inline-block mt-2 px-3 py-0.5 rounded-full text-xs font-medium font-sans capitalize ${tierColors[item.tier]}`}
                  >
                    {item.tier}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium font-sans hover:bg-emerald-dark transition-all duration-300"
          >
            Lihat Semua Katalog
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CatalogPreview;
