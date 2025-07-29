'use client';
import { useTechStack } from '@/context/TechStackContext';
import { getTechStack } from '@/lib/getTechStack';
import clsx from 'clsx';

export default function NotesList() {
  const { selected } = useTechStack();
  const teckStack = getTechStack(selected);
  const Icon = teckStack?.Icon;
  const isAll = selected === '';

  return (
    <section>
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
    </section>
  );
}
