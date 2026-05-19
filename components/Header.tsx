'use client';

import Image from 'next/image';
import Link from 'next/link';
import BookDemoModal from './BookDemoModal';

interface HeaderProps {
  isMounted: boolean;
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'School', href: '/school' },
  { label: 'Program', href: '/program/beginner' },
];

export default function Header({ isMounted }: HeaderProps) {
  return (
    <header className={`site-header ${isMounted ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 1s ease' }}>
      <div className="container">
        <div className="site-header__inner">
          <Link href="/" className="site-header__logo">
            <Image
              src="/logo.png"
              alt="Braindemics Logo"
              width={200}
              height={50}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>
          <nav className="site-header__nav">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className="site-header__link">
                {item.label}
              </Link>
            ))}
          </nav>
          <BookDemoModal />
        </div>
      </div>
    </header>
  );
}
