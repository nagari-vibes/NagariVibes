import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CompetitionPromo from '@/components/CompetitionPromo';
import HallOfFame from '@/components/HallOfFame';
import BrandTicker from '@/components/BrandTicker';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getDb } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  const db = await getDb();
  const showCompetition = db.settings?.competitionEnabled ?? true;

  return (
    <main>
      <Header />
      <Hero />
      {showCompetition && <CompetitionPromo />}
      <HallOfFame />
      <BrandTicker />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
