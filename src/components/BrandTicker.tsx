'use client';

import { motion } from 'framer-motion';
import styles from './BrandTicker.module.css';

const brands = [
  "Paytm", "Redtape", "Noise", "Prestige", "Local Cafés", "Startup & Local Businesses",
  "Paytm", "Redtape", "Noise", "Prestige", "Local Cafés", "Startup & Local Businesses"
];

export default function BrandTicker() {
  return (
    <section className={styles.brands}>
      <div className={styles.tapeWrapper}>
        <div className={styles.marqueeContainer}>
          <motion.div 
            className={styles.marquee}
            animate={{ x: [0, -1500] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {brands.map((brand, i) => (
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
