import React, { useState, useMemo, useEffect } from 'react';
import { servicesData } from '../data/services';
import { barbersData } from '../data/barbers';
import { motion, AnimatePresence, easeLuxury, MagneticButton } from '../animations/motion';

export default function Booking({ 
  selectedServices, 
  onToggleService, 
  selectedBarber, 
  setSelectedBarber, 
  onBookingConfirmed 
}) {
  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);

  const initialDateStr = useMemo(() => {
    const d = new Date();
    const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
    const monthName = d.toLocaleDateString('en-US', { month: 'short' });
    const datePad = String(d.getDate()).padStart(2, '0');
    return `Today (${datePad} ${monthName})`;
  }, []);

  const [currentStep, setCurrentStep] = useState(selectedServices.length > 0 ? 2 : 1);
  const [selectedDate, setSelectedDate] = useState(initialDateStr);
  const [selectedDateObj, setSelectedDateObj] = useState(new Date());
  const [calendarViewMode, setCalendarViewMode] = useState('calendar'); // 'calendar' or 'strip'
  const [viewYear, setViewYear] = useState(new Date().getFullYear());
  const [viewMonth, setViewMonth] = useState(new Date().getMonth());
  const [selectedTime, setSelectedTime] = useState('02:00 PM');
  const [clientName, setClientName] = useState('Hamza Malik');
  const [clientPhone, setClientPhone] = useState('+92 300 8472910');
  const [clientNotes, setClientNotes] = useState('Low skin taper with textured crop on top, hot eucalyptus towel finish.');
  const [paymentMethod, setPaymentMethod] = useState('cash_counter');
  const [formError, setFormError] = useState('');

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handlePrevMonth = () => {
    const curYear = today.getFullYear();
    const curMonth = today.getMonth();
    if (viewYear === curYear && viewMonth <= curMonth) return;
    if (viewMonth === 0) {
      setViewYear(y => y - 1);
      setViewMonth(11);
    } else {
      setViewMonth(m => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewYear(y => y + 1);
      setViewMonth(0);
    } else {
      setViewMonth(m => m + 1);
    }
  };

  // Generate 14-day quick rolling dates
  const dynamicRollingDays = useMemo(() => {
    const days = [];
    const base = new Date();
    base.setHours(0, 0, 0, 0);
    for (let i = 0; i < 14; i++) {
      const d = new Date(base);
      d.setDate(base.getDate() + i);
      const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
      const monthName = d.toLocaleDateString('en-US', { month: 'short' });
      const datePad = String(d.getDate()).padStart(2, '0');
      let label = dayName.toUpperCase();
      if (i === 0) label = 'TODAY';
      else if (i === 1) label = 'TMRW';
      else if (d.getDay() === 0 || d.getDay() === 6) label = 'WEEKEND';
      else if (d.getDay() === 5) label = 'PRIME';

      const id = i === 0 ? `Today (${datePad} ${monthName})` : 
                 i === 1 ? `Tomorrow (${datePad} ${monthName})` : 
                 `${dayName} (${datePad} ${monthName})`;
      days.push({
        id,
        label,
        date: `${datePad} ${monthName}`,
        day: dayName.toUpperCase(),
        dateObj: d
      });
    }
    return days;
  }, []);

  // Calendar matrix calculation
  const calendarDays = useMemo(() => {
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const firstDayIndex = (new Date(viewYear, viewMonth, 1).getDay() + 6) % 7; // Monday = 0
    const cells = [];
    
    // Blank padding cells for days before the 1st
    for (let i = 0; i < firstDayIndex; i++) {
      cells.push({ type: 'empty', key: `empty-${i}` });
    }

    const todayClean = new Date();
    todayClean.setHours(0, 0, 0, 0);

    for (let day = 1; day <= daysInMonth; day++) {
      const cellDate = new Date(viewYear, viewMonth, day);
      cellDate.setHours(0, 0, 0, 0);
      const isPast = cellDate < todayClean;
      const isToday = cellDate.getTime() === todayClean.getTime();
      const isSelected = selectedDateObj && cellDate.toDateString() === selectedDateObj.toDateString();

      cells.push({
        type: 'day',
        key: `day-${day}`,
        dayNum: day,
        dateObj: cellDate,
        isPast,
        isToday,
        isSelected
      });
    }

    return cells;
  }, [viewYear, viewMonth, selectedDateObj]);

  const handleSelectDay = (dayObj) => {
    if (dayObj.isPast) return;
    const d = dayObj.dateObj;
    const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
    const monthName = d.toLocaleDateString('en-US', { month: 'short' });
    const datePad = String(dayObj.dayNum).padStart(2, '0');

    const todayClean = new Date();
    todayClean.setHours(0, 0, 0, 0);
    const tmrwClean = new Date(todayClean);
    tmrwClean.setDate(todayClean.getDate() + 1);

    let id = `${dayName} (${datePad} ${monthName})`;
    if (d.getTime() === todayClean.getTime()) id = `Today (${datePad} ${monthName})`;
    else if (d.getTime() === tmrwClean.getTime()) id = `Tomorrow (${datePad} ${monthName})`;

    setSelectedDate(id);
    setSelectedDateObj(d);
  };

  // Always reset window scroll when mounting booking view
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll to top when changing steps
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [currentStep]);

  // Time slots
  const timeSlots = {
    morning: [
      { time: '10:00 AM', label: 'Opening Slot', available: true },
      { time: '11:30 AM', label: "Jerry's Chair", available: true }
    ],
    afternoon: [
      { time: '02:00 PM', label: 'Prime Slot', available: true },
      { time: '03:30 PM', label: 'Open Chair', available: true },
      { time: '05:00 PM', label: 'Open Chair', available: true }
    ],
    evening: [
      { time: '07:00 PM', label: 'Peak Hour', available: true },
      { time: '08:30 PM', label: 'Peak Hour', available: true },
      { time: '10:00 PM', label: 'Final Call', available: false }
    ]
  };

  // Calculations
  const totalPrice = useMemo(() => {
    return selectedServices.reduce((sum, item) => sum + item.price, 0);
  }, [selectedServices]);

  const totalDuration = useMemo(() => {
    if (selectedServices.length === 0) return '30 Mins';
    let mins = 0;
    selectedServices.forEach(s => {
      mins += parseInt(s.duration) || 30;
    });
    return `${mins} Mins`;
  }, [selectedServices]);

  const handleConfirmReservation = (e) => {
    e.preventDefault();
    if (!clientName.trim() || !clientPhone.trim()) {
      setFormError('Please enter your full name and phone number.');
      return;
    }
    if (selectedServices.length === 0) {
      setFormError('Please select at least one grooming service.');
      setCurrentStep(1);
      return;
    }

    setFormError('');
    const bookingDetails = {
      bookingId: `JH-${Math.floor(1000 + Math.random() * 9000)}`,
      services: selectedServices,
      totalPrice,
      totalDuration,
      barber: selectedBarber || barbersData[0],
      date: selectedDate,
      time: selectedTime,
      clientName,
      clientPhone,
      clientNotes,
      paymentMethod,
      timestamp: new Date().toLocaleDateString()
    };

    onBookingConfirmed(bookingDetails);
  };

  return (
    <div className="booking-view py-5 bg-ivory">
      <div className="container">
        {/* Editorial Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4 pb-3 border-heritage-bottom">
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              <span className="label-caps text-gold fw-bold">Reservation Protocol</span>
              <span className="badge bg-espresso text-ivory label-caps px-2 py-0.5">Instant Confirmation</span>
            </div>
            <h1 className="display-title text-espresso fs-2 mb-1">Reserve Your Chair</h1>
            <p className="body-muted mb-0">
              Skip wait times during peak evening hours (5 PM – 10 PM) at 117 Neelum Block, Iqbal Town.
            </p>
          </div>
          <span className="label-caps text-muted-heritage mt-2 mt-md-0">
            Reservation Flow
          </span>
        </div>

        {/* Progress Tracker */}
        <div className="border-heritage p-2.5 p-sm-3 bg-card mb-4 shadow-sm">
          <div className="row g-1 g-sm-2 text-center">
            <div className="col-3 booking-progress-step cursor-pointer" onClick={() => setCurrentStep(1)}>
              <div 
                className="w-100 mb-1" 
                style={{ height: '3px', backgroundColor: currentStep >= 1 ? 'var(--color-gold)' : 'var(--color-border)' }}
              ></div>
              <span className="label-caps d-block" style={{ color: currentStep >= 1 ? 'var(--color-gold)' : 'var(--color-text-muted)' }}>
                Services
              </span>
            </div>

            <div className="col-3 booking-progress-step cursor-pointer" onClick={() => setCurrentStep(2)}>
              <div 
                className="w-100 mb-1" 
                style={{ height: '3px', backgroundColor: currentStep >= 2 ? 'var(--color-gold)' : 'var(--color-border)' }}
              ></div>
              <span className="label-caps d-block" style={{ color: currentStep >= 2 ? 'var(--color-gold)' : 'var(--color-text-muted)' }}>
                Specialist
              </span>
            </div>

            <div className="col-3 booking-progress-step cursor-pointer" onClick={() => setCurrentStep(3)}>
              <div 
                className="w-100 mb-1" 
                style={{ height: '3px', backgroundColor: currentStep >= 3 ? 'var(--color-gold)' : 'var(--color-border)' }}
              ></div>
              <span className="label-caps d-block" style={{ color: currentStep >= 3 ? 'var(--color-gold)' : 'var(--color-text-muted)' }}>
                Schedule
              </span>
            </div>

            <div className="col-3 booking-progress-step cursor-pointer" onClick={() => setCurrentStep(4)}>
              <div 
                className="w-100 mb-1" 
                style={{ height: '3px', backgroundColor: currentStep >= 4 ? 'var(--color-gold)' : 'var(--color-border)' }}
              ></div>
              <span className="label-caps d-block" style={{ color: currentStep >= 4 ? 'var(--color-gold)' : 'var(--color-text-muted)' }}>
                Ledger
              </span>
            </div>
          </div>
        </div>

        {formError && (
          <div className="alert border-heritage bg-card text-espresso mb-4 d-flex align-items-center gap-2 shadow-sm">
            <i className="bi bi-exclamation-triangle-fill text-gold fs-5"></i>
            <span className="label-caps text-espresso">{formError}</span>
          </div>
        )}

        <div className="row g-4">
          {/* Main Wizard Left Column */}
          <div className="col-12 col-lg-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -14 }}
                transition={{ duration: 0.28, ease: easeLuxury }}
              >
            {/* Step 1: Service Selection */}
            {currentStep === 1 && (
              <div className="border-heritage p-3 p-sm-4 bg-card shadow-sm">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <span className="label-caps text-gold fw-bold">Step 01 Protocol</span>
                    <h3 className="headline-serif text-espresso fs-5 fs-sm-4 mb-0">Select Grooming Services</h3>
                  </div>
                  <span className="label-caps text-espresso fw-bold">
                    {selectedServices.length} Selected
                  </span>
                </div>

                <div className="row g-2.5 g-sm-3 mb-4">
                  {servicesData.map((service) => {
                    const isSelected = selectedServices.some(s => s.id === service.id);
                    return (
                      <div key={service.id} className="col-12 col-md-6">
                        <div 
                          className={`border-heritage p-3 h-100 cursor-pointer d-flex flex-column justify-content-between transition-all ${isSelected ? 'bg-gold-light' : 'bg-card'}`}
                          style={{ borderColor: isSelected ? 'var(--color-gold)' : 'var(--color-border)', cursor: 'pointer' }}
                          onClick={() => onToggleService(service)}
                        >
                          <div>
                            <div className="d-flex justify-content-between align-items-start mb-1">
                              <h5 className="headline-serif text-espresso fs-6 mb-0">{service.name}</h5>
                              <i className={`bi ${isSelected ? 'bi-check-square-fill text-gold' : 'bi-square text-muted-heritage'}`}></i>
                            </div>
                            <p className="body-muted mb-2" style={{ fontSize: '12px' }}>
                              {service.description.substring(0, 75)}...
                            </p>
                          </div>

                          <div className="d-flex justify-content-between align-items-center pt-2 border-heritage-top">
                            <span className="label-caps text-muted-heritage" style={{ fontSize: '10px' }}>
                              {service.duration}
                            </span>
                            <span className="headline-serif text-espresso fw-bold">
                              PKR {service.price.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="d-flex justify-content-end">
                  <button 
                    className="btn btn-gold-primary w-100 w-sm-auto"
                    disabled={selectedServices.length === 0}
                    onClick={() => {
                      if (selectedServices.length === 0) {
                        setFormError('Please select at least one service.');
                        return;
                      }
                      setFormError('');
                      setCurrentStep(2);
                    }}
                  >
                    <span>Proceed to Specialist</span>
                    <i className="bi bi-arrow-right ms-1"></i>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Specialist Barber Selection */}
            {currentStep === 2 && (
              <div className="border-heritage p-3 p-sm-4 bg-card shadow-sm">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <span className="label-caps text-gold fw-bold">Step 02 Protocol</span>
                    <h3 className="headline-serif text-espresso fs-5 fs-sm-4 mb-0">Select Specialist Barber</h3>
                  </div>
                  <span className="label-caps text-muted-heritage">Craft Mastery</span>
                </div>

                <div className="row g-3 mb-4">
                  {barbersData.map((barber) => {
                    const isSelected = selectedBarber?.id === barber.id;
                    return (
                      <div key={barber.id} className="col-12">
                        <div 
                          className={`border-heritage p-3 cursor-pointer d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 ${isSelected ? 'bg-gold-light' : 'bg-card'}`}
                          style={{ borderColor: isSelected ? 'var(--color-gold)' : 'var(--color-border)', cursor: 'pointer' }}
                          onClick={() => setSelectedBarber(barber)}
                        >
                          <div className="d-flex gap-2.5 gap-sm-3 align-items-center">
                            <img 
                              src={barber.avatar} 
                              alt={barber.name} 
                              className="border-heritage shadow-sm flex-shrink-0"
                              style={{ width: 'clamp(56px, 15vw, 70px)', height: 'clamp(56px, 15vw, 70px)', objectFit: 'cover' }}
                              onError={(e) => { e.target.src = barber.fallbackAvatar; }}
                            />
                            <div>
                              <div className="d-flex align-items-center gap-2">
                                <h4 className="headline-serif text-espresso fs-5 mb-0">{barber.name}</h4>
                                {isSelected && (
                                  <span className="badge bg-gold text-espresso label-caps px-2 py-0.5 fw-bold">
                                    Selected
                                  </span>
                                )}
                              </div>
                              <span className="label-caps text-gold fw-bold d-block">
                                {barber.role}
                              </span>
                              <span className="body-muted" style={{ fontSize: '12px' }}>
                                {barber.experience} • Rating: ★ {barber.rating}
                              </span>
                            </div>
                          </div>

                          <div className="text-sm-end w-100 w-sm-auto">
                            <span className="label-caps text-muted-heritage d-none d-sm-block mb-1">{barber.chair}</span>
                            <span className={`btn ${isSelected ? 'btn-gold-primary' : 'btn-heritage-outline'} btn-heritage-sm py-1.5 px-3 w-100 w-sm-auto`}>
                              {isSelected ? 'Active Selection' : 'Select'}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="d-flex flex-column-reverse flex-sm-row justify-content-between gap-2">
                  <button 
                    className="btn btn-heritage-outline w-100 w-sm-auto"
                    onClick={() => setCurrentStep(1)}
                  >
                    <i className="bi bi-arrow-left me-1"></i>
                    <span>Back</span>
                  </button>

                  <button 
                    className="btn btn-gold-primary w-100 w-sm-auto"
                    onClick={() => setCurrentStep(3)}
                  >
                    <span>Proceed to Schedule</span>
                    <i className="bi bi-arrow-right ms-1"></i>
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Schedule Date & Time Slot */}
            {currentStep === 3 && (
              <div className="border-heritage p-3 p-sm-4 bg-card shadow-sm">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <span className="label-caps text-gold fw-bold">Step 03 Protocol</span>
                    <h3 className="headline-serif text-espresso fs-5 fs-sm-4 mb-0">Select Date &amp; Arrival Slot</h3>
                  </div>
                  <span className="label-caps text-muted-heritage">PKT Timezone</span>
                </div>

                {/* Date Selection Header & Mode Switcher */}
                <div className="mb-4">
                  <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-2 mb-3">
                    <label className="label-caps text-espresso fw-bold mb-0">Select Date According to Month:</label>
                    <div className="d-inline-flex border-heritage bg-card p-1 shadow-sm w-100 w-sm-auto">
                      <button 
                        type="button"
                        className={`btn btn-sm ${calendarViewMode === 'calendar' ? 'btn-gold-primary' : 'btn-heritage-outline border-0'} py-1 px-2 px-sm-3 flex-fill flex-sm-grow-0`}
                        style={{ fontSize: '11px' }}
                        onClick={() => setCalendarViewMode('calendar')}
                      >
                        <i className="bi bi-calendar3 me-1"></i> Month Calendar
                      </button>
                      <button 
                        type="button"
                        className={`btn btn-sm ${calendarViewMode === 'strip' ? 'btn-gold-primary' : 'btn-heritage-outline border-0'} py-1 px-2 px-sm-3 flex-fill flex-sm-grow-0`}
                        style={{ fontSize: '11px' }}
                        onClick={() => setCalendarViewMode('strip')}
                      >
                        <i className="bi bi-view-list me-1"></i> Quick 14 Days
                      </button>
                    </div>
                  </div>

                  {calendarViewMode === 'calendar' ? (
                    /* Full Month Interactive Calendar */
                    <div className="border-heritage p-3 p-md-4 bg-card shadow-sm mb-3">
                      {/* Month & Year Navigation Header */}
                      <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-heritage-bottom">
                        <div className="d-flex align-items-center gap-2">
                          <i className="bi bi-calendar-event text-gold fs-5"></i>
                          <h4 className="headline-serif text-espresso fs-5 fw-bold mb-0">
                            {monthNames[viewMonth]} {viewYear}
                          </h4>
                          {viewMonth === today.getMonth() && viewYear === today.getFullYear() && (
                            <span className="badge bg-gold text-espresso label-caps px-2 py-0.5" style={{ fontSize: '9px' }}>Current Month</span>
                          )}
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <button
                            type="button"
                            className="btn btn-heritage-outline btn-heritage-sm py-1 px-2"
                            disabled={viewYear === today.getFullYear() && viewMonth <= today.getMonth()}
                            onClick={handlePrevMonth}
                            title="Previous Month"
                          >
                            <i className="bi bi-chevron-left"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-heritage-outline btn-heritage-sm py-1 px-2"
                            onClick={() => {
                              setViewYear(today.getFullYear());
                              setViewMonth(today.getMonth());
                            }}
                            title="Go to Today's Month"
                            style={{ fontSize: '10px' }}
                          >
                            Today
                          </button>
                          <button
                            type="button"
                            className="btn btn-heritage-outline btn-heritage-sm py-1 px-2"
                            onClick={handleNextMonth}
                            title="Next Month"
                          >
                            <i className="bi bi-chevron-right"></i>
                          </button>
                        </div>
                      </div>

                      {/* Day of Week Labels */}
                      <div className="calendar-weekdays mb-2">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(wd => (
                          <div key={wd} className="calendar-weekday-cell">
                            {wd}
                          </div>
                        ))}
                      </div>

                      {/* Calendar Days Grid */}
                      <div className="calendar-days-grid">
                        {calendarDays.map((cell) => {
                          if (cell.type === 'empty') {
                            return <div key={cell.key} className="p-1"></div>;
                          }
                          return (
                            <button
                              key={cell.key}
                              type="button"
                              className={`calendar-day-btn ${cell.isToday ? 'is-today' : ''} ${cell.isSelected ? 'is-selected' : ''}`}
                              disabled={cell.isPast}
                              onClick={() => handleSelectDay(cell)}
                              title={cell.isToday ? "Today" : cell.dateObj.toDateString()}
                            >
                              <span className="day-number">{cell.dayNum}</span>
                              {cell.isToday && !cell.isSelected && (
                                <span className="today-dot"></span>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Legend */}
                      <div className="d-flex flex-wrap align-items-center gap-3 mt-3 pt-2 border-heritage-top" style={{ fontSize: '11px' }}>
                        <span className="d-flex align-items-center gap-1 text-muted-heritage">
                          <span className="d-inline-block rounded-circle bg-gold" style={{ width: '8px', height: '8px' }}></span> Today
                        </span>
                        <span className="d-flex align-items-center gap-1 text-muted-heritage">
                          <span className="d-inline-block bg-espresso" style={{ width: '10px', height: '10px' }}></span> Selected Date
                        </span>
                        <span className="d-flex align-items-center gap-1 text-muted-heritage" style={{ opacity: 0.5 }}>
                          <span className="d-inline-block border" style={{ width: '10px', height: '10px' }}></span> Past Days (Closed)
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* 14-Day Quick Strip (Dynamically Generated from Today) */
                    <div className="d-flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-3">
                      {dynamicRollingDays.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          className={`date-btn ${selectedDate === item.id ? 'active' : ''}`}
                          onClick={() => {
                            setSelectedDate(item.id);
                            setSelectedDateObj(item.dateObj);
                            setViewYear(item.dateObj.getFullYear());
                            setViewMonth(item.dateObj.getMonth());
                          }}
                        >
                          <span className="label-caps" style={{ fontSize: '10px' }}>{item.label}</span>
                          <span className="headline-serif fs-4 fw-bold">{item.date.split(' ')[0]}</span>
                          <span className="label-caps" style={{ fontSize: '10px' }}>{item.day}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Selected Date Confirmation Banner */}
                  <div className="d-flex align-items-center justify-content-between p-2.5 px-3 bg-beige-subtle border-heritage">
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-calendar-check text-gold fs-5"></i>
                      <div>
                        <span className="label-caps text-muted-heritage d-block" style={{ fontSize: '9.5px' }}>Selected Appointment Date</span>
                        <span className="headline-serif text-espresso fw-bold fs-6">{selectedDate}</span>
                      </div>
                    </div>
                    <span className="badge bg-espresso text-ivory label-caps px-2 py-1">Shift Slots Active</span>
                  </div>
                </div>

                {/* Precision Time Matrix */}
                <div className="mb-4">
                  <label className="label-caps text-espresso fw-bold mb-2 d-block">Available Hours:</label>

                  {/* Morning */}
                  <div className="mb-3">
                    <span className="label-caps text-muted-heritage d-flex align-items-center gap-1 mb-2">
                      <i className="bi bi-brightness-alt-high text-gold"></i> Morning Shift (10:00 AM – 01:00 PM)
                    </span>
                    <div className="row g-2">
                      {timeSlots.morning.map((slot) => (
                        <div key={slot.time} className="col-6">
                          <button
                            type="button"
                            className={`slot-btn w-100 ${selectedTime === slot.time ? 'active' : ''}`}
                            disabled={!slot.available}
                            onClick={() => setSelectedTime(slot.time)}
                          >
                            <div>
                              <span className="headline-serif fs-6 fw-bold d-block">{slot.time}</span>
                              <span className="label-caps text-muted-heritage" style={{ fontSize: '10px' }}>{slot.label}</span>
                            </div>
                            <i className="bi bi-clock text-gold"></i>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Afternoon */}
                  <div className="mb-3">
                    <span className="label-caps text-muted-heritage d-flex align-items-center gap-1 mb-2">
                      <i className="bi bi-sun text-gold"></i> Afternoon Shift (02:00 PM – 06:00 PM)
                    </span>
                    <div className="row g-2">
                      {timeSlots.afternoon.map((slot) => (
                        <div key={slot.time} className="col-6 col-sm-4">
                          <button
                            type="button"
                            className={`slot-btn w-100 ${selectedTime === slot.time ? 'active' : ''}`}
                            disabled={!slot.available}
                            onClick={() => setSelectedTime(slot.time)}
                          >
                            <div>
                              <span className="headline-serif fs-6 fw-bold d-block">{slot.time}</span>
                              <span className="label-caps text-muted-heritage" style={{ fontSize: '9px' }}>{slot.label}</span>
                            </div>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Evening */}
                  <div>
                    <span className="label-caps text-muted-heritage d-flex align-items-center gap-1 mb-2">
                      <i className="bi bi-moon-stars text-gold"></i> Evening &amp; Night Shift (07:00 PM – 11:00 PM)
                    </span>
                    <div className="row g-2">
                      {timeSlots.evening.map((slot) => (
                        <div key={slot.time} className="col-6 col-sm-4">
                          <button
                            type="button"
                            className={`slot-btn w-100 ${selectedTime === slot.time ? 'active' : ''}`}
                            disabled={!slot.available}
                            onClick={() => setSelectedTime(slot.time)}
                          >
                            <div>
                              <span className="headline-serif fs-6 fw-bold d-block">{slot.time}</span>
                              <span className="label-caps text-muted-heritage" style={{ fontSize: '9px' }}>
                                {slot.available ? slot.label : 'Booked'}
                              </span>
                            </div>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-column-reverse flex-sm-row justify-content-between gap-2">
                  <button 
                    className="btn btn-heritage-outline w-100 w-sm-auto"
                    onClick={() => setCurrentStep(2)}
                  >
                    <i className="bi bi-arrow-left me-1"></i>
                    <span>Back</span>
                  </button>

                  <button 
                    className="btn btn-gold-primary w-100 w-sm-auto"
                    onClick={() => setCurrentStep(4)}
                  >
                    <span>Proceed to Client Ledger</span>
                    <i className="bi bi-arrow-right ms-1"></i>
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Client Dossier & Final Execution */}
            {currentStep === 4 && (
              <div className="border-heritage p-3 p-sm-4 bg-card shadow-sm">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <span className="label-caps text-gold fw-bold">Step 04 Protocol</span>
                    <h3 className="headline-serif text-espresso fs-5 fs-sm-4 mb-0">Client Information Ledger</h3>
                  </div>
                  <span className="label-caps text-muted-heritage">Direct Reservation</span>
                </div>

                <form onSubmit={handleConfirmReservation}>
                  <div className="mb-3">
                    <label className="label-caps text-espresso fw-bold mb-1 d-block">Full Name *</label>
                    <div className="input-group">
                      <span className="input-group-text bg-ivory border-heritage text-gold">
                        <i className="bi bi-person"></i>
                      </span>
                      <input 
                        type="text" 
                        required 
                        className="form-control heritage-input" 
                        placeholder="Enter your full name"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="label-caps text-espresso fw-bold mb-1 d-block">Phone Number (Lahore/PK) *</label>
                    <div className="input-group">
                      <span className="input-group-text bg-ivory border-heritage text-gold">
                        <i className="bi bi-phone"></i>
                      </span>
                      <input 
                        type="tel" 
                        required 
                        className="form-control heritage-input" 
                        placeholder="e.g. +92 300 1234567"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                      />
                    </div>
                    <span className="label-caps text-muted-heritage d-block mt-1" style={{ fontSize: '10px' }}>
                      Instant WhatsApp confirmation token will be sent to this number.
                    </span>
                  </div>

                  <div className="mb-4">
                    <label className="label-caps text-espresso fw-bold mb-1 d-block">Craft Notes &amp; Styling Directives (Optional)</label>
                    <div className="input-group">
                      <span className="input-group-text bg-ivory border-heritage text-gold">
                        <i className="bi bi-chat-text"></i>
                      </span>
                      <textarea 
                        className="form-control heritage-input" 
                        rows="2" 
                        placeholder="Special hair taper preferences, beard shaping notes, or allergies..."
                        value={clientNotes}
                        onChange={(e) => setClientNotes(e.target.value)}
                      ></textarea>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="label-caps text-espresso fw-bold mb-2 d-block">Payment Method:</label>
                    <div className="d-flex flex-wrap gap-2">
                      <button
                        type="button"
                        className={`chip-btn ${paymentMethod === 'cash_counter' ? 'active' : ''}`}
                        onClick={() => setPaymentMethod('cash_counter')}
                      >
                        <i className="bi bi-cash text-gold me-1"></i> Cash at Saloon Desk
                      </button>
                      <button
                        type="button"
                        className={`chip-btn ${paymentMethod === 'jazzcash' ? 'active' : ''}`}
                        onClick={() => setPaymentMethod('jazzcash')}
                      >
                        <i className="bi bi-wallet2 text-gold me-1"></i> JazzCash / Easypaisa
                      </button>
                    </div>
                  </div>

                  <div className="d-flex flex-column-reverse flex-sm-row justify-content-between gap-2">
                    <button 
                      type="button"
                      className="btn btn-heritage-outline w-100 w-sm-auto"
                      onClick={() => setCurrentStep(3)}
                    >
                      <i className="bi bi-arrow-left me-1"></i>
                      <span>Back</span>
                    </button>

                    <button 
                      type="submit" 
                      className="btn btn-gold-primary px-4 py-3 w-100 w-sm-auto"
                    >
                      <i className="bi bi-check2-circle me-1"></i>
                      <span>Confirm &amp; Reserve Chair</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Real-time Dossier Summary Right Column (Dark Luxury Card) */}
          <div className="col-12 col-lg-4">
            <div className="border-heritage p-3 p-sm-4 bg-card sticky-top shadow-lg" style={{ top: '90px', borderRadius: '12px' }}>
              <div className="d-flex justify-content-between align-items-center pb-2 mb-3 border-heritage-bottom">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-receipt text-gold"></i>
                  <span className="label-caps text-ivory fw-bold">Booking Dossier</span>
                </div>
                <span className="label-caps text-gold">Neelum Block Stn.</span>
              </div>

              {/* Dossier Lines */}
              <div className="mb-3">
                <span className="label-caps text-gold d-block" style={{ fontSize: '10px' }}>Services Selected:</span>
                {selectedServices.length === 0 ? (
                  <span className="body-muted fst-italic" style={{ fontSize: '12px' }}>No services selected yet</span>
                ) : (
                  <div className="mt-1">
                    {selectedServices.map((s) => (
                      <div key={s.id} className="d-flex justify-content-between align-items-center mb-1">
                        <span className="label-caps text-ivory" style={{ fontSize: '11px' }}>{s.name}</span>
                        <span className="label-caps text-gold">PKR {s.price.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mb-3 pt-2 border-heritage-top">
                <span className="label-caps text-gold d-block" style={{ fontSize: '10px' }}>Assigned Master:</span>
                <span className="headline-serif text-ivory fs-6">
                  {selectedBarber ? `${selectedBarber.name} (${selectedBarber.chair})` : 'Jerry (Chair #01)'}
                </span>
              </div>

              <div className="mb-3 pt-2 border-heritage-top">
                <span className="label-caps text-gold d-block" style={{ fontSize: '10px' }}>Date &amp; Arrival Slot:</span>
                <span className="headline-serif text-ivory fs-6">
                  {selectedDate} • {selectedTime}
                </span>
              </div>

              <div className="mb-3 pt-2 border-heritage-top">
                <span className="label-caps text-gold d-block" style={{ fontSize: '10px' }}>Session Duration:</span>
                <span className="headline-serif text-ivory fs-6" style={{ opacity: 0.85 }}>
                  Approx. {totalDuration}
                </span>
              </div>

              {/* Total Investment */}
              <div className="p-3 bg-card border-heritage mt-3 mb-3 shadow-sm" style={{ borderRadius: '8px', backgroundColor: '#141414' }}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="label-caps text-muted-heritage d-block" style={{ fontSize: '10px' }}>Total Investment:</span>
                    <span className="label-caps text-muted-heritage" style={{ fontSize: '9px' }}>Pay at checkout</span>
                  </div>
                  <span className="headline-serif text-gold fs-3 fw-bold">
                    PKR {totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* WhatsApp Concierge Assistance */}
              <div className="p-3 border-heritage mt-2" style={{ backgroundColor: '#141414', borderRadius: '10px' }}>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <i className="bi bi-whatsapp text-gold fs-5"></i>
                  <div>
                    <span className="label-caps text-ivory d-block fw-bold" style={{ fontSize: '10.5px' }}>Concierge Assistance</span>
                    <span className="body-muted d-block" style={{ fontSize: '11px' }}>
                      Questions about appointments or custom styling?
                    </span>
                  </div>
                </div>
                <a 
                  href="https://wa.me/923001234567?text=Hello%20Jerry%20Hair%20Saloon%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-heritage-outline btn-heritage-sm w-100 d-flex align-items-center justify-content-center gap-2 mt-2"
                >
                  <i className="bi bi-whatsapp text-gold"></i>
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
