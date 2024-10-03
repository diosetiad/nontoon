import { useState } from "react";
import useClickOutside from "@/Hooks/ClickOutside";
import Sidebar from "./SidebarLayout";
import Topbar from "./TopbarLayout";

export default function Authenticated({ children }) {
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
            <Topbar onHamburgerClick={triggerSidebar} />

            <Sidebar isOpen={sidebarOpen} onClose={sidebarTarget} />

            <div className="absolute top-[172px] z-0 w-full">
                <main className="laptop:ml-[250px] laptop:px-14 px-8 pb-14">
                    {children}
                </main>
            </div>
        </div>
    );
}
