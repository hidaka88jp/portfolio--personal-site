import About from '@/components/top/About';
import Hero from '@/components/top/Hero';
import TopNotes from '@/components/top/TopNotes';
import TopWorks from '@/components/top/TopWorks';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TopWorks />
      <TopNotes />
    </>
  );
}
