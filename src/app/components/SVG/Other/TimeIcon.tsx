// TimeIcon.tsx
import React from 'react';

interface TimeIconProps {
  size?: string; // Размер иконки
  color?: string; // Основной цвет иконки
}

const TimeIcon: React.FC<TimeIconProps> = ({
  size = "20",
  color = "currentColor", // Используйте "currentColor", чтобы цвет можно было наследовать из родительских элементов
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_173_8782)">
        <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C14.418 18 18 14.418 18 10C18 5.582 14.418 2 10 2C5.582 2 2 5.582 2 10C2 14.418 5.582 18 10 18ZM9 10.41V4H11V9.59L14.95 13.54L13.54 14.95L9 10.41Z" fill="black"/>
        </g>
      <defs>
        <clipPath id="clip0_173_8782">
          <rect width="20" height="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default TimeIcon;