export default function DesktopNavigation() {
  return (
    <nav>
      <ul className='flex space-x-8 text-lg'>
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
    </nav>
  );
}
