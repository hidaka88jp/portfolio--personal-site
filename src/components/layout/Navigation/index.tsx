'use client';
import { useState } from 'react';
import { clsx } from 'clsx';
import Image from 'next/image';
import { MdArrowForward } from 'react-icons/md';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className='relative z-50 block sm:hidden'
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? (
          <MdArrowForward size={24} className='fill-white' />
        ) : (
          <Image
            src='/ui/menu-icon.svg'
            alt='menu-icon'
            width={23.93}
            height={16.94}
          />
        )}
      </button>

      {isOpen && (
        <div
          className='pt-safe px-safe fixed inset-0 z-0 bg-black/30'
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        className={clsx(
          'bg-gray pt-safe px-safe fixed inset-y-0 right-0 z-10 flex w-64 flex-col items-center justify-start text-white transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <a href='#notes' className='mb-4 pt-24 text-xl'>
          About
        </a>
        <a href='#works' className='mb-4 text-xl'>
          Works
        </a>
        <a href='#contact' className='text-xl'>
          Notes
        </a>
      </nav>
    </>
  );
}
