// BuildingData.tsx

export interface BuildingLevelDetail {
  lvl: number;
  Lumber: number;
  Clay: number;
  Iron: number;
  Crop: number;
  Resources: number;
  CropBalance: number;
  CP: number;
  Warehouse: string;
  Granary: string;
  Time: {
    X1: string;
    X2: string;
    X3: string;
  };
  Other: string | { X1: string; X2: string; X3: string; };
  ConstructionTime?: number;
}

export interface LevelDetail {
  lvl: number;
  Lumber: number;
  Clay: number;
  Iron: number;
  Crop: number;
  Resources: number;
  CropBalance: number;
  CP: number;
  Time?: {
    X1: string;
    X2: string;
    X3: string;
  };
  Warehouse: string;
  Granary: string;
  Other: string | { X1: string; X2: string; X3: string; };
}

export interface BuildingData {
  Name: string;
  Prerequiresites: string;
  Description: string;
  image: string;
  OtherTitle: string;
  levels: { [key: string]: BuildingLevelDetail }; // Указываем, что levels - это объект с ключами типа string и значениями типа LevelData
}

export type TimeData = {
  X1: string;
  X2: string;
  X3: string;
};

export type LevelData = {
  Time: TimeData;
  // Добавьте остальные поля, если они есть...
};

export type ServerSpeed = "T 4.6 1x" | "T 4.6 2x" | "T 4.6 3x";

export const speedKeyMap: Record<ServerSpeed, keyof TimeData> = {
  "T 4.6 1x": "X1",
  "T 4.6 2x": "X2",
  "T 4.6 3x": "X3",
};

export interface GridBuilderProps {
  data: (React.ReactNode | string | number)[][]; // Добавляем новый пропс для данных
  numRows: number;
  numCols: number;
  cellWidths: number[]; // Массив ширин для каждой колонки
  cellHeight: number;
  gap: number;
  imagePath: string;
  topRow1: string;
  topRow2: string;
  topRow3: string;
  onCellClick: (rowIndex: number) => void;  // Функция для обработки клика на ячейку
  selectedRows: number[];  // массив индексов выбранных строк
  };