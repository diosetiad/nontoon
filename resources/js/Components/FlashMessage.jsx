export default function FlashMessage({ className, message = "" }) {
    return (
        <span
            className={`mb-4 w-full rounded bg-green-100 p-4 text-sm font-medium text-green-700 ${className}`}
        >
            {message}
        </span>
    );
}
