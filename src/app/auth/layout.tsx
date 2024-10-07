"use client";

import { toggleTheme } from "@/redux/theme";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

const AuthLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const theme = useSelector(
        (state: {
            theme: {
                value: string;
            };
        }) => state.theme.value
    );
    const dispatch = useDispatch();

    console.log(theme);

    return (
        <div
            className={`w-full h-screen flex overflow-hidden ${
                theme == "dark" ? "dark" : ""
            } dark:bg-[#232323]`}
        >
            <div className="w-[64%] flex flex-col items-center pt-3 ">
                <Image
                    src={`${theme == "dark" ? "/darkBrand.png" : "/brand.jpg"}`}
                    width={302}
                    height={105}
                    alt="Logo"
                />
                {children}
            </div>
            <div className="w-[36%] pt-8">
                <div className="w-full flex flex-col items-center justify-end pb-4">
                    <div className="w-full flex justify-end pr-16">
                        <button onClick={() => dispatch(toggleTheme())}>
                            <Image
                                src={`${
                                    theme == "dark"
                                        ? "/lightTheme.png"
                                        : "/darkTheme.png"
                                }`}
                                width={26}
                                height={26}
                                alt="Tema"
                            />
                        </button>
                    </div>
                </div>
                <div className="w-full flex justify-end">
                    <Image
                        src={`${
                            theme == "dark"
                                ? "/darkCamera.png"
                                : "/lightCamera.png"
                        }`}
                        alt="Logo"
                        width={800}
                        height={800}
                        className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
