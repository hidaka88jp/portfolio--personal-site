'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { MicroCMSImage } from 'microcms-js-sdk';
import { useTechStack } from '@/context/TechStackContext';
import { getTechStack } from '@/lib/getTechStack';
import clsx from 'clsx';
import type { TechStack } from '@/constants/techStacks';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

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
  const { selected, setSelected } = useTechStack();
  const teckStack = getTechStack(selected);
  const Icon = teckStack?.Icon;
  const isAll = selected === '';

  const router = useRouter();
  const searchParams = useSearchParams();

  const initialPage = Number(searchParams.get('page') || '1');
  const initialTechStack = searchParams.get('techStack') || '';

  const [loading, setLoading] = useState(true);
  const limit = 10;
  const [notes, setNotes] = useState<Note[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(initialPage);
  useEffect(() => {
    setSelected(initialTechStack);
  }, [initialTechStack, setSelected]);

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

  useEffect(() => {
    setPage(1);
  }, [selected]);

  const totalPages = Math.ceil(totalCount / limit);

  function handlePageChange(newPage: number) {
    const techStack = searchParams.get('techStack') || ''; // current techStack
    router.push(`/notes?techStack=${techStack}&page=${newPage}`);
    setPage(newPage);
  }

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
        <ul className='space-y-9 sm:space-y-10'>
          {notes.map((note) => (
            <li
              className='w-full cursor-pointer border-r-1 border-b-1 border-gray-400 pb-6 hover:opacity-70 sm:border-r-0 sm:pb-2'
              key={note.id}
            >
              <Link href={`/notes/${note.id}`} className='block sm:grid sm:grid-cols-3 sm:gap-7'>
                <Image
                  src={note.thumbnail.url}
                  alt={`${note.title} thumbnail`}
                  height={note.thumbnail.height}
                  width={note.thumbnail.width}
                  className='aspect-3/2 w-full object-cover sm:col-span-1'
                />
                <div className='sm:col-span-2'>
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
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* ページネーション */}
      {totalPages > 1 && (
        <nav className='border-gray mx-auto mt-6 flex w-fit items-center gap-5 rounded-md border px-4 py-1'>
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className={clsx(
              'flex items-center gap-1 px-1.5',
              page === 1 ? 'cursor-default text-gray-300' : 'hover:text-accent cursor-pointer'
            )}
          >
            <IoIosArrowBack className='h-5 w-5' />
            Prev
          </button>
          <div className='bg-gray h-3 w-px' />
          <p className='text-sm'>
            {page} / {totalPages}
          </p>
          <div className='bg-gray h-3 w-px' />
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            className={clsx(
              'flex items-center gap-1 px-1.5',
              page === totalPages
                ? 'cursor-default text-gray-300'
                : 'hover:text-accent cursor-pointer'
            )}
          >
            Next
            <IoIosArrowForward className='h-5 w-5' />
          </button>
        </nav>
      )}
    </section>
  );
}
