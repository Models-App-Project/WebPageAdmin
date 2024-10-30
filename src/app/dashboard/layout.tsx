"use client";
import { useSelector } from "react-redux";
import Image from "next/image";
import SideBarItems from "./components/SideBarItems";
import NavBar from "./components/NavBar";
import Link from "next/link";

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

    const menuItems = [
        {
            name: "Models",
            href: "/dashboard",
            lightIcon: "/lightModelsIcon.png",
            darkIcon: "/darkModelsIcon.png",
        },
        {
            name: "Requests",
            href: "/dashboard/requests",
            lightIcon: "/lightRequestIcon.png",
            darkIcon: "/darkRequestIcon.png",
        },
        {
            name: "Account",
            href: "/dashboard/account",
            lightIcon: "/lightProfileIcon.png",
            darkIcon: "/darkProfileIcon.png",
        },
    ];
    const supportItems = [
        {
            name: "Settings",
            href: "/dashboard/settings",
            lightIcon: "/lightSettingsIcon.png",
            darkIcon: "/darkSettingsIcon.png",
        },
        {
            name: "Help",
            href: "/dashboard/help",
            lightIcon: "/lightHelpIcon.png",
            darkIcon: "/darkHelpIcon.png",
        },
        {
            name: "Dark Mode",
            href: "",
            lightIcon: "/lightThemeIcon.png",
            darkIcon: "/darkThemeIcon.png",
        },
    ];

    return (
        <div
            className={`w-full h-screen bg-white ${
                theme == "dark" ? "dark" : ""
            } dark:bg-[#232323] flex dark:text-white`}
        >
            <div className="h-full w-[231px] border-r-2 p-2 dark:border-[#747474] border-gray-300 dark:bg-[#747474] dark:bg-opacity-20 flex flex-col justify-center">
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
                    <div className="p-2 w-full flex justify-center items-center font-thin">
                        MENU
                    </div>
                    <SideBarItems items={menuItems} theme={theme} />

                    <div className="bg-gray-300 h-[1px] w-full"></div>

                    <div className="p-2 w-full flex justify-center items-center font-thin">
                        SUPPORT
                    </div>
                    <SideBarItems items={supportItems} theme={theme} />
                    <Link href={"/#"}>
                        <div className="flex items-center justify-start p-2 m-1 pt-6">
                            <Image
                                src={
                                    theme == "dark"
                                        ? "/darkLogout.png"
                                        : "/lightLogout.png"
                                }
                                width={18}
                                height={16}
                                alt="LogoutIcon"
                            />
                            <span className="pl-2">Logout</span>
                        </div>
                    </Link>
                </div>

                <div>
                    <Link href={"/auth/login"} />
                </div>
            </div>
            <div className="flex flex-col w-full h-full">
                <NavBar />
                <div className="w-full h-full flex justify-center items-center">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
