import { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { Eye, MapPin, X, ArrowLeftRight, CheckCircle2 } from 'lucide-react';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [lightboxMode, setLightboxMode] = useState<'after' | 'before'>('after');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'roofing', label: 'Roofing' },
    { id: 'siding', label: 'Siding' },
    { id: 'gutters', label: 'Gutters & Drainage' },
    { id: 'emergency', label: 'Emergency Recovery' }
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery-portfolio-section" className="py-20 bg-slate-55 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#2A73D1] font-extrabold">Our Workmanship</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A2F6C] tracking-tight mt-2">
            Before & After Portfolio
          </h2>
          <div className="h-1.5 w-16 bg-[#2A73D1] mx-auto mt-4 rounded-full" />
          <p className="text-slate-605 mt-4 text-sm leading-relaxed font-normal">
            Real homeowner transformations in the local community. Hover over cards to see physical comparisons, or click for the full interactive lightbox experience.
          </p>
        </div>

        {/* Categorized Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12" id="gallery-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`tab-filter-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0A2F6C] text-white shadow-md'
                  : 'bg-slate-105 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry or Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="gallery-items-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`portfolio-item-${item.id}`}
              onClick={() => {
                setSelectedItem(item);
                setLightboxMode('after');
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group cursor-pointer"
            >
              {/* Dynamic Image Container (Combines hover trick before/after) */}
              <div className="h-64 overflow-hidden relative">
                {/* After Image */}
                <img
                  src={item.afterUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />

                {/* Hover overlay that lets user see what happened BEFORE */}
                <div className="absolute inset-0 bg-[#0A2F6C]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 z-20">
                  <span className="text-xs uppercase tracking-widest text-sky-450 font-extrabold mb-1">Click to Compare</span>
                  <p className="text-white font-display font-bold text-lg mb-4 max-w-xs">{item.title}</p>
                  <div className="flex items-center space-x-2 text-slate-300 text-xs">
                    <MapPin className="h-4 w-4 text-[#2A73D1]" />
                    <span>{item.location}</span>
                  </div>
                  <div className="mt-5 p-2.5 bg-sky-500 text-white rounded-full">
                    <Eye className="h-5 w-5" />
                  </div>
                </div>

                {/* Clean Corner Tags */}
                <span className="absolute top-4 left-4 z-10 bg-[#0A2F6C] text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-widest">
                  {item.category}
                </span>

                {/* "Interactive Compare" Floating Badge */}
                <span className="absolute bottom-4 right-4 z-10 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center space-x-1">
                  <ArrowLeftRight className="h-3 w-3 text-sky-400" />
                  <span>Before / After</span>
                </span>
              </div>

              {/* Core metadata caption */}
              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <div className="flex items-center space-x-1 font-medium">
                    <MapPin className="h-3.5 w-3.5 text-sky-550" />
                    <span>{item.location}</span>
                  </div>
                  <span className="font-mono uppercase text-[9px] font-bold tracking-wider">Completed</span>
                </div>
                <h3 className="font-display font-bold text-lg text-slate-850 leading-snug group-hover:text-[#2A73D1] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Lightbox Compare Panel */}
        {selectedItem && (
          <div
            id="gallery-lightbox-overlay"
            className="fixed inset-0 bg-slate-950/95 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedItem(null)}
          >
            <div
              id="gallery-lightbox-card"
              className="max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col scale-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lightbox Header with close buttons */}
              <div className="p-6 border-b border-slate-800 flex items-center justify-between text-white shrink-0">
                <div>
                  <span className="text-xs font-bold font-mono uppercase tracking-widest text-[#2A73D1]">Project Showcase</span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl mt-0.5">{selectedItem.title}</h3>
                </div>
                <button
                  id="close-lightbox-btn"
                  onClick={() => setSelectedItem(null)}
                  className="p-2.5 bg-slate-850 hover:bg-slate-800 text-slate-400 hover:text-white rounded-full transition-colors cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Central Dynamic comparative media block */}
              <div className="p-6 grow flex flex-col md:flex-row gap-6 items-center justify-center min-h-[320px]">
                
                {/* Comparative Double columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
                  
                  {/* Before Segment */}
                  <div className="relative rounded-2xl overflow-hidden border border-slate-800 h-64 md:h-[350px]">
                    <div className="absolute top-4 left-4 z-10 bg-rose-600/90 text-white font-extrabold text-xs tracking-widest uppercase px-3 py-1 rounded-md">
                      BEFORE
                    </div>
                    <img
                      src={selectedItem.beforeUrl}
                      alt="Damaged condition before repairs"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* After Segment */}
                  <div className="relative rounded-2xl overflow-hidden border border-emerald-800 h-64 md:h-[350px]">
                    <div className="absolute top-4 left-4 z-10 bg-emerald-600/90 text-white font-extrabold text-xs tracking-widest uppercase px-3 py-1 rounded-md">
                      AFTER
                    </div>
                    <img
                      src={selectedItem.afterUrl}
                      alt="Completed pristine restoration"
                      className="w-full h-full object-cover animate-fade-in"
                    />
                  </div>

                </div>

              </div>

              {/* Comparative detail metadata writeup */}
              <div className="p-6 bg-slate-950 border-t border-slate-900 text-slate-300 shrink-0">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="space-y-1 max-w-xl">
                    <p className="text-slate-200 text-sm leading-relaxed">{selectedItem.description}</p>
                    <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-medium">
                      <MapPin className="h-4 w-4 text-[#2A73D1]" />
                      <span>{selectedItem.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2.5 bg-sky-500/10 border border-sky-400/20 py-2 px-4 rounded-xl text-sky-400 text-xs font-bold leading-none shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Verified Project Done</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
