import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import MarqueeBanner from "@/components/MarqueeBanner";
import Footer from "@/components/Footer";

const packages = [
  { name: "Premium", price: "Rp 150.000" },
  { name: "Deluxe", price: "Rp 250.000" },
  { name: "Exclusive", price: "Rp 350.000" },
];

const Order = () => {
  const [formData, setFormData] = useState({
    namaPria: "",
    namaWanita: "",
    tanggalAkad: "",
    tanggalResepsi: "",
    paket: "",
    whatsapp: "",
    catatan: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo kak, saya mau order undangan digital Darcia.

*Data Pemesanan:*
- Nama Pria: ${formData.namaPria}
- Nama Wanita: ${formData.namaWanita}
- Tanggal Akad: ${formData.tanggalAkad}
- Tanggal Resepsi: ${formData.tanggalResepsi}
- Paket: ${formData.paket}
- WhatsApp: ${formData.whatsapp}
- Catatan: ${formData.catatan || "-"}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6282254153840?text=${encoded}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Order - Darcia</title>
        <meta name="description" content="Order undangan digital premium Darcia" />
      </Helmet>

      <MarqueeBanner />
      <Navbar />
      
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                Order <span className="italic text-primary">Form</span>
              </h1>
              <p className="text-muted-foreground">
                Lengkapi data di bawah untuk memulai pesanan
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 md:p-12 shadow-card space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nama Mempelai Pria
                  </label>
                  <input
                    type="text"
                    name="namaPria"
                    value={formData.namaPria}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nama Mempelai Wanita
                  </label>
                  <input
                    type="text"
                    name="namaWanita"
                    value={formData.namaWanita}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Nama lengkap"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tanggal Akad
                  </label>
                  <input
                    type="date"
                    name="tanggalAkad"
                    value={formData.tanggalAkad}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tanggal Resepsi
                  </label>
                  <input
                    type="date"
                    name="tanggalResepsi"
                    value={formData.tanggalResepsi}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Pilih Paket
                </label>
                <select
                  name="paket"
                  value={formData.paket}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">-- Pilih Paket --</option>
                  {packages.map((pkg) => (
                    <option key={pkg.name} value={`${pkg.name} (${pkg.price})`}>
                      {pkg.name} - {pkg.price}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="08xxxxxxxxxx"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Catatan Tambahan
                </label>
                <textarea
                  name="catatan"
                  value={formData.catatan}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tulis catatan tambahan jika ada..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-full font-medium text-lg hover:bg-emerald-dark transition-all duration-300"
              >
                Kirim Pesanan via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Order;
