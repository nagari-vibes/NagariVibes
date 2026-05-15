'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Grid, ChevronRight } from 'lucide-react';
import styles from './Header.module.css';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const subBrands = [
    { name: 'Nagari Vibes', path: '/nagari-vibes', logo: '/logos/nagari-vibes.png' },
    { name: 'Faithful Vibes', path: '/faithful-vibes', logo: '/logos/faithful-vibes.png' },
    { name: 'Dessert Vibes', path: '/dessert-vibes', logo: '/logos/dessert-vibes.png' },
    { name: 'Vibes Foundation', path: '/vibes-foundation', logo: '/logos/vibes-foundation.png' },
    { name: 'Nagar Real Estate', path: '/real-estate', logo: '/logos/real-estate.png' },
  ];

  useEffect(() => {
    if (isOpen || isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isDrawerOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.left}>
          <button 
            className={styles.drawerButton} 
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open Brands Menu"
          >
            <Grid size={24} />
          </button>
          
          <Link href="/" className={styles.logo}>
            <Image src="/logos/vibes-media.png" alt="Vibes Media" width={180} height={70} className={styles.logoImage} priority />
          </Link>
        </div>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <Link href="/#services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/#projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/#about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/#contact" className={styles.cta} onClick={() => setIsOpen(false)}>Get in Touch</Link>
        </nav>

        <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Brands Drawer Overlay */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div 
              className={styles.drawerOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
            />
            <motion.aside 
              className={styles.drawer}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: 'anticipate' }}
            >
              <div className={styles.drawerHeader}>
                <span className="mono">VIBES NETWORK</span>
                <button onClick={() => setIsDrawerOpen(false)} className={styles.closeDrawer}>
                  <X size={24} />
                </button>
              </div>
              
              <div className={styles.drawerContent}>
                <p className={styles.drawerHint}>Explore our specialized verticals</p>
                <div className={styles.brandList}>
                  {subBrands.map((brand) => (
                    <Link 
                      key={brand.name} 
                      href={brand.path} 
                      className={styles.brandLink}
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      <div className={styles.brandInfo}>
                        <div className={styles.brandIconWrapper}>
                          <Image src={brand.logo} alt={brand.name} width={40} height={40} />
                        </div>
                        <span className={styles.brandName}>{brand.name}</span>
                      </div>
                      <ChevronRight size={18} className={styles.arrow} />
                    </Link>
                  ))}
                </div>
              </div>

              <div className={styles.drawerFooter}>
                <p>© 2026 Vibes Media Group</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
