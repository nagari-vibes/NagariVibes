'use client';

import React from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!res.ok) throw new Error();
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

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
                <p>ashishtribhuvan1525@gmail.com</p>
              </div>
              <div>
                <span className="mono">Phone</span>
                <p>+91 84214 95454</p>
              </div>
              <div>
                <span className="mono">Location</span>
                <p>Ahilyanagar, Maharashtra</p>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input required type="text" id="name" placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input required type="email" id="email" placeholder="john@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea required id="message" rows={5} placeholder="Tell us about your project..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
            </div>
            <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
            </button>
            {status === 'error' && <p style={{color: 'red', marginTop: '1rem'}}>Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
