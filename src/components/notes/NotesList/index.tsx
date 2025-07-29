'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTechStack } from '@/context/TechStackContext';
import { getTechStack } from '@/lib/getTechStack';
import clsx from 'clsx';

type Note = {
  id: string;
  title: string;
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
      {/* 選択中カテゴリバッジ */}
      <div className='mb-8'>
        <div
          className={clsx(
            'flex w-fit items-center gap-2 rounded-md border px-2 py-1',
            isAll ? 'border-gray text-gray bg-transparent' : 'text-white'
          )}
          style={isAll ? {} : { backgroundColor: teckStack?.color, borderColor: teckStack?.color }}
        >
          {Icon && !isAll && <Icon className='h-6 w-6' />}
          <p className='text-2xl'>{isAll ? 'ALL' : teckStack?.name}</p>
        </div>
      </div>

      {/* 記事リスト */}
      {loading ? (
        <p>Loading...</p>
      ) : notes.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        <ul className='space-y-4'>
          {notes.map((note) => (
            <li className='border-b pb-2' key={note.id}>
              <Link href={`/notes/${note.id}`} className='block'>
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
