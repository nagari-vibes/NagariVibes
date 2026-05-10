import React from 'react';
import styles from './FontChecker.module.css';

// Import the Balanced Elite fonts
import "@fontsource/plus-jakarta-sans/800.css";
import "@fontsource/urbanist/800.css";
import "@fontsource/manrope/800.css";
import "@fontsource/archivo-black/400.css";
import "@fontsource/rajdhani/700.css";
import "@fontsource/syne/800.css";
import "@fontsource/outfit/700.css";
import "@fontsource/syncopate/700.css";

export default function FontChecker() {
  const fonts = [
    { 
      name: 'Plus Jakarta Sans', 
      family: '"Plus Jakarta Sans", sans-serif', 
      desc: 'The Golden Standard. Perfectly balanced, modern, and elite.',
      style: { fontWeight: 800 }
    },
    { 
      name: 'Urbanist', 
      family: '"Urbanist", sans-serif', 
      desc: 'The Minimalist. Elegant, clean, and low-profile.',
      style: { fontWeight: 800 }
    },
    { 
      name: 'Manrope', 
      family: '"Manrope", sans-serif', 
      desc: 'The Professional. High-performance, sharp, and stable.',
      style: { fontWeight: 800 }
    },
    { 
      name: 'Archivo Black', 
      family: '"Archivo Black", sans-serif', 
      desc: 'The Heavyweight. Pure impact without being too wide.',
      style: { fontWeight: 400 }
    },
    { 
      name: 'Syne', 
      family: '"Syne", sans-serif', 
      desc: 'The Creative (For reference).',
      style: { fontWeight: 800 }
    },
    { 
      name: 'Syncopate', 
      family: '"Syncopate", sans-serif', 
      desc: 'The Architect (For reference).',
      style: { fontWeight: 700 }
    },
  ];

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <span className="mono">Laboratory</span>
        <h1 className={styles.title}>TYPOGRAPHY <span className={styles.accent}>ARSENAL</span></h1>
        <p className={styles.subtitle}>Auditioning the new voice for Nagari Vibes Hero Section.</p>
      </header>

      <div className={styles.grid}>
        {fonts.map((font) => (
          <div key={font.name} className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.fontName}>{font.name}</h2>
              <p className={styles.fontDesc}>{font.desc}</p>
            </div>
            
            <div className={styles.preview} style={{ fontFamily: font.family, ...font.style }}>
              ELEVATING YOUR<br />
              DIGITAL PRESENCE
            </div>

            <div className={styles.characterSet} style={{ fontFamily: font.family }}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              0123456789 &*!@#
            </div>
          </div>
        ))}
      </div>

      <footer className={styles.footer}>
        <a href="/" className={styles.backBtn}>← Back to Field</a>
      </footer>
    </main>
  );
}
