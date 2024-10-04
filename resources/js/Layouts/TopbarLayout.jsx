import { useState } from "react";
import useClickOutside from "@/Hooks/ClickOutside";
import { Link } from "@inertiajs/react";

export default function Topbar({ name, onHamburgerClick }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownTarget = useClickOutside(() => setDropdownOpen(false));

    const triggerDropdown = () => {
        setDropdownOpen((prevState) => !prevState);
    };

    return (
        <header className="fixed left-0 top-0 z-10 w-full bg-white">
            <div className="flex items-center justify-between px-8 py-14 laptop:ml-[250px] laptop:px-14">
                <button
                    type="button"
                    className="block laptop:hidden"
                    onClick={onHamburgerClick}
                >
                    <img src="/icons/ic_hamburger.svg" alt="Hamburger icon" />
                </button>

                <div className="ml-auto flex items-center gap-4">
                    <div className="hidden text-sm md:block">
                        Hi, <span className="font-medium">{name}</span>
                    </div>

                    <div className="relative" ref={dropdownTarget}>
                        <button
                            type="button"
                            onClick={triggerDropdown}
                            className="h-[60px] w-[60px] rounded-full border-2 border-gray-2 p-[5px]"
                        >
                            <img
                                src="/images/avatar.png"
                                alt="Avatar"
                                width={50}
                                height={50}
                            />
                        </button>

                        {dropdownOpen && (
                            <nav
                                role="Topbar navigation"
                                className="absolute right-0 top-20 z-20 min-w-[140px] rounded-md border border-gray-2 bg-white text-sm"
                            >
                                <div className="block px-3 py-[13px] md:hidden">
                                    Hi,{" "}
                                    <span className="font-medium">{name}</span>
                                </div>

                                <ul>
                                    <li className="px-3 py-[13px] transition-all hover:bg-gray-2">
                                        <Link href="#!">Setting</Link>
                                    </li>
                                    <li className="px-3 py-[13px] transition-all hover:bg-gray-2">
                                        <Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
