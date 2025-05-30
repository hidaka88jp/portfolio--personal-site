'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Image
        src='/ui/menu-icon.svg'
        alt='menu-icon'
        width={23.93}
        height={17}
        className='cursor-pointer sm:hidden'
        aria-label='Menu Icon'
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div>
          <FaArrowRight className='w-6' onClick={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
}
