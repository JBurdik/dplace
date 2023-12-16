"use client";
import { useUser } from "@/contexts/userContext";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { LogIn, LogOut, User, UserCog } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";

export const Account = () => {
    const { user, signout } = useUser();
    if (user)
        return (
            <>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Button variant={"outline"} size={"icon"}>
                                <User className="h-[1.2rem] w-[1.2rem]" />
                            </Button>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex gap-2 cursor-pointer">
                            <UserCog className="h-[1.2rem] w-[1.2rem]" />
                            <span>Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => signout()} className="flex gap-2 cursor-pointer">
                            <LogOut className="h-[1.2rem] w-[1.2rem]" />
                            <span>Sign out</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </>
        );
    return (
        <>
            <Link href="/login" className={buttonVariants({ variant: "outline", size: "icon" })}>
                <LogIn className="h-[1.2rem] w-[1.2rem]" />
            </Link>
        </>
    );
};
