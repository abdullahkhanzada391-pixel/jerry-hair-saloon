import React from 'react';

export default function BottomNav({ currentTab, setCurrentTab }) {
  const handleNavClick = (tab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <nav className="mobile-bottom-nav d-lg-none" aria-label="Mobile Bottom Navigation">
      <button 
        type="button"
        className={`mobile-nav-item ${currentTab === 'home' ? 'active' : ''}`}
        onClick={() => handleNavClick('home')}
      >
        <i className="bi bi-house-door"></i>
        <span>Home</span>
      </button>

      <button 
        type="button"
        className={`mobile-nav-item ${currentTab === 'services' ? 'active' : ''}`}
        onClick={() => handleNavClick('services')}
      >
        <i className="bi bi-scissors"></i>
        <span>Services</span>
      </button>

      <button 
        type="button"
        className={`mobile-nav-item ${currentTab === 'gallery' ? 'active' : ''}`}
        onClick={() => handleNavClick('gallery')}
      >
        <i className="bi bi-camera"></i>
        <span>Gallery</span>
      </button>

      <button 
        type="button"
        className={`mobile-nav-item ${currentTab === 'booking' ? 'active' : ''}`}
        onClick={() => handleNavClick('booking')}
      >
        <i className="bi bi-calendar-check"></i>
        <span>Book</span>
      </button>
    </nav>
  );
}
