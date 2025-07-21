import Image from 'next/image';
import { TECH_STACKS } from '@/constants/techStacks';

import TopSectionTitle from '@/components/shared/TopSectionTitle';
import TechStackBadge from '@/components/shared/TechStackBadge';

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
          <div className='w-full sm:order-1'>
            <div className='mb-4 flex flex-col items-center sm:items-start'>
              <h3 className='font-inconsolata mb-1 text-xl font-medium'>
                Who I am
              </h3>
              <div className='bg-accent h-0.5 w-8' />
            </div>
            <p className='mb-7 sm:mb-9'>
              Hi, I&apos;m Taka. I’m a self-taught web developer, currently
              focusing on frontend.
              <br />
              <br />
              After spending time reflecting on the right path for me, I’ve
              chosen to pursue web development seriously. I’ve built several
              portfolio projects and experimented with various technologies.
              <br />
              <br />
              I’m committed to growing in this field long-term and am always
              learning new skills.
            </p>
            <div className='mb-4 flex flex-col items-center sm:items-start'>
              <h3 className='font-inconsolata mb-1 text-xl font-medium'>
                Skills
              </h3>
              <div className='bg-accent h-0.5 w-8' />
            </div>
            <div className='flex flex-wrap gap-2 sm:gap-3'>
              {TECH_STACKS.map((techStack) => (
                <TechStackBadge
                  key={techStack.id}
                  name={techStack.name}
                  Icon={techStack.Icon}
                  color={techStack.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
