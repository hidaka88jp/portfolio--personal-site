type Props = {
  className: string;
};

export default function DesktopNavigation({ className }: Props) {
  return (
    <nav className={`${className} items-center space-x-6`}>
      <ul className='flex space-x-9'>
        <li>
          <a href='#about' className='hover:text-accent'>
            About
          </a>
        </li>
        <li>
          <a href='#works' className='hover:text-accent'>
            Works
          </a>
        </li>
        <li>
          <a href='#notes' className='hover:text-accent'>
            Notes
          </a>
        </li>
      </ul>
      <div className='bg-gray h-2.5 w-px' />
      <ul className='flex space-x-9'>
        <li>
          <a
            href='https://ca.linkedin.com/in/takanori-hidaka-102568177'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-accent'
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href='https://x.com/taka_hidaka_log'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-accent'
          >
            X / Twitter
          </a>
        </li>
      </ul>
    </nav>
  );
}
