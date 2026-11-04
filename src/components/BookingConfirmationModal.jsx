import React from 'react';
import { motion, easeLuxury } from '../animations/motion';

export default function BookingConfirmationModal({ bookingDetails, onClose }) {
  if (!bookingDetails) return null;

  const waText = encodeURIComponent(
    `*JERRY HAIR SALOON - RESERVATION CONFIRMATION*\n` +
    `Booking Ref: ${bookingDetails.bookingId}\n` +
    `Client: ${bookingDetails.clientName}\n` +
    `Phone: ${bookingDetails.clientPhone}\n` +
    `Specialist: ${bookingDetails.barber?.name || 'Jerry'} (${bookingDetails.barber?.chair || 'Chair #01'})\n` +
    `Date & Time: ${bookingDetails.date} at ${bookingDetails.time}\n` +
    `Services: ${bookingDetails.services.map(s => s.name).join(', ')}\n` +
    `Total: PKR ${bookingDetails.totalPrice.toLocaleString()}\n` +
    `Location: 117 Neelum Block, Allama Iqbal Town, Lahore.`
  );

  const waUrl = `https://wa.me/923001234567?text=${waText}`;

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
          maxWidth: '480px', 
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
        <div className="d-flex justify-content-between align-items-center pb-2 mb-2" style={{ borderBottom: '1px solid #303030' }}>
          <div className="d-flex align-items-center gap-2">
            <span className="pulse-indicator bg-gold"></span>
            <span className="label-caps text-ivory fw-bold" style={{ fontSize: '11px', letterSpacing: '0.12em' }}>Reservation Executed</span>
          </div>
          <button 
            className="btn btn-heritage-outline btn-heritage-sm py-1 px-2 text-ivory"
            style={{ borderRadius: '8px' }}
            onClick={onClose}
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Confirmation Emblem & Heading */}
        <div className="text-center py-2">
          <div 
            className="d-inline-flex align-items-center justify-content-center rounded-circle mb-2 shadow-sm" 
            style={{ 
              width: '56px', 
              height: '56px', 
              backgroundColor: 'rgba(200, 164, 93, 0.12)', 
              border: '2px solid var(--color-gold)',
              boxShadow: '0 0 20px rgba(200, 164, 93, 0.3)'
            }}
          >
            <i className="bi bi-check-lg fs-3 text-gold"></i>
          </div>

          <h2 className="headline-serif text-ivory fs-4 fw-bold mt-1 mb-1" style={{ lineHeight: 1.25 }}>
            Your Slot Has Been Booked Successfully
          </h2>
          <p className="body-muted mb-0" style={{ fontSize: '12.5px' }}>
            Confirmed for <strong>{bookingDetails.clientName}</strong> at Jerry Hair Saloon, 117 Neelum Block.
          </p>
        </div>

        {/* Receipt Details Box */}
        <div className="p-3 my-2" style={{ backgroundColor: '#141414', border: '1px solid #303030', borderRadius: '10px' }}>
          <div className="d-flex justify-content-between py-1" style={{ borderBottom: '1px solid #303030' }}>
            <span className="label-caps text-muted-heritage" style={{ fontSize: '11px' }}>Assigned Master:</span>
            <span className="label-caps text-ivory fw-bold" style={{ fontSize: '11px' }}>{bookingDetails.barber?.name} ({bookingDetails.barber?.chair})</span>
          </div>
          <div className="d-flex justify-content-between py-1" style={{ borderBottom: '1px solid #303030' }}>
            <span className="label-caps text-muted-heritage" style={{ fontSize: '11px' }}>Slot &amp; Date:</span>
            <span className="label-caps text-ivory fw-bold" style={{ fontSize: '11px' }}>{bookingDetails.date} • {bookingDetails.time}</span>
          </div>
          <div className="d-flex justify-content-between py-1" style={{ borderBottom: '1px solid #303030' }}>
            <span className="label-caps text-muted-heritage" style={{ fontSize: '11px' }}>Session Length:</span>
            <span className="label-caps text-ivory" style={{ fontSize: '11px' }}>{bookingDetails.totalDuration}</span>
          </div>
          <div className="d-flex justify-content-between py-1">
            <span className="label-caps text-muted-heritage" style={{ fontSize: '11px' }}>Total Due at Saloon:</span>
            <span className="headline-serif text-gold fw-bold fs-5">PKR {bookingDetails.totalPrice.toLocaleString()}</span>
          </div>
        </div>

        {/* Direct WhatsApp CTA */}
        <div className="d-flex flex-column gap-2 mt-3">
          <a 
            href={waUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-gold-primary py-2.5 w-100"
            style={{ fontSize: '12px' }}
          >
            <i className="bi bi-whatsapp fs-6"></i>
            <span>Send Confirmation to WhatsApp</span>
          </a>

          <button 
            className="btn btn-heritage-outline py-2 w-100"
            onClick={onClose}
            style={{ fontSize: '12px', borderRadius: '8px' }}
          >
            <span>Close &amp; Back to Studio</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
