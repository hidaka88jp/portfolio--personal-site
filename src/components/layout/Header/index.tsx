import { Antonio } from 'next/font/google';
import Link from 'next/link';

const antonio = Antonio({
  subsets: ['latin'],
});

export default function Header() {
  return (
    <header className='px-4 pt-4 pb-5 sm:px-8 sm:pt-9 sm:pb-7'>
      <div className='mx-auto flex w-full max-w-80 items-baseline justify-between sm:max-w-5xl'>
        <Link href={'/'}>
          <h1
            className={`${antonio.className} text-2xl tracking-[.18em]`}
            aria-label='Takanori Hidaka'
          >
            <span className='text-accent'>T</span>AKANORI{' '}
            <span className='text-accent'>H</span>IDIKA
          </h1>
        </Link>
        <p>Nav</p>
      </div>
    </header>
  );
}
