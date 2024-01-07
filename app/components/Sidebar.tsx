"use client"
import SideBarMenu from "@/app/helper/SidebarMenu"
import Link from "next/link"
import Image from "next/image"
import logo from "@/public/One-Piece-Logo.png"
import { useEffect,useState } from "react"
import { usePathname } from "next/navigation"

interface SideBarMenuType {
    id: number,
    title: string,
    icon: React.ReactNode,
    link: string
}
const Sidebar = () => {
    const path = usePathname()
    const [expanded, setExpanded] = useState(false);
    const handleMouseOver = () => {
        setExpanded(true);
      };
    
      const handleMouseOut = () => {
        setExpanded(false);
      };
    return <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={`h-[100vh] w-[var(--min-sidebar-width)] px-[var(--padding-sidebarIcon)] flex flex-col gap-4 bg-transparent fixed left-0 transition-all duration-1000 hover:w-[500px]`}>
        <div className="absolute left-0 top-3"><Image src={logo} height={50} alt="logo"/></div>
        <div className="flex flex-col justify-center items-start h-full gap-6">
            <>
            {SideBarMenu.map((item: SideBarMenuType) => (
            <Link key={item.id} href={item.link}>
                <div className={`flex gap-1 justify-center items-center cursor-pointer ${path.includes(item.title.toLowerCase()) ?"text-white" : "text-gray-400"} hover:scale-110 hover:translate-x-[7px] hover:text-white hover:shadow-lg`}>
                    <div>{item.icon}</div>
                    <div className={`text-2xl ${!expanded ? "hidden" : ""}`}>{item.title}</div>
                </div>
            </Link>
            ))}
            </> 
            
        </div>
    </div>
}

export default Sidebar;