import { useState } from 'react';
import { FAQS } from '../data';
import { FAQItem } from '../types';
import { ChevronDown, ChevronUp, Search, MessageSquare, PhoneCall } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'all', label: 'All Questions' },
    { id: 'roof', label: 'Roofing Support' },
    { id: 'siding', label: 'Siding Details' },
    { id: 'emergency', label: 'Emergency Redlines' },
    { id: 'general', label: 'General & Billing' }
  ];

  // Search filter combined with category filter
  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = activeTab === 'all' || faq.category === activeTab;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-accordions-section" className="py-20 bg-slate-10 bg-[#E6F0FA]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#2A73D1] font-extrabold block">FAQ Center</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A2F6C] tracking-tight">
            Common Roofing Concerns Answered
          </h2>
          <div className="h-1.5 w-16 bg-[#2A73D1] mx-auto mt-4 rounded-full" />
        </div>

        {/* Dynamic Search & Categorized Filter Header bar */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute top-3.5 left-4.5 h-4.5 w-4.5 text-slate-400" />
            <input
              id="faq-search-input"
              type="text"
              placeholder="Search your question (e.g., warranty, insurance, siding, copper)..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-205 shadow-sm rounded-2xl outline-none text-sm focus:border-sky-550 focus:ring-4 focus:ring-sky-500/5 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center" id="faq-category-filters">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                id={`faq-filter-${tab.id}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setOpenIndex(null); // Close accordion on tab switch to avoid indexing mismatches
                }}
                className={`py-2 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#2A73D1] text-white shadow-sm shadow-sky-500/10'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Component List */}
        <div className="space-y-3.5" id="faq-accordion-group">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  id={`faq-item-${index}`}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    id={`faq-trigger-${index}`}
                    onClick={() => toggleAccordion(index)}
                    className="w-full py-5 px-6 sm:px-8 text-left flex items-start justify-between font-display font-bold text-slate-800 hover:text-[#0A2F6C] transition-colors gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                    <span className="p-1.5 bg-slate-50 rounded-lg text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </span>
                  </button>

                  {/* Collapsible Content */}
                  <div
                    id={`faq-content-${index}`}
                    className={`transition-all duration-300 ease-in-out-cubic ${
                      isOpen ? 'max-h-72 opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <div className="p-6 sm:p-8 bg-slate-50/50 text-xs sm:text-sm text-slate-605 leading-relaxed font-light">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-12 text-center bg-white border border-slate-200 rounded-3xl space-y-3">
              <MessageSquare className="h-8 w-8 text-slate-300 mx-auto" />
              <p className="text-slate-500 text-sm font-semibold">No questions matched your exact keywords.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveTab('all');
                }}
                className="text-sky-550 underline font-bold text-xs"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

        {/* Callout Support banner in bottom eave of FAQs */}
        <div className="p-8 bg-[#0A2F6C] text-white rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1 max-w-lg text-center sm:text-left">
            <h4 className="font-display font-bold text-lg">Still Need Help with Your Project?</h4>
            <p className="text-xs text-slate-300 leading-normal">
              Our estimators are online. We can discuss materials, gutters, siding, and emergency tarping right now.
            </p>
          </div>
          <a
            href="tel:5551237663"
            className="px-6 py-3.5 bg-sky-500 hover:bg-sky-450 rounded-xl font-mono text-xs font-extrabold tracking-wider uppercase text-center flex items-center justify-center space-x-2 shrink-0 shadow-md transition-all active:scale-98"
          >
            <PhoneCall className="h-4 w-4" />
            <span>(555) 123-ROOF</span>
          </a>
        </div>

      </div>
    </section>
  );
}
