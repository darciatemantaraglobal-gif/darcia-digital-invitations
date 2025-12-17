import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import MarqueeBanner from "@/components/MarqueeBanner";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Packages from "@/components/Packages";
import CatalogPreview from "@/components/CatalogPreview";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Darcia - Website Undangan Digital Premium</title>
        <meta
          name="description"
          content="Darcia - Specialised website invitation yang bikin momen pernikahan kamu jadi lebih effortless, modern, dan elegant. Simple but classy."
        />
      </Helmet>

      <MarqueeBanner />
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Packages />
        <CatalogPreview />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
