import { Link } from "@inertiajs/react";
import ActiveSubscription from "@/Components/ActiveSubscription";
import Navbar from "@/Components/Navbar";

export default function Sidebar({ isOpen, onClose }) {
    return (
        <aside
            className={`laptop:block laptop:translate-x-0 fixed left-0 top-0 z-10 h-full w-[250px] overflow-y-auto border-r border-[#F1F1F1] bg-white transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            aria-label="Sidebar navigation"
            ref={onClose}
        >
            <div className="flex min-h-screen flex-col py-14 pl-8 text-sm">
                <div className="flex h-[60px] items-center">
                    <Link href={route("browse")}>
                        <img src="/images/nontoon.svg" alt="Nontoon logo" />
                    </Link>
                </div>

                <Navbar />

                <ActiveSubscription isPremium />
            </div>
        </aside>
    );
}
