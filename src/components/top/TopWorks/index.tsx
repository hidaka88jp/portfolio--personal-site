import { getWorksList } from '@/lib/microcms';

import TopSectionTitle from '@/components/shared/TopSectionTitle';
import WorksCard from '@/components/shared/WorksCard';

export default async function TopWorks() {
  const WORKS_LIST_LIMIT = 50; // Limit the number of works displayed
  const works = await getWorksList({ limit: WORKS_LIST_LIMIT });

  return (
    <section id='works' className='px-4 pb-16 sm:px-8 sm:pb-28'>
      <div className='mx-auto w-full max-w-94 sm:max-w-5xl'>
        <TopSectionTitle title='Works' subTitle="What I've built" />
        <div className='grid grid-cols-1 gap-9 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8'>
          {works.contents.map((work) => (
            <WorksCard
              key={work.id}
              id={work.id}
              title={work.title}
              thumbnail={work.thumbnail}
              category={work.category}
              techStack={work.techStack}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
