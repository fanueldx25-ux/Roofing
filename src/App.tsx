/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Core sections
import HomeSection from './components/HomeSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import ReviewsSection from './components/ReviewsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';

import { Phone } from 'lucide-react';

export default function App() {
  const [view, setView] = useState<string>('home');

  // Render the matching tab content smoothly below the fold
  const renderActiveSection = () => {
    switch (view) {
      case 'home':
        return <HomeSection setView={setView} />;
      case 'services':
        return <ServicesSection />;
      case 'gallery':
        return <GallerySection />;
      case 'about':
        return <AboutSection />;
      case 'reviews':
        return <ReviewsSection />;
      case 'faq':
        return <FaqSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection setView={setView} />;
    }
  };

  return (
    <div id="app-root-container" className="min-h-screen flex flex-col justify-between bg-slate-50 antialiased selection:bg-sky-500 selection:text-white">
      
      {/* Sticky Top Navigation */}
      <Header currentView={view} setView={setView} />

      {/* Dynamic Covered Hero Layer */}
      <Hero currentView={view} setView={setView} />

      {/* Active Section Content Container */}
      <main id="main-content-flow" className="grow">
        {renderActiveSection()}
      </main>

      {/* Persistent Floating Emergency Hotline CTA */}
      <a
        href="tel:5551237663"
        id="persistent-emergency-fab"
        className="fixed bottom-6 right-6 z-40 bg-rose-600 hover:bg-rose-500 hover:shadow-xl hover:shadow-rose-600/20 text-white font-extrabold flex items-center space-x-2.5 py-3.5 px-6 rounded-full shadow-2xl transition-all scale-100 hover:scale-104 active:scale-96"
        title="Emergency 24/7 Red Hotline"
      >
        <div className="relative flex h-3.5 w-3.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white flex items-center justify-center">
            <Phone className="h-2 w-2 text-rose-600" />
          </span>
        </div>
        <span className="text-xs uppercase tracking-widest font-display">Emergency? 24/7</span>
      </a>

      {/* Complete Footer & Schemas */}
      <Footer setView={setView} />

    </div>
  );
}

