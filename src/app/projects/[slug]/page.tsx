import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './ProjectDetails.module.css';

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const dbPath = path.join(process.cwd(), 'db.json');
  const fileContent = await fs.readFile(dbPath, 'utf8');
  const db = JSON.parse(fileContent);
  
  const expectedLink = `/projects/${slug}`;
  const project = (db.projects || []).find((p: any) => p.link === expectedLink);
  
  if (!project) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.hero}>
        <div className={styles.imageContainer}>
          <Image 
            src={project.imageUrl} 
            alt={project.title} 
            fill 
            className={styles.heroImage}
            priority
          />
          <div className={styles.overlay}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className="mono">{project.category}</span>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.date}>{new Date(project.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>

      <div className={`container ${styles.contentContainer}`}>
        {project.description && (
          <div className={styles.details}>
            <h2>Overview</h2>
            <p className={styles.description}>{project.description}</p>
          </div>
        )}
        <div className={styles.sidebar}>
          <div className={styles.infoBox}>
            <span className="mono">Category</span>
            <p>{project.category}</p>
          </div>
          <div className={styles.infoBox}>
            <span className="mono">Launched</span>
            <p>{new Date(project.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</p>
          </div>
        </div>
      </div>
      
      <div className={styles.navBottom}>
        <Link href="/#projects" className={styles.backLink}>← Back to all projects</Link>
      </div>
      <Footer />
    </main>
  );
}
