export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}) {
    return (
        <label {...props} className={`mb-2 block ${className}`}>
            {value ? value : children}
        </label>
    );
}
