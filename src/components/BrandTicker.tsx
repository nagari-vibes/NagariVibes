'use client';

import React from 'react';
import styles from './BrandTicker.module.css';

const brands = ["Paytm", "Redtape", "Noise", "Prestige", "Local Cafés", "Startup & Local Businesses"];

export default function BrandTicker() {
  return (
    <section className={styles.brands}>
      <div className="container">
        <div className={styles.brandTicker}>
          <p className="mono">BRANDS WE'VE WORKED WITH</p>
          <div className={styles.brandList}>
            {brands.map((brand) => (
              <span key={brand} className={styles.brandName}>{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
