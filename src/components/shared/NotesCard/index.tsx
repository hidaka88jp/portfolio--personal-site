import Image from 'next/image';
import { getTechStack } from '@/lib/getTechStack';
import type { MicroCMSImage } from 'microcms-js-sdk';

type NotesCardProps = {
  title: string;
  thumbnail: MicroCMSImage;
  techStack: string[];
};

export default function NotesCard({ title, thumbnail, techStack }: NotesCardProps) {
  return (
    <div className='relative w-full cursor-pointer border-r-1 border-b-1 border-gray-400 pb-6 hover:opacity-70'>
      <Image
        src={thumbnail.url}
        alt={`${title} thumbnail`}
        height={thumbnail.height}
        width={thumbnail.width}
        className='aspect-3/2 w-full object-cover'
      />
      <div className='pr-1'>
        {/* badge */}
        <div className='flex items-center gap-1 py-2'>
          {techStack.map((name) => {
            const stack = getTechStack(name);
            return (
              <div
                key={name}
                className='w-fit rounded-md px-2 py-0.5 text-sm text-white'
                style={{ backgroundColor: stack?.color ?? '#666' }}
              >
                <p>{name}</p>
              </div>
            );
          })}
        </div>
        {/* title */}
        <h3>{title}</h3>
      </div>
    </div>
  );
}
