import React from 'react';
import { servicesData } from '../data/services';
import { barbersData } from '../data/barbers';
import { reviewsData } from '../data/reviews';
import { 
  motion, 
  staggerContainer, 
  fadeInUp, 
  cardItemAnim, 
  AnimatedCounter, 
  MagneticButton, 
  ParallaxBox 
} from '../animations/motion';

export default function Home({ setCurrentTab, onSelectService, onSelectBarber, onOpenVipModal }) {
  const featuredServices = servicesData.slice(0, 4);

  return (
    <div className="home-view">
      {/* Heritage Luxury Hero Section */}
      <section className="hero-wrapper-heritage position-relative d-flex align-items-center py-5 py-lg-6">
        {/* Subtle Background Texture & Soft Illustration with Parallax */}
        <ParallaxBox speed={0.12} className="position-absolute end-0 top-0 bottom-0 col-12 col-lg-6 overflow-hidden d-none d-md-block opacity-75">
          <img 
            src="./Gemini_Generated_Image_sa2mwssa2mwssa2m.jpg" 
            alt="Jerry Hair Saloon Heritage Illustration" 
            className="w-100 h-100"
            style={{ 
              objectFit: 'cover', 
              objectPosition: 'center',
              filter: 'sepia(25%) contrast(105%) brightness(95%)',
              maskImage: 'linear-gradient(to left, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0) 100%)'
            }}
            onError={(e) => {
              e.target.src = './Gemini_Generated_Image_sa2mwssa2mwssa2m.jpg';
            }}
          />
        </ParallaxBox>

        <div className="hero-texture-overlay"></div>

        <div className="container position-relative py-4 py-lg-5" style={{ zIndex: 10 }}>
          <div className="row">
            <motion.div 
              className="col-12 col-lg-7 col-xl-6"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* Editorial Pill Badge */}
              <motion.div variants={fadeInUp} className="mb-2">
                <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 bg-card border-heritage shadow-sm mobile-hero-badge">
                  <i className="bi bi-scissors text-gold"></i>
                  <span className="label-caps text-espresso fw-bold" style={{ fontSize: '10px' }}>
                    EST. 8 YEARS • LAHORE'S PREMIER BARBER ATELIER
                  </span>
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                variants={fadeInUp}
                className="display-title text-espresso mb-3 hero-headline" 
                style={{ fontSize: 'clamp(1.75rem, 5.5vw, 3.8rem)', wordBreak: 'break-word', hyphens: 'auto' }}
              >
                Master Craftsmanship &amp; Gentlemen's Grooming
              </motion.h1>

              {/* Description */}
              <motion.p 
                variants={fadeInUp}
                className="body-muted fs-6 mb-3 mb-md-4" 
                style={{ maxWidth: '520px', color: '#4A4540', lineHeight: 1.7, fontSize: 'clamp(13.5px, 3.6vw, 15px)' }}
              >
                Traditional straight-razor geometry meets contemporary bespoke grooming in Allama Iqbal Town. Steeped eucalyptus hot towels, hospital-grade single-use blades, and tailored tapers crafted for gentlemen of distinction.
              </motion.p>

              {/* Mobile Hero Featured Visual Card (Impressive Mobile Imagery) */}
              <motion.div 
                variants={fadeInUp}
                className="mobile-hero-visual position-relative overflow-hidden mb-3.5 d-block d-lg-none shadow-sm"
                style={{
                  height: 'clamp(210px, 52vw, 290px)',
                  backgroundColor: 'var(--color-espresso)'
                }}
              >
                <img 
                  src="./gallery_atelier_studio.jpg" 
                  alt="Jerry Hair Saloon Atelier" 
                  className="w-100 h-100 mobile-hero-img"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center 40%',
                    filter: 'contrast(106%) brightness(95%)'
                  }}
                  onError={(e) => { e.target.src = './Gemini_Generated_Image_sa2mwssa2mwssa2m.jpg'; }}
                />
                <div 
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background: 'linear-gradient(to top, rgba(36, 33, 30, 0.88) 0%, rgba(36, 33, 30, 0.25) 55%, rgba(36, 33, 30, 0) 100%)',
                    pointerEvents: 'none'
                  }}
                />
                <div className="position-absolute top-0 start-0 m-2.5">
                  <span className="badge bg-espresso text-ivory label-caps px-2.5 py-1.5 shadow-sm" style={{ border: '1px solid rgba(176, 138, 85, 0.4)', fontSize: '9px' }}>
                    <i className="bi bi-geo-alt-fill text-gold me-1"></i> 117 Neelum Block
                  </span>
                </div>
                <div className="position-absolute top-0 end-0 m-2.5">
                  <span className="badge bg-gold text-espresso label-caps px-2.5 py-1.5 fw-bold shadow-sm" style={{ fontSize: '9.5px' }}>
                    <i className="bi bi-star-fill me-1"></i> 4.9 ★ Rating
                  </span>
                </div>
                <div className="position-absolute bottom-0 start-0 end-0 p-3 d-flex justify-content-between align-items-end">
                  <div>
                    <span className="label-caps text-gold d-block mb-1" style={{ fontSize: '9px' }}>FLAGSHIP ATELIER</span>
                    <span className="font-serif text-ivory fw-bold" style={{ fontSize: '15px' }}>Sanctuary of Vintage Grooming</span>
                  </div>
                  <span className="badge bg-card text-espresso label-caps px-2 py-1 shadow-sm d-flex align-items-center gap-1.5" style={{ fontSize: '9px' }}>
                    <span className="pulse-indicator bg-gold"></span> 3 Chairs
                  </span>
                </div>
              </motion.div>

              {/* Desktop CTA Button Group */}
              <motion.div variants={fadeInUp} className="d-none d-md-flex flex-wrap align-items-center gap-2 gap-sm-3">
                <MagneticButton 
                  className="btn btn-gold-primary px-3 px-sm-4 py-2.5 py-sm-3 flex-grow-1 flex-sm-grow-0"
                  onClick={() => {
                    setCurrentTab('booking');
                    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                  }}
                >
                  <i className="bi bi-calendar-check fs-6"></i>
                  <span>Book Appointment</span>
                </MagneticButton>

                <MagneticButton 
                  className="btn btn-heritage-outline px-3 px-sm-4 py-2.5 py-sm-3 flex-grow-1 flex-sm-grow-0"
                  onClick={() => setCurrentTab('services')}
                >
                  <i className="bi bi-card-list fs-6 text-gold"></i>
                  <span>Explore Menu</span>
                </MagneticButton>

                <a 
                  href="tel:+923001234567"
                  className="btn btn-heritage-outline p-2.5 p-sm-3"
                  title="Direct Phone Line"
                  style={{ minWidth: '42px', minHeight: '42px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <i className="bi bi-telephone text-gold"></i>
                </a>
              </motion.div>

              {/* Modern Mobile CTA Button Group */}
              <motion.div variants={fadeInUp} className="d-flex d-md-none flex-column gap-2 w-100">
                <MagneticButton 
                  className="btn btn-gold-primary w-100 py-3 d-flex align-items-center justify-content-center gap-2 shadow-sm"
                  onClick={() => {
                    setCurrentTab('booking');
                    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                  }}
                >
                  <i className="bi bi-calendar-check fs-6"></i>
                  <span className="fw-bold">Reserve Your Chair</span>
                </MagneticButton>

                <div className="d-flex gap-2 w-100">
                  <MagneticButton 
                    className="btn btn-heritage-outline flex-grow-1 py-2.5 d-flex align-items-center justify-content-center gap-1.5"
                    onClick={() => {
                      setCurrentTab('services');
                      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                    }}
                  >
                    <i className="bi bi-card-list text-gold"></i>
                    <span>Explore Menu</span>
                  </MagneticButton>

                  <a 
                    href="tel:+923001234567"
                    className="btn btn-heritage-outline px-3 py-2.5 d-flex align-items-center justify-content-center gap-1.5"
                    title="Call Atelier"
                  >
                    <i className="bi bi-telephone text-gold"></i>
                    <span>Call</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Strip (White Cards on Warm Ivory with Animated Counters) */}
      <section className="border-heritage-bottom bg-ivory py-4">
        <div className="container">
          <motion.div 
            className="row g-2 g-sm-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            <motion.div className="col-6 col-md-3" variants={cardItemAnim}>
              <div className="border-heritage p-2.5 p-sm-3 d-flex align-items-center gap-2 gap-sm-3 bg-card shadow-sm h-100 trust-card">
                <div className="p-1.5 p-sm-2 bg-beige-subtle d-flex align-items-center justify-content-center trust-icon-box flex-shrink-0" style={{ width: '42px', height: '42px' }}>
                  <i className="bi bi-hourglass-split fs-4 text-gold"></i>
                </div>
                <div>
                  <div className="label-caps text-espresso fw-bold">
                    <AnimatedCounter value={8} suffix="+ YEARS" />
                  </div>
                  <div className="body-muted" style={{ fontSize: '12px' }}>Serving Iqbal Town</div>
                </div>
              </div>
            </motion.div>

            <motion.div className="col-6 col-md-3" variants={cardItemAnim}>
              <div className="border-heritage p-2.5 p-sm-3 d-flex align-items-center gap-2 gap-sm-3 bg-card shadow-sm h-100 trust-card">
                <div className="p-1.5 p-sm-2 bg-beige-subtle d-flex align-items-center justify-content-center trust-icon-box flex-shrink-0" style={{ width: '42px', height: '42px' }}>
                  <i className="bi bi-star-fill fs-4 text-gold"></i>
                </div>
                <div>
                  <div className="label-caps text-espresso fw-bold">
                    <AnimatedCounter value={4.9} decimals={1} suffix=" ★ RATING" />
                  </div>
                  <div className="body-muted" style={{ fontSize: '12px' }}>
                    <AnimatedCounter value={1200} suffix="+ Clients" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="col-6 col-md-3" variants={cardItemAnim}>
              <div className="border-heritage p-2.5 p-sm-3 d-flex align-items-center gap-2 gap-sm-3 bg-card shadow-sm h-100 trust-card">
                <div className="p-1.5 p-sm-2 bg-beige-subtle d-flex align-items-center justify-content-center trust-icon-box flex-shrink-0" style={{ width: '42px', height: '42px' }}>
                  <i className="bi bi-scissors fs-4 text-gold"></i>
                </div>
                <div>
                  <div className="label-caps text-espresso fw-bold">MASTER BARBERS</div>
                  <div className="body-muted" style={{ fontSize: '12px' }}>Oiled Blade Precision</div>
                </div>
              </div>
            </motion.div>

            <motion.div className="col-6 col-md-3" variants={cardItemAnim}>
              <div className="border-heritage p-2.5 p-sm-3 d-flex align-items-center gap-2 gap-sm-3 bg-card shadow-sm h-100 trust-card">
                <div className="p-1.5 p-sm-2 bg-beige-subtle d-flex align-items-center justify-content-center trust-icon-box flex-shrink-0" style={{ width: '42px', height: '42px' }}>
                  <i className="bi bi-door-open-fill fs-4 text-gold"></i>
                </div>
                <div>
                  <div className="label-caps text-espresso fw-bold">10 AM – 11 PM</div>
                  <div className="body-muted" style={{ fontSize: '12px' }}>Open All 7 Days</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Studio Location & Directions Card */}
      <section className="py-5 bg-ivory">
        <div className="container">
          <div className="border-heritage p-3 p-sm-4 p-md-5 bg-card shadow-sm position-relative">
            <div className="row align-items-center g-4">
              <div className="col-12 col-md-8">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="label-caps text-gold fw-bold">Flagship Studio Atelier</span>
                  <span className="badge bg-espresso text-ivory label-caps py-1 px-2">Now Active</span>
                </div>
                <h2 className="headline-serif text-espresso fs-4 fs-md-3 mb-2">
                  117 Neelum Block, Allama Iqbal Town, Lahore
                </h2>
                <p className="body-muted mb-0">
                  Located right in the prime district of Iqbal Town, adjacent to Moon Market Hub. Features 5 dedicated master barbering stations, private scalp therapy suite, and client parking.
                </p>
              </div>

              <div className="col-12 col-md-4 d-flex flex-wrap flex-md-column gap-2 justify-content-md-end">
                <a 
                  href="https://maps.google.com/?q=117+Neelum+Block+Iqbal+Town+Lahore" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-gold-primary w-100"
                >
                  <i className="bi bi-geo-alt-fill"></i>
                  <span>Get Directions</span>
                </a>
                <a 
                  href="tel:+923001234567" 
                  className="btn btn-heritage-outline w-100"
                >
                  <i className="bi bi-headset text-gold"></i>
                  <span>Call Concierge</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Signature Services (White Cards on Warm Ivory) */}
      <section className="py-5 bg-beige-subtle border-heritage-top border-heritage-bottom">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4">
            <div>
              <span className="label-caps text-gold fw-bold">Couture Service Menu</span>
              <h2 className="display-title text-espresso fs-2 mb-0">Signature Grooming</h2>
            </div>
            <button 
              className="btn btn-heritage-outline btn-heritage-sm mt-3 mt-md-0"
              onClick={() => setCurrentTab('services')}
            >
              <span>View All Services</span>
              <i className="bi bi-arrow-right text-gold"></i>
            </button>
          </div>

          <motion.div 
            className="row g-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            {featuredServices.map((service) => (
              <motion.div key={service.id} className="col-12 col-md-6 col-lg-3" variants={cardItemAnim}>
                <div className="service-card h-100">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="label-caps text-muted-heritage">{service.categoryLabel}</span>
                      {service.badge && (
                        <span className="badge bg-espresso text-ivory label-caps px-2 py-1">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="headline-serif text-espresso fs-5 mb-2">
                      {service.name}
                    </h3>
                    <p className="body-muted mb-3" style={{ fontSize: '13px' }}>
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-3 border-heritage-top">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <span className="label-caps text-muted-heritage d-block" style={{ fontSize: '10px' }}>
                          <i className="bi bi-clock text-gold me-1"></i>{service.duration}
                        </span>
                        <span className="headline-serif text-espresso fs-5 fw-bold">
                          PKR {service.price.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <MagneticButton 
                      className="btn btn-gold-primary btn-heritage-sm w-100"
                      onClick={() => {
                        onSelectService(service);
                        setCurrentTab('booking');
                        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                      }}
                    >
                      <i className="bi bi-calendar-plus"></i>
                      <span>Book</span>
                    </MagneticButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet the Master Barbers */}
      <section className="py-5 bg-ivory">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4">
            <div>
              <span className="label-caps text-gold fw-bold">Craft Specialists</span>
              <h2 className="display-title text-espresso fs-2 mb-0">Our Master Barbers</h2>
            </div>
            <p className="body-muted mb-0 d-none d-md-block" style={{ maxWidth: '420px' }}>
              Hand-honed straight razors and surgical discipline across three dedicated specialist chairs.
            </p>
          </div>

          <motion.div 
            className="row g-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            {barbersData.map((barber) => (
              <motion.div key={barber.id} className="col-12 col-md-4" variants={cardItemAnim}>
                <div className="barber-card h-100 d-flex flex-column justify-content-between p-0 overflow-hidden">
                  <div>
                    {/* Master Barber Portrait */}
                    <div className="position-relative overflow-hidden" style={{ height: 'clamp(280px, 60vw, 380px)', backgroundColor: 'var(--color-beige)' }}>
                      <img 
                        src={barber.avatar} 
                        alt={barber.name} 
                        className="w-100 h-100"
                        style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'contrast(104%) brightness(99%)', transition: 'transform 0.5s ease' }}
                        onError={(e) => { e.target.src = barber.fallbackAvatar; }}
                      />
                      <div className="position-absolute top-0 end-0 m-3 px-2 py-1 bg-card border-heritage shadow-sm">
                        <span className="label-caps text-espresso fw-bold" style={{ fontSize: '10px' }}>
                          <i className="bi bi-star-fill text-gold me-1"></i>{barber.rating}
                        </span>
                      </div>
                      <div className="position-absolute bottom-0 start-0 m-3 px-2 py-1 bg-espresso text-ivory border-dark-section">
                        <span className="label-caps text-ivory" style={{ fontSize: '10px' }}>{barber.chair}</span>
                      </div>
                    </div>

                    <div className="p-3 p-md-4">
                      <div className="d-flex justify-content-between align-items-baseline mb-1">
                        <h3 className="headline-serif text-espresso fs-4 mb-0">{barber.name}</h3>
                        <span className="label-caps text-muted-heritage" style={{ fontSize: '10px' }}>{barber.experience}</span>
                      </div>
                      <span className="label-caps text-gold fw-bold d-block mb-2">
                        {barber.role}
                      </span>
                      <p className="body-muted fs-6 mb-0">
                        {barber.specialty}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 p-md-4 pt-0">
                    <MagneticButton 
                      className="btn btn-heritage-outline btn-heritage-sm w-100"
                      onClick={() => {
                        onSelectBarber(barber);
                        setCurrentTab('booking');
                        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                      }}
                    >
                      <span>Book With {barber.name}</span>
                      <i className="bi bi-arrow-right text-gold"></i>
                    </MagneticButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Atmosphere & Sterilization Protocol Showcase */}
      <section className="py-5 bg-beige-subtle border-heritage-top border-heritage-bottom">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-12 col-lg-6">
              <div className="border-heritage overflow-hidden position-relative shadow-sm" style={{ height: 'clamp(240px, 50vw, 380px)' }}>
                <img 
                  src="./barber 2.jpg" 
                  alt="Jerry Hair Saloon Interior Studio" 
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', filter: 'contrast(105%) brightness(95%)' }}
                  onError={(e) => {
                    e.target.src = './barber 2.jpg';
                  }}
                />
                <div className="position-absolute top-0 start-0 m-3 px-3 py-1 bg-card border-heritage shadow-sm">
                  <span className="label-caps text-espresso fw-bold">The Jerry Experience</span>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <span className="label-caps text-gold fw-bold">The Atelier Standard</span>
              <h2 className="display-title text-espresso fs-2 mb-3">
                Uncompromising Hygiene &amp; Vintage Comfort
              </h2>
              <p className="body-muted mb-4" style={{ lineHeight: 1.7 }}>
                Step into a welcoming grooming sanctuary. Restored hydraulic recliners from vintage barber heritage paired with medical-grade ultraviolet sterilizers and single-use Japanese blades.
              </p>

              <div className="row g-3 mb-4">
                <div className="col-4">
                  <div className="border-heritage p-3 text-center bg-card shadow-sm h-100">
                    <i className="bi bi-shield-check fs-4 text-gold d-block mb-1"></i>
                    <span className="label-caps text-espresso" style={{ fontSize: '10px' }}>
                      UV Sanitized
                    </span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border-heritage p-3 text-center bg-card shadow-sm h-100">
                    <i className="bi bi-droplet fs-4 text-gold d-block mb-1"></i>
                    <span className="label-caps text-espresso" style={{ fontSize: '10px' }}>
                      Single Blades
                    </span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="border-heritage p-3 text-center bg-card shadow-sm h-100">
                    <i className="bi bi-cup-hot fs-4 text-gold d-block mb-1"></i>
                    <span className="label-caps text-espresso" style={{ fontSize: '10px' }}>
                      House Brew
                    </span>
                  </div>
                </div>
              </div>

              <MagneticButton 
                className="btn btn-heritage-outline"
                onClick={() => setCurrentTab('gallery')}
              >
                <i className="bi bi-images text-gold"></i>
                <span>Explore Studio Gallery</span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Espresso Section: VIP Club Privilege (Dramatic Luxury Contrast) */}
      <section className="py-5 bg-espresso position-relative overflow-hidden">
        <ParallaxBox speed={0.15} className="position-absolute end-0 top-0 bottom-0 col-6 d-none d-lg-block opacity-10 pointer-events-none">
          <i className="bi bi-scissors" style={{ fontSize: '320px', color: 'var(--color-gold)', position: 'absolute', right: '-40px', top: '10%' }}></i>
        </ParallaxBox>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="border-dark-section p-3 p-sm-4 p-md-5 position-relative overflow-hidden" style={{ backgroundColor: '#2E2B27' }}>
            <div className="row align-items-center">
              <div className="col-12 col-lg-8">
                <span className="badge bg-gold text-espresso label-caps py-1 px-2 mb-2 fw-bold">
                  8th Anniversary Privilege
                </span>
                <h2 className="headline-serif text-ivory fs-3 mb-2">
                  Jerry VIP Club • Neelum Block Resident Pass
                </h2>
                <p className="body-muted mb-0" style={{ color: '#D9D0C2' }}>
                  Exclusive grooming privileges for Allama Iqbal Town residents. Enjoy 20% off all scalp therapies, priority chair reservation during weekend peak hours, and quarterly complimentary beard detailing.
                </p>
              </div>
              <div className="col-12 col-lg-4 text-lg-end mt-4 mt-lg-0">
                <MagneticButton 
                  className="btn btn-gold-primary px-4 py-3"
                  onClick={onOpenVipModal}
                >
                  <i className="bi bi-ticket-perforated"></i>
                  <span>Claim Resident Pass</span>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Client Testimonials */}
      <section className="py-5 bg-ivory">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <span className="label-caps text-gold fw-bold">Verified Testimonials</span>
              <h2 className="display-title text-espresso fs-2 mb-0">Client Dossier</h2>
            </div>
            <div className="d-flex align-items-center gap-1 text-espresso">
              <span className="headline-serif fs-4 fw-bold">4.9</span>
              <div className="text-gold small">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
          </div>

          <motion.div 
            className="row g-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            {reviewsData.map((review) => (
              <motion.div key={review.id} className="col-12 col-md-4" variants={cardItemAnim}>
                <div className="border-heritage p-3 p-sm-4 bg-card shadow-sm h-100 d-flex flex-column justify-content-between review-card">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="text-gold small">
                        {[...Array(review.rating)].map((_, i) => (
                          <i key={i} className="bi bi-star-fill me-1"></i>
                        ))}
                      </div>
                      <span className="label-caps text-muted-heritage" style={{ fontSize: '10px' }}>
                        {review.date}
                      </span>
                    </div>

                    <p className="body-muted fs-6 mb-3 fst-italic">
                      "{review.comment}"
                    </p>
                  </div>

                  <div className="pt-2 border-heritage-top">
                    <span className="label-caps text-espresso fw-bold d-block">{review.name}</span>
                    <span className="body-muted" style={{ fontSize: '12px' }}>
                      {review.role} • <span className="text-gold">{review.service}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
