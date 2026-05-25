import { ShieldCheck, ClipboardCheck, Star, Zap, ArrowRight, Award, Flame, Users, CalendarDays } from 'lucide-react';

interface HomeSectionProps {
  setView: (view: string) => void;
}

export default function HomeSection({ setView }: HomeSectionProps) {
  const trustBadges = [
    {
      id: "badge-licensed",
      icon: ShieldCheck,
      title: "Licensed & Insured",
      desc: "Fully bonded & insured with $2M general liability."
    },
    {
      id: "badge-estimates",
      icon: ClipboardCheck,
      title: "Free Estimates",
      desc: "Detailed physical drone diagnostics, 100% free."
    },
    {
      id: "badge-stars",
      icon: Star,
      title: "5-Star Rated",
      desc: "Ranked as Austin's top roofing team across networks."
    },
    {
      id: "badge-emergency",
      icon: Zap,
      title: "24/7 Red Alert",
      desc: "Average emergency leak dispatch under an hour."
    }
  ];

  const coreOffers = [
    {
      id: "offer-roofing",
      title: "Roofing Solutions",
      desc: "Premium lifetime asphalt shingles, standing-seam metal sheets, and Firestone TPO flat structures.",
      img: "https://images.unsplash.com/photo-1632833238851-47a1a9a01587?auto=format&fit=crop&q=80&w=500",
      targetView: "services"
    },
    {
      id: "offer-siding",
      title: "Siding & Walls",
      desc: "Beautiful weather-proof James Hardie fiber cement boards and maintenance-free insulated vinyl paneling.",
      img: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&q=80&w=500",
      targetView: "services"
    },
    {
      id: "offer-gutters",
      title: "Gutters & Drainage",
      desc: "On-site custom-extruded seamless aluminum configurations coupled with heavy-mesh gutter screen guards.",
      img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=500",
      targetView: "services"
    }
  ];

  const whyChooseUs = [
    {
      id: "choose-family",
      icon: Users,
      title: "Family Owned & Local",
      desc: "We live and work right here in the community—honest Texas folks who stand firmly behind every roof we nail."
    },
    {
      id: "choose-craftsman",
      icon: Award,
      title: "Certified Craftsmen Only",
      desc: "Every installer on our site is fully certified by GAF and Owens Corning to comply precisely with warrantied guidelines."
    },
    {
      id: "choose-materials",
      icon: Flame,
      title: "Uncompromising Material Quality",
      desc: "We never take shortcuts. Every project includes heavy-duty ice & water shields, synthetic wrap, and lifetime materials."
    },
    {
      id: "choose-warranty",
      icon: CalendarDays,
      title: "Airtight Workmanship Warranty",
      desc: "Get total peace of mind with our Transferable 10-Year Labor Warranty and complete Manufacturer Lifetimes."
    }
  ];

  return (
    <div id="home-view-container" className="bg-slate-50">
      
      {/* 1. Trust Badges Section */}
      <section id="trust-badges-bar" className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustBadges.map((badge) => {
              const IconComp = badge.icon;
              return (
                <div key={badge.id} id={badge.id} className="flex flex-col items-center text-center p-3">
                  <div className="p-3 bg-slate-100 text-[#0A2F6C] rounded-2xl mb-4 transition-transform hover:scale-105 duration-200">
                    <IconComp className="h-7 w-7 stroke-[2]" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-base">{badge.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-[200px]">{badge.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. What We Do - Offers Grid */}
      <section id="what-we-do-panel" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A2F6C] tracking-tight">
              Professional Home protection
            </h2>
            <div className="h-1.5 w-16 bg-[#2A73D1] mx-auto mt-4 rounded-full" />
            <p className="text-slate-600 mt-4 font-normal text-sm leading-relaxed">
              We provide full-spectrum structural cladding, roofing, and safety drainage. See our three primary divisions below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreOffers.map((offer) => (
              <div
                key={offer.id}
                id={offer.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1.5 duration-300 border border-slate-100 group"
              >
                <div className="h-52 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors duration-300 z-10" />
                  <img
                    src={offer.img}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-slate-900">{offer.title}</h3>
                  <p className="text-sm text-slate-500 mt-2.5 leading-relaxed min-h-[72px]">
                    {offer.desc}
                  </p>
                  <button
                    id={`${offer.id}-btn`}
                    onClick={() => {
                      setView(offer.targetView);
                      window.scrollTo({ top: 350, behavior: 'smooth' });
                    }}
                    className="mt-6 flex items-center space-x-1.5 text-[#2A73D1] font-bold text-sm tracking-wide group/btn hover:text-[#0A2F6C] transition-colors cursor-pointer"
                  >
                    <span>View Roofing Details</span>
                    <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual left column containing features */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#2A73D1] font-extrabold block mb-2">Our Standards</span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A2F6C] tracking-tight">
                  Why Texas Homeowners Trust JJ Roofing
                </h2>
                <div className="h-1 bg-[#2A73D1] w-12 mt-4 rounded-full animate-pulse" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {whyChooseUs.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={item.id} id={item.id} className="flex gap-4 items-start">
                      <div className="p-2.5 bg-slate-100 text-[#2A73D1] rounded-xl shrink-0">
                        <ItemIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm leading-snug">{item.title}</h4>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Graphic Right Column */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="absolute inset-0 bg-sky-550/10 rounded-3xl transform rotate-3 -z-10" />
              <div className="absolute inset-0 bg-[#0A2F6C]/5 rounded-3xl transform -rotate-3 -z-10" />
              <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600"
                  alt="Roofer Inspecting Roof Quality"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Floating summary bubble inside graphic column */}
                <div className="absolute bottom-6 left-6 right-6 bg-slate-950/90 text-white p-5 rounded-2xl backdrop-blur-sm shadow-xl flex items-center space-x-4 border border-white/10">
                  <div className="p-3 bg-sky-500 rounded-full text-white">
                    <Award className="h-6 w-6 stroke-[2]" />
                  </div>
                  <div>
                    <span className="block font-mono font-bold text-2xl text-sky-450 leading-none">15+ Years</span>
                    <span className="block text-xs text-slate-300 mt-1">Of Uncompromising Service Integrity</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Contact/Estimate Callout Banner */}
      <section id="estimate-banner" className="bg-[#0A2F6C] py-14 relative overflow-hidden">
        {/* Abstract design elements to avoid standard flat slop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Ready to Secure Your Roofline?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl font-light">
              We stand by our work. Request your 100% free physical inspection and itemized estimate. Absolutely no pressure, no obligation.
            </p>
          </div>
          <button
            id="banner-callout-btn"
            onClick={() => {
              setView('contact');
              window.scrollTo({ top: 400, behavior: 'smooth' });
            }}
            className="shrink-0 bg-sky-500 hover:bg-sky-450 hover:shadow-lg text-white font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-xl cursor-pointer transition-all hover:-translate-y-0.5"
          >
            Get Free Estimate
          </button>
        </div>
      </section>

    </div>
  );
}
