'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.container}`}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.content}
        >
          <span className="mono">Digital Agency • Ahilyanagar</span>
          <h1 className={styles.title}>
            WHERE BRANDS MEET <br />
            <span className={styles.outline}>THE RIGHT VIBES</span>
          </h1>
          <p className={styles.description}>
            We blend tactical strategy with premium design to create digital experiences that resonate and convert. From viral reels to brand architecture, we bring the vibe.
          </p>
          <div className={styles.actions}>
            <button className={styles.primaryBtn}>Explore Arsenal</button>
            <button className={styles.secondaryBtn}>View Projects</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
