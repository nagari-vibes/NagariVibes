import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Image src="/logos/vibes-media.png" alt="Vibes Media" width={160} height={60} className={styles.logoImage} />
            </Link>
            <p>Premium digital agency based in Ahilyanagar. We create vibes that matter.</p>
          </div>
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <span className="mono">Social</span>
              <a href="https://www.instagram.com/vibes_media____" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
            </div>
            <div className={styles.linkGroup}>
              <span className="mono">Explore</span>
              <Link href="#services">Services</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© 2026 Nagari Vibes. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
