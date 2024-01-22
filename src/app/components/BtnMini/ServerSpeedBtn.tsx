//ServerSpeedBtn.tsx

import React, { useState, useEffect } from 'react';
import CtrlIcon from '../SVG/Technical/CtrlIcon'

const ServerSpeedBtn: React.FC<{ onSelect: (speed: string) => void }> = ({ onSelect }) => {
    const [selectedItem, setSelectedItem] = useState("Server");
    const [isOpen, setIsOpen] = useState(false);
  
    const items = ["T 4.6 1x", "T 4.6 2x", "T 4.6 3x"];
  
    useEffect(() => {
      const savedItem = localStorage.getItem('selectedDropdownItem');
      if (savedItem) setSelectedItem(savedItem);
    }, []);
  
    const handleItemClick = (item: string) => {
      setSelectedItem(item);
      onSelect(item); // Уведомляем родительский компонент о выборе
      setIsOpen(false);
    };
  
    return (
      <div className="relative inline-block text-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#A0BE3C33]/20 hover:bg-[#A0BE3C33]/40 text-black font-bold py-[10px] px-[15px] rounded-[10px] inline-flex items-center"
        >
          {selectedItem} 
          {/* Иконка CtrlIcon, которая вращается на 180 градусов, когда список открыт */}
          <CtrlIcon size="16" color="#000" className={`ml-2 transform transition-transform ${isOpen ? 'rotate-0' : '-rotate-90'}`} />
        </button>
        {isOpen && (
          <div className="absolute left-0 mt-2 w-[113px] rounded-[10px] shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-10">
            <div className="py-1">
              {items.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-[#A0BE3C33]/20"
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(item);
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default ServerSpeedBtn;