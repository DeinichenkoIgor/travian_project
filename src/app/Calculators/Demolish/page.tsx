"use client";
import React, { useState, useEffect } from 'react';
import CatapultRamBtn from '../../components/Demolish/CatapultRamBtn'
import CatapultTable from '../../components/Demolish/CatapultTable';
import RamTable from '../../components/Demolish/RamTable';

export default function Demolish() {

   //const [activeIcon, setActiveIcon] = useState<'catapult' | 'ram'>('catapult');
   const [activeIcon, setActiveIcon] = useState<'catapult' | 'ram'>(
    () => localStorage.getItem('activeIcon') as 'catapult' | 'ram' || 'catapult'
  );

  // Эффект для сохранения выбора activeIcon в localStorage
  useEffect(() => {
    localStorage.setItem('activeIcon', activeIcon);
  }, [activeIcon]);

   return (
      <div className='flex flex-col gap-[10px]'>
        <div>Заголовок</div>
  
        <div>Описание</div>
        <CatapultRamBtn activeIcon={activeIcon} setActiveIcon={setActiveIcon} />
        {activeIcon === 'catapult' && <CatapultTable />}
        {activeIcon === 'ram' && <RamTable />}
      </div>
    )
  }
