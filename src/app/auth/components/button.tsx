import React from "react";

type ButtonType = "button" | "submit" | "reset";

const Button = ({
    type = "button",
    className,
    children,
    onClick,
}: {
    type?: ButtonType;
    className?: string;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`w-full bg-black dark:bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-2xl ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
