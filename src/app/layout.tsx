import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import { ModeToggle } from "@/components/modeToggle";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Home } from "lucide-react";
import Providers from "@/components/Providers";
import { Account } from "@/components/Account";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={quicksand.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <Providers>
                        <nav className="fixed w-full h-20 flex items-center justify-center border-b border-primary m-0 px-4">
                            <div className="absolute left-4 flex gap-3 justify-between">
                                <Link href="/" className={buttonVariants({ variant: "outline", size: "icon" })}>
                                    <Home className="h-[1.2rem] w-[1.2rem]" />
                                </Link>
                                <Account />
                            </div>
                            <h1 className="text-primary font-extrabold text-3xl">
                                <span className="text-white text-2xl mr-1">d</span>Place
                            </h1>
                            <div className="absolute right-4">
                                <ModeToggle />
                            </div>
                        </nav>
                        <main className="flex flex-col items-center justify-center h-screen">{children}</main>
                    </Providers>
                </ThemeProvider>
            </body>
        </html>
    );
}
