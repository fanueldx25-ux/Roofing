import { Shield, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  setView: (view: string) => void;
}

export default function Footer({ setView }: FooterProps) {
  const handleNavClick = (viewId: string) => {
    setView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Structured Data (JSON-LD) for LocalBusiness SEO
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "JJ Roofing & Construction",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
    "@id": "https://jjroofing.example.com/#contractor",
    "url": "https://jjroofing.example.com",
    "telephone": "+15551237663",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1203 Roofing Way, Suite A",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "postalCode": "78701",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.2672,
      "longitude": -97.7431
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "07:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "00:00",
        "closes": "23:59",
        "description": "Emergency service calls only"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/jjroofing.example",
      "https://www.instagram.com/jjroofing.example",
      "https://www.linkedin.com/company/jjroofing"
    ],
    "areaServed": ["Austin", "Round Rock", "Cedar Park", "Pflugerville", "Georgetown", "Lakeway", "Westlake Hills"]
  };

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-350 pt-16 pb-8 border-t border-slate-900 relative">
      {/* Insert JSON-LD Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Brief */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-sky-500 text-white p-2 rounded-lg">
                <Shield className="h-5 w-5" />
              </div>
              <span className="font-display text-xl font-extrabold text-white tracking-widest uppercase">
                JJ <span className="text-sky-400">ROOFING</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Family-owned and trusted for over 15 years, JJ Roofing is committed to defending your home with elite shingle, metal, and flat roofing solutions in the Texas area.
            </p>
            
            {/* Social media connections */}
            <div className="flex space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                id="social-fb"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 hover:bg-sky-500 hover:text-white text-slate-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                id="social-ig"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 hover:bg-sky-500 hover:text-white text-slate-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                id="social-li"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 hover:bg-sky-500 hover:text-white text-slate-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://houzz.com"
                target="_blank"
                rel="noreferrer"
                id="social-hz"
                aria-label="Houzz"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 hover:bg-sky-500 hover:text-white text-slate-400 font-extrabold text-base tracking-tighter transition-colors"
              >
                H
              </a>
            </div>
          </div>

          {/* Quick Nav links */}
          <div>
            <h3 className="text-white font-bold text-base tracking-wider uppercase mb-5 border-l-4 border-sky-400 pl-3">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  id="foot-link-home"
                  onClick={() => handleNavClick('home')}
                  className="hover:text-sky-400 transition-colors cursor-pointer text-slate-400"
                >
                  Home & Badges
                </button>
              </li>
              <li>
                <button
                  id="foot-link-services"
                  onClick={() => handleNavClick('services')}
                  className="hover:text-sky-400 transition-colors cursor-pointer text-slate-400"
                >
                  Roofing & Home Services
                </button>
              </li>
              <li>
                <button
                  id="foot-link-gallery"
                  onClick={() => handleNavClick('gallery')}
                  className="hover:text-sky-400 transition-colors cursor-pointer text-slate-400"
                >
                  Before & After Portfolio
                </button>
              </li>
              <li>
                <button
                  id="foot-link-about"
                  onClick={() => handleNavClick('about')}
                  className="hover:text-sky-400 transition-colors cursor-pointer text-slate-400"
                >
                  Family History & Certification
                </button>
              </li>
              <li>
                <button
                  id="foot-link-reviews"
                  onClick={() => handleNavClick('reviews')}
                  className="hover:text-sky-400 transition-colors cursor-pointer text-slate-400"
                >
                  Homeowner Testimonials
                </button>
              </li>
              <li>
                <button
                  id="foot-link-faq"
                  onClick={() => handleNavClick('faq')}
                  className="hover:text-sky-400 transition-colors cursor-pointer text-slate-400"
                >
                  Common Questions FAQ
                </button>
              </li>
              <li>
                <button
                  id="foot-link-contact"
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-sky-400 transition-colors cursor-pointer text-slate-400"
                >
                  Get Your Free Estimate
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold text-base tracking-wider uppercase mb-5 border-l-4 border-sky-400 pl-3">
              Office Details
            </h3>
            <ul className="space-y-3.5 text-sm font-light">
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  1203 Roofing Way, Suite A<br />
                  Austin, TX 78701
                </span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone className="h-4 w-4 text-sky-400 shrink-0" />
                <a href="tel:5551237663" className="hover:text-white transition-colors font-mono">
                  (555) 123-ROOF
                </a>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail className="h-4 w-4 text-sky-400 shrink-0" />
                <a href="mailto:office@jjroofing.example.com" className="hover:text-white transition-colors">
                  office@jjroofing.example.com
                </a>
              </li>
            </ul>
          </div>

          {/* Work Hours and emergency info */}
          <div>
            <h3 className="text-white font-bold text-base tracking-wider uppercase mb-5 border-l-4 border-sky-400 pl-3">
              Business Hours
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-slate-900 pb-1.5 text-slate-400">
                <span>Mon - Fri:</span>
                <span className="font-mono text-slate-300">7:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-slate-900 pb-1.5 text-slate-400">
                <span>Saturday:</span>
                <span className="font-mono text-slate-300">8:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between text-slate-300 font-bold bg-sky-500/15 py-1.5 px-3.5 rounded-lg border border-sky-500/10 items-center">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-sky-400" />
                  <span className="text-xs uppercase tracking-wider text-sky-400">24/7 Red Alert</span>
                </div>
                <span>Emergency Service</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} JJ Roofing & Construction. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <span className="text-slate-800">|</span>
            <a href="#terms" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
