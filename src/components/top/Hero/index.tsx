import Image from 'next/image';

export default function Hero() {
  return (
    <section className='relative h-80 w-full sm:h-96'>
      <Image
        src='/images/hero.jpg'
        alt='Hero Image'
        fill
        className='object-cover object-left'
        priority
      />
      <div className='absolute inset-0 flex items-center px-4 sm:px-8'>
        <div className='mx-auto w-full max-w-90 text-white sm:max-w-5xl'>
          <pre className='text-2xl'>
            {`
            while (code){
              learn();
              create();
              drinkCoffee();
            }
            `}
          </pre>
        </div>
      </div>
    </section>
  );
}
