// VillageCenterIcon.tsx
import React from 'react';

interface VillageCenterIconProps {
  size?: string; // Размер иконки
  color?: string; // Основной цвет иконки
  className?: string; // Дополнительные классы CSS
  onClick?: () => void;
}

const VillageCenterIcon: React.FC<VillageCenterIconProps> = ({
  size = "20",
  color = "currentColor", // Используйте "currentColor", чтобы цвет можно было наследовать из родительских элементов
  className = "",
  onClick,
}) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_151_4) ">
        <path d="M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z"></path>
        </g>
      <defs>
        <clipPath id="clip0_162_198312">
          <rect width="32" height="32" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default VillageCenterIcon;