import { useState } from "react";
import { Copy, Send, Check, Link2, MessageSquare, Users, Trash2 } from "lucide-react";

type Language = "formal" | "islamic" | "english";

const Generator = () => {
  const [bulkNames, setBulkNames] = useState("");
  const [language, setLanguage] = useState<Language>("formal");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  
  const baseLink = "https://darcia.id/siskaridho";

  // Ambil daftar nama dari textarea (pisahin per baris)
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
      formal: `Kepada Yth. ${name}\n\nTanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.\n\nDetail undangan:\n${link}\n\nTerima kasih.`,
      islamic: `Assalamu'alaikum Wr. Wb.\n\nKepada Yth. ${name}\n\nDengan memohon ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i ke acara pernikahan kami.\n\nLink undangan:\n${link}\n\nWassalamu'alaikum Wr. Wb.`,
      english: `Dear ${name}\n\nWe cordially invite you to our wedding. Details can be found here:\n${link}\n\nThank you!`,
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
    <div className="min-h-screen bg-[#F7F0E6] py-12 px-4 sm:px-8 font-sans">
      <div className="max-w-3xl mx-auto animate-fade-up">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-10">
          <span className="font-south text-primary text-4xl block mb-1">Darcia Admin</span>
          <h1 className="font-sinera text-5xl text-primary leading-tight font-bold">Bulk Link Generator</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* --- LEFT: INPUT AREA --- */}
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-card border border-primary/10 space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Users size={18} />
                <label className="text-[10px] font-bold uppercase tracking-[0.2em]">Input Daftar Tamu</label>
              </div>
              <textarea 
                rows={10}
                placeholder="Tulis nama tamu (satu nama per baris)...&#10;Contoh:&#10;Bpk. Ahmad&#10;Siska & Ridho&#10;Keluarga Besar"
                className="w-full px-5 py-4 rounded-2xl border border-primary/10 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm text-primary leading-relaxed"
                value={bulkNames}
                onChange={(e) => setBulkNames(e.target.value)}
              />
              <button 
                onClick={() => setBulkNames("")}
                className="text-[10px] text-red-400 font-bold uppercase tracking-widest flex items-center gap-1 hover:text-red-600 transition-colors"
              >
                <Trash2 size={12} /> Clear List
              </button>
            </div>

            <div className="bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-card border border-primary/10 space-y-4">
              <label className="block text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em]">Caption Style</label>
              <div className="grid grid-cols-3 gap-2 p-1.5 bg-primary/5 rounded-2xl">
                {(["formal", "islamic", "english"] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                      language === lang ? "bg-primary text-white" : "text-primary/40"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT: OUTPUT LIST --- */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em]">
                Daftar Link ({guestList.length} Tamu)
              </h2>
            </div>

            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {guestList.length === 0 ? (
                <div className="text-center py-20 bg-white/40 rounded-[2rem] border border-dashed border-primary/20">
                  <p className="text-xs text-primary/30 italic font-sans">Belum ada nama tamu...</p>
                </div>
              ) : (
                guestList.map((name, index) => (
                  <div key={index} className="bg-white p-4 rounded-2xl border border-primary/5 shadow-sm flex flex-col gap-3 group hover:border-primary/20 transition-all">
                    <div className="flex justify-between items-start">
                      <span className="text-sm font-bold text-primary font-sans truncate pr-4">{name}</span>
                      <span className="text-[10px] text-primary/20 font-mono">#{index + 1}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleCopy(name, index)}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                          copiedIndex === index 
                          ? "bg-emerald-500 text-white" 
                          : "bg-primary/5 text-primary hover:bg-primary hover:text-white"
                        }`}
                      >
                        {copiedIndex === index ? <Check size={14} /> : <Copy size={14} />}
                        {copiedIndex === index ? "Copied" : "Copy"}
                      </button>
                      
                      <button 
                        onClick={() => handleSendWA(name)}
                        className="bg-[#25D366]/10 text-[#25D366] p-2.5 rounded-xl hover:bg-[#25D366] hover:text-white transition-all shadow-sm"
                        title="Send to WA"
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
        <div className="text-center mt-12">
          <a href="/" className="font-sans text-[10px] uppercase tracking-[0.3em] text-primary/40 hover:text-primary transition-colors">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Generator;
