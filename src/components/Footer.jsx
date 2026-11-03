import React from 'react';

export default function Footer({ setCurrentTab }) {
  return (
    <footer className="modern-luxury-footer pt-5 pb-4 mt-0">
      <div className="container">
        <div className="row g-4 g-lg-5 justify-content-between">
          {/* Column 1 – Brand Identity */}
          <div className="col-12 col-md-4 col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="text-gold d-inline-flex align-items-center justify-content-center" style={{ width: '26px', height: '26px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="6" r="3" />
                  <path d="M8.12 8.12 12 12" />
                  <path d="M20 4 8.12 15.88" />
                  <circle cx="6" cy="18" r="3" />
                  <path d="M14.8 14.8 20 20" />
                </svg>
              </span>
              <span className="font-serif fw-bold text-ivory text-uppercase fs-5" style={{ letterSpacing: '0.08em' }}>
                Jerry Hair Saloon
              </span>
            </div>

            <p className="mb-4" style={{ fontSize: '13.5px', color: '#D9D0C2', lineHeight: '1.7', maxWidth: '300px' }}>
              Premium barbering, timeless style, and precision grooming.
            </p>

            {/* Social Media Icons */}
            <div className="d-flex align-items-center gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="footer-social-icon"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="footer-social-icon"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 – Quick Links */}
          <div className="col-12 col-sm-6 col-md-3 col-lg-3">
            <h4 className="label-caps text-gold fw-semibold mb-3 mb-md-4" style={{ letterSpacing: '0.12em', fontSize: '11px' }}>
              Quick Links
            </h4>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              <li>
                <button 
                  type="button"
                  className="footer-nav-link"
                  onClick={() => {
                    if (setCurrentTab) setCurrentTab('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  className="footer-nav-link"
                  onClick={() => {
                    if (setCurrentTab) setCurrentTab('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  className="footer-nav-link"
                  onClick={() => {
                    if (setCurrentTab) setCurrentTab('gallery');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  className="footer-nav-link"
                  onClick={() => {
                    if (setCurrentTab) setCurrentTab('home');
                    setTimeout(() => {
                      const el = document.getElementById('atmosphere') || document.querySelector('.atmosphere-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      else window.scrollTo({ top: 700, behavior: 'smooth' });
                    }, 120);
                  }}
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  className="footer-nav-link"
                  onClick={() => {
                    const el = document.getElementById('footer-contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 – Contact Information */}
          <div id="footer-contact" className="col-12 col-sm-6 col-md-5 col-lg-4">
            <h4 className="label-caps text-gold fw-semibold mb-3 mb-md-4" style={{ letterSpacing: '0.12em', fontSize: '11px' }}>
              Contact Information
            </h4>
            <ul className="list-unstyled d-flex flex-column gap-3 mb-0" style={{ fontSize: '13.5px', color: '#D9D0C2' }}>
              <li className="d-flex align-items-start gap-2">
                <span className="text-gold mt-1 d-inline-flex flex-shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span style={{ lineHeight: '1.6' }}>117 Neelum Block, Allama Iqbal Town, Lahore.</span>
              </li>

              <li className="d-flex align-items-center gap-2">
                <span className="text-gold d-inline-flex flex-shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a href="tel:+923001234567" className="footer-contact-link">
                  +92 300 1234567
                </a>
              </li>

              <li className="d-flex align-items-center gap-2">
                <span className="text-gold d-inline-flex flex-shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <span>10:00 AM – 11:00 PM</span>
              </li>

              <li className="d-flex align-items-center gap-2 pt-1">
                <span className="text-gold d-inline-flex flex-shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                </span>
                <a 
                  href="https://wa.me/923001234567" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-contact-link d-inline-flex align-items-center gap-1"
                >
                  <span>WhatsApp: +92 300 1234567</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-4 mt-4 mt-lg-5 text-center" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <p className="mb-0" style={{ fontSize: '12px', color: '#8E867D', letterSpacing: '0.04em' }}>
            © 2026 Jerry Hair Saloon. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
