import React from 'react';
import { Heart, Globe, Users, Gift, ShieldCheck, Sparkles } from 'lucide-react';
import styles from '../nagari-vibes/NagariVibes.module.css'; // Reusing the high-end layout system
import Link from 'next/link';

export default function VibesFoundation() {
  const initiatives = [
    "Community Support Programs",
    "Youth Empowerment",
    "Educational Workshops",
    "Environmental Awareness",
    "Local Artist Support",
    "Charity Collaborations"
  ];

  return (
    <main className={styles.page}>
      <section className={styles.hero} style={{ backgroundImage: "url('/logos/vibes-foundation.png')", backgroundSize: '25%' }}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.badge}>Vibes Foundation</div>
          <h1 className={styles.title}>
            CREATING AN <span className={styles.accent}>IMPACT</span> BEYOND MEDIA
          </h1>
          <p className={styles.description}>
            The social heart of Vibes Media. Dedicated to giving back to the community and empowering the next generation of creators in Ahilyanagar.
          </p>
        </div>
      </section>

      <section className={styles.about}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitle}>Our Social Mission</h2>
              <p>
                Vibes Foundation is built on the belief that digital reach should be used for good. 
                We leverage our platform to support local causes, highlight social issues, and provide resources 
                to those making a real difference in the city.
              </p>
              <div className={styles.specializations}>
                {initiatives.map((spec) => (
                  <div key={spec} className={styles.specItem}>
                    <Heart size={18} className={styles.icon} />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.statsCard}>
              <div className={styles.stat}>
                <span className={styles.statNum}>10+</span>
                <span className={styles.statLabel}>Local Projects</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>Community</span>
                <span className={styles.statLabel}>First Approach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaBox} style={{ background: '#eee', color: '#000' }}>
            <h2>Partner for Purpose</h2>
            <p>Do you have a cause that needs the Vibes reach?</p>
            <Link href="/#contact" className={styles.ctaBtn}>Get Involved</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
