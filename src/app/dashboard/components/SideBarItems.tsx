import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SideBarItems = ({
    items,
    theme,
}: {
    items: {
        name: string;
        href: string;
        lightIcon: string;
        darkIcon: string;
    }[];
    theme: string;
}) => {
    const pathName = usePathname();

    return (
        <div className="pb-12">
            {items.map((v) => (
                <Link key={v.href} className="" href={v.href}>
                    <div
                        className={`rounded-xl m-1 p-2  ${
                            v.href == pathName
                                ? "bg-[#efefef] dark:bg-[#736F6F] "
                                : "bg-transparent"
                        } hover:bg-[#efefef]  dark:hover:bg-[#736F6F]  dark:text-white flex justify-start items-center`}
                        key={v.href}
                    >
                        <Image
                            className="w-4 h-4"
                            src={theme == "dark" ? v.darkIcon : v.lightIcon}
                            alt="Icon"
                            width={16}
                            height={16}
                        />

                        <span className="pl-2"> {v.name}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default SideBarItems;
