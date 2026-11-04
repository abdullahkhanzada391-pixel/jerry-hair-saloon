import React from 'react';
import { motion } from '../animations/motion';

export default function BottomNav({ currentTab, setCurrentTab }) {
  const handleNavClick = (tab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: 'bi-house-door' },
    { id: 'services', label: 'Services', icon: 'bi-scissors' },
    { id: 'gallery', label: 'Gallery', icon: 'bi-camera' },
    { id: 'booking', label: 'Book Chair', icon: 'bi-calendar-check' }
  ];

  return (
    <nav className="mobile-bottom-nav d-lg-none" aria-label="Mobile Bottom Navigation">
      {navItems.map((item) => {
        const isActive = currentTab === item.id;
        return (
          <motion.button
            key={item.id}
            type="button"
            className={`mobile-nav-item ${isActive ? 'active' : ''}`}
            onClick={() => handleNavClick(item.id)}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.12 }}
          >
            <i className={`bi ${item.icon}`}></i>
            <span>{item.label}</span>
          </motion.button>
        );
      })}
    </nav>
  );
}
