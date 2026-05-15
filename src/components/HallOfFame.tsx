'use client';

import React from 'react';
import Image from 'next/image';
import styles from './HallOfFame.module.css';

export default function HallOfFame() {
  return (
    <section className={styles.achievements}>
      <div className="container">
        <div className={styles.headerCentered}>
          <h2 className={styles.sectionTitle}>Hall of Fame</h2>
          <p>Recognized for excellence in digital content creation.</p>
        </div>
        <div className={styles.awardsGrid}>
          <div className={styles.awardCard}>
            <div className={styles.awardImageWrapper}>
              <Image 
                src="/wetnjoy-win.jpeg" 
                alt="Wet N Joy Win" 
                fill 
                className={`${styles.awardImage} ${styles.wetnjoyImage}`} 
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className={styles.awardBody}>
              <div className={styles.awardInfo}>
                <span className={styles.awardPlace}>1st Prize (₹50,000)</span>
                <h3>Wet N Joy Shirdi</h3>
                <p>Official Reel Competition Winner</p>
              </div>
            </div>
          </div>
          <div className={styles.awardCard}>
            <div className={styles.awardImageWrapper}>
              <Image 
                src="/mumbai-filmcity.jpeg" 
                alt="Film City Mumbai Win" 
                fill 
                className={`${styles.awardImage} ${styles.mumbaiImage}`} 
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className={styles.awardBody}>
              <div className={styles.awardInfo}>
                <span className={styles.awardPlace}>1st in Maharashtra</span>
                <h3>Film City Mumbai</h3>
                <p>National Reel Creation Contest</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
