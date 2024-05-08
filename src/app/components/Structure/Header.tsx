"use client"
import Link from "next/link";
import Icon from "../../components/SVG/Icon";


const Header = () => {
    
    return (
        <header className="z-50 bg-[#82D2F3] sticky top-0">
            <div className="flex items-center mx-auto py-0 justify-between xl:h-[61px] md:h-[50px] h-[40px] xl:px-[52px] md:px-[40px] sm:px-[30px] px-[20px]
                            font-sans text-black text-sm font-medium">
                <div className="pr-[100px] xl:h-full h-[80%]">
                    <div className="flex relative h-full items-center"><Link className="block hover:bg-white/30 hover:rounded-md" href="/"><Icon.Technical.Logo height="100%"/></Link></div>
                </div>
                <div className="hidden lg:flex items-center justify-between w-full">
                    <div className="flex items-center gap-[50px]">
                        <div className="flex relative h-full items-center"><Link className="block p-2.5 hover:bg-white/30 hover:rounded-md hover:font-bold" href="/Blog">Blog</Link></div>
                        <div className="flex items-center gap-[20px]">
                            <div className="flex relative h-full items-center"><Link className="block p-2.5 hover:bg-white/30 hover:rounded-md hover:font-bold" href="/Calculators/Builder">Builder</Link></div>
                            <div className="flex relative h-full items-center"><Link className="block p-2.5 hover:bg-white/30 hover:rounded-md hover:font-bold" href="/">NPC</Link></div>
                            <div className="flex relative h-full items-center"><Link className="block p-2.5 hover:bg-white/30 hover:rounded-md hover:font-bold" href="/Calculators/Demolish">Demolish</Link></div>
                        </div>
                        
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
                            <Link className="flex flex-col items-center text-xs p-1 hover:bg-white/30 hover:rounded-md" href="/Registration">
                                <Icon.Technical.Helmet height="30px"/>
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