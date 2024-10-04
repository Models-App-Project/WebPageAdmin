import Image from "next/image";

const AuthLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="w-full h-screen flex overflow-hidden">
            <div className="w-[64%] flex flex-col items-center pt-3">
                <Image src="/brand.jpg" width={302} height={105} alt="Logo" />
                {children}
            </div>
            <div className="w-[36%] pt-8">
                <div className="w-full flex flex-col items-center justify-end pb-4">
                    <div className="w-full flex justify-end pr-16">
                        <Image
                            src="/darktheme.png"
                            width={26}
                            height={26}
                            alt="Tema"
                        />
                    </div>
                </div>
                <div className="w-full flex justify-end">
                    <Image
                        src="/camera.png"
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
