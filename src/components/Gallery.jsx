import React, { useState, useMemo } from 'react';
import { galleryData, galleryCategories } from '../data/gallery';
import { motion, staggerContainer, cardItemAnim, MagneticButton } from '../animations/motion';

export default function Gallery({ onSelectImage, onRequestCut }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return galleryData;
    return galleryData.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="gallery-view py-5 bg-ivory">
      <div className="container">
        {/* Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4 pb-3 border-heritage-bottom">
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <span className="label-caps text-gold fw-bold">Archive • Vol. VIII</span>
              <span className="badge bg-espresso text-ivory label-caps px-2 py-0.5">5 Chair Station</span>
            </div>
            <h1 className="display-title text-espresso fs-2 mb-1">Craftsmanship In Focus</h1>
            <p className="body-muted mb-0">
              Celebrating 8 years of surgical razor craft, tailored tapers, and sanctuary grooming in Neelum Block.
            </p>
          </div>
          <span className="label-caps text-muted-heritage mt-2 mt-md-0">
            {filteredItems.length} Photographs Documented
          </span>
        </div>

        {/* Filter Chips */}
        <div className="d-flex gap-2 overflow-x-auto no-scrollbar pb-1 mb-4">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              className={`chip-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid with Framer Motion Stagger */}
        <motion.div 
          layout
          className="row g-4"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {filteredItems.map((item) => (
            <motion.div 
              layout
              key={item.id} 
              className="col-12 col-md-6 col-lg-4"
              variants={cardItemAnim}
            >
              <div 
                className="gallery-card h-100 portfolio-card"
                onClick={() => onSelectImage(item)}
              >
                <div className="img-wrapper position-relative">
                  {item.video ? (
                    <div className="position-relative w-100 h-100" style={{ minHeight: '220px', backgroundColor: '#1A1816' }}>
                      <video 
                        src={item.video} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        poster={item.image}
                        className="w-100 h-100"
                        style={{ objectFit: 'cover', display: 'block' }}
                      />
                      <div className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center rounded-circle shadow-lg" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(36, 33, 30, 0.78)', border: '1.5px solid var(--color-gold)', backdropFilter: 'blur(4px)' }}>
                        <i className="bi bi-play-fill text-gold fs-4" style={{ marginLeft: '3px' }}></i>
                      </div>
                    </div>
                  ) : (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      style={{ filter: 'contrast(105%) brightness(98%)' }}
                      onError={(e) => { e.target.src = item.fallback; }}
                    />
                  )}
                  <div className="position-absolute top-0 start-0 m-3 px-2 py-1 bg-card border-heritage shadow-sm">
                    <span className="label-caps text-espresso fw-bold" style={{ fontSize: '10px' }}>
                      {item.tag}
                    </span>
                  </div>

                  <div className="position-absolute bottom-0 end-0 m-3 px-2 py-1 bg-espresso text-ivory border-dark-section d-flex align-items-center gap-1">
                    <i className={`bi ${item.video ? 'bi-play-circle text-gold' : 'bi-arrows-fullscreen text-gold'}`} style={{ fontSize: '11px' }}></i>
                    <span className="label-caps text-ivory" style={{ fontSize: '9px' }}>{item.video ? 'Play Reel' : 'Zoom'}</span>
                  </div>
                </div>

                <div className="p-3 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <h3 className="headline-serif text-espresso fs-5 mb-0">{item.title}</h3>
                      <span className="label-caps text-gold fw-bold">{item.price}</span>
                    </div>
                    <p className="body-muted mb-3" style={{ fontSize: '13px' }}>
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 border-heritage-top d-flex justify-content-between align-items-center">
                    <span className="label-caps text-muted-heritage" style={{ fontSize: '10px' }}>
                      <i className="bi bi-person text-gold me-1"></i>{item.stylist}
                    </span>
                    <MagneticButton 
                      className="btn btn-heritage-outline btn-heritage-sm py-1 px-3"
                      onClick={(e) => {
                        e.stopPropagation();
                        onRequestCut(item);
                      }}
                    >
                      <span>{item.category === 'haircuts' ? 'Book Cut' : 'Reserve Chair'}</span>
                      <i className="bi bi-chevron-right text-gold ms-1"></i>
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
