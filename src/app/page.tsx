import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
