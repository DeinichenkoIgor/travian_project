// NumberComponent.tsx
import React from 'react';

export interface NumberComponentProps {
    number: number | string; // Теперь принимает и строку, и число
  }

const NumberComponent: React.FC<NumberComponentProps> = ({ number }) => {
    
    return <span>{number}</span>; // или другой JSX для стилизации числа
};

export default NumberComponent;
