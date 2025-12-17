import { useState } from "react";
import { Copy, ExternalLink, Check } from "lucide-react";

const Generator = () => {
  const [name, setName] = useState("");
  const [copied, setCopied] = useState(false);
  
  // Base link landing page lo
  const baseLink = "https://darcia.id/siskaridho";
  const customLink = `${baseLink}?to=${encodeURIComponent(name)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(customLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F7F0E6] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-[2rem] shadow-card border border-primary/10 w-full max-w-md animate-fade-up">
        <h1 className="font-sinera text-4xl text-primary mb-2 text-center">Darcia Link Tool</h1>
        <p className="font-sans text-primary/60 text-center text-sm mb-8">Generate custom link untuk klien</p>
        
        <div className="space-y-6">
          <div>
            <label className="block font-sans text-xs font-bold text-primary/40 uppercase tracking-widest mb-2">Nama Tamu</label>
            <input 
              type="text" 
              placeholder="Contoh: Bapak Daru & Keluarga"
              className="w-full p-4 rounded-xl border border-primary/10 bg-[#F7F0E6]/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="p-4 bg-primary/5 rounded-xl border border-primary/5 break-all">
            <p className="font-sans text-[10px] text-primary/40 uppercase mb-1 font-bold">Result Link:</p>
            <p className="font-sans text-sm text-primary/80 italic">{name ? customLink : "Masukkan nama tamu..."}</p>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={handleCopy}
              disabled={!name}
              className="flex-1 bg-primary text-white py-4 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary/90 disabled:opacity-50 transition-all shadow-lg"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied!" : "Copy Link"}
            </button>
            
            <a 
              href={customLink}
              target="_blank"
              className="bg-white text-primary border border-primary/20 p-4 rounded-full hover:bg-primary/5 transition-all shadow-md"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
