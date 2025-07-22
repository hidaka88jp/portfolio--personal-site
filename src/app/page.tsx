import About from '@/components/top/About';
import Hero from '@/components/top/Hero';
import TopWorks from '@/components/top/TopWorks';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TopWorks />
      <p className='text-center'>main</p>
    </>
  );
}
