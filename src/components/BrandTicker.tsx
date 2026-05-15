'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './BrandTicker.module.css';

const brands = [
  "Paytm", "Redtape", "Noise", "Prestige", "Local Cafés", "Startup & Local Businesses"
];

export default function BrandTicker() {
  // Triple the items to ensure seamless flow on all screen sizes
  const items = [...brands, ...brands, ...brands];

  return (
    <section className={styles.brands}>
      <div className="container">
        <div className={styles.headerCentered}>
          <h2 className={styles.sectionTitle}>Partner Brands</h2>
          <p className={styles.sectionSubtitle}>Collaborating with industry leaders to deliver excellence.</p>
        </div>
      </div>
      <div className={styles.tapeWrapper}>
        <div className={styles.marqueeContainer}>
          <motion.div 
            className={styles.marquee}
            animate={{ x: [0, "-33.33%"] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {items.map((brand, i) => (
              <React.Fragment key={`${brand}-${i}`}>
                <span className={styles.brandName}>{brand}</span>
                <span className={styles.separator}>✦</span>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
