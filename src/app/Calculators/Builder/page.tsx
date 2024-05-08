// page.tsx

"use client";
import React, { useContext } from 'react';
import { BuilderBtn } from '../../components/Builder/BuilderBtn';
import BuilderBasement from '../../components/Builder/BuilderBasement';
import BuilderFooter from '../../components/Builder/BuilderFooter';
import Icon from '../../components/SVG/Icon';
import BuilderContext, { BuilderProvider } from '../../components/Builder/BuilderContext';

export default function Builder() {
    return (
        <BuilderProvider>
            <BuilderContent />
        </BuilderProvider>
    );
}
function BuilderContent() {
    const { clearAllTables } = useContext(BuilderContext);

    return (
        
        <div className='inline-flex flex-col items-start gap-4.5 text-sm font-[Cambria] mx-[52px] my-[30px]'>
            <div className='flex items-start gap-[420px]'>
                <BuilderBtn />
                <div className='flex flex-col gap-2'>
                    <h1 className='flex p-2.5 justify-center items-center gap-2.5 text-black font-kameron text-2xl font-bold leading-normal tracking-widest uppercase'>
                        Калькулятор строителя
                    </h1>
                    <p>Калькулятор строителя будет полезен как в планировании строительства поселения, так и в расчете цены, времени или других параметров. Кнопки скорость сервера и уровень главного здания не синхронизированы с уже выбранными параметрами предыдущих зданий, что делает калькулятор более гибким и даёт возможность использовать его в разных назначениях. Этот калькулятор будет развиваться дальше</p>
                </div>
            </div>
            <div className='flex items-start flex-col p-2.5'>
                <div className='flex px-2.5 gap-[16px] content-center flex-wrap rounded-t-lg h-[36px] bg-[#A0BE3C66]/40 border-solid border-t border-x border-[#A0BE3C]'>
                    <div className='flex-wrap h-[30px] w-[16px] flex items-center justify-center' onClick={clearAllTables}>
                        <Icon.Technical.Minus size='100%' color='Red' />
                    </div>
                    <div className='h-[30px] w-[200px] text-black font-[Cambria] font-semibold text-base leading-normal flex h-5 justify-center items-center'>Название</div>
                    <div className='h-[30px] w-[30px]'><Icon.Building.MainBuilding size='100%'/></div>
                    <div className='h-[30px] w-[30px] flex-wrap flex items-center justify-center'><Icon.Technical.LvlDef size='80%'/></div>
                    <div className='h-[30px] w-[30px] flex-wrap flex items-center justify-center'><Icon.Technical.LvlApp size='80%'/></div>
                    <div className='h-[30px] w-[64px] flex-wrap flex items-center justify-center '><Icon.Other.Time size='70%'/></div>
                    <div className='h-[30px] w-[30px]'><Icon.Resources.CropBalance size='100%'/></div>
                    <div className='h-[30px] w-[30px]  text-black font-[Cambria] font-semibold text-base leading-normal flex h-5 justify-center items-center'>ЕК</div>
                    <div className='h-[30px] w-[64px]'><Icon.Resources.Lumber size='100%'/></div>
                    <div className='h-[30px] w-[64px]'><Icon.Resources.Clay size='100%'/></div>
                    <div className='h-[30px] w-[64px]'><Icon.Resources.Iron size='100%'/></div>
                    <div className='h-[30px] w-[64px]'><Icon.Resources.Crop size='100%'/></div>
                    <div className='h-[30px] w-[70px]'><Icon.Resources.Resources size='100%'/></div>
                    <div className='h-[30px] w-[60px]'><Icon.Building.Warehouse size='100%'/></div>
                    <div className='h-[30px] w-[60px]'><Icon.Building.Granary size='100%'/></div>
                    <div className='h-[30px] w-[200px]'></div>
                </div>
            <div>
                <BuilderBasement />
            </div>
            <div>
                <BuilderFooter />
            </div>
        </div>
    </div>
    );
}