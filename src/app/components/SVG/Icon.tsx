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
    import MainBuildingIcon from './Building/MainBuildingIcon';
    import GreatWarehouseIcon from './Building/GreatWarehouseIcon';
//Другое
    import TimeIcon from './Other/TimeIcon';
    import CatapultIcon from './Other/CatapultIcon';
    import RamIcon from './Other/RamIcon';
//Технические
    import CrossIcon from './Technical/CrossIcon';
    import CtrlIcon from './Technical/CtrlIcon';
    import CustomPlusIcon from './Technical/CustomPlusIcon';
    import MinusIcon from './Technical/MinusIcon';
    import LvlAppIcon from './Technical/LvlAppIcon';
    import LvlDefIcon from './Technical/LvlDefIcon';

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
        MainBuilding: MainBuildingIcon,
        GreatWarehouse: GreatWarehouseIcon,
    },

    Other: {
        Time: TimeIcon,
        Ram: RamIcon,
        Catapult: CatapultIcon,
    }, 

    Technical: {
        Cross: CrossIcon,
        Ctrl: CtrlIcon,
        CustomPlus: CustomPlusIcon,
        Minus: MinusIcon,
        LvlApp: LvlAppIcon,
        LvlDef: LvlDefIcon,
    }
};

export default Icon;