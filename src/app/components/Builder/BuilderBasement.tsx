//BuilderBasement.tsx
import React, { useContext } from 'react';
import BuilderContext from '../Builder/BuilderContext';
import MinusIcon from '../SVG/Technical/MinusIcon';

const BuilderBasement = () => {
    const { contents, handleRemoveTable, setContents } = useContext(BuilderContext);

    const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>, tableIndex: number) => {
        const newContents = [...contents];
        newContents[tableIndex] = {
            ...newContents[tableIndex],
            comment: e.target.value.slice(0, 20) // Ограничение длины до 20 символов
        };
        setContents(newContents);
    };
       
    const cellWidths = [
        "w-[16px]", "w-[200px]", "w-[30px]", "w-[30px]", "w-[30px]",
        "w-[64px]", "w-[30px]", "w-[30px]", "w-[64px]", "w-[64px]",
        "w-[64px]", "w-[64px]", "w-[70px]", "w-[60px]", "w-[60px]", "w-[200px]"
    ];

    const tables = contents.map((tableData, tableIndex) => {
        const gridCells = cellWidths.map((widthClass, index) => {
            const baseClasses = "h-[26px] flex justify-center items-center";
            //const backgroundColorClass = index % 2 === 0 ? "bg-slate-300" : "bg-slate-200";

            return (
                <div key={`${tableIndex}-${index}`} className={`${baseClasses} ${widthClass} `}>
                    {index === 0 ? <MinusIcon size='20px' onClick={() => handleRemoveTable(tableIndex)} /> : 
                    index === 1 ? tableData.content : 
                    index === 2 ? tableData.mainBuildingLevel :
                    index === 3 ? (Number(tableData.fromRowData) - 1).toString() :
                    index === 4 ? (Number(tableData.toRowData)).toString() :
                    index === 5 ? tableData.timeData :
                    index === 6 ? tableData.sumDataCropBalance :
                    index === 7 ? tableData.sumDataCP :
                    index === 8 ? tableData.sumDataLumber :
                    index === 9 ? tableData.sumDataClay :
                    index === 10 ? tableData.sumDataIron :
                    index === 11 ? tableData.sumDataCrop :
                    index === 12 ? tableData.sumDataResources :
                    index === 13 ? tableData.sumDataWarehouse :
                    index === 14 ? tableData.sumDataGranary : 
                    index === 15 ? <input
                    type="text"
                    value={tableData.comment || ""}
                    onChange={(e) => handleCommentChange(e, tableIndex)}
                    className="h-[26px] bg-[#A0BE3C66]/40 w-[200px] border-none rounded placeholder:italic placeholder:text-slate-400 focus:outline-none focus:ring-[#A0BE3C] focus:ring-1 sm:text-xs pl-[4px]"
                    placeholder=" Комментарий"
                /> : ""
                    }
                </div>
            );
        });

        return (
            <div key={tableIndex} className="flex px-2.5 gap-[16px] flex-wrap content-center h-[34px] bg-[#A0BE3C66]/20 border-solid border-t border-x border-[#A0BE3C]">
                {gridCells}
            </div>
        );
    });

    return <div>{tables}</div>;
};

export default BuilderBasement;
