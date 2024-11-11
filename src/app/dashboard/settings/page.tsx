"use client"

import { useSelector } from "react-redux";
import SettingsButton from "../components/SettingsButton";
import { Poppins } from "next/font/google";

const poppinsLight = Poppins({ weight: "300", subsets: ["latin"] });
const poppinsNormal = Poppins({ weight: "400", subsets: ["latin"] });

const SettingsPage = () => {

    const theme = useSelector(
        (state: {
            theme: {
                value: string;
            };
        }) => state.theme.value
    )

    return (
        /* Estilização do campo externo em volta dos botões */
        <div className="w-full h-full flex flex-col gap-y-10 p-10 text-black dark:text-white bg-white dark:bg-neutral-800">

        <SettingsButton srcs={{dark: "/darkSettingsTerms.png", light: "/lightSettingsTerms.png"}} theme={theme}>  

            <div className="grow max-h-full font-sans text-start">
                <div className={`text-xl ${poppinsLight.className}`}>Terms and Conditions</div>
                <div className={`text-base text-black text-opacity-50 dark:text-white dark:text-opacity-75 ${poppinsNormal.className}`}>
                    Rules and guidelines for using a service, detailing user rights and responsibilities in a legally binding agreement.
                </div>
            </div>

        </SettingsButton>

        <SettingsButton srcs={{dark: "/darkSettingsPrivacy.png", light: "/lightSettingsPrivacy.png"}} theme={theme}> 

            <div className="grow max-h-full font-sans text-start">
                <div className={`text-xl ${poppinsLight.className}`}>Privacy Policy</div>
                <div className={`text-base text-black text-opacity-50 dark:text-white dark:text-opacity-75 ${poppinsNormal.className}`}>
                    How we collect, use, and protect your personal information.
                </div>
            </div>
            
        </SettingsButton>

        </div>
    )
};

export default SettingsPage;
