import React, { useState, useMemo } from 'react';
import { servicesData, serviceCategories } from '../data/services';
import { motion, AnimatePresence, staggerContainer, cardItemAnim, MagneticButton } from '../animations/motion';

export default function Services({ selectedServices, onToggleService, onProceedToBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered services
  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Compute total price
  const totalPrice = useMemo(() => {
    return selectedServices.reduce((sum, item) => sum + item.price, 0);
  }, [selectedServices]);

  return (
    <div className="services-view py-5 bg-ivory">
      <div className="container">
        {/* Header Strip */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4 pb-3 border-heritage-bottom">
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <span className="label-caps text-gold fw-bold">Jerry Hair Saloon • Neelum Block</span>
              <span className="badge bg-espresso text-ivory label-caps px-2 py-0.5">3 Chairs Active</span>
            </div>
            <h1 className="display-title text-espresso fs-2 mb-1">The Craftsman Ledger</h1>
            <p className="body-muted mb-0">
              Master grooming rituals performed with Japanese surgical steel, hot eucalyptus towels, and bespoke apothecary formulations.
            </p>
          </div>
          <span className="label-caps text-muted-heritage mt-2 mt-md-0">
            Est. 2016 • Allama Iqbal Town
          </span>
        </div>

        {/* Sterilization & Tool Hygiene Protocol Card */}
        <div className="border-heritage p-3 p-sm-4 bg-card mb-4 mb-sm-5 shadow-sm position-relative overflow-hidden">
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-8">
              <div className="d-flex align-items-center gap-2 mb-1">
                <i className="bi bi-shield-check text-gold fs-5"></i>
                <span className="label-caps text-espresso fw-bold">STERILIZATION PROTOCOL</span>
              </div>
              <h3 className="headline-serif text-espresso fs-4 mb-2">Hospital-Grade Blade &amp; Tool Hygiene</h3>
              <p className="body-muted mb-3" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                Every customer receives a brand new, sealed single-use surgical razor blade opened right in front of them. Clippers and shears undergo medical ultraviolet autoclaving between appointments.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <span className="label-caps text-espresso d-flex align-items-center gap-1">
                  <i className="bi bi-check-circle-fill text-gold"></i> Single-Use Razors
                </span>
                <span className="label-caps text-espresso d-flex align-items-center gap-1">
                  <i className="bi bi-check-circle-fill text-gold"></i> 70% Isopropyl Prep
                </span>
                <span className="label-caps text-espresso d-flex align-items-center gap-1">
                  <i className="bi bi-check-circle-fill text-gold"></i> Uppercut Deluxe Clays
                </span>
              </div>
            </div>
            <div className="col-12 col-md-4 text-md-end">
              <div className="border-heritage d-inline-block overflow-hidden shadow-sm" style={{ width: '140px', height: '110px' }}>
                <img
                  src="./barber 3.jpg"
                  alt="Sterilized Tools"
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', filter: 'contrast(105%)' }}
                  onError={(e) => {
                    e.target.src = './barber 3.jpg';
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Filter Chips & Search Bar */}
        <div className="row g-3 align-items-center mb-4">
          <div className="col-12 col-lg-8">
            <div className="d-flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  className={`chip-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="input-group">
              <span className="input-group-text bg-card border-heritage text-gold">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control heritage-input"
                placeholder="Search services, fades, spas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="btn btn-heritage-outline btn-heritage-sm"
                  onClick={() => setSearchQuery('')}
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Clean White Services List Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-5 border-heritage bg-card shadow-sm">
            <i className="bi bi-search fs-1 text-gold mb-2 d-block"></i>
            <h4 className="headline-serif text-espresso">No services found</h4>
            <p className="body-muted mb-3">Try adjusting your search or category filter.</p>
            <button
              className="btn btn-heritage-outline btn-heritage-sm"
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div 
            layout
            className="row g-4"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {filteredServices.map((service) => {
              const isSelected = selectedServices.some(item => item.id === service.id);

              return (
                <motion.div 
                  layout
                  key={service.id} 
                  className="col-12 col-md-6 col-lg-4"
                  variants={cardItemAnim}
                >
                  <div className={`service-card h-100 ${isSelected ? 'selected' : ''}`}>
                    <div>
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <span className="label-caps text-muted-heritage">{service.categoryLabel}</span>
                        {service.badge && (
                          <span className="badge bg-espresso text-ivory label-caps px-2 py-0.5">
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

                      {/* Inclusions List */}
                      {service.includes && (
                        <div className="p-2 bg-beige-subtle border-heritage mb-3">
                          <span className="label-caps text-espresso fw-bold d-block mb-1" style={{ fontSize: '9px' }}>
                            Ritual Protocol:
                          </span>
                          <div className="row g-1">
                            {service.includes.map((inc, i) => (
                              <div key={i} className="col-12 col-sm-6">
                                <span className="label-caps text-espresso d-flex align-items-center gap-1" style={{ fontSize: '10px' }}>
                                  <i className="bi bi-check text-gold"></i> {inc}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-heritage-top">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                          <span className="label-caps text-muted-heritage d-block" style={{ fontSize: '10px' }}>
                            <i className="bi bi-clock text-gold me-1"></i>{service.duration}
                          </span>
                          <span className="headline-serif text-espresso fs-4 fw-bold">
                            PKR {service.price.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <MagneticButton
                        className={`btn w-100 ${isSelected ? 'btn-gold-primary' : 'btn-heritage-outline'} btn-heritage-sm`}
                        onClick={() => onToggleService(service)}
                      >
                        <i className={`bi ${isSelected ? 'bi-check-lg' : 'bi-plus-lg'} ${isSelected ? '' : 'text-gold'}`}></i>
                        <span>{isSelected ? 'Service Selected' : 'Add to Dossier'}</span>
                      </MagneticButton>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Walk-in & Appointment Policy */}
        <div className="mt-4 mt-sm-5 border-heritage p-3 p-sm-4 bg-card shadow-sm">
          <div className="d-flex align-items-center gap-2 mb-2">
            <i className="bi bi-info-circle text-gold fs-5"></i>
            <span className="label-caps text-espresso fw-bold">Walk-in &amp; Priority Booking Protocol</span>
          </div>
          <p className="body-muted mb-0" style={{ fontSize: '13px', lineHeight: 1.6 }}>
            Appointments are held for up to 10 minutes past reservation time. Walk-ins are accommodated continuously upon chair availability. No cancellation fee applies. Cash, JazzCash, and Easypaisa accepted at the checkout desk.
          </p>
        </div>
      </div>

      {/* Floating Sticky Cart Drawer with AnimatePresence */}
      <AnimatePresence>
        {selectedServices.length > 0 && (
          <motion.div 
            className="sticky-cart-bar"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 220 }}
          >
            <div className="container">
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-stretch align-items-sm-center gap-2 gap-sm-3">
                <div>
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span className="pulse-indicator bg-gold"></span>
                    <span className="label-caps text-ivory fw-bold">
                      {selectedServices.length} {selectedServices.length === 1 ? 'Service' : 'Services'} Selected
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="headline-serif text-gold fs-4 fw-bold">
                      PKR {totalPrice.toLocaleString()}
                    </span>
                    <span className="label-caps text-ivory d-none d-md-inline" style={{ opacity: 0.85 }}>
                      ({selectedServices.map(s => s.name).join(', ')})
                    </span>
                  </div>
                </div>

                <div className="d-flex gap-2 w-100 w-sm-auto">
                  <button
                    className="btn btn-gold-outline btn-heritage-sm flex-shrink-0"
                    onClick={() => onToggleService('clear_all')}
                  >
                    Clear
                  </button>
                  <MagneticButton
                    className="btn btn-gold-primary btn-heritage-sm px-3 px-sm-4 flex-grow-1"
                    onClick={() => {
                      onProceedToBooking();
                      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                    }}
                  >
                    <span>Proceed to Book Chair</span>
                    <i className="bi bi-arrow-right ms-1"></i>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
