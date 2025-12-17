import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import MarqueeBanner from "@/components/MarqueeBanner";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const allCatalog = [
  { name: "Vanessa", tier: "exclusive", badge: "NEW" },
  { name: "Javanese", tier: "exclusive", badge: "NEW" },
  { name: "Aurelia", tier: "exclusive", badge: "NEW" },
  { name: "Navya", tier: "exclusive", badge: "NEW" },
  { name: "Michelle", tier: "exclusive", badge: "BEST" },
  { name: "Shanara", tier: "premium", badge: "HITS" },
  { name: "Azalia", tier: "premium", badge: "HITS" },
  { name: "Ivi", tier: "premium", badge: "HITS" },
  { name: "Via", tier: "premium", badge: "" },
  { name: "Nadine", tier: "premium", badge: "HITS" },
  { name: "Syafira", tier: "exclusive", badge: "HITS" },
  { name: "Lydia", tier: "exclusive", badge: "" },
  { name: "Shelda", tier: "premium", badge: "" },
  { name: "Kajen", tier: "exclusive", badge: "" },
  { name: "Aruna", tier: "premium", badge: "NEW" },
  { name: "Syahilla", tier: "premium", badge: "NEW" },
  { name: "Agnia", tier: "premium", badge: "HITS" },
  { name: "Jelita", tier: "premium", badge: "HITS" },
  { name: "Rachel", tier: "premium", badge: "HITS" },
  { name: "Celline", tier: "premium", badge: "HITS" },
  { name: "Alda", tier: "basic", badge: "" },
  { name: "Annisa", tier: "basic", badge: "" },
  { name: "Ellynda", tier: "basic", badge: "" },
  { name: "Ghalda", tier: "premium", badge: "" },
  { name: "Nayla", tier: "basic", badge: "NEW" },
  { name: "Emmera", tier: "basic", badge: "HITS" },
  { name: "Chindy", tier: "basic", badge: "" },
  { name: "Nadhira", tier: "basic", badge: "" },
];

const tierColors: Record<string, string> = {
  exclusive: "bg-primary text-primary-foreground",
  premium: "bg-gold/90 text-foreground",
  basic: "bg-muted text-muted-foreground",
};

const Catalog = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredCatalog =
    activeFilter === "all"
      ? allCatalog
      : allCatalog.filter((item) => item.tier === activeFilter);

  return (
    <>
      <Helmet>
        <title>Katalog Undangan - Darcia</title>
        <meta
          name="description"
          content="Lihat koleksi lengkap desain undangan digital premium dari Darcia. Pilih tema yang sesuai dengan gaya pernikahan Anda."
        />
      </Helmet>

      <MarqueeBanner />
      <Navbar />

      <main className="pt-32 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-4">
              Katalog <span className="italic text-primary">Desain</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Pilih desain undangan yang paling cocok untuk hari spesial Anda
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["all", "exclusive", "premium", "basic"].map((tier) => (
              <button
                key={tier}
                onClick={() => setActiveFilter(tier)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                  activeFilter === tier
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {tier === "all" ? "Semua" : tier}
              </button>
            ))}
          </div>

          {/* Catalog Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredCatalog.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                {/* Placeholder Image */}
                <div className="aspect-square bg-gradient-to-br from-primary/10 via-emerald-light/5 to-cream flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-serif text-2xl md:text-3xl text-primary/60">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 capitalize">
                      {item.tier}
                    </p>
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
                  <button className="bg-background text-foreground px-6 py-2.5 rounded-full font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Preview
                  </button>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-serif text-lg text-foreground">
                    {item.name}
                  </h3>
                  <span
                    className={`inline-block mt-2 px-3 py-0.5 rounded-full text-xs font-medium capitalize ${tierColors[item.tier]}`}
                  >
                    {item.tier}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl text-foreground mb-4">
                Tidak menemukan yang cocok?
              </h2>
              <p className="text-muted-foreground mb-6">
                Kami juga menyediakan layanan Custom Design untuk desain yang lebih personal
              </p>
              <a
                href="https://wa.me/6282254153840?text=Halo%20kak,%20saya%20mau%20konsul%20terkait%20Custom%20Design"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-emerald-dark transition-all duration-300"
              >
                Konsultasi Custom Design
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Catalog;
