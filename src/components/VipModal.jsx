import React, { useState } from 'react';
import { motion, easeLuxury } from '../animations/motion';

export default function VipModal({ isOpen, onClose }) {
  const [claimed, setClaimed] = useState(false);
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

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
        className="p-3 p-md-4 max-w-md w-100 shadow-lg text-ivory position-relative" 
        style={{ 
          maxWidth: '460px', 
          maxHeight: '92vh', 
          overflowY: 'auto',
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
            <i className="bi bi-award text-gold fs-5"></i>
            <span className="label-caps text-ivory fw-bold" style={{ fontSize: '11px', letterSpacing: '0.12em' }}>Jerry VIP Club</span>
          </div>
          <button
            className="btn btn-heritage-outline btn-heritage-sm py-1 px-2 text-ivory"
            style={{ borderRadius: '8px' }}
            onClick={onClose}
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {!claimed ? (
          <div>
            <div className="text-center py-1 mb-3">
              <span className="badge bg-gold text-espresso label-caps px-3 py-1 mb-2 fw-bold" style={{ fontSize: '10px' }}>
                8th Anniversary Privilege Pass
              </span>
              <h2 className="headline-serif text-ivory fs-4 mb-1">
                Neelum Block Resident Club
              </h2>
              <p className="mb-0 body-muted" style={{ fontSize: '12.5px' }}>
                Complimentary VIP privilege pass for Allama Iqbal Town clients. Valid for 12 months.
              </p>
            </div>

            <div className="p-3 mb-3" style={{ backgroundColor: '#141414', border: '1px solid #303030', borderRadius: '10px' }}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-check2 text-gold fs-5"></i>
                <span className="label-caps text-ivory" style={{ fontSize: '11px' }}>20% Off all Head Spa &amp; Scalp Massages</span>
              </div>
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-check2 text-gold fs-5"></i>
                <span className="label-caps text-ivory" style={{ fontSize: '11px' }}>Priority Weekend Chair Reservation</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-check2 text-gold fs-5"></i>
                <span className="label-caps text-ivory" style={{ fontSize: '11px' }}>Complimentary Seasonal Beard Trimming</span>
              </div>
            </div>

            <div className="mb-3">
              <label className="label-caps text-ivory fw-bold mb-1 d-block" style={{ fontSize: '11px' }}>Your WhatsApp / Phone Number</label>
              <input
                type="tel"
                className="form-control"
                style={{ 
                  backgroundColor: '#141414', 
                  border: '1px solid #303030', 
                  color: '#FFFFFF',
                  borderRadius: '8px',
                  padding: '10px 12px'
                }}
                placeholder="03XX XXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button
              className="btn btn-gold-primary w-100 py-2.5"
              style={{ fontSize: '12px' }}
              onClick={() => {
                if (phone.trim().length >= 7) {
                  setClaimed(true);
                } else {
                  alert('Please enter a valid phone number.');
                }
              }}
            >
              Activate VIP Resident Pass
            </button>
          </div>
        ) : (
          <div className="text-center py-2">
            {/* Gold Circle Checkmark */}
            <div 
              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" 
              style={{ 
                width: '56px', 
                height: '56px', 
                border: '2px solid var(--color-gold)', 
                color: 'var(--color-gold)', 
                backgroundColor: 'rgba(200, 164, 93, 0.12)',
                boxShadow: '0 0 24px rgba(200, 164, 93, 0.3)'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>

            {/* Title */}
            <h2 className="headline-serif text-ivory fs-3 fw-bold mb-1" style={{ letterSpacing: '0.01em' }}>
              VIP Membership Activated!
            </h2>
            <p className="mb-3 body-muted" style={{ fontSize: '13px' }}>
              Welcome to our exclusive VIP community.
            </p>

            {/* Green VIP Member Pill Badge */}
            <div className="d-inline-flex align-items-center px-3 py-1 rounded-pill mb-2" style={{ backgroundColor: 'rgba(7, 59, 34, 0.7)', border: '1px solid #00E676' }}>
              <span className="label-caps fw-bold" style={{ color: '#00E676', fontSize: '11px', letterSpacing: '0.14em' }}>
                VIP MEMBER
              </span>
            </div>

            {/* 20% OFF in Gold */}
            <div className="my-1">
              <span className="headline-serif text-gold fw-bold d-block" style={{ fontSize: '2.8rem', lineHeight: 1.1, letterSpacing: '0.02em' }}>
                20% OFF
              </span>
            </div>

            {/* Subtitle */}
            <p className="mb-2 body-muted" style={{ fontSize: '12.5px' }}>
              Your exclusive discount is now active.
            </p>

            {/* Down Arrow */}
            <div className="d-flex justify-content-center my-2">
              <div 
                className="d-inline-flex align-items-center justify-content-center rounded-circle" 
                style={{ width: '30px', height: '30px', border: '1px solid #303030', backgroundColor: '#141414', color: 'var(--color-gold)' }}
              >
                <i className="bi bi-arrow-down" style={{ fontSize: '13px' }}></i>
              </div>
            </div>

            {/* Instruction */}
            <p className="mt-2 mb-4 px-2" style={{ fontSize: '13px', lineHeight: 1.5, color: '#A5A5A5' }}>
              Your VIP benefits are ready to enjoy! Simply present your membership at checkout.
            </p>

            {/* Action Button */}
            <button
              className="btn btn-gold-primary w-100 py-2.5"
              onClick={onClose}
              style={{ fontSize: '12px' }}
            >
              Done &amp; Return to Studio
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
