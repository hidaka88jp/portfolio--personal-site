'use client';
import { IoIosArrowUp } from 'react-icons/io';

export default function Footer() {
  return (
    <footer>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className='flex w-full cursor-pointer flex-col items-center justify-center bg-gray-300 py-1.5'
      >
        <IoIosArrowUp />
        <p>Back to Top</p>
      </button>
      <div className='bg-gray flex flex-col items-center justify-center py-8 sm:py-10'>
        <p className='text-sm text-white'>© 2025 TAKANORI HIDAKA</p>
      </div>
    </footer>
  );
}
