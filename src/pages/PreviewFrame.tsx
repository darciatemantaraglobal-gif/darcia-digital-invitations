import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Kita pake hook ini buat ambil parameter

interface PreviewFrameProps {
  url: string;
}

const PreviewFrame = ({ url }: PreviewFrameProps) => {
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // LOGIKA CUSTOM NAMA:
  // Kita ambil semua query string (misal ?to=Budi) dari URL darcia.id
  // Terus kita gabungin ke URL vercel siska
  const finalUrl = `${url}${location.search}`;

  return (
    <div className="fixed inset-0 z-[9999] w-full h-screen bg-white">
      <iframe 
        src={finalUrl} // Link vercel sekarang dapet kiriman nama tamu
        title="Live Preview"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default PreviewFrame;
