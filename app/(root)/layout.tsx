import MobileNavbar from "@/components/MobileNavbar";
import SideBar from "@/components/SideBar";
import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const loggedIn = { firstName: "Sing", lastName: "JSM" };
    return (
        <main className="flex h-screen w-full font-inter">
            <SideBar user={loggedIn} />
            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image
                        src="/icons/logo.svg"
                        alt="menu icon"
                        width={30}
                        height={30}
                    />
                    <div>
                        <MobileNavbar user={loggedIn} />
                    </div>
                </div>
                {children}
            </div>
        </main>
    );
}
