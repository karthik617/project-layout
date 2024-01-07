"use client"
import SideBarMenu from "@/app/helper/SidebarMenu"
import Link from "next/link"
import Image from "next/image"
import logo from "@/public/One-Piece-Logo.png"
interface SideBarMenuType {
    id: number,
    title: string,
    icon: React.ReactNode,
    link: string
}
const Sidebar = () => {
    return <div className="h-[100vh] w-min-[var(--min-sidebar-width)] w-max px-[var(--padding-sidebarIcon)] flex flex-col gap-4 bg-transparent fixed left-0 relative">
        <div className="absolute left-0 top-3"><Image src={logo} height={50} alt="logo"/></div>
        <div className="flex flex-col justify-center items-center h-full gap-4">
            <>
            {SideBarMenu.map((item: SideBarMenuType) => (
            <Link key={item.id} href={item.link}>
                <div className="flex gap-1 justify-center items-center cursor-pointer">
                    <div>{item.icon}</div>
                </div>
            </Link>
            ))}
            </> 
            
        </div>
    </div>
}

export default Sidebar;