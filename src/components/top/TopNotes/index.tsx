import { getNotesList } from '@/lib/microcms';

import LinkButton from '@/components/shared/LinkButton';
import NotesCard from '@/components/shared/NotesCard';

import TopSectionTitle from '@/components/shared/TopSectionTitle';

export default async function TopNotes() {
  const TOP_NOTES_LIST_LIMIT = 3; // Limit the number of notes displayed
  const notes = await getNotesList({ limit: TOP_NOTES_LIST_LIMIT });

  return (
    <div>
      <section id='notes' className='px-4 pb-16 sm:px-8 sm:pb-20'>
        <div className='mx-auto w-full max-w-94 sm:max-w-5xl'>
          <TopSectionTitle title='Notes' subTitle="What I've learned" />
          <div className='grid grid-cols-1 gap-9 pb-10 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8'>
            {notes.contents.map((note) => (
              <NotesCard
                key={note.id}
                title={note.title}
                thumbnail={note.thumbnail}
                techStack={note.techStack}
              />
            ))}
          </div>
          <div className='flex justify-center'>
            <LinkButton href='/notes'>View All</LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
}
