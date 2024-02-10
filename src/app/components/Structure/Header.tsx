"use client"
import { useState } from 'react';
import Link from "next/link";
import Icon from "../../components/SVG/Icon";


const Header = () => {
    const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
    let timerId: ReturnType<typeof setTimeout>; // Явное указание типа

    const showSubMenu = () => {
        if (timerId) clearTimeout(timerId); // Очистка таймера при наведении на элемент
        setIsSubMenuVisible(true);
    };

    const hideSubMenu = () => {
        timerId = setTimeout(() => {
            setIsSubMenuVisible(false);
        }, 250); // Задержка перед скрытием подменю
    };
    return (
        <header className="z-50 bg-[#82D2F3] sticky top-0">
            <div className="flex items-center mx-auto py-0 justify-between xl:h-[61px] md:h-[50px] h-[40px] xl:px-[52px] md:px-[40px] sm:px-[30px] px-[20px]">
                <div className="pr-[100px] xl:h-full h-[80%]">
                    <Icon.Technical.Logo height="100%"/>
                </div>
                <div className="hidden lg:flex items-center justify-between w-full">
                    <div className="flex items-center gap-[10px] text-black text-sm font-medium">
                        <div className="flex relative h-full items-center"><Link className="block p-2.5 hover:bg-white/30 hover:rounded-md" href="/">Главная</Link></div>
                        <div className="flex relative h-full items-center"><Link className="block p-2.5 hover:bg-white/30 hover:rounded-md" href="/Blog">Blog</Link></div>
                        <div className="flex relative h-full items-center" 
                            onMouseEnter={showSubMenu} 
                            onMouseLeave={hideSubMenu}>
                                <span className='block p-2.5 hover:bg-white/30 hover:rounded-md'>Калькуляторы</span>
                                {isSubMenuVisible && (
                                    <div className="flex flex-col absolute p-2.5 left-0 rounded-bl-md rounded-br-md xl:top-[50px] md:top-[45px] w-[200px] bg-[#E0ECBA] gap-1">
                                        <Link className="hover:text-[#82D2F3]" href="/Calculators/Builder">Строитель</Link>
                                        <Link className="hover:text-[#82D2F3]" href="/Calculators/ResourceDevelopment">Развитие ресурсов</Link>
                                        <Link className="hover:text-[#82D2F3]" href="/Calculators/Demolish">Сносим стены и строения</Link>
                                    </div>
                                )}
                        </div>
                        <div className="flex relative h-full items-center"><Link className="block p-2.5 hover:bg-white/30 hover:rounded-md" href="/Guides">Гайды</Link></div>
                        <div className="flex relative h-full items-center hidden"><Link className="block p-2.5 hover:bg-white/30 hover:rounded-md" href="/Reports">Логовница</Link></div>
                        <div className="flex relative h-full items-center"><Link className="block p-2.5 hover:bg-white/30 hover:rounded-md" href="/Wiki">Wiki</Link></div>
                    </div>
                    <div className="flex items-center gap-[40px]">
                        <div className="flex relative h-full items-center">
                            <Link className="flex items-center gap-1 p-1.5 text-black text-sm hover:bg-white/30 hover:rounded-md" href="/Language">
                                <Icon.Technical.Globe height="100%"/>
                                <span>RU</span>
                                <Icon.Technical.Ctrl size="18px"/>
                            </Link>
                        </div>
                        
                        <div className="flex relative h-full items-center">
                            <Link className="flex flex-col items-center text-xs p-1 hover:bg-white/30 hover:rounded-md" href="/Login">
                                <Icon.Technical.Helmet height="30px"/>
                                <span>Login</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <button className="inline-block lg:hidden">
                    <Icon.Technical.Menu size="30px"/>
                </button>
            </div>
        </header>
        
    )
}

export {Header};