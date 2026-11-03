export const galleryCategories = [
  { id: 'all', label: 'All Portfolio' },
  { id: 'ambiance', label: 'Studio & Interior' },
  { id: 'haircuts', label: 'Haircuts & Fades' },
  { id: 'tools', label: 'Apothecary & Tools' },
  { id: 'art', label: 'Heritage & Art' }
];

export const galleryData = [
  {
    id: 1,
    type: 'video',
    video: './gallery_cinematic_experience.mp4',
    image: './gallery_atelier_studio.jpg',
    fallback: './images/barber 2.jpg',
    title: 'The Gentlemen’s Ritual • Cinematic Motion Reel',
    category: 'ambiance',
    tag: 'Cinematic Reel',
    price: 'Heritage Experience',
    description: 'An evocative sensory reel capturing master craftsmanship at Jerry Hair Saloon: precision blade graduation, hot towel steaming, artisanal lathering, and bespoke tapers in motion.',
    stylist: 'Jerry Atelier Craftsmen'
  },
  {
    id: 2,
    type: 'image',
    image: './gallery_atelier_studio.jpg',
    fallback: './images/barber 2.jpg',
    title: 'The Main Atelier • Belmont Station Floor',
    category: 'ambiance',
    tag: 'Studio Architecture',
    price: 'Neelum Block Flagship',
    description: 'Subdued charcoal architecture illuminated by spun copper pendant lamps, bespoke hydraulic recliners, polished stone counters, and calibrated track lighting engineered for flawless cut symmetry.',
    stylist: 'Atelier Architecture'
  },
  {
    id: 3,
    type: 'image',
    image: './gallery_apothecary_shelves.jpg',
    fallback: './images/barber 3.jpg',
    title: 'Curated Apothecary & Steamed Linen Wall',
    category: 'tools',
    tag: 'Grooming Armory',
    price: 'Artisanal Formulations',
    description: 'Dark-stained floating walnut cabinetry lined with imported American Crew elixirs, botanical grooming tonics, matte pomades, and pyramid-folded triple-steamed Egyptian cotton towels.',
    stylist: 'Apothecary Dispensary'
  },
  {
    id: 4,
    type: 'image',
    image: './gallery_heritage_wall.jpg',
    fallback: './images/barber 4.jpg',
    title: 'The Heritage Wall • Barbering Tribute Archive',
    category: 'art',
    tag: 'Heritage Archive',
    price: 'Curated Exhibition',
    description: 'A curated monochrome gallery wall honoring timeless barbering lineage: vintage clipper schematics, straight razor geometry, silhouette beard charts, and framed typographic mantras.',
    stylist: 'Heritage Collection'
  },
  {
    id: 5,
    type: 'image',
    title: 'Master Fade & Japanese Shear Detail',
    category: 'haircuts',
    tag: 'Master Fade',
    price: 'PKR 1,500',
    description: 'Precision zero skin taper blended with Japanese shear weight-reduction technique. Crisp baseline definition and smooth gradient.',
    image: './barber 1.jpg',
    fallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2uNnG7287JCjICX_B4o57Thcf5FkrqGbTu4Qz3xzefZOD0g-czMHYuSMCdVdGF8a5kCYABiDDBu6GM3zEC4gdQIZvQULqfup9FcjihXHn33kwVGAhzKoEk9-sswQIjlXbRc4tqFFanZ9gBnNXPW3_IQxUIlCP14XUu8Q8gnOqKMReRg5HKq91i6vUdvOUyVcNZzJlHMVIonoNRj1gEZ766XQ88Q4v1Eo4GM9mPXQf8pW1Q7U6MKtMOg',
    stylist: 'Jerry (Master Craftsman)'
  },
  {
    id: 6,
    type: 'image',
    title: 'Surgical Line-Up & Beard Contouring',
    category: 'art',
    tag: 'Beard Craft',
    price: 'PKR 800',
    description: 'Surgical straight-edge detailing along jawline and mustache lines. Finished with steeped eucalyptus hot towel and nourishing beard oil.',
    image: './barber 4.jpg',
    fallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYd98UvySPsYFxYxKYGQuI67qMOBKl2Efyg-H0rVE_3ggukV43Tz89HIJUgLu-K_jHVOl49a6IhT3-sbrPGc4XTMVsu4GVuqAUu9xfEILFEjPNVwavopWOuXepnu87vq9NCMVi7FwdmoJBLY0MOB_PCCdq5Osdh9FKz96l2ZDBLoh5j9IbRqhwL-7g8YBs6ssWjjMRZCea5SvD74H-AlH7lyEt9z3KcfYgeYJiDPM2FFJAZYyOSag2NQ',
    stylist: 'Hunain Gori (Fade Specialist)'
  },
  {
    id: 7,
    type: 'image',
    title: 'Steamed Towel Spa & Scalp Therapy',
    category: 'ambiance',
    tag: 'Sanctuary',
    price: 'PKR 1,800',
    description: 'Decompress in our private treatment area with pressurized herbal micro-mist and soothing cervical acupressure.',
    image: './barber 5.jpg',
    fallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBczEGpxNAKstn7_JLpX6JkjASCQZOKodtPD5KBimaF40elcmAlawQzc53quvuTLrJDYgffnD45qPgxDvVU-bd9_-OpHTVpBy_z0pyHVMyUCfJQnMaKEw2vhJPaH2DxCwJJuD20b9v1CGM4_cde1d7YIUpay4Hw3n01AygRR9kSZpjnzp-GT4gcHHZk5uEp1OCQLiVNSugdmlx-patc5Lg7z3KEF5DjbvD7NFoZAP63',
    stylist: 'Adnan (Wellness Specialist)'
  },
  {
    id: 8,
    type: 'image',
    title: 'Sterilized Blades & Barbering Armory',
    category: 'tools',
    tag: 'Hygiene Protocol',
    price: 'Medical Grade Protocol',
    description: 'Hospital-grade UV sterilization between bookings, matched with matte Uppercut clays, sandalwood shaving balms, and fine-tooth carbon combs.',
    image: './barber 3.jpg',
    fallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFBG59JWbJd_b41jCTrippMfxMok4oTzbFIuEhDL6WC69tmoALZRJXwENQiTmWKpF86GrfNJmHEGY5JnpH3kfQcleTCn5Kq_iDDn1bSPinVkhWOMEeI_TAUTXLcjqS5decP1yHrh-JQ2JhKPeXjsf3uaocVa6E_SAzNzlZCPF-OqefFyUtXScMWKZqadCSV9VzCwg4Ai_Bj6y52cDMVHah_CYtBhutgazUxPsanw12dDyCxodsMIF5AA',
    stylist: 'Equipment Protocol'
  },
  {
    id: 9,
    type: 'image',
    title: 'The Jerry Noir Flagship Signature',
    category: 'haircuts',
    tag: 'Editorial Flagship',
    price: 'Signature',
    description: 'Epitome of modern luxury grooming in Lahore. Traditional master craft meets contemporary styling perfection.',
    image: './Gemini_Generated_Image_sa2mwssa2mwssa2m.jpg',
    fallback: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2uNnG7287JCjICX_B4o57Thcf5FkrqGbTu4Qz3xzefZOD0g-czMHYuSMCdVdGF8a5kCYABiDDBu6GM3zEC4gdQIZvQULqfup9FcjihXHn33kwVGAhzKoEk9-sswQIjlXbRc4tqFFanZ9gBnNXPW3_IQxUIlCP14XUu8Q8gnOqKMReRg5HKq91i6vUdvOUyVcNZzJlHMVIonoNRj1gEZ766XQ88Q4v1Eo4GM9mPXQf8pW1Q7U6MKtMOg',
    stylist: 'Jerry Atelier Team'
  }
];
