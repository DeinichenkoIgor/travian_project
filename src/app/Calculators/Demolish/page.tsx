// pages.tsx или любой другой файл, где вы используете GridBuilder
import React from 'react';
import GridBuilder from '../../components/Builder/GridBuilder'; //Сетка
import Buildings from '../../components/Builder/BuilderArray'; //Массив зданий
import NumberComponent from '../../components/NumberComponent'; //Переобразователь
import Icon from '../../components/SVG/Icon'; //Иконки
import Image from 'next/image';

const imagePath = Buildings.MainBuilding.image; // путь к изображению

const Demolish: React.FC = () => {
  const topRow1 = Buildings.MainBuilding.Name;
  const topRow2 = "требования: ";
  const topRow3 = Buildings.MainBuilding.Description;
  // Определение данных
  const data = [
    ["lvl", React.createElement(Icon.Resources.Lumber, { size: "100%" }), React.createElement(Icon.Resources.Clay, { size: "100%" }), React.createElement(Icon.Resources.Iron, { size: "100%" }), React.createElement(Icon.Resources.Crop, { size: "100%" }), React.createElement(Icon.Resources.Resources, { size: "100%" }), React.createElement(Icon.Resources.CropBalance, { size: "100%" }), "ЕК", React.createElement(Icon.Other.Time, { size: "100%" }), React.createElement(Icon.Building.Warehouse, { size: "100%" }), React.createElement(Icon.Building.Granary, { size: "100%" }), Buildings.MainBuilding.OtherTitle], //Шапка
    [<NumberComponent number={Buildings.MainBuilding.lvl1.lvl} />, <NumberComponent number={Buildings.MainBuilding.lvl1.Lumber} />,
     <NumberComponent number={Buildings.MainBuilding.lvl1.Clay} />, <NumberComponent number={Buildings.MainBuilding.lvl1.Iron} />,
      <NumberComponent number={Buildings.MainBuilding.lvl1.Crop} />, <NumberComponent number={Buildings.MainBuilding.lvl1.Resources} />,
       <NumberComponent number={Buildings.MainBuilding.lvl1.CropBalance} />, <NumberComponent number={Buildings.MainBuilding.lvl1.CP} />,
        Buildings.MainBuilding.lvl1.Time.X1, Buildings.MainBuilding.lvl1.Warehouse ,
     Buildings.MainBuilding.lvl1.Granary , Buildings.MainBuilding.lvl1.Other ], //#1
     [<NumberComponent number={Buildings.MainBuilding.lvl2.lvl} />, <NumberComponent number={Buildings.MainBuilding.lvl2.Lumber} />,
     <NumberComponent number={Buildings.MainBuilding.lvl2.Clay} />, <NumberComponent number={Buildings.MainBuilding.lvl2.Iron} />,
      <NumberComponent number={Buildings.MainBuilding.lvl2.Crop} />, <NumberComponent number={Buildings.MainBuilding.lvl2.Resources} />,
       <NumberComponent number={Buildings.MainBuilding.lvl2.CropBalance} />, <NumberComponent number={Buildings.MainBuilding.lvl2.CP} />,
        Buildings.MainBuilding.lvl2.Time.X1, Buildings.MainBuilding.lvl2.Warehouse ,
     Buildings.MainBuilding.lvl2.Granary , Buildings.MainBuilding.lvl2.Other ], //#2
     [<NumberComponent number={Buildings.MainBuilding.lvl3.lvl} />, <NumberComponent number={Buildings.MainBuilding.lvl3.Lumber} />,
     <NumberComponent number={Buildings.MainBuilding.lvl3.Clay} />, <NumberComponent number={Buildings.MainBuilding.lvl3.Iron} />,
      <NumberComponent number={Buildings.MainBuilding.lvl3.Crop} />, <NumberComponent number={Buildings.MainBuilding.lvl3.Resources} />,
       <NumberComponent number={Buildings.MainBuilding.lvl3.CropBalance} />, <NumberComponent number={Buildings.MainBuilding.lvl3.CP} />,
        Buildings.MainBuilding.lvl3.Time.X1, Buildings.MainBuilding.lvl3.Warehouse ,
     Buildings.MainBuilding.lvl3.Granary , Buildings.MainBuilding.lvl3.Other ], //#3
     [<NumberComponent number={Buildings.MainBuilding.lvl4.lvl} />, <NumberComponent number={Buildings.MainBuilding.lvl4.Lumber} />,
     <NumberComponent number={Buildings.MainBuilding.lvl4.Clay} />, <NumberComponent number={Buildings.MainBuilding.lvl4.Iron} />,
      <NumberComponent number={Buildings.MainBuilding.lvl4.Crop} />, <NumberComponent number={Buildings.MainBuilding.lvl4.Resources} />,
       <NumberComponent number={Buildings.MainBuilding.lvl4.CropBalance} />, <NumberComponent number={Buildings.MainBuilding.lvl4.CP} />,
        Buildings.MainBuilding.lvl4.Time.X1, Buildings.MainBuilding.lvl4.Warehouse ,
     Buildings.MainBuilding.lvl4.Granary , Buildings.MainBuilding.lvl4.Other ], //#4
     [<NumberComponent number={Buildings.MainBuilding.lvl5.lvl} />, <NumberComponent number={Buildings.MainBuilding.lvl5.Lumber} />,
     <NumberComponent number={Buildings.MainBuilding.lvl5.Clay} />, <NumberComponent number={Buildings.MainBuilding.lvl5.Iron} />,
      <NumberComponent number={Buildings.MainBuilding.lvl5.Crop} />, <NumberComponent number={Buildings.MainBuilding.lvl5.Resources} />,
       <NumberComponent number={Buildings.MainBuilding.lvl5.CropBalance} />, <NumberComponent number={Buildings.MainBuilding.lvl5.CP} />,
        Buildings.MainBuilding.lvl5.Time.X1, Buildings.MainBuilding.lvl5.Warehouse ,
     Buildings.MainBuilding.lvl5.Granary , Buildings.MainBuilding.lvl5.Other ], //#5
     [<NumberComponent number={Buildings.MainBuilding.lvl6.lvl} />, <NumberComponent number={Buildings.MainBuilding.lvl6.Lumber} />,
     <NumberComponent number={Buildings.MainBuilding.lvl6.Clay} />, <NumberComponent number={Buildings.MainBuilding.lvl6.Iron} />,
      <NumberComponent number={Buildings.MainBuilding.lvl6.Crop} />, <NumberComponent number={Buildings.MainBuilding.lvl6.Resources} />,
       <NumberComponent number={Buildings.MainBuilding.lvl6.CropBalance} />, <NumberComponent number={Buildings.MainBuilding.lvl6.CP} />,
        Buildings.MainBuilding.lvl6.Time.X1, Buildings.MainBuilding.lvl6.Warehouse ,
     Buildings.MainBuilding.lvl6.Granary , Buildings.MainBuilding.lvl6.Other ], //#6
     [<NumberComponent number={Buildings.MainBuilding.lvl7.lvl} />, <NumberComponent number={Buildings.MainBuilding.lvl7.Lumber} />,
     <NumberComponent number={Buildings.MainBuilding.lvl7.Clay} />, <NumberComponent number={Buildings.MainBuilding.lvl7.Iron} />,
      <NumberComponent number={Buildings.MainBuilding.lvl7.Crop} />, <NumberComponent number={Buildings.MainBuilding.lvl7.Resources} />,
       <NumberComponent number={Buildings.MainBuilding.lvl7.CropBalance} />, <NumberComponent number={Buildings.MainBuilding.lvl7.CP} />,
        Buildings.MainBuilding.lvl7.Time.X1, Buildings.MainBuilding.lvl7.Warehouse ,
     Buildings.MainBuilding.lvl7.Granary , Buildings.MainBuilding.lvl7.Other ], //#7
     [<NumberComponent number={Buildings.MainBuilding.lvl8.lvl} />, <NumberComponent number={Buildings.MainBuilding.lvl8.Lumber} />,
     <NumberComponent number={Buildings.MainBuilding.lvl8.Clay} />, <NumberComponent number={Buildings.MainBuilding.lvl8.Iron} />,
      <NumberComponent number={Buildings.MainBuilding.lvl8.Crop} />, <NumberComponent number={Buildings.MainBuilding.lvl8.Resources} />,
       <NumberComponent number={Buildings.MainBuilding.lvl8.CropBalance} />, <NumberComponent number={Buildings.MainBuilding.lvl8.CP} />,
        Buildings.MainBuilding.lvl8.Time.X1, Buildings.MainBuilding.lvl8.Warehouse ,
     Buildings.MainBuilding.lvl8.Granary , Buildings.MainBuilding.lvl8.Other ], //#8
     [<NumberComponent number={Buildings.MainBuilding.lvl9.lvl} />, <NumberComponent number={Buildings.MainBuilding.lvl9.Lumber} />,
     <NumberComponent number={Buildings.MainBuilding.lvl9.Clay} />, <NumberComponent number={Buildings.MainBuilding.lvl9.Iron} />,
      <NumberComponent number={Buildings.MainBuilding.lvl9.Crop} />, <NumberComponent number={Buildings.MainBuilding.lvl9.Resources} />,
       <NumberComponent number={Buildings.MainBuilding.lvl9.CropBalance} />, <NumberComponent number={Buildings.MainBuilding.lvl9.CP} />,
        Buildings.MainBuilding.lvl9.Time.X1, Buildings.MainBuilding.lvl9.Warehouse ,
     Buildings.MainBuilding.lvl9.Granary , Buildings.MainBuilding.lvl9.Other ], //#9
     [<NumberComponent number={Buildings.MainBuilding.lvl10.lvl} />, <NumberComponent number={Buildings.MainBuilding.lvl10.Lumber} />,
     <NumberComponent number={Buildings.MainBuilding.lvl10.Clay} />, <NumberComponent number={Buildings.MainBuilding.lvl10.Iron} />,
      <NumberComponent number={Buildings.MainBuilding.lvl10.Crop} />, <NumberComponent number={Buildings.MainBuilding.lvl10.Resources} />,
       <NumberComponent number={Buildings.MainBuilding.lvl10.CropBalance} />, <NumberComponent number={Buildings.MainBuilding.lvl10.CP} />,
        Buildings.MainBuilding.lvl10.Time.X1, Buildings.MainBuilding.lvl10.Warehouse ,
     Buildings.MainBuilding.lvl10.Granary , Buildings.MainBuilding.lvl10.Other ], //#10
     [<NumberComponent number={Buildings.MainBuilding.lvl11.lvl} />, <NumberComponent number={Buildings.MainBuilding.lvl11.Lumber} />,
     <NumberComponent number={Buildings.MainBuilding.lvl11.Clay} />, <NumberComponent number={Buildings.MainBuilding.lvl11.Iron} />,
      <NumberComponent number={Buildings.MainBuilding.lvl11.Crop} />, <NumberComponent number={Buildings.MainBuilding.lvl11.Resources} />,
       <NumberComponent number={Buildings.MainBuilding.lvl11.CropBalance} />, <NumberComponent number={Buildings.MainBuilding.lvl11.CP} />,
        Buildings.MainBuilding.lvl11.Time.X1, Buildings.MainBuilding.lvl11.Warehouse ,
     Buildings.MainBuilding.lvl11.Granary , Buildings.MainBuilding.lvl11.Other ], //#11
     [<NumberComponent number={Buildings.MainBuilding.lvl12.lvl} />, <NumberComponent number={Buildings.MainBuilding.lvl12.Lumber} />,
     <NumberComponent number={Buildings.MainBuilding.lvl12.Clay} />, <NumberComponent number={Buildings.MainBuilding.lvl12.Iron} />,
      <NumberComponent number={Buildings.MainBuilding.lvl12.Crop} />, <NumberComponent number={Buildings.MainBuilding.lvl12.Resources} />,
       <NumberComponent number={Buildings.MainBuilding.lvl12.CropBalance} />, <NumberComponent number={Buildings.MainBuilding.lvl12.CP} />,
        Buildings.MainBuilding.lvl12.Time.X1, Buildings.MainBuilding.lvl12.Warehouse ,
     Buildings.MainBuilding.lvl12.Granary , Buildings.MainBuilding.lvl12.Other ], //#12
     [<NumberComponent number={Buildings.MainBuilding.lvl13.lvl} />, <NumberComponent number={Buildings.MainBuilding.lvl13.Lumber} />,
     <NumberComponent number={Buildings.MainBuilding.lvl13.Clay} />, <NumberComponent number={Buildings.MainBuilding.lvl13.Iron} />,
      <NumberComponent number={Buildings.MainBuilding.lvl13.Crop} />, <NumberComponent number={Buildings.MainBuilding.lvl13.Resources} />,
       <NumberComponent number={Buildings.MainBuilding.lvl13.CropBalance} />, <NumberComponent number={Buildings.MainBuilding.lvl13.CP} />,
        Buildings.MainBuilding.lvl13.Time.X1, Buildings.MainBuilding.lvl13.Warehouse ,
     Buildings.MainBuilding.lvl13.Granary , Buildings.MainBuilding.lvl13.Other ], //#13
     [<NumberComponent number={Buildings.MainBuilding.lvl14.lvl} />, <NumberComponent number={Buildings.MainBuilding.lvl14.Lumber} />,
     <NumberComponent number={Buildings.MainBuilding.lvl14.Clay} />, <NumberComponent number={Buildings.MainBuilding.lvl14.Iron} />,
      <NumberComponent number={Buildings.MainBuilding.lvl14.Crop} />, <NumberComponent number={Buildings.MainBuilding.lvl14.Resources} />,
       <NumberComponent number={Buildings.MainBuilding.lvl14.CropBalance} />, <NumberComponent number={Buildings.MainBuilding.lvl14.CP} />,
        Buildings.MainBuilding.lvl14.Time.X1, Buildings.MainBuilding.lvl14.Warehouse ,
     Buildings.MainBuilding.lvl14.Granary , Buildings.MainBuilding.lvl14.Other ], //#14
     [<NumberComponent number={Buildings.MainBuilding.lvl15.lvl} />, <NumberComponent number={Buildings.MainBuilding.lvl15.Lumber} />,
     <NumberComponent number={Buildings.MainBuilding.lvl15.Clay} />, <NumberComponent number={Buildings.MainBuilding.lvl15.Iron} />,
      <NumberComponent number={Buildings.MainBuilding.lvl15.Crop} />, <NumberComponent number={Buildings.MainBuilding.lvl15.Resources} />,
       <NumberComponent number={Buildings.MainBuilding.lvl15.CropBalance} />, <NumberComponent number={Buildings.MainBuilding.lvl15.CP} />,
        Buildings.MainBuilding.lvl15.Time.X1, Buildings.MainBuilding.lvl15.Warehouse ,
     Buildings.MainBuilding.lvl15.Granary , Buildings.MainBuilding.lvl15.Other ], //#15
     [<NumberComponent number={Buildings.MainBuilding.lvl16.lvl} />, <NumberComponent number={Buildings.MainBuilding.lvl16.Lumber} />,
     <NumberComponent number={Buildings.MainBuilding.lvl16.Clay} />, <NumberComponent number={Buildings.MainBuilding.lvl16.Iron} />,
      <NumberComponent number={Buildings.MainBuilding.lvl16.Crop} />, <NumberComponent number={Buildings.MainBuilding.lvl16.Resources} />,
       <NumberComponent number={Buildings.MainBuilding.lvl16.CropBalance} />, <NumberComponent number={Buildings.MainBuilding.lvl16.CP} />,
        Buildings.MainBuilding.lvl16.Time.X1, Buildings.MainBuilding.lvl16.Warehouse ,
     Buildings.MainBuilding.lvl16.Granary , Buildings.MainBuilding.lvl16.Other ], //#16
     [<NumberComponent number={Buildings.MainBuilding.lvl17.lvl} />, <NumberComponent number={Buildings.MainBuilding.lvl17.Lumber} />,
     <NumberComponent number={Buildings.MainBuilding.lvl17.Clay} />, <NumberComponent number={Buildings.MainBuilding.lvl17.Iron} />,
      <NumberComponent number={Buildings.MainBuilding.lvl17.Crop} />, <NumberComponent number={Buildings.MainBuilding.lvl17.Resources} />,
       <NumberComponent number={Buildings.MainBuilding.lvl17.CropBalance} />, <NumberComponent number={Buildings.MainBuilding.lvl17.CP} />,
        Buildings.MainBuilding.lvl17.Time.X1, Buildings.MainBuilding.lvl17.Warehouse ,
     Buildings.MainBuilding.lvl17.Granary , Buildings.MainBuilding.lvl17.Other ], //#17
     [<NumberComponent number={Buildings.MainBuilding.lvl18.lvl} />, <NumberComponent number={Buildings.MainBuilding.lvl18.Lumber} />,
     <NumberComponent number={Buildings.MainBuilding.lvl18.Clay} />, <NumberComponent number={Buildings.MainBuilding.lvl18.Iron} />,
      <NumberComponent number={Buildings.MainBuilding.lvl18.Crop} />, <NumberComponent number={Buildings.MainBuilding.lvl18.Resources} />,
       <NumberComponent number={Buildings.MainBuilding.lvl18.CropBalance} />, <NumberComponent number={Buildings.MainBuilding.lvl18.CP} />,
        Buildings.MainBuilding.lvl18.Time.X1, Buildings.MainBuilding.lvl18.Warehouse ,
     Buildings.MainBuilding.lvl18.Granary , Buildings.MainBuilding.lvl18.Other ], //#18
     [<NumberComponent number={Buildings.MainBuilding.lvl19.lvl} />, <NumberComponent number={Buildings.MainBuilding.lvl19.Lumber} />,
     <NumberComponent number={Buildings.MainBuilding.lvl19.Clay} />, <NumberComponent number={Buildings.MainBuilding.lvl19.Iron} />,
      <NumberComponent number={Buildings.MainBuilding.lvl19.Crop} />, <NumberComponent number={Buildings.MainBuilding.lvl19.Resources} />,
       <NumberComponent number={Buildings.MainBuilding.lvl19.CropBalance} />, <NumberComponent number={Buildings.MainBuilding.lvl19.CP} />,
        Buildings.MainBuilding.lvl19.Time.X1, Buildings.MainBuilding.lvl19.Warehouse ,
     Buildings.MainBuilding.lvl19.Granary , Buildings.MainBuilding.lvl19.Other ], //#19
     [<NumberComponent number={Buildings.MainBuilding.lvl20.lvl} />, <NumberComponent number={Buildings.MainBuilding.lvl20.Lumber} />,
     <NumberComponent number={Buildings.MainBuilding.lvl20.Clay} />, <NumberComponent number={Buildings.MainBuilding.lvl20.Iron} />,
      <NumberComponent number={Buildings.MainBuilding.lvl20.Crop} />, <NumberComponent number={Buildings.MainBuilding.lvl20.Resources} />,
       <NumberComponent number={Buildings.MainBuilding.lvl20.CropBalance} />, <NumberComponent number={Buildings.MainBuilding.lvl20.CP} />,
        Buildings.MainBuilding.lvl20.Time.X1, Buildings.MainBuilding.lvl20.Warehouse ,
     Buildings.MainBuilding.lvl20.Granary , Buildings.MainBuilding.lvl20.Other ], //#20
     ["-", "-","-","-","-","-","-","-","-","-","-","-"]
    
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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-5">My Grid</h1>
      {/* Используйте GridBuilder с заданными параметрами и передайте данные */}
      <GridBuilder
        numRows={data.length}
        numCols={cellWidths.length}
        cellWidths={cellWidths}
        cellHeight={24}
        gap={1}
        imagePath={imagePath}
        data={data} // Передаем данные в GridBuilder
        topRow1={topRow1}
        topRow2={topRow2}
        topRow3={topRow3}
      />
    </div>
  );
};

export default Demolish;
