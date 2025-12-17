import { Instagram, MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/darcia-logo.png";

const Footer = () => {
  return (
    // Compact: pt-12 pb-6 (Pendek dan Rapi)
    <footer className="relative bg-primary text-white pt-12 pb-6 overflow-hidden">
      
      {/* --- DECORATION (Dikecilin dikit biar gak dominan) --- */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-white/5 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10 mx-auto px-6 md:px-8">
        
        {/* --- MAIN CONTENT (Compact Grid) --- */}
        {/* mb-8: Jarak ke copyright dirapatkan */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 border-b border-white/10 pb-8">
          
          {/* 1. BRAND */}
          <div className="md:col-span-5 space-y-4">
            <div className="block">
              <img 
                src={logo} 
                alt="Darcia" 
                className="h-8 md:h-10 w-auto brightness-0 invert opacity-90" 
              />
            </div>
            <p className="font-sans text-white/70 leading-relaxed font-light text-xs md:text-sm max-w-sm">
              Specialised digital invitation yang bikin momen pernikahan kamu jadi lebih 
              <span className="text-white/90 italic font-medium"> effortless</span>, 
              <span className="text-white/90 italic font-medium"> modern</span>, dan 
              <span className="text-white/90 italic font-medium"> elegant</span>.
            </p>
            
            {/* Social Icons (Compact) */}
            <div className="flex gap-3 pt-1">
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
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. EXPLORE */}
          <div className="md:col-span-3 md:pl-8">
            <h4 className="font-sinera text-lg text-white mb-4">Explore</h4>
            <ul className="space-y-2 font-sans text-white/60 text-xs md:text-sm font-light">
              {['Beranda', 'Katalog', 'Paket & Harga', 'FAQ'].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={`/${item === 'Beranda' ? '' : item === 'Katalog' ? 'catalog' : '#'+item.toLowerCase().replace(/ & /g, '').replace(/ /g, '')}`} 
                    className="hover:text-white hover:pl-1 transition-all duration-300 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONTACT */}
          <div className="md:col-span-4">
            <h4 className="font-sinera text-lg text-white mb-4">Contact</h4>
            <ul className="space-y-3 font-sans text-white/60 text-xs md:text-sm font-light">
              <li>
                <span className="block text-[10px] uppercase tracking-widest opacity-50">WhatsApp</span>
                <a href="https://wa.me/6282254153840" className="hover:text-white transition-colors">
                  +62 822-5415-3840
                </a>
              </li>
              <li>
                <span className="block text-[10px] uppercase tracking-widest opacity-50">Email</span>
                <a href="mailto:hello@darcia.id" className="hover:text-white transition-colors">
                  hello@darcia.id
                </a>
              </li>
              
              <li className="pt-2">
                <a
                  href="https://wa.me/6282254153840?text=Halo%20kak,%20saya%20mau%20pesan%20undangan%20website%20Darcia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#F7F0E6] transition-all duration-300"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Chat Admin
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* --- COPYRIGHT ONLY --- */}
        <div className="text-center md:text-left text-white/30 text-[10px] font-sans font-light tracking-wide">
          <p>© {new Date().getFullYear()} Darcia. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
