'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Posts',
    href: '/posts',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className='h-screen border-r p-6'>
      <nav className='flex flex-col'>
        <ul className='flex flex-col space-y-2'>
          {navLinks.map(({ name, href }) => (
            <li
              key={name}
              className={clsx({ 'font-semibold': pathname === href })}
            >
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
