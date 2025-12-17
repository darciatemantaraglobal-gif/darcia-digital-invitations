import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, ExternalLink, Check, Link2 } from "lucide-react";

const Generator = () => {
  const [name, setName] = useState("");
  const [copied, setCopied] = useState(false);
  
  // Base link landing page lo
  const baseLink = "https://darcia.id/siskaridho";
  const customLink = `${baseLink}?to=${encodeURIComponent(name.trim() || "Tamu Undangan")}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(customLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F7F0E6] flex items-center justify-center p-4 selection:bg-primary/20">
      <div className="w-full max-w-md">
        
        {/* --- HEADER --- */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-south text-primary text-4xl block mb-1">The Generator</span>
          <h1 className="font-sinera text-5xl text-primary leading-tight">Link Manager</h1>
        </motion.div>

        {/* --- CARD --- */}
        <motion.div 
          className="bg-white/80 backdrop-blur-md p-8 rounded-[2.5rem] shadow-card border border-primary/10 space-y-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {/* Input Area */}
          <div className="space-y-2">
            <label className="block font-sans text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em] ml-1">
              Nama Tamu
            </label>
            <input 
              type="text" 
              placeholder="Contoh: Bpk. Daru & Keluarga"
              className="w-full px-6 py-4 rounded-2xl border border-primary/10 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-primary font-sans"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Preview Area */}
          <div className="p-5 bg-primary/5 rounded-2xl border border-primary/5 space-y-2">
            <div className="flex items-center gap-2 text-primary/40">
              <Link2 size={14} />
              <span className="font-sans text-[10px] font-bold uppercase tracking-wider">Result Link</span>
            </div>
            <p className="font-sans text-xs text-primary/70 break-all italic leading-relaxed">
              {customLink}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button 
              onClick={handleCopy}
              className="flex-1 bg-primary text-white py-4 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg active:scale-95"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied!" : "Copy Link"}
            </button>
            
            <a 
              href={customLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary border border-primary/20 p-4 rounded-full hover:bg-primary/5 transition-all shadow-md active:scale-95"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </motion.div>

        {/* --- FOOTER --- */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <a href="/" className="font-sans text-[10px] uppercase tracking-[0.3em] text-primary/40 hover:text-primary transition-colors">
            ← Back to Home
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default Generator;
