import Image from 'next/image';
import Link from 'next/link';
import TechStackLabel from '@/components/shared/TechStackLabel';
import type { MicroCMSImage } from 'microcms-js-sdk';

type TechStack = {
  id: string;
  name: string;
};

type NotesCardProps = {
  title: string;
  link: string;
  thumbnail: MicroCMSImage;
  techStacks: TechStack[];
};

export default function NotesCard({ title, link, thumbnail, techStacks }: NotesCardProps) {
  return (
    <Link
      href={`/notes/${link}?from=${encodeURIComponent('/#notes')}`}
      className='relative grid w-full cursor-pointer grid-cols-2 gap-3 border-b-1 border-gray-400 pb-2 hover:opacity-70 sm:block sm:border-r-1 sm:pb-6'
    >
      <Image
        src={thumbnail.url}
        alt={`${title} thumbnail`}
        height={thumbnail.height}
        width={thumbnail.width}
        className='col-span-1 object-cover sm:aspect-3/2 sm:w-full'
      />
      <div className='col-span-1 pr-1'>
        {/* badge */}
        <TechStackLabel techStacks={techStacks} className='pt-0 sm:pt-2' />
        {/* title */}
        <h3>{title}</h3>
      </div>
    </Link>
  );
}
