import { Link } from "wouter";
import { Phone, MapPin } from "lucide-react";
import logo from "@assets/chrizantalogo_1772688493063.png";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-primary/5">
              <img src={logo} alt="Chrizanta Caterers Logo" className="w-full h-full object-contain mix-blend-multiply" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-serif font-bold text-primary tracking-wide">Chrizanta</h1>
              <p className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">Caterers</p>
            </div>
          </a>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">About</a>
          <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Services</a>
          <a href="#reputation" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Reputation</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex flex-col items-end mr-4">
            <span className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3" /> Benson Town, BLR</span>
            <a href="tel:9611262227" className="text-sm font-medium text-primary hover:text-secondary transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3" /> 9611262227
            </a>
          </div>
          <a href="#contact" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm">
            Enquire Now
          </a>
        </div>
      </div>
    </header>
  );
}