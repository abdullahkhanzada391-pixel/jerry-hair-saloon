import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import VipModal from './components/VipModal';
import QuickBookModal from './components/QuickBookModal';
import BookingConfirmationModal from './components/BookingConfirmationModal';
import { servicesData } from './data/services';
import { barbersData } from './data/barbers';
import { motion, AnimatePresence, easeLuxury } from './animations/motion';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBarber, setSelectedBarber] = useState(barbersData[0]); // Jerry
  const [lightboxItem, setLightboxItem] = useState(null);
  const [isVipModalOpen, setIsVipModalOpen] = useState(false);
  const [isQuickBookOpen, setIsQuickBookOpen] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Always reset window scroll when switching tabs
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 50);
    return () => clearTimeout(timer);
  }, [currentTab]);

  // Toggle service selection
  const handleToggleService = (service) => {
    if (service === 'clear_all') {
      setSelectedServices([]);
      return;
    }
    setSelectedServices((prev) => {
      const exists = prev.some(item => item.id === service.id);
      if (exists) {
        return prev.filter(item => item.id !== service.id);
      } else {
        return [...prev, service];
      }
    });
  };

  // Direct select from Home
  const handleSelectService = (service) => {
    setSelectedServices((prev) => {
      const exists = prev.some(item => item.id === service.id);
      if (!exists) {
        return [...prev, service];
      }
      return prev;
    });
  };

  // Direct select barber
  const handleSelectBarber = (barber) => {
    setSelectedBarber(barber);
  };

  // Request cut from gallery
  const handleRequestCut = (galleryItem) => {
    // Add signature fade or appropriate service
    const matchedService = servicesData.find(s => s.name.toLowerCase().includes('fade')) || servicesData[0];
    handleSelectService(matchedService);
    if (galleryItem.stylist.includes('Jerry')) setSelectedBarber(barbersData[0]);
    else if (galleryItem.stylist.includes('Tariq')) setSelectedBarber(barbersData[1]);
    else if (galleryItem.stylist.includes('Adnan')) setSelectedBarber(barbersData[2]);
    setCurrentTab('booking');
  };

  // Handle successful reservation
  const handleBookingConfirmed = (details) => {
    setConfirmedBooking(details);
  };

  // Quick book confirm
  const handleQuickBookConfirm = (data) => {
    setIsQuickBookOpen(false);
    const mockDetails = {
      bookingId: `JH-${Math.floor(1000 + Math.random() * 9000)}`,
      services: selectedServices.length > 0 ? selectedServices : [servicesData[0]],
      totalPrice: selectedServices.length > 0 ? selectedServices.reduce((a, b) => a + b.price, 0) : servicesData[0].price,
      totalDuration: '45 Mins',
      barber: barbersData.find(b => b.name === data.barber) || barbersData[0],
      date: `${data.day} (Fast Slot)`,
      time: data.slot,
      clientName: 'Guest Client',
      clientPhone: '+92 300 0000000',
      clientNotes: 'Fast Chair Reservation',
      paymentMethod: 'Cash at Counter'
    };
    setConfirmedBooking(mockDetails);
  };

  return (
    <div className="saloon-app min-vh-100 d-flex flex-column bg-ivory text-espresso">
      {/* Top Header */}
      <Header 
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onOpenQuickBook={() => setIsQuickBookOpen(true)}
        onOpenVipModal={() => setIsVipModalOpen(true)}
      />

      {/* Main View Router with Framer Motion Page Transition */}
      <main className="flex-grow-1 position-relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 16, scale: 0.988 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.988 }}
            transition={{ duration: 0.28, ease: easeLuxury }}
          >
            {currentTab === 'home' && (
              <Home 
                setCurrentTab={setCurrentTab}
                onSelectService={handleSelectService}
                onSelectBarber={handleSelectBarber}
                onOpenVipModal={() => setIsVipModalOpen(true)}
                onOpenQuickBook={() => setIsQuickBookOpen(true)}
              />
            )}

            {currentTab === 'services' && (
              <Services 
                selectedServices={selectedServices}
                onToggleService={handleToggleService}
                onProceedToBooking={() => setCurrentTab('booking')}
              />
            )}

            {currentTab === 'gallery' && (
              <Gallery 
                onSelectImage={(item) => setLightboxItem(item)}
                onRequestCut={handleRequestCut}
              />
            )}

            {currentTab === 'booking' && (
              <Booking 
                selectedServices={selectedServices}
                onToggleService={handleToggleService}
                selectedBarber={selectedBarber}
                setSelectedBarber={setSelectedBarber}
                onBookingConfirmed={handleBookingConfirmed}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer 
        setCurrentTab={setCurrentTab}
        onOpenVipModal={() => setIsVipModalOpen(true)}
      />

      {/* Mobile Bottom Navigation */}
      <BottomNav 
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />

      {/* Modals & Overlays */}
      <LightboxModal 
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        onRequestCut={handleRequestCut}
      />

      <VipModal 
        isOpen={isVipModalOpen}
        onClose={() => setIsVipModalOpen(false)}
      />

      <QuickBookModal 
        isOpen={isQuickBookOpen}
        onClose={() => setIsQuickBookOpen(false)}
        onQuickBookConfirm={handleQuickBookConfirm}
      />

      <BookingConfirmationModal 
        bookingDetails={confirmedBooking}
        onClose={() => {
          setConfirmedBooking(null);
          setCurrentTab('home');
        }}
      />
    </div>
  );
}

