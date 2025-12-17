import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Send, Check, Link2, MessageSquare, QrCode } from "lucide-react";

// Mock Data - Bisa lo sesuaikan dengan data Wedding klien nanti
const weddingData = {
  groom: "Andi",
  bride: "Sarah",
  date: "Minggu, 12 Oktober 2025",
  venue: "Hotel Mulia, Jakarta",
  logo: "S & A"
};

type Language = "indonesia" | "islami" | "english";

const Generator = () => {
  const [guestName, setGuestName] = useState("");
  const [language, setLanguage] = useState<Language>("indonesia");
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  // Link Utama Darcia lo
  const baseUrl = "https://darcia.id/siskaridho";
  
  const generateInvitationLink = () => {
    const encodedName = encodeURIComponent(guestName.trim() || "Tamu Undangan");
    return `${baseUrl}?to=${encodedName}`;
  };

  const getWhatsAppText = () => {
    const link = generateInvitationLink();
    const guest = guestName.trim() || "Bapak/Ibu/Saudara/i";

    const templates: Record<Language, string> = {
      indonesia: `Kepada Yth. ${guest}\n\nTanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:\n\n💍 ${weddingData.groom} & ${weddingData.bride}\n\n📅 ${weddingData.date}\n📍 ${weddingData.venue}\n\nInfo lengkap kunjungi:\n${link}\n\nTerima kasih. 🙏`,
      islami: `بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم\n\nAssalamu'alaikum Wr. Wb.\n\nKepada Yth. ${guest}\n\nDengan memohon ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i ke acara pernikahan kami:\n\n💍 ${weddingData.groom} & ${weddingData.bride}\n\n📅 ${weddingData.date}\n📍 ${weddingData.venue}\n\nDetail undangan:\n${link}\n\nWassalamu'alaikum Wr. Wb. 🤲`,
      english: `Dear ${guest},\n\nYou are cordially invited to celebrate the wedding of:\n\n💍 ${weddingData.groom} & ${weddingData.bride}\n\n📅 ${weddingData.date}\n📍 ${weddingData.venue}\n\nVisit the link for more details:\n${link}\n\nWe look forward to seeing you! 💐`,
    };

    return templates[language];
  };

  const copyToClipboard = async (text: string, type: 'link' | 'text') => {
    await navigator.clipboard.writeText(text);
    if (type === 'link') {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } else {
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F0E6] py-12 px-4 font-sans selection:bg-primary/20">
      <div className="max-w-xl mx-auto">
        
        {/* --- HEADER --- */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-south text-primary text-4xl block mb-2 opacity-80">The Generator</span>
          <h1 className="font-sinera text-5xl md:text-6xl text-primary mb-4 leading-tight">
            Invitation <br /> Manager
          </h1>
          <p className="text-primary/60 text-sm italic">Generate custom link untuk klien Darcia</p>
        </motion.div>

        {/* --- CARD CONTAINER --- */}
        <motion.div 
          className="bg-white/80 backdrop-blur-md border border-primary/10 p-8 rounded-[2.5rem] shadow-card space-y-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          
          {/* 1. INPUT NAMA */}
          <div className="space-y-3">
            <label className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em] ml-1">Nama Tamu</label>
            <input 
              type="text" 
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Contoh: Bpk. Daru & Keluarga"
              className="w-full px-6 py-4 rounded-2xl border border-primary/10 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-primary"
            />
          </div>

          {/* 2. PILIH BAHASA */}
          <div className="space-y-3">
            <label className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em] ml-1">Bahasa Template</label>
            <div className="grid grid-cols-3 gap-3">
              {["indonesia", "islami", "english"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang as Language)}
                  className={`py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                    language === lang 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "bg-white border border-primary/10 text-primary/40 hover:bg-primary/5"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* 3. PREVIEW & ACTIONS */}
          <div className="space-y-4 pt-4 border-t border-primary/5">
            <div className="p-5 bg-primary/5 rounded-2xl border border-primary/5">
               <div className="flex items-center gap-2 mb-2 text-primary/40">
                  <Link2 size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Generated Link</span>
               </div>
               <p className="text-xs text-primary/70 break-all font-mono leading-relaxed italic">
                 {generateInvitationLink()}
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button 
                onClick={() => copyToClipboard(generateInvitationLink(), 'link')}
                className="flex items-center justify-center gap-2 py-4 bg-white border border-primary/20 text-primary rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all group"
              >
                {copiedLink ? <Check size={16} /> : <Copy size={16} className="group-hover:scale-110 transition-transform"/>}
                {copiedLink ? "Link Copied!" : "Copy Link"}
              </button>

              <button 
                onClick={() => copyToClipboard(getWhatsAppText(), 'text')}
                className="flex items-center justify-center gap-2 py-4 bg-white border border-primary/20 text-primary rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all group"
              >
                {copiedText ? <Check size={16} /> : <MessageSquare size={16} className="group-hover:scale-110 transition-transform"/>}
                {copiedText ? "Template Copied!" : "Copy Text"}
              </button>
            </div>

            <button 
              onClick={() => {
                const text = encodeURIComponent(getWhatsAppText());
                window.open(`https://wa.me/?text=${text}`, "_blank");
              }}
              className="w-full flex items-center justify-center gap-3 py-5 bg-[#25D366] text-white rounded-2xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#1ebd5e] transition-all shadow-xl shadow-green-500/20 active:scale-[0.98]"
            >
              <Send size={18} />
              Kirim ke WhatsApp
            </button>
          </div>

        </motion.div>

        {/* --- FOOTER --- */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <a href="/" className="font-sans text-[10px] uppercase tracking-[0.3em] text-primary/40 hover:text-primary transition-colors">
            ← Back to Landing Page
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default Generator;
