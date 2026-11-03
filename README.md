# Jerry Hair Saloon — Flagship Studio Website

> **Master Craftsmanship & Masculine Luxury**  
> Established 8 Years • 117 Neelum Block, Allama Iqbal Town, Lahore

A luxury barbershop and grooming web application built with **React**, **HTML5**, **CSS3**, **JavaScript (ES6+)**, and **Bootstrap 5**.

---

## 💈 Tech Stack

- **React 18**: Dynamic component state architecture (`useState`, `useMemo`, `useEffect`)
- **Bootstrap 5.3.3**: Fluid 12-column grid system, responsive utilities, flexbox, badges, and modals
- **Bootstrap Icons & Google Material Symbols**: High-precision barbering, grooming, and luxury icons
- **CSS3 / Luxury Noir Design System**:
  - Strict **0px border-radius** (straight-razor sharpness across all buttons, cards, images, and inputs)
  - Achromatic high-contrast editorial noir palette (`#0A0A0A`, `#131313`, `#1C1C1E`, `#FFFFFF`, `#8E8E93`, `#2C2C2E`)
  - **Bodoni Moda** luxury serif typography for display headlines
  - **Hanken Grotesk** geometric sans-serif typography for clean body legibility and hot-stamped tracking tags

---

## ✨ Features & Architecture

### 1. Home Section (`Home.jsx`)
- **Live Heritage Banner**: Real-time operating status and store timings (`Today: 10 AM – 11 PM`).
- **Editorial Hero Section**: Noir photography with call-to-action buttons for chair booking and menu browsing.
- **Trust Indicators**: 8+ Years in Iqbal Town, 4.9★ rating (1,200+ verified clients), Master Barbers, 7-day operations.
- **Studio Coordinates Card**: 117 Neelum Block (near Moon Market Hub) with one-click Google Maps directions and telephone concierge line.
- **Master Specialists Showcase**: Jerry (Founder & Master Craftsman), Tariq (Fade Specialist), Adnan (Spa & Wellness).
- **The Jerry Experience**: Restored hydraulic vintage chairs, medical ultraviolet sanitization, and complimentary house brew.
- **Verified Testimonials**: Verified local reviews from Allama Iqbal Town clients.

### 2. The Craftsman Ledger (`Services.jsx`)
- **Category Filter Tabs**: All Services, Hair & Beard, Head Spa, Massages, Facials & Skin, Master Packages.
- **Hospital-Grade Sterilization Protocol Card**: Single-use sealed surgical razors, 70% isopropyl prep, and imported Uppercut Deluxe matte styling pomades.
- **Live Search Bar**: Instantly filter services by keyword.
- **Interactive Service Dossier**: Toggle services with real-time selection state and detailed ritual protocols.
- **Floating Sticky Cart Drawer**: Shows selected service count, total PKR investment, and immediate checkout link.

### 3. Studio Gallery & Portfolio (`Gallery.jsx`)
- **High-Contrast Portfolio Grid**: Displays local barbering imagery (`barber 1.jpg` through `barber 5.jpg` and studio shots).
- **Filter Chips**: All Portfolio, Haircuts & Fades, Shop Ambiance, Tools & Hygiene, Beard & Pattern.
- **Interactive Lightbox Modal**: Fullscreen zoom inspection with stylist credits and direct "Book This Style" button.

### 4. 4-Step Interactive Booking System (`Booking.jsx`)
- **Step 01 // Services**: Multi-service selection with pricing in PKR and duration.
- **Step 02 // Specialist**: Select Jerry (Chair #01), Tariq (Chair #02), or Adnan (Chair #03).
- **Step 03 // Schedule**: Select Day (Today, Tomorrow, Weekend, Prime) and Time Shift (Morning, Afternoon, Evening).
- **Step 04 // Client Ledger**: Client details (Name, Lahore phone number, custom styling directives, and payment method).
- **Live Booking Dossier**: Real-time receipt summary dynamically updating on the side.
- **Instant Digital Confirmation Modal**: Generates unique booking reference (e.g. `JH-8492`) with one-click **"Send Confirmation to WhatsApp"** direct dispatch link (`wa.me`).

### 5. VIP Resident Club Pass (`VipModal.jsx`)
- 8th Anniversary resident privilege pass for Neelum Block clients with promo code `NEELUM8` for 20% off scalp therapy and priority chair reservation.

---

## 🚀 How to Run

### Option A: Instant One-Click (No Installation Required)
Simply double-click **`start.bat`** or open **`index.html`** in any web browser (Chrome, Edge, Firefox, Safari).  
It loads the standalone React + Bootstrap application immediately with zero build step.

### Option B: Vite Dev Server (Modular React Project)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.

---

## 📁 File Structure

```
jerry-stitch/
├── index.html                   # Standalone browser-ready React + Bootstrap app
├── index-vite.html              # Vite entry point
├── start.bat                    # One-click Windows launcher
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite bundler configuration
├── barber 1.jpg - 5.jpg         # Local barbershop photography
├── Gemini_Generated_Image...    # Flagship studio visual
├── public/
│   └── images/                  # Public asset directory
└── src/
    ├── main.jsx                 # Vite React root
    ├── App.jsx                  # Main application router & state manager
    ├── styles/
    │   └── custom.css           # Noir Monochrome design system & Bootstrap overrides
    ├── data/
    │   ├── services.js          # Grooming catalog with PKR pricing & durations
    │   ├── barbers.js           # Specialists profiles (Jerry, Tariq, Adnan)
    │   ├── gallery.js           # Portfolio photo catalog
    │   └── reviews.js           # Verified client testimonials
    └── components/
        ├── Header.jsx           # Top luxury header & navigation tabs
        ├── BottomNav.jsx        # Mobile bottom navigation bar
        ├── Home.jsx             # Studio showcase, trust metrics, hero, location
        ├── Services.jsx         # Categorized service ledger & floating cart drawer
        ├── Gallery.jsx          # Filterable portfolio & lightbox trigger
        ├── Booking.jsx          # 4-step reservation wizard & live dossier
        ├── BookingConfirmationModal.jsx # Digital token & WhatsApp dispatch
        ├── QuickBookModal.jsx   # 60-second fast reservation drawer
        ├── LightboxModal.jsx    # Fullscreen image viewer
        ├── VipModal.jsx         # Jerry VIP Club resident pass
        └── Footer.jsx           # Coordinates, timings, links, copyright
```

---
*Jerry Hair Saloon • 117 Neelum Block, Allama Iqbal Town, Lahore • Est. 2016*

