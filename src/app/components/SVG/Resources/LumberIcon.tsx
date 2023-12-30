// LumberIcon.tsx
import React from 'react';

interface LumberIconProps {
  size?: string; // Размер иконки
  color?: string; // Основной цвет иконки
}

const LumberIcon: React.FC<LumberIconProps> = ({
  size = "20px",
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
      <g clipPath="url(#clip0_173_8789)">
        <path
          d="M12.1739 5.33331L15.2174 5.77776V7.99998L16.9565 8.44442L17.3913 11.5555L10.4348 15.1111L8.69566 16L6.52174 15.5555L6.08696 13.7778H5.2174L4.78261 15.1111L1.73913 14.6666L1.30435 12H2.17392V11.1111L4.34783 10.6666L4.78261 8.44442L10 6.2222L12.1739 5.33331Z"
          fill="#7D4819"
        />
        <path d="M15.6522 8L16.9565 8.44444L17.3913 11.5556L10.4348 15.1111L8.69566 16L6.52174 15.5556V12.8889L8.69566 12.4444L9.56522 12.8889V11.5556L14.7826 8.88889H15.6522V8Z" fill="#935B25"/>
        <path d="M12.1739 5.33331H13.913L14.3478 7.11109L10.8696 9.33331L8.69565 10.2222V9.33331H7.82609L7.3913 11.5555H5.21739L4.78261 11.1111V8.44442L10 6.2222L12.1739 5.33331Z" fill="#81552F"/>
        <path d="M13.0435 5.77777L14.3478 6.22222L13.4783 7.99999L9.56521 10.2222H8.69565V9.33333H7.82608V7.99999L12.6087 6.22222L13.0435 5.77777Z" fill="#CF8228"/>
        <path d="M2.6087 11.5555L5.2174 12V14.6667L4.78261 15.1111L1.73913 14.6667L1.30435 12L2.6087 11.5555Z" fill="#AF8656"/>
        <path d="M14.7826 8.88892H16.087L16.5217 10.2222L13.0435 12L11.7391 12.8889H9.56522V11.5556L14.7826 8.88892Z" fill="#D2842C"/>
        <path d="M13.913 5.77777H15.2174L14.3478 8.88888L9.99999 11.1111H8.26086L8.69565 9.33333V10.2222L13.913 7.1111V5.77777Z" fill="#AB6725"/>
        <path d="M15.6522 8L16.9565 8.44444L17.3913 11.5556L13.0435 13.7778L11.3044 13.3333L14.7826 11.5556H15.6522L16.087 9.77778L15.6522 8Z" fill="#8F6343"/>
        <path d="M5.21739 8.88892H7.3913L7.82609 11.1111L7.3913 11.5556H5.21739L4.78261 9.33336L5.21739 8.88892Z" fill="#D7A158"/>
        <path d="M7.39131 12.4445L9.56522 12.8889L9.13044 15.1111H6.95653L6.52174 12.8889L7.39131 12.4445Z" fill="#D7A359"/>
        <path d="M3.91305 8L5.2174 8.44444L4.34783 10.6667L2.17392 11.1111L1.73914 12L2.17392 9.77778H3.47827L3.91305 8Z" fill="#E5DDD0"/>
        <path d="M11.3043 6.66669H13.4783L11.7391 8.00002L8.26086 8.88891V8.00002L11.3043 6.66669Z" fill="#EBA63F"/>
        <path d="M12.1739 10.2222L13.0435 10.6667L11.7391 12H10.4348V12.8889H9.56522V11.5556L12.1739 10.2222Z" fill="#D78D38"/>
        <path d="M2.6087 11.5555L3.91305 12.4444L3.47827 13.3333L4.34783 13.7778L2.6087 14.2222L2.17392 12L2.6087 11.5555Z" fill="#C9954C"/>

      </g>
      <defs>
        <clipPath id="clip0_173_8789">
          <rect width="20" height="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default LumberIcon;
