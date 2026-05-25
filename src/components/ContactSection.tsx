import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, MailCheck, AlertCircle, Compass } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('roof-installation');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitInfo, setSubmitInfo] = useState<{ success: boolean; msg: string } | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitInfo(null);

    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setSubmitInfo({
        success: false,
        msg: 'Please input all requested data fields (Name, Email, Phone, Message).'
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API pipeline transit safely
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitInfo({
        success: true,
        msg: `Estimate request sent successfully! Jeffrey or John will speak directly with you at ${phone} inside two hours. Thank you, ${name}!`
      });
      // Clear values upon success
      setName('');
      setEmail('');
      setPhone('');
      setService('roof-installation');
      setMessage('');
    }, 1200);
  };

  return (
    <section id="contact-form-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Title row */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#2A73D1] font-extrabold block">Connect With Us</span>
          <h2 className="font-display text-4xl font-extrabold text-[#0A2F6C] tracking-tight">
            Get Your Free physical Estimate
          </h2>
          <div className="h-1.5 w-16 bg-[#2A73D1] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Block: Core Contact Channels & Simulated Map Graphic */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col justify-between space-y-8">
              <div>
                <h3 className="font-display font-extrabold text-xl text-slate-800 mb-5">
                  Office Communications
                </h3>
                
                <ul className="space-y-5">
                  <li className="flex items-start space-x-4">
                    <div className="p-3 bg-white text-[#0A2F6C] rounded-2xl shrink-0 border border-slate-200">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold">Main Headquarters</span>
                      <span className="block text-sm text-slate-700 font-medium mt-0.5">
                        1203 Roofing Way, Suite A, Austin, TX 78701
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start space-x-4">
                    <div className="p-3 bg-white text-[#0A2F6C] rounded-2xl shrink-0 border border-slate-200">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold">Estimators Line</span>
                      <a href="tel:5551237663" className="block text-sm font-mono text-[#2A73D1] font-bold hover:underline mt-0.5">
                        (555) 123-ROOF
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start space-x-4">
                    <div className="p-3 bg-white text-[#0A2F6C] rounded-2xl shrink-0 border border-slate-200">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold">Electronic Support</span>
                      <a href="mailto:office@jjroofing.example.com" className="block text-sm text-slate-700 font-medium hover:underline mt-0.5">
                        office@jjroofing.example.com
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start space-x-4">
                    <div className="p-3 bg-white text-[#0A2F6C] rounded-2xl shrink-0 border border-slate-200">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold">Active Office Hours</span>
                      <span className="block text-sm text-slate-700 font-medium mt-0.5">
                        Mon - Fri: 7:00 AM - 7:00 PM | Sat: 8:00 AM - 4:00 PM
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Verified Badge */}
              <div className="p-4 bg-sky-50 rounded-2xl border border-sky-400/20 flex items-center space-x-3.5 mt-4">
                <ShieldCheck className="h-6 w-6 text-[#0A2F6C] shrink-0" />
                <span className="text-xs text-slate-700 leading-normal">
                  Our estimators maintain full weather safety gear. Estimates include visual roof maps and exact drone photos.
                </span>
              </div>
            </div>

            {/* Simulated Vector Google Map Placeholder component */}
            <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-sm h-64 relative bg-[#E6F0FA]/50" id="maps-placeholder">
              {/* Abstract Map Canvas Graphics style */}
              <div className="absolute inset-0 bg-slate-100 flex items-center justify-center pointer-events-none">
                {/* Horizontal road vectors */}
                <div className="absolute h-4.5 w-full bg-white top-12 left-0 transform -rotate-2" />
                <div className="absolute h-4.5 w-full bg-white bottom-16 left-0 transform rotate-4" />
                {/* Vertical road vectors */}
                <div className="absolute w-4.5 h-full bg-white left-28 top-0 transform -rotate-12" />
                <div className="absolute w-4.5 h-full bg-white right-32 top-0 transform rotate-6" />
                
                {/* Simulated Green Park area block */}
                <div className="absolute top-16 right-12 w-28 h-20 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-center text-[10px] text-emerald-800 font-bold font-display uppercase tracking-wider">
                  Lake Park
                </div>

                {/* Simulated Blue water area block */}
                <div className="absolute bottom-6 left-6 w-24 h-14 bg-sky-50 rounded-3xl border border-sky-100 flex items-center justify-center text-[10px] text-sky-800 font-bold font-display uppercase tracking-wider">
                  Eavestream
                </div>

                {/* Radar Coordinate Point */}
                <div className="absolute top-[48%] left-[45%] flex flex-col items-center">
                  <div className="h-3 w-3 bg-[#2A73D1] rounded-full animate-ping absolute" />
                  <div className="h-3.5 w-3.5 bg-[#0A2F6C] rounded-full relative border-2 border-white flex items-center justify-center shadow-lg">
                    <Compass className="h-2 w-2 text-white" />
                  </div>
                </div>
              </div>

              {/* Map Information overlay card */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 text-white p-4 rounded-2xl flex items-center space-x-3 border border-white/10 shadow-lg backdrop-blur-sm">
                <div className="p-2 bg-sky-500 rounded-lg">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="block font-bold text-xs tracking-tight">JJ Roofing & Construction</span>
                  <span className="block text-[10px] text-slate-350 font-normal">1203 Roofing Way, Austin, TX (HQ Office)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Core Estemation Request Webform */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-10 shadow-sm" id="estimates-form-panel">
              <h3 className="font-display font-extrabold text-2xl text-slate-800 mb-6">
                Estimate Appointment Request
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {submitInfo && (
                  <div
                    id="submit-status-log"
                    className={`p-4 rounded-2xl text-xs flex items-start gap-3 border ${
                      submitInfo.success
                        ? 'bg-emerald-50 border-emerald-250 text-emerald-800'
                        : 'bg-rose-50 border-rose-250 text-rose-800'
                    }`}
                  >
                    {submitInfo.success ? (
                      <MailCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                    )}
                    <span className="leading-relaxed">{submitInfo.msg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Contact Name</label>
                    <input
                      id="input-name"
                      type="text"
                      className="w-full text-xs py-3 px-4 bg-slate-50 border border-slate-205 rounded-xl focus:border-sky-550 focus:bg-white outline-none"
                      placeholder="e.g. Johnathan Miller"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                    <input
                      id="input-email"
                      type="email"
                      className="w-full text-xs py-3 px-4 bg-slate-50 border border-slate-205 rounded-xl focus:border-sky-550 focus:bg-white outline-none"
                      placeholder="e.g. support@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone Connection</label>
                    <input
                      id="input-phone"
                      type="tel"
                      className="w-full text-xs py-3 px-4 bg-slate-50 border border-slate-205 rounded-xl focus:border-sky-550 focus:bg-white outline-none font-mono"
                      placeholder="e.g. (555) 555-0199"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Requested Core Service</label>
                    <select
                      id="input-service"
                      className="w-full text-xs py-3 px-4 bg-slate-50 border border-slate-205 rounded-xl focus:border-sky-550 outline-none"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      <option value="roof-installation">New Roof Installation</option>
                      <option value="roof-repair">Severe Roof Repair</option>
                      <option value="siding">James Hardie Siding</option>
                      <option value="gutters">Seamless Gutters</option>
                      <option value="soffit-fascia">Soffit & Fascia detailing</option>
                      <option value="emergency-repairs">24/7 Storm tarping</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Your Inquiry Summary</label>
                  <textarea
                    id="input-message"
                    rows={5}
                    className="w-full text-xs py-3 px-4 bg-slate-50 border border-slate-205 rounded-xl focus:border-sky-550 focus:bg-white outline-none resize-none leading-relaxed"
                    placeholder="Provide details about your project: approximate year constructed, storm date (if claims), preferred roofing materials (architectural, metal), heights, siding preferences..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="pt-3">
                  <button
                    id="submit-estimate-form-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0A2F6C] hover:bg-[#0A2F6C]/95 text-white font-extrabold text-xs uppercase tracking-wider text-center py-4 rounded-xl cursor-pointer shadow-md shadow-[#0A2F6C]/10 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 disabled:bg-slate-350 transition-all flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Pipeline Records...</span>
                    ) : (
                      <span>Request Physical Estimate</span>
                    )}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
