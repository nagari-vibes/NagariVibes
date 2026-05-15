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
      <div className={styles.brandTicker}>
        <p className="mono">BRANDS WE'VE WORKED WITH</p>
        <div className={styles.marqueeContainer}>
          <motion.div 
            className={styles.marquee}
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {brands.map((brand, i) => (
              <span key={`${brand}-${i}`} className={styles.brandName}>{brand}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
