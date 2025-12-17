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
      setIsScrolled(window.scrollY > 20); // Trigger lebih cepat biar smooth
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-emerald-950/70 backdrop-blur-md border-white/10 py-3 shadow-lg" // Emerald Glass saat scroll
          : "bg-transparent border-transparent py-6" // Transparan saat di atas
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* LOGO ONLY (No Text) */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Darcia"
            className="h-10 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium tracking-wider transition-all duration-300 hover:text-emerald-300 ${
                isActive(link.href) 
                  ? "text-emerald-300 scale-105 font-semibold" // Active State: Hijau Terang
                  : "text-white/90" // Default Text: Putih (karena bg gelap)
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* CTA Button - White Contrast */}
          <a
            href="https://wa.me/6282254153840?text=Halo%20kak,%20saya%20mau%20pesan%20undangan%20website%20Darcia"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-emerald-900 px-7 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-100 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transform hover:-translate-y-0.5"
          >
            Pesan Sekarang
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-emerald-300 transition-colors"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Full Emerald Glass) */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-emerald-950/95 backdrop-blur-xl border-t border-white/10 shadow-2xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="container mx-auto px-4 py-8 flex flex-col gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium transition-colors hover:text-emerald-300 ${
                isActive(link.href) ? "text-emerald-300" : "text-white/90"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/6282254153840?text=Halo%20kak,%20saya%20mau%20pesan%20undangan%20website%20Darcia"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-emerald-900 px-8 py-3 rounded-full text-center font-bold w-full max-w-xs mt-2 hover:bg-emerald-50"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
