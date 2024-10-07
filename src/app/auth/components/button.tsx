import React from "react";

type ButtonType = "button" | "submit" | "reset";

const Button = ({
    type = "button",
    className,
    children,
}: {
    type?: ButtonType;
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <button
            type={type}
            className={`w-full bg-black dark:bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-2xl ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
