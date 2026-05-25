import { useState } from 'react';
import { SERVICES } from '../data';
import { Service } from '../types';
import * as Icons from 'lucide-react';
import { X, CheckCircle, ShieldCheck } from 'lucide-react';

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Dynamic Icon rendering helper safeguarding key matches
  const renderIcon = (iconName: string, className = "h-6 w-6") => {
    switch (iconName) {
      case 'Hammer': return <Icons.Hammer className={className} />;
      case 'Wrench': return <Icons.Wrench className={className} />;
      case 'Home': return <Icons.Home className={className} />;
      case 'Droplet': return <Icons.Droplet className={className} />;
      case 'Layers': return <Icons.Layers className={className} />;
      case 'AlertTriangle': return <Icons.AlertTriangle className={className} />;
      default: return <Icons.Shield className={className} />;
    }
  };

  return (
    <section id="services-grid-section" className="py-20 bg-[#E6F0FA]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Visual Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#2A73D1] font-extrabold">Professional Deliverables</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A2F6C] tracking-tight mt-2">
            Complete Structural Roofing & Cladding Services
          </h2>
          <div className="h-1.5 w-16 bg-[#2A73D1] mx-auto mt-4 rounded-full" />
          <p className="text-slate-650 mt-4 text-sm leading-relaxed font-light">
            We operate fully equipped crews capable of delivering high-quality residential, industrial, and repair work. Click any module below to investigate certifications and structures.
          </p>
        </div>

        {/* Services Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-white to-slate-50 border border-slate-100 transition-all duration-350 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                {/* Accent Icon Tag */}
                <div className="p-3.5 bg-sky-50 text-[#0A2F6C] group-hover:bg-[#0A2F6C] group-hover:text-white rounded-2xl w-fit transition-all duration-300 shadow-sm shadow-sky-550/10">
                  {renderIcon(service.iconName, "h-6 w-6 stroke-[2]")}
                </div>
                
                <h3 className="font-display font-extrabold text-xl text-slate-800 tracking-tight leading-snug">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed min-h-[66px]">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  id={`learn-more-${service.id}`}
                  onClick={() => setSelectedService(service)}
                  className="px-4.5 py-2 px-6 bg-slate-100 hover:bg-[#0A2F6C] hover:text-white text-slate-700 font-bold text-xs tracking-wider uppercase rounded-xl transition-all cursor-pointer"
                >
                  Learn More
                </button>
                <span className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Guaranteed Work
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Detail Modal Popup Component */}
        {selectedService && (
          <div
            id="service-modal-overlay"
            className="fixed inset-0 bg-slate-950/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedService(null)}
          >
            <div
              id="service-modal-content"
              className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden relative border border-slate-100 max-h-[90vh] flex flex-col animate-scale-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Visual Image */}
              <div className="h-48 relative shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/45 to-transparent z-10" />
                <img
                  src={selectedService.imageUrl}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Cross Toggle */}
                <button
                  id="close-modal-btn"
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 z-30 p-2 bg-slate-900/60 hover:bg-slate-900 text-white rounded-full transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Overlaid Header text */}
                <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center space-x-3.5">
                  <div className="p-2.5 bg-sky-500/90 text-white rounded-xl">
                    {renderIcon(selectedService.iconName, "h-5 w-5 stroke-[2.5]")}
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-2xl text-white tracking-tight leading-none drop-shadow-md">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Scrollable details container */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#2A73D1] font-extrabold mb-1">Service Description</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {selectedService.fullDesc}
                  </p>
                </div>

                {/* Specifications Checklist */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#0A2F6C] font-extrabold mb-3">
                    What This Service Includes
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2.5 text-slate-500 text-xs">
                        <CheckCircle className="h-4 w-4 text-sky-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Safety Guarantee Bar */}
                <div className="p-4 bg-[#E6F0FA] rounded-2xl flex items-center space-x-3 border border-[#2A73D1]/15">
                  <ShieldCheck className="h-5 w-5 text-[#0A2F6C] shrink-0" />
                  <span className="text-xs text-slate-700 font-medium">
                    This service includes our transferrable 10-Year Workmanship Warranty and a strict fully-insured site safety wrap.
                  </span>
                </div>
              </div>

              {/* Footer Panel with action button */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 shrink-0">
                <span className="text-xs text-slate-400 font-medium">
                  Have questions about pricing? Request your physical estimate.
                </span>
                <button
                  id="modal-estimate-cta"
                  onClick={() => {
                    setSelectedService(null);
                    // Switch view using parent trigger if integrated.
                    const contactTrigger = document.getElementById('nav-contact');
                    if (contactTrigger) contactTrigger.click();
                  }}
                  className="bg-sky-500 hover:bg-sky-450 text-white font-extrabold text-xs tracking-wider uppercase px-5 py-2.5 rounded-xl transition-all cursor-pointer w-full sm:w-auto text-center"
                >
                  Get Free Estimate
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
