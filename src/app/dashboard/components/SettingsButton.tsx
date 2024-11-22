import Image from "next/image";

type ButtonType = "button" | "submit" | "reset";

interface IconThemes {
    dark: string; 
    light: string
}

/* Componente criado para abranger botões adicionais */

const SettingsButton = ({
    
    type = "button",
    children,
    onClick,
    srcs,
    theme
}: {
    type?: ButtonType;
    children?: React.ReactElement;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    srcs: IconThemes,
    theme: string
    
}) => {

    return (

        <button
        onClick={onClick}
        type={type}
        className={`w-full bg-white hover:bg-gradient-to-tr from-white to-neutral-200 p-5 border border-opacity-35 border-black rounded-2xl 
                    dark:bg-gradient-to-t dark:from-neutral-900 dark:to-neutral-700 dark:border-white dark:border-opacity-35`}>
            
            <div className="flex items-start gap-x-5">
                
                <div className="max-h-full py-1">
                    <Image src={theme == "dark" ? srcs.dark : srcs.light} width={18} height={18} alt=""/>
                </div>
                {children}
                <div className="max-h-full py-2">
                    <Image src={theme == "dark" ? "/darkSettingsArrow.png" : "/lightSettingsArrow.png"} width={10} height={18} alt=""/>
                </div>
            
            </div>
        </button>
    )
}

export default SettingsButton