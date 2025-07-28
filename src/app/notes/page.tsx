import { getTechStacks } from '@/lib/microcms';
import { getTechStack } from '@/lib/getTechStack';
import Image from 'next/image';
import TechStackBadge from '@/components/shared/TechStackBadge';

export default async function NotesPage() {
  const techStacks = await getTechStacks();

  return (
    <>
      <section className='relative mb-12 w-full sm:mb-20 sm:h-96'>
        <div className='relative mb-10 h-52 w-full sm:absolute sm:top-0 sm:right-0 sm:mb-0 sm:block sm:h-full sm:w-3/5'>
          <Image
            src='/images/notes-hero.webp'
            alt='Notes hero'
            fill
            className='object-cover'
            priority
            sizes='(max-width: 768px) 100vw, 60vw'
          />
        </div>
        <div className='h-full px-4 sm:px-8'>
          <div className='mx-auto h-full w-full max-w-94 sm:max-w-5xl'>
            <div className='flex h-full flex-col items-center gap-2.5 sm:items-start sm:justify-center'>
              <h1 className='font-inconsolata text-2xl'>Notes</h1>
              <p className='font-inconsolata'>What I Learned</p>
              <div className='bg-accent h-0.5 w-7' />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='px-4 pb-16 sm:px-8 sm:pb-28'>
          <div className='mx-auto w-full max-w-94 sm:max-w-5xl'>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-4'>
              <div className='bg-amber-900 sm:order-2 sm:col-span-3'></div>
              <div className='sm:order-1 sm:col-span-1'>
                <ul className='flex gap-3 sm:flex-col'>
                  <li className='border-gray flex w-fit cursor-pointer items-center rounded-md border px-2 py-1'>
                    ALL
                  </li>
                  {techStacks.contents.map((apiStack) => {
                    const localStack = getTechStack(apiStack.name);
                    if (!localStack) return null;

                    return (
                      <li key={localStack.id} className='w-fit cursor-pointer'>
                        <TechStackBadge
                          name={localStack.name}
                          Icon={localStack.Icon}
                          color={localStack.color}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
