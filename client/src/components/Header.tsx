import { Link } from "wouter";
import { useEffect, useState, type MouseEvent } from "react";
import { useLocation } from "wouter";
import { Phone, MapPin, Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const handleSectionClick = (sectionId: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (location !== "/") {
      setMobileMenuOpen(false);
      return;
    }

    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `/#${sectionId}`);
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-background border-b border-border shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
        <Link href="/" className="inline-flex items-center">
          <BrandLogo variant="navbar" />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Home
          </Link>
          <a href="/#about" onClick={handleSectionClick("about")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">About</a>
          <a href="/#services" onClick={handleSectionClick("services")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Services</a>
          <a href="/#menu" onClick={handleSectionClick("menu")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Menu</a>
          <a href="/#reputation" onClick={handleSectionClick("reputation")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Reputation</a>
          <a href="/#contact" onClick={handleSectionClick("contact")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Contact</a>
          <Link href="/why-chrizanta" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Why Chrizanta
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden lg:flex flex-col items-end mr-4">
            <span className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3" /> Benson Town, BLR</span>
            <a href="tel:9611262227" className="text-sm font-medium text-primary hover:text-secondary transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3" /> 9611262227
            </a>
          </div>
          <a href="/#contact" onClick={handleSectionClick("contact")} className="hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm">
            Enquire Now
          </a>
          <button
            type="button"
            className={`md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border text-primary transition-all duration-300 ${
              mobileMenuOpen ? "border-primary/50 bg-primary/10 shadow-[0_0_0_4px_hsl(var(--primary)/0.12)]" : "border-border bg-background"
            }`}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 animate-in zoom-in-75 duration-200" /> : <Menu className="w-5 h-5 animate-in zoom-in-75 duration-200" />}
          </button>
        </div>
      </div>

      <div
        aria-hidden={!mobileMenuOpen}
        className={`md:hidden fixed inset-0 top-16 sm:top-20 z-40 transition-all duration-300 ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Close mobile menu"
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-primary/25 transition-opacity duration-400 ease-out ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <nav
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm bg-background border-l border-border/60 shadow-2xl px-4 py-5 flex flex-col gap-2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileMenuOpen ? "translate-x-0 opacity-100 scale-100" : "translate-x-full opacity-0 scale-[0.98]"
          }`}
        >
            <div className="mx-auto mb-1 h-1.5 w-12 rounded-full bg-primary/20" />
            <Link
              href="/"
              className="px-3 py-3 rounded-lg text-base font-medium text-foreground/80 hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="/#about"
              onClick={handleSectionClick("about")}
              className="px-3 py-3 rounded-lg text-base font-medium text-foreground/80 hover:bg-muted transition-colors"
            >
              About
            </a>
            <a
              href="/#services"
              onClick={handleSectionClick("services")}
              className="px-3 py-3 rounded-lg text-base font-medium text-foreground/80 hover:bg-muted transition-colors"
            >
              Services
            </a>
            <a
              href="/#menu"
              onClick={handleSectionClick("menu")}
              className="px-3 py-3 rounded-lg text-base font-medium text-foreground/80 hover:bg-muted transition-colors"
            >
              Menu
            </a>
            <a
              href="/#reputation"
              onClick={handleSectionClick("reputation")}
              className="px-3 py-3 rounded-lg text-base font-medium text-foreground/80 hover:bg-muted transition-colors"
            >
              Reputation
            </a>
            <a
              href="/#contact"
              onClick={handleSectionClick("contact")}
              className="px-3 py-3 rounded-lg text-base font-medium text-foreground/80 hover:bg-muted transition-colors"
            >
              Contact
            </a>
            <Link
              href="/why-chrizanta"
              className="px-3 py-3 rounded-lg text-base font-medium text-foreground/80 hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Chrizanta
            </Link>
            <a
              href="/#contact"
              onClick={handleSectionClick("contact")}
              className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-3 rounded-full text-base font-medium transition-colors shadow-sm text-center"
            >
              Enquire Now
            </a>
            <a
              href="tel:+919611262227"
              className="mt-2 border border-border bg-background px-4 py-3 rounded-full text-base font-medium text-center text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Call: 96112 62227
            </a>
        </nav>
      </div>
    </header>
  );
}
