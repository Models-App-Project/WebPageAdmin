import Link from "next/link";
import Image from "next/image";

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
    return (
        <div className="pb-12">
            {items.map((v) => (
                <div
                    className="p-2 rounded-xl m-1 dark:bg-[#736F6F] dark:text-white flex justify-start items-center"
                    key={v.href}
                >
                    <Image
                        className="w-4 h-4"
                        src={theme == "dark" ? v.darkIcon : v.lightIcon}
                        alt="Icon"
                        width={16}
                        height={16}
                    />
                    <Link className="pl-2" href={v.href}>
                        {v.name}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default SideBarItems;
