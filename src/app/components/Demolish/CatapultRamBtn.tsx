import React, { useState } from 'react';
import Icon from '../../components/SVG/Icon';

const CatapultRamBtn = () => {
  // Состояние для отслеживания активной иконки
  const [activeIcon, setActiveIcon] = useState<'catapult' | 'ram'>('catapult');

  return (
    <div className="flex items-center p-2 rounded-[10px] bg-[#A0BE3C33]/20 w-min gap-2">
      <div
        className={`cursor-pointer hover:bg-[#A0BE3C33]/40 p-2 rounded-[10px] bg-[#A0BE3C33]/20 ${activeIcon === 'catapult' ? 'bg-[#A0BE3C33]/40' : 'bg-[#A0BE3C33]/20'}`}
        onClick={() => setActiveIcon('catapult')}
      >
        <Icon.Other.Catapult />
      </div>
      <div className='text-sm font-[Cambria] text-center'>Выберите таблицу</div>
      <div
        className={`cursor-pointer hover:bg-[#A0BE3C33]/40 p-2 rounded-[10px] bg-[#A0BE3C33]/20 ${activeIcon === 'ram' ? 'bg-[#A0BE3C33]/40' : 'bg-[#A0BE3C33]/20'}`}
        onClick={() => setActiveIcon('ram')}
      >
        <Icon.Other.Ram />
      </div>
    </div>
  );
};

export default CatapultRamBtn;
