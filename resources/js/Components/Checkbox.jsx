export default function Checkbox({
    className = "",
    checked = false,
    ...props
}) {
    return (
        <input
            {...props}
            type="checkbox"
            className={`rounded border-gray-300 text-alerange shadow-sm focus:ring-alerange ${className}`}
            defaultChecked={checked}
        />
    );
}
