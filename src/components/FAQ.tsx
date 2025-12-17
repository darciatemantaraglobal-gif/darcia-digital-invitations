import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Bagaimana cara order?",
    answer: `1. Hubungi kami via WhatsApp atau klik "Pesan Sekarang"
2. Pilih paket dan desain yang diinginkan
3. Isi data pesanan dan lakukan pembayaran
4. Kirimkan data undangan (foto, detail acara, dll)
5. Tunggu proses pengerjaan dan undangan siap dibagikan!`,
  },
  {
    question: "Berapa lama proses pengerjaan undangan?",
    answer: "Pengerjaan 4-7 hari kerja, setelah data lengkap diterima. Kami juga menyediakan layanan Express untuk kebutuhan mendesak.",
  },
  {
    question: "Apakah ada layanan Express?",
    answer: `Ya, ada 2 tipe layanan express:
• Express 2 hari (+50k)
• One Day Service 1×24 jam (+100k)`,
  },
  {
    question: "Apakah bisa revisi?",
    answer: "Ya, tentu saja bisa. FREE REVISI TEXT tanpa batas. Untuk revisi Foto & Musik ada tambahan biaya 20k per revisi.",
  },
  {
    question: "Apakah bisa hilangkan fitur yang tidak digunakan?",
    answer: "Yap bisa, fitur yang tidak digunakan bisa dihilangkan. Untuk harga tidak berpengaruh apabila beberapa fitur dihilangkan.",
  },
  {
    question: "Apakah data undangan dan foto bisa menyusul?",
    answer: "Yap bisa, boleh booking slot dulu untuk data dan foto menyusul.",
  },
  {
    question: "Bagaimana dengan penyesuaian warna?",
    answer: "Paket Premium & Exclusive dapat menyesuaikan warna undangan dengan foto kamu atau request warna. Untuk Paket Basic ada tambahan penyesuaian warna 50k. Diskusikan dengan admin untuk penyesuaian warna, revisi warna free 1x.",
  },
  {
    question: "Apa itu Split Link?",
    answer: "Bisa membuat 2 link undangan dengan desain yang sama hanya berbeda dibagian detail acara dengan tambahan biaya 80k.",
  },
  {
    question: "Apa bisa Cancel?",
    answer: "Setiap pembelian tidak bisa di refund. Pastikan sudah yakin sebelum melakukan pemesanan.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* --- HEADER (Style Packages) --- */}
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center animate-fade-up">
          {/* Script Accent */}
          <span className="font-south text-primary text-4xl md:text-5xl mb-[-5px] md:mb-[-10px] relative z-10 transform -rotate-2 opacity-90">
            The Details
          </span>
          {/* Main Headline */}
          <h2 className="font-sinera text-5xl sm:text-6xl md:text-7xl text-primary leading-[0.9] tracking-tight mb-6">
            Frequently <br />
            Asked Questions
          </h2>
          {/* Description */}
          <p className="font-sans text-primary/70 text-sm md:text-base italic tracking-wide max-w-2xl mx-auto">
            Everything you need to know about our services.
          </p>
        </div>

        {/* --- FAQ ACCORDION --- */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                // Card Style: Cream BG + Thin Border (Sama kayak Fitur Dasar di Packages)
                className="bg-[#F7F0E6]/30 border border-primary/10 rounded-3xl px-6 md:px-8 overflow-hidden transition-all duration-300 hover:border-primary/30 animate-fade-up data-[state=open]:bg-[#F7F0E6]/60"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <AccordionTrigger className="text-left font-sans font-medium text-primary text-base md:text-lg hover:no-underline py-6 data-[state=open]:text-emerald-800">
                  {faq.question}
                </AccordionTrigger>
                
                <AccordionContent className="text-primary/70 font-sans font-light text-sm md:text-base pb-6 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
