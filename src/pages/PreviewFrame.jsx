import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Definisi tipe data untuk props (Biar TS seneng)
interface PreviewFrameProps {
  url: string;
}

const PreviewFrame = ({ url }: PreviewFrameProps) => {
  
  // Disable scroll di body utama saat preview dibuka
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] w-full h-screen bg-white">
      
      {/* Tombol Back */}
      <Link 
        to="/catalog" 
        className="absolute top-4 left-4 z-50 flex items-center gap-2 bg-black/20 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black/40 transition-all duration-300 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back
      </Link>

      {/* Iframe */}
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
