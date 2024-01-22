// CtrlIcon.tsx
import React from 'react';

interface CtrlIconProps {
  size?: string; // Размер иконки
  color?: string; // Основной цвет иконки
  className?: string; // Дополнительные классы CSS
}

const CtrlIcon: React.FC<CtrlIconProps> = ({
  size = "32",
  color = "currentColor", // Используйте "currentColor", чтобы цвет можно было наследовать из родительских элементов
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_162_198362)">
        <path d="M2.00326 6.00142C2.55921 6.00142 3.11316 6.2334 3.50912 6.68336L16.002 20.9621L28.4949 6.68336C29.2228 5.85143 30.4847 5.76744 31.3166 6.49537C32.1485 7.22331 32.2325 8.4852 31.5046 9.31712L17.5059 25.3157C17.1259 25.7496 16.5779 25.9976 16 25.9976C15.4221 25.9976 14.8741 25.7476 14.4941 25.3157L0.495395 9.31712C-0.232539 8.4852 -0.148547 7.22331 0.683378 6.49537C1.06334 6.1634 1.5313 6.00142 1.99926 6.00142H2.00326Z" fill="black"/>
</g>
      <defs>
        <clipPath id="clip0_162_198362">
          <rect width="32" height="32" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default CtrlIcon;