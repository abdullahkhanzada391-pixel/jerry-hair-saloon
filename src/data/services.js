export const serviceCategories = [
  { id: 'all', label: 'All Services' },
  { id: 'hair-beard', label: 'Hair & Beard' },
  { id: 'head-spa', label: 'Head Spa' },
  { id: 'massages', label: 'Massages' },
  { id: 'facials', label: 'Facials & Skin' },
  { id: 'packages', label: 'Master Packages' }
];

export const servicesData = [
  {
    id: '1',
    category: 'hair-beard',
    categoryLabel: 'Signature Craft',
    name: 'Signature Fade & Beard Trim',
    price: 1500,
    duration: '45 Mins',
    badge: 'Bestseller',
    description: 'Sharp edge graduation, zero-gap line-up, steeped eucalyptus hot towel finish, and cold-pressed botanical beard oil treatment.',
    includes: ['Precision Taper / Fade', 'Zero-Gap Razor Outline', 'Hot Steamed Towel', 'Uppercut Deluxe Clay'],
    icon: 'bi-scissors'
  },
  {
    id: '2',
    category: 'hair-beard',
    categoryLabel: 'Traditional Blade',
    name: 'Executive Beard & Razor Shave',
    price: 800,
    duration: '30 Mins',
    badge: 'Classic',
    description: 'Warmed badger-brush sandalwood lather, authentic Japanese steel straight razor edge, and menthol cooling balm treatment.',
    includes: ['Warm Lather Prep', 'Straight Razor Detail', 'Alum Block Soothe', 'Menthol Balm'],
    icon: 'bi-gem'
  },
  {
    id: '3',
    category: 'hair-beard',
    categoryLabel: 'Barber Heritage',
    name: 'Royal Hot Towel Straight Shave',
    price: 700,
    duration: '25 Mins',
    badge: null,
    description: 'Double steamed towel compress, rich shaving foam, single-use surgical blade glide, and rosewater mist astringent.',
    includes: ['Double Hot Towel', 'Single-use Feather Blade', 'Rosewater Tonic'],
    icon: 'bi-droplet-half'
  },
  {
    id: '4',
    category: 'hair-beard',
    categoryLabel: 'Couture Shear',
    name: 'Master Scissor Cut & Styling',
    price: 1000,
    duration: '35 Mins',
    badge: null,
    description: 'Bespoke hand-crafted scissor work tailored to your face structure, hair texture assessment, and matte clay finish.',
    includes: ['Consultation', 'Shear Architecture', 'Shampoo Wash', 'Texture Powder'],
    icon: 'bi-scissors'
  },
  {
    id: '5',
    category: 'head-spa',
    categoryLabel: 'Follicle Restoration',
    name: 'Herbal & Steam Head Spa',
    price: 1800,
    duration: '40 Mins',
    badge: 'Popular',
    description: 'Deep cleansing wild-herb rinse, pressurized micro-mist steam chamber, and scalp tension decompression acupressure massage.',
    includes: ['Herbal Tea-tree Wash', 'Micro-mist Steam Chamber', 'Cranial Acupressure', 'Tonic Infusion'],
    icon: 'bi-flower1'
  },
  {
    id: '6',
    category: 'head-spa',
    categoryLabel: 'Hydrotherapy',
    name: 'Japanese Scalp Spa Rinse',
    price: 2200,
    duration: '45 Mins',
    badge: 'Relaxation',
    description: 'Waterfall halo hydro-infusion, deep follicle clearing scrub, stimulating organic mint essence, and neck decompression.',
    includes: ['Halo Hydro-flow', 'Mint Scalp Scrub', 'High-frequency Stimulator', 'Hot Neck Pillow'],
    icon: 'bi-water'
  },
  {
    id: '7',
    category: 'massages',
    categoryLabel: 'Targeted Release',
    name: 'Deep Tissue & Shoulder Relief',
    price: 2800,
    duration: '50 Mins',
    badge: 'Therapy',
    description: 'Rigorous manual focus on cervical spine, trapezoid tension knots, and lower shoulder fatigue using warm aromatic camphor oils.',
    includes: ['Cervical Spine Focus', 'Camphor Essential Oil', 'Acupressure Knots Release', 'Heated Compress'],
    icon: 'bi-hand-index-thumb'
  },
  {
    id: '8',
    category: 'massages',
    categoryLabel: 'Full Ritual',
    name: 'Swedish Head & Body Pressure',
    price: 3500,
    duration: '60 Mins',
    badge: 'Deluxe',
    description: 'Harmonic gliding strokes, gentle effleurage, and cranial pressure therapy designed for deep nervous system calming and restorative circulation.',
    includes: ['Full Upper Body Flow', 'Warm Almond Oil', 'Cranial Calming Strokes', 'Herbal Post-tea'],
    icon: 'bi-heart-pulse'
  },
  {
    id: '9',
    category: 'facials',
    categoryLabel: 'Dermal Treatment',
    name: 'Gold Glow & Charcoal Detox Facial',
    price: 2500,
    duration: '45 Mins',
    badge: 'Top Glow',
    description: 'Vacuum blackhead pore extraction, volcanic charcoal mud pack, ultrasonic dermabrasion scrub, and a luminous 24k gold essence mist.',
    includes: ['Ultrasonic Scrub', 'Vacuum Extraction', 'Bamboo Charcoal Mud', '24K Gold Essence'],
    icon: 'bi-stars'
  },
  {
    id: '10',
    category: 'facials',
    categoryLabel: 'Skin Clarifying',
    name: 'Express Herbal Facial & Polish',
    price: 1800,
    duration: '35 Mins',
    badge: null,
    description: 'Walnut micro-exfoliation, natural tea-tree and aloe soothing gel mask, followed by gentle face contouring and ice-globe tightening.',
    includes: ['Exfoliating Scrub', 'Aloe Vera Mask', 'Ice Globe Soothe', 'UV Shield Finish'],
    icon: 'bi-shield-check'
  },
  {
    id: '11',
    category: 'packages',
    categoryLabel: 'All-Inclusive Master Suite',
    name: 'Royal Grooming Combo',
    price: 5000,
    duration: '90 Mins',
    badge: 'Save PKR 1,600',
    description: 'The definitive atelier journey: Signature Precision Haircut, Sculpted Beard Razor Lining, Restorative Head Spa Wash, and Mini Ultrasonic Glow Facial.',
    includes: ['Precision Haircut', 'Hot Towel Shave', 'Steam Scalp Spa', 'Express Detox Facial'],
    icon: 'bi-award'
  },
  {
    id: '12',
    category: 'packages',
    categoryLabel: 'Grand Ceremony Suite',
    name: "Groom's Bespoke Wedding Suite",
    price: 8500,
    duration: '150 Mins',
    badge: 'VIP Bridegroom',
    description: 'Complete head-to-toe royal treatment for weddings. Includes signature haircut, luxury beard shaping, deep steam facial, full relaxation massage, and styling consultation.',
    includes: ['Signature Cut & Beard', '24K Gold Facial Treatment', 'Shoulder & Scalp Therapy', 'Hair Styling & Beard Fixation'],
    icon: 'bi-suit-club-fill'
  }
];

