//BuilderFooter.tsx
import React, { useContext } from 'react';
import BuilderContext from '../Builder/BuilderContext';

const BuilderFooter = () => {
    const { contents } = useContext(BuilderContext);
    const sumTimeData = contents.reduce((totalSeconds, item) => {
        const [hours, minutes, seconds] = item.timeData.split(":").map(Number);
        return totalSeconds + (hours * 3600 + minutes * 60 + seconds);
    }, 0);
    // Преобразование обратно в часы, минуты, секунды
    const hours = Math.floor(sumTimeData / 3600);
    const minutes = Math.floor((sumTimeData % 3600) / 60);
    const seconds = sumTimeData % 60;

    // Вычисление общей суммы sumDataCropBalance
    const formattedTime = [hours, minutes, seconds].map(val => val.toString().padStart(2, '0')).join(":");
    const sumDataCropBalance = contents.reduce((sum, item) => sum + parseFloat(item.sumDataCropBalance || "0"), 0);
    const sumDataCP = contents.reduce((sum, item) => {
        const value = parseFloat(item.sumDataCP);
        return sum + (isNaN(value) ? 0 : value);
    }, 0);
    const sumDataLumber = contents.reduce((sum, item) => sum + parseFloat(item.sumDataLumber || "0"), 0);
    const sumDataClay = contents.reduce((sum, item) => sum + parseFloat(item.sumDataClay || "0"), 0);
    const sumDataIron = contents.reduce((sum, item) => sum + parseFloat(item.sumDataIron || "0"), 0);
    const sumDataCrop = contents.reduce((sum, item) => sum + parseFloat(item.sumDataCrop || "0"), 0);
    const sumDataResources = contents.reduce((sum, item) => sum + parseFloat(item.sumDataResources || "0"), 0);

    return (
        <div className='flex px-2.5 gap-[16px] content-center flex-wrap rounded-b-lg h-[36px] bg-[#A0BE3C66]/40 border-solid border border-[#A0BE3C]'>
            <div className='font-[Cambria] h-[30px] w-[370px] text-xs'></div>
            <div className='font-[Cambria] h-[30px] w-[64px] text-black font-normal text-base leading-normal flex h-5 justify-center items-center text-xs'>{formattedTime}</div>
            <div className='font-[Cambria] h-[30px] w-[30px] text-black font-normal text-base leading-normal flex h-5 justify-center items-center text-xs'>{sumDataCropBalance}</div>
            <div className='font-[Cambria] h-[30px] w-[30px] text-black font-normal text-base leading-normal flex h-5 justify-center items-center text-xs'>{sumDataCP}</div>
            <div className='font-[Cambria] h-[30px] w-[64px] text-black font-normal text-base leading-normal flex h-5 justify-center items-center text-xs'>{sumDataLumber}</div>
            <div className='font-[Cambria] h-[30px] w-[64px] text-black font-normal text-base leading-normal flex h-5 justify-center items-center text-xs'>{sumDataClay}</div>
            <div className='font-[Cambria] h-[30px] w-[64px] text-black font-normal text-base leading-normal flex h-5 justify-center items-center text-xs'>{sumDataIron}</div>
            <div className='font-[Cambria] h-[30px] w-[64px] text-black font-normal text-base leading-normal flex h-5 justify-center items-center text-xs'>{sumDataCrop}</div>
            <div className='font-[Cambria] h-[30px] w-[70px] text-black font-normal text-base leading-normal flex h-5 justify-center items-center text-xs'>{sumDataResources}</div>
            <div className='font-[Cambria] h-[30px] w-[352px] text-xs'></div>
        </div>
    )
};

export default BuilderFooter;
