import React, { useEffect, useState } from 'react';

const Upgrade25faster: React.FC<{
    isActive: boolean,
    onUpgradeChange: (isActive: boolean) => void
}> = ({ isActive, onUpgradeChange }) => {
    const [isChecked, setIsChecked] = useState(isActive);

    useEffect(() => {
        setIsChecked(isActive);
    }, [isActive]);

    const handleCheckboxChange = () => {
        const newCheckedStatus = !isChecked;
        setIsChecked(newCheckedStatus);
        onUpgradeChange(newCheckedStatus); // Обновляем состояние в родительском компоненте
    };
    

    return (
        <label className="inline-flex items-center cursor-pointer rounded-[10px] bg-[#A0BE3C33]/20 p-2 hover:bg-[#A0BE3C33]/40">
            <div className="mr-2 text-gray-700">
                Upgrade 25% faster
            </div>
            <input
                type="checkbox"
                className="form-checkbox h-5 w-5"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
        </label>
    );
};

export default Upgrade25faster;
