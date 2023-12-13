import { HomeIcon } from "../icons";
import { SidebarItem } from "./sidebar-item";
import { SidebarStyles } from "./sidebar.styles";

export default function Sidebar () {
    const collapsed = false;
    return (
        <aside className="h-screen z-[202] sticky top-0">
            {collapsed ? (<div className={SidebarStyles.Overlay()}/>) : null}
            <div className={SidebarStyles({collapsed: collapsed})}>
                <div className={SidebarStyles.Header()}>
                    {/* <CompaniesDropdown /> */}
                </div>
                <div className="flex flex-col justify-between h-full">
                    <div className={SidebarStyles.Body()}>
                        <SidebarItem title="Home" icon={<HomeIcon />} isActive={true} href="/"/>
                    </div>
                </div>
            </div>
        </aside>
    );
}
