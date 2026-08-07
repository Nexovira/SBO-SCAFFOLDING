import { ServiceCard, Testimonial, FAQItem } from '../types';

export const COMPANY_INFO = {
  name: 'SBO Scaffolding Services',
  owner: 'Simon',
  phoneFormatted: '07450 430359',
  phoneRaw: '+447450430359',
  phoneDisplay: '+44 7450 430359',
  address: '31 Hepworth Ave, Churwell, Leeds LS27 7RH',
  googleRating: 5.0,
  googleReviewCount: 48,
  openingHours: 'Open 24 Hours / 7 Days a Week',
  tagline: 'Reliable & Affordable Scaffolding Services in Leeds',
  subheading: '24/7 Rapid Response • Fully Insured • No Surprise Extension Fees • Direct Call to Owner',
};

export const CORE_SERVICES: ServiceCard[] = [
  {
    id: 'scaffolding-hire',
    title: 'Scaffolding Hire & Rental',
    badge: 'Popular for Trades & Commercial',
    description: 'Complete scaffolding supply, erection, and dismantling for building works, roofing, rendering, solar installation, and brickwork across Leeds.',
    features: [
      'Full safety inspection & TG20 compliance',
      'Rapid delivery and swift assembly',
      'Residential, commercial & industrial projects',
      'Transparent weekly rental rates'
    ],
    idealFor: 'Contractors, Roofers, Painters & Extension Builds',
    iconName: 'Building2',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'domestic-access',
    title: 'Domestic House Access',
    badge: 'Homeowner Specialist',
    description: 'Safe, secure, and property-friendly scaffolding for house extensions, chimney repairs, roof fixes, fascias, and exterior painting.',
    features: [
      'Careful setup protecting gardens, driveways & roofs',
      'Edge protection & chimney stack towers',
      'Neat, polite, and respectful local crew',
      'Free zero-obligation site measurement'
    ],
    idealFor: 'Homeowners, Chimney Repairs & Loft Conversions',
    iconName: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'flexible-long-term',
    title: 'Flexible Long-Term Hire Options',
    badge: 'Zero Stress Guarantee',
    description: 'Tailored extended hire agreements that won\'t penalize you if your project experiences delays or contractor handovers.',
    features: [
      'Fair, discounted long-term weekly rates',
      'No surprise penalties if your job runs over',
      'Emergency takeover support if left in the lurch',
      'Routine safety checks included'
    ],
    idealFor: 'Delayed Projects, Self-Builds & Major Renovations',
    iconName: 'Clock',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
  },
];

export const STANDOUT_TESTIMONIAL: Testimonial = {
  id: 'tony-green',
  author: 'Tony Green',
  location: 'Leeds, West Yorkshire',
  title: 'Saved Us When a Builder Left Us In The Lurch!',
  text: 'After being left in the lurch by a previous builder Simon offered to leave his scaffolding up for a few weeks for a brilliant price whilst we got someone else to finish...',
  rating: 5,
  date: 'Verified Google Review',
  verified: true,
  highlight: true,
};

export const ADDITIONAL_REVIEWS: Testimonial[] = [
  {
    id: 'rev-2',
    author: 'Mark H. - Roofer in Morley',
    location: 'Morley, Leeds',
    title: 'Simon came out within 2 hours on a Sunday',
    text: 'Needed chimney scaffolding urgently following storm damage. Simon arrived, assessed, and had the tower erected first thing Monday morning. Brilliant service and very fair price.',
    rating: 5,
    date: '1 week ago',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Sarah & Dave P.',
    location: 'Churwell, LS27',
    title: 'Polite, punctual and super clean site',
    text: 'SBO erected full scaffolding around our semi-detached property for rendering. They were extremely respectful of our plants and our neighbor’s driveway. Highly recommend!',
    rating: 5,
    date: '3 weeks ago',
    verified: true,
  },
  {
    id: 'rev-4',
    author: 'Gareth T. - Builder',
    location: 'Horsforth, Leeds',
    title: 'Best scaffolding team in West Yorkshire',
    text: 'Used Simon for 5+ property developments now. Always on time, solid equipment, strict safety compliance, and no hidden fees on hire extensions.',
    rating: 5,
    date: '1 month ago',
    verified: true,
  },
];

export const WHY_CHOOSE_SIMON = [
  {
    title: 'Direct Access to Simon',
    description: 'No call centers or middle managers. When you call, you speak directly with Simon who handles your quote, delivery, and safety setup.',
    iconName: 'UserCheck',
  },
  {
    title: '24/7 Rapid Emergency Response',
    description: 'Storm damage, loose masonry, or urgent builder handovers? We operate 24 hours a day to secure your property immediately.',
    iconName: 'ShieldAlert',
  },
  {
    title: '100% Fully Insured (£5M Public Liability)',
    description: 'Complete peace of mind. All structures are CITB/CISRS compliant, fully insured, and regularly inspected.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Honest, Customer-First Pricing',
    description: 'Clear upfront quotes with no hidden charges. If your job takes a bit longer, we work with you for fair extension rates.',
    iconName: 'BadgePercent',
  },
];

export const LEEDS_AREAS = [
  'Churwell (LS27)',
  'Morley & Gildersome',
  'Beeston & Holbeck',
  'Pudsey & Farsley',
  'Horsforth & Guiseley',
  'Headingley & Hyde Park',
  'Rothwell & Oulton',
  'Garforth & Cross Gates',
  'Roundhay & Moortown',
  'Castleford & Pontefract',
  'Wakefield & Surrounding West Yorkshire',
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: 'How quickly can Simon erect scaffolding in Leeds?',
    answer: 'For standard domestic projects and chimney towers, we can often erect within 24 to 48 hours of your call. Emergency storm damage or builder handover situations can usually be attended same-day.',
    category: 'general',
  },
  {
    question: 'What happens if my builder leaves or my project is delayed?',
    answer: 'As noted in Tony Green\'s 5-star review, we understand builder delays happen! Simon works flexibly with homeowners. We offer discounted extended hire rates so you aren\'t stressed or charged unfair penalties while finding a new contractor.',
    category: 'pricing',
  },
  {
    question: 'Do I need a pavement permit from Leeds City Council?',
    answer: 'If the scaffolding sits entirely inside your driveway, garden, or private land, no permit is needed. If it must stand on a public pavement or highway, a Leeds City Council permit is required. SBO Scaffolding handles the permit application and safety lighting on your behalf.',
    category: 'permits',
  },
  {
    question: 'Are you open on weekends and bank holidays?',
    answer: 'Yes! SBO Scaffolding Services operates 24/7, 365 days a year. Even if Google search listings show system glitch hours, Simon takes calls and dispatches crews around the clock.',
    category: 'emergency',
  },
];
