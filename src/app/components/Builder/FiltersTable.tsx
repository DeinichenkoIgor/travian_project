//FiltersTable.tsx
import React from 'react';
import ServerSpeedBtn from '../BtnMini/ServerSpeedBtn';
import MainBuildingBtn from '../BtnMini/MainBuildingBtn';
import GWGGBtn from '../BtnMini/GWGGBtn';
import Upgrade25faster from '../BtnMini/Upgrade25faster';
import CustomPlusBtn from '../BtnMini/CustomPlusBtn';

interface FiltersTableProps {
    onServerSpeedChange: (speed: string) => void;
    onMainBuildingLevelChange: (level: string) => void;
    onUpgradeChange: (isUpgraded: boolean) => void;
    isUpgradeActive: boolean;
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
    setStorageType: (type: 'Small' | 'Big') => void;
}

const FiltersTable: React.FC<FiltersTableProps> = ({
    onServerSpeedChange, 
    onMainBuildingLevelChange, 
    onUpgradeChange, 
    isUpgradeActive,
    buildingName,
    timeData,
    sumDataLumber,
    sumDataClay, 
    sumDataIron, 
    sumDataCrop, 
    sumDataResources,
    sumDataCropBalance, 
    sumDataCP, 
    sumDataWarehouse, 
    sumDataGranary,
    fromRowData,
    toRowData,
    mainBuildingLevel,
    setStorageType,
}) => {
    return (
        <div className='flex items-center justify-between'>
            <div className="flex gap-[20px] p-4"> 
                <ServerSpeedBtn onSelect={onServerSpeedChange} />
                <MainBuildingBtn onSelect={onMainBuildingLevelChange} />
                <GWGGBtn onStorageTypeChange={setStorageType} />

                <Upgrade25faster isActive={isUpgradeActive} onUpgradeChange={onUpgradeChange} />
            </div>
            <div>
            <CustomPlusBtn
                buildingName={buildingName}
                timeData={timeData}
                sumDataLumber={sumDataLumber}
                sumDataClay={sumDataClay}
                sumDataIron={sumDataIron}
                sumDataCrop={sumDataCrop}
                sumDataResources={sumDataResources}
                sumDataCropBalance={sumDataCropBalance}
                sumDataCP={sumDataCP}
                sumDataWarehouse={sumDataWarehouse}
                sumDataGranary={sumDataGranary}
                fromRowData={fromRowData}
                toRowData={toRowData}
                mainBuildingLevel={mainBuildingLevel}
    />
            </div>
        </div>
    );
};

export default FiltersTable;
