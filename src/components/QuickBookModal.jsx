import React, { useState } from 'react';
import { barbersData } from '../data/barbers';
import { motion, easeLuxury } from '../animations/motion';

export default function QuickBookModal({ isOpen, onClose, onQuickBookConfirm }) {
  const [selectedDay, setSelectedDay] = useState('Today');
  const [selectedSlot, setSelectedSlot] = useState('15:30');
  const [barber, setBarber] = useState(barbersData[0].name);

  if (!isOpen) return null;

  const days = [0, 1, 2, 3].map(offset => {
    const d = new Date();
    d.setDate(d.getDate() + offset);
    const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
    const label = offset === 0 ? 'Today' : offset === 1 ? 'Tomorrow' : dayName;
    return { label, date: String(d.getDate()).padStart(2, '0') };
  });

  const slots = ['11:30', '14:00', '15:30', '17:00', '18:30', '20:00'];

  const handleSubmit = (e) => {
    e.preventDefault();
    onQuickBookConfirm({
      day: selectedDay,
      slot: selectedSlot,
      barber
    });
  };

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
        className="border-heritage bg-card p-4 max-w-md w-100 shadow-lg" 
        style={{ maxWidth: '460px' }}
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: easeLuxury }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="d-flex justify-content-between align-items-center pb-2 mb-3 border-heritage-bottom">
          <div>
            <span className="label-caps text-gold fw-bold">Fast Reservation</span>
            <h3 className="headline-serif text-espresso fs-5 mb-0">Select Date &amp; Stylist</h3>
          </div>
          <button 
            className="btn btn-heritage-outline btn-heritage-sm py-1 px-2"
            onClick={onClose}
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Day Selector */}
          <div className="mb-3">
            <span className="label-caps text-espresso fw-bold mb-2 d-block">Select Day</span>
            <div className="row g-2">
              {days.map((d) => (
                <div key={d.label} className="col-3">
                  <button
                    type="button"
                    className={`btn w-100 p-2 text-center d-flex flex-column align-items-center ${selectedDay === d.label ? 'btn-gold-primary' : 'btn-heritage-outline'}`}
                    onClick={() => setSelectedDay(d.label)}
                  >
                    <span className="label-caps" style={{ fontSize: '9px' }}>{d.label}</span>
                    <span className="headline-serif fs-5 fw-bold">{d.date}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Time Slot Matrix */}
          <div className="mb-3">
            <span className="label-caps text-espresso fw-bold mb-2 d-block">Available Time Slots</span>
            <div className="row g-2">
              {slots.map((s) => (
                <div key={s} className="col-4">
                  <button
                    type="button"
                    className={`btn w-100 p-2 text-center label-caps ${selectedSlot === s ? 'btn-gold-primary' : 'btn-heritage-outline'}`}
                    style={{ fontSize: '11px' }}
                    onClick={() => setSelectedSlot(s)}
                  >
                    {s}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Barber Selector */}
          <div className="mb-4">
            <span className="label-caps text-espresso fw-bold mb-2 d-block">Select Specialist</span>
            <div className="d-flex flex-column gap-2">
              {barbersData.map((b) => (
                <div 
                  key={b.id}
                  className={`border-heritage p-2 cursor-pointer d-flex justify-content-between align-items-center ${barber === b.name ? 'bg-gold-light' : 'bg-card'}`}
                  style={{ borderColor: barber === b.name ? 'var(--color-gold)' : 'var(--color-border)', cursor: 'pointer' }}
                  onClick={() => setBarber(b.name)}
                >
                  <span className="label-caps text-espresso fw-bold">{b.name} ({b.role})</span>
                  <span className="label-caps text-muted-heritage">{b.chair}</span>
                </div>
              ))}
            </div>
          </div>

          <button 
            type="submit" 
            className="btn btn-gold-primary w-100 py-3"
          >
            Confirm Chair Reservation
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
