import { useEffect } from "react";

interface PreviewFrameProps {
  url: string;
}

const PreviewFrame = ({ url }: PreviewFrameProps) => {
  useEffect(() => {
    // Lock scroll body utama biar ga double scroll sama isi undangan
    document.body.style.overflow = "hidden";
    
    // Cleanup pas pindah halaman
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] w-full h-screen bg-white">
      {/* Langsung Iframe Fullscreen. 
        User bakal langsung liat Cover Undangan Siska 
      */}
      <iframe 
        src={url}
        title="Live Preview"
        className="w-full h-full border-0"
        allowFullScreen
        // Tambahin loading lazy biar ga berat pas awal load landing page
        loading="lazy"
      />
    </div>
  );
};

export default PreviewFrame;
