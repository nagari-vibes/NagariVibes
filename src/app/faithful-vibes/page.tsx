import React from 'react';
import { Church, Sunrise, BookOpen, Music, Sun, Shield } from 'lucide-react';
import styles from '../nagari-vibes/NagariVibes.module.css';
import Link from 'next/link';

export default function FaithfulVibes() {
  const pillars = [
    "Spiritual Event Coverage",
    "Community Stories",
    "Cultural Heritage Preservation",
    "Devotional Content Creation",
    "Faith-Based Marketing",
    "Pilgrimage Guides"
  ];

  return (
    <main className={styles.page}>
      <section className={styles.hero} style={{ backgroundImage: "url('/logos/faithful-vibes.png')", backgroundSize: '25%' }}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.badge}>Faithful Vibes</div>
          <h1 className={styles.title}>
            CELEBRATING <span className={styles.accent}>FAITH</span> & COMMUNITY
          </h1>
          <p className={styles.description}>
            Connecting the spiritual heart of the city. We highlight the sacred traditions, events, and stories that bind our community together.
          </p>
        </div>
      </section>

      <section className={styles.about}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitle}>Rooted in Tradition</h2>
              <p>
                Faithful Vibes is a dedicated space for the spiritual and cultural heritage of Ahilyanagar. 
                We believe in preserving the values that define us while bringing them into the digital age 
                through respectful and powerful storytelling.
              </p>
              <div className={styles.specializations}>
                {pillars.map((spec) => (
                  <div key={spec} className={styles.specItem}>
                    <Sunrise size={18} className={styles.icon} />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.statsCard}>
              <div className={styles.stat}>
                <span className={styles.statNum}>Sacred</span>
                <span className={styles.statLabel}>Storytelling</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>Unity</span>
                <span className={styles.statLabel}>Driven Approach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaBox} style={{ background: '#1a1a1a', color: '#fff', border: '1px solid var(--primary)' }}>
            <h2>Share Your Journey</h2>
            <p>Connect your community with the city.</p>
            <Link href="/#contact" className={styles.ctaBtn} style={{ background: 'var(--primary)', color: '#000' }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
