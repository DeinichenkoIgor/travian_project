//BuilderBasement.tsx
import React, { useContext } from 'react';
import BuilderContext from '../Builder/BuilderContext';
import MinusIcon from '../SVG/Technical/MinusIcon';

const BuilderBasement = () => {
    const { contents, handleRemoveTable } = useContext(BuilderContext);

    if (contents.length === 0) return null;

    const cellWidths = [
        "w-[20px]", "w-[200px]", "w-[30px]", "w-[30px]", "w-[30px]",
        "w-[52px]", "w-[30px]", "w-[30px]", "w-[52px]", "w-[52px]",
        "w-[52px]", "w-[52px]", "w-[60px]", "w-[30px]", "w-[30px]"
    ];

    const tables = contents.map((tableData, tableIndex) => {
        const gridCells = cellWidths.map((widthClass, index) => {
            const baseClasses = "h-[30px] flex justify-center items-center";
            const backgroundColorClass = index % 2 === 0 ? "bg-slate-300" : "bg-slate-200";

            return (
                <div key={`${tableIndex}-${index}`} className={`${baseClasses} ${widthClass} ${backgroundColorClass}`}>
                    {index === 0 ? 
                        <MinusIcon size='20px' onClick={() => handleRemoveTable(tableIndex)} /> : 
                        (index === 1 ? tableData.content : "")
                    }
                </div>
            );
        });

        return (
            <div key={tableIndex} className="flex px-2.5 gap-[16px] flex-wrap content-center h-[50px] bg-[#A0BE3C66]">
                {gridCells}
            </div>
        );
    });

    return <div>{tables}</div>;
};

export default BuilderBasement;
