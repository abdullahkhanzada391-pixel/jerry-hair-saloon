import React from 'react';

export default function BottomNav({ currentTab, setCurrentTab }) {
  return (
    <nav className="mobile-bottom-nav d-lg-none">
      <button 
        className={`mobile-nav-item ${currentTab === 'home' ? 'active' : ''}`}
        onClick={() => setCurrentTab('home')}
      >
        <i className="bi bi-house-door"></i>
        <span>Home</span>
      </button>

      <button 
        className={`mobile-nav-item ${currentTab === 'services' ? 'active' : ''}`}
        onClick={() => setCurrentTab('services')}
      >
        <i className="bi bi-scissors"></i>
        <span>Services</span>
      </button>

      <button 
        className={`mobile-nav-item ${currentTab === 'gallery' ? 'active' : ''}`}
        onClick={() => setCurrentTab('gallery')}
      >
        <i className="bi bi-camera"></i>
        <span>Gallery</span>
      </button>

      <button 
        className={`mobile-nav-item ${currentTab === 'booking' ? 'active' : ''}`}
        onClick={() => setCurrentTab('booking')}
      >
        <i className="bi bi-calendar-check"></i>
        <span>Book</span>
      </button>
    </nav>
  );
}
