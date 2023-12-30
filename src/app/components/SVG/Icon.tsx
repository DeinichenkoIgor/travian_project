// components/Icon.tsx

//Ресурсы
    import LumberIcon from './Resources/LumberIcon';
    import ClayIcon from './Resources/ClayIcon';
    import IronIcon from './Resources/IronIcon';
    import CropIcon from './Resources/CropIcon';
    import ResourcesIcon from './Resources/ResourcesIcon';
    import CropBalanceIcon from './Resources/CropBalanceIcon';
//Здания
    import GranaryIcon from './Building/GranaryIcon';
    import WarehouseIcon from './Building/WarehouseIcon';
//Другое
    import TimeIcon from './Other/TimeIcon';

// Объединяем все иконки в один объект для легкого доступа
const Icon = {
    Resources: {
    Lumber: LumberIcon,
    Clay: ClayIcon,
    Iron: IronIcon,
    Crop: CropIcon,
    Resources: ResourcesIcon,
    CropBalance: CropBalanceIcon,
    },

    Building: {
        Warehouse: WarehouseIcon,
        Granary: GranaryIcon,
    },

    Other: {
        Time: TimeIcon,
    }, 
};

export default Icon;