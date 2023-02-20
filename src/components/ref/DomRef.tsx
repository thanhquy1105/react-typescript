import { useEffect, useRef } from "react";

export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    );
};
