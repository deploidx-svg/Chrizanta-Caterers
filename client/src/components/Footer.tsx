import { MapPin, Phone, Instagram, Facebook } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-14 md:pt-16 pb-8 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
          <div className="space-y-6">
            <BrandLogo variant="main" tone="light" />
            <p className="text-primary-foreground/70 leading-relaxed max-w-sm">
              Creating unforgettable culinary experiences for weddings, corporate events, and intimate gatherings in Bengaluru.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-white border-b border-white/10 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>Marappa Garden area, near 7 Plates,<br />Benson Town / JC Nagar,<br />Bengaluru, Karnataka - 560046</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:9611262227" className="hover:text-secondary transition-colors">9611262227</a>
                  <a href="tel:9845592833" className="hover:text-secondary transition-colors">9845592833</a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-white border-b border-white/10 pb-2 inline-block">Business Hours</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex flex-col sm:flex-row sm:justify-between border-b border-white/5 pb-2 gap-1 sm:gap-3">
                <span>All Days</span>
                <span>24 / 7 Service</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between pb-2 text-secondary gap-1 sm:gap-3">
                <span>No Weekly Off</span>
                <span>Always Available</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-white/10 text-sm text-primary-foreground/50 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p>&copy; {new Date().getFullYear()} Chrizanta Caterers. All rights reserved.</p>
          <p>Bengaluru's Premium Catering Service</p>
        </div>
      </div>
    </footer>
  );
}
