'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { MicroCMSImage } from 'microcms-js-sdk';
import { useTechStack } from '@/context/TechStackContext';
import { getTechStack } from '@/lib/getTechStack';
import clsx from 'clsx';
import type { TechStack } from '@/constants/techStacks';

type Note = {
  id: string;
  title: string;
  thumbnail: MicroCMSImage;
  techStack: TechStack[];
};

type NotesResponse = {
  contents: Note[];
  totalCount: number;
  offset: number;
  limit: number;
};

export default function NotesList() {
  const { selected } = useTechStack();
  const teckStack = getTechStack(selected);
  const Icon = teckStack?.Icon;
  const isAll = selected === '';

  const [notes, setNotes] = useState<Note[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(`/api/notes?techStack=${selected}&page=${page}`)
      .then((res) => res.json())
      .then((data: NotesResponse) => {
        setNotes(data.contents);
        setTotalCount(data.totalCount);
      })
      .finally(() => setLoading(false));
  }, [selected, page]);

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <section>
      {/* Selected Tech Stack */}
      <div className='mb-8'>
        <div
          className={clsx(
            'flex w-fit items-center gap-2 rounded-md border px-2 py-1',
            isAll ? 'border-gray text-gray bg-transparent' : 'text-white'
          )}
          style={isAll ? {} : { backgroundColor: teckStack?.color, borderColor: teckStack?.color }}
        >
          {Icon && !isAll && <Icon className='h-5 w-5 sm:h-6 sm:w-6' />}
          <p className='text-xl sm:text-2xl'>{isAll ? 'ALL' : teckStack?.name}</p>
        </div>
      </div>

      {/* Notes List */}
      {loading ? (
        <p>Loading...</p>
      ) : notes.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        <ul className='space-y-9'>
          {notes.map((note) => (
            <li
              className='w-full cursor-pointer border-r-1 border-b-1 border-gray-400 pb-6 hover:opacity-70'
              key={note.id}
            >
              <Link href={`/notes/${note.id}`} className='block'>
                <Image
                  src={note.thumbnail.url}
                  alt={`${note.title} thumbnail`}
                  height={note.thumbnail.height}
                  width={note.thumbnail.width}
                  className='aspect-3/2 w-full object-cover'
                />
                <div className='flex items-center gap-1 py-2 pr-1'>
                  {note.techStack.map((stackItem) => {
                    const stack = getTechStack(stackItem.id);
                    return (
                      <div
                        key={stackItem.id}
                        className='w-fit rounded-md px-2 py-0.5 text-sm text-white'
                        style={{ backgroundColor: stack?.color ?? '#666' }}
                      >
                        <p>{stackItem.name}</p>
                      </div>
                    );
                  })}
                </div>
                {note.title}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* ページネーション */}
      {totalPages > 1 && (
        <nav className='mt-6 flex gap-2'>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={clsx(
                'rounded px-3 py-1',
                p === page ? 'bg-accent text-white' : 'bg-gray-200 hover:bg-gray-300'
              )}
            >
              {p}
            </button>
          ))}
        </nav>
      )}
    </section>
  );
}
