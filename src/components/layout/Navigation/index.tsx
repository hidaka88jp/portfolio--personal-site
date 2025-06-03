'use client';
import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import Image from 'next/image';
import { MdArrowForward } from 'react-icons/md';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', isOpen ? '#434343' : '#ffffff');
    }
  }, [isOpen]);

  return (
    <>
      <button
        className='relative block sm:hidden'
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Open menu'
      >
        <Image
          src='/ui/menu-icon.svg'
          alt='menu-icon'
          width={23.93}
          height={16.94}
        />
      </button>

      {isOpen && (
        <div
          className='fixed inset-0 bg-black/30'
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        className={clsx(
          'bg-gray fixed inset-y-0 right-0 z-10 flex w-64 flex-col items-center justify-start text-white transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <button
          className='absolute top-4 right-4 h-11 w-11'
          onClick={() => setIsOpen(false)}
          aria-label='Close menu'
        >
          <MdArrowForward size={24} className='fill-white' />
        </button>
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
