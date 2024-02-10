//RamTable.tsx
import React, { useState, useEffect } from 'react';
import { RamArray } from './RamArray';
import RamBtn from './RamBtn';

const RamTable = () => {
    const [selectedItem, setSelectedItem] = useState("Romans");
    const [hoveredRow, setHoveredRow] = useState<null | number>(null);
    const [hoveredColumn, setHoveredColumn] = useState<null | number>(null);

    // Генерация массива для 21 строки
    const rows = Array.from({ length: 22 }, (_, index) => index);
    
    // Получение данных для выбранного элемента
    const tableData = RamArray[selectedItem] ? Object.values(RamArray[selectedItem]) : [];

    return (
      <div>
        <RamBtn setSelectedItem={setSelectedItem} selectedItem={selectedItem} />
        <div className='flex flex-col w-min h-min'>
            <div className='flex bg-[#F5EC81] rounded-t-[10px] p-1 h-min justify-center'>
                <span className='w-fit text-base'>Уровень Стены</span>
            </div>
            <div className='flex flex-row'>
                <div className='bg-[#F5EC81] rounded-bl-[10px] w-[40px] flex flex-col justify-center items-center'>
                    <span className='w-fit text-base whitespace-nowrap -rotate-90'>
                        Уровень Таранов в кузнице
                    </span>
                </div>
                <div className="inline-block p-[10px] bg-[#A0BE3C66]/20 rounded-br-[10px]">
                    {rows.map((_, rowIndex) => (
                        <div key={rowIndex} className="flex">
                            {rows.slice(0, 21).map((_, cellIndex) => (
                                <div
                                    key={cellIndex}
                                    className={`h-[22px] w-[22px] 
                                                ${hoveredRow === rowIndex && hoveredColumn === cellIndex ? 'hover:bg-[#82D2F3]' : ''}
                                                ${hoveredRow === rowIndex ? 'bg-[#82D2F3]/70' : ''}
                                                ${hoveredColumn === cellIndex ? 'bg-[#82D2F3]/70' : ''}
                                                ${cellIndex === 0 || rowIndex === 0 ? 'bg-[#F5EC81]' : 'bg-[#A0BE3C66]/20'}
                                                m-[1px] flex justify-center items-center`}
                                    onMouseEnter={() => {
                                      setHoveredRow(rowIndex);
                                      setHoveredColumn(cellIndex);
                                    }}
                                    onMouseLeave={() => {
                                      setHoveredRow(null);
                                      setHoveredColumn(null);
                                    }}
                                >
                                    <span className={`${hoveredRow === rowIndex && hoveredColumn === cellIndex ? 'bg-[#82D2F3]' : ''}`}>
                                        {tableData[rowIndex]?.[cellIndex]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    );
};

export default RamTable;