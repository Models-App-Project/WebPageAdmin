import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={poppins.className}>
            <body>{children}</body>
        </html>
    );
}
