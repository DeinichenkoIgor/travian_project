import React, { useState, useEffect } from 'react';
import CtrlIcon from '../SVG/Technical/CtrlIcon'; // Убедитесь, что путь до компонента CtrlIcon верен

interface RamBtnProps {
    setSelectedItem: (item: string) => void;
    selectedItem: string;
  }

  const RamBtn: React.FC<RamBtnProps> = ({ setSelectedItem, selectedItem }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Список народов
    const tribes = ["Romans", "Teutons", "Gauls", "Egyptians", "Huns", "Spartans"];

    // Загрузка сохраненного выбора из localStorage
    useEffect(() => {
        const savedItem = localStorage.getItem('selectedTribe');
        if (savedItem) {
            setSelectedItem(savedItem);
        }
    }, [setSelectedItem]);

    // Сохранение выбора пользователя
    const handleItemClick = (tribe: string) => {
        setSelectedItem(tribe);
        localStorage.setItem('selectedTribe', tribe);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#A0BE3C33]/20 hover:bg-[#A0BE3C33]/40 text-black font-bold py-[10px] px-[15px] rounded-[10px] inline-flex items-center"
            >
                {selectedItem} 
                <CtrlIcon size="16" color="#000" className={`ml-2 transform transition-transform ${isOpen ? 'rotate-0' : '-rotate-90'}`} />
            </button>
            {isOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-[10px] shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-10">
                    <div className="py-1">
                        {tribes.map((tribe) => (
                            <button
                            key={tribe}
                                className="text-gray-700 block px-4 py-2 text-sm hover:bg-[#A0BE3C33]/20"
                                onClick={() => handleItemClick(tribe)}
                                >
                                {tribe}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default RamBtn;