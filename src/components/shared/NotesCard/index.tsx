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
      className='relative w-full cursor-pointer border-r-1 border-b-1 border-gray-400 pb-6 hover:opacity-70'
    >
      <Image
        src={thumbnail.url}
        alt={`${title} thumbnail`}
        height={thumbnail.height}
        width={thumbnail.width}
        className='aspect-3/2 w-full object-cover'
      />
      <div className='pr-1'>
        {/* badge */}
        <TechStackLabel techStacks={techStacks} />
        {/* title */}
        <h3>{title}</h3>
      </div>
    </Link>
  );
}
