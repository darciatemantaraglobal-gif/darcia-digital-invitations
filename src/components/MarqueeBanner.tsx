const MarqueeBanner = () => {
  const messages = [
    "SPESIAL PROMO",
    "•",
    "UNDANGAN DIGITAL PREMIUM",
    "•",
    "SPESIAL PROMO",
    "•",
    "UNDANGAN DIGITAL PREMIUM",
    "•",
  ];

  return (
    <div className="bg-primary text-primary-foreground py-2.5 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...messages, ...messages, ...messages, ...messages].map((msg, idx) => (
          <span
            key={idx}
            className="mx-4 text-xs md:text-sm font-medium tracking-widest"
          >
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
