import { BsBellFill, BsHouseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import SidebarLogo from "./sidebarlogo";
import SiderbarItem from "./sidebaritem";

const Sidebar = () => {
    const items = [
        {
            label:'Home',
            href:'/',
            icon:BsHouseFill
        },
        {
            label:'Notifications',
            href:'/notifications',
            icon:BsBellFill
        },
        {
            label:'Profile',
            href:'/users/123',
            icon:FaUser
        }
    ];
    return(
        <div className="col-span-1 h-full pr-1 md:pr-6">
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-[230px]">
                    <SidebarLogo/>
                    {items.map((item) => (
                        <SiderbarItem
                        key={item.href}
                        href={item.href}
                        label={item.label}
                        icon={item.icon}
                        />
                    )

                    )}

                </div>
            </div>
        </div>

    )
}

export default Sidebar;