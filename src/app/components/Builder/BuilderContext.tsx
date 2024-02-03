// BuilderContext.js
import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface TableData {
    content: string;
    isVisible: boolean;
    timeData: string; // Добавляем поле для хранения времени
    sumDataLumber: string; // Добавляем поле для хранения суммы данных
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
    comment?: string;
    }
interface BuilderContextType {
    contents: TableData[];
    setContents: (contents: TableData[]) => void;
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
    showGrid: boolean;
    setShowGrid: (show: boolean) => void;
    handleCustomPlusClick: (
        buildingName: string,
        timeData: string,
        sumDataLumber: string,
        sumDataClay: string,
        sumDataIron: string,
        sumDataCrop: string,
        sumDataResources: string,
        sumDataCropBalance: string,
        sumDataCP: string,
        sumDataWarehouse: string,
        sumDataGranary: string,
        fromRowData: string,
        toRowData: string,
        mainBuildingLevel: string
    ) => void;
    handleRemoveTable: (index: number) => void;
    clearAllTables: () => void;
    lastRowTimeData: string;
    setLastRowTimeData: (data: string) => void;
    lastRowSumDataLumber: string;
    setLastRowSumDataLumber: (data: string) => void;
    lastRowSumDataClay: string;
    setLastRowSumDataClay: (data: string) => void;
    lastRowSumDataIron: string;
    setLastRowSumDataIron: (data: string) => void;
    lastRowSumDataCrop: string;
    setLastRowSumDataCrop: (data: string) => void;
    lastRowSumDataResources: string;
    setLastRowSumDataResources: (data: string) => void;
    lastRowSumDataCropBalance: string;
    setLastRowSumDataCropBalance: (data: string) => void;
    lastRowSumDataCP: string;
    setLastRowSumDataCP: (data: string) => void;
    lastRowSumDataWarehouse: string;
    setLastRowSumDataWarehouse: (data: string) => void;
    lastRowSumDataGranary: string;
    setLastRowSumDataGranary: (data: string) => void;
    fromRowData?: never;
    toRowData?: never;
    selectedMainBuildingLevel: string; // Добавлено новое свойство
    setSelectedMainBuildingLevel: (level: string) => void; 
}
const BuilderContext = createContext<BuilderContextType>({
    contents: [],
    setContents: () => {},
    isModalOpen: false,
    setIsModalOpen: () => {},
    showGrid: false,
    setShowGrid: () => {},
    handleCustomPlusClick: () => {},
    handleRemoveTable: () => {},
    clearAllTables: () => {},
    lastRowTimeData: "",
    setLastRowTimeData: () => {},
    lastRowSumDataLumber: "",
    setLastRowSumDataLumber: () => {},
    lastRowSumDataClay: "",
    setLastRowSumDataClay: () => {},
    lastRowSumDataIron: "",
    setLastRowSumDataIron: () => {},
    lastRowSumDataCrop: "",
    setLastRowSumDataCrop: () => {},
    lastRowSumDataResources: "",
    setLastRowSumDataResources: () => {},
    lastRowSumDataCropBalance: "",
    setLastRowSumDataCropBalance: () => {},
    lastRowSumDataCP: "",
    setLastRowSumDataCP: () => {},
    lastRowSumDataWarehouse: "",
    setLastRowSumDataWarehouse: () => {},
    lastRowSumDataGranary: "",
    setLastRowSumDataGranary: () => {},
    fromRowData: undefined,
    toRowData: undefined,
    selectedMainBuildingLevel: "1", // возможно, вы также хотите добавить это здесь
    setSelectedMainBuildingLevel: () => {},
});

// Определение типа BuilderProviderProps
interface BuilderProviderProps {
    children: ReactNode;
}
export const BuilderProvider: React.FC<BuilderProviderProps> = ({ children }) => {
    const [contents, setContents] = useState<TableData[]>(JSON.parse(localStorage.getItem('contents') || '[]'));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showGrid, setShowGrid] = useState(localStorage.getItem('showGrid') === 'true');
    const clearAllTables = () => {
        setContents([]); // Очистка всех таблиц
    };
    const [lastRowTimeData, setLastRowTimeData] = useState("");
    const [lastRowSumDataLumber, setLastRowSumDataLumber] = useState("");
    const [lastRowSumDataClay, setLastRowSumDataClay] = useState("");
    const [lastRowSumDataIron, setLastRowSumDataIron] = useState("");
    const [lastRowSumDataCrop, setLastRowSumDataCrop] = useState("");
    const [lastRowSumDataResources, setLastRowSumDataResources] = useState("");
    const [lastRowSumDataCropBalance, setLastRowSumDataCropBalance] = useState("");
    const [lastRowSumDataCP, setLastRowSumDataCP] = useState("");
    const [lastRowSumDataWarehouse, setLastRowSumDataWarehouse] = useState("");
    const [lastRowSumDataGranary, setLastRowSumDataGranary] = useState("");
    // const [fromRowData, setFromRowData] = useState("");
    // const [toRowData, setToRowData] = useState("");
    const [selectedMainBuildingLevel, setSelectedMainBuildingLevel] = useState("1");

useEffect(() => {
    const storedLevel = localStorage.getItem("selectedMainBuildingLevel");
    if (storedLevel) {
        setSelectedMainBuildingLevel(storedLevel);
    }
}, []);


    useEffect(() => {
        localStorage.setItem('contents', JSON.stringify(contents));
    }, [contents]);

    useEffect(() => {
        localStorage.setItem('showGrid', showGrid.toString());
    }, [showGrid]);

    const handleCustomPlusClick = (buildingName: string, timeData: string, sumDataLumber: string, sumDataClay: string, sumDataIron: string, sumDataCrop: string, sumDataResources: string, sumDataCropBalance: string, sumDataCP: string, sumDataWarehouse: string, sumDataGranary: string, fromRowData: string, toRowData: string, mainBuildingLevel: string) => {
        setContents(prevContents => [...prevContents, {
            content: buildingName,
            isVisible: true,
            timeData: lastRowTimeData,
            sumDataLumber: lastRowSumDataLumber,
            sumDataClay: lastRowSumDataClay,
            sumDataIron: lastRowSumDataIron,
            sumDataCrop: lastRowSumDataCrop,
            sumDataResources: lastRowSumDataResources,
            sumDataCropBalance: lastRowSumDataCropBalance,
            sumDataCP: lastRowSumDataCP,
            sumDataWarehouse: lastRowSumDataWarehouse,
            sumDataGranary: lastRowSumDataGranary,
            fromRowData: fromRowData,
            toRowData: toRowData,
            mainBuildingLevel: selectedMainBuildingLevel
        }]);
        setIsModalOpen(false);
      };

    const handleRemoveTable = (index: number) => {
        setContents(prevContents => prevContents.filter((_, i) => i !== index));
    };

    return (
        <BuilderContext.Provider value={{
            contents,
            setContents,
            handleRemoveTable,
            isModalOpen,
            setIsModalOpen,
            showGrid,
            setShowGrid,
            handleCustomPlusClick,
            clearAllTables,
            lastRowTimeData,
            setLastRowTimeData,
            lastRowSumDataLumber,
            setLastRowSumDataLumber,
            lastRowSumDataClay,
            lastRowSumDataIron,
            lastRowSumDataCrop,
            lastRowSumDataResources,
            lastRowSumDataCropBalance,
            lastRowSumDataCP,
            lastRowSumDataWarehouse,
            lastRowSumDataGranary,
            setLastRowSumDataClay,
            setLastRowSumDataIron,
            setLastRowSumDataCrop,
            setLastRowSumDataResources,
            setLastRowSumDataCropBalance,
            setLastRowSumDataCP,
            setLastRowSumDataWarehouse,
            setLastRowSumDataGranary,
            selectedMainBuildingLevel,
            setSelectedMainBuildingLevel,            
        }}>
            {children}
        </BuilderContext.Provider>
    );
};

export default BuilderContext;
