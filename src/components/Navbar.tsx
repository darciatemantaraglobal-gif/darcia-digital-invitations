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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll saat menu mobile terbuka biar gak bocor scroll-nya
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Katalog", href: "/catalog" },
    { name: "Paket & Harga", href: "/#packages" },
    { name: "FAQ", href: "/#faq" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href.replace("/#", "/"));
  };

  // Logic warna background: Gelap jika discroll ATAU jika menu mobile terbuka
  const navBackground = isScrolled || isMobileMenuOpen
    ? "bg-emerald-950/90 backdrop-blur-md border-white/10 shadow-lg"
    : "bg-transparent border-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${navBackground} ${
        isScrolled ? "py-3" : "py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* LOGO */}
        <Link 
            to="/" 
            className="flex items-center gap-3 group z-50 relative"
            onClick={() => setIsMobileMenuOpen(false)}
        >
          <img
            src={logo}
            alt="Darcia"
            className="h-9 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
          />
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium tracking-wider transition-all duration-300 hover:text-emerald-300 ${
                isActive(link.href) 
                  ? "text-emerald-300 font-semibold" 
                  : "text-white/90"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <a
            href="https://wa.me/6282254153840?text=Halo%20kak,%20saya%20mau%20pesan%20undangan%20website%20Darcia"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-emerald-900 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-100 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transform hover:-translate-y-0.5"
          >
            Pesan Sekarang
          </a>
        </div>

        {/* --- MOBILE TOGGLE BUTTON --- */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-emerald-300 transition-colors z-50 relative focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <div
        className={`fixed inset-0 bg-emerald-950 z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          isMobileMenuOpen 
            ? "opacity-100 visible translate-y-0" 
            : "opacity-0 invisible -translate-y-10"
        }`}
      >
        {/* Decorative Background Blur */}
        <div className="absolute inset-0 bg-[url('@/assets/noise.png')] opacity-5 pointer-events-none"></div>
        <div className="absolute top-1/4 -left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-10 w-40 h-40 bg-emerald-300/10 rounded-full blur-[100px]"></div>

        <div className="flex flex-col gap-8 items-center w-full px-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-serif font-light tracking-wide transition-all duration-300 hover:scale-110 ${
                isActive(link.href) ? "text-emerald-300" : "text-white/90"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }} // Staggered animation
            >
              {link.name}
            </Link>
          ))}
          
          <div className="w-12 h-[1px] bg-white/20 my-2"></div>

          <a
            href="https://wa.me/6282254153840?text=Halo%20kak,%20saya%20mau%20pesan%20undangan%20website%20Darcia"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-emerald-900 px-8 py-4 rounded-full text-center font-bold text-lg w-full max-w-[200px] hover:bg-emerald-50 shadow-xl transition-transform active:scale-95"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
