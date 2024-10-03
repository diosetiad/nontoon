import NavLink from "@/Components/NavLink";
import { Menus, Others } from "@/Data/LinksData";

export default function Navbar() {
    return (
        <nav
            role="Sidebar navigation"
            className="mt-[59px] flex flex-col gap-[50px]"
        >
            <div>
                <h3 className="text-gray-1 mb-4">Menu</h3>

                <ul>
                    <li className="space-y-5">
                        {Menus.map((menu, index) => (
                            <NavLink
                                key={`${index}-${menu.text}`}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                method={menu.method}
                                active={menu.link && route().current(menu.link)}
                            />
                        ))}
                    </li>
                </ul>
            </div>

            <div>
                <h3 className="text-gray-1 mb-4">Others</h3>

                <ul>
                    <li className="space-y-5">
                        {Others.map((other, index) => (
                            <NavLink
                                key={`${index}-${other.text}`}
                                link={other.link}
                                icon={other.icon}
                                text={other.text}
                                method={other.method}
                                as={other.as}
                                active={
                                    other.link && route().current(other.link)
                                }
                            />
                        ))}
                    </li>
                </ul>
            </div>
        </nav>
    );
}
