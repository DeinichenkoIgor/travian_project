// CustomPlusBtn.tsx

import React, { useContext } from 'react';
import BuilderContext from '../Builder/BuilderContext';
import CustomPlusIcon from '../SVG/Technical/CustomPlusIcon';

interface CustomPlusBtnProps {
    buildingName: string;
}

const CustomPlusBtn: React.FC<CustomPlusBtnProps> = ({ buildingName }) => {
    const { handleCustomPlusClick } = useContext(BuilderContext);

    return (
        <button
            className="flex justify-center items-center w-[40px] h-[40px] rounded-full border border-[#A0BE3C] bg-[rgba(130,210,243,0.60)] hover:bg-[rgba(130,210,243,1)]"
            onClick={() => handleCustomPlusClick(buildingName)}
        >
            <CustomPlusIcon size='40px' />
        </button>
    );
};

export default CustomPlusBtn;