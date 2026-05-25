import { useState, useEffect } from 'react';
import { Menu, X, Phone, Shield } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  setView: (view: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'about', label: 'About' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' }
];

export default function Header({ currentView, setView }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (viewId: string) => {
    setView(viewId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800 py-3'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="header-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 focus:outline-none cursor-pointer group"
          >
            <div className="bg-sky-500 text-white p-2 rounded-lg group-hover:bg-sky-400 transition-colors">
              <Shield className="h-6 w-6 stroke-[2.5]" />
            </div>
            <div className="text-left">
              <span className="block font-display text-2xl font-extrabold text-white tracking-widest whitespace-nowrap">
                JJ <span className="text-sky-400">ROOFING</span>
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-slate-400 font-bold -mt-1 hidden sm:block">
                Family Owned & Trusted
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-md text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                  currentView === item.id
                    ? 'text-sky-400 bg-sky-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Call / Action CTA Component */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              id="header-phone-link"
              href="tel:5551237663"
              className="flex items-center space-x-2 text-slate-350 hover:text-white font-mono text-sm font-medium transition-colors"
            >
              <div className="p-1.5 bg-slate-800 rounded-full text-sky-400">
                <Phone className="h-4 w-4" />
              </div>
              <span className="font-semibold text-slate-250">(555) 123-ROOF</span>
            </a>
            <button
              id="header-estimate-btn"
              onClick={() => handleNavClick('contact')}
              className="bg-sky-500 hover:bg-sky-450 text-white px-5 py-2.5 rounded-lg text-sm font-extrabold tracking-wider uppercase transition-all shadow-md active:scale-98 cursor-pointer focus:ring-2 focus:ring-sky-500 focus:outline-none"
            >
              Free Estimate
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div id="hamburger-container" className="lg:hidden flex items-center">
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-nav-panel" className="lg:hidden bg-slate-950 border-b border-slate-800 shadow-2xl animate-fade-in">
          <div className="px-4 pt-3 pb-6 space-y-1.5 sm:px-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-bold tracking-wide transition-all ${
                  currentView === item.id
                    ? 'bg-sky-550/20 text-sky-400 border-l-4 border-sky-400'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4 border-t border-slate-800 mt-4 flex flex-col sm:flex-row gap-3">
              <a
                id="mobile-phone-link"
                href="tel:5551237663"
                className="flex items-center justify-center space-x-2 py-3 bg-slate-900 hover:bg-slate-850 rounded-lg text-white font-mono font-bold tracking-wide border border-slate-800"
              >
                <Phone className="h-4 w-4 text-sky-400" />
                <span>(555) 123-ROOF</span>
              </a>
              <button
                id="mobile-estimate-btn"
                onClick={() => handleNavClick('contact')}
                className="w-full bg-sky-550 hover:bg-sky-500 text-white font-bold tracking-wider uppercase text-center py-3 rounded-lg shadow-md"
              >
                Get Free Estimate
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
