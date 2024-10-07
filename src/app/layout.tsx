"use client";

import "./globals.css";
import { Poppins } from "next/font/google";
import store from "../redux/store";
import { Provider, useSelector } from "react-redux";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Provider store={store}>
            <html lang="en" className={`${poppins.className}`}>
                <body>{children}</body>
            </html>
        </Provider>
    );
}
