'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  IconHome,
  IconInfoCircle,
  IconBuilding,
  IconStar,
  IconUsers,
  IconPhone,
} from '@tabler/icons-react';

const links = [
  { title: 'Home', icon: IconHome, href: '/' },
  { title: 'About', icon: IconInfoCircle, href: '/about' },
  { title: 'School', icon: IconBuilding, href: '/school' },
  { title: 'Program', icon: IconStar, href: '/program/beginner' },
  { title: 'Team', icon: IconUsers, href: '/about' },
  { title: 'Contact', icon: IconPhone, href: '/' },
];

export default function MobileNav() { 
  const pathname = usePathname();

  return (
    <nav className="mobile-nav">
      <div className="mobile-nav__inner">
        {links.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          return (
            <Link
              key={link.href + link.title}
              href={link.href}
              className={`mobile-nav__item ${isActive ? 'mobile-nav__item--active' : ''}`}
            >
              <Icon
                className={`mobile-nav__icon ${isActive ? 'mobile-nav__icon--active' : ''}`}
                strokeWidth={isActive ? 2.5 : 1.5}
              />
              <span className="mobile-nav__label">{link.title}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
