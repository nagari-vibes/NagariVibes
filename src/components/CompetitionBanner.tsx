'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Trophy, ArrowRight, Video } from 'lucide-react';
import styles from './CompetitionBanner.module.css';

export default function CompetitionBanner() {
  return (
    <section className={styles.bannerSection}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.bannerCard}
        >
          <div className={styles.content}>
            <div className={styles.tag}>
              <Trophy size={16} />
              <span>LIVE COMPETITION</span>
            </div>
            <h2 className={styles.title}>
              NAGARI VIBES <span className={styles.accent}>REELS CLASH</span>
            </h2>
            <p className={styles.description}>
              Showcase the soul of Ahilyanagar. Win from a prize pool of <strong>₹22,000</strong>. 
              Submissions are now open for all local creators.
            </p>
            <div className={styles.actions}>
              <Link href="/reels-competition" className={styles.primaryBtn}>
                Enter Now <ArrowRight size={18} />
              </Link>
              <div className={styles.prizes}>
                <div className={styles.prizeItem}>🥇 ₹10k</div>
                <div className={styles.prizeItem}>🥈 ₹7k</div>
                <div className={styles.prizeItem}>🥉 ₹5k</div>
              </div>
            </div>
          </div>
          <div className={styles.visual}>
            <div className={styles.videoIconWrapper}>
              <Video size={48} className={styles.videoIcon} />
            </div>
            <div className={styles.glow}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
