// MenuIcon.tsx
import React from 'react';

interface MenuIconProps {
  size?: string; // Размер иконки
  color?: string; // Основной цвет иконки
}

const MenuIcon: React.FC<MenuIconProps> = ({
  size = "50",
  color = "currentColor", // Используйте "currentColor", чтобы цвет можно было наследовать из родительских элементов
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_262_198391)">
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/>        </g>
      <defs>
        <clipPath id="clip0_262_198391">
          <rect width="50" height="50" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default MenuIcon;