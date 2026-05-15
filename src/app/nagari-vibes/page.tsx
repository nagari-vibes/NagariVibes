import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Trophy, Users, Zap, Award, Star, ArrowLeft, Heart } from 'lucide-react';
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
          <div className={styles.topBar}>
            <Link href="/" className={styles.backButton}>
              <ArrowLeft size={18} />
              <span>Back to Hub</span>
            </Link>
            <div className={styles.badge}>Flagship Media Platform</div>
          </div>
          
          <div className={styles.heroLogoWrapper}>
            <Image src="/logos/logo-removebg-preview.png" alt="Nagari Vibes" width={140} height={140} className={styles.heroLogo} priority />
          </div>

          <h1 className={styles.title}>
            SHAPING THE <span className={styles.accent}>CULTURE</span><br/> OF AHILYANAGAR
          </h1>
          <p className={styles.description}>
            The #1 digital media network dedicated to showcasing the lifestyle, food, travel, events, and vibrant youth culture of our city.
          </p>
          <div className={styles.heroActions}>
            <a href="#about" className={styles.primaryBtn}>Explore Media Kit</a>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className={styles.achievements}>
        <div className="container">
          <div className={styles.headerCentered}>
            <h2 className={styles.sectionTitle}>Hall of Fame</h2>
            <p>Recognized for excellence in digital content creation.</p>
          </div>
          <div className={styles.awardsGrid}>
            <div className={styles.awardCard}>
              <div className={styles.awardImageWrapper}>
                <Image src="/wetnjoy-win.jpeg" alt="Wet N Joy Win" fill className={styles.awardImage} />
              </div>
              <div className={styles.awardBody}>
                <Trophy className={styles.awardIcon} size={48} />
                <div className={styles.awardInfo}>
                  <span className={styles.awardPlace}>1st Prize (₹50,000)</span>
                  <h3>Wet N Joy Shirdi</h3>
                  <p>Official Reel Competition Winner</p>
                </div>
              </div>
            </div>
            <div className={styles.awardCard}>
              <div className={styles.awardBody}>
                <Star className={styles.awardIcon} size={48} />
                <div className={styles.awardInfo}>
                  <span className={styles.awardPlace}>1st in Maharashtra</span>
                  <h3>Film City Mumbai</h3>
                  <p>National Reel Creation Contest</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.brandTicker} style={{ marginTop: '4rem' }}>
            <p className="mono" style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--muted)' }}>BRANDS WE'VE WORKED WITH</p>
            <div className={styles.brandList}>
              {brands.map((brand) => (
                <span key={brand} className={styles.brandName}>{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitle}>The Digital Voice of the City</h2>
              <p>
                From trending reels to untold local stories, we create high-retention content that connects thousands of Nagarkar every single day. 
                With a massive social media presence and data-driven storytelling, Nagari Vibes is the ultimate launchpad 
                for local businesses, national brands, and community events.
              </p>
              
              <div className={styles.specializations}>
                {specializations.map((spec) => (
                  <div key={spec} className={styles.specItem}>
                    <div className={styles.iconBox}>
                      <CheckCircle size={16} className={styles.icon} />
                    </div>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.bentoStats}>
              <div className={`${styles.statCard} ${styles.statPrimary}`}>
                <Heart size={32} className={styles.socialIcon} />
                <span className={styles.statNum}>100k+</span>
                <span className={styles.statLabel}>Active Followers</span>
              </div>
              <div className={styles.statCard}>
                <Zap size={24} className={styles.socialIcon} />
                <span className={styles.statNum}>2M+</span>
                <span className={styles.statLabel}>Monthly Impressions</span>
              </div>
              <div className={styles.statCard}>
                <Users size={24} className={styles.socialIcon} />
                <span className={styles.statNum}>Daily</span>
                <span className={styles.statLabel}>Viral Engagement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className={styles.collabs}>
        <div className="container">
          <div className={styles.headerCentered}>
            <div className={styles.badge}>Our Services</div>
            <h2 className={styles.sectionTitle}>Collaboration & Impact</h2>
            <p>We help modern brands build unmatched visibility and trust through localized social media strategies.</p>
          </div>
          
          <div className={styles.highlightsGrid}>
            {highlights.map((item, index) => (
              <div key={item} className={styles.highlightCard}>
                <div className={styles.hIndex}>0{index + 1}</div>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>Ready to go viral?</h2>
            <p>Leverage the biggest digital community in Ahilyanagar.</p>
            <Link href="/#contact" className={styles.ctaBtn}>Start a Campaign</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
