import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/darcia-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Efek mengecil sedikit saat discroll (opsional, biar dinamis)
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Katalog", href: "/catalog" },
    { name: "Paket", href: "/#packages" },
    { name: "FAQ", href: "/#faq" },
  ];

  const isActive = (href) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href.replace("/#", "/"));
  };

  return (
    <>
      {/* Container Utama: Fixed position tapi dikasih margin atas (top-4 / top-6) biar melayang */}
      <nav className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-out ${
        isScrolled ? "top-4" : "top-6 md:top-8"
      }`}>
        
        {/* --- FLOATING PILL (KAPSUL) --- */}
        <div className={`
          relative flex items-center justify-between 
          transition-all duration-500 ease-out
          bg-primary/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]
          ${isScrolled 
            ? "w-[90%] md:w-auto md:min-w-[600px] py-2.5 px-4 rounded-full" 
            : "w-[92%] md:w-auto md:min-w-[700px] py-3 px-6 rounded-full"
          }
        `}>
          
          {/* 1. LOGO */}
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src={logo}
              alt="Darcia"
              // Logo kecil manis di dalam kapsul
              className={`w-auto transition-all duration-300 object-contain opacity-90 group-hover:opacity-100 ${
                isScrolled ? "h-6 md:h-7" : "h-7 md:h-8"
              }`}
            />
          </Link>

          {/* 2. DESKTOP MENU (Centered Links) */}
          <div className="hidden md:flex items-center gap-8 mx-auto px-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:text-white relative group ${
                  isActive(link.href) ? "text-white" : "text-white/60"
                }`}
              >
                {link.name}
                {/* Dot Indicator for Active State */}
                <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full transition-all duration-300 ${
                  isActive(link.href) ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                }`} />
              </Link>
            ))}
          </div>

          {/* 3. CTA BUTTON (Desktop) */}
          <div className="hidden md:block shrink-0">
            <a
              href="https://wa.me/6282254153840?text=Halo%20kak,%20saya%20mau%20pesan%20undangan%20website%20Darcia"
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-white text-primary rounded-full font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:bg-emerald-50 hover:-translate-y-0.5 ${
                isScrolled ? "px-4 py-1.5 text-[9px]" : "px-5 py-2 text-[10px]"
              }`}
            >
              Pesan
            </a>
          </div>

          {/* 4. MOBILE MENU TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1 text-white/80 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </nav>

      {/* --- MOBILE MENU DROPDOWN (FLOATING CARD) --- */}
      {/* Muncul melayang di bawah navbar utama, bukan fullscreen */}
      <div className={`
        fixed left-4 right-4 z-40 transition-all duration-500 ease-in-out transform
        bg-primary/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl overflow-hidden
        ${isMobileMenuOpen 
          ? "top-20 opacity-100 translate-y-0" 
          : "top-16 opacity-0 -translate-y-4 pointer-events-none"
        }
      `}>
        <div className="flex flex-col items-center py-6 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-xs uppercase tracking-[0.25em] font-medium transition-colors ${
                isActive(link.href) ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-12 h-[1px] bg-white/10" />
          <a
            href="https://wa.me/6282254153840?text=Halo%20kak,%20saya%20mau%20pesan%20undangan%20website%20Darcia"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-8 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-emerald-50"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
