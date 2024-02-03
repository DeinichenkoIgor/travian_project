//GWGGBtn.tsx

import React, { useState } from 'react';
import Warehouse from '../SVG/Building/WarehouseIcon';
import GreatWarehouseIcon from '../SVG/Building/GreatWarehouseIcon';

const GWGGBtn: React.FC<{ onStorageTypeChange: (type: 'Small' | 'Big') => void }> = ({ onStorageTypeChange }) => {
    const [icon, setIcon] = useState<'warehouse' | 'GreatWarehouse'>('warehouse');
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleIcon = () => {
        setIsAnimating(true);

        // Определение нового типа и иконки
        const newType = icon === 'warehouse' ? 'Big' : 'Small';
        const newIcon = icon === 'warehouse' ? 'GreatWarehouse' : 'warehouse';

        // Обновляем иконку и тип хранилища
        setIcon(newIcon);
        onStorageTypeChange(newType);

        // Сброс анимации
        setTimeout(() => {
            setIsAnimating(false);
        }, 300);
    };
      

    return (
        <button onClick={toggleIcon} className={`p-2 rounded-[10px] bg-[#A0BE3C33]/20 focus:outline-none focus:ring hover:bg-[#A0BE3C33]/40 transition-transform duration-300 ${isAnimating ? 'scale-125' : ''}`}>
            {icon === 'warehouse' ? <Warehouse size="24"/> : <GreatWarehouseIcon size="24"/>}
        </button>
    );
};

export default GWGGBtn;
