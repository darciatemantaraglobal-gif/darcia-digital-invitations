import { Instagram, MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/darcia-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-ivory py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Darcia" className="h-12 w-auto brightness-0 invert" />
              <span className="font-serif text-3xl font-semibold">Darcia</span>
            </div>
            <p className="text-ivory/70 leading-relaxed max-w-md mb-6">
              Specialised website invitation yang bikin momen pernikahan kamu 
              jadi lebih effortless, modern, dan elegant.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/6282254153840"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@darcia.id"
                className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-xl mb-4">Quick Links</h4>
            <ul className="space-y-3 text-ivory/70">
              <li>
                <a href="/" className="hover:text-primary transition-colors">Beranda</a>
              </li>
              <li>
                <a href="/catalog" className="hover:text-primary transition-colors">Katalog</a>
              </li>
              <li>
                <a href="/#packages" className="hover:text-primary transition-colors">Paket & Harga</a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-primary transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-ivory/70">
              <li>WhatsApp: +62 822-5415-3840</li>
              <li>Email: hello@darcia.id</li>
              <li className="pt-4">
                <a
                  href="https://wa.me/6282254153840?text=Halo%20kak,%20saya%20mau%20pesan%20undangan%20website%20Darcia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-dark transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat Sekarang
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-ivory/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-ivory/50 text-sm">
            <p>© 2024 Darcia. All rights reserved.</p>
            <p>Made with love for your special day ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
