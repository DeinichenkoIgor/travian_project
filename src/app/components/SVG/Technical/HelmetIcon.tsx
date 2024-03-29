// HelmetIcon.tsx
import React from 'react';

interface HelmetIconProps {
  color?: string; // Основной цвет иконки
  width?: string; // Размер иконки
  height?: string; // Размер иконки
}

const HelmetIcon: React.FC<HelmetIconProps> = ({
  width = "28",
  height = "30",
  color = "currentColor", // Используйте "currentColor", чтобы цвет можно было наследовать из родительских элементов
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 30"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_42_165919)">
            <ellipse cx="10.9006" cy="13.6363" rx="10.9006" ry="13.6363" transform="matrix(1 1.10663e-05 -8.73026e-06 1 3.02805 2.72711)" fill="black"/>
            <ellipse cx="9.81052" cy="12.2727" rx="9.81052" ry="12.2727" transform="matrix(1 1.2296e-05 -7.8572e-06 1 4.11813 4.09076)" fill="white"/>
            <rect x="11.4286" width="5" height="19.2857" rx="2.5" fill="black"/>
            <rect x="3.57144" y="12.8571" width="20.7143" height="2.85714" fill="black"/>
            <path d="M3.13176 0.502924L3.97861 2.76169L5.59321 4.5595L8.54871 5.84161L5.2567 9.37657L3.49019 7.98586L2.63413 5.7016L2.53663 2.93089L3.13176 0.502924Z" fill="black"/>
            <path d="M24.7254 0.502924L23.8785 2.76169L22.2639 4.5595L19.3084 5.84161L22.6004 9.37657L24.367 7.98586L25.223 5.7016L25.3205 2.93089L24.7254 0.502924Z" fill="black"/>
        </g>
      <defs>
        <clipPath id="clip0_42_165919">
          <rect width="28" height="30" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default HelmetIcon;