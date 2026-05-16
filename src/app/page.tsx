import { promises as fs } from 'fs';
import path from 'path';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CompetitionBanner from '@/components/CompetitionBanner';
import HallOfFame from '@/components/HallOfFame';
import BrandTicker from '@/components/BrandTicker';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getSettings() {
  try {
    const dbPath = path.join(process.cwd(), 'db.json');
    const data = await fs.readFile(dbPath, 'utf8');
    const db = JSON.parse(data);
    return db.settings;
  } catch (error) {
    return { showCompetitionBanner: true };
  }
}

export default async function Home() {
  const settings = await getSettings();

  return (
    <main>
      <Header />
      <Hero />
      {settings.showCompetitionBanner && <CompetitionBanner />}
      <HallOfFame />
      <BrandTicker />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
