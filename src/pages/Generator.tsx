import { useState } from "react";
import { Copy, Send, Check, Link2, MessageSquare, Users, Trash2, Eye } from "lucide-react";

type Language = "formal" | "islamic" | "english";

const Generator = () => {
  const [bulkNames, setBulkNames] = useState("");
  const [language, setLanguage] = useState<Language>("formal");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  
  const baseLink = "https://darcia.id/siskaridho";

  const guestList = bulkNames
    .split("\n")
    .map((name) => name.trim())
    .filter((name) => name !== "");

  const getCustomLink = (name: string) => {
    return `${baseLink}?to=${encodeURIComponent(name)}`;
  };

  const getTemplate = (name: string, lang: Language) => {
    const link = getCustomLink(name);
    const templates: Record<Language, string> = {
      formal: `Kepada Yth. ${name}\n\nTanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.\n\nDetail undangan dapat diakses melalui link:\n${link}\n\nTerima kasih.`,
      islamic: `Assalamu'alaikum Warahmatullahi Wabarakatuh\n\nKepada Yth. ${name}\n\nDengan memohon ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i ke acara pernikahan kami.\n\nLink undangan digital kami:\n${link}\n\nWassalamu'alaikum Warahmatullahi Wabarakatuh.`,
      english: `Dear ${name}\n\nWe cordially invite you to celebrate our wedding day. Please find the details through the link below:\n\n${link}\n\nThank you!`,
    };
    return templates[lang];
  };

  const handleCopy = (name: string, index: number) => {
    const text = getTemplate(name, language);
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleSendWA = (name: string) => {
    const text = getTemplate(name, language);
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#F7F0E6] py-12 px-4 sm:px-8 font-sans selection:bg-primary/10">
      <div className="max-w-4xl mx-auto animate-fade-up">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-10">
          <span className="font-south text-primary text-4xl block mb-1">Darcia Admin</span>
          <h1 className="font-sinera text-5xl text-primary leading-tight">Bulk Invitation</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* --- LEFT: CONFIGURATION --- */}
          <div className="space-y-6">
            {/* Input Daftar Tamu */}
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-card border border-primary/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary">
                  <Users size={18} />
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em]">Input Daftar Nama</label>
                </div>
                <button 
                  onClick={() => setBulkNames("")}
                  className="text-[10px] text-red-400 font-bold uppercase tracking-widest flex items-center gap-1 hover:text-red-600 transition-colors"
                >
                  <Trash2 size={12} /> Clear
                </button>
              </div>
              <textarea 
                rows={8}
                placeholder="Tulis nama tamu per baris...&#10;Contoh:&#10;Bpk. Ahmad&#10;Mahmud & Keluarga"
                className="w-full px-5 py-4 rounded-2xl border border-primary/10 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm text-primary leading-relaxed"
                value={bulkNames}
                onChange={(e) => setBulkNames(e.target.value)}
              />
            </div>

            {/* Pilih Bahasa */}
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-card border border-primary/10 space-y-4">
              <label className="block text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em]">Style Caption</label>
              <div className="grid grid-cols-3 gap-2 p-1.5 bg-primary/5 rounded-2xl">
                {(["formal", "islamic", "english"] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                      language === lang ? "bg-primary text-white shadow-md" : "text-primary/40 hover:text-primary"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT: PREVIEW LIST --- */}
          <div className="space-y-4">
            <h2 className="px-2 text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em]">
              Preview List ({guestList.length} Tamu)
            </h2>

            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {guestList.length === 0 ? (
                <div className="text-center py-20 bg-white/40 rounded-[2rem] border border-dashed border-primary/20">
                  <p className="text-xs text-primary/30 italic">Masukkan nama di kolom kiri...</p>
                </div>
              ) : (
                guestList.map((name, index) => (
                  <div key={index} className="bg-white/90 backdrop-blur-sm p-5 rounded-[1.5rem] border border-primary/5 shadow-sm space-y-4 hover:border-primary/20 transition-all">
                    {/* Header Kartu */}
                    <div className="flex justify-between items-center border-b border-primary/5 pb-2">
                      <span className="text-sm font-bold text-primary truncate max-w-[80%]">{name}</span>
                      <span className="text-[9px] font-mono text-primary/30">#{index + 1}</span>
                    </div>

                    {/* Tampilan Caption */}
                    <div className="bg-primary/5 p-4 rounded-xl space-y-2">
                      <div className="flex items-center gap-1.5 text-primary/40">
                        <MessageSquare size={12} />
                        <span className="text-[9px] font-bold uppercase tracking-wider">Caption Preview</span>
                      </div>
                      <p className="text-[11px] text-primary/70 whitespace-pre-wrap leading-relaxed italic font-sans">
                        {getTemplate(name, language)}
                      </p>
                    </div>
                    
                    {/* Tombol Aksi */}
                    <div className="flex gap-2 pt-1">
                      <button 
                        onClick={() => handleCopy(name, index)}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                          copiedIndex === index 
                          ? "bg-emerald-500 text-white" 
                          : "bg-primary text-white hover:bg-primary/90"
                        }`}
                      >
                        {copiedIndex === index ? <Check size={14} /> : <Copy size={14} />}
                        {copiedIndex === index ? "Copied" : "Copy Caption"}
                      </button>
                      
                      <button 
                        onClick={() => handleSendWA(name)}
                        className="bg-[#25D366] text-white p-3 rounded-xl hover:bg-[#1ebd5e] transition-all shadow-md flex items-center justify-center"
                        title="Send via WhatsApp"
                      >
                        <Send size={16} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="text-center mt-12 pb-10">
          <a href="/" className="font-sans text-[10px] uppercase tracking-[0.3em] text-primary/40 hover:text-primary transition-colors">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Generator;
