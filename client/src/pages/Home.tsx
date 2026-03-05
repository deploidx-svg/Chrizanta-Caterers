import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ArrowRight, Star, ChefHat, UtensilsCrossed, CalendarCheck, Quote, Phone, MapPin, User, PartyPopper, Users, ChevronDown, MessageCircle, Award } from "lucide-react";
import southIndianImg from "@/assets/images/rmjkg64_indian-food_625x300_25_July_23.webp";
import beegaraOotaImg from "@/assets/images/beegara-oota.jpg";
import biryaniImg from "@/assets/images/biryani.jpg";
import eventImg from "@/assets/images/event-setup.jpg";

const weddingMenuGroups = [
  {
    title: "Welcome Drinks",
    pick: "Select any one",
    items: ["Squash with Chopped Fruit", "Fruit Punch"],
  },
  {
    title: "Salads",
    pick: "Select any two",
    items: [
      "Garden Green Salad",
      "Pasta Salad",
      "Beansprout Salad",
      "Tossed Salad",
      "German Potato Salad",
      "Aloo / Fruit / Channa Chaat",
      "Russian Salad",
      "Minted Tomato Salad",
    ],
  },
  {
    title: "Non Veg",
    pick: "Select any two",
    items: [
      "Chicken Kabaab",
      "Pepper Chicken",
      "Achari Murgh",
      "Murgh Kali Mirch",
      "Murgh Do Pyaza",
      "Murgh Hyderabadi",
      "Kadai Murgh",
      "Murgh Methi",
      "Murgh Makhani",
      "Murgh Saagwala",
      "Adraki Murgh",
      "Murgh Kolhapuri",
      "Chicken Chettinad",
      "Kozhi Vartha Curry (Malabar Chicken Curry)",
    ],
  },
  {
    title: "Roti / Bread",
    pick: "Select any one",
    items: ["Seviyan", "Idiyappam", "Rumali Roti", "Naan", "Paratha", "Roti", "Appam"],
  },
  {
    title: "Rice",
    pick: "Select any one",
    items: ["Mutton Biryani", "Chicken Biryani", "Pulao (Your Choice)"],
  },
  {
    title: "Vegetarian",
    pick: "Select any two",
    items: [
      "Paneer Butter Masala",
      "Channa Masala",
      "Mix Veg Korma",
      "Gobi Manchurian",
      "Mix Vegetable Manchurian",
      "Babycorn Manchurian",
    ],
  },
  {
    title: "Desserts",
    pick: "Select any two",
    items: [
      "Malpua",
      "Gajar Halwa",
      "Jalebi",
      "Rasgulla",
      "Chum Chum",
      "Raj Bhog",
      "Gulab Jamoon",
      "Kala Jamoon",
      "Beetroot Halwa",
      "Shahi Tukda",
      "Ice Cream (Vanilla / Chocolate / Strawberry)",
      "Kesari Bath",
      "Rice Kheer",
      "Semiya Payasam",
      "Fruit Salad",
      "Caramel Custard",
      "Pineapple / Orange / Lemon Souffle",
      "Coffee Praline Souffle",
      "Pineapple Pie / Apple Pie",
      "Bread & Butter Pudding",
    ],
  },
];

const banquetVegOptions = [
  {
    title: "Option 1",
    items: [
      "Tomato Soup",
      "Hara Bhara Kebab",
      "Paneer Stick",
      "Mini Samosa",
      "Dahi Vada",
      "Tawa Sabzi",
      "Kulcha Roti / Rumali Roti",
      "Channa Masala",
      "Paneer Butter Masala",
      "Vegetable Biryani",
      "Boondi Raita",
      "Plain Rice",
      "Dal Makhani / Dal Fry",
      "Rasam",
      "Curd Rice",
      "Papad",
      "Pickle",
      "Green Salad",
      "Mal Pua",
      "Rabdi",
      "Gulab Jamoon",
      "Ice Cream",
      "Mineral Water",
    ],
  },
  {
    title: "Option 2",
    items: [
      "Sweet Corn Soup",
      "China Rolls",
      "Baby Corn Manchurian",
      "Dahi Vada",
      "Mini Masala Dosa",
      "Tawa Sabzi",
      "Kulcha Roti / Rumali Roti",
      "Kadai Paneer",
      "Navratan Korma",
      "Vegetable Pulao",
      "Raita",
      "Plain Rice",
      "Dal Tadka",
      "Rasam",
      "Curd Rice",
      "Papad",
      "Pickle",
      "Gulab Jamoon",
      "Ice Cream",
      "Sweet Paan",
      "Mineral Water",
    ],
  },
  {
    title: "Option 3",
    items: [
      "Sweet Corn Soup",
      "Gobi Manchurian",
      "Baby Corn Stick",
      "Veg Palya",
      "Dahi Vada",
      "Mini Masala Dosa",
      "Poori / Rumali Roti",
      "Paneer Masala",
      "Channa Masala",
      "Vegetable Pulao / Rice Bath",
      "Raita",
      "Plain Rice",
      "Sambar",
      "Rasam",
      "Curd Rice",
      "Papad",
      "Pickle",
      "Champakali / Malai Sweet",
      "Mineral Water",
    ],
  },
  {
    title: "Option 4",
    items: [
      "Gobi Manchurian",
      "Beans Poriyal",
      "Dahi Vada",
      "Rumali Roti",
      "Paneer Butter Masala",
      "Channa Masala",
      "Veg Pulao",
      "Raita",
      "White Rice",
      "Sambar",
      "Rasam",
      "Curd Rice",
      "Papad",
      "Pickle",
      "Champakali / Rasmalai",
      "Mineral Water",
    ],
  },
];

const weddingGroupMap = Object.fromEntries(
  weddingMenuGroups.map((group) => [group.title, group]),
);

const menuCollections = [
  {
    id: "wedding-welcome",
    label: "Welcome Drinks",
    icon: Star,
    tone: "veg",
    helper: weddingGroupMap["Welcome Drinks"]?.pick ?? "",
    intro: "Refreshing beverages to welcome your guests.",
    items: weddingGroupMap["Welcome Drinks"]?.items ?? [],
  },
  {
    id: "wedding-salads",
    label: "Salads",
    icon: CalendarCheck,
    tone: "veg",
    helper: weddingGroupMap["Salads"]?.pick ?? "",
    intro: "Fresh cold-side selections and chaat variations.",
    items: weddingGroupMap["Salads"]?.items ?? [],
  },
  {
    id: "wedding-non-veg",
    label: "Indian Non-Veg",
    icon: ChefHat,
    tone: "non-veg",
    helper: weddingGroupMap["Non Veg"]?.pick ?? "",
    intro: "Signature chicken specialties and robust gravies.",
    items: weddingGroupMap["Non Veg"]?.items ?? [],
  },
  {
    id: "wedding-veg",
    label: "Indian Veg",
    icon: UtensilsCrossed,
    tone: "veg",
    helper: weddingGroupMap["Vegetarian"]?.pick ?? "",
    intro: "Classic veg mains loved across all event styles.",
    items: weddingGroupMap["Vegetarian"]?.items ?? [],
  },
  {
    id: "wedding-rice",
    label: "Rice & Biryani",
    icon: Award,
    tone: "mixed",
    helper: weddingGroupMap["Rice"]?.pick ?? "",
    intro: "Flavor-packed biryani and pulao choices.",
    items: weddingGroupMap["Rice"]?.items ?? [],
  },
  {
    id: "wedding-bread",
    label: "Roti / Bread",
    icon: PartyPopper,
    tone: "veg",
    helper: weddingGroupMap["Roti / Bread"]?.pick ?? "",
    intro: "Soft Indian breads and traditional accompaniments.",
    items: weddingGroupMap["Roti / Bread"]?.items ?? [],
  },
  {
    id: "wedding-desserts",
    label: "Desserts",
    icon: Star,
    tone: "veg",
    helper: weddingGroupMap["Desserts"]?.pick ?? "",
    intro: "Traditional sweets, halwas, kheer, and cool desserts.",
    items: weddingGroupMap["Desserts"]?.items ?? [],
  },
  {
    id: "banquet-1",
    label: "Banquet Veg Option 1",
    icon: CalendarCheck,
    tone: "veg",
    helper: "Complete set menu",
    intro: "A balanced banquet spread with North and South favorites.",
    items: banquetVegOptions[0].items,
  },
  {
    id: "banquet-2",
    label: "Banquet Veg Option 2",
    icon: CalendarCheck,
    tone: "veg",
    helper: "Complete set menu",
    intro: "Soup-to-dessert option with mini masala dosa highlight.",
    items: banquetVegOptions[1].items,
  },
  {
    id: "banquet-3",
    label: "Banquet Veg Option 3",
    icon: CalendarCheck,
    tone: "veg",
    helper: "Complete set menu",
    intro: "Vegetarian banquet menu with sweet and savory balance.",
    items: banquetVegOptions[2].items,
  },
  {
    id: "banquet-4",
    label: "Banquet Veg Option 4",
    icon: CalendarCheck,
    tone: "veg",
    helper: "Complete set menu",
    intro: "Compact event option ideal for efficient buffet service.",
    items: banquetVegOptions[3].items,
  },
] as const;

export default function Home() {
  const [guestCount, setGuestCount] = useState(200);
  const [activeMenuId, setActiveMenuId] = useState(menuCollections[0].id);
  const activeMenu = menuCollections.find((collection) => collection.id === activeMenuId) ?? menuCollections[0];

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Header />
      
      <main className="pb-28 sm:pb-0">
        {/* HERO SECTION */}
        <section className="relative h-[90vh] min-h-[540px] sm:min-h-[600px] flex items-center pt-20 sm:pt-20">
          <div className="absolute inset-0 z-0">
            <img 
              src={eventImg} 
              alt="Elegant catering setup" 
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-[center_35%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/72 via-primary/56 to-primary/34"></div>
            <div className="absolute inset-0 bg-primary/8"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-2xl text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 sm:mb-6 animate-in slide-in-from-bottom-4 duration-700 fade-in fill-mode-forwards">
                <Star className="w-4 h-4 text-secondary fill-secondary" />
                <span className="text-xs sm:text-sm font-medium tracking-wide leading-tight">Highly Rated Event Caterers in Bengaluru</span>
              </div>
              
              <h1 className="text-[1.95rem] sm:text-5xl md:text-7xl font-serif font-medium leading-tight mb-4 sm:mb-6 animate-in slide-in-from-bottom-8 duration-700 delay-150 fade-in fill-mode-both">
                Crafting Culinary <br />
                <span className="text-secondary italic">Memories.</span>
              </h1>
              
              <p className="text-[15px] sm:text-lg md:text-xl text-white/80 mb-7 sm:mb-10 leading-relaxed max-w-xl animate-in slide-in-from-bottom-8 duration-700 delay-300 fade-in fill-mode-both">
                Premium multi-cuisine catering for weddings, corporate events, and grand celebrations in Benson Town and beyond.
              </p>
              
              <div className="flex flex-wrap gap-3 sm:gap-4 animate-in slide-in-from-bottom-8 duration-700 delay-500 fade-in fill-mode-both">
                <a href="#contact" className="w-full sm:w-auto justify-center bg-secondary text-primary hover:bg-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Plan Your Menu <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#services" className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base font-semibold transition-all duration-300">
                  Explore Services
                </a>
              </div>

              <div className="mt-3 flex flex-wrap gap-2 sm:hidden">
                <a href="tel:+919611262227" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/12 border border-white/25 text-white text-sm">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a
                  href="https://wa.me/919611262227?text=Hi%20Chrizanta%2C%20I%20need%20a%20catering%20quote."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/12 border border-white/25 text-white text-sm"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="scroll-mt-24 py-16 md:py-24 bg-background relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                  <img src={eventImg} alt="Catering Event Setup" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-10 sm:-right-10 bg-white p-6 sm:p-8 rounded-2xl shadow-xl max-w-full sm:max-w-xs border border-border/50">
                  <ChefHat className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="font-serif text-xl font-semibold mb-2 text-primary">Masterful Expertise</h3>
                  <p className="text-sm text-muted-foreground">Led by a chef/founder with years of elite hospitality experience.</p>
                </div>
              </div>
              
              <div className="lg:pl-10">
                <h4 className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3">About Us</h4>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary mb-5 sm:mb-6">The Art of Fine Dining, Delivered.</h2>
                <p className="text-muted-foreground text-base sm:text-lg mb-5 sm:mb-6 leading-relaxed">
                  Based in the heart of Bengaluru at Benson Town, Chrizanta Caterers has established itself as a premier choice for events that demand exceptional food and flawless service.
                </p>
                <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
                  We believe that every gathering is unique. Whether it's an intimate house function, a grand wedding, or a professional corporate event, our team brings passion, precision, and years of hospitality expertise to your table.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
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
        <section id="services" className="scroll-mt-24 py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h4 className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3">Our Offerings</h4>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-5 sm:mb-6">Culinary Excellence for Every Occasion</h2>
              <p className="text-primary-foreground/70 text-base sm:text-lg">
                We cater to all palates and preferences, offering specialized menus designed to elevate your event.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {/* Service 1 */}
              <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={biryaniImg} alt="Signature Biryani" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-serif text-xl sm:text-2xl mb-3">Signature Non-Veg</h3>
                  <p className="text-primary-foreground/70 mb-4">Renowned for our authentic biryanis, rich curries, and perfectly spiced delicacies that leave a lasting impression.</p>
                </div>
              </div>
              
              {/* Service 2 */}
              <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={southIndianImg} alt="Authentic Indian feast" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-serif text-xl sm:text-2xl mb-3">Authentic Indian</h3>
                  <p className="text-primary-foreground/70 mb-4">Traditional Indian meals and festive thalis prepared with regional flavors, fresh ingredients, and time-honored recipes.</p>
                </div>
              </div>
              
              {/* Service 3 */}
              <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={beegaraOotaImg} alt="Beegara Oota traditional post-wedding feast" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-serif text-xl sm:text-2xl mb-3">Beegara Oota</h3>
                  <p className="text-primary-foreground/70 mb-4">
                    A cherished post-wedding Karnataka tradition where the groom's family hosts a grand banana-leaf feast to welcome the bride and bring families together.
                  </p>
                  <p className="text-primary-foreground/70">
                    Known for generous non-vegetarian spreads, it celebrates hospitality, community, and joyful new beginnings.
                  </p>
                </div>
              </div>

              {/* Service 4 */}
              <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col justify-center items-center text-center p-6 sm:p-8 relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                <ChefHat className="w-16 h-16 text-secondary mb-6 relative z-10" />
                <h3 className="font-serif text-xl sm:text-2xl mb-3 relative z-10">Bespoke Menus</h3>
                <p className="text-primary-foreground/70 mb-8 relative z-10">Want something specific? We craft customized multi-cuisine experiences tailored precisely to your event's theme.</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-secondary hover:text-white font-medium transition-colors relative z-10">
                  Discuss Your Menu <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* MENU SECTION */}
        <section id="menu" className="scroll-mt-24 py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto mb-11 md:mb-14">
              <h4 className="text-secondary font-semibold tracking-[0.22em] uppercase text-xs sm:text-sm mb-4">Our Menus</h4>
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-semibold leading-[0.96] text-[#1d2b40] mb-5 sm:mb-7">
                Curated <span className="text-secondary">Culinary</span>
                <br />
                Selections
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                Explore our diverse menu offerings, crafted to delight every palate. All menus are customizable to your preferences.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-10">
              {menuCollections.map((collection) => {
                const Icon = collection.icon;
                const isActive = activeMenuId === collection.id;
                return (
                  <button
                    key={collection.id}
                    type="button"
                    onClick={() => setActiveMenuId(collection.id)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-[1.03rem] transition-all border ${
                      isActive
                        ? "bg-secondary text-primary border-secondary shadow-lg"
                        : "bg-muted text-muted-foreground border-transparent hover:text-primary hover:border-border"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{collection.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="rounded-3xl border border-border bg-white/85 backdrop-blur-sm p-5 sm:p-7 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h3 className="text-2xl sm:text-3xl text-primary">{activeMenu.label}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base mt-1">{activeMenu.intro}</p>
                </div>
                <div className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground w-fit">
                  {activeMenu.helper}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
              {activeMenu.items.map((item) => {
                const badgeText = activeMenu.tone === "non-veg" ? "Non-Veg" : activeMenu.tone === "mixed" ? "Mixed" : "Veg";
                const badgeClass =
                  activeMenu.tone === "non-veg"
                    ? "bg-rose-100 text-rose-700"
                    : activeMenu.tone === "mixed"
                      ? "bg-secondary/20 text-primary"
                      : "bg-emerald-100 text-emerald-700";
                return (
                  <article
                    key={`${activeMenu.id}-${item}`}
                    className="rounded-2xl border border-border bg-white p-5 sm:p-6 shadow-[0_2px_0_rgba(15,23,42,0.02)] hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h4 className="text-lg sm:text-[1.65rem] text-[#1d2b40] leading-tight break-words">{item}</h4>
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap ${badgeClass}`}
                      >
                        {badgeText}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Part of our {activeMenu.label} collection, prepared for event-scale consistency and taste.
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* MUTTON BIRYANI FEATURE */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="rounded-3xl overflow-hidden border border-secondary/30 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
                <div className="p-7 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-semibold w-fit mb-5">
                    <Award className="w-4 h-4 text-secondary" />
                    Signature Achievement
                  </span>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 leading-tight">
                    First Place in
                    <span className="text-secondary italic"> Mutton Biryani </span>
                    in Bangalore
                  </h3>
                  <p className="text-primary-foreground/80 text-base sm:text-lg leading-relaxed mb-8">
                    A city-favorite recipe loved for rich aroma, perfect spice balance, and tender mutton in every serving.
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-secondary text-primary px-6 py-3.5 font-semibold w-fit hover:bg-white transition-colors"
                  >
                    Book Your Biryani Menu <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/mutton-biryani-award"
                    className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-6 py-3.5 font-semibold w-fit hover:bg-white/10 transition-colors"
                  >
                    View Award Page <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="relative min-h-[280px] sm:min-h-[360px]">
                  <img
                    src={biryaniImg}
                    alt="Award-winning mutton biryani"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REPUTATION SECTION */}
        <section id="reputation" className="scroll-mt-24 py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center">
              <div className="lg:col-span-5">
                <h4 className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3">Reputation</h4>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary mb-5 sm:mb-6">Trusted by the Community</h2>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-6 h-6 text-secondary fill-secondary" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-primary">4.8 / 5</span>
                </div>
                <p className="inline-flex items-center gap-2 rounded-full bg-secondary/15 border border-secondary/30 px-4 py-2 text-primary font-semibold mb-4">
                  <Star className="w-4 h-4 text-secondary fill-secondary" />
                  Google Reviews: 4.8
                  <span className="text-primary/70 font-medium">1,073 reviews</span>
                </p>
                <p className="text-muted-foreground text-base sm:text-lg mb-8">
                  Consistently highly rated across local directories. We are known locally for flawlessly executing large functions and event catering without compromising on quality.
                </p>
              </div>
              
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-secondary/10 via-background to-background p-6 sm:p-8 rounded-2xl shadow-lg border border-secondary/40 ring-1 ring-secondary/20 relative">
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-secondary/20" />
                  <span className="inline-flex items-center rounded-full bg-secondary/20 border border-secondary/30 text-primary text-xs font-semibold px-3 py-1 mb-4">
                    Featured Google Review
                  </span>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-4 h-4 text-secondary fill-secondary" />)}
                  </div>
                  <p className="text-foreground/80 italic mb-6">
                    "Food was lip smacking! Quality was really nice, especially the curry with roti and the brinjal curry with biriyani! Kudos to the team!"
                  </p>
                  <p className="font-semibold text-primary">- John Tejas (Google Review)</p>
                  <a
                    href="https://share.google/bHDst0kMuFZqARLwG"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    View on Google
                  </a>
                </div>
                
                <div className="bg-background p-6 sm:p-8 rounded-2xl shadow-sm border border-border/50 relative sm:translate-y-8">
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-secondary/20" />
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-4 h-4 text-secondary fill-secondary" />)}
                  </div>
                  <p className="text-foreground/80 italic mb-6">
                    "We ordered veg food with Chrizanta Caterers for 30 people for an event on 13th September, the food prepared by them was very tasty and very good quality. We wanted the food to be packed well to take it to a different city, the job done by this team was amazing, food was packed so neatly."
                  </p>
                  <p className="font-semibold text-primary">- Raghavendra P (Google Review)</p>
                  <a
                    href="https://share.google/bHDst0kMuFZqARLwG"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    View on Google
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT / CTA SECTION */}
        <section id="contact" className="scroll-mt-24 py-16 md:py-24 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 origin-top"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="bg-primary rounded-[1.75rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-7 sm:p-10 md:p-14 lg:p-20 text-white">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-5 sm:mb-6">Plan Your Perfect Event With Us.</h2>
                  <p className="text-primary-foreground/80 text-base sm:text-lg mb-8 sm:mb-12">
                    Contact us any time to discuss your catering needs. We are available 24/7, all days, with no weekly off.
                  </p>
                  
                  <div className="space-y-6 sm:space-y-8">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-secondary text-sm font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
                          <Phone className="w-4 h-4" /> Call Us
                        </h4>
                        <a href="tel:+919611262227" className="block text-lg sm:text-xl font-medium hover:text-secondary transition-colors mb-1">+91 96112 62227</a>
                        <a href="tel:+919845592833" className="block text-lg sm:text-xl font-medium hover:text-secondary transition-colors">+91 98455 92833</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white/50 text-sm font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
                          <MapPin className="w-4 h-4" /> Visit Us
                        </h4>
                        <p className="text-white/90 leading-relaxed max-w-xs">
                          Marappa Garden Area<br />
                          Near 7 Plates<br />
                          Benson Town / JC Nagar<br />
                          Bengaluru - 560046
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 sm:p-10 md:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border/30">
                  <h3 className="text-2xl sm:text-3xl font-serif text-foreground mb-2">Tell Us About Your Event</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                    Share a few details and we will get back with the right menu and 24/7 support details.
                  </p>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Name</label>
                        <div className="flex items-center gap-2 border-b-2 border-border pb-2 focus-within:border-foreground/40 transition-colors">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <input type="text" className="w-full bg-transparent text-base focus:outline-none" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Phone</label>
                        <div className="flex items-center gap-2 border-b-2 border-border pb-2 focus-within:border-foreground/40 transition-colors">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <input type="tel" className="w-full bg-transparent text-base focus:outline-none" placeholder="+91 XXXXX XXXXX" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Event Type</label>
                      <div className="relative border-b-2 border-border pb-2 focus-within:border-foreground/40 transition-colors">
                        <PartyPopper className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <select defaultValue="" className="w-full pl-6 pr-7 bg-transparent text-base focus:outline-none appearance-none">
                          <option value="" disabled>Select Event Type</option>
                          <option>Wedding</option>
                          <option>Corporate</option>
                          <option>Birthday</option>
                          <option>House Party</option>
                          <option>Engagement</option>
                          <option>Any Occasion</option>
                        </select>
                        <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-foreground flex items-center gap-2">
                          <Users className="w-4 h-4 text-muted-foreground" /> Estimated Guests
                        </label>
                        <span className="text-sm font-semibold text-foreground">{guestCount >= 500 ? "500+" : guestCount}</span>
                      </div>
                      <input
                        type="range"
                        min={50}
                        max={500}
                        step={10}
                        value={guestCount}
                        onChange={(e) => setGuestCount(Number(e.target.value))}
                        className="w-full accent-foreground"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>50</span>
                        <span>200</span>
                        <span>500+</span>
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground py-4 rounded-full font-medium hover:bg-primary/90 hover:scale-[1.03] transition-all duration-200 mt-3 inline-flex items-center justify-center gap-2 shadow-md"
                    >
                      Get Catering Quote <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <a
                      href="https://wa.me/919611262227?text=Hi%20Chrizanta%2C%20I%20need%20a%20catering%20quote."
                      target="_blank"
                      rel="noreferrer"
                      className="w-full border border-border text-foreground py-3 rounded-full font-medium hover:bg-muted hover:scale-[1.03] transition-all duration-200 inline-flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                    </a>
                    
                    <div className="pt-4 border-t border-border/70 space-y-1">
                      <p className="text-sm font-semibold text-foreground inline-flex items-center gap-2">
                        <Star className="w-4 h-4 text-secondary fill-secondary" /> Google Reviews: 4.8
                      </p>
                      <p className="text-sm text-muted-foreground">1,073 reviews</p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <div className="sm:hidden fixed inset-x-0 bottom-0 z-40 px-3 pb-[calc(env(safe-area-inset-bottom)+0.65rem)]">
        <div className="grid grid-cols-2 gap-2 rounded-2xl border border-border/70 bg-background/95 backdrop-blur-md p-2 shadow-xl">
          <a
            href="tel:+919611262227"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-3 py-3 text-sm font-semibold"
          >
            <Phone className="w-4 h-4" /> Call
          </a>
          <a
            href="https://wa.me/919611262227?text=Hi%20Chrizanta%2C%20I%20need%20a%20catering%20quote."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/30 text-primary px-3 py-3 text-sm font-semibold bg-white"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
