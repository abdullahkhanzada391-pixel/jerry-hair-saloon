import React from 'react';
import { motion, easeLuxury } from '../animations/motion';

export default function LightboxModal({ item, onClose, onRequestCut }) {
  if (!item) return null;

  return (
    <motion.div 
      className="lightbox-backdrop" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
    >
      <motion.div 
        className="p-3 p-md-4 max-w-2xl w-100 shadow-lg text-ivory position-relative" 
        style={{ 
          maxWidth: '640px',
          backgroundColor: '#1B1B1B',
          borderRadius: '14px',
          border: '1px solid #303030',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(200, 164, 93, 0.2)'
        }}
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: easeLuxury }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="d-flex justify-content-between align-items-center pb-2 mb-3" style={{ borderBottom: '1px solid #303030' }}>
          <div className="d-flex align-items-center gap-2">
            <span className="badge bg-espresso text-ivory label-caps px-2 py-0.5">{item.tag}</span>
            <span className="label-caps text-muted-heritage">Archive Photograph</span>
          </div>
          <button 
            className="btn btn-heritage-outline btn-heritage-sm py-1 px-2 text-ivory"
            style={{ borderRadius: '8px' }}
            onClick={onClose}
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Media Player (Video or Image) */}
        <div className="border-heritage overflow-hidden mb-3 position-relative" style={{ maxHeight: '440px', backgroundColor: '#0B0B0B', borderRadius: '10px' }}>
          {item.video ? (
            <video 
              src={item.video} 
              controls 
              autoPlay 
              playsInline
              className="w-100 h-100" 
              style={{ objectFit: 'contain', maxHeight: '420px', display: 'block' }}
              poster={item.image}
            >
              Your browser does not support HTML5 video.
            </video>
          ) : (
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-100 h-100" 
              style={{ objectFit: 'contain', maxHeight: '400px' }}
              onError={(e) => { e.target.src = item.fallback; }}
            />
          )}
        </div>

        {/* Information */}
        <div className="d-flex justify-content-between align-items-baseline mb-2">
          <h3 className="headline-serif text-espresso fs-4 mb-0">{item.title}</h3>
          <span className="headline-serif text-gold fw-bold">{item.price}</span>
        </div>

        <p className="body-muted mb-3" style={{ fontSize: '13px' }}>
          {item.description}
        </p>

        <div className="d-flex justify-content-between align-items-center pt-2 border-heritage-top">
          <span className="label-caps text-muted-heritage" style={{ fontSize: '11px' }}>
            <i className="bi bi-person text-gold me-1"></i>Master Stylist: {item.stylist}
          </span>

          <button 
            className="btn btn-gold-primary btn-heritage-sm"
            onClick={() => {
              onRequestCut(item);
              onClose();
              window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            }}
          >
            <i className="bi bi-calendar-plus me-1"></i>
            <span>Book This Style</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
