import React from 'react';
import { MagneticButton } from '../animations/motion';

export default function Header({ currentTab, setCurrentTab, onOpenQuickBook, onOpenVipModal }) {
  return (
    <header 
      className="sticky-top border-heritage-bottom" 
      style={{ 
        backgroundColor: 'rgba(243, 239, 230, 0.95)', 
        backdropFilter: 'blur(16px)', 
        zIndex: 1030 
      }}
    >
      <div className="container-fluid px-3 px-lg-5 py-3 d-flex align-items-center justify-content-between">
        {/* Brand Logo & Heritage Title */}
        <div 
          className="d-flex align-items-center gap-3 cursor-pointer" 
          onClick={() => setCurrentTab('home')}
          style={{ cursor: 'pointer' }}
        >
          {/* Elegant Monogram */}
          <div 
            className="d-flex align-items-center justify-content-center border-heritage" 
            style={{ 
              width: '44px', 
              height: '44px', 
              backgroundColor: 'var(--color-espresso)',
              boxShadow: '0 2px 8px rgba(36, 33, 30, 0.12)'
            }}
          >
            <i className="bi bi-scissors fs-5 text-gold"></i>
          </div>
          
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center gap-2">
              <span 
                className="font-serif fw-bold text-espresso text-uppercase fs-5" 
                style={{ letterSpacing: '0.08em' }}
              >
                Jerry Hair Saloon
              </span>
              <span className="label-caps d-none d-md-inline text-muted-heritage" style={{ opacity: 0.8 }}>
                | Heritage Atelier
              </span>
            </div>
            <span className="label-caps text-muted-heritage" style={{ fontSize: '10px' }}>
              Est. 8 Years • 117 Neelum Block, Iqbal Town
            </span>
          </div>
        </div>

        {/* Desktop Navigation Tabs */}
        <nav className="d-none d-lg-flex align-items-center gap-2">
          <button 
            className={`nav-tab-link ${currentTab === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentTab('home')}
          >
            <i className="bi bi-house-door text-gold"></i>
            <span>Home</span>
          </button>
          <button 
            className={`nav-tab-link ${currentTab === 'services' ? 'active' : ''}`}
            onClick={() => setCurrentTab('services')}
          >
            <i className="bi bi-scissors text-gold"></i>
            <span>Services</span>
          </button>
          <button 
            className={`nav-tab-link ${currentTab === 'gallery' ? 'active' : ''}`}
            onClick={() => setCurrentTab('gallery')}
          >
            <i className="bi bi-camera text-gold"></i>
            <span>Gallery</span>
          </button>
          <button 
            className={`nav-tab-link ${currentTab === 'booking' ? 'active' : ''}`}
            onClick={() => setCurrentTab('booking')}
          >
            <i className="bi bi-calendar-check text-gold"></i>
            <span>Book Chair</span>
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="d-flex align-items-center gap-2">
          <MagneticButton 
            className="btn btn-heritage-outline btn-heritage-sm d-none d-sm-inline-flex"
            onClick={onOpenVipModal}
            title="Jerry VIP Club Privilege"
          >
            <i className="bi bi-award text-gold"></i>
            <span className="d-none d-xl-inline">VIP Club</span>
          </MagneticButton>

          <a 
            href="tel:+923001234567" 
            className="btn btn-heritage-outline btn-heritage-sm"
            title="Call Barber Desk"
          >
            <i className="bi bi-telephone-fill text-gold"></i>
            <span className="d-none d-md-inline ms-1">+92 300 1234567</span>
          </a>

          {/* Prominent Gold Book Chair CTA */}
          <MagneticButton 
            className="btn btn-gold-primary btn-heritage-sm px-3"
            onClick={() => setCurrentTab('booking')}
          >
            <i className="bi bi-calendar-event"></i>
            <span>Book Chair</span>
          </MagneticButton>
        </div>
      </div>
    </header>
  );
}
