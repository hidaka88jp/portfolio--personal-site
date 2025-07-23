import Image from 'next/image';
import LinkButton from '@/components/shared/LinkButton';

import TopSectionTitle from '@/components/shared/TopSectionTitle';

export default function TopNotes() {
  return (
    <div>
      <section id='notes' className='px-4 pb-16 sm:px-8 sm:pb-20'>
        <div className='mx-auto w-full max-w-94 sm:max-w-5xl'>
          <TopSectionTitle title='Notes' subTitle="What I've learned" />
          <div className='grid grid-cols-1 gap-9 pb-10 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8'>
            {/* Card */}
            <div className='relative w-full cursor-pointer border-r-1 border-b-1 border-gray-400 pb-6 hover:opacity-70'>
              <Image
                src='/images/about.webp'
                alt={`thumbnail`}
                width={3024}
                height={3780}
                className='aspect-3/2 w-full object-cover'
              />
              {/* badge */}
              <div className='flex items-center gap-1 py-2'>
                <div className='w-fit rounded-md bg-[#06B6D4] px-2 py-0.5 text-sm text-white'>
                  <p>Tailwind CSS</p>
                </div>
              </div>
              {/* title */}
              <h3>learn and implement dark mode in Tailwind CSS</h3>
            </div>
            <div className='relative w-full cursor-pointer border-r-1 border-b-1 border-gray-400 pb-6 hover:opacity-70'>
              <Image
                src='/images/about.webp'
                alt={`thumbnail`}
                width={3024}
                height={3780}
                className='aspect-3/2 w-full object-cover'
              />
              {/* badge */}
              <div className='flex items-center gap-1 py-2'>
                <div className='w-fit rounded-md bg-[#06B6D4] px-2 py-0.5 text-sm text-white'>
                  <p>Tailwind CSS</p>
                </div>
              </div>
              {/* title */}
              <h3>learn and implement</h3>
            </div>
            <div className='relative w-full cursor-pointer border-r-1 border-b-1 border-gray-400 pb-6 hover:opacity-70'>
              <Image
                src='/images/about.webp'
                alt={`thumbnail`}
                width={3024}
                height={3780}
                className='aspect-3/2 w-full object-cover'
              />
              {/* badge */}
              <div className='flex items-center gap-1 py-2'>
                <div className='w-fit rounded-md bg-[#06B6D4] px-2 py-0.5 text-sm text-white'>
                  <p>Tailwind CSS</p>
                </div>
              </div>
              {/* title */}
              <h3>learn and implement dark mode in Tailwind CSS</h3>
            </div>
            {/* Card */}
          </div>
          <div className='flex justify-center'>
            <LinkButton href='/notes'>View All</LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
}
