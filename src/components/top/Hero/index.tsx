import Image from 'next/image';

export default function Hero() {
  return (
    <section className='relative h-80 w-full sm:h-[32rem]'>
      <Image
        src='/images/hero.jpg'
        alt='Hero Image'
        fill
        className='object-cover object-left'
        priority
      />
    </section>
  );
}
