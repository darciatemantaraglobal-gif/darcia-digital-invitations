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

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Katalog", href: "/catalog" },
    { name: "Paket", href: "/#packages" }, // Nama dipendekkan biar clean
    { name: "FAQ", href: "/#faq" },
  ];

  const isActive = (href) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href.replace("/#", "/"));
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out border-b ${
        isScrolled
          ? "bg-primary/80 backdrop-blur-md border-white/5 py-3 shadow-lg" // Scrolled: Compact & Glassy
          : "bg-transparent border-transparent py-5" // Top: Sedikit lebih lega tapi tetap ramping
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group relative z-50">
          <img
            src={logo}
            alt="Darcia"
            // Ukuran disesuaikan agar proporsional dengan font kecil yang elegan
            className="h-7 md:h-9 w-auto transition-transform duration-500 group-hover:scale-105 drop-shadow-sm opacity-90"
          />
        </Link>

        {/* Desktop Navigation - ELEGANT STYLE */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              // STYLE ELEGANT:
              // - text-[11px]: Ukuran kecil
              // - uppercase: Huruf kapital semua
              // - tracking-[0.2em]: Spasi antar huruf SANGAT LEBAR (Luxury feel)
              // - font-medium: Ketebalan sedang
              className={`text-[11px] uppercase tracking-[0.2em] transition-all duration-500 hover:text-white relative group ${
                isActive(link.href) 
                  ? "text-white" 
                  : "text-white/70"
              }`}
            >
              {link.name}
              {/* Garis bawah animasi (Underline animation) */}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-white transition-all duration-300 ${
                 isActive(link.href) ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-50"
              }`} />
            </Link>
          ))}
          
          {/* CTA Button - Minimalist Outline / Solid Hybrid */}
          <a
            href="https://wa.me/6282254153840?text=Halo%20kak,%20saya%20mau%20pesan%20undangan%20website%20Darcia"
            target="_blank"
            rel="noopener noreferrer"
            // Button style: Putih solid tapi font di dalamnya kecil & tracking lebar
            className="bg-white text-primary px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.15em] font-bold hover:bg-emerald-50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:-translate-y-0.5"
          >
            Pesan Sekarang
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-1 text-white hover:text-white/80 transition-colors z-50 relative"
        >
          {isMobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-primary/95 backdrop-blur-xl z-40 flex items-center justify-center transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-8 items-center text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-sm uppercase tracking-[0.25em] font-light transition-all duration-300 ${
                isActive(link.href) ? "text-white scale-110 font-normal" : "text-white/60 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="w-10 h-[1px] bg-white/20 my-2"></div>

          <a
            href="https://wa.me/6282254153840?text=Halo%20kak,%20saya%20mau%20pesan%20undangan%20website%20Darcia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary bg-white px-8 py-3 rounded-full text-xs uppercase tracking-[0.15em] font-bold hover:bg-emerald-50 transition-transform active:scale-95"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
