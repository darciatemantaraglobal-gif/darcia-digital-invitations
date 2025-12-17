import { useEffect } from "react";

const PreviewFrame = ({ url }) => {
  
  // Optional: Disable scroll di body website utama biar gak double scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-white w-full h-full">
      {/* Tombol Back (Opsional, biar user bisa balik ke katalog) */}
      <a 
        href="/catalog" 
        className="absolute top-4 left-4 z-50 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition-all shadow-lg"
      >
        ← Back to Catalog
      </a>

      {/* IFRAME FULLSCREEN */}
      <iframe 
        src={url}
        title="Live Preview"
        className="w-full h-full border-0"
        allowFullScreen
      />
    </div>
  );
};

export default PreviewFrame;
