import Header from "@/components/Header";
import Footer from "@/components/Footer";
import eventImg from "@/assets/images/event-setup.jpg";
import biryaniImg from "@/assets/images/biryani.jpg";
import {
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Star,
  UtensilsCrossed,
} from "lucide-react";

const experienceHighlights = [
  "Former Banquet Manager at The Chancery Pavilion Hotel",
  "Former Banquet Manager and Restaurant Manager at the Capitol (Kempinski) Hotel",
  "Former Guest Services Agent (GSA) at Royal Orchid & Regenta Hotels",
  "Former Outlet Manager and Team Leader at Taj Group Hotels",
  "Former F&B Outlet Operations Lead at Taj Vizag Residency Hotel",
  "Former Captain at Taj Gateway Hotel, Residency Road, Bengaluru",
  "Former Steward at Taj Residency Hotel, MG Road, Bengaluru",
  "Former Guest Services Associate at Taj West End Hotel, Bengaluru",
];

export default function WhyChrizanta() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Header />

      <main className="pt-20">
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 z-0">
            <img src={eventImg} alt="Premium event catering by Chrizanta" loading="eager" decoding="async" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/75 to-primary/50" />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm mb-6">
                <Star className="w-4 h-4 text-secondary fill-secondary" />
                Why Chrizanta Caterers
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl leading-tight mb-5">A Catering Partner Built on Trust, Credentials, and Hotel-Grade Experience.</h1>
              <p className="text-white/85 text-base sm:text-lg max-w-2xl">
                Chrizanta Caterers combines premium taste, disciplined service, and operations expertise from leading hospitality brands to deliver events that run smoothly from first guest to final course.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 bg-white rounded-3xl border border-border shadow-sm p-5 sm:p-10">
                <h2 className="text-3xl sm:text-4xl text-primary mb-4">What Makes Chrizanta Different</h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
                  Every event is managed with the same discipline expected in top hotels: thoughtful planning, consistent food quality, and guest-focused execution.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-border p-5 bg-muted/40">
                    <UtensilsCrossed className="w-6 h-6 text-primary mb-3" />
                    <h3 className="text-xl text-primary mb-2">Strong Culinary Reputation</h3>
                    <p className="text-muted-foreground">Known for flavorful biryanis, balanced menus, and reliable quality across veg and non-veg service.</p>
                  </div>
                  <div className="rounded-2xl border border-border p-5 bg-muted/40">
                    <BriefcaseBusiness className="w-6 h-6 text-primary mb-3" />
                    <h3 className="text-xl text-primary mb-2">Professional Event Execution</h3>
                    <p className="text-muted-foreground">Structured staffing and clear service flow for weddings, corporate events, and private functions.</p>
                  </div>
                  <div className="rounded-2xl border border-border p-5 bg-muted/40">
                    <ShieldCheck className="w-6 h-6 text-primary mb-3" />
                    <h3 className="text-xl text-primary mb-2">Licensed & Verified</h3>
                    <p className="text-muted-foreground">Documented compliance and food safety credentials to support client confidence.</p>
                  </div>
                  <div className="rounded-2xl border border-border p-5 bg-muted/40">
                    <Award className="w-6 h-6 text-primary mb-3" />
                    <h3 className="text-xl text-primary mb-2">Hospitality-Led Standards</h3>
                    <p className="text-muted-foreground">Founder experience from premium hotel groups shapes every guest-facing detail.</p>
                  </div>
                </div>
              </div>

              <aside className="lg:col-span-5 space-y-5">
                <div className="bg-primary text-primary-foreground rounded-3xl p-5 sm:p-8 shadow-lg">
                  <h3 className="text-2xl mb-5">Business Credentials</h3>
                  <ul className="space-y-4 text-primary-foreground/90">
                    <li className="flex items-start gap-3">
                      <BadgeCheck className="w-5 h-5 mt-0.5 text-secondary shrink-0" />
                      <span>
                        <strong className="text-white">Chrizanta Caterers</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 mt-0.5 text-secondary shrink-0" />
                      <span>
                        <strong className="text-white">FAIC:</strong> Federation of All India Caterers
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 mt-0.5 text-secondary shrink-0" />
                      <span>
                        <strong className="text-white">GSTIN:</strong> 29AHJPA6227D1ZL
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 mt-0.5 text-secondary shrink-0" />
                      <span>
                        <strong className="text-white">FSSAI:</strong> 21222189000294
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-3xl overflow-hidden border border-border shadow-sm">
                  <img src={biryaniImg} alt="Signature Chrizanta cuisine" loading="lazy" decoding="async" className="w-full h-64 object-cover" />
                  <div className="p-6 bg-white">
                    <p className="text-primary text-base sm:text-lg leading-relaxed">
                      From menu curation to final service, the team focuses on clean presentation, punctual operations, and memorable flavors.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mb-10">
              <h2 className="text-3xl sm:text-4xl text-primary mb-4">Leadership Profile: Mr. Peter Aruldass</h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Mr Peter Aruldass brings deep hotel-industry experience across banquet management, restaurant operations, guest services, and F&amp;B leadership, with a profile shaped by The Chancery Pavilion, Capitol (Kempinski), Royal Orchid &amp; Regenta, and multiple Taj Group properties.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 bg-white rounded-3xl border border-border p-5 sm:p-10 shadow-sm">
                <h3 className="text-2xl text-primary mb-6">Hotel & Operations Experience</h3>
                <ul className="space-y-4">
                  {experienceHighlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <Star className="w-5 h-5 text-secondary mt-0.5 shrink-0 fill-secondary" />
                      <span className="text-foreground/85">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="lg:col-span-4 space-y-5">
                <div className="bg-white rounded-3xl border border-border p-6 shadow-sm">
                  <h3 className="text-xl text-primary mb-4">Education</h3>
                  <ul className="space-y-3 text-foreground/85">
                    <li className="flex gap-3">
                      <GraduationCap className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                      <span>Went to St. Aloysius High School, Cox Town, Bangalore</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-3xl border border-border p-6 shadow-sm">
                  <h3 className="text-xl text-primary mb-4">Base Location</h3>
                  <p className="flex gap-3 text-foreground/85">
                    <MapPin className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    Lives in Bangalore, India.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl text-center mx-auto">
              <h2 className="text-3xl sm:text-5xl mb-5">Choose Chrizanta for Your Next Event</h2>
              <p className="text-primary-foreground/80 text-base sm:text-lg mb-8">
                If you want hotel-grade discipline, dependable food quality, and a team that understands large-event execution, Chrizanta Caterers is built for that standard.
              </p>
              <a
                href="/#contact"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-secondary px-8 py-4 text-primary font-semibold hover:bg-white transition-colors"
              >
                Plan With Chrizanta
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
