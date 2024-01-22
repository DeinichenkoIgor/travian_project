// BuilderContext.js
import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface TableData {
    content: string;
    isVisible: boolean;
}

interface BuilderContextType {
    contents: TableData[];
    setContents: (contents: TableData[]) => void;
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
    showGrid: boolean;
    setShowGrid: (show: boolean) => void;
    handleCustomPlusClick: (buildingName: string) => void;
    handleRemoveTable: (index: number) => void;
    clearAllTables: () => void;
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

    useEffect(() => {
        localStorage.setItem('contents', JSON.stringify(contents));
    }, [contents]);

    useEffect(() => {
        localStorage.setItem('showGrid', showGrid.toString());
    }, [showGrid]);

    const handleCustomPlusClick = (buildingName: string) => {
        setContents([...contents, { content: buildingName, isVisible: true }]);
        setIsModalOpen(false);
    };

    const handleRemoveTable = (index: number) => {
        setContents(contents.filter((_, i) => i !== index));
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
        }}>
            {children}
        </BuilderContext.Provider>
    );
};

export default BuilderContext;
