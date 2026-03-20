const TopBar = () => {
  return (
    <div className="w-full bg-primary py-2.5">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <span className="font-accent text-xs tracking-[3px] uppercase text-primary-foreground/70">
          Bonpland 1427 · Palermo
        </span>
        <div className="flex items-center gap-6">
          <a href="tel:01147744011" className="font-accent text-xs tracking-wider text-primary-foreground/90 hover:text-primary-foreground transition-colors">
            011 4774-4011
          </a>
          <span className="text-primary-foreground/30">|</span>
          <span className="font-accent text-xs tracking-wider text-primary-foreground/70">
            Mar–Sáb · 8 a 20hs
          </span>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
