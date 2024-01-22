// CtrlIcon.tsx
import React from 'react';

interface CustomPlusIconProps {
  size?: string; // Размер иконки
  color?: string; // Основной цвет иконки
  className?: string; // Дополнительные классы CSS
}

const CustomPlusIcon: React.FC<CustomPlusIconProps> = ({
  size = "28",
  color = "currentColor", // Используйте "currentColor", чтобы цвет можно было наследовать из родительских элементов
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >

        <g clipPath="url(#clip0_357_16414)">
        <path d="M23.375 11.5H16.5V4.625C16.5 4.28 16.22 4 15.875 4H12.125C11.78 4 11.5 4.28 11.5 4.625V11.5H4.625C4.28 11.5 4 11.78 4 12.125V15.875C4 16.22 4.28 16.5 4.625 16.5H11.5V23.375C11.5 23.72 11.78 24 12.125 24H15.875C16.22 24 16.5 23.72 16.5 23.375V16.5H23.375C23.72 16.5 24 16.22 24 15.875V12.125C24 11.78 23.72 11.5 23.375 11.5Z" fill="#A0BE3C"/>
        </g>
        <defs>
        <clipPath id="clip0_357_16414">
        <rect width="20" height="20" fill="white" transform="translate(4 4)"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default CustomPlusIcon;