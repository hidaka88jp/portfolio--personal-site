import { getNoteDetail } from '@/lib/microcms';
import { notFound } from 'next/navigation';
import { formatDate } from '@/lib/formatDate';
import Image from 'next/image';

type NoteDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function NoteDetailPage({ params }: NoteDetailPageProps) {
  const { id } = await params;
  const note = await getNoteDetail(id);

  if (!note) return notFound();

  return (
    <>
      <section className='relative mb-8 w-full sm:mb-20 sm:h-60'>
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
        <div className='hidden h-full px-4 sm:block sm:px-8'>
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
        <article className='px-4 pb-16 sm:px-8 sm:pb-28'>
          <div className='mx-auto w-full max-w-94 sm:max-w-2xl'>
            <p className='mb-6 text-gray-500'>{formatDate(note.publishedAt ?? note.createdAt)}</p>
            <h1 className='mb-6 text-3xl font-bold sm:text-4xl'>{note.title}</h1>
          </div>
        </article>
      </section>
    </>
  );
}
