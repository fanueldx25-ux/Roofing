import { useState, useEffect, FormEvent } from 'react';
import { REVIEWS } from '../data';
import { Review } from '../types';
import { Star, MessageSquarePlus, BadgeCheck, X, CheckSquare, MessageCircle, AlertCircle } from 'lucide-react';

export default function ReviewsSection() {
  const [reviewsList, setReviewsList] = useState<Review[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [hasSuccess, setHasSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Form states
  const [formName, setFormName] = useState('');
  const [formLocation, setFormLocation] = useState('');
  const [formRating, setFormRating] = useState('5');
  const [formText, setFormText] = useState('');
  const [formSource, setFormSource] = useState<'Google' | 'Facebook' | 'BBB'>('Google');

  // Load reviews from local storage, merging with static reviews catalog
  useEffect(() => {
    const stored = localStorage.getItem('jj_custom_reviews');
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Review[];
        setReviewsList([...parsed, ...REVIEWS]);
        return;
      } catch (e) {
        console.error("Local reviews fail-parse:", e);
      }
    }
    setReviewsList(REVIEWS);
  }, []);

  const handleSubmitReview = (e: FormEvent) => {
    e.preventDefault();
    setHasError(false);

    if (!formName.trim() || !formLocation.trim() || !formText.trim()) {
      setHasError(true);
      return;
    }

    const newReview: Review = {
      id: `custom_${Date.now()}`,
      name: formName.trim(),
      location: formLocation.trim(),
      rating: parseFloat(formRating),
      text: formText.trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' }),
      source: formSource
    };

    const updatedReviews = [newReview, ...reviewsList];
    setReviewsList(updatedReviews);

    // Save custom array to local storage (only core custom items)
    const stored = localStorage.getItem('jj_custom_reviews');
    let customArr: Review[] = [];
    if (stored) {
      try {
        customArr = JSON.parse(stored) as Review[];
      } catch (e) {
        customArr = [];
      }
    }
    customArr.unshift(newReview);
    localStorage.setItem('jj_custom_reviews', JSON.stringify(customArr));

    // Reset inputs
    setFormName('');
    setFormLocation('');
    setFormRating('5');
    setFormText('');
    setFormSource('Google');
    
    setHasSuccess(true);
    setTimeout(() => {
      setHasSuccess(false);
      setIsFormOpen(false);
    }, 2500);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const floor = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= floor) {
        stars.push(<Star key={i} className="h-4.5 w-4.5 text-amber-500 fill-amber-500 shrink-0" />);
      } else if (i - 0.5 <= rating) {
        stars.push(
          <div key={i} className="relative inline-block shrink-0">
            <Star className="h-4.5 w-4.5 text-slate-200 fill-slate-200" />
            <div className="absolute top-0 left-0 overflow-hidden w-[50%]">
              <Star className="h-4.5 w-4.5 text-amber-500 fill-amber-500" />
            </div>
          </div>
        );
      } else {
        stars.push(<Star key={i} className="h-4.5 w-4.5 text-slate-200 fill-slate-200 shrink-0" />);
      }
    }
    return stars;
  };

  return (
    <section id="reviews-board-section" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Dynamic Trust Score Banner & Summary Rating Cards */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="space-y-4 max-w-xl text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest text-[#2A73D1] font-extrabold block">Homeowner Trust</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A2F6C] tracking-tight leading-none">
              Client Satisfaction Score
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed font-light">
              We collect reviews through physical checklists, BBB logs, Facebook surveys, and Google business reviews to maintain honest evaluation.
            </p>
          </div>

          {/* Core Numerical rating summary */}
          <div className="flex flex-col sm:flex-row items-center gap-8 shrink-0">
            <div className="text-center p-6 bg-[#E6F0FA] rounded-2xl border border-[#2A73D1]/15 shrink-0 min-w-[200px]">
              <span className="block font-display font-extrabold text-5xl text-[#0A2F6C] leading-none">4.9/5</span>
              <div className="flex justify-center my-3">
                {renderStars(4.9)}
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Based on 200+ Reviews</span>
            </div>

            {/* Badges Stack */}
            <div className="grid grid-cols-1 gap-3 shrink-0 text-xs">
              <div className="flex items-center space-x-3 bg-slate-50 border border-slate-100 py-2.5 px-4 rounded-xl font-bold text-slate-700">
                <BadgeCheck className="h-4 w-4 text-sky-400 shrink-0" />
                <span>Google Verified Business (4.9⭐)</span>
              </div>
              <div className="flex items-center space-x-3 bg-slate-50 border border-slate-100 py-2.5 px-4 rounded-xl font-bold text-slate-700">
                <BadgeCheck className="h-4 w-4 text-sky-400 shrink-0" />
                <span>Facebook Recommended Recipient</span>
              </div>
              <div className="flex items-center space-x-3 bg-slate-50 border border-slate-100 py-2.5 px-4 rounded-xl font-bold text-slate-700">
                <BadgeCheck className="h-4 w-4 text-sky-400 shrink-0" />
                <span>Better Business Bureau (A+ Certified)</span>
              </div>
            </div>
          </div>

        </div>

        {/* 6-8 Review List Catalogs & Header Action button */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="font-display font-extrabold text-2xl text-[#0A2F6C] tracking-tight">
                What Our Clients Say
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Showing the most recent verified physical and digital reviews of Austin metro roofs.
              </p>
            </div>
            
            <button
              id="write-review-btn"
              onClick={() => setIsFormOpen(true)}
              className="bg-[#0A2F6C] hover:bg-[#0A2F6C]/90 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl cursor-pointer transition-all flex items-center space-x-2 shrink-0 shadow-md"
            >
              <MessageSquarePlus className="h-4 w-4" />
              <span>Write a Review</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="reviews-card-grid">
            {reviewsList.map((review) => (
              <div
                key={review.id}
                id={`review-card-${review.id}`}
                className="bg-white rounded-2xl p-6.5 shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow relative"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-slate-800 text-base">{review.name}</h4>
                      <span className="text-[10px] text-slate-400 font-medium font-mono block mt-0.5">{review.location}</span>
                    </div>
                    {/* Source tag badge */}
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#2A73D1] bg-sky-50 py-1 px-2.5 rounded-md">
                      {review.source}
                    </span>
                  </div>

                  {/* Stars block */}
                  <div className="flex space-x-1">
                    {renderStars(review.rating)}
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed font-light italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-50 mt-5 flex justify-between items-center text-[10px] text-slate-400 font-mono font-medium">
                  <span>Verified Client</span>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Write a Review Modal Window */}
        {isFormOpen && (
          <div
            id="review-form-overlay"
            className="fixed inset-0 bg-slate-950/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsFormOpen(false)}
          >
            <div
              id="review-form-card"
              className="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden border border-slate-100 max-h-[92vh] flex flex-col animate-scale-up"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between shrink-0">
                <div className="flex items-center space-x-2.5 text-[#0A2F6C]">
                  <MessageCircle className="h-5 w-5" />
                  <h3 className="font-display font-extrabold text-xl">Submit Your Review</h3>
                </div>
                <button
                  id="close-review-form-btn"
                  onClick={() => setIsFormOpen(false)}
                  className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 rounded-full cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Form elements with responsive inputs */}
              <form onSubmit={handleSubmitReview} className="p-6 overflow-y-auto space-y-4.5">
                
                {hasError && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl flex items-center gap-2.5">
                    <AlertCircle className="h-4 w-4 text-rose-600 shrink-0" />
                    <span>Please enter all text inputs correctly (Name, Location, Review).</span>
                  </div>
                )}

                {hasSuccess && (
                  <div className="p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2.5">
                    <CheckSquare className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Review recorded successfully! Thank you for sharing your trust.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-550 font-bold mb-1.5">Full Name</label>
                    <input
                      id="rev-input-name"
                      type="text"
                      className="w-full text-xs py-2.5 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-sky-550 focus:bg-white outline-none"
                      placeholder="e.g. Robert Smith"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-550 font-bold mb-1.5">Municipality Location</label>
                    <input
                      id="rev-input-location"
                      type="text"
                      className="w-full text-xs py-2.5 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-sky-550 focus:bg-white outline-none"
                      placeholder="e.g. Cedar Park, TX"
                      value={formLocation}
                      onChange={(e) => setFormLocation(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-550 font-bold mb-1.5">Star Rating</label>
                    <select
                      id="rev-input-rating"
                      className="w-full text-xs py-2.5 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-sky-550 outline-none"
                      value={formRating}
                      onChange={(e) => setFormRating(e.target.value)}
                    >
                      <option value="5">5 Stars (Excellent Service)</option>
                      <option value="4.5">4.5 Stars (Very Good)</option>
                      <option value="4">4 Stars (Good Performance)</option>
                      <option value="3.5">3.5 Stars (Satisfactory)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-550 font-bold mb-1.5">Review Platform Target</label>
                    <select
                      id="rev-input-source"
                      className="w-full text-xs py-2.5 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-sky-550 outline-none"
                      value={formSource}
                      onChange={(e) => setFormSource(e.target.value as any)}
                    >
                      <option value="Google">Google Business Listing</option>
                      <option value="Facebook">Facebook Reviews Catalog</option>
                      <option value="BBB">Better Business Bureau Log</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-550 font-bold mb-1.5">Your Testimonial Review</label>
                  <textarea
                    id="rev-input-text"
                    rows={4}
                    className="w-full text-xs py-2.5 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-sky-550 focus:bg-white outline-none resize-none leading-relaxed"
                    placeholder="Describe your roof installation quality, shingle matches, scheduling speed, or interaction with John and the Miller crew..."
                    value={formText}
                    onChange={(e) => setFormText(e.target.value)}
                  />
                </div>

                <div className="pt-3 flex gap-3">
                  <button
                    id="submit-review-form-btn"
                    type="submit"
                    className="w-full bg-[#0A2F6C] hover:bg-[#0A2F6C]/90 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl cursor-pointer"
                  >
                    Post Testimonial
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs uppercase tracking-wider rounded-xl cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
