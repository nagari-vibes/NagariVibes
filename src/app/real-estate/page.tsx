import React from 'react';
import Image from 'next/image';
import { Home, Building, Key, MapPin, Search, TrendingUp, ArrowLeft } from 'lucide-react';
import styles from '../nagari-vibes/NagariVibes.module.css';
import Link from 'next/link';

export default function NagarRealEstate() {
  const services = [
    "Premium Property Showcases",
    "Real Estate Digital Marketing",
    "Architectural Cinematography",
    "Project Launch Campaigns",
    "Investor Relations Content",
    "Drone Site Surveys"
  ];

  return (
    <main className={styles.page}>
      <section className={styles.hero} style={{ backgroundImage: "url('/logos/real-estate.png')", backgroundSize: '25%' }}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.topBar}>
            <Link href="/" className={styles.backButton}>
              <ArrowLeft size={18} />
              <span>Back to Hub</span>
            </Link>
            <div className={styles.badge}>Nagar Real Estate</div>
          </div>
          
          <div className={styles.heroLogoWrapper}>
            <Image src="/logos/real-estate.png" alt="Nagar Real Estate" width={140} height={140} className={styles.heroLogo} priority />
          </div>

          <h1 className={styles.title}>
            THE FUTURE OF <span className={styles.accent}>PROPERTY</span><br/> MARKETING
          </h1>
          <p className={styles.description}>
            Transforming how real estate is discovered in Ahilyanagar. We combine high-end visuals with strategic digital reach for premium developers.
          </p>
          <div className={styles.heroActions}>
            <a href="https://www.instagram.com/nagar_real_estate_" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>Request a Proposal</a>
          </div>
        </div>
      </section>

      <section id="about" className={styles.about}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitle}>Digital First Real Estate</h2>
              <p>
                Nagar Real Estate is the specialized vertical of Vibes Media focused on the property sector. 
                We don't just list properties; we tell the story of a lifestyle. Our high-production tours 
                and targeted campaigns ensure your projects reach the right investors.
              </p>
              <div className={styles.specializations}>
                {services.map((spec) => (
                  <div key={spec} className={styles.specItem}>
                    <div className={styles.iconBox}>
                      <Building size={16} className={styles.icon} />
                    </div>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.bentoStats}>
              <div className={`${styles.statCard} ${styles.statPrimary}`}>
                <Home size={32} className={styles.socialIcon} />
                <span className={styles.statNum}>Premium</span>
                <span className={styles.statLabel}>Visual Standards</span>
              </div>
              <div className={styles.statCard}>
                <TrendingUp size={24} className={styles.socialIcon} />
                <span className={styles.statNum}>Targeted</span>
                <span className={styles.statLabel}>Investor Reach</span>
              </div>
              <div className={styles.statCard}>
                <Key size={24} className={styles.socialIcon} />
                <span className={styles.statNum}>100%</span>
                <span className={styles.statLabel}>Exclusivity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaBox} style={{ background: '#111', color: '#fff', border: '1px solid #333' }}>
            <h2 style={{ color: 'var(--primary)' }}>Market Your Project</h2>
            <p>Elevate your real estate brand with our production house.</p>
            <a href="https://www.instagram.com/nagar_real_estate_" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn} style={{ background: 'var(--primary)', color: '#000' }}>Request a Proposal</a>
          </div>
        </div>
      </section>
    </main>
  );
}
