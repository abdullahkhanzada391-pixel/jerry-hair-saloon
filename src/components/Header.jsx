import React, { useState, useEffect } from 'react';
import { MagneticButton, motion, AnimatePresence, easeLuxury } from '../animations/motion';

export default function Header({ currentTab, setCurrentTab, onOpenQuickBook, onOpenVipModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tab) => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`sticky-top border-heritage-bottom ${isScrolled ? 'header-scrolled shadow-sm' : ''}`} 
      style={{ 
        backgroundColor: isScrolled ? 'rgba(11, 11, 11, 0.96)' : 'rgba(11, 11, 11, 0.90)', 
        backdropFilter: 'blur(20px)', 
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--color-border)',
        boxShadow: isScrolled ? '0 4px 24px rgba(0, 0, 0, 0.85), 0 1px 0 rgba(200, 164, 93, 0.2)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
        zIndex: 1030 
      }}
    >
      <div className="container-fluid px-2 px-sm-3 px-lg-5 py-2 py-sm-3 d-flex align-items-center justify-content-between">
        {/* Brand Logo & Heritage Title */}
        <div 
          className="d-flex align-items-center gap-2 gap-sm-3 cursor-pointer" 
          onClick={() => handleNavClick('home')}
          style={{ cursor: 'pointer' }}
        >
          {/* Elegant Monogram */}
          <div 
            className="d-flex align-items-center justify-content-center border-heritage monogram-box flex-shrink-0" 
            style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: '#1B1B1B',
              borderColor: 'rgba(200, 164, 93, 0.4)',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
            }}
          >
            <i className="bi bi-scissors fs-5 text-gold"></i>
          </div>
          
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center gap-1 gap-sm-2">
              <span 
                className="font-serif fw-bold text-ivory text-uppercase header-brand-title fs-5" 
                style={{ letterSpacing: '0.06em', whiteSpace: 'nowrap' }}
              >
                Jerry Hair Saloon
              </span>
              <span className="label-caps d-none d-md-inline text-muted-heritage" style={{ opacity: 0.8 }}>
                | Heritage Atelier
              </span>
            </div>
            <span className="label-caps text-muted-heritage header-sub-title" style={{ fontSize: '10px' }}>
              Est. 8 Years • 117 Neelum Block, Iqbal Town
            </span>
          </div>
        </div>

        {/* Desktop Navigation Tabs */}
        <nav className="d-none d-lg-flex align-items-center gap-2">
          <button 
            className={`nav-tab-link ${currentTab === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            <i className="bi bi-house-door text-gold"></i>
            <span>Home</span>
          </button>
          <button 
            className={`nav-tab-link ${currentTab === 'services' ? 'active' : ''}`}
            onClick={() => handleNavClick('services')}
          >
            <i className="bi bi-scissors text-gold"></i>
            <span>Services</span>
          </button>
          <button 
            className={`nav-tab-link ${currentTab === 'gallery' ? 'active' : ''}`}
            onClick={() => handleNavClick('gallery')}
          >
            <i className="bi bi-camera text-gold"></i>
            <span>Gallery</span>
          </button>
          <button 
            className={`nav-tab-link ${currentTab === 'booking' ? 'active' : ''}`}
            onClick={() => handleNavClick('booking')}
          >
            <i className="bi bi-calendar-check text-gold"></i>
            <span>Book Chair</span>
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="d-flex align-items-center gap-1.5 gap-sm-2">
          <MagneticButton 
            className="btn btn-heritage-outline btn-heritage-sm d-none d-md-inline-flex"
            onClick={onOpenVipModal}
            title="Jerry VIP Club Privilege"
          >
            <i className="bi bi-award text-gold"></i>
            <span className="d-none d-xl-inline">VIP Club</span>
          </MagneticButton>

          <a 
            href="tel:+923001234567" 
            className="btn btn-heritage-outline btn-heritage-sm p-2 px-sm-3"
            title="Call Barber Desk"
          >
            <i className="bi bi-telephone-fill text-gold"></i>
            <span className="d-none d-md-inline ms-1">+92 300 1234567</span>
          </a>

          {/* Prominent Gold Book Chair CTA */}
          <MagneticButton 
            className="btn btn-gold-primary btn-heritage-sm px-2 px-sm-3"
            onClick={() => handleNavClick('booking')}
          >
            <i className="bi bi-calendar-event me-sm-1"></i>
            <span className="d-none d-sm-inline">Book Chair</span>
            <span className="d-inline d-sm-none">Book</span>
          </MagneticButton>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            className="btn btn-heritage-outline btn-heritage-sm d-lg-none p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{ width: '38px', height: '38px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'} fs-5 text-gold`}></i>
          </button>
        </div>
      </div>

      {/* Expandable Mobile Navigation Menu Drawer with Frosted Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <React.Fragment key="mobile-drawer-wrapper">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="position-fixed w-100 h-100 d-lg-none"
              style={{ 
                top: '56px', 
                left: 0, 
                right: 0, 
                bottom: 0, 
                backgroundColor: 'rgba(0, 0, 0, 0.75)', 
                zIndex: 1025,
                backdropFilter: 'blur(6px)'
              }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: easeLuxury }}
              className="mobile-header-menu border-heritage-top overflow-hidden d-lg-none position-relative"
              style={{ zIndex: 1030 }}
            >
              <div className="container py-3">
                <div className="d-flex flex-column gap-1.5 mb-3">
                  <button
                    className={`mobile-menu-link ${currentTab === 'home' ? 'active' : ''}`}
                    onClick={() => handleNavClick('home')}
                  >
                    <span className="d-flex align-items-center">
                      <i className="bi bi-house-door text-gold me-2.5 fs-5"></i>
                      <span className="fw-medium">Studio Overview</span>
                    </span>
                    {currentTab === 'home' ? (
                      <span className="badge bg-gold text-espresso label-caps py-0.5 px-2">Active</span>
                    ) : (
                      <i className="bi bi-chevron-right text-muted-heritage" style={{ fontSize: '12px' }}></i>
                    )}
                  </button>

                  <button
                    className={`mobile-menu-link ${currentTab === 'services' ? 'active' : ''}`}
                    onClick={() => handleNavClick('services')}
                  >
                    <span className="d-flex align-items-center">
                      <i className="bi bi-scissors text-gold me-2.5 fs-5"></i>
                      <span className="fw-medium">Services &amp; Rituals Menu</span>
                    </span>
                    {currentTab === 'services' ? (
                      <span className="badge bg-gold text-espresso label-caps py-0.5 px-2">Active</span>
                    ) : (
                      <i className="bi bi-chevron-right text-muted-heritage" style={{ fontSize: '12px' }}></i>
                    )}
                  </button>

                  <button
                    className={`mobile-menu-link ${currentTab === 'gallery' ? 'active' : ''}`}
                    onClick={() => handleNavClick('gallery')}
                  >
                    <span className="d-flex align-items-center">
                      <i className="bi bi-camera text-gold me-2.5 fs-5"></i>
                      <span className="fw-medium">Studio Gallery &amp; Archive</span>
                    </span>
                    {currentTab === 'gallery' ? (
                      <span className="badge bg-gold text-espresso label-caps py-0.5 px-2">Active</span>
                    ) : (
                      <i className="bi bi-chevron-right text-muted-heritage" style={{ fontSize: '12px' }}></i>
                    )}
                  </button>

                  <button
                    className={`mobile-menu-link ${currentTab === 'booking' ? 'active' : ''}`}
                    onClick={() => handleNavClick('booking')}
                  >
                    <span className="d-flex align-items-center">
                      <i className="bi bi-calendar-check text-gold me-2.5 fs-5"></i>
                      <span className="fw-medium">Reserve Chair &amp; Barber</span>
                    </span>
                    {currentTab === 'booking' ? (
                      <span className="badge bg-gold text-espresso label-caps py-0.5 px-2">Active</span>
                    ) : (
                      <i className="bi bi-chevron-right text-muted-heritage" style={{ fontSize: '12px' }}></i>
                    )}
                  </button>
                </div>

                {/* VIP Club Privilege & Concierge Inside Mobile Menu */}
                <div className="pt-2 border-heritage-top d-flex flex-column gap-2">
                  <button
                    className="btn btn-espresso-primary w-100 justify-content-between py-2.5 px-3"
                    onClick={() => {
                      onOpenVipModal();
                      setMobileMenuOpen(false);
                    }}
                  >
                    <span className="d-flex align-items-center gap-2">
                      <i className="bi bi-award text-gold"></i>
                      <span className="fw-bold">VIP Resident Pass (20% Off)</span>
                    </span>
                    <i className="bi bi-arrow-right text-gold"></i>
                  </button>

                  <a
                    href="tel:+923001234567"
                    className="btn btn-heritage-outline w-100 justify-content-center py-2.5 px-3"
                  >
                    <i className="bi bi-telephone-fill text-gold me-2"></i>
                    <span>Call Concierge: +92 300 1234567</span>
                  </a>

                  <div className="text-center pt-2">
                    <span className="label-caps text-muted-heritage" style={{ fontSize: '10px' }}>
                      Open 10:00 AM – 11:00 PM • 117 Neelum Block, Iqbal Town
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </React.Fragment>
        )}
      </AnimatePresence>
    </header>
  );
}
