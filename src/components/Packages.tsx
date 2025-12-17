import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Exclusive",
    tagline: "All-in-One",
    price: "Rp 350.000",
    features: [
      "Semua Fitur Dasar",
      "Desain Premium",
      "Masa Aktif 8 Bulan",
      "Foto (15)",
      "Love Story",
      "Amplop Digital",
    ],
    highlight: true,
    tier: "exclusive",
  },
];

const basicFeatures = [
  "Unlimited Share",
  "Personalized Invitation",
  "Pilihan Bahasa",
  "Bebas Musik",
  "Button Instagram",
  "Button Maps",
  "Countdown Timer",
  "Wedding Wish",
  "Custom Text/Doa",
];

const Packages = () => {
  return (
    <section id="packages" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-2">
            Packages <span className="italic text-primary">&</span>
          </h2>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6">
            Features.
          </h2>
          <p className="text-muted-foreground">
            Pick a package that suits you
          </p>
        </div>

        {/* Basic Features Grid */}
        <div className="mb-16">
          <div className="bg-background rounded-2xl p-6 md:p-8 shadow-soft">
            <h3 className="font-serif text-2xl text-foreground mb-6 text-center">
              Fitur Dasar
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {basicFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="flex justify-center">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 max-w-md w-full ${
                pkg.highlight
                  ? "bg-primary text-primary-foreground shadow-elevated"
                  : "bg-background text-foreground shadow-card"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-foreground px-4 py-1 rounded-full text-xs font-semibold">
                  POPULAR
                </div>
              )}
              
              <h3 className="font-serif text-3xl mb-1">{pkg.name}</h3>
              <p
                className={`text-sm mb-2 ${
                  pkg.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {pkg.tagline}
              </p>
              <p className={`text-2xl font-semibold mb-6 ${
                pkg.highlight ? "text-gold" : "text-primary"
              }`}>
                {pkg.price}
              </p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        pkg.highlight ? "text-primary-foreground" : "text-primary"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/order"
                className={`block w-full text-center py-3 rounded-full font-medium transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-background text-primary hover:bg-ivory-dark"
                    : "bg-primary text-primary-foreground hover:bg-emerald-dark"
                }`}
              >
                Pilih Paket
              </Link>
            </div>
          ))}
        </div>

        {/* Custom Design CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-background rounded-2xl p-8 md:p-12 shadow-card">
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Custom Design
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Punya konsep desain sendiri? Kami siap bantu bikin jadi nyata!
            </p>
            <a
              href="https://wa.me/6282254153840?text=Halo%20kak,%20saya%20mau%20konsul%20terkait%20Custom%20Design"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-emerald-dark transition-all duration-300"
            >
              Konsultasi Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
