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
}

const FiltersTable: React.FC<FiltersTableProps> = ({
    onServerSpeedChange, 
    onMainBuildingLevelChange, 
    onUpgradeChange, 
    isUpgradeActive,
    buildingName
}) => {
    return (
        <div className='flex items-center justify-between'>
            <div className="flex gap-[20px] p-4"> 
                <ServerSpeedBtn onSelect={onServerSpeedChange} />
                <MainBuildingBtn onSelect={onMainBuildingLevelChange} />
                <GWGGBtn />
                <Upgrade25faster isActive={isUpgradeActive} onUpgradeChange={onUpgradeChange} />
            </div>
            <div>
                <CustomPlusBtn buildingName={buildingName} />
            </div>
        </div>
    );
};

export default FiltersTable;
