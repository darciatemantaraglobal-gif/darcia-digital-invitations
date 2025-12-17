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
    <section id="faq" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-2">
            Frequently
          </h2>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-2">
            Asked
          </h2>
          <h2 className="font-serif text-4xl md:text-6xl text-primary italic">
            Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-background rounded-2xl px-6 border-none shadow-soft"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 whitespace-pre-line">
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
