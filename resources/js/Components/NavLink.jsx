import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    link,
    icon,
    text,
    method,
    as,
    ...props
}) {
    return (
        <Link
            {...props}
            href={link ? route(link) : null}
            className={`side-link ${active && "active"} ${className}`}
            method={method}
            as={as}
        >
            {icon} {text}
        </Link>
    );
}
