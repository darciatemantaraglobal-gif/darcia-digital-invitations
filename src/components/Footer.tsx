import { Instagram, MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/darcia-logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-emerald-950 to-black text-ivory pt-24 pb-12 overflow-hidden">
      
      {/* --- AMBIENT GLOW EFFECTS (DECORATION) --- */}
      {/* Cahaya hijau samar di kiri atas */}
      <div className="absolute top-0 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      {/* Cahaya hijau samar di kanan bawah */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-800/10 rounded-full blur-[120px] pointer-events-none" />

      {/* --- BORDER TOP GLASS --- */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-16">
          
          {/* 1. BRAND SECTION */}
          <div className="md:col-span-2 space-y-6">
            
            {/* LOGO ONLY (No Text) */}
            <div className="block">
              <img 
                src={logo} 
                alt="Darcia" 
                className="h-12 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300" 
              />
            </div>

            <p className="text-white/60 leading-relaxed max-w-sm font-light text-sm md:text-base">
              Specialised website invitation yang bikin momen pernikahan kamu 
              jadi lebih <span className="text-emerald-200/80 italic">effortless</span>, 
              <span className="text-emerald-200/80 italic">modern</span>, dan <span className="text-emerald-200/80 italic">elegant</span>.
            </p>
            
            {/* Social Media Glass Buttons */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com" },
                { icon: MessageCircle, href: "https://wa.me/6282254153840" },
                { icon: Mail, href: "mailto:hello@darcia.id" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. LINKS */}
          <div>
            <h4 className="font-serif text-lg text-emerald-100 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60 text-sm md:text-base">
              {['Beranda', 'Katalog', 'Paket & Harga', 'FAQ'].map((item, idx) => (
                <li key={idx}>
                  <a href={`/${item === 'Beranda' ? '' : item === 'Katalog' ? 'catalog' : '#'+item.toLowerCase().replace(/ & /g, '').replace(/ /g, '')}`} 
                     className="hover:text-emerald-300 hover:translate-x-1 transition-all duration-300 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONTACT */}
          <div>
            <h4 className="font-serif text-lg text-emerald-100 mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-white/60 text-sm md:text-base">
              <li className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider text-white/30">WhatsApp</span>
                <span className="font-light">+62 822-5415-3840</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider text-white/30">Email</span>
                <span className="font-light">hello@darcia.id</span>
              </li>
              
              <li className="pt-4">
                <a
                  href="https://wa.me/6282254153840?text=Halo%20kak,%20saya%20mau%20pesan%20undangan%20website%20Darcia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 hover:-translate-y-1"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat Sekarang
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- DIVIDER & COPYRIGHT --- */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-xs md:text-sm font-light">
            <p>© {new Date().getFullYear()} Darcia. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <span className="text-red-400 animate-pulse">❤</span> for your special day
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
