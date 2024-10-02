import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    {
        type = "text",
        className = "",
        variant = "primary",
        isError,
        isFocused = false,
        ...props
    },
    ref,
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                type={type}
                className={`w-full rounded-2xl border px-7 py-[13px] ${isError && "input-error"} input-${variant} ${className}`}
                ref={input}
            />
        </div>
    );
});
