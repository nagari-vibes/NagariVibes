'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <Link href="/" className={styles.logo}>
          <Image src="/logo-full.png" alt="Nagari Vibes" width={160} height={77} className={styles.logoImage} priority />
        </Link>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <Link href="#services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#contact" className={styles.cta} onClick={() => setIsOpen(false)}>Get in Touch</Link>
        </nav>

        <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
