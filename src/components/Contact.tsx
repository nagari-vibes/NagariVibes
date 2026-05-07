'use client';

import React from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <span className="mono">Ready to elevate?</span>
            <h2 className={styles.title}>LET'S START <br /><span className={styles.accent}>THE VIBE</span></h2>
            <p className={styles.description}>
              Have a project in mind? We'd love to hear from you. Drop us a message and let's create something extraordinary together.
            </p>
            <div className={styles.details}>
              <div>
                <span className="mono">Email</span>
                <p>hello@nagarivibes.com</p>
              </div>
              <div>
                <span className="mono">Phone</span>
                <p>+91 98765 43210</p>
              </div>
              <div>
                <span className="mono">Location</span>
                <p>Ahilyanagar, Maharashtra</p>
              </div>
            </div>
          </div>

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="John Doe" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="john@example.com" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
