import { Link } from "@inertiajs/react";
import ActiveSubscriptionCard from "@/Components/ActiveSubscriptionCard";
import Navbar from "@/Components/Navbar";

export default function Sidebar({ auth, isOpen, onClose }) {
    return (
        <aside
            className={`fixed left-0 top-0 z-10 h-full w-[250px] overflow-y-auto border-r border-[#F1F1F1] bg-white transition-transform laptop:block laptop:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            aria-label="Sidebar navigation"
            ref={onClose}
        >
            <div className="flex min-h-screen flex-col py-14 pl-8 text-sm">
                <div className="flex h-[60px] items-center">
                    <Link href={route("browse")}>
                        <img src="/images/nontoon.svg" alt="Nontoon logo" />
                    </Link>
                </div>

                <Navbar isAdmin={auth.isAdmin} />

                {auth.activePlan && (
                    <ActiveSubscriptionCard
                        isPremium={auth.activePlan.name === "Premium"}
                        name={auth.activePlan.name}
                        remainingActiveDays={
                            auth.activePlan.remainingActiveDays
                        }
                        activeDays={auth.activePlan.activeDays}
                    />
                )}
            </div>
        </aside>
    );
}
