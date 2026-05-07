'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Video, Zap, Target, Palette } from 'lucide-react';
import styles from './Services.module.css';

const services = [
  {
    title: 'Promotional Reels',
    description: 'High-octane short-form content designed to capture attention and drive viral growth.',
    icon: <Video size={32} />
  },
  {
    title: 'Brand Architecture',
    description: 'Building strong visual identities and brand stories that stand the test of time.',
    icon: <Palette size={32} />
  },
  {
    title: 'Content Strategy',
    description: 'Tactical planning and data-driven insights to optimize your digital impact.',
    icon: <Target size={32} />
  },
  {
    title: 'Paid Social Media',
    description: 'Precision-targeted ad campaigns that convert interest into revenue.',
    icon: <Zap size={32} />
  }
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <div className={styles.header}>
          <span className="mono">Our Arsenal</span>
          <h2 className={styles.title}>SERVICES WE <span className={styles.accent}>DEPLOY</span></h2>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={styles.card}
            >
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
