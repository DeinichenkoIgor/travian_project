// WikiNavigation.tsx
import React from 'react';
import Link from 'next/link';

export const WikiNavigation = () => {
  return (
    <nav className="w-64 bg-[#A0BE3C]/40">
        <ul>
            <li><Link href="/wiki/page1">Страница 1</Link></li>
            <li><Link href="/wiki/page2">Страница 2</Link></li>
        </ul>
    </nav>
  );
};
