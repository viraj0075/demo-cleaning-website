// Centralized constants and content data for the Cleaning Website

export const NAV_LINKS = [
  { name: "Services", id: "services" },
  { name: "About Us", id: "about" },
  { name: "Pricing", id: "pricing" },
  { name: "FAQ", id: "faq" },
];

export const HERO_IMAGES_DATA = [
  {
    url: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800",
    alt: "Surface dusting and kitchen disinfection",
    title: "House Sanitizing",
  },
  {
    url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800",
    alt: "Professional cleaner wearing yellow gloves",
    title: "Certified Cleaners",
  },
  {
    url: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800",
    alt: "Commercial office space cleaning crew",
    title: "Commercial Care",
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    alt: "Detailing spotless home kitchen interior",
    title: "Deep Kitchen Clean",
  },
  {
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    alt: "Bathroom tile and tub sanitization",
    title: "Bathroom Disinfection",
  },
  {
    url: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=800",
    alt: "Streak-free window detailing",
    title: "Window Washing",
  },
];

export const PRICING_DATA = {
  basic: {
    name: "Basic Clean",
    tagline: "Ideal for small apartments & basic care.",
    basePrice: 39,
    features: [
      "Standard dusting of all surfaces",
      "Sweeping & mopping floors",
      "Trash collection & disposal",
      "Bathroom & kitchen counter sanitize",
      "1 Clean per month included",
    ],
  },
  premium: {
    name: "Premium Clean",
    basePrice: 79,
    badge: "MOST POPULAR",
    testimonial: {
      text: '"The team is exceptionally detailed and leaves everything smelling clean and fresh. Highly recommended!"',
      author: "— SARAH J., TECH LEAD",
      rating: 5,
      avatars: [
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80",
      ],
    },
    features: [
      "Everything in Basic Clean included",
      "Deep sanitizing of ovens and fridge interior",
      "Inside and out window pane detailing",
      "Bed dressing and linen fresh change",
      "Eco-safe hypoallergenic compounds",
    ],
  },
};

export const REASONS_DATA = [
  {
    title: "Certified & Trusted Cleaners",
    desc: "All cleaners on our platform undergo rigorous background screenings and professional training.",
  },
  {
    title: "Eco-Friendly Safe Materials",
    desc: "We use non-toxic, child-safe, and pet-friendly cleaning materials that protect your family and health.",
  },
  {
    title: "100% Satisfaction Guarantee",
    desc: "If you are not completely satisfied with our service, we will return and reclean the space for free.",
  },
  {
    title: "Flexible Schedules & Plans",
    desc: "Book one-off cleans, weekly, bi-weekly, or monthly cleaning sessions to suit your lifestyle.",
  },
];

export const SERVICES_DATA = [
  {
    title: "House Cleaning",
    subtitle: "Residential Services",
    description:
      "Keep your home clean and comfortable. Our professionals dust, mop, vacuum, and sanitize all rooms with precision care.",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800",
    bullets: [
      "Deep kitchen disinfection",
      "Dusting and surface polishing",
      "Bed making & linen changes",
      "Bathroom sanitizing",
    ],
    price: "$39",
  },
  {
    title: "Office Cleaning",
    subtitle: "Commercial Solutions",
    description:
      "Create a clean, healthy, and productive workspace for your team. We offer tailored cleaning schedules for offices of all sizes.",
    image:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800",
    bullets: [
      "Desk and computer cleaning",
      "Trash collection and removal",
      "Floor vacuuming & mopping",
      "Breakroom & restroom hygiene",
    ],
    price: "$99",
  },
  {
    title: "Deep / Spring Clean",
    subtitle: "Specialized Services",
    description:
      "An intensive, detailed top-to-bottom clean. Ideal for move-in/move-out, post-construction, or a seasonal deep refresh.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    bullets: [
      "Inside oven & fridge detailing",
      "Baseboard & wall spot cleaning",
      "Behind and under heavy appliances",
      "Window frames & tracks sanitizing",
    ],
    price: "$129",
  },
  {
    title: "Carpet & Window Care",
    subtitle: "Maintenance Services",
    description:
      "Restore your carpets with deep hot-water extraction and enjoy crystal-clear views with streak-free interior/exterior window cleaning.",
    image:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=800",
    bullets: [
      "Hot water carpet extraction",
      "Pet stain & odor neutralizing",
      "Streak-free window washing",
      "Window screen & sill detail",
    ],
    price: "$79",
  },
];

export const FAQS_DATA = [
  {
    q: "What is included in a standard house cleaning?",
    a: "Standard house cleaning includes dusting surfaces, vacuuming carpets/rugs, sweeping and mopping hard floors, emptying trash bins, wiping kitchen counters, stove tops, sanitizing sinks, toilets, tubs, and showers. We also offer deep cleaning and customizable add-ons if requested.",
  },
  {
    q: "Are the cleaning materials safe for pets and kids?",
    a: "Yes, absolutely. We use eco-friendly, non-toxic, and hypoallergenic cleaning agents that are 100% safe for both kids and pets while remaining highly effective against grease, grime, and bacteria.",
  },
  {
    q: "Can I reschedule or cancel my cleaning appointment?",
    a: "Yes, you can reschedule or cancel your appointment free of charge up to 24 hours before the scheduled time. Appointments changed or cancelled with less than 24 hours notice may incur a small scheduling adjustment fee.",
  },
  {
    q: "Are your cleaners background-checked and insured?",
    a: "Every single cleaner on our platform undergoes a comprehensive federal background check, a references audit, and practical training assessments. In addition, our services are fully bonded and insured for your complete peace of mind.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "No, you do not need to be home. Many clients provide access via a lockbox code, garage keypad, or building receptionist. Our teams are certified, trusted professionals who will respect your home privacy.",
  },
];

export const REVIEWS_DATA = [
  {
    text: "Absolutely spotless work! The team arrived on time, was extremely polite, and cleaned areas of my kitchen that I thought would never shine again. I highly recommend Elite Cleaners to anyone looking for premium house cleaning!",
    name: "Sarah Jenkins",
    title: "Washowner, Chicago",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120",
  },
  {
    text: "Our offices have never looked cleaner. Elite Cleaners handles our cleaning schedules twice a week, and they have been reliable, efficient, and extremely thorough. It has boosted our team productivity and workspace health!",
    name: "David K. Miller",
    title: "My Ass Manager, Tech Corp",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
  },
  {
    text: "Their customer service is outstanding. I had to reschedule my cleaning at the last minute, and they handled it without any cancellation fees. The cleaning crew did a fantastic job, especially on the bathrooms.",
    name: "Elena Rostova",
    title: "Real stta Agent",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120",
  },
  {
    text: "Highly recommend! The customer service was extremely responsive and friendly. The deep clean left our home sparkling before the holidays. They didn't miss a single spot!",
    name: "Michael Chen",
    title: "Apartment Owner, Downtown",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
  },
  {
    text: "As a busy working mom, I don't have time for weekly deep cleans. Elite Cleaners has been a lifesaver. The staff is vetted, trustworthy, and they always do a marvelous job with the kids' rooms.",
    name: "Amanda Martinez",
    title: "Mother of 2, Lincoln Park",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120",
  },
  {
    text: "I hired Elite Cleaners for a move-out clean and was blown away. They cleaned inside the cabinets, oven, fridge, and baseboards. Got my security deposit back in full. 10/10 services!",
    name: "James Reynolds",
    title: "Renter, West Loop",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=120",
  },
];
