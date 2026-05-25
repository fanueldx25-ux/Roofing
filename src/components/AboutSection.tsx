import { useState } from 'react';
import { CERTIFICATIONS, SERVICE_AREAS } from '../data';
import { ShieldCheck, MapPin, Check, Heart, Trophy, Users } from 'lucide-react';

export default function AboutSection() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const stats = [
    { label: "Founded", val: "2011", icon: Heart },
    { label: "Roofs Sealed", val: "3,500+", icon: ShieldCheck },
    { label: "Community Rating", val: "4.9/5", icon: Trophy },
    { label: "Service Area coverage", val: "100%", icon: Users }
  ];

  return (
    <section id="about-details-section" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Row 1: Story of JJ Roofing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#2A73D1] font-extrabold">Established Family Builders</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A2F6C] tracking-tight mt-2">
                Our 15+ Year Roofing Legacy
              </h2>
              <div className="h-1.5 w-16 bg-[#2A73D1] mt-4 rounded-full" />
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-light">
              Founded in 2011 by Jeffrey and John Miller, <strong>JJ Roofing</strong> was started on a single baseline principle: provide local homeowners with the visual integrity and structural armor they deserve, without the standard high-pressure sales tactics. Over the decade, we’ve expanded from doing small patching jobs to fully integrated residential roof assemblies, siding replacements, and storm recovery.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed font-light">
              As a family-owned business, we understand that a roof is not just shingles and nails—it’s the absolute safety umbrella protecting your children, your heirlooms, and your comfort. That’s why we refuse to use cut-rate materials. Every member of our construction crew is fully background-checked, certified, and trained to respect your clean lawn as if it were their own eave.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, i) => {
                const StatIcon = stat.icon;
                return (
                  <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 text-center shadow-sm">
                    <StatIcon className="h-5 w-5 text-[#2A73D1] mx-auto mb-2" />
                    <span className="block font-display font-extrabold text-lg text-slate-900 leading-none">{stat.val}</span>
                    <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-1">{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Graphical Team Photo Column */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 bg-sky-500/10 rounded-3xl transform rotate-3 -z-10" />
              <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600"
                  alt="JJ Roofing Family Team Workday"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="block text-[10px] uppercase tracking-widest text-sky-450 font-extrabold">Miller Family Crew</span>
                    <span className="block font-display font-bold text-lg mt-0.5">Jeffrey & John Miller with Lead Site Supervisors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Row 2: Dynamic Service Area Toggables */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/65 shadow-md">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-display font-extrabold text-2xl text-[#0A2F6C] tracking-tight">
              Our Texas Service Range
            </h3>
            <p className="text-xs text-slate-500 mt-2">
              Click on your municipality to confirm local office coverage and same-day inspection dispatches.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5" id="service-areas-grid">
            {SERVICE_AREAS.map((city) => (
              <button
                key={city}
                id={`area-${city.toLowerCase().replace(' ', '-')}`}
                onClick={() => setSelectedCity(city)}
                className={`py-3 px-4 rounded-xl text-xs font-bold font-mono tracking-wide flex items-center justify-center space-x-2 border transition-all cursor-pointer ${
                  selectedCity === city
                    ? 'bg-sky-500 border-sky-550 text-white shadow-md'
                    : 'bg-slate-50 border-slate-100 hover:bg-[#E6F0FA]/50 hover:border-[#2A73D1]/20 text-slate-700'
                }`}
              >
                <MapPin className={`h-3.5 w-3.5 ${selectedCity === city ? 'text-white' : 'text-sky-550'}`} />
                <span>{city}</span>
              </button>
            ))}
          </div>

          {/* Feedback response popup banner on city click */}
          {selectedCity && (
            <div
              id="selected-city-alert"
              className="mt-6 p-4 bg-emerald-50 border border-emerald-250 text-emerald-800 rounded-2xl flex items-center justify-between text-xs font-semibold animate-fade-in"
            >
              <div className="flex items-center space-x-3">
                <div className="p-1.5 bg-emerald-500 text-white rounded-lg shrink-0">
                  <Check className="h-4 w-4" />
                </div>
                <span>
                  Confirmed Area! We provide 24/7 emergency dispatch, free diagnostics, and active siding repairs inside <strong>{selectedCity}</strong>.
                </span>
              </div>
              <button
                onClick={() => setSelectedCity(null)}
                className="text-emerald-550 hover:text-emerald-800 underline uppercase tracking-wider text-[10px] font-bold cursor-pointer shrink-0 ml-4"
              >
                Clear
              </button>
            </div>
          )}
        </div>

        {/* Row 3: Official Quality Certifications */}
        <div className="space-y-10">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#2A73D1] font-extrabold">Industry Endorsements</span>
            <h3 className="font-display font-extrabold text-2xl text-[#0A2F6C] tracking-tight mt-1">
              Top-Tier Manufacturer Certifications
            </h3>
            <p className="text-xs text-slate-500 mt-2">
              Only 2% of construction companies meet the strict quality standards to offer lifetime master warranties.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="certifications-grid">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="p-2.5 bg-sky-50 text-[#0A2F6C] rounded-xl w-fit">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h4 className="font-display font-extrabold text-base text-slate-800">{cert.name}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{cert.desc}</p>
                </div>
                <div className="mt-5 text-[10px] font-bold font-mono text-emerald-600 uppercase tracking-widest flex items-center space-x-1">
                  <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full inline-block animate-pulse" />
                  <span>Active & Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
