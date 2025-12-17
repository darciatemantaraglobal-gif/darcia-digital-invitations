import { Instagram, MessageCircle, Mail, Heart } from "lucide-react";
import logo from "@/assets/darcia-logo.png";

const Footer = () => {
  return (
    // BG Primary Solid (Deep Teal) biar senada sama Brand Identity
    <footer className="relative bg-primary text-white pt-20 pb-10 overflow-hidden">
      
      {/* --- DECORATION (Subtle Glows) --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10 mx-auto px-6 md:px-8">
        
        {/* --- TOP SECTION: GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 border-b border-white/10 pb-16">
          
          {/* 1. BRAND (Left - 5 Columns) */}
          <div className="md:col-span-5 space-y-6">
            {/* Logo */}
            <div className="block">
              <img 
                src={logo} 
                alt="Darcia" 
                className="h-10 md:h-12 w-auto brightness-0 invert opacity-90" 
              />
            </div>

            {/* Description */}
            <p className="font-sans text-white/70 leading-relaxed font-light text-sm md:text-base max-w-sm tracking-wide">
              Specialised digital invitation yang bikin momen pernikahan kamu jadi lebih 
              <span className="text-white/90 italic font-medium"> effortless</span>, 
              <span className="text-white/90 italic font-medium"> modern</span>, dan 
              <span className="text-white/90 italic font-medium"> elegant</span>.
            </p>
            
            {/* Social Icons (Minimalist Circle) */}
            <div className="flex gap-4 pt-2">
              {[
                { icon: Instagram, href: "https://instagram.com/darcia.id" },
                { icon: MessageCircle, href: "https://wa.me/6282254153840" },
                { icon: Mail, href: "mailto:hello@darcia.id" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white hover:text-primary hover:border-white transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. NAVIGATION (Center - 3 Columns) */}
          <div className="md:col-span-3 md:pl-8">
            <h4 className="font-sinera text-2xl text-white mb-6">Explore</h4>
            <ul className="space-y-3 font-sans text-white/60 text-sm md:text-base font-light">
              {['Beranda', 'Katalog', 'Paket & Harga', 'FAQ'].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={`/${item === 'Beranda' ? '' : item === 'Katalog' ? 'catalog' : '#'+item.toLowerCase().replace(/ & /g, '').replace(/ /g, '')}`} 
                    className="hover:text-white hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONTACT (Right - 4 Columns) */}
          <div className="md:col-span-4">
            <h4 className="font-sinera text-2xl text-white mb-6">Contact</h4>
            <ul className="space-y-4 font-sans text-white/60 text-sm md:text-base font-light">
              <li>
                <span className="block text-[10px] uppercase tracking-widest opacity-50 mb-1">WhatsApp</span>
                <a href="https://wa.me/6282254153840" className="hover:text-white transition-colors">
                  +62 822-5415-3840
                </a>
              </li>
              <li>
                <span className="block text-[10px] uppercase tracking-widest opacity-50 mb-1">Email</span>
                <a href="mailto:hello@darcia.id" className="hover:text-white transition-colors">
                  hello@darcia.id
                </a>
              </li>
              
              <li className="pt-4">
                <a
                  href="https://wa.me/6282254153840?text=Halo%20kak,%20saya%20mau%20pesan%20undangan%20website%20Darcia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#F7F0E6] transition-all duration-300 transform hover:-translate-y-1"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat Admin
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* --- BOTTOM SECTION: COPYRIGHT --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-xs font-sans font-light tracking-wide">
          <p>© {new Date().getFullYear()} Darcia. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400 animate-pulse" /> in Cairo
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
