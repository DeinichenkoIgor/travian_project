import Link from "next/link";

import React, { useState } from 'react';

const BuilderBtn: React.FC = () => {
    // Состояния для отображения box-btn1 и box-btn3
    const [isHovered, setIsHovered] = useState({ btn1: false, btn3: false });
    const [isHovered2, setIsHovered2] = useState({ btn2: false, btn4: false });
    
    // Состояние для изменения цвета фона colom_l_background
    const [colomLBackground, setColomLBackground] = useState<string>("bg-white");
    // Состояние для изменения цвета фона colom_r_background
    const [colomRBackground, setColomRBackground] = useState<string>("bg-white");

    // Функции для управления состояниями при наведении и уходе с btn_1 и btn_3
    const handleMouseEnterBtn1 = () => {
        setIsHovered({ btn1: true, btn3: false });
        setColomLBackground("bg-[#F9E29D]");
    };

    const handleMouseLeaveBtn1 = () => {
        setIsHovered({ ...isHovered, btn1: false });
        if (!isHovered.btn3) {
            setColomLBackground("bg-white");
        }
    };

    const handleMouseEnterBtn3 = () => {
        setIsHovered({ btn1: false, btn3: true });
        setColomLBackground("bg-[#F59C07]");
    };

    const handleMouseLeaveBtn3 = () => {
        setIsHovered({ ...isHovered, btn3: false });
        if (!isHovered.btn1) {
            setColomLBackground("bg-white");
        }
    };

    // Функции для управления состояниями при наведении и уходе с btn_2 и btn_4
    const handleMouseEnterBtn2 = () => {
        setIsHovered2({ btn2: true, btn4: false });
        setColomRBackground("bg-[#A0BE3C]");
    };

    const handleMouseLeaveBtn2 = () => {
        setIsHovered2({ ...isHovered2, btn2: false });
        if (!isHovered2.btn4) {
            setColomRBackground("bg-white");
        }
    };

    const handleMouseEnterBtn4 = () => {
        setIsHovered2({ btn2: false, btn4: true });
        setColomRBackground("bg-[#00B0F9]");
    };

    const handleMouseLeaveBtn4 = () => {
        setIsHovered2({ ...isHovered2, btn4: false });
        if (!isHovered2.btn2) {
            setColomRBackground("bg-white");
        }
    };

    return (
    <div>
        
        <div className="btn_cent relative flex items-center ml-[400px] z-10">
                <div className="btn-igor relative flex rounded-[50%] w-[140px] h-[140px]">
                    <div className={`${colomLBackground} relative w-[70px] h-[140px]`}>
                        <div className="colom_l relative z-[1]">
                            {/* Условное отображение box-btn1 */}
                            {isHovered.btn1 && (
                                <div className="box-btn1 absolute w-[400px] h-[140px] bg-[#F9E29D] -left-[400px] top-0 rounded-l-[10px] p-[8px]"
                                    onMouseEnter={handleMouseEnterBtn1}
                                    onMouseLeave={handleMouseLeaveBtn1}>
                                    <div className="grid grid-rows-5 grid-flow-col gap-x-2.5 justify-content-start">
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Лесопильный завод</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Кирпичный завод</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Чугунолитейный завод</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Мукомольная мельница</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Пекарня</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Лесопилка</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Глиняный карьер</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Железный рудник</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Ферма</Link>
                                    </div>    
                                </div>
                            )}
                            <div className={`btn_1 w-[70px] h-[70px] rounded-tl-[100%] bg-[#F9E29D] border-solid border-[1px] border-[#FFF] ${isHovered.btn1 ? 'scale-[1.2]' : ''}`} 
                                onMouseEnter={handleMouseEnterBtn1}
                                onMouseLeave={handleMouseLeaveBtn1}>
                                    <span className="flex
                                        justify-center 
                                        items-center 
                                        h-[100%] 
                                        -rotate-45

                                        text-black
                                        font-family: Kameron
                                        text-sm
                                        not-italic
                                        font-normal
                                        leading-normal
                                        ">
                                        Ресурсы
                                    </span>
                            </div>

                            {/* Условное отображение box-btn3 */}
                            {isHovered.btn3 && (
                                <div className="box-btn3 absolute w-[400px] h-[140px] bg-[#F59C07] -left-[400px] top-0 rounded-l-[10px] p-[8px]"
                                    onMouseEnter={handleMouseEnterBtn3}
                                    onMouseLeave={handleMouseLeaveBtn3}>
                                    <div className="grid grid-rows-4 grid-flow-col gap-x-2.5 justify-content-start">
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Большой склад</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Большой амбар</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Дом полководца</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Водопровод</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Водопой</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Пивоварня</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Капканщик</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Чудо Света</Link>
                                    </div>
                                </div>
                            )}

                            <div className={`btn_3 w-[70px] h-[70px] bg-[#F59C07] rounded-bl-[100%] border-solid border-[1px] border-[#FFF] ${isHovered.btn3 ? 'scale-[1.2]' : ''}`}
                                onMouseEnter={handleMouseEnterBtn3}
                                onMouseLeave={handleMouseLeaveBtn3}>
                                    <span className="flex 
                                        justify-center 
                                        items-center 
                                        h-[100%] 
                                        rotate-45
                                        
                                        text-black
                                        font-family: Kameron
                                        text-sm
                                        not-italic
                                        font-normal
                                        leading-normal">
                                        Особые
                                    </span>
                            </div>
                        </div>
                    </div>
                <div className={`${colomRBackground} relative w-[70px] h-[140px]`}>
                    <div className="colom_r relative z-[1]">
                    {/* Условное отображение box-btn2 */}
                    {isHovered2.btn2 && (
                    <div className="box-btn2 absolute w-[400px] h-[140px] bg-[#A0BE3C] left-[70px] top-0 rounded-r-[10px] p-[8px]"
                        onMouseEnter={handleMouseEnterBtn2}
                        onMouseLeave={handleMouseLeaveBtn2}>
                                    <div className="grid grid-rows-5 grid-flow-col gap-x-2.5">
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Пункт сбора</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Таверна</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Академия</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Кузница</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Арена</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Казарма</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Конюшня</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Мастерская</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Госпиталь</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Стены</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Большая казарма</Link>
                                        <Link href={""} className="hover:bg-white/40 rounded px-[4px]">Большая конюшня</Link>
                                        
                                    </div>
                                </div>
                            )}
                        <div className={`btn_2 w-[70px] h-[70px] bg-[#A0BE3C] rounded-tr-[100%] border-solid border-[1px] border-[#FFF] ${isHovered2.btn2 ? 'scale-[1.2]' : ''}`}
                            onMouseEnter={handleMouseEnterBtn2}
                            onMouseLeave={handleMouseLeaveBtn2}>
                                <span  className="flex 
                                    justify-center 
                                    items-center 
                                    h-[100%] 
                                    rotate-45
                                    
                                    text-black
                                    font-family: Kameron
                                    text-sm
                                    not-italic
                                    font-normal
                                    leading-normal">
                                    Военные
                                </span>
                        </div>
                        {/* Условное отображение box-btn2 */}
                    {isHovered2.btn4 && (
                    <div className="box-btn4 absolute w-[400px] h-[140px] bg-[#00B0F9] left-[70px] top-0 rounded-r-[10px] p-[8px]"
                        onMouseEnter={handleMouseEnterBtn4}
                        onMouseLeave={handleMouseLeaveBtn4}>
                                    <div className="grid grid-rows-5 grid-flow-col gap-x-2.5 justify-content-end">
                                        <Link href={""} className="hover:bg-white/70 rounded px-[4px]">Склад</Link>
                                        <Link href={""} className="hover:bg-white/70 rounded px-[4px]">Амбар</Link>
                                        <Link href={""} className="hover:bg-white/70 rounded px-[4px]">Рынок</Link>
                                        <Link href={""} className="hover:bg-white/70 rounded px-[4px]">Посольство</Link>
                                        <Link href={""} className="hover:bg-white/70 rounded px-[4px]">Тайник</Link>
                                        <Link href={""} className="hover:bg-white/70 rounded px-[4px]">Ратуша</Link>
                                        <Link href={""} className="hover:bg-white/70 rounded px-[4px]">Главное здание</Link>
                                        <Link href={""} className="hover:bg-white/70 rounded px-[4px]">Резиденция</Link>
                                        <Link href={""} className="hover:bg-white/70 rounded px-[4px]">Дворец</Link>
                                        <Link href={""} className="hover:bg-white/70 rounded px-[4px]">Каменотес</Link>
                                        <Link href={""} className="hover:bg-white/70 rounded px-[4px]">Торговая палата</Link>
                                        <Link href={""} className="hover:bg-white/70 rounded px-[4px]">Сокровищница</Link>
                                        
                                    </div>
                                </div>
                            )}
                        <div className={`btn_4 w-[70px] h-[70px] bg-[#00B0F9] rounded-br-[100%] border-solid border-[1px] border-[#FFF] ${isHovered2.btn4 ? 'scale-[1.2]' : ''}`}
                            onMouseEnter={handleMouseEnterBtn4}
                            onMouseLeave={handleMouseLeaveBtn4}>
                                <span className="flex 
                                    justify-center 
                                    items-center 
                                    h-[100%] 
                                    -rotate-45
                                    
                                    text-black
                                    font-family: Kameron
                                    text-[10px]
                                    not-italic
                                    font-normal
                                    leading-normal
                                    text-center
                                    ">
                                    Инфраструктура
                                </span>
                        </div>
                    </div>
                </div>
                <div className="absolute
                    w-[60px]
                    h-[60px]
                    rounded-full
                    bg-[#FFF]
                    left-[50%]
                    top-[50%]
                    -translate-x-[50%]
                    -translate-y-[50%]
                    z-20
                    
                    hover:scale-[1.2]">

                </div>
            </div>
        </div>
    </div> 
    )
}

export {BuilderBtn};