import { Mail, Sparkles } from "lucide-react";

const InvitationLetter = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">New Feature!</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Invitation Letter
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Invitation Letter untuk pernikahan adalah surat undangan digital yang dikirimkan 
              ke tamu undangan. Lebih praktis dan menambahkan kesan lebih personal kepada tamu.
            </p>
            <a
              href="https://wa.me/6282254153840?text=Halo%20kak,%20saya%20tertarik%20dengan%20fitur%20Invitation%20Letter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
            >
              Konsultasi Sekarang
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right - Illustration */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-80 md:w-72 md:h-96 bg-gradient-to-br from-primary/20 to-emerald-light/10 rounded-3xl flex items-center justify-center shadow-card">
                <Mail className="w-20 h-20 text-primary opacity-60" />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg animate-float">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationLetter;
