import React, { useState } from 'react';

const CatapultTable = () => {
    // Генерация массива для 21 строки
    const rows = Array.from({ length: 22 }, (_, index) => index);
    const tableData = [
        ["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"], 
        [0, 1, 1, 2, 3, 4, 6, 8, 10, 12, 14, 17, 20, 23, 27, 31, 35, 39, 43, 48, 53],
        [1, 1, 1, 2, 3, 4, 6, 7, 9, 12, 14, 17, 20, 23, 26, 30, 34, 38, 43, 47, 52],
        [2, 1, 1, 2, 3, 4, 6, 7, 9, 11, 14, 17, 19, 23, 26, 30, 33, 37, 42, 46, 51],
        [3, 1, 1, 2, 3, 4, 6, 7, 9, 11, 14, 16, 19, 22, 25, 29, 33, 37, 41, 45, 50],
        [4, 1, 1, 2, 3, 4, 5, 7, 9, 11, 13, 16, 19, 22, 25, 28, 32, 36, 40, 44, 49],
        [5, 1, 1, 2, 3, 4, 5, 7, 9, 11, 13, 16, 18, 21, 24, 28, 31, 35, 39, 44, 48],
        [6, 1, 1, 2, 3, 4, 5, 7, 9, 11, 13, 15, 18, 21, 24, 27, 31, 35, 38, 43, 47],
        [7, 1, 1, 2, 3, 4, 5, 7, 9, 10, 13, 15, 18, 20, 23, 27, 30, 34, 38, 42, 46],
        [8, 1, 1, 2, 3, 3, 5, 7, 8, 10, 12, 15, 17, 20, 23, 26, 30, 33, 37, 41, 45],
        [9, 1, 1, 2, 3, 3, 5, 6, 8, 10, 12, 14, 17, 20, 23, 26, 29, 33, 36, 40, 44],
        [10, 1, 1, 2, 3, 3, 4, 6, 8, 10, 12, 14, 17, 19, 22, 25, 28, 32, 36, 39, 44],
        [11, 1, 1, 2, 3, 3, 4, 6, 8, 10, 12, 14, 16, 18, 21, 25, 28, 31, 35, 39, 43],
        [12, 1, 1, 2, 3, 3, 4, 6, 8, 9, 11, 14, 16, 18, 21, 24, 27, 31, 34, 38, 42],
        [13, 1, 1, 2, 3, 3, 4, 6, 8, 9, 11, 13, 16, 18, 20, 24, 27, 30, 34, 37, 41],
        [14, 1, 1, 2, 2, 3, 4, 6, 7, 9, 11, 13, 15, 18, 20, 23, 26, 29, 33, 36, 40],
        [15, 1, 1, 2, 2, 3, 4, 6, 7, 9, 11, 13, 15, 17, 19, 23, 26, 29, 32, 36, 39],
        [16, 1, 1, 2, 2, 3, 4, 6, 7, 9, 11, 13, 15, 17, 19, 22, 25, 28, 31, 35, 39],
        [17, 1, 1, 2, 2, 3, 4, 6, 7, 9, 10, 12, 14, 17, 19, 22, 25, 28, 31, 34, 38],
        [18, 1, 1, 2, 2, 3, 4, 5, 7, 8, 10, 12, 14, 16, 18, 21, 24, 27, 30, 34, 37],
        [19, 1, 1, 2, 2, 3, 4, 5, 7, 8, 10, 12, 14, 16, 18, 21, 24, 27, 30, 33, 36],
        [20, 1, 1, 2, 2, 3, 4, 5, 7, 8, 10, 12, 14, 16, 18, 21, 23, 26, 29, 32, 36],
        
    ];

    // Состояния для отслеживания наведенной строки и столбца
    const [hoveredRow, setHoveredRow] = useState<null | number>(null);
    const [hoveredColumn, setHoveredColumn] = useState<null | number>(null);

    return (
        <div className='flex flex-col w-min h-min'>
            <div className='flex bg-[#F5EC81] rounded-t-[10px] p-1 h-min justify-center'>
                <span className='w-fit text-base'>Уровень здания / Резиденции / Дворца / Сокровищницы</span>
            </div>
            <div className='flex flex-row'>
                <div className='bg-[#F5EC81] rounded-bl-[10px] w-[40px] flex flex-col justify-center items-center'>
                    <span className='w-fit text-base whitespace-nowrap -rotate-90'>
                        Уровень Катапульт в кузнице
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
                                                ${cellIndex === 0 || rowIndex === 0 ? 'bg-[#F5EC81]' : 'bg-[#A0BE3C66]/30'}
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
    );
};

export default CatapultTable;