"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { useUser } from "@/contexts/userContext";
import { account } from "@/lib/appwrite";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const { signout, user } = useUser();
    return (
        <div className="flex flex-col gap-2">
            <h1>Hello {user ? user.name : "world"}</h1>
            {user !== null ? (
                <>
                    <Button variant="outline" onClick={() => signout()}>
                        Sign out
                    </Button>
                    <Button variant={"destructive"} onClick={() => console.log(user)}>
                        Console LOG USER
                    </Button>
                    <Button variant={"destructive"} onClick={async () => console.log(await account.getPrefs())}>
                        Console LOG USER PREFS
                    </Button>
                </>
            ) : (
                <Link className={buttonVariants()} href="/login">
                    Login
                </Link>
            )}
        </div>
    );
}
