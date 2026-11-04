import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

export { motion, AnimatePresence, useInView };

export const prefersReducedMotion = () => {
  return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Smooth Luxury Editorial Cubic-Bezier Easing
export const easeLuxury = [0.22, 1, 0.36, 1];

export const fadeInUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.65, ease: easeLuxury } 
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.5, ease: easeLuxury } 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

export const cardItemAnim = {
  hidden: { opacity: 0, y: 22 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.55, ease: easeLuxury } 
  }
};

// Animated Counter Component
export function AnimatedCounter({ value, duration = 1.8, prefix = '', suffix = '', decimals = 0 }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const inView = useInView(counterRef, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion()) {
      setCount(value);
      return;
    }

    let startTime = null;
    let frameId;
    const numericTarget = typeof value === 'number' ? value : parseFloat(value.toString().replace(/,/g, ''));

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = numericTarget * ease;
      setCount(current);
      if (progress < 1) {
        frameId = requestAnimationFrame(updateCounter);
      }
    };

    frameId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(frameId);
  }, [inView, value, duration]);

  const formatted = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toLocaleString();

  return (
    <span ref={counterRef}>
      {prefix}{formatted}{suffix}
    </span>
  );
}

// Magnetic Button Component
export function MagneticButton({ children, className = '', style = {}, onClick, disabled, strength = 0.18, ...props }) {
  const btnRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  
  const isTouch = useMemo(() => {
    return typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = (e) => {
    if (isTouch || prefersReducedMotion() || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * strength, y: y * strength });
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={btnRef}
      className={className}
      style={style}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', damping: 15, stiffness: 160, mass: 0.1 }}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.96 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

// Parallax Box Component
export function ParallaxBox({ children, className = '', speed = 0.12, style = {} }) {
  const ref = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const scrolled = window.innerHeight - rect.top;
            if (scrolled > 0 && rect.bottom > 0) {
              setOffsetY((scrolled - window.innerHeight / 2) * speed);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      ref={ref} 
      className={className} 
      style={{ ...style, transform: `translate3d(0, ${offsetY}px, 0)`, willChange: 'transform' }}
    >
      {children}
    </div>
  );
}

