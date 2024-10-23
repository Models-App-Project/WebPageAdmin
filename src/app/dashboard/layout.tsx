"use client";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

const DashboardLayout = ({
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
    return (
        <div
            className={`w-full h-screen bg-white ${
                theme == "dark" ? "dark" : ""
            } dark:bg-[#232323] flex`}
        >
            <div className="h-full w-[231px] border-r-2 p-2 border-gray-300 dark:bg-[#747474] flex flex-col justify-center">
                <div className="pt-3 h-[61px] flex justify-center items-center">
                    <Image
                        priority={true}
                        src={`${
                            theme == "dark"
                                ? "/ligthSideBrand.png"
                                : "/darkSideBrand.png"
                        }`}
                        width={155}
                        height={61}
                        alt="brand"
                    />
                </div>
                <div className="h-full flex flex-col w-full pt-10 text-gray-400">
                    <div className="p-2">Menu</div>
                </div>
            </div>
            <div className="flex flex-col w-full h-full">
                <div className="w-full h-[100px] border-b-2 border-gray-300 flex justify-center items-center">
                    NavBar
                </div>
                <div className="w-full h-full flex justify-center items-center">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
