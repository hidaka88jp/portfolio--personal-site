import Image from 'next/image';
import Link from 'next/link';
import TechStackLabel from '@/components/shared/TechStackLabel';
import type { MicroCMSImage } from 'microcms-js-sdk';

type TechStack = {
  id: string;
  name: string;
};

type Works = {
  id: string;
  title: string;
  thumbnail: MicroCMSImage;
  category: string;
  techStacks: TechStack[];
};

export default function WorksCard({ id, title, thumbnail, category, techStacks }: Works) {
  return (
    <Link className='block' href={`/${id}`} aria-label={`View details for ${title}`}>
      <div className='relative w-full cursor-pointer pr-6 hover:opacity-70'>
        <div className='border-r-2 border-b-2 border-gray-200'>
          <Image
            src={thumbnail.url}
            alt={`${title} thumbnail`}
            height={thumbnail.height}
            width={thumbnail.width}
            className='aspect-square w-full object-cover object-top pr-2'
          />
          <TechStackLabel techStacks={techStacks} />
        </div>
        <p className='font-inconsolata absolute top-0 right-0 origin-top-left translate-x-full rotate-90 font-light text-gray-400'>
          {category}
        </p>
      </div>
    </Link>
  );
}
