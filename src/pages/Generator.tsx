import { useState } from "react";
import { Copy, Send, Check, Link2, MessageSquare } from "lucide-react";

type Language = "formal" | "islamic" | "english";

const Generator = () => {
  const [name, setName] = useState("");
  const [language, setLanguage] = useState<Language>("formal");
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  
  const baseLink = "https://darcia.id/siskaridho";
  const guestName = name.trim() || "Tamu Undangan";
  const customLink = `${baseLink}?to=${encodeURIComponent(guestName)}`;

  // --- TEMPLATE CAPTION ---
  const templates: Record<Language, string> = {
    formal: `Kepada Yth. ${guestName}\n\nTanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.\n\nDetail undangan dapat diakses melalui link berikut:\n${customLink}\n\nMerupakan suatu kehormatan bagi kami apabila Bapak/Ibu berkenan hadir. Terima kasih.`,
    
    islamic: `Assalamu'alaikum Warahmatullahi Wabarakatuh\n\nKepada Yth. ${guestName}\n\nDengan memohon ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i ke acara pernikahan kami.\n\nInformasi lengkap silakan kunjungi link undangan digital kami:\n${customLink}\n\nWassalamu'alaikum Warahmatullahi Wabarakatuh.`,
    
    english: `Dear ${guestName}\n\nWe cordially invite you to celebrate our wedding day. Please find the details of our invitation through the link below:\n\n${customLink}\n\nIt would be an honor to have you with us on our special day. Thank you.`,
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(customLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(templates[language]);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const handleSendWA = () => {
    const waUrl = `https://wa.me/?text=${encodeURIComponent(templates[language])}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#F7F0E6] flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-xl animate-fade-up">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-8">
          <span className="font-south text-primary text-4xl block mb-1">Darcia Digital</span>
          <h1 className="font-sinera text-5xl text-primary leading-tight">Link & Caption</h1>
        </div>

        {/* --- MAIN CARD --- */}
        <div className="bg-white/90 backdrop-blur-md p-6 sm:p-10 rounded-[2.5rem] shadow-card border border-primary/10 space-y-8">
          
          {/* Input Nama */}
          <div className="space-y-3">
            <label className="block text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em] ml-1">
              Nama Tamu
            </label>
            <input 
              type="text" 
              placeholder="Contoh: Bpk. Daru & Keluarga"
              className="w-full px-6 py-4 rounded-2xl border border-primary/10 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-primary"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Tab Bahasa */}
          <div className="space-y-3">
            <label className="block text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em] ml-1">
              Pilih Style Caption
            </label>
            <div className="grid grid-cols-3 gap-2 p-1.5 bg-primary/5 rounded-2xl border border-primary/5">
              {(["formal", "islamic", "english"] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                    language === lang 
                    ? "bg-primary text-white shadow-md" 
                    : "text-primary/40 hover:text-primary"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Preview & Action Link */}
          <div className="space-y-4 pt-4 border-t border-primary/5">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 p-4 bg-primary/5 rounded-2xl border border-primary/5 flex items-center gap-3">
                <Link2 size={16} className="text-primary/30 shrink-0" />
                <p className="text-[11px] text-primary/70 break-all font-mono italic overflow-hidden text-ellipsis">
                  {customLink}
                </p>
              </div>
              <button 
                onClick={handleCopyLink}
                className="bg-white border border-primary/20 text-primary p-4 rounded-2xl hover:bg-primary hover:text-white transition-all shrink-0 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest"
              >
                {copiedLink ? <Check size={16} /> : <Copy size={16} />}
                {copiedLink ? "Link Copied" : "Copy Link"}
              </button>
            </div>
          </div>

          {/* Caption Box & Action Text */}
          <div className="space-y-4">
            <div className="p-5 bg-primary/5 rounded-2xl border border-primary/5 space-y-2">
              <div className="flex items-center gap-2 text-primary/40 mb-1">
                <MessageSquare size={14} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Caption Preview</span>
              </div>
              <p className="text-[12px] text-primary/70 whitespace-pre-wrap leading-relaxed font-sans italic">
                {templates[language]}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button 
                onClick={handleCopyText}
                className="flex items-center justify-center gap-2 py-4 bg-white border border-primary/20 text-primary rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-primary/5 transition-all"
              >
                {copiedText ? <Check size={16} /> : <Copy size={16} />}
                {copiedText ? "Teks Copied" : "Copy Caption"}
              </button>
              
              <button 
                onClick={handleSendWA}
                className="flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#20ba5a] transition-all shadow-lg shadow-green-500/20"
              >
                <Send size={16} />
                Send to WhatsApp
              </button>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <a href="/" className="font-sans text-[10px] uppercase tracking-[0.3em] text-primary/40 hover:text-primary transition-colors">
            ← Back to Home
          </a>
        </div>

      </div>
    </div>
  );
};

export default Generator;
