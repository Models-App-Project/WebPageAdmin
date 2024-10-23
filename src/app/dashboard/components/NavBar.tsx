import Image from "next/image";

const NavBar = () => {
    return (
        <div className="w-full h-[100px] border-b-2 dark:border-[#747474] border-gray-300 flex items-center justify-between">
            <div className="pl-16 text-4xl">Models</div>
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
