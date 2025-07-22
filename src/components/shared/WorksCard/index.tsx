import Image from 'next/image';
import { getTechStack } from '@/lib/getTechStack';
import type { MicroCMSImage } from 'microcms-js-sdk';

type Works = {
  title: string;
  thumbnail: MicroCMSImage;
  category: string;
  techStack: string[];
};

export default function WorksCard({ title, thumbnail, category, techStack }: Works) {
  return (
    <div className='relative w-full cursor-pointer pr-6 hover:opacity-70'>
      <div className='border-r-2 border-b-2 border-gray-200'>
        <Image
          src={thumbnail.url}
          alt={`${title} thumbnail`}
          height={thumbnail.height}
          width={thumbnail.width}
          className='aspect-square w-full object-cover object-top pr-2'
        />
        <div className='flex items-center gap-1 py-2'>
          {techStack.map((name) => {
            const stack = getTechStack(name);
            return (
              <div
                key={name}
                className='w-fit rounded-md px-2 py-0.5 text-sm text-white'
                style={{ backgroundColor: stack?.color ?? '#666' }}
              >
                {name}
              </div>
            );
          })}
        </div>
      </div>
      <p className='font-inconsolata absolute top-0 right-0 origin-top-left translate-x-full rotate-90 font-light text-gray-400'>
        {category}
      </p>
    </div>
  );
}
