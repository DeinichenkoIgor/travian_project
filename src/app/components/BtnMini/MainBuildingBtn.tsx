//MainBuildingBtn.tsx
import React, { useState, useEffect, useContext } from 'react';
import CtrlIcon from '../SVG/Technical/CtrlIcon';
import MainBuildingIcon from '../SVG/Building/MainBuildingIcon';
import BuilderContext from '../Builder/BuilderContext';

const MainBuildingBtn: React.FC<{ onSelect: (level: string) => void }> = ({ onSelect }) => {
    const [selectedItem, setSelectedItem] = useState("1");
    const [isOpen, setIsOpen] = useState(false);
  
    const items = Array.from({ length: 20 }, (_, i) => (i + 1).toString());
  
    useEffect(() => {
      const savedItem = localStorage.getItem('selectedMainBuildingItem');
      if (savedItem) setSelectedItem(savedItem);
    }, []);

    const { setSelectedMainBuildingLevel } = useContext(BuilderContext);
  
    const handleItemClick = (item: string) => {
      setSelectedItem(item);
      localStorage.setItem('selectedMainBuildingItem', item);
      onSelect(item); // Убедитесь, что onSelect вызывается с item
      setIsOpen(false);
      setSelectedMainBuildingLevel(item);
    };
 
    return (
      <div className="relative inline-block text-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#A0BE3C33]/20 hover:bg-[#A0BE3C33]/40 text-black font-bold py-[10px] px-[15px] rounded-[10px] inline-flex items-center"
        >
          <MainBuildingIcon size="24"/> {/* Первой иконка здания */}
          {selectedItem} 
          <CtrlIcon size="16" color="#000" className={`ml-2 transform transition-transform ${isOpen ? 'rotate-0' : '-rotate-90'}`} /> {/* Второй стрелка */}
        </button>
        {isOpen && (
          <div className="custom-scrollbar overflow-y-scroll absolute left-0 mt-2 w-[113px] rounded-[10px] shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-10 overflow-y-scroll max-h-[300px]">
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
  
export default MainBuildingBtn;