import { getNoteDetail } from '@/lib/microcms';
import { notFound } from 'next/navigation';
import { formatDate } from '@/lib/formatDate';

type NoteDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function NoteDetailPage({ params }: NoteDetailPageProps) {
  const { id } = await params;
  const note = await getNoteDetail(id);

  if (!note) return notFound();

  return (
    <article className='px-4 pb-16 sm:px-8 sm:pb-28'>
      <div className='mx-auto w-full max-w-94 sm:max-w-2xl'>
        <p className='mb-6 text-gray-500'>{formatDate(note.publishedAt ?? note.createdAt)}</p>
        <h1 className='mb-6 text-3xl font-bold sm:text-4xl'>{note.title}</h1>
      </div>
    </article>
  );
}
