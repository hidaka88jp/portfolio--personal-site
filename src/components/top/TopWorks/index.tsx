import Image from 'next/image';

import TopSectionTitle from '@/components/shared/TopSectionTitle';

export default function TopWorks() {
  return (
    <section id='works' className='px-4 pb-16 sm:px-8 sm:pb-20'>
      <div className='mx-auto w-full max-w-94 sm:max-w-5xl'>
        <TopSectionTitle title='Works' subTitle="What I've built" />
        <div className='grid grid-cols-1 gap-9 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8'>
          <div className='relative w-full cursor-pointer pr-6 hover:opacity-70'>
            <div className='border-r-2 border-b-2 border-gray-200'>
              <Image
                src='/images/thumbnail-1.png'
                alt='thubnail-1'
                height={1084}
                width={1148}
                className='aspect-square w-full object-cover pr-2'
              />
              <div className='flex items-center gap-1 py-2'>
                <div className='w-fit rounded-md bg-[#383434] px-2 py-0.5'>
                  <p className='text-sm text-white'>Next.js</p>
                </div>
                <div className='w-fit rounded-md bg-[#06B6D4] px-2 py-0.5'>
                  <p className='text-sm text-white'>Tailwind CSS</p>
                </div>
              </div>
            </div>
            <p className='font-inconsolata absolute top-0 right-0 origin-top-left translate-x-full rotate-90 font-light text-gray-400'>
              Case Study
            </p>
          </div>
          <div className='relative w-full cursor-pointer pr-6 hover:opacity-70'>
            <div className='border-r-2 border-b-2 border-gray-200'>
              <Image
                src='/images/thumbnail-1.png'
                alt='thubnail-1'
                height={1084}
                width={1148}
                className='aspect-square w-full object-cover pr-2'
              />
              <div className='flex items-center gap-1 py-2'>
                <div className='w-fit rounded-md bg-[#383434] px-2 py-0.5'>
                  <p className='text-sm text-white'>Next.js</p>
                </div>
                <div className='w-fit rounded-md bg-[#06B6D4] px-2 py-0.5'>
                  <p className='text-sm text-white'>Tailwind CSS</p>
                </div>
              </div>
            </div>
            <p className='font-inconsolata absolute top-0 right-0 origin-top-left translate-x-full rotate-90 font-light text-gray-400'>
              Portfolio
            </p>
          </div>
          <div className='relative w-full cursor-pointer pr-6 hover:opacity-70'>
            <div className='border-r-2 border-b-2 border-gray-200'>
              <Image
                src='/images/thumbnail-1.png'
                alt='thubnail-1'
                height={1084}
                width={1148}
                className='aspect-square w-full object-cover pr-2'
              />
              <div className='flex items-center gap-1 py-2'>
                <div className='w-fit rounded-md bg-[#383434] px-2 py-0.5'>
                  <p className='text-sm text-white'>Next.js</p>
                </div>
                <div className='w-fit rounded-md bg-[#06B6D4] px-2 py-0.5'>
                  <p className='text-sm text-white'>Tailwind CSS</p>
                </div>
              </div>
            </div>
            <p className='font-inconsolata absolute top-0 right-0 origin-top-left translate-x-full rotate-90 font-light text-gray-400'>
              Portfolio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
