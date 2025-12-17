import { useState, useEffect } from "react";
import { Maximize } from "lucide-react"; // Pastikan install lucide-react

interface PreviewFrameProps {
  url: string;
}

const PreviewFrame = ({ url }: PreviewFrameProps) => {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    // 1. Lock Scroll Body
    document.body.style.overflow = "hidden";

    // 2. Trik "Trap" Tombol Back HP
    // Memasukkan state palsu ke history browser
    window.history.pushState(null, "", window.location.href);
    
    // Kalau user pencet back, kita paksa tetep di halaman ini
    const handlePopState = () => {
      window.history.pushState(null, "", window.location.href);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleOpen = () => {
    setIsOpened(true);
    // 3. Trigger Fullscreen Mode (Browser UI Hilang)
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch((err) => {
        console.log("Fullscreen blocked:", err);
      });
    }
  };

  // TAMPILAN 1: GERBANG MASUK (Supaya bisa trigger Fullscreen)
  if (!isOpened) {
    return (
      <div className="fixed inset-0 z-[9999] w-full h-screen bg-white flex flex-col items-center justify-center p-4">
        <div className="text-center animate-fade-up">
           <h2 className="font-sinera text-5xl text-primary mb-2">The Wedding</h2>
           <p className="font-sans text-primary/60 text-sm tracking-widest uppercase mb-8">
             Exclusive Invitation Preview
           </p>
           
           <button 
             onClick={handleOpen}
             className="group relative inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs shadow-[0_10px_30px_rgba(12,101,135,0.3)] hover:scale-105 transition-all duration-300"
           >
             <Maximize className="w-4 h-4" />
             Buka Undangan
           </button>
           
           <p className="text-[10px] text-primary/40 font-sans mt-6">
             Tap button for fullscreen experience
           </p>
        </div>
      </div>
    );
  }

  // TAMPILAN 2: IFRAME FULL (Tanpa Tombol Back Browser)
  return (
    <div className="fixed inset-0 z-[9999] w-full h-screen bg-black">
      <iframe 
        src={url}
        title="Preview"
        className="w-full h-full border-0"
        allowFullScreen
      />
    </div>
  );
};

export default PreviewFrame;
