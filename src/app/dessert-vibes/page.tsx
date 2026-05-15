import React from 'react';
import { Coffee, Pizza, Utensils, Camera, Map, Star, ArrowLeft } from 'lucide-react';
import styles from '../nagari-vibes/NagariVibes.module.css';
import Link from 'next/link';

export default function DessertVibes() {
  const features = [
    "Signature Dessert Bowls",
    "Live Preparation",
    "Fresh Ingredients",
    "Professor Chowk Landmark",
    "Late Night Cravings Hub",
    "Aesthetic Street Food"
  ];

  return (
    <main className={styles.page}>
      <section className={styles.hero} style={{ backgroundImage: "url('/logos/dessert-vibes.png')", backgroundSize: '25%' }}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.topBar}>
            <Link href="/" className={styles.backButton}>
              <ArrowLeft size={18} />
              <span>Back to Hub</span>
            </Link>
            <div className={styles.badge}>Dessert Vibes Stall</div>
          </div>
          <h1 className={styles.title}>
            THE BEST <span className={styles.accent}>DESSERT BOWLS</span> IN THE CITY
          </h1>
          <p className={styles.description}>
            Visit us at Professor Chowk, Savedi. Experience the most aesthetic and delicious dessert bowls in Ahilyanagar, made fresh for you.
          </p>
        </div>
      </section>

      <section className={styles.about}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitle}>Sweetness on the Street</h2>
              <p>
                Dessert Vibes is more than just a brand—it's a destination. Located in the heart of Savedi's 
                Professor Chowk, our stall has become a favorite for those seeking high-quality, 
                creative dessert bowls that look as good as they taste.
              </p>
              <div className={styles.specializations}>
                {features.map((spec) => (
                  <div key={spec} className={styles.specItem}>
                    <Utensils size={18} className={styles.icon} />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.statsCard}>
              <div className={styles.stat}>
                <span className={styles.statNum}>Savedi</span>
                <span className={styles.statLabel}>Location</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>Fresh</span>
                <span className={styles.statLabel}>Daily Made</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaBox} style={{ background: '#f8f8f8', color: '#000' }}>
            <h2>Craving something sweet?</h2>
            <p>Come visit us tonight at Professor Chowk, Savedi, Ahilyanagar.</p>
            <a href="https://maps.app.goo.gl/u6R5QBVaUE9qzfRo9" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>Get Directions</a>
          </div>
        </div>
      </section>
    </main>
  );
}
