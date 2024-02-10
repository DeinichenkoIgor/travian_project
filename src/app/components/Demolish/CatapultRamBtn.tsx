import React from 'react';
import Icon from '../../components/SVG/Icon';

type CatapultRamBtnProps = {
  activeIcon: 'catapult' | 'ram',
  setActiveIcon: (icon: 'catapult' | 'ram') => void
};

// Принимаем activeIcon и setActiveIcon как пропсы
const CatapultRamBtn: React.FC<CatapultRamBtnProps> = ({ activeIcon, setActiveIcon }) => {
  return (
    <div className="flex items-center p-2 rounded-[10px] bg-[#A0BE3C33]/20 w-min gap-2">
      <div
        className={`cursor-pointer hover:bg-[#A0BE3C33]/40 p-2 rounded-[10px] ${activeIcon === 'catapult' ? 'bg-[#A0BE3C33]/40' : 'bg-[#A0BE3C33]/20'}`}
        onClick={() => setActiveIcon('catapult')}
      >
        <Icon.Other.Catapult />
      </div>
      <div className='text-sm font-[Cambria] text-center'>Выберите таблицу</div>
      <div
        className={`cursor-pointer hover:bg-[#A0BE3C33]/40 p-2 rounded-[10px] ${activeIcon === 'ram' ? 'bg-[#A0BE3C33]/40' : 'bg-[#A0BE3C33]/20'}`}
        onClick={() => setActiveIcon('ram')}
      >
        <Icon.Other.Ram />
      </div>
    </div>
  );
};

export default CatapultRamBtn;

