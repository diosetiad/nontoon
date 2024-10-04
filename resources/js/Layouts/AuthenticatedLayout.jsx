import { useState } from "react";
import useClickOutside from "@/Hooks/ClickOutside";
import Sidebar from "./SidebarLayout";
import Topbar from "./TopbarLayout";

export default function Authenticated({ auth, children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarTarget = useClickOutside(() => setSidebarOpen(false));

    const triggerSidebar = () => {
        setSidebarOpen((prevState) => !prevState);

        if (!sidebarOpen) {
            sidebarTarget.current.scrollTop = 0;
        }
    };

    return (
        <div className="relative min-h-screen w-full">
            <Topbar onHamburgerClick={triggerSidebar} name={auth.user.name} />

            <Sidebar isOpen={sidebarOpen} onClose={sidebarTarget} auth={auth} />

            <div className="absolute top-[172px] z-0 w-full">
                <main className="px-8 pb-14 laptop:ml-[250px] laptop:px-14">
                    {children}
                </main>
            </div>
        </div>
    );
}
