import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const path = usePathname();

    return (
        <div className="w-full h-[100px] border-b-2 dark:border-[#747474] border-gray-300 flex items-center justify-between">
            <div className="pl-16 text-4xl">
                {path == "/dashboard"
                    ? "Models"
                    : path == "/dashboard/requests"
                    ? "Requests"
                    : path == "/dashboard/settings"
                    ? "Settings"
                    : path == "/dashboard/help"
                    ? "Help"
                    : path == "/dashboard/account"
                    ? "Account"
                    : "Default"}
            </div>
            <div className="pr-5 flex justify-center items-center">
                <Image
                    src={"/ProfilePic.png"}
                    alt="profile photo"
                    width={62}
                    height={62}
                />
                <span className="pl-2">Fernanda</span>
            </div>
        </div>
    );
};

export default NavBar;
