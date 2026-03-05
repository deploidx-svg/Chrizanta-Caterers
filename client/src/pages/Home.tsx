import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Star, ChefHat, UtensilsCrossed, CalendarCheck, Quote, Phone, MapPin } from "lucide-react";
import heroImg from "@/assets/images/hero-catering.jpg";
import vegImg from "@/assets/images/veg-food.jpg";
import biryaniImg from "@/assets/images/biryani.jpg";
import eventImg from "@/assets/images/event-setup.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Header />
      
      <main>
        {/* HERO SECTION */}
        <section className="relative h-[90vh] min-h-[600px] flex items-center pt-20">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImg} 
              alt="Elegant catering setup" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-2xl text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-in slide-in-from-bottom-4 duration-700 fade-in fill-mode-forwards">
                <Star className="w-4 h-4 text-secondary fill-secondary" />
                <span className="text-sm font-medium tracking-wide">Highly Rated Event Caterers in Bengaluru</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-6 animate-in slide-in-from-bottom-8 duration-700 delay-150 fade-in fill-mode-both">
                Crafting Culinary <br />
                <span className="text-secondary italic">Memories.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl animate-in slide-in-from-bottom-8 duration-700 delay-300 fade-in fill-mode-both">
                Premium multi-cuisine catering for weddings, corporate events, and grand celebrations in Benson Town and beyond.
              </p>
              
              <div className="flex flex-wrap gap-4 animate-in slide-in-from-bottom-8 duration-700 delay-500 fade-in fill-mode-both">
                <a href="#contact" className="bg-secondary text-primary hover:bg-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Plan Your Menu <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300">
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 bg-background relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                  <img src={eventImg} alt="Catering Event Setup" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl max-w-xs border border-border/50">
                  <ChefHat className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="font-serif text-xl font-semibold mb-2 text-primary">Masterful Expertise</h3>
                  <p className="text-sm text-muted-foreground">Led by a chef/founder with years of elite hospitality experience.</p>
                </div>
              </div>
              
              <div className="lg:pl-10">
                <h4 className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3">About Us</h4>
                <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">The Art of Fine Dining, Delivered.</h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Based in the heart of Bengaluru at Benson Town, Chrizanta Caterers has established itself as a premier choice for events that demand exceptional food and flawless service.
                </p>
                <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                  We believe that every gathering is unique. Whether it's an intimate house function, a grand wedding, or a professional corporate event, our team brings passion, precision, and years of hospitality expertise to your table.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                      <UtensilsCrossed className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Multi-Cuisine</h4>
                      <p className="text-sm text-muted-foreground">Veg & Non-Veg mastery</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                      <CalendarCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Any Event</h4>
                      <p className="text-sm text-muted-foreground">From 50 to 5000+ guests</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES / MENU HIGHLIGHTS */}
        <section id="services" className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h4 className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3">Our Offerings</h4>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Culinary Excellence for Every Occasion</h2>
              <p className="text-primary-foreground/70 text-lg">
                We cater to all palates and preferences, offering specialized menus designed to elevate your event.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={biryaniImg} alt="Signature Biryani" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl mb-3">Signature Non-Veg</h3>
                  <p className="text-primary-foreground/70 mb-4">Renowned for our authentic biryanis, rich curries, and perfectly spiced delicacies that leave a lasting impression.</p>
                </div>
              </div>
              
              {/* Service 2 */}
              <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={vegImg} alt="Traditional South Indian Vegetarian" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl mb-3">Authentic South Indian</h3>
                  <p className="text-primary-foreground/70 mb-4">Traditional vegetarian feasts and thalis prepared with the freshest ingredients and time-honored recipes.</p>
                </div>
              </div>
              
              {/* Service 3 */}
              <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 md:col-span-2 lg:col-span-1 flex flex-col justify-center items-center text-center p-8 relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                <ChefHat className="w-16 h-16 text-secondary mb-6 relative z-10" />
                <h3 className="font-serif text-2xl mb-3 relative z-10">Bespoke Menus</h3>
                <p className="text-primary-foreground/70 mb-8 relative z-10">Want something specific? We craft customized multi-cuisine experiences tailored precisely to your event's theme.</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-secondary hover:text-white font-medium transition-colors relative z-10">
                  Discuss Your Menu <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* REPUTATION SECTION */}
        <section id="reputation" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <h4 className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3">Reputation</h4>
                <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Trusted by the Community</h2>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-6 h-6 text-secondary fill-secondary" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-primary">4.7 / 5</span>
                </div>
                <p className="text-muted-foreground text-lg mb-8">
                  Consistently highly rated across local directories. We are known locally for flawlessly executing large functions and event catering without compromising on quality.
                </p>
              </div>
              
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 relative">
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-secondary/20" />
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-4 h-4 text-secondary fill-secondary" />)}
                  </div>
                  <p className="text-foreground/80 italic mb-6">"Booked them for my daughter's wedding. The biryani was absolutely phenomenal, and the service staff was highly professional."</p>
                  <p className="font-semibold text-primary">- Local Client</p>
                </div>
                
                <div className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 relative sm:translate-y-8">
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-secondary/20" />
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-4 h-4 text-secondary fill-secondary" />)}
                  </div>
                  <p className="text-foreground/80 italic mb-6">"Excellent corporate catering. Handled a 500-person event seamlessly with a diverse multi-cuisine spread."</p>
                  <p className="font-semibold text-primary">- Corporate Partner</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT / CTA SECTION */}
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 origin-top"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="bg-primary rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-12 md:p-16 lg:p-20 text-white">
                  <h2 className="text-4xl md:text-5xl font-serif mb-6">Let's Plan Your Perfect Event.</h2>
                  <p className="text-primary-foreground/80 text-lg mb-12">
                    Contact us today to discuss your catering needs, check availability, and receive a customized quotation.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-secondary text-sm font-semibold uppercase tracking-wider mb-1">Call Us</h4>
                        <a href="tel:9611262227" className="block text-2xl font-medium hover:text-secondary transition-colors mb-1">9611262227</a>
                        <a href="tel:9845592833" className="block text-2xl font-medium hover:text-secondary transition-colors">9845592833</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white/50 text-sm font-semibold uppercase tracking-wider mb-2">Visit Us</h4>
                        <p className="text-white/90 leading-relaxed max-w-xs">
                          Marappa Garden area, near 7 Plates,<br />
                          Benson Town / JC Nagar,<br />
                          Bengaluru, Karnataka – 560046
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-12 md:p-16 flex flex-col justify-center">
                  <h3 className="text-2xl font-serif text-primary mb-8">Send an Enquiry</h3>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Name</label>
                        <input type="text" className="w-full border-b-2 border-border pb-2 bg-transparent focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Phone</label>
                        <input type="tel" className="w-full border-b-2 border-border pb-2 bg-transparent focus:outline-none focus:border-primary transition-colors" placeholder="+91 XXXXX XXXXX" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Event Type</label>
                      <select className="w-full border-b-2 border-border pb-2 bg-transparent focus:outline-none focus:border-primary transition-colors appearance-none">
                        <option>Wedding</option>
                        <option>Corporate Event</option>
                        <option>House Party</option>
                        <option>Other</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Estimated Guest Count</label>
                      <input type="number" className="w-full border-b-2 border-border pb-2 bg-transparent focus:outline-none focus:border-primary transition-colors" placeholder="e.g. 200" />
                    </div>
                    
                    <button type="submit" className="w-full bg-primary text-primary-foreground py-4 rounded-full font-medium hover:bg-primary/90 transition-colors mt-4">
                      Request Quote
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}