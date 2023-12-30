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
    X2?: string;
    X3?: string;
  };
  Other: string;
}

export interface BuildingData {
  Name: string;
  Description: string;
  image: string;
  OtherTitle: string;
  levels: { [key: string]: BuildingLevelDetail }; // Указываем, что levels - это объект с ключами типа string и значениями типа LevelData
}

  
//   В этом определении:

// BuildingLevelDetail представляет подробную информацию о каждом уровне здания, такую как количество ресурсов, необходимых для улучшения, время строительства и другие специфические параметры.
// BuildingData представляет собой общие данные о здании, включая название, описание, изображение и другие детали. Ключи для уровней здания (lvl1, lvl2, ... lvl20) представлены как индексируемая сигнатура, указывающая на BuildingLevelDetail или строку.