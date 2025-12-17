import { useEffect } from "react";

// Kita hapus import Link dan ArrowLeft karena udah gak dipake
// import { Link } from "react-router-dom"; 
// import { ArrowLeft } from "lucide-react";

interface PreviewFrameProps {
  url: string;
}

const PreviewFrame = ({ url }: PreviewFrameProps) => {
  // Tetap matikan scroll di body utama biar experience-nya kayak native app
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] w-full h-screen bg-white">
      
      {/* Tombol Back SUDAH DIHAPUS di sini */}

      {/* Iframe Fullscreen Murni */}
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
