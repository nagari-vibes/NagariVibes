import React from 'react';
import { Coffee, Pizza, Utensils, Camera, Map, Star } from 'lucide-react';
import styles from '../nagari-vibes/NagariVibes.module.css';
import Link from 'next/link';

export default function DessertVibes() {
  const features = [
    "Café & Restaurant Reviews",
    "Food Styling & Photography",
    "Chef Spotlights",
    "Hidden Gem Discovery",
    "Culinary Event Coverage",
    "Menu Launch Campaigns"
  ];

  return (
    <main className={styles.page}>
      <section className={styles.hero} style={{ backgroundImage: "url('/logos/dessert-vibes.png')", backgroundSize: '25%' }}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.badge}>Dessert Vibes</div>
          <h1 className={styles.title}>
            AHILYANAGAR'S <span className={styles.accent}>FLAVOR</span> HUB
          </h1>
          <p className={styles.description}>
            The ultimate guide to the city's food and lifestyle scene. We find the best tastes and the most aesthetic spots so you don't have to.
          </p>
        </div>
      </section>

      <section className={styles.about}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitle}>Curating the Tastes</h2>
              <p>
                Dessert Vibes is for the foodies and lifestyle enthusiasts. 
                We explore the heart of the city's kitchens, from street food to fine dining, 
                capturing the textures and flavors that make Ahilyanagar delicious.
              </p>
              <div className={styles.specializations}>
                {features.map((spec) => (
                  <div key={spec} className={styles.specItem}>
                    <Coffee size={18} className={styles.icon} />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.statsCard}>
              <div className={styles.stat}>
                <span className={styles.statNum}>Tasty</span>
                <span className={styles.statLabel}>Content Creator</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>100%</span>
                <span className={styles.statLabel}>Aesthetic Focus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaBox} style={{ background: '#f8f8f8', color: '#000' }}>
            <h2>Are you a Restaurant Owner?</h2>
            <p>Let's make your menu go viral.</p>
            <Link href="/#contact" className={styles.ctaBtn}>Get Featured</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
