import { useState, useEffect, useRef } from 'react';
import { Phone, ArrowRight, ShieldCheck, Play, Volume2, VolumeX } from 'lucide-react';

interface HeroProps {
  currentView: string;
  setView: (view: string) => void;
}

export default function Hero({ currentView, setView }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Monitor scroll height smoothly
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    // Use requestAnimationFrame for high performance 60fps adjustments
    let tId: number;
    const scrollThrottler = () => {
      tId = requestAnimationFrame(handleScroll);
    };
    window.addEventListener('scroll', scrollThrottler);
    return () => {
      window.removeEventListener('scroll', scrollThrottler);
      cancelAnimationFrame(tId);
    };
  }, []);

  // Set page headers & tagline data based on active view
  const heroContent = {
    home: {
      title: 'JJ Roofing',
      tagline: 'Protecting Your Home, One Roof at a Time.',
      buttonText: 'Free Estimate',
      bgImg: 'https://images.unsplash.com/photo-1632833238851-47a1a9a01587?auto=format&fit=crop&q=80&w=1600'
    },
    services: {
      title: 'Our Premium Services',
      tagline: 'Expert roofing, siding, repairs, and gutters designed with local family-owned pride.',
      buttonText: 'Get Free Estimate',
      bgImg: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1600'
    },
    gallery: {
      title: 'Before & After Portfolio',
      tagline: 'Witness real structural transformations from damaged systems to weather-tight perfection.',
      buttonText: 'Schedule Inspection',
      bgImg: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600'
    },
    about: {
      title: 'Our Family-Owned Story',
      tagline: 'Serving our community for over 15 years with uncompromising integrity and quality certifications.',
      buttonText: 'Meet The Team',
      bgImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1600'
    },
    reviews: {
      title: 'Real Homeowner Reviews',
      tagline: 'See why local families rated us a 4.9/5 star contractor across 200+ online submissions.',
      buttonText: 'Write a Review Now',
      bgImg: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1600'
    },
    faq: {
      title: 'Frequently Asked Questions',
      tagline: 'Clear, honest answers about warranties, replacements, insurance billing, and siding diagnostics.',
      buttonText: 'Have a Project?',
      bgImg: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1600'
    },
    contact: {
      title: 'Request a Free Estimate',
      tagline: 'Ready to fortify your roofline? Fill out the details below for a professional, precise physical evaluation.',
      buttonText: 'Call (555) 123-ROOF',
      bgImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600'
    }
  };

  const activeContent = heroContent[currentView as keyof typeof heroContent] || heroContent.home;

  const handleHeroBtnClick = () => {
    if (currentView === 'contact') {
      window.location.href = 'tel:5551237663';
    } else {
      setView('contact');
      window.scrollTo({ top: 600, behavior: 'smooth' });
    }
  };

  // Parallax and fade formulas
  const isHome = currentView === 'home';
  const opacity = isHome ? Math.max(0, 1 - scrollY / 650) : 1;
  const videoTranslateY = isHome ? scrollY * 0.45 : 0;
  const bgScale = isHome ? 1 + scrollY * 0.0003 : 1;
  const contentTranslateY = isHome ? scrollY * 0.22 : 0;

  return (
    <div
      id="hero-wrapper"
      className={`relative overflow-hidden w-full ${
        isHome ? 'h-screen' : 'h-[60vh] min-h-[400px]'
      } bg-slate-950 flex items-center justify-center`}
    >
      {/* Home Video Background Section */}
      {isHome ? (
        <div
          id="home-video-container"
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          style={{
            transform: `translate3d(0, ${videoTranslateY}px, 0) scale(${bgScale})`,
            opacity: opacity,
            filter: 'brightness(0.5) contrast(1.15)',
          }}
        >
          {/* Loop stocks video with muted fallback */}
          <video
            ref={videoRef}
            id="hero-stock-video"
            autoPlay
            loop
            muted={isVideoMuted}
            playsInline
            className="w-full h-full object-cover"
            poster={activeContent.bgImg}
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-worker-installing-roof-shingles-32874-large.mp4"
              type="video/mp4"
            />
            {/* Fail-safe absolute image fallback inside video container */}
            <img
              src={activeContent.bgImg}
              alt="JJ Roofing Installation Fallback"
              className="w-full h-full object-cover"
            />
          </video>
        </div>
      ) : (
        /* Standard Static Full-Width Page Hero Background */
        <div
          id="static-hero-bg"
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${activeContent.bgImg})`,
            transform: `translate3d(0, ${scrollY * 0.25}px, 0)`,
          }}
        />
      )}

      {/* Dim Overlay - Makes Typography Super High Contrast */}
      <div
        id="hero-dark-overlay"
        className="absolute inset-0 bg-slate-950/65 z-10 pointer-events-none"
      />

      {/* Hero Content Panel */}
      <div
        id="hero-content-panel"
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full pt-16"
        style={isHome ? { transform: `translate3d(0, ${contentTranslateY}px, 0)` } : {}}
      >
        {isHome && (
          <div className="flex items-center space-x-2 bg-sky-500/20 border border-sky-400/30 text-sky-300 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6 animate-fade-in-down">
            <ShieldCheck className="h-4 w-4 text-sky-450 pr-0.5" />
            <span>Certified & Family Owned Texas Roofer</span>
          </div>
        )}

        <h1
          id="hero-heading"
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none drop-shadow-lg max-w-4xl"
          style={{ textShadow: '2px 4px 10px rgba(0, 0, 0, 0.65)' }}
        >
          {activeContent.title}
        </h1>

        <p
          id="hero-tagline"
          className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-205 max-w-2xl font-normal leading-relaxed text-center text-slate-100"
          style={{ textShadow: '1px 2px 4px rgba(0, 0, 0, 0.7)' }}
        >
          {activeContent.tagline}
        </p>

        {/* Home Specific Actions Vs Sub-page CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {isHome ? (
            <>
              <button
                id="home-estimate-cta"
                onClick={() => handleNavClick('contact')}
                className="w-full sm:w-auto px-8 py-4 bg-sky-500 hover:bg-sky-450 text-white font-extrabold text-base tracking-wider uppercase rounded-xl shadow-xl hover:shadow-sky-500/10 hover:shadow-2xl transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 focus:ring-4 focus:ring-sky-500/40"
              >
                <span>Free Estimate</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                id="home-phone-cta"
                href="tel:5551237663"
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-850/90 text-white font-mono font-bold text-base tracking-wide rounded-xl border border-slate-700/60 shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 hover:border-slate-550"
              >
                <Phone className="h-4 w-4 text-sky-400" />
                <span>Call (555) 123-ROOF</span>
              </a>
            </>
          ) : (
            <button
              id="subpage-universal-cta"
              onClick={handleHeroBtnClick}
              className="w-full sm:w-auto px-8 py-4 bg-sky-500 hover:bg-sky-450 text-white font-extrabold text-base tracking-wider uppercase rounded-xl shadow-xl hover:shadow-sky-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{activeContent.buttonText}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Video mute/unmute visual toggler on home page */}
        {isHome && (
          <button
            id="video-mute-toggle"
            onClick={() => {
              setIsVideoMuted(!isVideoMuted);
              if (videoRef.current) {
                videoRef.current.muted = !isVideoMuted;
              }
            }}
            className="absolute bottom-8 right-8 z-30 p-2.5 bg-slate-900/40 hover:bg-slate-900/80 text-white/70 hover:text-white rounded-full border border-white/10 transition-colors backdrop-blur-sm cursor-pointer"
            title={isVideoMuted ? "Unmute Background Video" : "Mute Background Video"}
          >
            {isVideoMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
        )}
      </div>

      {/* Subtle Angle Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-10 w-full bg-slate-50 z-20 pointer-events-none clip-angle" />
    </div>
  );

  function handleNavClick(viewId: string) {
    setView(viewId);
    window.scrollTo({ top: 700, behavior: 'smooth' });
  }
}
