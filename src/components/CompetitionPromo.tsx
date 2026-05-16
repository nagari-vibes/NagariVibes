'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Trophy, ArrowRight, Video } from 'lucide-react';
import styles from './CompetitionPromo.module.css';

export default function CompetitionPromo() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.banner}
        >
          <div className={styles.content}>
            <div className={styles.badge}>
              <Trophy size={16} />
              <span>LIVE COMPETITION</span>
            </div>
            <h2 className={styles.title}>
              NAGARI VIBES <br />
              <span className={styles.accent}>REELS CLASH</span>
            </div>
            <p className={styles.description}>
              Showcase your creativity and win up to <strong>₹10,000</strong>. Join Ahilyanagar's biggest reel competition today.
            </p>
            <div className={styles.prizes}>
              <div className={styles.prize}>1st: ₹10k</div>
              <div className={styles.prize}>2nd: ₹7k</div>
              <div className={styles.prize}>3rd: ₹5k</div>
            </div>
            <Link href="/reels-competition" className={styles.cta}>
              ENTER NOW <ArrowRight size={20} />
            </Link>
          </div>
          <div className={styles.imageSide}>
            <div className={styles.videoIcon}>
              <Video size={48} />
            </div>
            <img src="/dedicated-poster.jpeg" alt="Competition Poster" className={styles.poster} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
