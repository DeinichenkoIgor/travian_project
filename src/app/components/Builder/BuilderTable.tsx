// BuilderTable.tsx
import React from 'react';
import GridBuilder from './GridBuilder'; //Сетка
import NumberComponent from '../NumberComponent'; //Переобразователь
import Icon from '../SVG/Icon'; //Иконки
import Image from 'next/image';
import { BuildingData } from '../Builder/path/BuildingData';



const BuilderTable: React.FC<{ building: BuildingData }> = ({ building }) => {
  const topRow1 = building.Name;
  const topRow2 = building.Prerequiresites;
  const topRow3 = building.Description;
  
  const imagePath = building.image; // путь к изображению
  // Определение данных
  
  const data = [
    ["lvl", React.createElement(Icon.Resources.Lumber, { size: "100%" }), React.createElement(Icon.Resources.Clay, { size: "100%" }), React.createElement(Icon.Resources.Iron, { size: "100%" }), React.createElement(Icon.Resources.Crop, { size: "100%" }), React.createElement(Icon.Resources.Resources, { size: "100%" }), React.createElement(Icon.Resources.CropBalance, { size: "100%" }), "ЕК", React.createElement(Icon.Other.Time, { size: "100%" }), React.createElement(Icon.Building.Warehouse, { size: "100%" }), React.createElement(Icon.Building.Granary, { size: "100%" }), building.OtherTitle], //Шапка
    [building.levels.lvl1.lvl, building.levels.lvl1.Lumber, building.levels.lvl1.Clay, building.levels.lvl1.Iron, building.levels.lvl1.Crop, building.levels.lvl1.Resources, building.levels.lvl1.CropBalance, building.levels.lvl1.CP,
       building.levels.lvl1.Time.X1, building.levels.lvl1.Warehouse ,
       building.levels.lvl1.Granary , building.levels.lvl1.Other ], //#1
     [building.levels.lvl2.lvl, building.levels.lvl2.Lumber ,
     building.levels.lvl2.Clay, building.levels.lvl2.Iron,
      building.levels.lvl2.Crop, building.levels.lvl2.Resources,
       building.levels.lvl2.CropBalance, building.levels.lvl2.CP,
       building.levels.lvl2.Time.X1, building.levels.lvl2.Warehouse ,
       building.levels.lvl2.Granary , building.levels.lvl2.Other ], //#2
     [building.levels.lvl3.lvl, building.levels.lvl3.Lumber,
     building.levels.lvl3.Clay, building.levels.lvl3.Iron,
      building.levels.lvl3.Crop, building.levels.lvl3.Resources,
       building.levels.lvl3.CropBalance, building.levels.lvl3.CP,
       building.levels.lvl3.Time.X1, building.levels.lvl3.Warehouse ,
       building.levels.lvl3.Granary , building.levels.lvl3.Other ], //#3
     [building.levels.lvl4.lvl, building.levels.lvl4.Lumber,
     building.levels.lvl4.Clay, building.levels.lvl4.Iron,
      building.levels.lvl4.Crop, building.levels.lvl4.Resources,
       building.levels.lvl4.CropBalance, building.levels.lvl4.CP,
       building.levels.lvl4.Time.X1, building.levels.lvl4.Warehouse ,
       building.levels.lvl4.Granary , building.levels.lvl4.Other ], //#4
     [building.levels.lvl5.lvl, building.levels.lvl5.Lumber,
     building.levels.lvl5.Clay, building.levels.lvl5.Iron,
      building.levels.lvl5.Crop, building.levels.lvl5.Resources,
       building.levels.lvl5.CropBalance, building.levels.lvl5.CP,
       building.levels.lvl5.Time.X1, building.levels.lvl5.Warehouse ,
       building.levels.lvl5.Granary , building.levels.lvl5.Other ], //#5
     [building.levels.lvl6.lvl, building.levels.lvl6.Lumber,
     building.levels.lvl6.Clay, building.levels.lvl6.Iron,
      building.levels.lvl6.Crop, building.levels.lvl6.Resources,
       building.levels.lvl6.CropBalance, building.levels.lvl6.CP,
       building.levels.lvl6.Time.X1, building.levels.lvl6.Warehouse ,
       building.levels.lvl6.Granary , building.levels.lvl6.Other ], //#6
     [building.levels.lvl7.lvl, building.levels.lvl7.Lumber,
     building.levels.lvl7.Clay, building.levels.lvl7.Iron,
      building.levels.lvl7.Crop, building.levels.lvl7.Resources,
       building.levels.lvl7.CropBalance, building.levels.lvl7.CP,
       building.levels.lvl7.Time.X1, building.levels.lvl7.Warehouse ,
       building.levels.lvl7.Granary , building.levels.lvl7.Other ], //#7
     [building.levels.lvl8.lvl, building.levels.lvl8.Lumber,
     building.levels.lvl8.Clay, building.levels.lvl8.Iron,
      building.levels.lvl8.Crop, building.levels.lvl8.Resources,
       building.levels.lvl8.CropBalance, building.levels.lvl8.CP,
       building.levels.lvl8.Time.X1, building.levels.lvl8.Warehouse ,
       building.levels.lvl8.Granary , building.levels.lvl8.Other ], //#8
     [building.levels.lvl9.lvl, building.levels.lvl9.Lumber,
     building.levels.lvl9.Clay, building.levels.lvl9.Iron,
      building.levels.lvl9.Crop, building.levels.lvl9.Resources,
       building.levels.lvl9.CropBalance, building.levels.lvl9.CP,
       building.levels.lvl9.Time.X1, building.levels.lvl9.Warehouse ,
       building.levels.lvl9.Granary , building.levels.lvl9.Other ], //#9
     [building.levels.lvl10.lvl, building.levels.lvl10.Lumber,
     building.levels.lvl10.Clay, building.levels.lvl10.Iron,
      building.levels.lvl10.Crop, building.levels.lvl10.Resources,
       building.levels.lvl10.CropBalance, building.levels.lvl10.CP,
       building.levels.lvl10.Time.X1, building.levels.lvl10.Warehouse ,
       building.levels.lvl10.Granary , building.levels.lvl10.Other ], //#10
     [building.levels.lvl11.lvl, building.levels.lvl11.Lumber,
     building.levels.lvl11.Clay, building.levels.lvl11.Iron,
      building.levels.lvl11.Crop, building.levels.lvl11.Resources,
       building.levels.lvl11.CropBalance, building.levels.lvl11.CP,
       building.levels.lvl11.Time.X1, building.levels.lvl11.Warehouse ,
       building.levels.lvl11.Granary , building.levels.lvl11.Other ], //#11
     [building.levels.lvl12.lvl, building.levels.lvl12.Lumber,
     building.levels.lvl12.Clay, building.levels.lvl12.Iron,
      building.levels.lvl12.Crop, building.levels.lvl12.Resources,
       building.levels.lvl12.CropBalance, building.levels.lvl12.CP,
       building.levels.lvl12.Time.X1, building.levels.lvl12.Warehouse ,
       building.levels.lvl12.Granary , building.levels.lvl12.Other ], //#12
     [building.levels.lvl13.lvl, building.levels.lvl13.Lumber,
     building.levels.lvl13.Clay, building.levels.lvl13.Iron,
      building.levels.lvl13.Crop, building.levels.lvl13.Resources,
       building.levels.lvl13.CropBalance, building.levels.lvl13.CP,
       building.levels.lvl13.Time.X1, building.levels.lvl13.Warehouse ,
       building.levels.lvl13.Granary , building.levels.lvl13.Other ], //#13
     [building.levels.lvl14.lvl, building.levels.lvl14.Lumber,
     building.levels.lvl14.Clay, building.levels.lvl14.Iron,
      building.levels.lvl14.Crop, building.levels.lvl14.Resources,
       building.levels.lvl14.CropBalance, building.levels.lvl14.CP,
       building.levels.lvl14.Time.X1, building.levels.lvl14.Warehouse ,
       building.levels.lvl14.Granary , building.levels.lvl14.Other ], //#14
     [building.levels.lvl15.lvl, building.levels.lvl15.Lumber,
     building.levels.lvl15.Clay, building.levels.lvl15.Iron,
      building.levels.lvl15.Crop, building.levels.lvl15.Resources,
       building.levels.lvl15.CropBalance, building.levels.lvl15.CP,
       building.levels.lvl15.Time.X1, building.levels.lvl15.Warehouse ,
       building.levels.lvl15.Granary , building.levels.lvl15.Other ], //#15
     [building.levels.lvl16.lvl, building.levels.lvl16.Lumber,
     building.levels.lvl16.Clay, building.levels.lvl16.Iron,
      building.levels.lvl16.Crop, building.levels.lvl16.Resources,
       building.levels.lvl16.CropBalance, building.levels.lvl16.CP,
        building.levels.lvl16.Time.X1, building.levels.lvl16.Warehouse ,
     building.levels.lvl16.Granary , building.levels.lvl16.Other ], //#16
     [building.levels.lvl17.lvl, building.levels.lvl17.Lumber,
     building.levels.lvl17.Clay, building.levels.lvl17.Iron,
      building.levels.lvl17.Crop, building.levels.lvl17.Resources,
       building.levels.lvl17.CropBalance, building.levels.lvl17.CP,
        building.levels.lvl17.Time.X1, building.levels.lvl17.Warehouse ,
     building.levels.lvl17.Granary , building.levels.lvl17.Other ], //#17
     [building.levels.lvl18.lvl, building.levels.lvl18.Lumber,
     building.levels.lvl18.Clay, building.levels.lvl18.Iron,
      building.levels.lvl18.Crop, building.levels.lvl18.Resources,
       building.levels.lvl18.CropBalance, building.levels.lvl18.CP,
        building.levels.lvl18.Time.X1, building.levels.lvl18.Warehouse ,
     building.levels.lvl18.Granary , building.levels.lvl18.Other ], //#18
     [building.levels.lvl19.lvl, building.levels.lvl19.Lumber,
     building.levels.lvl19.Clay, building.levels.lvl19.Iron,
      building.levels.lvl19.Crop, building.levels.lvl19.Resources,
       building.levels.lvl19.CropBalance, building.levels.lvl19.CP,
        building.levels.lvl19.Time.X1, building.levels.lvl19.Warehouse ,
     building.levels.lvl19.Granary , building.levels.lvl19.Other ], //#19
     [building.levels.lvl20.lvl, building.levels.lvl20.Lumber,
     building.levels.lvl20.Clay, building.levels.lvl20.Iron,
      building.levels.lvl20.Crop, building.levels.lvl20.Resources,
       building.levels.lvl20.CropBalance, building.levels.lvl20.CP,
        building.levels.lvl20.Time.X1, building.levels.lvl20.Warehouse ,
     building.levels.lvl20.Granary , building.levels.lvl20.Other ], //#20
     [building.levels.lvl00.lvl, building.levels.lvl00.Lumber,
     building.levels.lvl00.Clay, building.levels.lvl00.Iron,
      building.levels.lvl00.Crop, building.levels.lvl00.Resources,
       building.levels.lvl00.CropBalance, building.levels.lvl00.CP,
        building.levels.lvl00.Time.X1, building.levels.lvl00.Warehouse ,
     building.levels.lvl00.Granary , building.levels.lvl00.Other ],
    

    //  const variable = "string";

    //  const mom = [variable, vatr, 0, "string", true, null]
  ];
  // Создаем массив ширин колонок, где первая колонка 20, последняя 300, а остальные 40
  const cellWidths = Array(12).fill(60); // сначала заполните все колонки шириной 40
  cellWidths[0] = 30; // измените ширину первой колонки на 20
  cellWidths[6] = 30; 
  cellWidths[7] = 30; 
  cellWidths[8] = 80;
  cellWidths[9] = 80;
  cellWidths[10] = 80;
  cellWidths[11] = 220; // измените ширину последней колонки на 300

  
  const [selectedRows, setSelectedRows] = React.useState<number[]>([]);
  const [lastSelectedValue, setLastSelectedValue] = React.useState<string | null>(null);

  const handleCellClick = (rowIndex: number) => {
    if (rowIndex !== 0 && rowIndex !== data.length - 1) {
        setSelectedRows((prevSelected) => {
            const updatedSelected = [...prevSelected];
            if (updatedSelected.includes(rowIndex)) {
                // Удалить, если строка уже выбрана
                return updatedSelected.filter((r) => r !== rowIndex);
            } else if (updatedSelected.length === 2) {
                // Сохраняем последнее значение с самой нижней выбранной строки
                const lowestSelectedRow = Math.max(...updatedSelected);
                const valueToSave = data[lowestSelectedRow][0]; // Убедитесь, что это строка или число!
                setLastSelectedValue(String(valueToSave));
                return [rowIndex]; // Сбросить и начать заново с текущей строки
            } else {
                // Добавить новую строку
                return [...updatedSelected, rowIndex].slice(-2);
            }
        });
    }
};

// Создайте обновленные данные здесь, прежде чем они будут отправлены в GridBuilder
let updatedData = [...data]; // Копирование данных для иммутабельности
if (selectedRows.length === 2 && lastSelectedValue !== null) {
  // Предполагаем, что значение находится в первой ячейке последней строки
  // Обновите это согласно вашей логике, если оно отличается
  updatedData[updatedData.length - 1][0] = <NumberComponent number={lastSelectedValue || 0} />;
}

// Перед использованием, убедитесь, что lastSelectedValue - это число.
const numericValue = lastSelectedValue ? parseInt(lastSelectedValue, 10) : null;
console.log("Numeric Value: ", numericValue); // Добавьте это для отладки

// Потом, в вашем массиве data, обновите последний элемент (или любой другой, который нужно обновить)
if (numericValue !== null) {
  updatedData[updatedData.length - 1][0] = <NumberComponent number={numericValue} />;
} else {
  // Установите значение по умолчанию, если numericValue не удалось получить
  updatedData[updatedData.length - 1][0] = <NumberComponent number={0} />;
}


  return (
    <div className="container mx-auto p-4">
      
      {/* Используйте GridBuilder с заданными параметрами и передайте данные */}
      <GridBuilder
        numRows={data.length}
        numCols={cellWidths.length}
        cellWidths={cellWidths}
        cellHeight={24}
        gap={1}
        imagePath={imagePath}
        data={updatedData} // Передаем данные в GridBuilder
        topRow1={topRow1}
        topRow2={topRow2}
        topRow3={topRow3}
        onCellClick={handleCellClick} // передача функции
        selectedRows={selectedRows} // передача выбранной строки
        lastSelectedValue={lastSelectedValue}
      />
    </div>
  );
};

export default BuilderTable;
