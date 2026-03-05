import Header from "@/components/Header";
import Footer from "@/components/Footer";
import biryaniImg from "@/assets/images/biryani.jpg";
import { Award, ArrowRight, ChefHat, Flame, Star } from "lucide-react";

const whyLoved = [
  "Balanced masala profile with rich aroma and depth",
  "Tender, juicy mutton with proper dum-cooked texture",
  "Consistent taste for both small and large events",
  "Hotel-style preparation standards with careful execution",
];

export default function MuttonBiryaniAward() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Header />

      <main className="pt-20">
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="rounded-3xl overflow-hidden border border-secondary/30 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-7 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-semibold w-fit mb-5">
                    <Award className="w-4 h-4 text-secondary" />
                    Signature Achievement
                  </span>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mb-5">
                    First Place in
                    <span className="text-secondary italic"> Mutton Biryani </span>
                    in Bangalore
                  </h1>
                  <p className="text-primary-foreground/80 text-base sm:text-lg leading-relaxed mb-8">
                    Chrizanta Caterers is proudly recognized for this signature dish, known for bold flavor, aroma, and event-ready consistency.
                  </p>
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-secondary text-primary px-6 py-3.5 font-semibold w-fit hover:bg-white transition-colors"
                  >
                    Book Your Biryani Menu <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="relative min-h-[280px] sm:min-h-[360px]">
                  <img src={biryaniImg} alt="First place mutton biryani by Chrizanta Caterers" loading="eager" decoding="async" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl sm:text-4xl font-serif text-primary mb-4">Why This Biryani Stands Out</h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                This is not just a menu item. It is one of the strongest reasons clients choose Chrizanta for weddings and grand events.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyLoved.map((point) => (
                <div key={point} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <p className="text-foreground/85 inline-flex items-start gap-3">
                    <Flame className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
              <p className="text-foreground/85 text-base sm:text-lg leading-relaxed">
                From preparation to service, every biryani batch is handled with strict quality checks to maintain taste at scale, especially for high-guest-count events.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full bg-secondary/15 text-primary px-4 py-2 text-sm font-medium">
                  <ChefHat className="w-4 h-4 mr-2 text-secondary" />
                  Signature Non-Veg Specialty
                </span>
                <span className="inline-flex items-center rounded-full bg-secondary/15 text-primary px-4 py-2 text-sm font-medium">
                  <Star className="w-4 h-4 mr-2 text-secondary fill-secondary" />
                  Event Favorite in Bengaluru
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
