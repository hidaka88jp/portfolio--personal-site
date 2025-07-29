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

export default function NotesList() {
  const { selected } = useTechStack();
  const teckStack = getTechStack(selected);
  const Icon = teckStack?.Icon;
  const isAll = selected === '';

  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/notes?techStack=${selected}&page=1`)
      .then((res) => res.json())
      .then((data) => setNotes(data.contents))
      .finally(() => setLoading(false));
  }, [selected]);

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
    </section>
  );
}
