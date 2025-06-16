'use client';
import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import Image from 'next/image';
import { MdArrowForward } from 'react-icons/md';
import { NAV_LINKS } from '@/constants/navigation';
import { SOCIAL_LINKS } from '@/constants/navigation';
import { setThemeColor } from '@/lib/themeColor';

type Props = {
  className: string;
};

export default function MobileNavigation({ className }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setThemeColor(isOpen ? '#434343' : '#ffffff');
  }, [isOpen]);

  return (
    <div className={className}>
      <button
        className='relative block'
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
          data-testid='overlay'
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
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <div className='mt-6 h-px w-8 bg-white' />
        <div className='mt-6 flex flex-col items-center justify-center space-y-4'>
          {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
            <a
              href={href}
              key={href}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center'
            >
              <Icon className='mr-1' />
              {label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
