import { Link } from "react-router-dom";

const catalogItems = [
  { name: "Vanessa", tier: "exclusive", badge: "NEW" },
  { name: "Javanese", tier: "exclusive", badge: "NEW" },
  { name: "Aurelia", tier: "exclusive", badge: "NEW" },
  { name: "Navya", tier: "exclusive", badge: "NEW" },
  { name: "Michelle", tier: "exclusive", badge: "BEST" },
  { name: "Shanara", tier: "premium", badge: "HITS" },
  { name: "Azalia", tier: "premium", badge: "HITS" },
  { name: "Ivi", tier: "premium", badge: "HITS" },
];

const tierColors: Record<string, string> = {
  exclusive: "bg-primary text-primary-foreground",
  premium: "bg-gold/90 text-foreground",
  basic: "bg-muted text-muted-foreground",
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
          <p className="text-muted-foreground">
            Silahkan klik <strong>Preview</strong> untuk melihat detail tampilan
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Exclusive", "Premium", "Basic"].map((tier) => (
            <button
              key={tier}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                tier === "Exclusive"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {tier}
            </button>
          ))}
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {catalogItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
            >
              {/* Placeholder Image */}
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-emerald-light/5 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-serif text-2xl text-primary/60">{item.name}</p>
                  <p className="text-xs text-muted-foreground mt-1 capitalize">{item.tier}</p>
                </div>
              </div>

              {/* Badge */}
              {item.badge && (
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {item.badge}
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button className="bg-background text-foreground px-6 py-2 rounded-full font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Preview
                </button>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-serif text-lg text-foreground">{item.name}</h3>
                <span
                  className={`inline-block mt-2 px-3 py-0.5 rounded-full text-xs font-medium capitalize ${tierColors[item.tier]}`}
                >
                  {item.tier}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-emerald-dark transition-all duration-300"
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
