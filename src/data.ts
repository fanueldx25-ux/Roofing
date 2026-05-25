import { Service, GalleryItem, Review, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'roof-installation',
    title: 'Roof Installation',
    shortDesc: 'Premium shingle, metal, tile, and flat roof installations engineered for durability and longevity.',
    fullDesc: 'We provide top-tier roof replacement and brand-new installations for residential and commercial assets. As certified contractors for GAF and Owens Corning, we use only high-grade materials coupled with precision craftsmanship. Whether you prefer the classic elegance of dimensional asphalt shingles, the lifetime durability of standing-seam metal, custom classic slate, or energy-efficient modern flat roofing systems, our trained crew ensures flawless execution backed by our 10-year workmanship warranty.',
    iconName: 'Hammer',
    features: [
      'GAF & Owens Corning Certified installations',
      'Lifetime architectural shingle options',
      'Standing-seam and corrugated metal installations',
      'Comprehensive leak-barrier & underlayment wrap',
      'Full architectural ventilation planning',
      '10-year labor and workmanship guarantee'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1632833238851-47a1a9a01587?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'roof-repair',
    title: 'Professional Roof Repair',
    shortDesc: 'Fast, precise repairs patching leaks, broken shingles, flashing splits, and storm damage.',
    fullDesc: 'Even minor leaks can cause extensive framing damage if left untreated. Our repair specialists arrive with fully stocked trucks to locate problems, seal leaks, replace damaged shingles, repair chimneys and pipe collars, and secure step flashing. We offer comprehensive diagnostic inspections with photographic proof, showing you exactly what the issue is before we begin, and providing an airtight, weather-tight repair seal.',
    iconName: 'Wrench',
    features: [
      'Advanced digital moisture detection',
      'Cracked, missing, and wind-torn shingle matches',
      'Flashing, valley, and vent collar resealing',
      'Rotten roof sheathing and deck replacement',
      'Ice dam mitigation and prevention',
      'Same-day service for critical leaks'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'siding',
    title: 'Siding Installation',
    shortDesc: 'Transform your home exterior with premium vinyl, fiber cement, and real wood siding options.',
    fullDesc: 'New siding drastically elevates curb appeal and scales up R-value insulation. We offer industry-leading James Hardie fiber cement siding, high-strength insulated vinyl siding, and wood siding options. Our installations include full weather barrier home wraps, customized corner trim boards, and thermal foam backings to defend against structural drafts, pests, and ambient moisture.',
    iconName: 'Home',
    features: [
      'James Hardie fiber cement installation certified',
      'Premium insulated vinyl siding (low maintenance)',
      'Custom real wood and cedar shake siding systems',
      'Complete Tyvek HomeWrap weather barriers',
      'Coordinated soffit, fascia, and trim details',
      'Rotten wood framing checks & repairs included'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gutters',
    title: 'Seamless Gutter Systems',
    shortDesc: 'Custom-extruded K-style and half-round seamless gutters with heavy-duty leaf guards.',
    fullDesc: 'Improper drainage ruins foundations. We custom-extrude your seamless aluminum or copper gutters directly on-site to match your roofline perfectly. We use extra-heavy hangers spaced closely to handle heavy snow and torrential rain loads. Pair your gutter system with our commercial-grade micro-mesh leaf filters to prevent leaf blockages, nested pests, and clogged downspouts forever.',
    iconName: 'Droplet',
    features: [
      '5-inch and 6-inch seamless aluminum gutters',
      'Custom premium solid copper gutter runs',
      'Micro-mesh gutter guard installation',
      'Precision pitch calculations for optimal flow',
      'Heavier gauge brackets spaced every 18 inches',
      'Wide variety of colors matched to your trim'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'soffit-fascia',
    title: 'Soffit & Fascia Service',
    shortDesc: 'Critical detail work that shields your eaves, ensures continuous attic airflow, and blocks pests.',
    fullDesc: 'Soffits and fascia boards protect the roof eaves from moisture and wind-driven rain, while maintaining steady intake ventilation for your attic. We repair rotted wood eaves, wrap fascia boards in heavy aluminum trim coil, and install fully vented vinyl or aluminum soffit panels. This lowers your heating/cooling bills, prevents wood rot, and creates a neat, paint-free finish that lasts for decades.',
    iconName: 'Layers',
    features: [
      'Continuous intake vent calculation',
      'Custom heavy-gauge aluminum fascia wraps',
      'Vented and solid soffit options',
      'Replacement of decayed gutter-line boards',
      'Insect and squirrel-proof screening elements',
      'Maintenance-free paint-free vinyl/aluminum combinations'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'emergency-repairs',
    title: '24/7 Emergency Repairs',
    shortDesc: 'Rapid response dispatch providing emergency roof tarping and storm damage protection.',
    fullDesc: 'When hail strikes, high winds tear off vents, or falling trees crash through your shingles, you cannot wait for normal business hours. Our emergency response team operates 24/7. We deploy rapidly to install secure heavy-duty tarps (emergency tarping) and temporary physical structures to stop immediate leaks and protect your home interior from catastrophic water damage until permanent repairs can be scheduled.',
    iconName: 'AlertTriangle',
    features: [
      'Instant service line: (555) 123-ROOF dial-in',
      'Secure high-tensile visual emergency tarping',
      'Detailed visual storm damage documentation for claims',
      'Wind damage & framing stabilizer reinforcement',
      'Direct coordination with insurance adjusters',
      'Rapid turnaround estimates'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7eed?auto=format&fit=crop&q=80&w=800'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Historical Residential Shingle Install',
    category: 'roofing',
    beforeUrl: 'https://images.unsplash.com/photo-1508333706533-1ec43ecb1606?auto=format&fit=crop&q=80&w=600', // worn shingles / dark shadow
    afterUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600', // shiny new roof / clean lines
    location: 'Austin, TX',
    description: 'Complete strip-down of double-layered rotting asphalt shingles. Installed GAF Timberline HDZ architectural shingles in Charcoal Grey with new synthetic underlayment.'
  },
  {
    id: '2',
    title: 'Standing Seam Metal Modern Upgrade',
    category: 'roofing',
    beforeUrl: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=600', // old metal sheets
    afterUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600', // gorgeous designer estate
    location: 'Round Rock, TX',
    description: 'Upgraded a weather-worn barn style roof to commercial-grade, matte black standing-seam metal roofing for a premium modern rustic aesthetic.'
  },
  {
    id: '3',
    title: 'Designer Siding and Wrap Transformation',
    category: 'siding',
    beforeUrl: 'https://images.unsplash.com/photo-1534237711096-0fd11b824977?auto=format&fit=crop&q=80&w=600',
    afterUrl: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&q=80&w=600',
    location: 'Westlake Hills, TX',
    description: 'Replaced warping, water-logged fiber siding with James Hardie timber cement boards in Deep Ocean Blue, paired with Arctic White trims.'
  },
  {
    id: '4',
    title: 'Seamless Gutter & MicroGuard System',
    category: 'gutters',
    beforeUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600',
    afterUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600',
    location: 'Pflugerville, TX',
    description: 'Installed 6" charcoal aluminum seamless gutters with premium micro-mesh guards to handle extreme downpours and thick pine-needle fall.'
  },
  {
    id: '5',
    title: 'Severe Storm Damage Restoration',
    category: 'emergency',
    beforeUrl: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=600', // storm fallen tree hint
    afterUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600', // beautiful house exterior
    location: 'Lakeway, TX',
    description: 'Windstorm tree strike repair. Deployed 24/7 tarping within 45 mins. Fully replaced destroyed rafter structures, underlying plywood, and 3 squares of dimensional shingles.'
  },
  {
    id: '6',
    title: 'Commercial Flat TPO Assembly',
    category: 'roofing',
    beforeUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600',
    afterUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600',
    location: 'Downtown Austin, TX',
    description: 'Removed a failure-prone gravel roofing layer down to concrete deck. Engineered custom polyiso tapered board slopes and installed 60-mil fully-adhered Firestone TPO.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Robert Jenkins',
    location: 'Austin, TX',
    rating: 5,
    text: 'JJ Roofing replaced our roof, gutters, and siding after a massive hail storm last spring. They managed everything with our insurance adjuster, making the entire process stress-free. Cleaned up every single nail from our yard. Highly recommend!',
    date: 'April 14, 2026',
    source: 'Google'
  },
  {
    id: 'r2',
    name: 'Marissa Alvarez',
    location: 'Cedar Park, TX',
    rating: 5,
    text: 'A family-owned business that treats you like family! JJ Roofing was prompt and highly professional. Jeffrey took the time to explain the difference in shingle models, and the price was exactly what was quoted. Our new roof looks amazing!',
    date: 'May 02, 2026',
    source: 'Facebook'
  },
  {
    id: 'r3',
    name: 'Thomas K.',
    location: 'Westlake Hills, TX',
    rating: 5,
    text: 'Woke up at 2 AM to a tree limb crashing through my roof during bad thunderstorms. JJ Roofing was at my house by 3 AM with giant tarps to seal the breach. Absolute lifesavers. Their prompt restoration service saved me thousands in structural repairs.',
    date: 'May 10, 2026',
    source: 'Google'
  },
  {
    id: 'r4',
    name: 'Sarah Peterson',
    location: 'Round Rock, TX',
    rating: 5,
    text: 'Excellent gutter install! Seamless gutters with stainless steel mesh filters work brilliantly. No more climbing ladders to scoop leaves! The crew was quick and tidied up perfectly afterward.',
    date: 'March 28, 2026',
    source: 'BBB'
  },
  {
    id: 'r5',
    name: 'David & Karen Vance',
    location: 'Georgetown, TX',
    rating: 4.8,
    text: 'We got four quotes for our total roof and fascia replacement. JJ Roofing had the most transparent itemized pricing. The process took less than two days. Incredible service, visual honesty, and friendly local guys.',
    date: 'February 19, 2026',
    source: 'Google'
  },
  {
    id: 'r6',
    name: 'Elena Rostova',
    location: 'Lakeway, TX',
    rating: 5,
    text: 'Highly professional. They inspected my old roof and told me I only needed minor chimney flashing repairs rather than a full replacement. Love their honesty! Hard to find contractors with this kind of integrity nowadays.',
    date: 'May 18, 2026',
    source: 'Facebook'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'general',
    question: 'Do you offer free, no-obligation estimates?',
    answer: 'Absolutely! We believe in transparent pricing. We visit your property, perform a thorough physical or drone inspection, and provide a detailed, itemized digital estimate absolutely free of charge.'
  },
  {
    category: 'roof',
    question: 'How long does a complete roof replacement take?',
    answer: 'Most standard residential roofs can be completed in just one to two days. Larger homes or complex steep slopes may take three days. Our team arrives early in the morning, works efficiently, and performs a comprehensive yard clean-up with magnetic nail sweepers before leaving.'
  },
  {
    category: 'general',
    question: 'Are you licensed and fully insured?',
    answer: 'Yes, JJ Roofing is fully licensed in the state, carrying $2M in general liability insurance and comprehensive workers’ compensation coverage for all workers on your property. We can provide certificates of insurance upon request.'
  },
  {
    category: 'general',
    question: 'Do you help manage homeowner insurance claims?',
    answer: 'Yes! We coordinate directly with major insurance providers. Our certified inspectors will climb the roof with your insurance adjuster to document hail/wind damage, supply direct itemized satellite roof measurements, and assist in uploading claims to secure proper coverage.'
  },
  {
    category: 'roof',
    question: 'What roofing brands and products do you use?',
    answer: 'As certified Owens Corning and GAF contractors, we mainly utilize GAF Timberline HDZ and Owens Corning Duration architectural shingles. We also forge custom standing seam metal assemblies and Firestone TPO flat membrane structures for commercial projects.'
  },
  {
    category: 'general',
    question: 'Do you offer financing options for larger projects?',
    answer: 'Yes, we partner with reliable home improvement lenders to offer flexible monthly financing plans, including 0% interest if paid off within 12 months, and low APR long-term financing to fit your household budget.'
  },
  {
    category: 'siding',
    question: 'What siding options do you suggest for local climates?',
    answer: 'We highly recommend James Hardie Fiber Cement siding. It offers unparalleled resistance to storm impacts, severe hail, fire, and heat degradation compared to traditional vinyl siding, although premium vinyl siding remains a beautiful, low-maintenance, and cost-effective option.'
  },
  {
    category: 'emergency',
    question: 'How quickly can your 24/7 team respond to emergency leaks?',
    answer: 'Our average arrival time for emergency roofing leaks and storm damage tarping within our primary Austin metro service range is under 60 minutes. We have active teams ready to mobilize with industrial tarps, lumber framing stabilizers, and rain protection gear 24 hours a day, 7 days a week.'
  }
];

export const SERVICE_AREAS = [
  'Austin',
  'Round Rock',
  'Cedar Park',
  'Pflugerville',
  'Georgetown',
  'Lakeway',
  'Westlake Hills',
  'Leander',
  'Kyle',
  'Buda',
  'Bee Cave',
  'Hutto'
];

export const CERTIFICATIONS = [
  {
    name: 'GAF Weather Stopper',
    desc: 'Authorized residential roofing contractor for elite GAF shingle systems.'
  },
  {
    name: 'Owens Corning Preferred Builder',
    desc: 'Certified preferred contractor utilizing total protection roofing systems.'
  },
  {
    name: 'James Hardie Siding Associate',
    desc: 'Trained to apply premium fiber cement systems with proper warranty compliance.'
  },
  {
    name: 'BBB A+ Rated Accredited',
    desc: 'Committed to superior customer satisfaction and standards of ethical sales.'
  }
];
