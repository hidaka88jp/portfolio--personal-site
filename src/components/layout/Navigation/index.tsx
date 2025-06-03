'use client';
import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import Image from 'next/image';
import { MdArrowForward } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa6';
import { FaSquareXTwitter } from 'react-icons/fa6';

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
          'bg-gray fixed inset-y-0 right-0 z-10 flex w-64 flex-col items-center justify-start text-lg text-white transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <button
          className='absolute top-4 right-1 h-11 w-11'
          onClick={() => setIsOpen(false)}
          aria-label='Close menu'
        >
          <MdArrowForward size={24} className='fill-white' />
        </button>
        <div className='flex flex-col items-center space-y-4 pt-24'>
          <a href='#about'>About</a>
          <a href='#works'>Works</a>
          <a href='#notes'>Notes</a>
        </div>
        <div className='mt-6 h-px w-8 bg-white' />
        <div className='mt-6 flex items-center justify-center space-x-4 fill-white'>
          <a href='https://ca.linkedin.com/in/takanori-hidaka-102568177'>
            <FaLinkedin size={30} />
          </a>
          <a href='https://x.com/taka_hidaka_log'>
            <FaSquareXTwitter size={30} />
          </a>
        </div>
      </nav>
    </>
  );
}
