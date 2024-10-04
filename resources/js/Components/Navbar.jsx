import NavLink from "@/Components/NavLink";
import { Menus, Others } from "@/Data/LinksData";

export default function Navbar({ isAdmin }) {
    return (
        <nav
            role="Sidebar navigation"
            className="mt-[59px] flex flex-col gap-[50px]"
        >
            <div>
                <h3 className="mb-4 text-gray-1">Menu</h3>

                <ul>
                    <li className="space-y-5">
                        {Menus.filter((menu) =>
                            menu.roles.includes(isAdmin ? "admin" : "user"),
                        ).map((menu, index) => (
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
                <h3 className="mb-4 text-gray-1">Others</h3>

                <ul>
                    <li className="space-y-5">
                        {Others.filter((menu) =>
                            menu.roles.includes(isAdmin ? "admin" : "user"),
                        ).map((other, index) => (
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
