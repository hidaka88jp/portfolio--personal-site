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
        <nav
          className={clsx(
            'fixed inset-0 z-10 flex flex-col items-center justify-center bg-gray-700 text-white transition-transform duration-300 ease-in-out',
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <a href='#notes' className='mb-4 text-2xl'>
            Notes
          </a>
          <a href='#works' className='mb-4 text-2xl'>
            Works
          </a>
          <a href='#contact' className='text-2xl'>
            Contact
          </a>
        </nav>
      )}
    </>
  );
}
