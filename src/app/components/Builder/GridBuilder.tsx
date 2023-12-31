// components/GridBuilder.tsx
import React from 'react';
import Image from 'next/image'; // Импортируем Image компонент из Next.js

interface GridBuilderProps {
  numRows: number;
  numCols: number;
  cellWidths: number[]; // Массив ширин для каждой колонки
  cellHeight: number;
  gap: number;
  imagePath: string;
  data: (React.ReactNode | string | number)[][]; // Добавляем новый пропс для данных
  topRow1: string;
  topRow2: string;
  topRow3: string;
  onCellClick: (rowIndex: number) => void;  // Функция для обработки клика на ячейку
  selectedRows: number[];  // массив индексов выбранных строк
  lastSelectedValue: string | null;
}

const GridBuilder: React.FC<GridBuilderProps> = ({
  numRows,
  numCols,
  cellWidths,
  cellHeight,
  gap,
  imagePath,
  data, // Получаем данные как пропс
  topRow1,
  topRow2,
  topRow3,
  onCellClick,
  selectedRows,  // используем массив выбранных строк
  lastSelectedValue,
}) => {
  // Убедимся, что у нас есть ширина для каждой колонки, иначе используем значение по умолчанию
  const adjustedCellWidths = cellWidths.length === numCols ? cellWidths : new Array(numCols).fill(40);

  // Рассчитываем общую ширину сетки, учитывая отступы
  const totalWidth = adjustedCellWidths.reduce((acc, width) => acc + width, 0) + (numCols - 1) * gap;

  const getCellBackground = (rowIndex: number) => {
    // Если строка последняя, применить синий фон
    if (rowIndex === numRows - 1) {
        return 'bg-blue-300'; // или любой другой класс/стиль для синего цвета
    } else if (selectedRows.includes(rowIndex)) {
        return 'bg-yellow-300'; // Желтый для выбранных строк
    } else if (selectedRows.length === 2 && (rowIndex > Math.min(...selectedRows) && rowIndex < Math.max(...selectedRows))) {
        return 'bg-green-300'; // Зеленый для строк между выбранными
    }
    return ''; // Нет фона по умолчанию
}

// И затем используйте эту функцию в месте, где вы генерируете ячейки сетки

if (selectedRows.length === 1 || selectedRows.length === 2) {
  // Индексы самых высокой и низкой выбранных строк
  const lowestSelectedRowIndex = Math.min(...selectedRows); 
  const highestSelectedRowIndex = selectedRows.length === 1 ? lowestSelectedRowIndex : Math.max(...selectedRows); 

  let sums = Array(8).fill(0); // Массив для сумм столбцов 2-8
  
  // Суммирование значений для столбцов 2-8
  for (let i = lowestSelectedRowIndex; i <= highestSelectedRowIndex; i++) {
    for (let col = 1; col <= 7; col++) { // Столбцы 2-8
        const value = Number(data[i][col]);
        if (!isNaN(value)) { // Убедимся, что это число
            sums[col-1] += value; // Сохраняем сумму для каждого столбца
        }
    }
}

// Обновляем последнюю строку
const updatedLastRow = [...data[data.length - 1]]; 
updatedLastRow[0] = data[highestSelectedRowIndex][0]; // Сохраняем функцию для 1-го столбца
for (let col = 1; col <= 7; col++) {
    updatedLastRow[col] = selectedRows.length === 1 ? data[lowestSelectedRowIndex][col] : sums[col-1]; // Обновляем столбцы 2-8
}

// Сохраняем текущие функции для столбцов 10, 11, и 12
updatedLastRow[9] = data[highestSelectedRowIndex][9]; // Столбец 10
updatedLastRow[10] = data[highestSelectedRowIndex][10]; // Столбец 11
updatedLastRow[11] = data[highestSelectedRowIndex][11]; // Столбец 12

data[data.length - 1] = updatedLastRow; // Обновляем данные для последней строки
}
  

  return (
    <div>
      <div className="flex mb-[1px]" style={{ width: `${totalWidth}px` }}>
        {/* Объединенная ячейка для первых трех строк */}
        <div
          className="relative border border-gray-200"
          style={{ width: `calc(20% - ${gap}px)`, height: `${3 * cellHeight + 2 * gap}px` }}
        >
          <div className="relative w-full h-full">
            <Image src={imagePath} alt="Unique Image" layout="fill" objectFit="contain" />
          </div>
        </div>
        
        {/* Отдельные ячейки для каждой из трех строк, используя пропсы */}
        <div className="flex flex-col justify-between" style={{ width: `calc(80% - ${gap}px)` }}>
          <div className="w-full border border-gray-200" style={{ height: `${cellHeight}px` }}>
            {topRow1}
          </div>
          <div className="w-full border border-gray-200" style={{ height: `${cellHeight}px` }}>
            {topRow2}
          </div>
          <div className="w-full border border-gray-200" style={{ height: `${cellHeight}px` }}>
            {topRow3}
          </div>
        </div>
      </div>

      {/* Основная сетка */}
      <div
        className="grid"
        style={{
          gridTemplateRows: `repeat(${numRows}, ${cellHeight}px)`,
          gridTemplateColumns: adjustedCellWidths.map(width => `${width}px`).join(' '),
          gap: `${gap}px`,
        }}
      >
        {/* Генерируем ячейки сетки */}
        {data.map((row, rowIndex) => (
        row.map((cell, colIndex) => (
          <div
            key={`cell-${rowIndex}-${colIndex}`} // Уникальный ключ
            className={`border border-gray-200 flex items-center justify-center ${getCellBackground(rowIndex)}`} // Используем getCellBackground для определения фона
            style={{ height: `${cellHeight}px`, width: `${adjustedCellWidths[colIndex]}px` }}
            onClick={() => onCellClick(rowIndex)} // Обработка клика
          >
              {cell || <span>&nbsp;</span>}
            </div>
          ))
        ))}

      </div>
    </div>
  );
};

export default GridBuilder;
