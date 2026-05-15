import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Trophy, Users, Zap, Award, Star, ArrowLeft } from 'lucide-react';
import styles from './NagariVibes.module.css';

export default function NagariVibes() {
  const specializations = [
    "Social Media Promotions",
    "Brand Collaborations",
    "Viral Reels & Creative Content",
    "Local Event Coverage",
    "Food & Travel Features",
    "Business Promotions",
    "Digital Marketing Campaigns"
  ];

  const highlights = [
    "Brand Promotions & Sponsored Reels",
    "Social Media Campaigns",
    "Product & Service Marketing",
    "Event & Launch Coverage",
    "Creative Advertisement Shoots",
    "Local Business Branding"
  ];

  const brands = ["Paytm", "Redtape", "Noise", "Prestige", "Local Cafés", "Startup & Local Businesses"];

  return (
    <main className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <Link href="/" className={styles.backButton}>
            <ArrowLeft size={18} />
            <span>Back to Hub</span>
          </Link>
          <div className={styles.badge}>Nagari Vibes Platform</div>
          <h1 className={styles.title}>
            SHAPING THE <span className={styles.accent}>CULTURE</span> OF AHILYANAGAR
          </h1>
          <p className={styles.description}>
            A fast-growing digital media platform dedicated to showcasing the culture, lifestyle, food, travel, events, and vibrant vibes of our city.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitle}>The Voice of the City</h2>
              <p>
                From trending reels to local stories, we create engaging content that connects thousands of Nagarkar every day. 
                With a strong social media presence and creative storytelling, Nagari Vibes has become a trusted digital platform 
                for local businesses, brands, and youth culture.
              </p>
              <div className={styles.specializations}>
                {specializations.map((spec) => (
                  <div key={spec} className={styles.specItem}>
                    <CheckCircle size={18} className={styles.icon} />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.statsCard}>
              <div className={styles.stat}>
                <span className={styles.statNum}>100k+</span>
                <span className={styles.statLabel}>Monthly Reach</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>Daily</span>
                <span className={styles.statLabel}>Engagement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className={styles.collabs}>
        <div className="container">
          <div className={styles.headerCentered}>
            <h2 className={styles.sectionTitle}>Collaboration Highlights</h2>
            <p>We help brands build visibility, engagement, and trust through social media.</p>
          </div>
          
          <div className={styles.highlightsGrid}>
            {highlights.map((item, index) => (
              <div key={item} className={styles.highlightCard}>
                <div className={styles.hIndex}>0{index + 1}</div>
                <h3>{item}</h3>
              </div>
            ))}
          </div>

          <div className={styles.brandTicker}>
            <p className="mono">TRUSTED BY</p>
            <div className={styles.brandList}>
              {brands.map((brand) => (
                <span key={brand} className={styles.brandName}>{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className={styles.achievements}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Hall of Fame</h2>
          <div className={styles.awardsGrid}>
            <div className={styles.awardCard}>
              <Trophy className={styles.awardIcon} size={48} />
              <div className={styles.awardInfo}>
                <span className={styles.awardPlace}>1st Prize (₹50,000)</span>
                <h3>Wet N Joy Shirdi</h3>
                <p>Reel Competition Winner</p>
              </div>
            </div>
            <div className={styles.awardCard}>
              <Star className={styles.awardIcon} size={48} />
              <div className={styles.awardInfo}>
                <span className={styles.awardPlace}>1st in Maharashtra</span>
                <h3>Film City Mumbai</h3>
                <p>National Reel Competition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>Ready to go viral?</h2>
            <p>Let's showcase your brand to the heart of Ahilyanagar.</p>
            <Link href="/#contact" className={styles.ctaBtn}>Start a Collaboration</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
