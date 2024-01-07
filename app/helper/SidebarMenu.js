import { HiMiniHome } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";


const SideBarMenu  = [
    {
        id:1, link:"/dashboard/home", title:"Home", icon: <HiMiniHome fontSize="26px"/>
    },
    {
        id:2, link:"/dashboard/profile", title:"Profile", icon: <CgProfile fontSize="26px"/>
    },
]


export default SideBarMenu