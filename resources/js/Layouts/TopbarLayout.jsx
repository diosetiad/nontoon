import { useState } from "react";
import useClickOutside from "@/Hooks/ClickOutside";
import { Link } from "@inertiajs/react";

export default function Topbar({ onHamburgerClick }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownTarget = useClickOutside(() => setDropdownOpen(false));

    const triggerDropdown = () => {
        setDropdownOpen((prevState) => !prevState);
    };

    return (
        <header className="fixed left-0 top-0 z-10 w-full bg-white">
            <div className="laptop:ml-[250px] laptop:px-14 flex items-center justify-between px-8 py-14">
                <button
                    type="button"
                    className="laptop:hidden block"
                    onClick={onHamburgerClick}
                >
                    <img src="/icons/ic_hamburger.svg" alt="Hamburger icon" />
                </button>

                <div className="ml-auto flex items-center gap-4">
                    <div className="hidden text-sm md:block">
                        Hi, <span className="font-medium">John Doe</span>
                    </div>

                    <div className="relative" ref={dropdownTarget}>
                        <button
                            type="button"
                            onClick={triggerDropdown}
                            className="border-gray-2 h-[60px] w-[60px] rounded-full border-2 p-[5px]"
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
                                className="border-gray-2 absolute right-0 top-20 z-20 min-w-[140px] rounded-md border bg-white text-sm"
                            >
                                <div className="block px-3 py-[13px] md:hidden">
                                    Hi,{" "}
                                    <span className="font-medium">
                                        John Doe
                                    </span>
                                </div>

                                <ul>
                                    <li className="hover:bg-gray-2 px-3 py-[13px] transition-all">
                                        <Link href="#!">Setting</Link>
                                    </li>
                                    <li className="hover:bg-gray-2 px-3 py-[13px] transition-all">
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
