// WikiNavigation.tsx
import React from 'react';
import Link from 'next/link';

export const WikiNavigation = () => {
  return (
    <nav className="bg-[#A0BE3C]/40">
        <ul className='px-2.5 pt-[20px] pb-2.5'>
            <li className="flex relative h-full items-center p-1.5 hover:bg-white/30 hover:rounded-md"><Link className="block " href="/wiki/page1">О Travian</Link></li>
            <li className="flex relative h-full items-center p-1.5 hover:bg-white/30 hover:rounded-md"><Link className="block " href="/wiki/page1">Народы</Link></li>
            <li className="flex relative h-full items-center p-1.5 hover:bg-white/30 hover:rounded-md"><Link className="block " href="/wiki/page1">Постройки</Link></li>
            <li className="flex relative h-full items-center p-1.5 hover:bg-white/30 hover:rounded-md"><Link className="block " href="/wiki/page1">Герой</Link></li>
            <li className="flex relative h-full items-center p-1.5 hover:bg-white/30 hover:rounded-md"><Link className="block " href="/wiki/page1">Этапы игры</Link></li>
            <li className="flex relative h-full items-center p-1.5 hover:bg-white/30 hover:rounded-md"><Link className="block " href="/wiki/page1">Артефакты</Link></li>
            <li className="flex relative h-full items-center p-1.5 hover:bg-white/30 hover:rounded-md"><Link className="block " href="/wiki/page1">Стили игры</Link></li>
        </ul>
    </nav>
  );
};
