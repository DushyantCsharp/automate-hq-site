export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-[rgba(11,13,19,0.6)] border-b border-white/5">
      <div className="container-pad flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-brand-500 shadow-lg shadow-brand-500/30" />
          <span className="font-semibold tracking-tight">Automate HQ</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#systems" className="hover:text-white">Systems I Build</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#contact" className="ml-2 rounded-xl bg-brand-600 hover:bg-brand-500 transition px-4 py-2 text-sm font-medium">Book a Call</a>
        </nav>
      </div>
    </header>
  );
}
