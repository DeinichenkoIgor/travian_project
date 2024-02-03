// CustomPlusBtn.tsx
import React, { useContext } from 'react';
import BuilderContext from '../Builder/BuilderContext';
import CustomPlusIcon from '../SVG/Technical/CustomPlusIcon';

interface CustomPlusBtnProps {
    buildingName: string;
    timeData: string;
    sumDataLumber: string;
    sumDataClay: string;
    sumDataIron: string;
    sumDataCrop: string;
    sumDataResources: string;
    sumDataCropBalance: string;
    sumDataCP: string;
    sumDataWarehouse: string;
    sumDataGranary: string;
    fromRowData: string;
    toRowData: string;
    mainBuildingLevel: string;
}

const CustomPlusBtn: React.FC<CustomPlusBtnProps> = ({ buildingName, timeData, sumDataLumber, sumDataClay, sumDataIron, sumDataCrop, sumDataResources,
    sumDataCropBalance, sumDataCP, sumDataWarehouse, sumDataGranary, fromRowData, toRowData, mainBuildingLevel }) => {
    const { handleCustomPlusClick } = useContext(BuilderContext);

    const handleClick = () => {
        handleCustomPlusClick(buildingName, timeData, sumDataLumber, sumDataClay, sumDataIron, sumDataCrop, sumDataResources,
            sumDataCropBalance, sumDataCP, sumDataWarehouse, sumDataGranary, fromRowData, toRowData, mainBuildingLevel);
    };
    

    return (
        <button
            className="flex justify-center items-center w-[40px] h-[40px] rounded-full border border-[#A0BE3C] bg-[rgba(130,210,243,0.60)] hover:bg-[rgba(130,210,243,1)]"
            onClick={handleClick}
        >
            <CustomPlusIcon size='40px' />
        </button>
    );
};

export default CustomPlusBtn;
