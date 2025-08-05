import { getNoteDetail } from '@/lib/microcms';
import { notFound } from 'next/navigation';
import { formatDate } from '@/lib/formatDate';
import Image from 'next/image';
import TechStackLabel from '@/components/shared/TechStackLabel';
import LinkButton from '@/components/shared/LinkButton';

type NoteDetailPageProps = {
  params: Promise<{ id: string }>;
  searchParams: { from?: string };
};

export default async function NoteDetailPage({ params, searchParams }: NoteDetailPageProps) {
  const from = searchParams.from ? decodeURIComponent(searchParams.from) : '/notes';
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
            <div className='flex items-center gap-2.5'>
              <p className='text-gray font-inconsolata'>
                {formatDate(note.publishedAt ?? note.createdAt)}
              </p>
              <TechStackLabel techStacks={note.techStack} />
            </div>
            <h1 className='mb-6 text-2xl font-medium'>{note.title}</h1>
            <Image
              src={note.thumbnail.url}
              alt={`${note.title} thumbnail`}
              height={note.thumbnail.height}
              width={note.thumbnail.width}
              className='mb-10 w-full object-cover sm:mb-14'
            />
            <div
              className='article mb-10 md:mb-14'
              dangerouslySetInnerHTML={{ __html: note.content }}
            />
            <div className='flex flex-col items-center justify-center'>
              <LinkButton href={from}>Back to Notes</LinkButton>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
