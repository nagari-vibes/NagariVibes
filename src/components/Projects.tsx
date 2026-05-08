import React from 'react';
import fs from 'fs/promises';
import path from 'path';
import styles from './Projects.module.css';
import Image from 'next/image';

export default async function Projects() {
  const dbPath = path.join(process.cwd(), 'db.json');
  const fileContent = await fs.readFile(dbPath, 'utf8');
  const db = JSON.parse(fileContent);
  
  // Get featured projects
  const projects = (db.projects || []).filter((p: any) => p.featured !== false);

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <div className={styles.header}>
          <span className="mono">Selected Work</span>
          <h2 className={styles.title}>PROJECTS WE'VE <span className={styles.accent}>MASTERED</span></h2>
        </div>

        <div className={styles.grid}>
          {projects.map((project: any) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={project.imageUrl} 
                  alt={project.title} 
                  fill 
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={styles.cardOverlay}>
                  <span className="mono">{project.category}</span>
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link || '#'} className={styles.link}>View Case Study →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
