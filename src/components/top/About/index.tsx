import TopSectionTitle from '@/components/shared/TopSectionTitle';
import Image from 'next/image';

export default function About() {
  return (
    <section id='about' className='px-4 pb-16 sm:px-8 sm:pb-20'>
      <div className='mx-auto w-full max-w-94 sm:max-w-5xl'>
        <TopSectionTitle title='About' subTitle='Introduce Myself' />
        <div className='grid gap-7 sm:grid-cols-2 sm:gap-10'>
          <Image
            src='/images/about.webp'
            alt='About Image'
            width={3024}
            height={3780}
            className='aspect-square w-full object-cover object-bottom sm:order-2 sm:aspect-auto'
          />
          <div className='h-[300px] w-full bg-amber-500 sm:order-1'></div>
        </div>
      </div>
    </section>
  );
}
